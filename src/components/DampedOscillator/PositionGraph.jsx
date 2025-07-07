// src/components/DampedOscillator/PositionGraph.jsx

import React, { useRef, useEffect } from 'react';

const COLORS = ['#61DAFB', '#FF6B6B', '#4ECDC4', '#FFE66D', '#F7B267'];

const PositionGraph = ({ time, position, isRunning, runId, holdPrevious }) => {
  const canvasRef = useRef(null);
  const pathsRef = useRef({}); // Usamos useRef en lugar de useState para los paths

  const drawAxes = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;
    
    // Eje X (tiempo)
    ctx.beginPath();
    ctx.moveTo(0, ctx.canvas.height / 2);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
    ctx.stroke();

    // Eje Y (posición)
    ctx.beginPath();
    ctx.moveTo(20, 0);
    ctx.lineTo(20, ctx.canvas.height);
    ctx.stroke();

    // --- CÓDIGO NUEVO A AÑADIR ---
    // Etiquetas de los ejes
    ctx.fillStyle = '#555';
    ctx.font = '19px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('t (s)', ctx.canvas.width / 2+100, ctx.canvas.height / 2 + 40);
    
    ctx.save(); // Guardamos el estado del contexto
    ctx.translate(10, ctx.canvas.height / 2); // Movemos el origen y rotamos para el eje Y
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('x (m)', 100, 0);
    ctx.restore(); // Restauramos el estado del contexto
};

  // Efecto para reiniciar la gráfica
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (!holdPrevious) {
      pathsRef.current = {}; // Si no se mantienen, borramos todos los paths
    }
    drawAxes(ctx); // Siempre redibujamos los ejes
    // Al redibujar, los paths existentes se pintarán en el siguiente efecto
  }, [runId, holdPrevious]);

  // Efecto para dibujar
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Añadimos el nuevo punto al path actual
    if (isRunning) {
      if (!pathsRef.current[runId]) {
        pathsRef.current[runId] = { color: COLORS[Object.keys(pathsRef.current).length % COLORS.length], points: [] };
      }
      pathsRef.current[runId].points.push({ time, position });
    }
    
    // Redibujamos todo el canvas para evitar artefactos
    drawAxes(ctx);
    Object.values(pathsRef.current).forEach(pathData => {
      if (pathData.points.length < 2) return;

      ctx.beginPath();
      ctx.strokeStyle = pathData.color;
      ctx.lineWidth = 2;
      
      pathData.points.forEach((point, pointIndex) => {
        const x = 20 + point.time * 40;
        const y = (ctx.canvas.height / 2) - (point.position * 500); // Ajuste de escala
        if (pointIndex === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });

  }, [time, position, isRunning, runId]); // Eliminamos 'paths' de las dependencias

  return <canvas ref={canvasRef} width="400" height="300" className="graph-canvas" />;
};

export default PositionGraph;