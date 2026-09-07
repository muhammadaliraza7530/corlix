'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Star,
  ExternalLink,
} from 'lucide-react';
import { SERVICES, PORTFOLIO_PROJECTS, TESTIMONIALS, AGENCY_INFO } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactForm from '@/components/ContactForm';
import ScrollReveal from '@/components/ScrollReveal';

function CountUpMetric({ value }: { value: string }) {
  const metricRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return;

    const numericValue = Number.parseFloat(value);
    const suffix = value.replace(/^[\d.]+/, '');
    const decimalPlaces = (value.split('.')[1]?.match(/^\d+/)?.[0].length ?? 0);
    let animationFrame = 0;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / 1400, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue((numericValue * easedProgress).toFixed(decimalPlaces));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayValue(numericValue.toFixed(decimalPlaces));
          observer.disconnect();
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.35 });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <span ref={metricRef}>{displayValue}{value.replace(/^[\d.]+/, '')}</span>;
}

export default function HomePageClient() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);
  const marqueeTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];
  const capabilitiesSectionRef = useRef<HTMLElement | null>(null);
  const capabilitiesVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const capabilitiesSection = capabilitiesSectionRef.current;
    const video = capabilitiesVideoRef.current;

    if (!capabilitiesSection || !video) return;

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          video.load();
          preloadObserver.disconnect();
        }
      },
      { rootMargin: '500px 0px' }
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) return;

        if (entry.isIntersecting) {
          video.muted = false;
          video.volume = 1;
          void video.play().catch(() => {
            video.muted = true;
            void video.play().catch(() => undefined);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    preloadObserver.observe(capabilitiesSection);
    observer.observe(capabilitiesSection);

    return () => {
      preloadObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative overflow-hidden border-b border-zinc-200 pt-12 pb-20 sm:pt-16 sm:pb-28 dark:border-zinc-800">
        <div className="absolute inset-0 overflow-hidden bg-zinc-950">
          <Image
            src="/home-hero/hero-1.png"
            alt="Corelix Systems team building digital experiences in Lahore"
            fill
            priority
            className="h-full w-full object-cover lg:scale-105 blur-[6px]"
          />
          <div className="absolute inset-0 bg-zinc-950/30 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="flex justify-center animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-800 dark:text-zinc-200 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Digital Agency <span className="text-[#2084ba]"><b>Pakistan</b></span></span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:400ms]">
            <h1 className="text-4xl sm:text-6xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
              Transforming Bold Ideas Into{' '}
              <span className="text-[#2084ba]">
                Scalable Digital Realities
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-[19px] text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              We design, engineer, and scale high-concurrency web apps, native Android systems, bespoke AI models, cinematic video content, and organic search engines.
            </p>

            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 pt-4">
              <Link
                href="/contact"
                className="group min-w-0 flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-3 rounded-2xl bg-[#2084ba] text-white font-bold text-xs sm:text-base shadow-[0_10px_25px_rgba(32,132,186,0.35)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#1a6fa2] hover:shadow-[0_18px_35px_rgba(32,132,186,0.45)] active:scale-95"
                id="hero-primary-cta"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="min-w-0 flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-white font-semibold text-xs sm:text-base hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-xs"
                id="hero-secondary-cta"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 animate-fade-up opacity-0 [animation-fill-mode:forwards] [animation-delay:600ms]">
            {AGENCY_INFO.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md text-center shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#2084ba] dark:text-[#2084ba] font-mono leading-none">
                  <CountUpMetric value={stat.value} />
                </div>
                <div className="mt-2 text-[11px] sm:text-xs text-zinc-300 uppercase tracking-wide truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={capabilitiesSectionRef}
        className="relative overflow-hidden bg-[rgba(8,10,15,0.85)] px-6 py-20 backdrop-blur-md"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[rgba(0,136,255,0.08)] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl space-y-10">
          <div className="w-full overflow-hidden rounded-[28px]  border-[rgba(255,255,255,0.08)] bg-black/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="mx-auto aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-[22px] bg-black md:max-w-[480px]">
              <video
                ref={capabilitiesVideoRef}
                src="/main-section/main.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,136,255,0.3)] bg-[rgba(0,136,255,0.12)] px-4 py-1.5 text-xs font-semibold text-[#00A3FF] backdrop-blur-sm">
                <Layers className="h-3.5 w-3.5" />
                <span>End-to-End Capabilities</span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl md:text-4xl">
                Our 6 Core Engineering & <span className="text-[#00A3FF]">Creative Services</span>
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                From modern websites and mobile apps to engaging videos and smart AI solutions, we help businesses turn ideas into real results. With everything handled by one experienced team, you get a seamless, reliable, and complete digital experience — all under one roof.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[rgba(0,136,255,0.85)] px-6 py-3 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(0,136,255,0.3)] backdrop-blur-sm transition-all hover:bg-[rgba(0,136,255,1)] hover:-translate-y-1"
            >
              <span>View Detailed Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          <div className="services-marquee relative -mx-6 overflow-hidden px-6 py-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max gap-6 animate-marquee motion-reduce:animate-none sm:gap-8">
              {[...SERVICES, ...SERVICES].map((service, index) => (
                <ServiceCard key={`${service.id}-${index}`} service={service} index={index % SERVICES.length} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[rgba(8,10,15,0.85)] px-6 py-20 backdrop-blur-md sm:py-28">
        <div className="pointer-events-none absolute right-1/4 top-10 h-[300px] w-[500px] rounded-full bg-[rgba(0,136,255,0.07)] blur-[130px]" />
        <div className="relative mx-auto max-w-7xl space-y-16">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,136,255,0.3)] bg-[rgba(0,136,255,0.12)] px-4 py-1.5 text-xs font-semibold text-[#00A3FF] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Our Work & Experience</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Projects
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400">
                Explore some of the websites, apps, AI solutions, and digital projects we’ve built to help businesses grow and succeed.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-[rgba(0,136,255,0.4)] bg-[rgba(0,136,255,0.85)] px-6 py-3 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(0,136,255,0.3)] backdrop-blur-sm transition-all hover:bg-[rgba(0,136,255,1)]"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>

          <ScrollReveal
            variant="fade-up"
            stagger={120}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} website in a new tab`}
                className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(0,136,255,0.5)] hover:shadow-[0_12px_45px_-10px_rgba(0,136,255,0.25)]"
              >
                <div className="relative w-full aspect-[2.2] bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(12,16,23,0.75)] px-3.5 py-1.5 text-xs font-medium text-zinc-200 shadow-md backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center justify-center rounded-full bg-white/90 p-2 text-zinc-950 shadow-md transition-colors hover:bg-[rgba(0,136,255,1)] hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between space-y-4 bg-[rgba(12,16,23,0.4)] p-6 backdrop-blur-sm sm:p-8">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#00A3FF] sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 text-xs text-zinc-400 sm:text-sm">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <WhyChooseUsSection />

      <section className="relative overflow-hidden bg-[rgba(8,10,15,0.85)] px-6 py-20 backdrop-blur-md sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(0,136,255,0.06)] blur-[140px]" />
        <div className="relative mx-auto max-w-7xl space-y-16">
          <ScrollReveal className="mx-auto max-w-3xl space-y-3 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,136,255,0.3)] bg-[rgba(0,136,255,0.15)] text-[#00A3FF] backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-zinc-400 sm:text-base">
              We’re proud to build long-term relationships with our clients and deliver work they can trust.
            </p>
          </ScrollReveal>

          <div className="testimonials-marquee relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[rgba(8,10,15,0.85)] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[rgba(8,10,15,0.85)] after:to-transparent">
            <div className="testimonials-track flex w-max gap-6 py-2">
              {marqueeTestimonials.map((t, index) => (
                <div key={`${t.id}-${index}`} className="w-[320px] sm:w-[360px] lg:w-[390px] shrink-0">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
