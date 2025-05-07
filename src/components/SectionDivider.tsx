'use client';

import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'simple' }) {
  if (variant === 'gradient') {
    return (
      <div className="relative h-24 my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className="flex justify-center gap-1 my-16">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-muted-foreground/50"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
    );
  }

  // Default simple divider
  return (
    <div className="h-[1px] w-full my-16 bg-gradient-to-r from-transparent via-muted to-transparent" />
  );
}