'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'success' | 'error';

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
        const to = 'hello@jrgaid.com';
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        window.location.href = `mailto:${to}?subject=Portfolio%20Contact&body=${body}`;
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
    `group flex items-start gap-3 border-b transition-colors ${
      focused === name ? 'border-foreground/40' : 'border-border'
    } py-2.5`;

  return (
    <section id="contact" className="py-8 border-t border-border">
      <h2 className="text-lg font-semibold text-foreground font-sans mb-1">
        <span className="text-muted-foreground/40 font-mono font-normal text-sm mr-1.5">~/</span>
        contact
      </h2>
      <p className="text-xs text-muted-foreground mb-6">
        Have a project, role, or idea? Drop a note — I reply within a day or two.
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-1">
        <div className={rowClasses('name')}>
          <label
            htmlFor="contact-name"
            className="font-mono text-xs text-muted-foreground/70 pt-0.5 w-16 shrink-0 select-none"
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
            placeholder="Jane Doe"
            className={fieldClasses}
          />
        </div>

        <div className={rowClasses('email')}>
          <label
            htmlFor="contact-email"
            className="font-mono text-xs text-muted-foreground/70 pt-0.5 w-16 shrink-0 select-none"
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
            className="font-mono text-xs text-muted-foreground/70 pt-0.5 w-16 shrink-0 select-none"
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
          <div className="flex items-center gap-2 min-h-[1.25rem]" aria-live="polite">
            {submitStatus === 'success' && (
              <span className="inline-flex items-center gap-1.5 text-xs text-foreground">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Message sent — talk soon.
              </span>
            )}
            {submitStatus === 'error' && (
              <span className="inline-flex items-center gap-1.5 text-xs text-destructive">
                <AlertCircle className="w-3.5 h-3.5" />
                Something broke. Try again or email me directly.
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-xs font-medium tracking-wide hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Sending</span>
              </>
            ) : (
              <>
                <span>Send message</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
