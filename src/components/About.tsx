'use client';

import { motion } from 'framer-motion';
import { Code, Shield, Zap, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

// Tech stack with icons (using emoji for simplicity, could be replaced with actual icons)
const techStack = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Playwright', icon: '🎭' },
  { name: 'Cypress', icon: '🌲' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Azure', icon: '☁️' },
  { name: 'Git', icon: '🔀' },
];

const skills = [
  {
    category: 'Testing Frameworks',
    items: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'TestRail', 'JIRA'],
    icon: CheckCircle2,
  },
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Python', 'C#', 'TypeScript', 'GraphQL'],
    icon: Code,
  },
  {
    category: 'Security Testing',
    items: ['OWASP Top 10', 'Penetration Testing', 'Burp Suite'],
    icon: Shield,
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Docker', 'Git', 'GitHub Actions', 'AzureDevOps', 'Linux', 'API Testing'],
    icon: Zap,
  }
];

// Calculate years of experience dynamically
const calculateExperience = () => {
  const startDate = new Date('2022-06-01'); // Started June 2022
  const now = new Date();
  const years = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(years);
};

export default function About() {
  const yearsExp = calculateExperience();

  return (
    <SectionWrapper>
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-12 md:mb-16 border-b-4 border-foreground pb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground uppercase tracking-tight">
                About Me
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-12">
              {/* Left Column: Stats & Description */}
              <div className="md:col-span-7">
                {/* Experience Badge */}
                <motion.div
                  className="mb-8 inline-flex items-center gap-4 p-4 border-2 border-primary bg-primary/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-5xl font-black text-primary font-display">{yearsExp}+</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold uppercase tracking-wider text-foreground">Years of</span>
                    <span className="text-sm font-bold uppercase tracking-wider text-foreground">Experience</span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 font-mono border-l-2 border-muted pl-4">
                    I&apos;m a Quality Assurance Engineer with a focus on <span className="text-foreground font-bold bg-primary/20 px-1">automation</span>, security, and performance.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed font-sans">
                    My expertise spans web application testing, API testing, security assessments, and building maintainable test frameworks integrated into CI/CD pipelines. I build systems that break other systems to make them stronger.
                  </p>
                </motion.div>

                {/* Tech Stack - Raw List */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-sm font-bold mb-6 text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary"></span>
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 border border-border bg-card hover:border-primary hover:bg-primary/10 transition-colors cursor-default"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
                      >
                        <span className="text-base filter grayscale hover:grayscale-0 transition-all">{tech.icon}</span>
                        <span className="text-sm font-mono font-bold text-foreground uppercase">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Skills Grid */}
              <div className="md:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-black mb-8 text-foreground uppercase bg-foreground text-background inline-block px-2 py-1 transform -rotate-1">
                    Capability Matrix
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skillGroup) => {
                      const Icon = skillGroup.icon;
                      return (
                        <div
                          key={skillGroup.category}
                          className="brutalist-card p-5 border-l-8 border-l-primary"
                        >
                          <div className="flex items-center gap-3 mb-4 border-b border-border pb-2">
                            <Icon className="w-5 h-5 text-primary" />
                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                              {skillGroup.category}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                              <span
                                key={skill}
                                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors cursor-default"
                              >
                                {skill}
                                <span className="mx-1 text-border">/</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
