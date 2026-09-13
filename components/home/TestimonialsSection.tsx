'use client';

import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import TestimonialCard from '@/components/TestimonialCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function TestimonialsSection() {
  const marqueeTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-20 sm:py-28">
      {/* Ambient Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2084ba]/10 blur-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl space-y-16">
        
        {/* Header */}
        <ScrollReveal className="mx-auto max-w-3xl space-y-5 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl border border-[#2084ba]/30 bg-[#2084ba]/10 text-[#2084ba] backdrop-blur-sm">
            <Star className="h-5 w-5 fill-current" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What Our <span className="bg-gradient-to-r from-[#2084ba] to-[#4cb5e6] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            We’re proud to build long-term relationships with our clients and deliver work they can trust.
          </p>
        </ScrollReveal>

        {/* Marquee with CSS Mask for smooth edges */}
        <div className="testimonials-marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
  );
}