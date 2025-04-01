'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

import { Terminal, Bug, ShieldCheck , Github, Cpu, VenetianMask, FlaskConical, ListChecks } from 'lucide-react';

const skills = [
  { name: 'Linux CLI', icon: <Terminal className="w-5 h-5 text-primary" /> },
  { name: 'Pen Testing', icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
  { name: 'API Testing', icon: <Bug className="w-5 h-5 text-primary" /> },
  { name: 'CI/CD', icon: <Cpu className="w-5 h-5 text-primary" /> },
  { name: 'Git', icon: <Github className="w-5 h-5 text-primary" /> },
  { name: 'Playwright', icon: <VenetianMask className="w-5 h-5 text-primary" /> },
  { name: 'Cypress', icon: <FlaskConical className="w-5 h-5 text-primary" /> },
  { name: 'Jira', icon: <ListChecks className="w-5 h-5 text-primary" /> },
];

export default function About() {
  return (
    <SectionWrapper>
    <section
      id="about"
      className="py-20 px-4 max-w-3xl mx-auto text-center"
    >
      <Image
        src="/images/profile.jpg"
        alt="James Ryan Gaid"
        width={120}
        height={120}
        className="rounded-full mx-auto mb-6 shadow-lg"
      />
      <motion.h2
  className="text-3xl md:text-4xl font-bold text-center mb-12 relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="font-mono text-lg text-green-600 dark:text-green-400 mb-4 flex items-center justify-center gap-1">
    ➜ ~ <span className="text-gray-900 dark:text-white">about_me</span>
    <span className="w-[1px] h-5 bg-gray-900 dark:bg-white animate-blink"></span>
  </h2>
</motion.h2>


      <motion.p
        className="text-muted-foreground text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I&apos;m James Ryan Gaid, a passionate Software QA Engineer at Theoria Medical.
        With a B.S. in Information Technology, I specialize in building robust and efficient test automation frameworks using JavaScript and Playwright. 
        My skill set includes API testing, performance testing, and penetration testing — all backed by hands-on experience maintaining CI/CD pipelines.
      </motion.p>

      <motion.p
        className="text-muted-foreground text-lg leading-relaxed mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I hold cybersecurity certifications and placed <strong>3rd in a national CTF</strong> competition, which fuels my love for all things tech and secure development. 
        I&apos;m always seeking opportunities to improve product quality through automation, collaboration, and continuous learning.
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        >
        </motion.div>
        <motion.div
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            {skills.map((skill) => (
                <div
                key={skill.name}
                className="flex items-center gap-3 px-4 py-3 bg-card rounded-lg shadow-sm hover:shadow-md transition"
                >
                {skill.icon}
                <span>{skill.name}</span>
                </div>
            ))}
        </motion.div>


    </section>
    </SectionWrapper>
  );
}
