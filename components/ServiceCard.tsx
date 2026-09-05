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
      className="group relative flex w-[min(86vw,360px)] shrink-0 flex-col justify-between overflow-hidden rounded-[28px] border border-[rgba(0,136,255,0.2)] bg-[rgba(15,20,28,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,136,255,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,136,255,0.25)] sm:w-[340px] lg:w-[360px]"
      id={`service-card-${service.id}`}
    >
      <div>
        <div className="relative aspect-[2/1] w-full overflow-hidden bg-zinc-900">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 86vw, 360px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-zinc-950/60 text-[#00A3FF] backdrop-blur-sm">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        {/* Title and Short Description */}
        <div className="space-y-2 p-6 pb-0">
          <h3 className="text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#00A3FF]">
            {service.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {service.shortDescription}
          </p>
        </div>

      </div>

      {/* Card Footer */}
      <div className="mt-6 flex items-center justify-end gap-2 border-t border-white/10 px-6 py-5">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-white transition-colors group-hover:text-[#00A3FF]"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
