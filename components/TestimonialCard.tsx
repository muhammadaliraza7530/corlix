'use client';

import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle2 } from 'lucide-react';
import { TestimonialItem } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between space-y-6 rounded-[28px] border border-[rgba(0,136,255,0.2)] bg-[rgba(12,16,23,0.65)] p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:border-[rgba(0,136,255,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,136,255,0.25)]">
      <div className="space-y-4">
        {/* Rating Stars & Service Tag */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[11px] font-medium text-zinc-300 backdrop-blur-sm">
            {testimonial.serviceCategory}
          </span>
        </div>

        {/* Content Quote */}
        <p className="relative mb-6 text-xs font-normal leading-relaxed text-zinc-300 md:text-sm">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>

      {/* Result Highlight & Author Info */}
      <div className="mt-auto space-y-3 border-t border-[rgba(255,255,255,0.08)] pt-4">
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-md border border-[rgba(16,185,129,0.2)] bg-[rgba(16,185,129,0.1)] px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>{testimonial.projectResult}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-[rgba(0,136,255,0.3)]">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-xs font-bold text-white">
              {testimonial.author}
            </div>
            <div className="text-[11px] text-zinc-500">
              {testimonial.role}, {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
