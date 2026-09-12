'use client';

'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-secondary" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors active:scale-[0.96] cursor-pointer"
      aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className="t-icon-swap w-4 h-4" data-state={resolvedTheme === 'dark' ? 'b' : 'a'}>
        <span className="t-icon" data-icon="a">
          <Moon className="w-4 h-4" />
        </span>
        <span className="t-icon" data-icon="b">
          <Sun className="w-4 h-4" />
        </span>
      </span>
    </button>
  );
}
