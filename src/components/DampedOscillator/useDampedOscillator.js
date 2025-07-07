// src/components/DampedOscillator/useDampedOscillator.js

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

export const useDampedOscillator = ({ A, m, k, b, initialCondition, v0_input }) => {
  const memoizedValues = useMemo(() => {
    const omega0 = Math.sqrt(k / m);
    const gamma = b / (2 * m);
    const discriminant = gamma * gamma - omega0 * omega0;
    let omega_d, phi, x0, v0;

    if (initialCondition === 'fromRest') {
      x0 = A;
      v0 = 0;
    } else {
      x0 = 0;
      v0 = v0_input;
    }

    if (discriminant < 0) {
      omega_d = Math.sqrt(-discriminant);
      if (x0 === 0 && omega_d !== 0) {
        phi = Math.atan( (v0 / omega_d) * -1 );
      } else if (x0 !== 0) {
        phi = Math.atan(-(v0 + gamma * x0) / (omega_d * x0));
      } else {
        phi = 0;
      }
    } else {
      omega_d = 0;
      phi = 0;
    }

    return { omega0, gamma, omega_d, phi, x0, v0, discriminant };
  }, [A, m, k, b, initialCondition, v0_input]);

  const [simulationTime, setSimulationTime] = useState(0);
  const [position, setPosition] = useState(memoizedValues.x0);
  const [isRunning, setIsRunning] = useState(true);
  const [runId, setRunId] = useState(0);

  // Usamos useRef para mantener los valores de la simulación sin causar re-renders
  const simState = useRef({ time: 0, position: memoizedValues.x0 });
  const animationFrameId = useRef(null);
  
  const restart = useCallback((pause = false, newRun = false) => {
    if (newRun) {
      simState.current = { time: 0, position: memoizedValues.x0 };
      setSimulationTime(0);
      setPosition(memoizedValues.x0);
      setRunId(id => id + 1);
    }
    setIsRunning(!pause);
  }, [memoizedValues]);

  useEffect(() => {
    const calculatePosition = (t) => {
      const { gamma, discriminant, x0, v0, omega_d } = memoizedValues;
      
      const envelope = A * Math.exp(-gamma * t);
      if (envelope < A / 1000) {
        setIsRunning(false);
        return simState.current.position;
      }

      if (discriminant < 0) {
        const C1 = x0;
        const C2 = (v0 + gamma * x0) / omega_d;
        return Math.exp(-gamma * t) * (C1 * Math.cos(omega_d * t) + C2 * Math.sin(omega_d * t));
      } else if (discriminant === 0) {
        return (x0 + (v0 + gamma * x0) * t) * Math.exp(-gamma * t);
      } else {
        const r1 = -gamma + Math.sqrt(discriminant);
        const r2 = -gamma - Math.sqrt(discriminant);
        const C1 = (v0 - r2 * x0) / (r1 - r2);
        const C2 = (r1 * x0 - v0) / (r1 - r2);
        return C1 * Math.exp(r1 * t) + C2 * Math.exp(r2 * t);
      }
    };

    const animate = () => {
      if (!isRunning) {
        cancelAnimationFrame(animationFrameId.current);
        return;
      }
      
      simState.current.time += 0.016;
      simState.current.position = calculatePosition(simState.current.time);
      
      setSimulationTime(simState.current.time);
      setPosition(simState.current.position);

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [isRunning, memoizedValues, A]);


  return { position, simulationTime, isRunning, restart, runId, phi: memoizedValues.phi };
};