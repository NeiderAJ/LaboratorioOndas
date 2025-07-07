// src/components/DampedOscillator/DampedOscillator.jsx

import React, { useState, useEffect } from 'react'; // 1. Importar useEffect
import { useDampedOscillator } from './useDampedOscillator';
import MassSpringSystem from './MassSpringSystem';
import PositionGraph from './PositionGraph';
import './DampedOscillator.css';

// Componente LabeledSlider (sin cambios)
const LabeledSlider = ({ label, value, unit, min, max, step, onChange, marks, decimals = 2 }) => (
  <div className="control-group">
    <label htmlFor={label}>{label}: {value.toFixed(decimals)} {unit}</label>
    <input
      type="range" id={label}
      min={min} max={max} step={step}
      value={value} onChange={onChange}
    />
    {marks && (
      <div className="range-marks">
        {marks.map(mark => <span key={mark.label} style={{ left: `${mark.position}%` }}>|<em>{mark.label}</em></span>)}
      </div>
    )}
  </div>
);


const DampedOscillator = () => {
  const [amplitude, setAmplitude] = useState(0.1);
  const [mass, setMass] = useState(1.0);
  const [k, setK] = useState(10.0);
  const [b, setB] = useState(0.5);
  const [initialCondition, setInitialCondition] = useState('fromRest');
  const [initialVelocity, setInitialVelocity] = useState(-1.0);
  const [holdGraph, setHoldGraph] = useState(false);

  const { 
    position, 
    simulationTime, 
    isRunning, 
    restart, 
    runId 
  } = useDampedOscillator({
    A: amplitude, m: mass, k, b, 
    initialCondition, v0_input: initialVelocity,
  });

  // --- NUEVO useEffect PARA MANEJAR EL REINICIO ---
  // 2. Este efecto se ejecuta SOLO cuando los parámetros físicos cambian.
  useEffect(() => {
    // Llama a la función de reinicio que nos da el hook.
    // El 'true' final significa que es un "newRun".
    restart(false, true); 
  }, [amplitude, mass, k, b, initialCondition, initialVelocity, restart]);


  const dampingMarks = [
    { label: 'Aire', position: 5 },
    { label: 'Agua', position: 50 },
    { label: 'Glicerina', position: 95 },
  ];

  return (
    <div className="damped-oscillator-wrapper">
      <div className="visualization-container">
        <div className="physics-display">
          <MassSpringSystem position={position} />
        </div>
        <div className="graph-display">
          <PositionGraph time={simulationTime} position={position} isRunning={isRunning} runId={runId} holdPrevious={holdGraph} />
        </div>
      </div>
      
      <div className="playback-controls">
        <button onClick={() => restart(true)} disabled={!isRunning}>Pausa</button>
        <button onClick={() => restart(false)} disabled={isRunning}>Continuar</button>
        <button onClick={() => restart(false, true)}>Reiniciar</button>
      </div>

      <div className="graph-hold-control">
        <label>
          <input 
            type="checkbox" 
            checked={holdGraph} 
            onChange={e => setHoldGraph(e.target.checked)}
          />
          Superponer gráficas para comparar
        </label>
      </div>
      
      <div className="controls-panel">
        <div className="controls-section">
          <h4>Parámetros del Sistema</h4>
          <LabeledSlider label="Amplitud (A)" value={amplitude} unit="m" min={0.001} max={0.2} step={0.01} onChange={e => setAmplitude(parseFloat(e.target.value))} />
          <LabeledSlider label="Masa (m)" value={mass} unit="kg" min={0.1} max={2} step={0.01} decimals={1} onChange={e => setMass(parseFloat(e.target.value))} />
          <LabeledSlider label="Constante del Resorte (k)" value={k} unit="N/m" min={1} max={1000} step={1} decimals={0} onChange={e => setK(parseFloat(e.target.value))} />
        </div>

        <div className="controls-section">
          <h4>Amortiguación y Fluido</h4>
          <LabeledSlider label="Coef. Amortiguamiento (b)" value={b} unit="kg/s" min={0} max={10} step={0.01} onChange={e => setB(parseFloat(e.target.value))} marks={dampingMarks} />
        </div>

        <div className="controls-section">
          <h4>Condiciones Iniciales</h4>
          <div className="radio-group-vertical">
            <label>
              <input type="radio" value="fromRest" checked={initialCondition === 'fromRest'} onChange={() => setInitialCondition('fromRest')} />
              Iniciaren Reposo: x₀ = A, v₀ = 0m/s
            </label>
            <label>
              <input type="radio" value="withImpulse" checked={initialCondition === 'withImpulse'} onChange={() => setInitialCondition('withImpulse')} />
              Iniciar con impulso (x₀ = 0)
            </label>
          </div>
          {initialCondition === 'withImpulse' && (
            <LabeledSlider label="Velocidad Inicial (v₀)" value={initialVelocity} unit="m/s" min={-1} max={1} step={0.01} onChange={e => setInitialVelocity(parseFloat(e.target.value))} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DampedOscillator;