'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const projects = [
  {
    title: 'Financial Tracker Application',
    description: 'Personal finance management application built with React and Node.js for tracking expenses and managing budgets.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/jmsryn',
    demo: 'https://smartmoney.jrgaid.site',
  },
  {
    title: 'AutoTestGen',
    description: 'AI-powered test automation tool for generating test cases for web applications.',
    tags: ['Cypress', 'JavaScript', 'GitHub Actions', 'Testing', 'AI'],
    github: 'https://github.com/jmsryn',
    demo: 'https://testai.jrgaid.site',
  }
];

export default function ProjectsGrid() {
  return (
    <SectionWrapper>
      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-items-center max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-4 sm:p-6 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group w-full max-w-md"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md hover:bg-primary/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 text-sm border border-border rounded-md hover:bg-primary/10 hover:border-primary/30 transition-colors flex-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
