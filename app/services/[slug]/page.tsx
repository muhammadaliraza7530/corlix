import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/data';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: 'Service Not Found | Corelix Systems' };
  }

  return {
    title: `${service.title} | Corelix Systems`,
    description: service.fullDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[rgba(8,10,15,0.95)] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-zinc-950/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <Link
            href="/services"
            className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-[#00A3FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.35)] bg-[rgba(0,163,255,0.12)] px-4 py-1.5 text-xs font-semibold text-[#00A3FF] backdrop-blur-sm">
              <Layers className="h-3.5 w-3.5" />
              {service.badge}
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
        <div className="space-y-12">
          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A3FF]">Overview</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Built around your goals</h2>
            <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {service.fullDescription}
            </p>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A3FF]">What we deliver</p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00A3FF]" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="self-start rounded-[28px] border border-[rgba(0,136,255,0.25)] bg-[rgba(15,20,28,0.7)] p-7 backdrop-blur-xl lg:sticky lg:top-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00A3FF]">Tools & technologies</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.technologies.map((technology) => (
              <span key={technology} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300">
                {technology}
              </span>
            ))}
          </div>
          <div className="mt-10 border-t border-white/10 pt-7">
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Tell us what you are building and we will shape the right next step together.
            </p>
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2084ba] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1a6fa2]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
