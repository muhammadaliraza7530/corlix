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
    <section className="relative overflow-hidden bg-[rgba(8,10,15,0.85)] px-6 py-20 backdrop-blur-md">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(0,136,255,0.06)] blur-[140px]" />
      <div className="relative mx-auto max-w-7xl space-y-16">
        {/* Section Header */}
        <ScrollReveal className="mx-auto max-w-3xl space-y-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(0,136,255,0.3)] bg-[rgba(0,136,255,0.12)] px-4 py-1.5 text-xs font-semibold text-[#00A3FF] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The Corelix Difference</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-3xl md:text-5xl">
            Why Choose <span className="text-[#00A3FF]">Corelix Systems</span> for Your Business
          </h2>
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-zinc-400 sm:text-base">
           We turn your ideas into reliable digital solutions that help your business grow. From websites and apps to AI, video, and digital marketing, our team handles everything in one place — simple, clear, and hassle-free.

          </p>
        </ScrollReveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const Icon = ICON_MAP[pillar.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="group flex flex-col justify-between rounded-[28px] border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(0,136,255,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,136,255,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(0,136,255,0.3)] bg-[rgba(0,136,255,0.15)] text-[#00A3FF] transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-300 backdrop-blur-sm">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400 sm:text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
