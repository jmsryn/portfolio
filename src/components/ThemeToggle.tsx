'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full border border-border hover:bg-accent/10 transition-colors relative overflow-hidden"
      aria-label="Toggle Theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative z-10"
      >
        {theme === 'dark' ?
          <Sun className="w-5 h-5 text-yellow-400" /> :
          <Moon className="w-5 h-5 text-indigo-400" />
        }
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-yellow-100/30 to-yellow-300/30 dark:from-indigo-500/30 dark:to-purple-500/30"
        initial={false}
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
}
