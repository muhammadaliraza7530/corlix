'use client';

import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { TestimonialItem } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2084ba]/50 hover:shadow-[0_25px_60px_-15px_rgba(32,132,186,0.3)]">
      
      {/* Animated Top Border Accent */}
      <div className="absolute top-0 left-0 z-30 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] transition-transform duration-500 ease-out group-hover:scale-x-100"></div>

      {/* Hover Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-[#2084ba]/10 to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Rating Stars & Service Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]" 
              />
            ))}
          </div>
          
          {/* Top-Right Button (Unique RGBA Left-to-Right Slide) */}
          <span className="relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/10 bg-zinc-950/60 px-3.5 py-1.5 text-[11px] font-medium text-zinc-200 backdrop-blur-md transition-colors duration-300 group-hover:text-white">
            {/* Sliding RGBA Gradient */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[rgba(32,132,186,0.9)] to-[rgba(76,181,230,0.9)] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            <span className="relative z-10">{testimonial.serviceCategory}</span>
          </span>
        </div>

        {/* Content Quote */}
        <div className="relative">
          <Quote className="absolute -top-2 -left-1 w-8 h-8 text-zinc-800 transition-all duration-300 group-hover:text-[#2084ba]/20 group-hover:scale-110 group-hover:-rotate-3" />
          <p className="relative pl-7 text-sm leading-relaxed text-zinc-300">
            {testimonial.content}
          </p>
        </div>
      </div>

      {/* Result Highlight & Author Info */}
      <div className="relative z-10 mt-6 space-y-4 border-t border-zinc-800 pt-5">
        <div className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{testimonial.projectResult}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-700 transition-all duration-300 group-hover:ring-[#2084ba]/50">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              {testimonial.author}
            </div>
            <div className="text-xs text-zinc-500">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}