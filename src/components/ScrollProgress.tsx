'use client';

import { motion, useScroll, useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      style={reduceMotion ? undefined : { scaleX: scrollYProgress }}
      animate={reduceMotion ? { opacity: 0 } : undefined}
    />
  );
}
