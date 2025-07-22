'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, CheckCircle, Clock } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const certifications = [
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    status: 'Certified',
    type: 'Professional',
    description: 'Fundamentals of Internet of Things technologies and applications',
    skills: ['IoT Architecture', 'Network Protocols', 'Security'],
    link: 'https://www.credly.com/badges/229808b1-4aa4-4fdf-b099-0bb2cc4520e5',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Command Line in Linux',
    issuer: 'Coursera',
    date: '2023',
    status: 'Certified',
    type: 'Technical',
    description: 'Linux command line fundamentals and system administration',
    skills: ['Linux CLI', 'System Administration', 'Scripting'],
    link: 'https://www.coursera.org/account/accomplishments/certificate/KBWRSAF2Q96B',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Practical Web App Security & Testing',
    issuer: 'TCM Security',
    date: '2023',
    status: 'Certified',
    type: 'Security',
    description: 'Hands-on web application security testing and vulnerability assessment',
    skills: ['OWASP Top 10', 'Penetration Testing', 'Security Testing'],
    link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view',
    color: 'from-red-500 to-pink-500'
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    status: 'Certified',
    type: 'Security',
    description: 'Foundational cybersecurity principles and best practices',
    skills: ['Security Fundamentals', 'Risk Assessment', 'Compliance'],
    link: 'https://www.credly.com/badges/bb67cf46-fb4d-412a-9847-a89aeb6df70b',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'CyberOps Associate',
    issuer: 'Cisco Networking Academy',
    date: '2022',
    status: 'Certified',
    type: 'Operations',
    description: 'Cybersecurity operations and incident response fundamentals',
    skills: ['SOC Operations', 'Incident Response', 'Network Security'],
    link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133',
    color: 'from-orange-500 to-yellow-500'
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Certified':
      return <CheckCircle className="w-4 h-4" />;
    case 'In Progress':
      return <Clock className="w-4 h-4" />;
    default:
      return <Award className="w-4 h-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Certified':
      return 'bg-green-500/20 text-green-600 border-green-500/30';
    case 'In Progress':
      return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30';
    default:
      return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
  }
};

export default function Certifications() {
  return (
    <SectionWrapper>
      <section id="certifications" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-balance relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent">
              Certifications & Training
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Continuous learning and professional development in cybersecurity, testing, and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="card-enhanced p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(cert.status)} flex items-center gap-1`}>
                        {getStatusIcon(cert.status)}
                        {cert.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="font-medium">{cert.issuer}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-foreground mb-2">Skills Covered</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Type badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center px-2 py-1 text-xs bg-primary/10 text-primary rounded-md">
                        {cert.type}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-border">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group-hover:gap-3"
                    >
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
