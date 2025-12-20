'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
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
}

const experiences: Experience[] = [
  {
    company: 'Theoria Medical',
    location: 'Remote',
    period: 'June 2023 – December 2025',
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

  const toggleRoles = (index: number) => {
    setExpandedRoles((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <SectionWrapper>
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                Experience
              </h2>
              <div className="h-px w-12 bg-primary" />
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="card-enhanced p-6">
                    {/* Company Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        {exp.company}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Roles */}
                    <div className="space-y-4">
                      {(expandedRoles[index] ? exp.roles : exp.roles.slice(0, 1)).map((role, roleIndex) => (
                        <div key={roleIndex} className="border-l-2 border-primary/30 pl-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-foreground">{role.title}</h4>
                            <span className="text-xs text-muted-foreground">{role.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{role.description}</p>
                          <ul className="space-y-1.5">
                            {role.achievements.slice(0, 3).map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {exp.roles.length > 1 && (
                        <button
                          onClick={() => toggleRoles(index)}
                          className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                        >
                          {expandedRoles[index] ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Show less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              Show more roles
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs bg-muted text-foreground rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
