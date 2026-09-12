'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const links = [{ href: '#experience', label: 'QA experience' }, { href: '#about', label: 'About' }, { href: '#projects', label: 'Hobby projects' }, { href: '/deep-dives', label: 'Writing' }];

export default function PortfolioNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="portfolio-header">
      <div className="portfolio-container nav-inner">
        <Link href="/" className="wordmark" aria-label="James Ryan Gaid home">jrg<span>.</span></Link>
        <nav id="portfolio-navigation" className={`portfolio-nav ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <a href="#contact" className="nav-contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
        <div className="nav-controls"><ThemeToggle /><button className="menu-toggle" aria-expanded={open} aria-controls="portfolio-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button></div>
      </div>
    </header>
  );
}
