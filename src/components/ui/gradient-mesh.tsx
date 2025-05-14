'use client';

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function GradientMesh({
  cellSize = 50,
  noiseIntensity = 0.5,
  speed = 0.0005,
  colorIntensity = 0.7,
  blurAmount = 60
}: {
  cellSize?: number;
  noiseIntensity?: number;
  speed?: number;
  colorIntensity?: number;
  blurAmount?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, systemTheme } = useTheme();

  // Get the effective theme (handle 'system' setting)
  const effectiveTheme = theme === 'system' ? systemTheme : theme;
  const isDarkTheme = effectiveTheme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Simplex noise function (simplified version)
    const noise = (x: number, y: number, z: number) => {
      // Simple noise function that returns a value between -1 and 1
      return Math.sin(x * 0.1 + z) * Math.cos(y * 0.1 + z) * 2;
    };

    // Define gradient colors based on theme
    const colors = isDarkTheme
      ? [
          { r: 30, g: 41, b: 59, a: 0.1 },   // slate-800
          { r: 59, g: 130, b: 246, a: 0.2 }, // blue-500
          { r: 139, g: 92, b: 246, a: 0.15 }, // purple-500
          { r: 20, g: 30, b: 49, a: 0.1 }    // darker slate
        ]
      : [
          { r: 241, g: 245, b: 249, a: 0.1 }, // slate-100
          { r: 59, g: 130, b: 246, a: 0.15 }, // blue-500
          { r: 139, g: 92, b: 246, a: 0.1 },  // purple-500
          { r: 248, g: 250, b: 252, a: 0.1 }  // slate-50
        ];

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += speed;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create a grid of points
      const cols = Math.ceil(canvas.width / cellSize) + 1;
      const rows = Math.ceil(canvas.height / cellSize) + 1;

      // Draw gradient mesh
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize;
          const y = j * cellSize;

          // Use noise to determine color mixing
          const noiseValue = (noise(x, y, time) + 1) / 2; // Normalize to 0-1

          // Mix colors based on noise
          const colorIndex = Math.floor(noiseValue * colors.length);
          const nextColorIndex = (colorIndex + 1) % colors.length;
          const colorMix = noiseValue * colors.length - colorIndex;

          // Ensure color indices are valid
          const safeColorIndex = Math.min(Math.max(0, colorIndex), colors.length - 1);
          const safeNextColorIndex = Math.min(Math.max(0, nextColorIndex), colors.length - 1);

          const color1 = colors[safeColorIndex];
          const color2 = colors[safeNextColorIndex];

          // Safely calculate color values with fallbacks
          const r = Math.floor((color1?.r || 0) * (1 - colorMix) + (color2?.r || 0) * colorMix);
          const g = Math.floor((color1?.g || 0) * (1 - colorMix) + (color2?.g || 0) * colorMix);
          const b = Math.floor((color1?.b || 0) * (1 - colorMix) + (color2?.b || 0) * colorMix);
          const a = ((color1?.a || 0) * (1 - colorMix) + (color2?.a || 0) * colorMix) * colorIntensity;

          // Draw a circle with radial gradient at each point
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, cellSize * 1.5);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, cellSize * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, [theme, systemTheme, cellSize, noiseIntensity, speed, colorIntensity, isDarkTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{
        pointerEvents: 'none',
        filter: `blur(${blurAmount}px)`,
        opacity: isDarkTheme ? 0.7 : 0.5
      } as React.CSSProperties}
    />
  );
}
