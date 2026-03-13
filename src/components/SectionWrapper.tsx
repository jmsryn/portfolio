'use client';

import { ReactNode, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

export default function SectionWrapper({
  children,
  direction = 'up',
  delay = 0,
}: SectionWrapperProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const offset = directionMap[direction];

  return (
    <motion.section
      ref={ref}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, ...offset }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0, y: 0 }
      }
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.section>
  );
}
