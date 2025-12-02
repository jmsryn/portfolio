'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

const themes: { value: Theme; icon: React.ReactNode; label: string }[] = [
  { value: 'light', icon: <Sun className="w-4 h-4" />, label: 'Light' },
  { value: 'dark', icon: <Moon className="w-4 h-4" />, label: 'Dark' },
  { value: 'system', icon: <Monitor className="w-4 h-4" />, label: 'System' },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const currentTheme = themes.find(t => t.value === theme) || themes[2];

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-muted" />
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:bg-card/80 hover:border-primary/30 transition-all duration-300 flex items-center justify-center"
        whileHover={undefined}
        whileTap={undefined}
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={false}
            animate={undefined}
            exit={undefined}
            transition={undefined}
            className="text-foreground"
          >
            {currentTheme.icon}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-[90]" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Theme options */}
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-xl z-[100] min-w-[140px]"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2">
                {themes.map((themeOption) => (
                  <motion.button
                    key={themeOption.value}
                    onClick={() => handleThemeChange(themeOption.value)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      theme === themeOption.value
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                    initial={false}
                    animate={undefined}
                    transition={undefined}
                    whileHover={undefined}
                    whileTap={undefined}
                  >
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      {themeOption.icon}
                    </span>
                    <span>{themeOption.label}</span>
                    {theme === themeOption.value && <div className="ml-auto w-2 h-2 rounded-full bg-primary-foreground" />}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
