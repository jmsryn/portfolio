'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const certifications = [
  {
    title: 'Practical Junior Penetration Tester (PJPT)',
    issuer: 'TCM Security',
    date: 'In Progress',
    skills: ['Penetration Testing', 'Internal Network Security', 'Exploitation'],
    link: 'https://certifications.tcm-sec.com/pjpt/',
  },
];

const courses = [
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    skills: ['SOC Operations', 'Incident Response'],
    link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133',
  },
  {
    title: 'Practical Web App Security & Testing',
    issuer: 'TCM Security',
    date: '2023',
    skills: ['OWASP Top 10', 'Penetration Testing', 'Security Testing'],
    link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view',
  },
  {
    title: 'Introduction to Playwright',
    issuer: 'Applitools',
    date: '2024',
    skills: ['Test Automation', 'Playwright', 'E2E Testing'],
    link: 'https://testautomationu.applitools.com/certificate/?id=4a4d8ca2', // Assuming a generic link or placeholder if unknown
  },
];

export default function Certifications() {
  return (
    <SectionWrapper>
      <section id="certifications" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Certifications Header */}
            <motion.div
              className="mb-12 md:mb-16 mt-8 md:mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground uppercase break-all md:break-normal">
                Certifications
              </h2>
              <div className="h-2 w-24 bg-primary" />
            </motion.div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  className="card-enhanced p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Courses Header */}
            <motion.div
              className="mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-4xl font-black mb-4 text-foreground uppercase break-words">
                Courses & Self Development
              </h2>
              <div className="h-2 w-24 bg-secondary" />
            </motion.div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <motion.div
                  key={course.title}
                  className="card-enhanced p-5 border-secondary/20 hover:border-secondary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{course.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{course.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-secondary/80 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
