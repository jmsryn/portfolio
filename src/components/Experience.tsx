'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface Role {
  title: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Experience {
  company: string;
  location: string;
  period: string;
  roles: Role[];
  technologies: string[];
  color: string;
  keyMetric: string;
}

const experiences: Experience[] = [
  {
    company: 'Amihan Solutions',
    location: 'Remote',
    period: 'Feb 2026 – Present',
    color: '#00ccff',
    keyMetric: 'Oracle APEX Test Suite',
    roles: [
      {
        title: 'QA & Test Engineer',
        period: 'Feb 2026 – Present',
        description: 'Collaborating with development and product teams to prepare and execute comprehensive test plans for Oracle APEX-based applications.',
        achievements: [
          'Design, run, and report on manual and automated test cases across multiple testing levels',
          'Develop and maintain automated end-to-end tests using Playwright for Oracle APEX-based applications',
          'Test APIs using APIDog or Playwright to ensure integration quality and reliability',
          'Set up and maintain test environments, data, and CI/CD integration for automated test execution',
          'Support User Acceptance Testing (UAT) and assist in customer training when needed',
          'Document and report test results, issues, and improvement suggestions',
          'Collaborate in an Agile (Scrum/Kanban) environment to continuously enhance software quality and testing efficiency'
        ]
      }
    ],
    technologies: ['Playwright', 'Oracle APEX', 'APIDog', 'Postman', 'CI/CD', 'Agile/Scrum']
  },
  {
    company: 'Theoria Medical',
    location: 'Remote',
    period: 'June 2023 – December 2025',
    color: '#ccff00',
    keyMetric: '200+ Automated Test Cases',
    roles: [
      {
        title: 'Jr. Software Development Engineer in Test',
        period: 'June 2025 – December 2025',
        description: 'Write and maintain automated test scripts in Playwright for UI, API, and integration layers.',
        achievements: [
          'Write and maintain automated test scripts in Playwright for UI, API, and integration layers',
          'Execute regression and smoke suites in CI and report results in Jira or TestRail',
          'Debug test failures and isolate environment vs. code issues',
          'Participate in sprint planning, daily stand-ups, and retros'
        ]
      },
      {
        title: 'Software Quality Assurance Engineer',
        period: 'June 2023 – July 2025',
        description: 'Led test automation efforts and maintained CI/CD pipelines.',
        achievements: [
          'Developed and maintained automated testing frameworks',
          'Implemented CI/CD testing integration',
          'Performed security testing and vulnerability assessments'
        ]
      }
    ],
    technologies: ['Cypress', 'Playwright', 'K6', 'OWASP ZAP', 'Docker', 'Postman', 'Jira']
  },
  {
    company: 'Innovuze Solutions Inc.',
    location: 'Remote',
    period: 'Jun 2022 – Jun 2023',
    color: '#ff0099',
    keyMetric: 'Led QA Team of 5',
    roles: [
      {
        title: 'Lead Quality Assurance Engineer',
        period: 'Dec 2022 – Jun 2023',
        description: 'Led the QA team and managed testing processes across projects.',
        achievements: [
          'Led QA efforts across multiple client projects',
          'Established standardized testing procedures',
          'Developed onboarding program for new team members'
        ]
      },
      {
        title: 'Quality Assurance Engineer',
        period: 'Jun 2022 – Dec 2022',
        description: 'Performed manual and automated testing on web platforms.',
        achievements: [
          'Conducted systematic testing of web applications',
          'Created comprehensive test documentation'
        ]
      }
    ],
    technologies: ['Selenium WebDriver', 'Postman', 'MySQL', 'Git', 'Azure DevOps', 'Cypress']
  },
];

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState<Record<number, boolean>>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleRoles = (index: number) => {
    setExpandedRoles((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <SectionWrapper direction="right">
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              className="mb-12 md:mb-16 border-b-4 border-foreground pb-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground uppercase tracking-tight break-all md:break-normal">
                Experience
              </h2>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-2 bg-muted-foreground/20" />

              <div className="space-y-16">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Timeline Marker with company color */}
                    <div className="hidden md:block absolute left-5 top-8 z-10">
                      <div
                        className={`w-8 h-8 border-4 border-background transition-all duration-300 ${hoveredIndex === index ? 'rotate-45 scale-125' : 'rotate-0'}`}
                        style={{ backgroundColor: exp.color }}
                      />
                    </div>

                    {/* Content Card */}
                    <div className="md:ml-24">
                      <motion.div
                        className="brutalist-card p-6 md:p-8 relative"
                        style={{ borderLeftWidth: '6px', borderLeftColor: exp.color }}
                        initial={false}
                        animate={hoveredIndex === index ? { x: 10 } : { x: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {/* Company Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 border-b-2 border-dashed border-border pb-6">
                          <div className="flex items-center gap-4">
                            <div
                              className="w-14 h-14 flex items-center justify-center font-bold text-xl uppercase tracking-tighter border-2"
                              style={{ backgroundColor: exp.color + '20', borderColor: exp.color, color: exp.color }}
                            >
                              {exp.company.substring(0, 2)}
                            </div>
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground uppercase">
                                {exp.company}
                              </h3>
                              <div className="flex items-center gap-2 font-mono text-sm mt-1" style={{ color: exp.color }}>
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <div className="bg-muted p-2 font-mono text-sm text-foreground border border-border">
                              {exp.period}
                            </div>
                            {/* Key Metric Badge */}
                            <div
                              className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider border"
                              style={{ borderColor: exp.color, color: exp.color, backgroundColor: exp.color + '10' }}
                            >
                              <TrendingUp className="w-3 h-3" />
                              {exp.keyMetric}
                            </div>
                          </div>
                        </div>

                        {/* Roles */}
                        <div className="space-y-8">
                          {(expandedRoles[index] ? exp.roles : exp.roles.slice(0, 1)).map((role, roleIndex) => (
                            <motion.div
                              key={roleIndex}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="relative pl-6 border-l-4"
                              style={{ borderLeftColor: exp.color + '80' }}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                                <h4 className="font-bold text-xl text-foreground">
                                  {role.title}
                                </h4>
                                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                                  {role.period}
                                </span>
                              </div>

                              <p className="text-base text-muted-foreground mb-4 font-mono leading-relaxed">
                                {role.description}
                              </p>

                              <ul className="space-y-2">
                                {role.achievements.slice(0, 3).map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-foreground flex items-start gap-3"
                                  >
                                    <span className="font-bold text-lg leading-none" style={{ color: exp.color }}>»</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}

                          {exp.roles.length > 1 && (
                            <button
                              onClick={() => toggleRoles(index)}
                              className="text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 flex items-center gap-2"
                              style={{ color: exp.color }}
                            >
                              {expandedRoles[index] ? (
                                <>
                                  <ChevronUp className="w-4 h-4" />
                                  Collapse
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4" />
                                  View History ({exp.roles.length - 1} more)
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="mt-8 pt-6 border-t-2 border-dashed border-border">
                          <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                            Protocol / Tech Stack
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs border border-foreground/20 text-foreground font-mono uppercase hover:bg-foreground hover:text-background transition-colors cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
