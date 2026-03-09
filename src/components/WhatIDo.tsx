'use client';

import { motion } from 'framer-motion';
import { TestTube, Plug, ShieldCheck, GitBranch } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const services = [
    {
        icon: TestTube,
        title: 'Test Automation',
        description: 'Building robust E2E and regression suites with Playwright and Cypress for reliable, repeatable testing at scale.',
        accent: 'primary',
    },
    {
        icon: Plug,
        title: 'API Testing',
        description: 'Validating REST and GraphQL endpoints with APIDog and Postman — ensuring data integrity and integration quality.',
        accent: 'primary',
    },
    {
        icon: ShieldCheck,
        title: 'Security Testing',
        description: 'OWASP Top 10 assessments, penetration testing with Burp Suite, and vulnerability scanning to harden applications.',
        accent: 'primary',
    },
    {
        icon: GitBranch,
        title: 'CI/CD Integration',
        description: 'Embedding automated tests into pipelines with GitHub Actions and Azure DevOps for continuous quality gates.',
        accent: 'primary',
    },
];

export default function WhatIDo() {
    return (
        <SectionWrapper>
            <section className="section-padding">
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
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground uppercase tracking-tight">
                                What I Do
                            </h2>
                        </motion.div>

                        {/* Service Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {services.map((service, i) => {
                                const Icon = service.icon;
                                return (
                                    <motion.div
                                        key={service.title}
                                        className="brutalist-card p-6 md:p-8 group cursor-default"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: '-50px' }}
                                        transition={{ duration: 0.4, delay: i * 0.1, type: 'spring', stiffness: 200 }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground uppercase mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </SectionWrapper>
    );
}
