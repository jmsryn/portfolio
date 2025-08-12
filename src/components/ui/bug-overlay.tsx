'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion, TargetAndTransition, VariantLabels, Transition } from 'framer-motion';
import { Bug } from 'lucide-react';

type BugOverlayProps = {
  count?: number;
  zIndexClass?: string;
  colors?: string[];
};

type BugSpec = {
  topPct: number;
  leftPct: number;
  size: number; // pixels
  duration: number; // seconds
  delay: number; // seconds
  rotateRange: number; // degrees
  yRange: number; // px
  colorClass: string;
};

export function BugOverlay({
  count = 2,
  zIndexClass = 'z-20',
  colors = ['text-primary/30', 'text-accent/30', 'text-foreground/20'],
}: BugOverlayProps) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const bugs: BugSpec[] = useMemo(() => {
    // Generate deterministic-ish random values per load
    const specs: BugSpec[] = [];
    for (let i = 0; i < count; i++) {
      const topPct = 10 + Math.random() * 80; // avoid edges slightly
      const leftPct = 8 + Math.random() * 84;
      const size = 16 + Math.floor(Math.random() * 10); // 16-26px
      const duration = 8 + Math.random() * 6; // 8-14s
      const delay = Math.random() * 2.0;
      const rotateRange = 6 + Math.random() * 6; // 6-12deg
      const yRange = 4 + Math.random() * 6; // 4-10px
      const colorClass = colors[Math.floor(Math.random() * colors.length)] ?? colors[0];
      specs.push({ topPct, leftPct, size, duration, delay, rotateRange, yRange, colorClass });
    }
    return specs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  if (!mounted) return null;

  // Disable overlay motion entirely
  return null;
}

function BugFloat({
  topPct,
  leftPct,
  size,
  colorClass,
  initial,
  animate,
  transition,
}: {
  topPct: number;
  leftPct: number;
  size: number;
  colorClass: string;
  initial?: boolean | VariantLabels | TargetAndTransition;
  animate?: boolean | VariantLabels | TargetAndTransition;
  transition?: Transition;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  return (
    <motion.div
      className={`group absolute ${colorClass} pointer-events-auto cursor-help`}
      style={{ top: `${topPct}%`, left: `${leftPct}%` } as React.CSSProperties}
      initial={initial}
      animate={animate}
      transition={transition}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos(null)}
    >
      {/* Ensure the icon itself can capture hover events */}
      <div className="relative pointer-events-auto">
        <Bug style={{ width: size, height: size }} />
      </div>
      <div
        className="absolute px-2 py-1 rounded bg-background/90 border border-border text-[10px] text-foreground opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow-sm transition-opacity"
        style={
          pos
            ? ({ left: pos.x + 8, top: pos.y - 20 } as React.CSSProperties)
            : ({} as React.CSSProperties)
        }
      >
        🐞 Bug found
      </div>
    </motion.div>
  );
}

export default BugOverlay;


