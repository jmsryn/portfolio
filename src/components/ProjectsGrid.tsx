'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BugOverlay } from '@/components/ui/bug-overlay';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image?: string;
  outcome?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'Financial Tracker Application',
    description: 'Personal finance management application built with React and Node.js for tracking expenses and managing budgets.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/jmsryn',
    demo: 'https://smartmoney.jrgaid.site',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=60&auto=format&fit=crop',
    outcome: 'Reduced manual budgeting time by ~60% for test cohort',
    featured: true,
  },
  {
    title: 'AutoTestGen',
    description: 'AI-powered test automation tool for generating test cases for web applications.',
    tags: ['Cypress', 'JavaScript', 'GitHub Actions', 'Testing', 'AI'],
    github: 'https://github.com/jmsryn',
    demo: 'https://testai.jrgaid.site',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60&auto=format&fit=crop',
    outcome: 'Cut test case authoring time by 40% across sample apps',
    featured: true,
  }
];

export default function ProjectsGrid() {
  const featured = projects.filter(p => p.featured);
  const more = projects.filter(p => !p.featured);
  return (
    <SectionWrapper>
      <section id="projects" className="py-20 px-4 max-w-5xl mx-auto relative">
        <BugOverlay count={1} />
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

        {/* Featured */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 justify-items-center max-w-4xl mx-auto">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-lg border border-border p-0 overflow-hidden hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group w-full max-w-md"
            >
              {project.image && (
                <div className="relative h-40 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              )}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-2 leading-relaxed">
                  {project.description}
                </p>
                {project.outcome && (
                  <p className="text-xs text-foreground/80 mb-3">Outcome: {project.outcome}</p>
                )}
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects */}
        {more.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-center text-sm text-muted-foreground mb-4">More projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {more.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-card/40 rounded-lg border border-border p-4 hover:bg-primary/5 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{project.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px] rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs underline">
                      Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs underline">
                      Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>
    </SectionWrapper>
  );
}
