'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export function WaveBackground({
  waveCount = 3,
  baseColor = 'primary',
  opacity = 0.1,
  animationDuration = 20,
  blur = 60
}: {
  waveCount?: number;
  baseColor?: string;
  opacity?: number;
  animationDuration?: number;
  blur?: number;
}) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;
  // Generate waves
  const waves = Array.from({ length: waveCount }, (_, i) => {
    const index = i + 1;
    const delay = i * (animationDuration / waveCount / 2);
    
    // Adjust opacity based on wave index
    const waveOpacity = opacity * (1 - (i * 0.2));
    
    return (
      <motion.div
        key={`wave-${index}`}
        className={`absolute inset-x-0 bottom-0 ${baseColor === 'primary' ? 'bg-primary' : 'bg-accent'}`}
        style={{
          height: `${30 + i * 15}%`,
          opacity: shouldAnimate ? waveOpacity : 0,
          zIndex: -10 - i,
          borderTopLeftRadius: `${100 + i * 50}% ${50 + i * 20}%`,
          borderTopRightRadius: `${100 + i * 50}% ${50 + i * 20}%`,
          filter: `blur(${blur}px)`,
        }}
        initial={shouldAnimate ? { y: '100%' } : false}
        animate={shouldAnimate ? { y: ['100%', '80%', '100%'] } : undefined}
        transition={shouldAnimate ? {
          repeat: Infinity,
          duration: Math.max(8, animationDuration - i * 2),
          ease: 'easeInOut',
          delay,
        } : undefined}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {waves}
    </div>
  );
}
