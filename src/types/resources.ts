import type { Cta, IconName } from "@/types/content";

export type ResourceThemeName = "blue" | "cyan" | "green" | "violet" | "amber" | "orange";

export type ResourceTheme = {
  name: ResourceThemeName;
  accent: string;
  soft: string;
  border: string;
  text: string;
};

export type ResourceNavItem = {
  slug: string;
  menuLabel: string;
  href: string;
  description: string;
  icon: IconName;
  theme: ResourceThemeName;
};

export type ResourceMetric = {
  label: string;
  value: string;
  icon: IconName;
};

export type ResourceBasicItem = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  theme?: ResourceThemeName;
  meta?: string;
};

export type ResourceCardItem = {
  title: string;
  description: string;
  href: string;
  type: string;
  icon: IconName;
  theme: ResourceThemeName;
  meta: string[];
  ctaLabel: string;
  tags?: string[];
};

export type ResourceFilterGroup = {
  label: string;
  key: "topic" | "type" | "level" | "duration" | "access" | "category";
  options: string[];
};

export type ResourceListPage = ResourceNavItem & {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  highlightedTerms?: string[];
  description: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
  visual: "editorial" | "guides" | "video" | "podcast" | "learning" | "tools";
  metrics?: ResourceMetric[];
  benefits?: ResourceBasicItem[];
  tabs?: ResourceBasicItem[];
  categories: ResourceBasicItem[];
  featured: ResourceCardItem;
  interests?: ResourceBasicItem[];
  collections?: ResourceBasicItem[];
  latest?: ResourceCardItem[];
  recent?: ResourceCardItem[];
  ranked?: ResourceCardItem[];
  programs?: ResourceBasicItem[];
  filters?: ResourceFilterGroup[];
  catalog?: ResourceCardItem[];
  sidebarTitle?: string;
  newsletter?: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  finalCta?: {
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
