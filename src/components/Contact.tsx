'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2, Download, Calendar } from 'lucide-react';
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
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                Contact
              </h2>
              <div className="h-px w-12 bg-primary mb-6" />
              <p className="text-muted-foreground">
                Ready to discuss opportunities? I&apos;d love to hear from you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                className="lg:col-span-1 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="card-enhanced p-5">
                  <h3 className="text-sm font-medium text-foreground mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-primary">{method.icon}</span>
                        <div>
                          <p className="text-xs text-muted-foreground">{method.label}</p>
                          {method.href ? (
                            <a href={method.href} className="text-sm text-foreground hover:text-primary transition-colors">
                              {method.value}
                            </a>
                          ) : (
                            <p className="text-sm text-foreground">{method.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-enhanced p-5">
                  <h3 className="text-sm font-medium text-foreground mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <a
                      href="/files/James%20Ryan%20Gaid%20-%20CV1.pdf"
                      download
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Resume
                    </a>
                    <a
                      href="https://calendar.app.google/wajhYMZYTbUMvHYk6"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="card-enhanced p-6">
                  <h3 className="text-sm font-medium text-foreground mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs text-muted-foreground mb-1.5">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs text-muted-foreground mb-1.5">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs text-muted-foreground mb-1.5">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs text-muted-foreground mb-1.5">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                      >
                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </button>

                      {submitStatus === 'success' && (
                        <span className="flex items-center gap-1.5 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Sent!
                        </span>
                      )}

                      {submitStatus === 'error' && (
                        <span className="flex items-center gap-1.5 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          Failed
                        </span>
                      )}
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
