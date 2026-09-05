'use client';

import React, { FormEvent, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const inputClassName = 'w-full rounded-2xl border border-white/10 bg-[#080A0F] px-5 py-4 text-sm text-white placeholder-zinc-500 transition-all focus:border-[#0088FF] focus:outline-none';
const iconClassName = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#0088FF]/30 bg-[#0088FF]/15 text-[#00A3FF]';

export default function ContactPageClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Full-Stack Web App (Next.js/React)');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, services: [service], message }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Unable to send your message.');
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (submissionError) {
      setStatus('error');
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to send your message.');
    }
  };

  return (
    <main className="min-h-screen bg-[#080A0F] text-white">
      <ScrollReveal className="mx-auto max-w-4xl px-6 pb-12 pt-46 text-center" variant="fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0088FF]/30 bg-[#0088FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
          Get in Touch
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Let&apos;s <span className="text-[#00A3FF]">build your app.</span>
        </h1>
        <p className="mx-auto max-w-xl text-base text-zinc-400 md:text-lg">
          Tell us about your web, mobile, or AI project. We reply within one working day.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mx-auto max-w-6xl px-6 pb-24" variant="zoom-in">
        <div className="grid grid-cols-1 items-start gap-12 rounded-[36px] border border-[#0088FF]/30 bg-[#0C1017] p-8 shadow-[0_0_60px_-15px_rgba(0,136,255,0.25)] md:p-12 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-5" variant="fade-left">
            <h2 className="mb-2 text-2xl font-extrabold text-white md:text-3xl">Reach us directly.</h2>
            <p className="mb-8 text-sm text-zinc-400">Prefer to skip the form? Any of these work perfectly.</p>

            <div className="space-y-5">
              <a href="mailto:corelixsystem@gmail.com" className="flex items-center gap-4">
                <span className={iconClassName}><Mail className="h-5 w-5" /></span>
                <span className="text-sm font-semibold text-white">corelixsystem@gmail.com</span>
              </a>
              <a href="https://wa.me/923360651081" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <span className={iconClassName}><MessageCircle className="h-5 w-5" /></span>
                <span className="text-sm font-semibold text-white">WhatsApp us</span>
              </a>
              <a href="tel:+923360651081" className="flex items-center gap-4">
                <span className={iconClassName}><Phone className="h-5 w-5" /></span>
                <span className="text-sm font-semibold text-white">+92 336 0651081</span>
              </a>
              <a href="https://github.com/corelix-systems" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <span className={iconClassName}><Code2 className="h-5 w-5" /></span>
                <span className="text-sm font-semibold text-white">@corelixsystems</span>
              </a>
              <div className="flex items-center gap-4">
                <span className={iconClassName}><MapPin className="h-5 w-5" /></span>
                <span className="text-sm font-semibold text-white">HAQ Family Hospital, Gul Colony, Lahore</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" variant="fade-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input required type="text" placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} className={inputClassName} />
              <input required type="email" placeholder="Email address" value={email} onChange={(event) => setEmail(event.target.value)} className={inputClassName} />
              <select value={service} onChange={(event) => setService(event.target.value)} className={`${inputClassName} text-zinc-400`}>
                <option>Full-Stack Web App (Next.js/React)</option>
                <option>Mobile App Development</option>
                <option>Custom Software / Dashboard</option>
              </select>
              <textarea required rows={4} placeholder="Tell us about your project" value={message} onChange={(event) => setMessage(event.target.value)} className={`${inputClassName} border-[#0088FF]/40 p-5 focus:ring-1 focus:ring-[#0088FF]`} />

              {status === 'error' && <p className="text-sm text-red-400">{error}</p>}
              {status === 'success' && <p className="flex items-center gap-2 text-sm text-[#00A3FF]"><CheckCircle2 className="h-4 w-4" /> Message sent successfully.</p>}
              <button type="submit" disabled={status === 'sending'} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0088FF] to-[#00A3FF] py-4 text-sm font-extrabold text-black shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all hover:opacity-90 disabled:cursor-wait disabled:opacity-60">
                {status === 'sending' ? 'Sending...' : 'Send Message'} <ArrowRight className="h-4 w-4" /><Send className="hidden h-4 w-4" />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </main>
  );
}
