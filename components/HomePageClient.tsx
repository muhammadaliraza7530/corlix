'use client';

import HeroSection from '@/components/home/HeroSection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

export default function HomePageClient() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-0 py-0">
      <HeroSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
}
