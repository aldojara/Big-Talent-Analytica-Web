import type { IconName } from "@/types/content";

export type TalentAccent = "blue" | "violet" | "green" | "orange" | "cyan" | "rose";

export type TalentArea = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  href?: string;
  accent: TalentAccent;
};

export type TalentStep = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  accent: TalentAccent;
};

export type TalentSolution = {
  id: string;
  title: string;
  audience: string;
  items: string[];
  cta: {
    label: string;
    href: string;
  };
  icon: IconName;
  accent: TalentAccent;
};

export type TalentFormat = {
  id: string;
  title: string;
  format: string;
  icon: IconName;
};

export type TalentAiUse = {
  id: string;
  title: string;
  icon: IconName;
};

export type TalentContentItem = {
  id: string;
  title: string;
  category: string;
  badge: string;
  tags: string[];
  status: string;
  image: string;
  imageAlt: string;
  href: string;
  icon: IconName;
  accent: TalentAccent;
};

export type TalentAudience = {
  id: string;
  title: string;
  audience: string;
  icon: IconName;
  accent: TalentAccent;
};

export type TalentPrinciple = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  accent: TalentAccent;
};

export type TalentSubpageTheme = "light" | "dark";

export type TalentSubpageVisual =
  | "leadership"
  | "learning"
  | "talent-ai"
  | "training"
  | "mentoring"
  | "transformation";

export type TalentSubpageBasicItem = {
  title: string;
  description: string;
  icon: IconName;
  href?: string;
  tag?: string;
  accent?: TalentAccent;
};

export type TalentSubpageProcessStep = TalentSubpageBasicItem & {
  step: string;
};

export type TalentSubpageCta = {
  label: string;
  href: string;
};

export type TalentSubpageConfig = {
  slug: string;
  title: string;
  description: string;
  breadcrumb: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow?: string;
    title: string;
    highlightedText: string;
    subtitle?: string;
    description: string;
    theme: TalentSubpageTheme;
    visual: TalentSubpageVisual;
    primaryCta: TalentSubpageCta;
    secondaryCta?: TalentSubpageCta;
    chips?: TalentSubpageBasicItem[];
    featureStrip?: TalentSubpageBasicItem[];
  };
  challenges?: {
    title: string;
    items: TalentSubpageBasicItem[];
  };
  offers?: {
    title: string;
    items: TalentSubpageBasicItem[];
  };
  solutions?: {
    title: string;
    items: TalentSubpageBasicItem[];
  };
  audiences?: {
    title: string;
    items: TalentSubpageBasicItem[];
  };
  darkPanel?: {
    title: string;
    items: TalentSubpageBasicItem[];
  };
  process?: {
    title: string;
    subtitle?: string;
    variant?: "cards" | "line";
    items: TalentSubpageProcessStep[];
  };
  formats?: {
    title: string;
    subtitle?: string;
    items: TalentSubpageBasicItem[];
  };
  scenarios?: {
    title: string;
    items: TalentSubpageBasicItem[];
  };
  relatedContent?: {
    title: string;
    items: TalentSubpageBasicItem[];
  };
  finalCta: {
    title: string;
    description: string;
    icon: IconName;
    primaryCta: TalentSubpageCta;
    secondaryCta?: TalentSubpageCta;
  };
};
