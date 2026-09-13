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
      setIsScrolled(window.scrollY > 20);
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
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm md:hidden"
        onClick={() => setMobileMenuOpen(false)}
        style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
      />
      
      {/* Drawer */}
      <div 
        id="mobile-navigation-drawer" 
        className="fixed inset-y-0 left-0 z-[10000] w-[80vw] max-w-sm overscroll-contain overflow-y-auto border-r border-zinc-800 bg-zinc-950 px-6 pb-8 pt-24 shadow-2xl md:hidden"
        style={{ animation: 'slideInLeft 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        {/* Close Button inside drawer */}
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute right-5 top-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Nav Links */}
        <div className="space-y-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800/50 text-white border border-zinc-700'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <Link
            href="/contact"
            className="w-full py-3.5 rounded-xl bg-[#2084ba] hover:bg-[#1a6fa2] text-white text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-900/30 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${AGENCY_INFO.phone}`}
            className="w-full py-3 rounded-xl border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white text-center font-medium text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{AGENCY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Animations injected globally for this render */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0.5; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );

  return (
    <>
      <header className="fixed top-0 left-0 z-[9998] w-full">
        <nav 
          className={`w-full transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-zinc-950/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-zinc-800/80' 
              : 'bg-gradient-to-b from-black/50 to-transparent border-b border-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              id="brand-logo-link"
            >
              <div className="h-11 w-11 rounded-xl overflow-hidden shadow-sm ring-1 ring-zinc-700/50 bg-zinc-900 group-hover:ring-[#2084ba]/50 transition-all duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Corelix Systems logo"
                  className="h-full w-full object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                  Corelix <span className="text-[#2084ba]">Systems</span>
                </span>
                <span className="hidden sm:block text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-medium mt-1">
                  Digital Agency
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                      isActive ? 'text-white' : 'text-zinc-300 hover:text-white'
                    }`}
                    id={`nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    {/* Animated Underline */}
                    <span className={`absolute bottom-0 left-1/2 h-[2px] bg-[#2084ba] transition-all duration-300 ease-out transform -translate-x-1/2 ${
                      isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2084ba] text-white text-sm font-semibold shadow-[0_8px_20px_-5px_rgba(32,132,186,0.5)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1a6fa2] hover:shadow-[0_12px_25px_-5px_rgba(32,132,186,0.6)] active:scale-95"
                id="nav-cta-contact-btn"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="relative z-[10001] flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
                className="p-2.5 rounded-lg text-white bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(mobileMenu, document.body)}
    </>
  );
}