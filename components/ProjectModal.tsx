'use client';

import React from 'react';
import Image from 'next/image';
import { 
  X, 
  CheckCircle, 
  Quote, 
  ArrowRight,
  Zap,
  Code
} from 'lucide-react';
import { PortfolioItem } from '@/lib/types';
import Link from 'next/link';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-mono font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-400">•</span>
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
              Client: {project.client}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
              {project.tagline}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50">
            <Image
              src={project.featuredImage}
              alt={project.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Impact Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60">
            {project.impactMetrics.map((m, idx) => (
              <div key={idx} className="p-3 text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Narrative (Challenge vs Solution) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/30 space-y-2.5">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-semibold text-sm">
                <Zap className="w-4 h-4" />
                <span>The Engineering Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/30 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>The Corelix Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Technology Stack & Architecture</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium border border-zinc-200 dark:border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial (if present) */}
          {project.testimonial && (
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700 relative">
              <Quote className="w-8 h-8 text-zinc-200 dark:text-zinc-700 absolute top-4 right-4 pointer-events-none" />
              <div className="space-y-4">
                <p className="italic text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200">
                    <Image
                      src={project.testimonial.avatar}
                      alt={project.testimonial.author}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">
                      {project.testimonial.author}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {project.testimonial.role}, {project.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-500 text-center sm:text-left">
              Need a similar architecture or video campaign for your brand?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold text-xs hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                onClick={onClose}
              >
                <span>Request Case Study Scoping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
