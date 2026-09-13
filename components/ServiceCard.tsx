'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Film, 
  Globe, 
  Smartphone, 
  Layers, 
  Sparkles, 
  TrendingUp,
  Cpu
} from 'lucide-react';
import { ServiceItem } from '@/lib/types';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Film,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  TrendingUp,
  Cpu,
};

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICON_MAP[service.iconName] || Layers;

  return (
    <div 
      className="group relative flex w-[min(86vw,340px)] shrink-0 flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2084ba]/50 hover:shadow-[0_25px_60px_-15px_rgba(32,132,186,0.3)]"
      id={`service-card-${service.id}`}
    >
      {/* Hover Ambient Glow */}
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-[#2084ba]/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-1 flex-col">
        {/* Image Section */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-800">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 86vw, 360px"
            className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-110"
          />
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          
          {/* Top-Left Badge (Unique RGBA Hover) */}
          <div className="absolute left-4 top-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-300 backdrop-blur-md transition-all duration-300 group-hover:border-[rgba(32,132,186,0.5)] group-hover:bg-[rgba(32,132,186,0.2)] group-hover:text-[#4cb5e6]">
              Service
            </span>
          </div>

          {/* Floating Icon Badge */}
          <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(32,132,186,0.3)] bg-zinc-950/80 text-[#2084ba] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-125 group-hover:border-[#2084ba] group-hover:bg-[#2084ba] group-hover:text-white">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6 pt-4">
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#2084ba]">
              {service.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
              {service.shortDescription}
            </p>
          </div>

          {/* Premium Sliding RGBA Button */}
          <Link
            href={`/services/${service.slug}`}
            className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-xs font-semibold text-zinc-300 backdrop-blur-sm transition-colors duration-300 group-hover:border-[rgba(32,132,186,0.5)] group-hover:text-white"
          >
            {/* Left-to-Right RGBA Gradient Slide */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[rgba(32,132,186,0.9)] to-[rgba(76,181,230,0.9)] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            
            <span className="relative z-10 flex items-center gap-2">
              View Details
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}