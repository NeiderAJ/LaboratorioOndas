// src/components/WaveSimulation/useWaveAnimation.js

import { useEffect, useState, useRef, useCallback } from 'react';

const BASE_L = 1.0;
const NODE_RADIUS = 5;

export const useWaveAnimation = (canvasRef, {
  tension,
  density,
  amplitude,
  lengthMultiplier,
  n,
}) => {
  // --- ESTADO Y REFERENCIAS NUEVAS ---
  const [isRunning, setIsRunning] = useState(true);
  const timeRef = useRef(0); // Usamos ref para el tiempo para evitar re-renders
  const animationFrameId = useRef(null);

  // --- FUNCIÓN DE REINICIO ---
  // Usamos useCallback para que esta función no se recree en cada render
  const restartAnimation = useCallback(() => {
    timeRef.current = 0; // Reseteamos el tiempo
    if (!isRunning) {
      setIsRunning(true); // Si estaba pausada, la reiniciamos corriendo
    }
  }, [isRunning]); // Depende de isRunning para saber si necesita activarla

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    const L = BASE_L * lengthMultiplier;
    const pixelsPerMeter = width / L;
    const v = Math.sqrt(tension / density);
    const f1 = v / (2 * L);
    const fn = n * f1;
    const omega_n = 2 * Math.PI * fn;
    const k_n = omega_n / v;

    const draw = () => {
      // Si no está corriendo, simplemente detenemos el bucle
      if (!isRunning) {
        cancelAnimationFrame(animationFrameId.current);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // ... (el código de dibujo de la cuerda y nodos es EXACTAMENTE EL MISMO) ...
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#61DAFB';
      for (let x_px = 0; x_px <= width; x_px++) {
        const x_m = x_px / pixelsPerMeter;
        const envelope = 2 * amplitude * Math.sin(k_n * x_m);
        const temporalOscillation = Math.cos(omega_n * timeRef.current);
        const y_m = envelope * temporalOscillation;
        const y_px = height / 2 - y_m * pixelsPerMeter;
        if (x_px === 0) ctx.moveTo(x_px, y_px);
        else ctx.lineTo(x_px, y_px);
      }
      ctx.stroke();

      ctx.fillStyle = '#FFD700';
      for (let i = 0; i <= n; i++) {
        const node_x_m = i * (L / n);
        const node_x_px = node_x_m * pixelsPerMeter;
        ctx.beginPath();
        ctx.arc(node_x_px, height / 2, NODE_RADIUS, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.fillStyle = 'white';
      ctx.font = '16px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`v = ${v.toFixed(2)} m/s`, 15, 25);
      ctx.fillText(`f_${n} = ${fn.toFixed(2)} Hz`, 15, 50);

      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.fillText('Simulación de Onda Estacionaria', width / 2, 35);
      
      timeRef.current += 0.01;
      animationFrameId.current = requestAnimationFrame(draw);
    };
    
    // Iniciamos la animación si está en estado "running"
    if (isRunning) {
        draw();
    }

    return () => cancelAnimationFrame(animationFrameId.current);

  }, [canvasRef, tension, density, amplitude, lengthMultiplier, n, isRunning]); // Añadimos isRunning a las dependencias

  // Exponemos el estado y las funciones de control
  return { isRunning, setIsRunning, restartAnimation };
};