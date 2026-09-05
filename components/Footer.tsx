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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[rgba(8,10,15,0.9)] px-6 pb-12 pt-16 text-zinc-300 backdrop-blur-md">
      {/* Background ambient pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-[rgba(0,136,255,0.08)] blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Pre-Footer Callout */}
        <div className="relative mb-16 flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[32px] border border-[rgba(0,136,255,0.3)] bg-[rgba(12,16,23,0.7)] p-8 shadow-[0_0_60px_-15px_rgba(0,136,255,0.25)] backdrop-blur-xl md:p-12 lg:flex-row">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[rgba(0,136,255,0.1)] blur-[80px]" />
          <div className="max-w-2xl text-center lg:text-left space-y-2">
            <ScrollReveal className="inline-block">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,136,255,0.3)] bg-[rgba(0,136,255,0.12)] px-4 py-1.5 text-xs font-semibold text-[#00A3FF] backdrop-blur-sm">
                <span className="h-2 w-2 animate-ping rounded-full bg-[#00A3FF]" />
                Direct Senior Engineering Squads
              </div>
            </ScrollReveal>
            <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">
             Ready to Bring Your Idea to Life?
            </h3>
            <p className="text-zinc-400 text-sm md:text-base">
             Tell us what you need, and our team will help you find the right solution and plan the next steps.
            </p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[rgba(0,136,255,0.85)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(0,136,255,0.4)] backdrop-blur-sm transition-all hover:bg-[rgba(0,136,255,1)] active:scale-95 sm:w-auto sm:flex-none"
              id="footer-cta-contact-btn"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] px-6 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all hover:bg-[rgba(255,255,255,0.1)] hover:text-white sm:w-auto sm:flex-none"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-zinc-700">
                <img
                  src="/logo.png"
                  alt="Corelix Systems logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Corelix <span className="text-[#2084ba]">Systems</span>
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
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,136,255,0.4)] hover:bg-[rgba(0,136,255,0.1)] hover:text-[#00A3FF]"
                aria-label="Chat on WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,136,255,0.4)] hover:bg-[rgba(0,136,255,0.1)] hover:text-[#00A3FF]"
                aria-label="Email Corelix Systems"
                title="Gmail"
              >
                <SiGmail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Our 6 Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link 
                    href={`/services#${s.id}`} 
                    className="text-zinc-400 hover:text-emerald-400 transition-colors block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Agency Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
             Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                 Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-zinc-400 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                 Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Dispatch */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
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
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
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
                      className="flex-1 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-[rgba(12,16,23,0.8)] px-4 py-2.5 text-xs text-white placeholder-zinc-500 backdrop-blur-md focus-within:border-[rgba(0,136,255,0.5)] focus:border-[rgba(0,136,255,0.5)] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="shrink-0 rounded-xl bg-[rgba(0,136,255,0.9)] px-4 py-2 text-xs font-bold text-white shadow-[0_0_15px_rgba(0,136,255,0.3)] transition-all hover:bg-[rgba(0,136,255,1)]"
                    >
                      Join
                    </button>
                  </form>
                  {newsletterError && <p className="mt-2 text-xs text-red-400">{newsletterError}</p>}
                </>
              )}
            </div>
          </div>
        </div>

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
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
