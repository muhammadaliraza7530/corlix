import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  Trophy,
  BriefcaseBusiness,
  Gauge,
  CalendarDays,
  Code2,
  Palette,
  UsersRound,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';
import siteAssets from '@/lib/site-assets.json';

const logos = [
  'nuventure-logo.jpg',
  'logo (1).jpg',
  'logo.jpg',
  'logo-nk.jpg',
  'aman-logo.jpg',
  'exacr.jpg',
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-[#0c0806] py-24 sm:py-32">
        <div className="absolute right-0 top-0 h-40 w-72 bg-[#2084ba]/10 blur-3xl" />
        <ScrollReveal className="relative mx-auto max-w-5xl space-y-7 px-4 text-center sm:px-6 lg:px-8" variant="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2084ba]/50 bg-[#2084ba]/10 px-4 py-1.5 text-xs font-mono font-semibold tracking-[0.18em] text-[#2084ba]">
            <span>ABOUT CORELIX SYSTEMS</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-2xl font-extrabold leading-[0.98] tracking-tight text-white sm:text-4xl lg:text-6xl">
            Building bold brands
            <br />
            from <span className="text-[#2084ba]">Lahore</span>
            <br />
            <span className="text-[#2084ba]">since 2023</span>.
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
           We help businesses build strong digital experiences through professional websites, mobile apps, AI solutions, video production, and SEO.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. Founder Note */}
      <section className="bg-[#080A0F] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ScrollReveal className="relative mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[36px] border border-[#0088FF]/30 bg-[#0C1017]/80 p-5 shadow-[0_0_80px_rgba(0,136,255,0.25),_inset_0_0_40px_rgba(0,136,255,0.1)] backdrop-blur-md md:p-9 lg:grid-cols-[0.9fr_1.1fr]" variant="zoom-in">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,136,255,0.15)_0%,_transparent_70%)]" />
          <div className="relative z-10 flex items-center justify-center bg-[#0a0d14]/70 p-2 sm:p-4">
            <div className="relative w-full max-w-sm">
              <div className="rounded-[28px] bg-gradient-to-br from-[#0088FF] to-[#0055B3] p-1 shadow-[0_0_40px_rgba(0,136,255,0.35)]">
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[#080A0F]">
                  <Image
                    src={siteAssets.founder.src}
                    alt={siteAssets.founder.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#0088FF]/40 bg-[#080A0F]/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#00A3FF] shadow-lg">
                Founder & CEO
              </div>
            </div>
          </div>

          <div className="relative z-10 space-y-7 bg-zinc-900/40 p-2 sm:p-4 lg:p-6">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#0088FF]/30 bg-[#0088FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
              <Sparkles className="h-3.5 w-3.5" />
              A Note from the Founder
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-5xl">
                Muhammad <span className="text-[#00A3FF]">Ali Raza</span>
              </h2>
              <p className="mt-3 text-xs font-mono uppercase tracking-[0.28em] text-zinc-400">
                Leading Corelix Systems since 2023
              </p>
            </div>
            <blockquote className="relative rounded-2xl border border-[#0088FF]/30 bg-[#080A0F]/80 p-4 text-[12px] italic leading-relaxed text-zinc-300 shadow-[0_0_25px_rgba(0,136,255,0.15)] sm:p-7 sm:text-lg">
              <span className="absolute -top-3.5 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-[#0088FF] text-xs font-bold text-black">&quot;</span>
              &quot;We believe every brand has a story worth telling. Our job is to make sure the world actually stops and listens. Every project we ship is built to be remembered.&quot;
            </blockquote>
            <div className="grid grid-cols-3 gap-4">
              {[
                ['140+', 'Projects'],
                ['100%', 'Satisfaction'],
                ['3+', 'Years'],
              ].map(([value, label]) => (
                <div key={label} className="min-w-0 rounded-2xl border border-[#0088FF]/25 bg-[#080A0F]/90 p-2 text-center shadow-[0_0_20px_rgba(0,136,255,0.1)] transition-all hover:border-[#0088FF]/50 sm:p-4">
                  <div className="text-2xl font-bold text-[#00A3FF]">{value}</div>
                  <div className="mt-1 break-words text-[8px] leading-tight uppercase tracking-[0.08em] text-zinc-500 sm:text-[10px] sm:tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Awards & Recognition */}
      <section className="bg-[#080A0F] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="mb-12 text-center" variant="fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0088FF]/30 bg-[#0088FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
              <Trophy className="h-3.5 w-3.5" />
              Awards & Recognition
            </div>
            <h2 className="text-center text-3xl font-bold text-white md:text-5xl">
              Recognition for <span className="text-[#00A3FF]">award-winning work</span>
            </h2>
            <p className="mt-3 text-center text-sm text-zinc-400 md:text-base">
              Recognition for software engineering, custom web applications, and digital solutions.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2" variant="fade-up" stagger={100}>
            <article className="flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#0088FF]/30 bg-[#0B0F17] p-4 shadow-[0_0_60px_-10px_rgba(0,136,255,0.25)] transition-all duration-300 hover:border-[#0088FF]/60">
              <div className="relative h-[280px] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#172331] via-[#0d1621] to-[#080A0F] p-6 md:h-[320px]">
                <Image
                  src={siteAssets.siteHero.src}
                  alt={siteAssets.siteHero.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute left-6 top-6 z-10 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold text-white ">2026</div>
               
              </div>
              <div className="px-3 pb-3 pt-5">
                <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#00A3FF]">Recognition</div>
                <h3 className="mb-2 text-xl font-bold text-white">Engineering Agency of the Year</h3>
                <p className="text-xs leading-relaxed text-zinc-400">Awarded for standout full-stack solutions and custom web apps.</p>
              </div>
            </article>

            <article className="flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#0088FF]/30 bg-[#0B0F17] p-4 shadow-[0_0_60px_-10px_rgba(0,136,255,0.25)] transition-all duration-300 hover:border-[#0088FF]/60">
              <div className="relative h-[280px] w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#172331] via-[#0d1621] to-[#080A0F] p-6 md:h-[320px]">
                <div className="absolute left-6 top-6 z-20 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">2026</div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="text-4xl font-extrabold text-white">140+</div>
                  <div className="max-w-xs text-lg font-semibold text-white/90">Projects delivered with precision.</div>
                </div>
                <Image
                  src="/ceo/ceo.jpg"
                  alt="Corelix Systems founder"
                  fill
                  className="object-cover object-top"
                />
                <div className="relative z-10 flex h-full flex-col justify-end text-xs font-medium uppercase tracking-widest text-white/70">Since 2018 / Islamabad</div>
              </div>
              <div className="px-3 pb-3 pt-5">
                <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#00A3FF]">Milestone</div>
                <h3 className="mb-2 text-xl font-bold text-white">140+ Projects Delivered</h3>
                <p className="text-xs leading-relaxed text-zinc-400">Years of experience building enterprise web and mobile applications.</p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-2 gap-4 md:grid-cols-4" variant="spring-bounce" stagger={80}>
            {[
              [Trophy, '12+', 'Awards'],
              [BriefcaseBusiness, '140+', 'Projects'],
              [Gauge, '98%', 'Client Success'],
              [CalendarDays, '8+ yrs', 'Experience'],
            ].map(([Icon, value, label]) => {
              const StatIcon = Icon as typeof Trophy;
              return (
                <div key={label as string} className="rounded-2xl border border-[#0088FF]/25 bg-[#080A0F]/90 p-6 text-center shadow-[0_0_20px_rgba(0,136,255,0.1)] transition-all hover:border-[#0088FF]/50">
                  <StatIcon className="mx-auto mb-2 h-6 w-6 text-[#00A3FF]" />
                  <div className="mb-1 text-3xl font-extrabold text-white">{value as string}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">{label as string}</div>
                </div>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Our Story */}
      <section className="bg-[#080A0F]">
        <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center" variant="fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0088FF]/30 bg-[#0088FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
            Our Story
          </div>
          <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            From a focused dev studio to Lahore&apos;s <span className="text-[#00A3FF]">go-to engineering agency</span>.
          </h2>
          <div className="space-y-6 text-left text-sm leading-relaxed text-zinc-400 md:text-base">
            <p>
              Corelix Systems started in 2023 in Lahore with a simple vision — that businesses deserve high-performance custom web applications and full-stack architecture built with precision. What began as an independent dev studio has evolved into an engineering partner specializing in React, Next.js, Node.js, and cloud systems.
            </p>
            <p>
              Over the last 8+ years, we&apos;ve partnered with over 140+ brands and businesses across Pakistan and internationally — from ambitious tech startups to real estate developers, healthcare practices, and travel companies. Every project is engineered with modular architecture, high performance, and responsive design at its core.
            </p>
            <p>
              We operate as a direct technical extension of your team — handling end-to-end full-stack development, API integrations, custom dashboards, and seamless deployments under one roof. That means robust code, faster launch cycles, and a digital product built to scale.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. Our Journey & Core Pillars */}
      <section className="bg-[#080A0F] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0088FF]/30 bg-[#0088FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
              Our Journey
            </div>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Three years, <span className="text-[#00A3FF]">one focus</span>
            </h2>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col justify-between rounded-[28px] border border-[#0088FF]/30 bg-[#0C1017] p-6 shadow-[0_0_40px_-10px_rgba(0,136,255,0.2)] transition-all hover:border-[#0088FF]/60">
              <div>
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0088FF] text-xs font-bold text-black">1</div>
                <div className="mb-2 text-2xl font-extrabold text-white">2023</div>
                <h3 className="mb-2 text-sm font-bold text-[#00A3FF]">Corelix Systems is founded</h3>
                <p className="text-xs leading-relaxed text-zinc-400">Muhammad Ali Raza starts Corelix Systems in Lahore as a custom web development studio, serving startups and local businesses.</p>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-[28px] border border-[#0088FF]/30 bg-[#0C1017] p-6 shadow-[0_0_40px_-10px_rgba(0,136,255,0.2)] transition-all hover:border-[#0088FF]/60">
              <div>
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0088FF] text-xs font-bold text-black">2</div>
                <div className="mb-2 text-2xl font-extrabold text-white">2024</div>
                <h3 className="mb-2 text-sm font-bold text-[#00A3FF]">Full-stack expansion</h3>
                <p className="text-xs leading-relaxed text-zinc-400">Expanded architecture to Next.js, Node.js API services, cloud databases, and healthcare/restaurant platforms.</p>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-[28px] border border-[#0088FF]/30 bg-[#0C1017] p-6 shadow-[0_0_40px_-10px_rgba(0,136,255,0.2)] transition-all hover:border-[#0088FF]/60">
              <div>
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0088FF] text-xs font-bold text-black">3</div>
                <div className="mb-2 text-2xl font-extrabold text-white">2025</div>
                <h3 className="mb-2 text-sm font-bold text-[#00A3FF]">Global &amp; Enterprise clients</h3>
                <p className="text-xs leading-relaxed text-zinc-400">Crossed 80+ delivered web projects across real estate, tour agencies, and international client portals.</p>
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-[28px] border border-[#0088FF]/30 bg-[#0C1017] p-6 shadow-[0_0_40px_-10px_rgba(0,136,255,0.2)] transition-all hover:border-[#0088FF]/60">
              <div>
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0088FF] text-xs font-bold text-black">4</div>
                <div className="mb-2 text-2xl font-extrabold text-white">2026</div>
                <h3 className="mb-2 text-sm font-bold text-[#00A3FF]">Where we are today</h3>
                <p className="text-xs leading-relaxed text-zinc-400">140+ projects delivered, 100% client satisfaction rate, offering full-stack Next.js, React, and custom AI web applications.</p>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-[28px] border border-[#0088FF]/30 bg-[#0C1017] p-6 shadow-[0_0_30px_-10px_rgba(0,136,255,0.15)] transition-all hover:border-[#0088FF]/50">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0088FF]/40 bg-[#0088FF]/15 text-[#00A3FF]"><Code2 className="h-5 w-5" /></div>
              <h3 className="mb-2 text-lg font-bold text-white">Architecture first</h3>
              <p className="text-xs leading-relaxed text-zinc-400">Every line of code is structured for performance, security, and long-term scalability.</p>
            </article>
            <article className="rounded-[28px] border border-[#0088FF]/30 bg-[#0C1017] p-6 shadow-[0_0_30px_-10px_rgba(0,136,255,0.15)] transition-all hover:border-[#0088FF]/50">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0088FF]/40 bg-[#0088FF]/15 text-[#00A3FF]"><Palette className="h-5 w-5" /></div>
              <h3 className="mb-2 text-lg font-bold text-white">Craft-obsessed</h3>
              <p className="text-xs leading-relaxed text-zinc-400">We sweat the UI animations, loading speed, and component modularity. Nothing ships unoptimized.</p>
            </article>
            <article className="rounded-[28px] border border-[#0088FF]/30 bg-[#0C1017] p-6 shadow-[0_0_30px_-10px_rgba(0,136,255,0.15)] transition-all hover:border-[#0088FF]/50">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#0088FF]/40 bg-[#0088FF]/15 text-[#00A3FF]"><UsersRound className="h-5 w-5" /></div>
              <h3 className="mb-2 text-lg font-bold text-white">Direct Engineering</h3>
              <p className="text-xs leading-relaxed text-zinc-400">No middle managers or outsourcing — you work directly with the core full-stack team.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Visit the Studio */}
      <section className="bg-[#080A0F] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0088FF]/30 bg-[#0088FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
              Visit the Studio
            </div>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Our office in <span className="text-[#00A3FF]">Gul Colony, Lahore</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            <div className="flex flex-col justify-between rounded-[32px] border border-[#0088FF]/30 bg-[#0C1017] p-8 shadow-[0_0_50px_-10px_rgba(0,136,255,0.2)] lg:col-span-5">
              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0088FF]/40 bg-[#0088FF]/15 text-[#00A3FF]"><MapPin className="h-5 w-5" /></div>
                  <div><div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Address</div><div className="mt-1 text-sm font-semibold text-white">HAQ Family Hospital, Gul Colony, Lahore, Pakistan</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0088FF]/40 bg-[#0088FF]/15 text-[#00A3FF]"><Mail className="h-5 w-5" /></div>
                  <div><div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Email</div><div className="mt-1 text-sm font-semibold text-white">corelixsystem@gmail.com</div></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0088FF]/40 bg-[#0088FF]/15 text-[#00A3FF]"><Phone className="h-5 w-5" /></div>
                  <div><div className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">WhatsApp / Phone</div><div className="mt-1 text-sm font-semibold text-white">+92 336 0651081</div></div>
                </div>
              </div>
              <a href="https://wa.me/923360651081" target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0088FF] to-[#00A3FF] px-6 py-4 text-sm font-bold text-black shadow-[0_0_25px_rgba(0,136,255,0.4)] transition-all hover:opacity-90">
                Book a studio visit <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex min-h-[350px] overflow-hidden rounded-[32px] border border-[#0088FF]/30 bg-[#0C1017] p-3 shadow-[0_0_50px_-10px_rgba(0,136,255,0.2)] lg:col-span-7">
              <iframe
                title="Corelix Systems studio location"
                src="https://maps.google.com/maps?q=31.4522983,74.3621914&z=17&output=embed"
                className="h-full min-h-[350px] w-full rounded-[24px] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Logo Marquee */}
      <section className="overflow-hidden border-t border-zinc-800 bg-[#080A0F] py-20 text-white sm:py-24">
        <div className="mx-auto mb-12 max-w-4xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0088FF]/30 bg-[#0088FF]/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00A3FF]">
            ★ Our Clients &amp; Their Words
          </div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Trusted by leading brands — <span className="text-[#00A3FF]">hear it from them</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm text-zinc-400 md:text-base">
            Meet the brands we partner with and the digital results they share about working with Corelix Systems.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#080A0F] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#080A0F] after:to-transparent">
          <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo}-${index}`} className="flex h-[100px] w-[180px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105 sm:h-[110px] sm:w-[200px]">
                <Image
                  src={`/our-clinets/${logo}`}
                  alt="Client Logo"
                  width={150}
                  height={80}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
