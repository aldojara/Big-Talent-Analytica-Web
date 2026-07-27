import type { IconName } from "@/types/content";

export type AboutCta = {
  label: string;
  href: string;
};

export type AboutHeroContent = {
  eyebrow: string;
  title: string;
  lead: string;
  description: string;
  ctas: {
    primary: AboutCta;
    secondary: AboutCta;
  };
  chips: string[];
  floatingProofs: {
    label: string;
    icon: IconName;
  }[];
};

export type CareerMilestone = {
  number: string;
  title: string;
  description: string;
};

export type AuthorityProof = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProfessionalDimension = {
  title: string;
  description: string;
  icon: IconName;
  accent: "blue" | "violet" | "teal" | "cyan" | "rose" | "amber";
};

export type EcosystemStep = {
  title: string;
  description: string;
  icon: IconName;
};

export type ProjectEcosystemItem = {
  title: string;
  label?: string;
  description: string;
  tags: string[];
  status: string;
  href?: string;
  visual: "primary" | "travel" | "resources" | "content";
};

export type WorkPrinciple = {
  title: string;
  description: string;
  icon: IconName;
};

export type AboutSocialLink = {
  label: string;
  href: string;
  icon: IconName;
};
