'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  ArrowRight, 
  PhoneCall
} from 'lucide-react';
import { AGENCY_INFO } from '@/lib/data';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);



  const mobileMenu = (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        className="fixed inset-0 z-[9999] bg-black/45 md:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />
      <div id="mobile-navigation-drawer" className="fixed inset-y-0 left-0 z-[10000] w-[78vw] max-w-sm overscroll-contain overflow-y-auto border-r border-zinc-800 bg-zinc-950 px-5 pb-6 pt-24 shadow-2xl md:hidden">
        <div className="space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-white font-semibold'
                    : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="pt-4 flex flex-col gap-2">
          <Link
            href="/contact"
            className="w-full py-3 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Request Project Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${AGENCY_INFO.phone}`}
            className="w-full py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-center font-medium text-xs flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {AGENCY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 z-[9998] w-full transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md shadow-md border-b border-zinc-800' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div className="h-12 w-12 rounded-xl overflow-hidden shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700 bg-white group-hover:scale-105 transition-transform duration-200">
              <img
                src="/logo.png"
                alt="Corelix Systems logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center">
              <span className="font-extrabold text-lg sm:text-xl  lg:text-[25px] tracking-tight text-white leading-none">
                Corelix <span className="text-[#2084ba]">Systems</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-1 py-2 text-sm font-medium transition-colors relative ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-zinc-300 hover:text-white'
                  }`}
                  id={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                  {isActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#2084ba] rounded-full" />}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2084ba] text-white text-sm font-semibold shadow-[0_10px_20px_rgba(32,132,186,0.28)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1a6fa2] hover:shadow-[0_16px_30px_rgba(32,132,186,0.38)] active:scale-[0.98]"
              id="nav-cta-contact-btn"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="relative z-[60] flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
              className="p-2 rounded-lg text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </nav>
      </header>
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}
    </>
  );
}
