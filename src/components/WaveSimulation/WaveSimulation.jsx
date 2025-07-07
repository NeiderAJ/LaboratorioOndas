// src/components/WaveSimulation/WaveSimulation.jsx

import React, { useState, useRef } from 'react';
import { useWaveAnimation } from './useWaveAnimation';
import './WaveSimulation.css';

const Stepper = ({ label, value, onIncrease, onDecrease, min = 1 }) => (
  <div className="stepper-control">
    <span className="stepper-label">{label}: {value}</span>
    <div className="stepper-buttons">
      <button onClick={onDecrease} disabled={value <= min}>-</button>
      <button onClick={onIncrease}>+</button>
    </div>
  </div>
);

const WaveSimulation = () => {
  const [tension, setTension] = useState(10);
  const [density, setDensity] = useState(0.01);
  const [amplitude, setAmplitude] = useState(0.05);
  const [lengthMultiplier, setLengthMultiplier] = useState(1);
  const [n, setN] = useState(1);
  
  const canvasRef = useRef(null);
  // Obtenemos los nuevos controles desde el hook
  const { isRunning, setIsRunning, restartAnimation } = useWaveAnimation(canvasRef, { 
    tension, density, amplitude, lengthMultiplier, n 
  });

  const lengthOptions = [1, 2, 3, 4];

  return (
    <div className="simulation-wrapper">
      <div className="simulation-canvas-container">
        <canvas ref={canvasRef} width="800" height="400" className="simulation-canvas"></canvas>
        
        {/* --- PANEL DE BOTONES NUEVO --- */}
        <div className="playback-controls-container">
          <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Pausa</button>
          <button onClick={() => setIsRunning(true)} disabled={isRunning}>Continuar</button>
          <button onClick={restartAnimation}>Reiniciar</button>
        </div>
        
      </div>

      <div className="simulation-controls-grid">
        {/* ... El resto de los controles (sliders, etc.) no cambia ... */}
        <div className="control-group">
          <label htmlFor="tension">Tensión (T): {tension.toFixed(1)} N</label>
          <input type="range" id="tension" min="1" max="50" step="0.5" value={tension} onChange={(e) => setTension(parseFloat(e.target.value))} />
        </div>
        <div className="control-group">
          <label htmlFor="density">Densidad (μ): {density.toFixed(3)} kg/m</label>
          <input type="range" id="density" min="0.001" max="0.1" step="0.001" value={density} onChange={(e) => setDensity(parseFloat(e.target.value))} />
        </div>
        <div className="control-group">
          <label htmlFor="amplitude">Amplitud (A): {(amplitude * 100).toFixed(1)} cm</label>
          <input type="range" id="amplitude" min="0.01" max="0.1" step="0.005" value={amplitude} onChange={(e) => setAmplitude(parseFloat(e.target.value))} />
        </div>
        <div className="control-group discrete-controls">
          <div className="length-control">
            <span className="control-label">Longitud:</span>
            <div className="radio-group">
              {lengthOptions.map(opt => (
                <label key={opt}>
                  <input type="radio" name="length" value={opt} checked={lengthMultiplier === opt} onChange={() => setLengthMultiplier(opt)} />
                  {opt}L
                </label>
              ))}
            </div>
          </div>
          <Stepper 
            label="Armónico (n)"
            value={n}
            onIncrease={() => setN(n + 1)}
            onDecrease={() => setN(n - 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default WaveSimulation;