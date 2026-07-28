import type { Cta, IconName } from "@/types/content";

export type AiTechVisualVariant =
  | "main"
  | "radar"
  | "ai"
  | "generative"
  | "data"
  | "automation"
  | "tools"
  | "transformation"
  | "governance";

export type AiTechBreadcrumb = {
  label: string;
  href?: string;
};

export type AiTechBasicItem = {
  icon: IconName;
  title: string;
  description: string;
  href?: string;
};

export type AiTechApplication = {
  title: string;
  description: string;
  href: string;
  tag?: string;
  visual: AiTechVisualVariant;
};

export type AiTechProcessStep = AiTechBasicItem & {
  step: number;
};

export type AiTechPageConfig = {
  slug: string;
  ctaVariant?: "light" | "dark";
  metadata: {
    title: string;
    description: string;
  };
  breadcrumbs: readonly AiTechBreadcrumb[];
  hero: {
    title: string;
    highlightedText: string;
    description: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    highlights: readonly AiTechBasicItem[];
    visual: AiTechVisualVariant;
  };
  pillars: readonly AiTechBasicItem[];
  introTitle: string;
  contentItems: readonly AiTechBasicItem[];
  applicationsTitle: string;
  applications: readonly AiTechApplication[];
  processTitle: string;
  process: readonly AiTechProcessStep[];
  evaluationTitle: string;
  evaluationItems: readonly AiTechBasicItem[];
  audiences: readonly AiTechBasicItem[];
  finalCta: {
    title: string;
    description?: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  keyAreas?: readonly AiTechBasicItem[];
  keyAreasTitle?: string;
};
