'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

export default function Education() {
  return (
    <SectionWrapper>
    <section
      id="education"
      className="py-20 px-4 max-w-3xl mx-auto"
    >
      <div className="mb-12">
        <motion.div
          className="font-mono text-lg text-green-600 dark:text-green-400 mb-4 flex items-center justify-center gap-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ➜ ~ <span className="text-gray-900 dark:text-white">educations</span>
          <span className="w-[1px] h-5 bg-gray-900 dark:bg-white animate-blink"></span>
        </motion.div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Education
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative border-l border-muted pl-6"
      >
        <div className="absolute left-[-0.4rem] top-2 w-3 h-3 bg-primary rounded-full" />
        <h3 className="text-xl font-semibold">
          B.S. Information Technology
        </h3>
        <p className="text-sm text-muted-foreground">
            University of Science and Technology of Southern Philippines • 2020 – 2024
        </p>
        <p className="mt-2 text-muted-foreground">
          Focused on Software Engineering, QA practices, and participated in competitive programming and coding competitions.
        </p>
      </motion.div>
    </section>
    </SectionWrapper>
  );
}
