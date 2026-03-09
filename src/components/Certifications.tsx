'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

type Credential = {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  link: string;
  type: 'certification' | 'course';
};

const credentials: Credential[] = [
  {
    title: 'Practical Junior Penetration Tester (PJPT)',
    issuer: 'TCM Security',
    date: 'In Progress',
    skills: ['Penetration Testing', 'Internal Network Security', 'Exploitation'],
    link: 'https://certifications.tcm-sec.com/pjpt/',
    type: 'certification',
  },
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    skills: ['SOC Operations', 'Incident Response'],
    link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133',
    type: 'course',
  },
  {
    title: 'Practical Web App Security & Testing',
    issuer: 'TCM Security',
    date: '2023',
    skills: ['OWASP Top 10', 'Penetration Testing', 'Security Testing'],
    link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view',
    type: 'course',
  },
  {
    title: 'Introduction to Playwright',
    issuer: 'Applitools',
    date: '2024',
    skills: ['Test Automation', 'Playwright', 'E2E Testing'],
    link: 'https://testautomationu.applitools.com/certificate/?id=4a4d8ca2',
    type: 'course',
  },
];

export default function Certifications() {
  const [filter, setFilter] = useState<'all' | 'certification' | 'course'>('all');

  const filtered = filter === 'all'
    ? credentials
    : credentials.filter(c => c.type === filter);

  return (
    <SectionWrapper>
      <section id="certifications" className="section-padding">
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
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground uppercase tracking-tight break-all md:break-normal">
                Credentials
              </h2>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              className="flex gap-2 mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {[
                { key: 'all' as const, label: 'All' },
                { key: 'certification' as const, label: 'Certifications' },
                { key: 'course' as const, label: 'Courses' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest border-2 transition-all duration-200 ${filter === tab.key
                      ? 'bg-primary text-primary-foreground border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Credentials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  className={`brutalist-card p-6 ${cred.type === 'certification' ? 'border-primary' : 'border-border'}`}
                  initial={{ opacity: 0, rotateX: -15 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ perspective: '1000px' }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 border ${cred.type === 'certification'
                        ? 'bg-primary/10 border-primary/30'
                        : 'bg-secondary/10 border-secondary/30'
                      }`}>
                      <Award className={`w-5 h-5 ${cred.type === 'certification' ? 'text-primary' : 'text-secondary'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-foreground mb-1 uppercase leading-tight">
                        {cred.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">{cred.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{cred.date}</span>
                    {cred.date === 'In Progress' && (
                      <span className="ml-2 px-1.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase">Active</span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cred.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs border border-border text-muted-foreground font-mono uppercase"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={cred.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:underline decoration-2 underline-offset-4 transition-colors ${cred.type === 'certification' ? 'text-primary' : 'text-secondary'
                      }`}
                  >
                    View Certificate
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
