'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Clock,
  ShieldCheck,
  ChevronUp
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { AGENCY_INFO, SERVICES } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Unable to subscribe right now.');
      }

      setSubscribed(true);
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterError(error instanceof Error ? error.message : 'Unable to subscribe right now.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950 px-6 pb-12 pt-16 text-zinc-300 backdrop-blur-md">
      {/* Background ambient pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#2084ba]/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Pre-Footer Callout */}
        <ScrollReveal className="relative mb-20 flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-[0_0_60px_-15px_rgba(32,132,186,0.2)] backdrop-blur-xl md:p-12 lg:flex-row">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#2084ba]/10 blur-[80px]" />
          
          <div className="max-w-2xl text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2084ba]/30 bg-[#2084ba]/10 px-4 py-1.5 text-xs font-semibold text-[#2084ba] backdrop-blur-sm">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#2084ba] opacity-75" />
              <span className="relative">Direct Senior Engineering Squads</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Bring Your Idea to Life?
            </h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl">
              Tell us what you need, and our team will help you find the right solution and plan the next steps.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            {/* Unique RGBA Left-to-Right Slide Button */}
            <Link
              href="/contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-[rgba(32,132,186,0.5)] bg-[rgba(32,132,186,0.1)] px-6 py-3.5 text-sm font-bold text-[#4cb5e6] backdrop-blur-sm transition-all duration-300 active:scale-95 hover:border-[rgba(32,132,186,0.8)] hover:text-white sm:w-auto sm:flex-none"
              id="footer-cta-contact-btn"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[rgba(32,132,186,0.9)] to-[rgba(76,181,230,0.9)] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center gap-2">
                Talk to Us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/50 px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white sm:w-auto sm:flex-none"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* Main Footer Grid */}
        <ScrollReveal 
          variant="fade-up" 
          stagger={100} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80"
        >
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-zinc-700 p-1">
                <img
                  src="/logo.png"
                  alt="Corelix Systems logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Corelix <span className="bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] bg-clip-text text-transparent">Systems</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {AGENCY_INFO.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${AGENCY_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2084ba] hover:bg-[#2084ba] hover:text-white hover:shadow-[0_8px_20px_-5px_rgba(32,132,186,0.5)]"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/50 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2084ba] hover:bg-[#2084ba] hover:text-white hover:shadow-[0_8px_20px_-5px_rgba(32,132,186,0.5)]"
                aria-label="Email Corelix Systems"
                title="Gmail"
              >
                <SiGmail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
              Our 6 Services
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link 
                    href={`/services#${s.id}`} 
                    className="group/link flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="h-px w-0 bg-[#2084ba] transition-all duration-300 group-hover/link:w-3"></span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Agency Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Our Work', href: '/portfolio' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="group/link flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="h-px w-0 bg-[#2084ba] transition-all duration-300 group-hover/link:w-3"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Dispatch */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2084ba] shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.headquarters}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#2084ba] shrink-0 mt-0.5" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition-colors">
                  {AGENCY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#2084ba] shrink-0 mt-0.5" />
                <a
                  href={`https://wa.me/${AGENCY_INFO.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={`Chat with Corelix Systems on WhatsApp at ${AGENCY_INFO.phone}`}
                >
                  {AGENCY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2084ba] shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.workingHours}</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-medium text-zinc-300 block mb-2">
                Tech & Architecture Radar
              </span>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Stay tuned for insights.</span>
                </div>
              ) : (
                <>
                  <form onSubmit={handleNewsletter} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter work email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 min-w-0 rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-2.5 text-xs text-white placeholder-zinc-500 backdrop-blur-md transition-colors focus:border-[#2084ba] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="group/btn relative shrink-0 overflow-hidden rounded-xl bg-[#2084ba] px-4 py-2.5 text-xs font-bold text-white transition-colors"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#1a6fa2] to-[#2084ba] transition-transform duration-500 ease-out group-hover/btn:translate-x-0"></span>
                      <span className="relative z-10">Join</span>
                    </button>
                  </form>
                  {newsletterError && <p className="mt-2 text-xs text-red-400">{newsletterError}</p>}
                </>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Corelix Systems Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              SOC2 Certified Standards
            </span>
            <button
              onClick={scrollToTop}
              className="group/top flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900/50 p-2 hover:border-[#2084ba] hover:text-white transition-all duration-300"
              aria-label="Scroll back to top"
            >
              <ChevronUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover/top:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}