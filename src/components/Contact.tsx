'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2, Download } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const contactMethods = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: 'Email',
    value: 'hello@jrgaid.site',
    href: 'mailto:hello@jrgaid.site',
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: 'Location',
    value: 'Remote',
    href: null,
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Form submission failed');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const to = 'hello@jrgaid.site';
        const subject = encodeURIComponent(formData.subject || 'Portfolio contact');
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setSubmitStatus('success');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper>
      <section id="contact" className="section-padding overflow-hidden relative">
        {/* Background Decorative Text */}
        <div className="absolute -right-20 top-40 text-[20rem] font-black text-muted/20 pointer-events-none select-none overflow-hidden opacity-10 rotate-90 hidden xl:block">
          CONTACT
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Left Column: Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-12">
                  <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-foreground uppercase tracking-tighter leading-[0.8] mb-6 md:mb-8">
                    Let&apos;s<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Talk</span>
                  </h2>
                  <p className="text-xl text-muted-foreground font-mono leading-relaxed border-l-4 border-primary pl-6">
                    Ready to engineer the future? Drop a signal. I&apos;m available for new opportunities and interesting collaborations.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Quick Actions */}
                  <div className="brutalist-card p-8 border-l-8 border-l-secondary bg-card">
                    <h3 className="text-lg font-bold text-foreground uppercase tracking-widest mb-6 border-b border-border pb-2">
                      Channels
                    </h3>
                    <div className="space-y-4">
                      {contactMethods.map((method, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="p-2 bg-secondary/10 text-secondary rounded-none">
                            {method.icon}
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase text-muted-foreground">{method.label}</p>
                            {method.href ? (
                              <a href={method.href} className="text-lg font-mono text-foreground hover:text-primary transition-colors underline decoration-dotted underline-offset-4">
                                {method.value}
                              </a>
                            ) : (
                              <p className="text-lg font-mono text-foreground">{method.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf"
                      download
                      className="btn-outline-brutalist flex-1 py-4 text-xs"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download V.Card
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-card border-4 border-foreground p-1 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_var(--primary)]">
                  <div className="bg-background border border-border p-6 md:p-8">
                    <div className="mb-8 flex items-center justify-between">
                      <h3 className="text-xl font-black uppercase text-foreground">
                        Transmission Link
                      </h3>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold uppercase text-muted-foreground">Subject Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-muted/20 border-2 border-border p-3 text-foreground font-mono focus:border-primary focus:outline-none transition-colors rounded-none placeholder:text-muted-foreground/50"
                          placeholder="IDENTIFY YOURSELF"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold uppercase text-muted-foreground">Return Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-muted/20 border-2 border-border p-3 text-foreground font-mono focus:border-primary focus:outline-none transition-colors rounded-none placeholder:text-muted-foreground/50"
                          placeholder="ENTER EMAIL COORDINATES"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs font-mono font-bold uppercase text-muted-foreground">Topic</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-muted/20 border-2 border-border p-3 text-foreground font-mono focus:border-primary focus:outline-none transition-colors rounded-none placeholder:text-muted-foreground/50"
                          placeholder="PURPOSE OF CONTACT"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-mono font-bold uppercase text-muted-foreground">Data Packet</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full bg-muted/20 border-2 border-border p-3 text-foreground font-mono focus:border-primary focus:outline-none transition-colors rounded-none resize-none placeholder:text-muted-foreground/50"
                          placeholder="INITIALIZE MESSAGE STREAM..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-neon py-4 text-sm mt-4 group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Transmitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              Send Transmission
                            </>
                          )}
                        </span>
                      </button>

                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-green-500/10 border border-green-500 p-3 text-green-500 font-mono text-xs flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          TRANSMISSION SUCCESSFUL
                        </motion.div>
                      )}

                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-red-500/10 border border-red-500 p-3 text-red-500 font-mono text-xs flex items-center gap-2"
                        >
                          <AlertCircle className="w-4 h-4" />
                          TRANSMISSION FAILED
                        </motion.div>
                      )}
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
