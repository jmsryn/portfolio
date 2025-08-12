'use client';

import { motion } from 'framer-motion';

export default function SectionDivider({ variant = 'simple' }) {
  if (variant === 'gradient') {
    return (
      <div className="relative h-24 my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return null;
  }

  // Default simple divider
  return (
    <div className="h-[1px] w-full my-16 bg-gradient-to-r from-transparent via-muted to-transparent" />
  );
}