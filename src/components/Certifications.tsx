'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const certifications = [
    {
      title: 'Introduction to IoT',
      issuer: 'Cisco Networking Academy',
      logo: 'https://www.pngall.com/wp-content/uploads/13/Cisco-Logo-PNG-Photos.png',
      link: 'https://www.credly.com/badges/229808b1-4aa4-4fdf-b099-0bb2cc4520e5',
    },
    {
      title: 'Command Line in Linux',
      issuer: 'Coursera',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/2560px-Coursera_logo_%282020%29.svg.png',
      link: 'https://www.coursera.org/account/accomplishments/certificate/KBWRSAF2Q96B',
    },
    {
      title: 'Practical Web App Security & Testing',
      issuer: 'TCM Security',
      logo: 'https://tcm-sec.com/wp-content/uploads/2021/09/logo.png',
      link: 'https://drive.google.com/file/d/1CBxts736wqNIeH_tzXAPg7mWQuIT7C1Y/view',
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      logo: 'https://www.pngall.com/wp-content/uploads/13/Cisco-Logo-PNG-Photos.png',
      link: 'https://www.credly.com/badges/bb67cf46-fb4d-412a-9847-a89aeb6df70b',
    },
    {
      title: 'CyberOps Associate',
      issuer: 'Cisco Networking Academy',
      logo: 'https://www.pngall.com/wp-content/uploads/13/Cisco-Logo-PNG-Photos.png',
      link: 'https://www.credly.com/badges/635df40f-1ae9-48b5-853b-031cc145a133',
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
      <div className="mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Certifications
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
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
                    <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={32}
                    height={32}
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
