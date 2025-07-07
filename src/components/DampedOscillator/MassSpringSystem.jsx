import React, { useRef, useEffect } from 'react';

// --- Funciones de Ayuda para el Dibujo ---

// Dibuja el resorte
const drawSpring = (ctx, startY, endY, width, coils, coilWidth) => {
  const coilHeight = (endY - startY) / coils;
  ctx.beginPath();
  ctx.moveTo(width / 2, startY);
  for (let i = 0; i < coils; i++) {
    const y = startY + i * coilHeight;
    const xOffset = (i % 2 === 0 ? 1 : -1) * coilWidth;
    ctx.lineTo(width / 2 + xOffset, y + coilHeight / 2);
  }
  ctx.lineTo(width / 2, endY);
  ctx.stroke();
};

// --- Componente Principal ---

const MassSpringSystem = ({ position }) => {
  const canvasRef = useRef(null);

  // En MassSpringSystem.jsx
const surfaceWavesRef = useRef([]);
const prevPositionRef = useRef(position);


//useEffect 
useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // --- Parámetros de Dibujo (sin cambios) ---
    const centerX = width / 2;
    const supportY = 40;
    const supportHeight = 20;
    const equilibriumY = height / 2;
    const massRadius = 25;
    const springCoils = 15;
    const springWidth = 20;
    const fluidLevelY = height * 0.65; // Renombrado para claridad
    const beakerWidth = 200;
    const beakerHeight = height * 0.4;
    const maxVisualAmplitude = beakerHeight * 0.4;
    const visualEquilibriumY = fluidLevelY + beakerHeight / 2;
    const massY = visualEquilibriumY + position * (maxVisualAmplitude / 0.1);
    const springEndY = massY - massRadius;

    // --- LÓGICA DE LAS ONDAS DE SUPERFICIE (NUEVO) ---
    const massBottomY = massY + massRadius;
    const massTopY = massY - massRadius;
    const prevMassBottomY = visualEquilibriumY + prevPositionRef.current * (maxVisualAmplitude / 0.1) + massRadius;

    // Detectar si la masa acaba de entrar o salir del agua
    const crossedSurface = (prevMassBottomY < fluidLevelY && massBottomY >= fluidLevelY) || // Entrando
                           (prevMassBottomY >= fluidLevelY && massBottomY < fluidLevelY);   // Saliendo

    if (crossedSurface) {
      const speed = Math.abs(position - prevPositionRef.current) / 0.016; // Velocidad aproximada
      surfaceWavesRef.current.push({
        createdAt: Date.now(),
        amplitude: Math.min(speed * 40, 15), // Amplitud inicial basada en la velocidad
        x: centerX, // La onda se origina en el centro
      });
    }
    prevPositionRef.current = position;

    // Actualizar y filtrar las ondas existentes
    const now = Date.now();
    surfaceWavesRef.current = surfaceWavesRef.current.filter(wave => now - wave.createdAt < 2000); // Las ondas duran 2 segundos

    // --- Limpiar el Canvas ---
    ctx.clearRect(0, 0, width, height);

    // --- Dibujar el Recipiente ---
    ctx.strokeStyle = '#bdc3c7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - beakerWidth / 2, fluidLevelY);
    ctx.lineTo(centerX - beakerWidth / 2, fluidLevelY + beakerHeight);
    ctx.lineTo(centerX + beakerWidth / 2, fluidLevelY + beakerHeight);
    ctx.lineTo(centerX + beakerWidth / 2, fluidLevelY);
    ctx.stroke();

   // --- Dibujar el Fluido con Superficie Ondulada (MODIFICADO Y MEJORADO) ---
const wavePath = new Path2D(); // Usamos un Path2D para poder rellenar y bordear

wavePath.moveTo(centerX - beakerWidth / 2, fluidLevelY + beakerHeight);
wavePath.lineTo(centerX - beakerWidth / 2, fluidLevelY);

// Almacenamos los puntos de la superficie
const surfacePoints = [];
for (let x = centerX - beakerWidth / 2; x <= centerX + beakerWidth / 2; x++) {
  let surfaceY = fluidLevelY;
  surfaceWavesRef.current.forEach(wave => {
    const timeSinceCreation = (now - wave.createdAt) / 1000;
    const distanceFromOrigin = Math.abs(x - wave.x);
    
    if (distanceFromOrigin < timeSinceCreation * 100) {
        const waveDecay = 1 - (timeSinceCreation / 2);
        const currentAmplitude = wave.amplitude * waveDecay;
        
        // Reducimos la longitud de onda para hacerlas más visibles
        const waveLength = 10; 
        surfaceY += Math.sin((distanceFromOrigin / waveLength - timeSinceCreation * 3) * Math.PI * 2) * currentAmplitude;
    }
  });
  surfacePoints.push({x, y: surfaceY});
  wavePath.lineTo(x, surfaceY);
}

wavePath.lineTo(centerX + beakerWidth / 2, fluidLevelY + beakerHeight);
wavePath.closePath();

// Rellenamos el fluido
ctx.fillStyle = 'rgba(173, 216, 230, 0.5)';
ctx.fill(wavePath);

// --- ¡AQUÍ ESTÁ LA MEJORA VISUAL! ---
// Dibujamos un borde oscuro solo en la superficie
ctx.beginPath();
surfacePoints.forEach((point, index) => {
    if (index === 0) {
        ctx.moveTo(point.x, point.y);
    } else {
        ctx.lineTo(point.x, point.y);
    }
});
ctx.strokeStyle = 'rgba(0, 80, 120, 0.6)'; // Un azul oscuro y semitransparente
ctx.lineWidth = 2.5;
ctx.stroke();
    // --- Dibujar Soporte, Resorte y Masa (sin cambios) ---
    ctx.fillStyle = '#7f8c8d';
    ctx.fillRect(centerX - 80, supportY - supportHeight, 160, supportHeight);
    
    ctx.strokeStyle = '#95a5a6';
    ctx.lineWidth = 2;
    drawSpring(ctx, supportY, springEndY, width, springCoils, springWidth);

    const gradient = ctx.createRadialGradient(centerX - massRadius * 0.2, massY - massRadius * 0.2, massRadius * 0.1, centerX, massY, massRadius);
    gradient.addColorStop(0, '#f1c40f');
    gradient.addColorStop(0.7, '#e67e22');
    gradient.addColorStop(1, '#d35400');
    
    ctx.beginPath();
    ctx.arc(centerX, massY, massRadius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.strokeStyle = '#a85a13';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // --- Dibujar Etiquetas (sin cambios) ---
    ctx.fillStyle = '#34495e';
    ctx.font = '16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Resorte de', centerX + springWidth + 15, equilibriumY - 80);
    ctx.fillText('constante k', centerX + springWidth + 15, equilibriumY - 60);
    ctx.textAlign = 'right';
    ctx.fillText('Fluido, b', centerX - beakerWidth / 2 +70, fluidLevelY + 30);
    ctx.fillStyle = 'white';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('m', centerX, massY);

  }, [position]);


//fin de useEffect

  

  return <canvas ref={canvasRef} width="300" height="400" className="physics-canvas" />;
};

export default MassSpringSystem;