import type { Cta, IconName } from "@/types/content";

export type CommunityTheme = "blue" | "violet" | "teal" | "green" | "orange" | "rose";

export type CommunityNavItem = {
  slug: string;
  menuLabel: string;
  breadcrumbLabel: string;
  href: string;
  description: string;
  icon: IconName;
  theme: CommunityTheme;
};

export type CommunityMetric = {
  value: string;
  label: string;
  icon: IconName;
};

export type CommunityFeature = {
  title: string;
  description: string;
  icon: IconName;
  href?: string;
  theme?: CommunityTheme;
  tag?: string;
};

export type CommunityEvent = {
  date: string;
  month: string;
  type: string;
  title: string;
  description: string;
  time: string;
  duration: string;
  href: string;
  theme?: CommunityTheme;
};

export type CommunityContentCard = {
  title: string;
  description: string;
  eyebrow?: string;
  meta?: string;
  icon: IconName;
  href: string;
  theme?: CommunityTheme;
};

export type CommunityProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconName;
};

export type CommunityTestimonial = {
  quote: string;
  name: string;
  role: string;
};

export type CommunitySubpage = CommunityNavItem & {
  eyebrow: string;
  title: string;
  highlightedTerms: string[];
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  benefits: CommunityFeature[];
  metrics: CommunityMetric[];
  heroVisual: "newsletter" | "events" | "channels" | "collaborations" | "private";
  sections: {
    introTitle: string;
    introItems: CommunityFeature[];
    valueTitle?: string;
    valueItems?: CommunityFeature[];
    featuredTitle?: string;
    featuredDescription?: string;
    featuredBullets?: string[];
    featuredMetrics?: CommunityMetric[];
    cardsTitle?: string;
    cards?: CommunityContentCard[];
    formatsTitle?: string;
    formats?: CommunityFeature[];
    processTitle?: string;
    process?: CommunityProcessStep[];
    audienceTitle?: string;
    audiences?: CommunityFeature[];
    testimonialsTitle?: string;
    testimonials?: CommunityTestimonial[];
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    icon: IconName;
  };
  metadata: {
    title: string;
    description: string;
  };
};
