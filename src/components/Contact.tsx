'use client';

import { useState } from 'react';
import { ArrowUpRight, AlertCircle, Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

type Status = 'idle' | 'success' | 'error';

const EMAIL = 'hello@jrgaid.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<Status>('idle');
  const [focused, setFocused] = useState<string | null>(null);
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!res.ok) throw new Error('Failed');
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        window.location.href = `mailto:${EMAIL}?subject=Portfolio%20Contact&body=${body}`;
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

    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fieldClasses =
    'w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none font-sans';

  const rowClasses = (name: string) =>
    `group relative flex items-start gap-3 border-b py-2.5 transition-colors duration-200 ${
      focused === name ? 'border-foreground' : 'border-border'
    }`;

  return (
    <section id="contact" className="py-14 md:py-20 border-t border-border">
      <SectionHeading index="07" title="Contact" />
      <p className="text-base text-muted-foreground mb-8 max-w-xl">
        Drop me a note. I usually reply within a day or two.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-1">
        <div className={rowClasses('name')}>
          <label
            htmlFor="contact-name"
            className="font-mono text-xs text-muted-foreground/70 pt-0.5 w-16 shrink-0 select-none transition-colors group-focus-within:text-foreground"
          >
            name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            required
            autoComplete="name"
            placeholder="Alex Rivera"
            className={fieldClasses}
          />
        </div>

        <div className={rowClasses('email')}>
          <label
            htmlFor="contact-email"
            className="font-mono text-xs text-muted-foreground/70 pt-0.5 w-16 shrink-0 select-none transition-colors group-focus-within:text-foreground"
          >
            email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            required
            autoComplete="email"
            placeholder="you@domain.com"
            className={fieldClasses}
          />
        </div>

        <div className={rowClasses('message')}>
          <label
            htmlFor="contact-message"
            className="font-mono text-xs text-muted-foreground/70 pt-0.5 w-16 shrink-0 select-none transition-colors group-focus-within:text-foreground"
          >
            message
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            required
            rows={4}
            placeholder="Tell me a little about what you have in mind…"
            className={`${fieldClasses} resize-none leading-relaxed`}
          />
        </div>

        <div className="pt-5 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 min-h-[1.5rem]" aria-live="polite">
            {submitStatus === 'success' && (
              <span className="inline-flex items-center gap-2 text-xs text-foreground">
                <span className="t-success-check" data-state="in" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" />
                  </svg>
                </span>
                <span>{formspreeId ? 'Message sent. Talk soon.' : 'Email draft opened. Send it from your email app.'}</span>
              </span>
            )}
            {submitStatus === 'error' && (
              <span className="inline-flex items-center gap-1.5 text-xs text-destructive">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Something broke. Try again or email me directly.</span>
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-xs font-medium tracking-wide hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Sending</span>
              </>
            ) : (
              <>
                <span>Send message</span>
                <ArrowUpRight className="w-3.5 h-3.5 t-arrow-icon" />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
