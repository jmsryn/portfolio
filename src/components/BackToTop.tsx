'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return show ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  ) : null;
}
