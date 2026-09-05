import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Corelix Systems',
  description:
    'Contact Corelix Systems to discuss website development, Android app development, SEO, AI automation, and digital growth services in Lahore and beyond.',
  keywords: [
    'contact web development agency',
    'book website development consultation',
    'Lahore app development agency',
    'Corelix contact',
  ],
};

export default function ContactPage() {
  return <ContactPageClient />;
}
