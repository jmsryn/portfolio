'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleRoles = (index: number) => {
    setExpandedRoles((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <SectionWrapper>
      <section id="experience" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-16"
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

            {/* Interactive Timeline */}
            <div className="relative">
              {/* Timeline Line - Hidden on mobile, visible on md+ */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Timeline Marker - Hidden on mobile */}
                    <div className="hidden md:block absolute left-8 top-8 -translate-x-1/2">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {/* Pulsing Ring */}
                        {hoveredIndex === index && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary"
                            initial={{ scale: 1, opacity: 0.5 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}

                        {/* Outer Ring */}
                        <div className="w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                          {/* Inner Dot */}
                          <motion.div
                            className="w-2 h-2 rounded-full bg-primary"
                            animate={hoveredIndex === index ? { scale: [1, 1.5, 1] } : {}}
                            transition={{ duration: 0.6, repeat: hoveredIndex === index ? Infinity : 0 }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className="md:ml-20">
                      <motion.div
                        className="card-enhanced p-6 md:p-8 relative overflow-hidden group"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Company Header */}
                        <div className="relative mb-6">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-center gap-3">
                              {/* Company Icon */}
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                <Briefcase className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-xl md:text-2xl font-medium text-foreground">
                                  {exp.company}
                                </h3>
                                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-1">
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
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <motion.div
                            className="h-1 bg-muted rounded-full overflow-hidden"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-primary to-primary/50"
                              initial={{ x: "-100%" }}
                              whileInView={{ x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                            />
                          </motion.div>
                        </div>

                        {/* Roles */}
                        <div className="relative space-y-6">
                          {(expandedRoles[index] ? exp.roles : exp.roles.slice(0, 1)).map((role, roleIndex) => (
                            <motion.div
                              key={roleIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: roleIndex * 0.1 }}
                              className="border-l-2 border-primary/30 pl-5 hover:border-primary/60 transition-colors"
                            >
                              <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                                <h4 className="font-medium text-foreground text-base md:text-lg">
                                  {role.title}
                                </h4>
                                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                                  {role.period}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                {role.description}
                              </p>
                              <ul className="space-y-2">
                                {role.achievements.slice(0, 3).map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    className="text-sm text-muted-foreground flex items-start gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                  >
                                    <span className="text-primary mt-1 text-lg leading-none">•</span>
                                    <span className="flex-1">{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}

                          {exp.roles.length > 1 && (
                            <button
                              onClick={() => toggleRoles(index)}
                              className="text-sm text-primary hover:text-primary/80 flex items-center gap-2 transition-colors group/btn"
                            >
                              {expandedRoles[index] ? (
                                <>
                                  <ChevronUp className="w-4 h-4 group-hover/btn:translate-y-[-2px] transition-transform" />
                                  Show less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-[2px] transition-transform" />
                                  Show {exp.roles.length - 1} more role{exp.roles.length - 1 > 1 ? 's' : ''}
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="relative mt-6 pt-6 border-t border-border">
                          <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1.5 text-xs bg-muted text-foreground rounded-md hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
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
