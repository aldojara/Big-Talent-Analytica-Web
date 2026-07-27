export type IconName =
  | "analytics"
  | "ai"
  | "arrow-right"
  | "automation"
  | "briefcase"
  | "calendar"
  | "chart"
  | "community"
  | "consulting"
  | "course"
  | "diamond"
  | "domain"
  | "globe"
  | "guide"
  | "learning"
  | "mail"
  | "megaphone"
  | "mentor"
  | "network"
  | "pencil"
  | "play"
  | "process"
  | "rocket"
  | "sales"
  | "service"
  | "spark"
  | "strategy"
  | "support"
  | "talent"
  | "video";

export type Cta = {
  label: string;
  href: string;
};

export type Pillar = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

export type RadarItem = {
  title: string;
  category: string;
  date: string;
  topic: string;
  href: string;
};

export type FeaturedContent = {
  title: string;
  type: string;
  description: string;
  href: string;
  ctaLabel: string;
  accent: "blue" | "teal" | "violet" | "rose";
  icon: IconName;
};

export type Domain = {
  title: string;
  href: string;
  icon: IconName;
};

export type LearningFormat = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

export type Service = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  accent: "blue" | "teal" | "violet" | "orange";
};
