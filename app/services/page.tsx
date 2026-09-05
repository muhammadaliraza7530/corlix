import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Corelix Systems offers website development, Android app development, SEO, AI automation, and video editing services designed for growth-focused businesses.',
  keywords: [
    'website development services',
    'SEO services Pakistan',
    'Android app development',
    'AI automation services',
    'video editing agency',
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[rgba(8,10,15,0.95)] px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl space-y-12">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Our <span className="text-[#00A3FF]">Services</span>
        </h1>

        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
