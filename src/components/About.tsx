'use client';

import { motion } from 'framer-motion';
import { Code, Shield, Zap, CheckCircle2 } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const techStack = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Playwright', icon: '🎭' },
  { name: 'Cypress', icon: '🌲' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Azure', icon: '☁️' },
  { name: 'Git', icon: '🔀' },
];

interface SkillBar {
  name: string;
  level: number;
  category: string;
  icon: typeof CheckCircle2;
}

const skillBars: SkillBar[] = [
  { name: 'Test Automation', level: 90, category: 'Testing Frameworks', icon: CheckCircle2 },
  { name: 'API Testing', level: 85, category: 'Testing Frameworks', icon: CheckCircle2 },
  { name: 'JavaScript/TypeScript', level: 88, category: 'Programming', icon: Code },
  { name: 'Security Testing', level: 75, category: 'Security', icon: Shield },
  { name: 'CI/CD Pipelines', level: 80, category: 'DevOps', icon: Zap },
  { name: 'Performance Testing', level: 70, category: 'DevOps', icon: Zap },
];

// Calculate years of experience dynamically
const calculateExperience = () => {
  const startDate = new Date('2022-06-01');
  const now = new Date();
  const years = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365);
  return Math.floor(years);
};

function TerminalSkillBar({ skill, index }: { skill: SkillBar; index: number }) {

  return (
    <motion.div
      className="font-mono text-xs"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-muted-foreground uppercase tracking-wider truncate mr-2">
          {skill.name}
        </span>
        <span className="text-foreground font-bold flex-shrink-0">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-muted/30 border border-border">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

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
              {/* Left Column */}
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
                  className="mb-10"
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

                {/* Currently Strip */}
                <motion.div
                  className="mb-10 p-4 border border-dashed border-border bg-muted/10 font-mono text-xs"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                    <span><span className="text-primary">🔬</span> Learning: <span className="text-foreground">PJPT Certification</span></span>
                    <span><span className="text-primary">💼</span> Working: <span className="text-foreground">Amihan Solutions</span></span>
                    <span><span className="text-primary">📍</span> Based: <span className="text-foreground">Philippines (Remote)</span></span>
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <h3 className="text-sm font-bold mb-6 text-primary uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary" />
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
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      >
                        <span className="text-base filter grayscale hover:grayscale-0 transition-all">{tech.icon}</span>
                        <span className="text-sm font-mono font-bold text-foreground uppercase">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Terminal Skill Bars */}
              <div className="md:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h3 className="text-xl font-black mb-8 text-foreground uppercase bg-foreground text-background inline-block px-2 py-1 transform -rotate-1">
                    Skill Matrix
                  </h3>

                  {/* Terminal-style skill bars */}
                  <div className="brutalist-card p-5 md:p-6">
                    <div className="flex items-center gap-2 mb-6 border-b border-border pb-3">
                      <div className="w-2 h-2 bg-green-500 animate-pulse" />
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">system scan active</span>
                    </div>
                    <div className="space-y-3">
                      {skillBars.map((skill, index) => (
                        <TerminalSkillBar key={skill.name} skill={skill} index={index} />
                      ))}
                    </div>
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
