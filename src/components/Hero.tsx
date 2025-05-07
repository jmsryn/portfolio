'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { BackgroundSwitcher } from '@/components/ui/background-switcher';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Background switcher with multiple options */}
      <BackgroundSwitcher />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="font-mono text-green-600 dark:text-green-400 text-sm mb-3 flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ➜ ~ <span className="font-semibold">jamesgaid@dev</span>
        </motion.h1>

        {/* Name with gradient text */}
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {"{James Ryan Gaid}"}
        </motion.h2>

        {/* Roles with typewriter effect */}
        <motion.p
          className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          QA Engineer • Automation Specialist • Security Enthusiast
          <span className="inline-block w-[5px] h-[1em] bg-gray-900 dark:bg-white animate-blink align-middle ml-1"></span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.a
            href="/files/James_Ryan_Gaid_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-mono transition-all duration-300
                      text-white bg-gradient-to-br from-[#1e293b] to-[#334155]
                      hover:from-[#334155] hover:to-[#475569]
                      border border-[#475569] shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4 text-teal-400" />
            ./Download_CV.pdf
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-mono transition-all duration-300
                      text-primary bg-primary/10 hover:bg-primary/20
                      border border-primary/20 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            ./Contact_Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <div className="w-5 h-9 rounded-full border-2 border-muted-foreground flex justify-center pt-1">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-muted-foreground"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
