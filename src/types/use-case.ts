import type { Cta, IconName } from "@/types/content";

export type UseCaseAccent = "blue" | "cyan" | "violet" | "orange";

export type UseCaseMetric = {
  id: string;
  label: string;
  value: string;
  detail: string;
};

export type UseCaseValueProposal = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export type UseCaseCategory = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  href?: string;
};

export type FeaturedUseCase = {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: IconName;
  accent: UseCaseAccent;
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

export type UseCasesHero = {
  breadcrumb: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  metrics: UseCaseMetric[];
};

export type UseCasesFinalCta = {
  title: string;
  highlightedTitle: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
};
