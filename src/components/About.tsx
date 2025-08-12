'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { BugOverlay } from '@/components/ui/bug-overlay';

const skills = [
  {
    category: 'Testing & QA',
    items: ['Selenium', 'Cypress', 'Postman', 'Jest', 'TestRail', 'JIRA']
  },
  {
    category: 'Programming',
    items: ['JavaScript', 'Python', 'Java', 'TypeScript', 'HTML/CSS', 'SQL']
  },
  {
    category: 'Security',
    items: ['OWASP Top 10', 'Penetration Testing', 'Burp Suite', 'SAST/DAST', 'Security Audits']
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Linux', 'API Testing']
  }
];

export default function About() {
  return (
    <SectionWrapper>
      <section id="about" className="section-padding">
        <div className="container-custom relative">
          <BugOverlay count={2} />
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <motion.h2
                className="text-balance relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent mb-8"
                initial={false}
                whileInView={undefined}
                transition={undefined}
              >
                About Me
              </motion.h2>

              <motion.div
                className="space-y-6 text-muted-foreground leading-relaxed"
                initial={false}
                whileInView={undefined}
                transition={undefined}
              >
                <p>
                  I&apos;m a passionate QA Engineer with expertise in automated testing, security testing, and full-stack development. 
                  I specialize in creating robust testing frameworks and ensuring software quality across the development lifecycle.
                </p>
                <p>
                  My experience spans web application testing, API testing, security assessments, and test automation. 
                  I&apos;m committed to delivering high-quality software solutions and continuously learning new technologies.
                </p>
                <p>
                  When I&apos;m not testing applications or writing automation scripts, I enjoy contributing to open-source projects 
                  and staying updated with the latest trends in software testing and cybersecurity.
                </p>
              </motion.div>

              {/* Skills Section */}
              <motion.div
                className="mt-12"
                initial={false}
                whileInView={undefined}
                transition={undefined}
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                      <motion.div
                      key={skillGroup.category}
                      className="card-enhanced p-6"
                        initial={false}
                        whileInView={undefined}
                        transition={undefined}
                    >
                      <h4 className="font-medium text-primary mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="card-enhanced p-6 sticky top-8">
                  <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <div className="font-medium text-sm">3+ Years Experience</div>
                        <div className="text-xs text-muted-foreground">QA & Testing</div>
                      </div>
                    </div>
                    {/* <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className="font-medium text-sm">Security+ Certified</div>
                        <div className="text-xs text-muted-foreground">CompTIA</div>
                      </div>
                    </div> */}
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-purple-500" />
                      <div>
                        <div className="font-medium text-sm">Automation Focused</div>
                        <div className="text-xs text-muted-foreground">CI/CD Integration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-orange-500" />
                      <div>
                        <div className="font-medium text-sm">Team Collaboration</div>
                        <div className="text-xs text-muted-foreground">Cross-functional</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
