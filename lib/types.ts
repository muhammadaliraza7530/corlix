export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; description: string }[];
  idealFor: string[];
  metrics: { label: string; value: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'web-dev' | 'android' | 'web-apps' | 'ai' | 'video' | 'seo';
  categoryLabel: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string; trend?: string }[];
  technologies: string[];
  featuredImage: string;
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  liveUrl?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  serviceCategory: string;
  projectResult: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  specialtyBadge: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  stat?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
