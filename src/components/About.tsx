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
        I’m a passionate QA Engineer with a B.S. in Information Technology, specializing in software quality assurance, automation, and cybersecurity. Currently at Theoria Medical, I lead test strategies, build CI/CD pipelines, and conduct API, performance, and penetration testing. Skilled in tools like Cypress, Selenium, Playwright, GraphQL, Jira, and more, I focus on delivering comprehensive testing solutions to ensure product quality.
      </motion.p>
      <br />
      <motion.p
        className="text-muted-foreground text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
         As a cybersecurity enthusiast, I am committed to staying on top of the latest trends and best practices to help safeguard software. Always eager to learn and deliver secure, high-quality software that makes a difference.
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
