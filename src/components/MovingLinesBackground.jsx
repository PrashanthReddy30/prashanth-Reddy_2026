import React, { useEffect, useRef } from 'react';

// MovingLinesBackground renders a full‑screen canvas with subtle animated diagonal lines.
// The effect is lightweight and runs at 60fps using requestAnimationFrame.
// Lines are drawn with a semi‑transparent stroke to blend nicely with a dark theme.

const MovingLinesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const setSize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Configuration for the lines
    const lineCount = 60; // number of lines across the screen
    const speed = 0.6; // vertical speed (px per frame)
    const lineLength = 120; // length of each line segment
    const angle = Math.PI / 4; // 45° diagonal
    const spacing = Math.max(window.innerWidth, window.innerHeight) / lineCount;

    // Pre‑compute line positions
    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      const offset = i * spacing;
      lines.push({ x: offset, y: -lineLength });
    }

    let animationId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(0, 163, 255, 0.08)'; // subtle cyan glow
      ctx.lineWidth = 1;

      lines.forEach((line) => {
        const startX = line.x;
        const startY = line.y;
        const endX = startX + lineLength * Math.cos(angle);
        const endY = startY + lineLength * Math.sin(angle);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        // Move line downwards
        line.y += speed;
        // Reset when it goes off‑screen
        if (line.y - lineLength > window.innerHeight) {
          line.y = -lineLength;
        }
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
};

export default MovingLinesBackground;
