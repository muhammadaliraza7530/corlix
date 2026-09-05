import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies',
  description:
    'Explore website, app, AI, and digital transformation projects delivered by Corelix Systems for clients across Pakistan and global markets.',
  keywords: [
    'portfolio website agency',
    'Corelix projects',
    'web app case studies',
    'custom software portfolio',
  ],
};

export default function PortfolioPage() {
  const filteredProjects = PORTFOLIO_PROJECTS;

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* 1. Portfolio Hero */}
      <section className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden border-b border-white/10 bg-[rgba(8,10,15,0.85)] px-6 py-20 backdrop-blur-md pt-20">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[350px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(0,136,255,0.08)] blur-[150px]" />
        <div className="relative mx-auto w-full max-w-7xl space-y-8 pt-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,136,255,0.3)] bg-[rgba(0,136,255,0.12)] px-4 py-1.5 text-xs font-semibold text-[#00A3FF] shadow-[0_0_15px_rgba(0,136,255,0.15)] backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Proven Engineering Outcomes</span>
          </div>

          <h1 className="mx-auto mb-4 max-w-4xl text-center text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
           Our Projects & Case Studies
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-zinc-400 md:text-base">
            Explore some of the websites, mobile apps, AI solutions, and creative projects we’ve built to help businesses grow and succeed.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="rounded-2xl border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] p-6 text-center shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,136,255,0.45)] hover:shadow-[0_0_30px_-5px_rgba(0,136,255,0.25)]">
              <div className="mb-1 text-2xl font-extrabold tracking-tight text-[#00A3FF] md:text-3xl">$120M+</div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">Business Value Supported</div>
            </div>
            <div className="rounded-2xl border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] p-6 text-center shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,136,255,0.45)] hover:shadow-[0_0_30px_-5px_rgba(0,136,255,0.25)]">
              <div className="mb-1 text-2xl font-extrabold tracking-tight text-[#00A3FF] md:text-3xl">450K+</div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">Mobile App Users</div>
            </div>
            <div className="rounded-2xl border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] p-6 text-center shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,136,255,0.45)] hover:shadow-[0_0_30px_-5px_rgba(0,136,255,0.25)]">
              <div className="mb-1 text-2xl font-extrabold tracking-tight text-[#00A3FF] md:text-3xl">8.4M+</div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">Video Views</div>
            </div>
            <div className="rounded-2xl border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] p-6 text-center shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,136,255,0.45)] hover:shadow-[0_0_30px_-5px_rgba(0,136,255,0.25)]">
              <div className="mb-1 text-2xl font-extrabold tracking-tight text-[#00A3FF] md:text-3xl">100%</div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Portfolio Projects Grid */}
      <section className="relative overflow-hidden bg-[rgba(8,10,15,0.85)] px-6 py-16 backdrop-blur-md">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(0,136,255,0.06)] blur-[150px]" />
        <ScrollReveal
          variant="fade-up"
          stagger={120}
          className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} website in a new tab`}
                className="group flex flex-col justify-between overflow-hidden rounded-[28px] border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(0,136,255,0.5)] hover:shadow-[0_0_35px_-5px_rgba(0,136,255,0.3)]"
              >
                {/* Project Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[28px] border-b border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.4)]">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute right-4 top-4 opacity-90 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(8,10,15,0.7)] text-white shadow-lg backdrop-blur-md transition-all group-hover:bg-[rgba(0,136,255,0.9)]"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col justify-between gap-2 bg-[rgba(12,16,23,0.4)] p-6 backdrop-blur-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#00A3FF] sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </ScrollReveal>
      </section>

      {/* Project Case Study Dialog */}
    </div>
  );
}
