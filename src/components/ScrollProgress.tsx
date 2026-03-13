'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-32 w-1 bg-muted rounded-full overflow-hidden z-50 hidden md:block">
      <motion.div
        className="w-full bg-primary origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}
