'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsSection() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section className="site-section-shell px-6 py-20 sm:py-28">
      {/* Ambient Background Effects */}
      <div className="pointer-events-none absolute right-1/4 top-10 h-[400px] w-[600px] rounded-full bg-[#2084ba]/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2084ba]/30 bg-[#2084ba]/10 px-4 py-1.5 text-xs font-semibold text-[#2084ba] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#2084ba] animate-pulse" />
              <span>Our Work & Experience</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Featured <span className="bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-400">
              Explore some of the websites, apps, AI solutions, and digital projects we’ve built to help businesses grow and succeed.
            </p>
          </div>
          
          <Link
            href="/portfolio"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#2084ba] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-5px_rgba(32,132,186,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1a6fa2] active:scale-95"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        {/* Projects Grid */}
        <ScrollReveal
          variant="fade-up"
          stagger={120}
          duration={750}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} website in a new tab`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2084ba]/50 hover:shadow-[0_25px_60px_-15px_rgba(32,132,186,0.3)]"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] bg-zinc-800 overflow-hidden">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="w-full object-cover object-top transition-transform duration-[700ms] ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {/* Cinematic Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full"></div>

                {/* Top-Left Button (Unique RGBA Left-to-Right Slide) */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/10 bg-zinc-950/60 px-3.5 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur-md transition-all duration-300 group-hover:border-[rgba(32,132,186,0.5)] group-hover:text-white">
                    {/* Sliding RGBA Gradient */}
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[rgba(32,132,186,0.9)] to-[rgba(76,181,230,0.9)] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                    <span className="relative z-10">{project.categoryLabel}</span>
                  </span>
                </div>
                
                {/* External Link Icon */}
                <div className="absolute top-4 right-4 z-20 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-flex items-center justify-center rounded-full bg-white/95 p-2 text-zinc-950 shadow-lg transition-colors duration-300 group-hover:bg-[#2084ba] group-hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 relative z-10">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white transition-all duration-300 sm:text-2xl group-hover:bg-gradient-to-r group-hover:from-[#2084ba] group-hover:to-[#4cb5e6] group-hover:bg-clip-text group-hover:text-transparent">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 text-sm text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                    {project.summary}
                  </p>
                </div>

                {/* Sliding CTA inside card */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#2084ba] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}