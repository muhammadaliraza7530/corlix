'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AGENCY_INFO } from '@/lib/data';

function CountUpMetric({ value }: { value: string }) {
  const metricRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState('0');
  const suffix = value.replace(/^[\d.]+/, '');

  useEffect(() => {
    const element = metricRef.current;
    if (!element) return;

    const numericValue = Number.parseFloat(value);
    const decimalPlaces = value.split('.')[1]?.match(/^\d+/)?.[0].length ?? 0;
    let animationFrame = 0;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / 1800, 1); // Slightly longer for smoothness
        const easedProgress = 1 - Math.pow(1 - progress, 4); // Sharper ease-out
        setDisplayValue((numericValue * easedProgress).toFixed(decimalPlaces));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setDisplayValue(numericValue.toFixed(decimalPlaces));
          observer.disconnect();
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, { threshold: 0.1 }); // Trigger earlier

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return <span ref={metricRef}>{displayValue}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="site-section-shell relative isolate pt-28 pb-24 sm:pt-32 sm:pb-32">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/home-hero/hero-1.png"
          alt="Corelix Systems team building digital experiences in Lahore"
          fill
          priority
          className="h-full w-full object-cover scale-110 blur-[5px] opacity-30 transition-transform duration-[5000ms] ease-out"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/85 to-zinc-950" />
        {/* Dot Matrix Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />
        {/* Central Brand Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[#2084ba]/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[50vw] h-[40vh] bg-[#4cb5e6]/10 rounded-full blur-[90px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Badge */}
        <div className="flex justify-center">
          <div className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-700 backdrop-blur-xl text-xs font-mono text-zinc-300 shadow-lg transition-colors duration-300 hover:border-[#2084ba]/50 cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span>Digital Agency <span className="text-[#2084ba] font-bold">Pakistan</span></span>
          </div>
        </div>

        {/* Main Heading & Paragraph */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Transforming Bold Ideas Into{' '}
            <span className="bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(32,132,186,0.25)]">
              Scalable Digital Realities
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We design, engineer, and scale high-concurrency web apps, native Android systems, bespoke AI models, cinematic video content, and organic search engines.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2084ba] text-white font-semibold text-base shadow-[0_8px_30px_rgba(32,132,186,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a6fa2] hover:shadow-[0_12px_35px_rgba(32,132,186,0.5)] active:scale-95"
              id="hero-primary-cta"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-xl text-zinc-200 font-semibold text-base hover:bg-zinc-800/80 hover:border-[#2084ba]/50 transition-all duration-300 active:scale-95"
              id="hero-secondary-cta"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          </div>
        </div>

        {/* Stats Grid - Staggered Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-16">
          {AGENCY_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 backdrop-blur-xl text-center overflow-hidden transition-all duration-300 hover:border-[#2084ba]/50 hover:-translate-y-2 hover:shadow-[0_15px_40px_-15px_rgba(32,132,186,0.3)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-[#2084ba]/10 to-transparent" />
              
              {/* Top Border Accent on Hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#2084ba] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm" />

              <div className="relative">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono leading-none bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
                  <CountUpMetric value={stat.value} />
                </div>
                <div className="mt-2 text-[11px] sm:text-xs text-zinc-500 uppercase tracking-widest font-medium transition-colors duration-300 group-hover:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}