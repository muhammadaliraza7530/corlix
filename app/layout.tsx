import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIChatbot from '@/components/AIChatbot';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://corelixsystems.com'),
  title: {
    default: 'Corelix Systems | Web Design, App Development & SEO Agency',
    template: '%s | Corelix Systems',
  },
  description:
    'Corelix Systems builds high-performance websites, Android apps, web apps, AI automation, SEO, and video content for businesses in Pakistan and worldwide.',
  keywords: [
    'Corelix Systems',
    'website development agency in Pakistan',
    'Next.js agency',
    'custom web app development',
    'Android app development company',
    'SEO company Pakistan',
    'AI automation agency',
    'video editing agency',
    'Lahore web design company',
    'digital marketing agency Pakistan',
    'software company Lahore',
    'ecommerce website development',
    'SaaS development agency'
  ],
  authors: [{ name: 'Corelix Systems' }],
  creator: 'Corelix Systems',
  publisher: 'Corelix Systems',
  applicationName: 'Corelix Systems',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Corelix Systems | Web Design, App Development & SEO Agency',
    description:
      'Custom websites, mobile apps, AI solutions, SEO and video content for brands ready to scale.',
    url: 'https://corelixsystems.com',
    siteName: 'Corelix Systems',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corelix Systems',
    description:
      'High-performance digital products, apps, SEO, and creative services built for growth.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0806] text-zinc-900 text-white font-sans selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
