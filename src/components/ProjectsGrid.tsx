'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
};

const webProjects: Project[] = [
  {
    title: 'AutoTestGen - AI Test Case Generator',
    description: 'AI-powered test automation framework for generating and maintaining test cases for web applications. Integrates with CI/CD pipelines.',
    tags: ['Cypress', 'Playwright', 'JavaScript', 'GitHub Actions', 'AI'],
    github: 'https://github.com/jmsryn',
    demo: 'https://testai.jrgaid.site',
  },
  {
    title: 'Smart Money Tracker - AI Finance Assistant',
    description: 'Personal finance management application with AI-powered insights and recommendations. Track expenses and analyze spending patterns.',
    tags: ['AI', 'Finance', 'Web App', 'Analytics'],
    github: 'https://github.com/jmsryn',
    demo: 'https://smartmoney.jrgaid.site',
  },
  {
    title: 'Sillage - AI Curator',
    description: 'AI-powered fragrance collection management platform with weather-smart recommendations and layering combinations.',
    tags: ['AI', 'React', 'Web App', 'Recommendations'],
    github: 'https://github.com/jmsryn',
    demo: 'https://mysillage.me',
  }
];

const qaProjects: Project[] = [
  {
    title: 'Sillage - Playwright E2E Automation',
    description: 'Comprehensive end-to-end testing suite for the MySillage platform ensuring reliability and performance.',
    tags: ['Playwright', 'TypeScript', 'E2E Testing', 'CI/CD'],
    github: 'https://github.com/jmsryn/mysillage-playwright',
    demo: 'https://github.com/jmsryn/mysillage-playwright',
  }
];

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper>
      <section id="projects" className="section-padding bg-background/50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-12 md:mb-16 border-b-4 border-foreground pb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground uppercase tracking-tight break-all md:break-normal">
                Projects
              </h2>
            </motion.div>

            {/* Web Applications */}
            <div className="mb-24">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-mono mb-8 text-primary uppercase tracking-widest pl-4 border-l-4 border-primary block">
                  Web Applications
                </span>
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                {webProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="brutalist-card flex flex-col h-full"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">
                      {project.title}
                    </h3>

                    <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow font-mono">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs border border-border text-foreground font-mono uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 btn-neon text-xs py-3 px-4"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </button>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-outline-brutalist text-xs py-3 px-4"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Tab
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* QA & Automation */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-mono mb-8 text-secondary uppercase tracking-widest pl-4 border-l-4 border-secondary block">
                  QA & Automation
                </span>
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                {qaProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="brutalist-card flex flex-col h-full border-secondary shadow-[4px_4px_0px_0px_var(--secondary)] hover:shadow-[8px_8px_0px_0px_var(--secondary)] hover:border-secondary"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-4 uppercase">
                      {project.title}
                    </h3>

                    <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow font-mono">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs border border-border text-foreground font-mono uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-8 py-3 bg-secondary text-white font-bold uppercase tracking-wider text-xs border-2 border-transparent hover:bg-transparent hover:text-secondary hover:border-secondary transition-all duration-300 shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Repository
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Iframe Showcase Modal - Brutalist Style */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-7xl h-[90vh] bg-background border-4 border-primary shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-primary text-primary-foreground border-b-4 border-black">
                  <h3 className="text-xl font-bold uppercase tracking-wider">
                    {selectedProject.title} :: LIVE PREVIEW
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-black hover:text-primary transition-colors border-2 border-transparent hover:border-black"
                    aria-label="Close preview"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Iframe */}
                <div className="flex-grow bg-white">
                  <iframe
                    src={selectedProject.demo}
                    className="w-full h-full"
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </SectionWrapper >
  );
}
