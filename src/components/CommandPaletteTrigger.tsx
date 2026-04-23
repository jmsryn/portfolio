'use client';

import { useEffect, useState } from 'react';
import { Command } from 'lucide-react';

export default function CommandPaletteTrigger() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform));
  }, []);

  const open = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      metaKey: isMac,
      ctrlKey: !isMac,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      type="button"
      onClick={open}
      className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-border bg-card/90 backdrop-blur text-muted-foreground hover:text-foreground hover:bg-card transition-colors shadow-sm"
      aria-label="Open command palette"
    >
      <Command className="w-3 h-3" />
      <span className="font-mono text-[10px]">
        <kbd className="text-foreground">{isMac ? '⌘' : 'Ctrl'}</kbd>
        <span className="opacity-50"> + </span>
        <kbd className="text-foreground">K</kbd>
      </span>
    </button>
  );
}
