'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

import {
  Terminal, Bug, ShieldCheck, Github, Cpu, VenetianMask, FlaskConical, ListChecks,
  Code, Braces, FileCode, Gauge, Server, Workflow, Globe, Laptop
} from 'lucide-react';

// Skills grouped by category
const skillsByCategory = {
  'Programming': [
    { name: 'JavaScript', icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'TypeScript', icon: <Braces className="w-5 h-5 text-primary" /> },
    { name: 'Python', icon: <FileCode className="w-5 h-5 text-primary" /> },
    { name: 'HTML/CSS', icon: <Globe className="w-5 h-5 text-primary" /> },
  ],
  'Automation': [
    { name: 'Selenium', icon: <Laptop className="w-5 h-5 text-primary" /> },
    { name: 'Cypress', icon: <FlaskConical className="w-5 h-5 text-primary" /> },
    { name: 'Playwright', icon: <VenetianMask className="w-5 h-5 text-primary" /> },
  ],
  'Testing': [
    { name: 'API Testing', icon: <Bug className="w-5 h-5 text-primary" /> },
    { name: 'Performance Testing', icon: <Gauge className="w-5 h-5 text-primary" /> },
    { name: 'Security Testing', icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
    { name: 'Manual Testing', icon: <ListChecks className="w-5 h-5 text-primary" /> },
    { name: 'Automation Testing', icon: <Cpu className="w-5 h-5 text-primary" /> },
  ],
  'DevOps & Tools': [
    { name: 'CI/CD', icon: <Cpu className="w-5 h-5 text-primary" /> },
    { name: 'Git', icon: <Github className="w-5 h-5 text-primary" /> },
    { name: 'Linux CLI', icon: <Terminal className="w-5 h-5 text-primary" /> },
    { name: 'Jira', icon: <ListChecks className="w-5 h-5 text-primary" /> },
    { name: 'Azure DevOps', icon: <Server className="w-5 h-5 text-primary" /> },
    { name: 'Qase', icon: <Workflow className="w-5 h-5 text-primary" /> },
  ],
  'Security': [
    { name: 'Pen Testing', icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
    { name: 'Web Security Testing', icon: <Globe className="w-5 h-5 text-primary" /> },
  ]
};

export default function About() {
  return (
    <SectionWrapper>
    <section
      id="about"
      className="py-20 px-4 max-w-3xl mx-auto text-center relative"
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl opacity-50"></div>
      <Image
        src="/images/profile.jpg"
        alt="James Ryan Gaid"
        width={120}
        height={120}
        className="rounded-full mx-auto mb-6 shadow-lg"
      />
      <div className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          About Me
        </motion.h2>
      </div>


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
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
        >
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>

            <div className="space-y-8">
                {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className="space-y-3"
                    >
                        <h4 className="text-lg font-semibold text-primary">{category}</h4>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border shadow-sm hover:shadow-md hover:bg-primary/10 hover:border-primary transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        whileHover={{ rotate: 15 }}
                                        className="text-primary"
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>


    </section>
    </SectionWrapper>
  );
}
