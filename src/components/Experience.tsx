'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const experiences = [
  {
    title: 'Quality Assurance Engineer',
    company: 'Theoria Medical',
    period: 'June 2023 – Present',
    description:
      'Leading test automation efforts and maintaining CI/CD pipelines while executing API, performance, and penetration tests.',
  },
  {
    title: 'Lead Quality Assurance Engineer',
    company: 'Innovuze Solutions Inc.',
    period: 'Dec 2022 – Jun 2023',
    description:
      'Led the QA team and managed testing processes across projects. Mentored junior testers and maintained automation scripts.',
  },
  {
    title: 'Quality Assurance Engineer',
    company: 'Innovuze Solutions Inc.',
    period: 'Jun 2022 – Dec 2022',
    description:
      'Performed manual and automated testing on web platforms. Collaborated closely with developers to resolve bugs early in the SDLC.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Experience() {
  return (
    <SectionWrapper>
      <section id="experience" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.div
            className="font-mono text-lg text-green-600 dark:text-green-400 mb-4 flex items-center justify-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ➜ ~ <span className="text-gray-900 dark:text-white">experience</span>
            <span className="w-[1px] h-5 bg-gray-900 dark:bg-white animate-blink"></span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <motion.div
            className="flex-1 text-left"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              <strong>Over 2 years</strong> of experience as a Quality Assurance Engineer, specializing in test automation, performance testing, and CI/CD pipeline management.
            </p>
          </motion.div>

          {/* Right Section (Timeline) */}
          <div className="flex-1">
            <div className="relative border-l border-muted pl-6 space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="absolute left-[-1.9rem] top-2 w-3 h-3 bg-primary rounded-full" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="mt-2 text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
