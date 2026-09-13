'use client';

import HeroSection from '@/components/home/HeroSection';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

export default function HomePageClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
}
