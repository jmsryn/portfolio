'use client';

import { useEffect, useRef } from 'react';

export type MascotMood = 'idle' | 'thinking' | 'happy';

/* "Tile", the portfolio guide: one of the hero's quality-field tiles with eyes,
   a status antenna and an inspector's magnifier. Colors come from the theme, so it
   inverts cleanly on the dark launcher chip in both light and dark mode. */
export default function ChatMascot({ mood = 'idle', size = 32, track = true }: { mood?: MascotMood; size?: number; track?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);

  // Eyes glance toward the pointer, for precise pointers only.
  useEffect(() => {
    if (!track) return;
    if (!window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (!rect.width) return;
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        const distance = Math.hypot(dx, dy) || 1;
        const reach = Math.min(1, distance / 220);
        el.style.setProperty('--lx', `${((dx / distance) * reach * 2.4).toFixed(2)}px`);
        el.style.setProperty('--ly', `${((dy / distance) * reach * 1.8).toFixed(2)}px`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [track]);

  return (
    <svg ref={ref} className={`mascot is-${mood}`} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <g className="mascot-bob">
        <line x1="23" y1="11" x2="23" y2="6" className="mascot-stalk" />
        <circle cx="23" cy="4.6" r="2.3" className="mascot-bulb" />
        <rect x="8" y="14" width="30" height="27" rx="8" className="mascot-shade" />
        <rect x="8" y="10" width="30" height="27" rx="8" className="mascot-body" />
        <g className="mascot-look">
          <g className="mascot-eyes">
            <ellipse cx="18" cy="23" rx="2.5" ry="3.1" className="mascot-eye" />
            <ellipse cx="28" cy="23" rx="2.5" ry="3.1" className="mascot-eye" />
          </g>
          <path d="M15.4 24.2 q2.6 -3.4 5.2 0 M25.4 24.2 q2.6 -3.4 5.2 0" className="mascot-smile" />
        </g>
        <g className="mascot-lens">
          <circle cx="37.5" cy="33" r="5.2" className="mascot-glass" />
          <line x1="41.3" y1="36.8" x2="45" y2="40.5" className="mascot-handle" />
        </g>
      </g>
    </svg>
  );
}
