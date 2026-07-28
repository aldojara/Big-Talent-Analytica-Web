import type { Cta, IconName } from "@/types/content";

export type DomainThemeName = "blue" | "cyan" | "green" | "violet" | "amber";

export type DomainTheme = {
  name: DomainThemeName;
  accent: string;
  soft: string;
  border: string;
  text: string;
};

export type DomainNavItem = {
  slug: string;
  menuLabel: string;
  href: string;
  description: string;
  icon: IconName;
  theme: DomainThemeName;
};

export type DomainBasicItem = {
  title: string;
  description: string;
  icon: IconName;
};

export type DomainLinkedItem = DomainBasicItem & {
  href: string;
  tag?: string;
  impact?: string;
  meta?: string;
};

export type DomainMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconName;
  delta?: string;
};

export type DomainResource = {
  type: string;
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

export type DomainPage = DomainNavItem & {
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  highlightedTerms: string[];
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  visual: "marketing" | "customer" | "supply" | "process" | "finance" | "talent";
  challengesTitle: string;
  challenges: DomainBasicItem[];
  capabilitiesTitle: string;
  capabilities: DomainBasicItem[];
  relatedDomains: string[];
  useCases: DomainLinkedItem[];
  metrics: DomainMetric[];
  resources: DomainResource[];
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
