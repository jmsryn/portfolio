'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Typewriter } from 'react-simple-typewriter';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/10 to-transparent blur-2xl z-[-1]" />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-primary">James Ryan Gaid</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Typewriter
          words={[
            'QA Engineer',
            'Automation Enthusiast',
            'Cybersecurity Nerd',
            'CI/CD Wizard',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8"
      >
      <a href="/resume.pdf" download>
        <Button size="lg" className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download CV
        </Button>
      </a>
      </motion.div>
    </section>
  );
}
