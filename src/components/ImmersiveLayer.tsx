'use client';

import { useEffect } from 'react';

/* Scroll and pointer choreography for the home page, written without
   framer-motion because next.config aliases it to a no-op in builds.
   - [data-reveal] / [data-reveal="stagger"]: enter as they scroll into view
   - [data-count]: counts up once visible
   - .career-details: --rail tracks how far the timeline has been read
   - .project-item: pointer-driven tilt and glare
   - nav links: data-active follows the section in view */
export default function ImmersiveLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: (() => void)[] = [];

    // Reveals. Anything already on screen is marked before hiding kicks in, so nothing flickers.
    const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    reveals.forEach((el) => {
      if (el.dataset.reveal === 'stagger') {
        Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
      }
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add('is-inview');
    });
    root.classList.add('reveal-ready');
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-inview');
        revealObserver.unobserve(entry.target);
      }),
      { rootMargin: '0px 0px -10% 0px' },
    );
    reveals.filter((el) => !el.classList.contains('is-inview')).forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    // Count-up figures.
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
    if (!reduce) {
      const countObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countObserver.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        const final = el.textContent ?? '';
        const target = Number(el.dataset.count);
        const { prefix = '', suffix = '' } = el.dataset;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1400);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = p < 1 ? `${prefix}${Math.round(target * eased)}${suffix}` : final;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }), { threshold: 0.6 });
      counters.forEach((el) => countObserver.observe(el));
      cleanups.push(() => countObserver.disconnect());
    }

    // Scroll progress and the career timeline rail.
    const rail = document.querySelector<HTMLElement>('.career-details');
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        root.style.setProperty('--scroll', String(max > 0 ? window.scrollY / max : 0));
        if (rail) {
          const rect = rail.getBoundingClientRect();
          const read = (window.innerHeight * 0.6 - rect.top) / rect.height;
          rail.style.setProperty('--rail', String(Math.min(1, Math.max(0, read))));
        }
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    cleanups.push(() => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });

    // Active navigation link.
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.portfolio-nav a[href^="#"]'));
    const sections = navLinks
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute('href')!))
      .filter((s): s is HTMLElement => Boolean(s));
    const navObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.toggleAttribute('data-active', a.getAttribute('href') === `#${entry.target.id}`));
    }), { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => navObserver.observe(s));
    cleanups.push(() => navObserver.disconnect());

    // Card tilt, for precise pointers only.
    if (!reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.querySelectorAll<HTMLElement>('.project-item').forEach((card) => {
        const move = (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          card.style.setProperty('--rx', `${(0.5 - y) * 7}deg`);
          card.style.setProperty('--ry', `${(x - 0.5) * 9}deg`);
          card.style.setProperty('--tx', String(x - 0.5));
          card.style.setProperty('--ty', String(y - 0.5));
          card.style.setProperty('--gx', `${x * 100}%`);
          card.style.setProperty('--gy', `${y * 100}%`);
        };
        const leave = () => ['--rx', '--ry', '--tx', '--ty'].forEach((p) => card.style.removeProperty(p));
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', leave);
        });
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      root.classList.remove('reveal-ready');
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
