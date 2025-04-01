'use client';

import { motion } from 'framer-motion';
import { title } from 'process';
import SectionWrapper from './SectionWrapper';

const certifications = [
    {
      title: 'Introduction to IoT',
      issuer: 'Cisco Networking Academy',
      logo: 'https://aurus5.com/upload/blog/images/2017-cisco-logo-3.png',
      link: 'https://www.credly.com/badges/example-iot',
    },
    {
      title: 'Command Line in Linux',
      issuer: 'Cisco Networking Academy',
      logo: 'https://aurus5.com/upload/blog/images/2017-cisco-logo-3.png',
      link: 'https://www.credly.com/badges/example-linux',
    },
    {
      title: 'Practical Web App Security & Testing',
      issuer: 'TCM Security',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQFdkbctaxZDaA/company-logo_200_200/company-logo_200_200/0/1634049884027/tcm_security_inc_logo?e=2147483647&v=beta&t=Vc9ADsTlVaEnvkpQKOv9c552QfmiL8fwn5jkeNLD3b4',
      link: 'https://cybertalents.com/certificates/example-web-app-security',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      logo: 'https://aurus5.com/upload/blog/images/2017-cisco-logo-3.png',
      link: 'https://www.credly.com/badges/example-cybersecurity',
    },
    {
      title: 'CyberOps Associate',
      issuer: 'Cisco Networking Academy',
      logo: 'https://aurus5.com/upload/blog/images/2017-cisco-logo-3.png',
      link: 'https://www.credly.com/badges/example-cyberops',
    },
];
  

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Certifications() {
  return (
    <SectionWrapper>
    <section
      id="certifications"
      className="py-20 px-4 max-w-5xl mx-auto"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-mono text-lg text-green-600 dark:text-green-400 mb-4 flex items-center justify-center gap-1">
          ➜ ~ <span className="text-gray-900 dark:text-white">certifications</span>
          <span className="w-[1px] h-5 bg-gray-900 dark:bg-white animate-blink"></span>
        </h2>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl p-6 border border-zinc-200 dark:border-white/10
           bg-white/60 dark:bg-white/5
           backdrop-blur-md 
           shadow-md hover:shadow-lg 
           transition-all"
          >
            <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2"
                >
                <div className="flex items-center gap-3">
                    <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-8 h-8 object-contain"
                    />
                    <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                </div>
                <span className="text-sm text-primary mt-1 text-left">
                    View Certificate
                </span>
                </a>
          </motion.div>
        ))}
      </div>
    </section>
    </SectionWrapper>
  );
}
