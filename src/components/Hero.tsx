'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/10 to-transparent blur-2xl z-[-1]" />
      <motion.h1
        className="font-mono text-green-600 dark:text-green-400 text-sm mb-3 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ➜ ~ <span className="font-semibold">jamesgaid@dev</span>
      </motion.h1>

      {/* Name */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        James Ryan Gaid
      </motion.h2>

      {/* Roles */}
      <motion.p
        className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        QA Engineer • Automation Specialist • Security Enthusiast
        <span className="inline-block w-[5px] h-[1em] bg-gray-900 dark:bg-white animate-blink align-middle ml-1"></span>
      </motion.p>

      <motion.a
        href="/path-to-your-cv.pdf"
        download
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-mono transition-all duration-300
                  text-white bg-gradient-to-br from-[#1e293b] to-[#334155] 
                  hover:from-[#334155] hover:to-[#475569] 
                  border border-[#475569] shadow-md hover:shadow-lg transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download className="w-4 h-4 text-teal-400" />
        ./Download_CV.pdf
      </motion.a>
    </section>
  );
}
