// A minimal no-op substitute for framer-motion to disable animations globally
// Exposes Motion components that render plain elements and ignore animation props
// Only implements what the app uses: motion, AnimatePresence, useScroll, useReducedMotion

import React from 'react';

type MotionProps<T> = React.HTMLAttributes<T> & { [key: string]: any };

export const motion: any = new Proxy(
  {},
  {
    get: (_target, tag: string) => {
      const Tag: any = tag;
      // Return a component that ignores motion-specific props
      return React.forwardRef<HTMLElement, MotionProps<any>>(function NoMotion(
        { children, ...rest },
        ref
      ) {
        // Remove common motion props
        const { initial, animate, exit, whileHover, whileTap, transition, layoutId, layout, ...props } = rest as any;
        return <Tag ref={ref} {...props}>{children}</Tag>;
      });
    },
  }
);

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export function useScroll() {
  return { scrollYProgress: 0 } as any;
}

export function useReducedMotion() {
  return true; // indicate reduced motion
}

export const MotionConfig = ({ children }: { children: React.ReactNode }) => <>{children}</>;


