import type { Cta, IconName } from "@/types/content";

export type UseCaseVisualVariant =
  | "customer"
  | "marketing"
  | "operations"
  | "analytics"
  | "ai"
  | "finance"
  | "transformation"
  | "talent";

export type UseCaseAccentVariant = "blue" | "cyan" | "violet" | "orange";

export type UseCaseMetric = {
  id: string;
  label: string;
  value: string;
  detail: string;
};

export type UseCaseHeroTopic = {
  id: string;
  label: string;
  icon: IconName;
};

export type UseCaseValueItem = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export type UseCaseCapability = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export type UseCaseFeaturedCase = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: IconName;
  accent: UseCaseAccentVariant;
  status: string;
  href?: string;
};

export type UseCaseProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

export type UseCaseImpactItem = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export type UseCaseAudience = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export type UseCaseHero = {
  title: string;
  highlightedText: string;
  description: string;
  metrics: UseCaseMetric[];
  topics: UseCaseHeroTopic[];
};

export type UseCaseFinalCta = {
  title: string;
  highlightedText: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export type UseCaseVisualTheme = {
  variant: UseCaseVisualVariant;
  accent: UseCaseAccentVariant;
};

export type UseCaseCategoryPage = {
  slug: string;
  title: string;
  metadataTitle: string;
  metadataDescription: string;
  breadcrumbLabel: string;
  hero: UseCaseHero;
  valueItems: UseCaseValueItem[];
  capabilities: UseCaseCapability[];
  featuredCases: UseCaseFeaturedCase[];
  processSteps: UseCaseProcessStep[];
  impacts: UseCaseImpactItem[];
  audiences: UseCaseAudience[];
  finalCta: UseCaseFinalCta;
  visualTheme: UseCaseVisualTheme;
};
