'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#experience', label: 'QA experience' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Hobby projects' },
  { href: '/deep-dives', label: 'Writing' },
];

export default function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeMenu = useCallback(() => {
    if (!open) return;
    setOpen(false);
    setClosing(true);
    setTimeout(() => setClosing(false), 150);
  }, [open]);

  const toggleMenu = useCallback(() => {
    if (open) {
      closeMenu();
    } else {
      setClosing(false);
      setOpen(true);
    }
  }, [open, closeMenu]);

  return (
    <header className="portfolio-header">
      <div className="portfolio-container nav-inner">
        <Link href="/" className="wordmark" aria-label="James Ryan Gaid home">
          jrg<span>.</span>
        </Link>
        <nav
          id="portfolio-navigation"
          className={`portfolio-nav t-dropdown ${open ? 'is-open' : ''} ${closing ? 'is-closing' : ''}`}
          data-origin="top-center"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <a href="#contact" className="nav-contact group t-arrow-glide" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} className="t-arrow-icon" />
          </a>
        </nav>
        <div className="nav-controls">
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="portfolio-navigation"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={toggleMenu}
          >
            <span className="t-icon-swap w-5 h-5" data-state={open ? 'b' : 'a'}>
              <span className="t-icon" data-icon="a">
                <Menu size={20} />
              </span>
              <span className="t-icon" data-icon="b">
                <X size={20} />
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
