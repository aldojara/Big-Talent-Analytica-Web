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
