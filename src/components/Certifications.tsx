'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const certifications = [
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    skills: ['IoT Architecture', 'Network Protocols', 'Security'],
    link: 'https://www.credly.com/badges/229808b1-4aa4-4fdf-b099-0bb2cc4520e5',
  },
  {
    title: 'Command Line in Linux',
    issuer: 'Coursera',
    date: '2023',
    skills: ['Linux CLI', 'System Administration', 'Scripting'],
    link: 'https://www.coursera.org/account/accomplishments/certificate/KBWRSAF2Q96B',
  },
  {
    title: 'Practical Web App Security & Testing',
    issuer: 'TCM Security',
    date: '2023',
    skills: ['OWASP Top 10', 'Penetration Testing', 'Security Testing'],
    link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    skills: ['Security Fundamentals', 'Risk Assessment'],
    link: 'https://www.credly.com/badges/bb67cf46-fb4d-412a-9847-a89aeb6df70b',
  },
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    skills: ['SOC Operations', 'Incident Response'],
    link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133',
  },
];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, 3);

  return (
    <SectionWrapper>
      <section id="certifications" className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                Certifications
              </h2>
              <div className="h-px w-12 bg-primary" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map((cert) => (
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

            {certifications.length > 3 && (
              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => setShowAll(v => !v)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showAll ? 'Show less' : `Show all ${certifications.length} certifications`}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
