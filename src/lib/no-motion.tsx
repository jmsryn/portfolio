// A minimal no-op substitute for framer-motion to disable animations globally
// Exposes Motion components that render plain elements and ignore animation props
// Only implements what the app uses: motion, AnimatePresence, useScroll, useReducedMotion

import React from 'react';

type MotionProps<T extends HTMLElement> = React.HTMLAttributes<T> & Record<string, unknown>;

type NoMotionComponent = React.ForwardRefExoticComponent<
  MotionProps<HTMLElement> & React.RefAttributes<HTMLElement>
>;

export const motion: Record<string, NoMotionComponent> = new Proxy(
  {},
  {
    get: (_target, tag: string) => {
      const Tag = tag as React.ElementType;
      return React.forwardRef<HTMLElement, MotionProps<HTMLElement>>(function NoMotion(
        { children, ...rest },
        ref
      ) {
        const props = rest as Record<string, unknown>;
        return React.createElement(Tag, { ref, ...(props as object) }, children as React.ReactNode);
      });
    },
  }
) as Record<string, NoMotionComponent>;

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export function useScroll(): { scrollYProgress: number } {
  return { scrollYProgress: 0 };
}

export function useReducedMotion(): boolean {
  return true; // indicate reduced motion
}

export const MotionConfig = ({ children }: { children: React.ReactNode }) => <>{children}</>;


