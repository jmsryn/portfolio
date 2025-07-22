'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  AlertCircle, Loader2, Calendar, Download 
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'hello@jrgaid.site',

    href: 'mailto:hello@jrgaid.site',
    description: 'Best for detailed inquiries'
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Remote',
    href: null,
    description: 'Open to remote opportunities'
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SectionWrapper>
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-balance relative w-fit mx-auto after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[3px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-accent">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to discuss QA strategies, automation opportunities, or potential collaborations? 
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-enhanced p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Let&apos;s Connect
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  I&apos;m always interested in discussing new opportunities, 
                  sharing knowledge about QA practices, or collaborating on interesting projects.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-primary mt-1">{method.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground">{method.label}</div>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-primary hover:underline text-sm break-all"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <div className="text-sm text-muted-foreground">{method.value}</div>
                        )}
                        <div className="text-xs text-muted-foreground mt-1">
                          {method.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <motion.div
                className="card-enhanced p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-medium text-foreground mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <a 
                    href="/files/James_Ryan_Gaid_Resume.pdf" 
                    download
                    className="btn-secondary w-full"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                  <a 
                    href="mailto:james.gaid@email.com?subject=Let&apos;s Schedule a Call"
                    className="btn-ghost w-full"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule a Call
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="card-enhanced p-8">
                <h3 className="font-semibold text-foreground mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-md border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project, questions, or how I can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.div
                        className="flex items-center gap-2 text-green-600 text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <CheckCircle className="w-4 h-4" />
                        Message sent successfully!
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        className="flex items-center gap-2 text-red-600 text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <AlertCircle className="w-4 h-4" />
                        Failed to send message. Please try again.
                      </motion.div>
                    )}
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    * Required fields. I typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
