'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GradientMesh } from './gradient-mesh';
import { WaveBackground } from './wave-background';
import { Grid, Waves } from 'lucide-react';

type BackgroundType = 'gradient' | 'waves';

export function BackgroundSwitcher() {
  const [activeBackground, setActiveBackground] = useState<BackgroundType>('waves');
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const backgrounds = {
    gradient: (
      <GradientMesh
        cellSize={70}
        noiseIntensity={0.5}
        speed={0.0005}
        colorIntensity={0.7}
        blurAmount={60}
      />
    ),
    waves: (
      <WaveBackground
        waveCount={3}
        baseColor="primary"
        opacity={0.1}
        animationDuration={20}
        blur={60}
      />
    )
  };

  const icons = {
    gradient: <Grid size={16} />,
    waves: <Waves size={16} />
  };

  const labels = {
    gradient: 'Gradient',
    waves: 'Waves'
  };

  return (
    <>
      {/* Current background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBackground}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 -z-10"
        >
          {backgrounds[activeBackground]}
        </motion.div>
      </AnimatePresence>

      {/* Background switcher UI */}
      <div className="fixed bottom-4 right-4 z-50">
        <motion.button
          onClick={toggleOpen}
          className="p-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {icons[activeBackground]}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-12 right-0 bg-background/90 backdrop-blur-md shadow-lg rounded-lg p-2 border border-border"
            >
              <div className="flex flex-col gap-1">
                {(Object.keys(backgrounds) as BackgroundType[]).map((type) => (
                  <motion.button
                    key={type}
                    onClick={() => {
                      setActiveBackground(type);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                      activeBackground === type
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {icons[type]}
                    <span>{labels[type]}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
