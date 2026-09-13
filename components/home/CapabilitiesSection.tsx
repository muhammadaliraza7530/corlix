'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, PlayCircle } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import ServiceCard from '@/components/ServiceCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function CapabilitiesSection() {
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
    <section
      ref={capabilitiesSectionRef}
      className="relative overflow-hidden bg-zinc-950 px-6 py-20 sm:py-28"
    >
      {/* Ambient Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#2084ba]/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl space-y-20">
        
        {/* Top Grid: Content + Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <ScrollReveal className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2084ba]/30 bg-[#2084ba]/10 px-4 py-1.5 text-xs font-semibold text-[#2084ba] backdrop-blur-sm">
              <Layers className="h-3.5 w-3.5" />
              <span>End-to-End Capabilities</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Our 6 Core Engineering & <span className="bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] bg-clip-text text-transparent">Creative Services</span>
            </h2>
            
            <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
              From modern websites and mobile apps to engaging videos and smart AI solutions, we help businesses turn ideas into real results. With everything handled by one experienced team, you get a seamless, reliable, and complete digital experience — all under one roof.
            </p>
            
            {/* Unique RGBA Button */}
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[rgba(32,132,186,0.3)] bg-[rgba(32,132,186,0.1)] px-6 py-3 text-sm font-semibold text-[#4cb5e6] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(32,132,186,0.8)] hover:text-white hover:shadow-[0_0_25px_rgba(32,132,186,0.4)] active:scale-95"
            >
              {/* Slide-in RGBA Gradient Fill */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[rgba(32,132,186,0.9)] to-[rgba(76,181,230,0.9)] transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center gap-2">
                View Detailed Breakdown
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </ScrollReveal>

          {/* Right: Video Frame (Floating) */}
          <ScrollReveal variant="fade-left" className="relative w-full flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[320px] sm:max-w-[340px] aspect-[9/16] overflow-hidden rounded-[2rem] border border-zinc-800 shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[#2084ba]/50 hover:shadow-[0_30px_80px_-10px_rgba(32,132,186,0.3)] animate-float">
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
              {/* Inner Ring & Overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[2rem] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Hover Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  <PlayCircle className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
            {/* Floating Accent Glow */}
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#2084ba]/20 blur-3xl pointer-events-none animate-pulse" />
          </ScrollReveal>
        </div>

        {/* Marquee Section */}
        <ScrollReveal variant="fade-up" className="space-y-8">
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-zinc-700"></div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">What We Do Best</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-zinc-700"></div>
          </div>

          <div className="services-marquee relative -mx-6 overflow-hidden px-6 py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-6 animate-marquee motion-reduce:animate-none sm:gap-8">
              {[...SERVICES, ...SERVICES].map((service, index) => (
                <ServiceCard key={`${service.id}-${index}`} service={service} index={index % SERVICES.length} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}