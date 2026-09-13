'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Cpu, 
  TrendingUp, 
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Zap,
  Cpu,
  TrendingUp,
};

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-20 sm:py-28">
      {/* Ambient Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2084ba]/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <ScrollReveal className="mx-auto max-w-3xl space-y-5 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2084ba]/30 bg-[#2084ba]/10 px-4 py-1.5 text-xs font-semibold text-[#2084ba] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Corelix Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Choose <span className="bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] bg-clip-text text-transparent">Corelix Systems</span> for Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            We turn your ideas into reliable digital solutions that help your business grow. From websites and apps to AI, video, and digital marketing, our team handles everything in one place — simple, clear, and hassle-free.
          </p>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <ScrollReveal 
          variant="fade-up" 
          stagger={120} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const Icon = ICON_MAP[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2084ba]/50 hover:shadow-[0_25px_60px_-15px_rgba(32,132,186,0.3)]"
              >
                {/* Animated Top Border Accent */}
                <div className="absolute top-0 left-0 z-30 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] transition-transform duration-500 ease-out group-hover:scale-x-100"></div>

                {/* Hover Ambient Glow */}
                <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-[#2084ba]/10 to-transparent pointer-events-none" />
                
                {/* Futuristic Background Number */}
                <span className="absolute -top-4 -right-2 text-[80px] font-extrabold text-white/[0.03] pointer-events-none transition-colors duration-500 group-hover:text-[#2084ba]/10">
                  0{idx + 1}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    {/* Icon Badge */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(32,132,186,0.3)] bg-zinc-950/80 text-[#2084ba] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#2084ba] group-hover:bg-[#2084ba] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Top-Left Button (Unique RGBA Left-to-Right Slide) */}
                    <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/10 bg-zinc-950/60 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-300 backdrop-blur-md transition-colors duration-300 group-hover:text-white">
                      {/* Sliding RGBA Gradient */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[rgba(32,132,186,0.9)] to-[rgba(76,181,230,0.9)] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                      <span className="relative z-10">{pillar.badge}</span>
                    </span>
                  </div>
                  
                  <div className="mt-auto space-y-3">
                    <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#2084ba]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}