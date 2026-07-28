import type { IconName } from "@/types/content";
import { domainNavItems } from "@/data/domains";
import { aiTechnologyBasePath, aiTechnologyNavItems } from "@/data/ia-tecnologia/navigation";
import { resourceNavItems } from "@/data/resources";
import { talentSubpageNavItems } from "@/data/talent-subpages";
import { useCaseCategoryNavItems } from "@/data/use-case-categories";

export type NavigationItem = {
  label: string;
  href: string;
  active?: boolean;
  children?: {
    label: string;
    href: string;
    description: string;
    icon?: IconName;
  }[];
};

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  {
    label: "Talento",
    href: "/talento",
    children: talentSubpageNavItems,
  },
  {
    label: "Casos de uso",
    href: "/casos-de-uso",
    children: useCaseCategoryNavItems,
  },
  {
    label: "IA y Tecnología",
    href: aiTechnologyBasePath,
    children: aiTechnologyNavItems,
  },
  {
    label: "Dominios",
    href: "/dominios",
    children: domainNavItems.map((item) => ({
      label: item.menuLabel,
      href: item.href,
      description: item.description,
      icon: item.icon,
    })),
  },
  {
    label: "Recursos y blog",
    href: "/recursos",
    children: resourceNavItems.map((item) => ({
      label: item.menuLabel,
      href: item.href,
      description: item.description,
      icon: item.icon,
    })),
  },
  {
    label: "Comunidad",
    href: "/comunidad",
    children: [
      {
        label: "Newsletter",
        href: "/comunidad/newsletter",
        description: "Ideas semanales para seguir aprendiendo.",
      },
      {
        label: "Eventos",
        href: "/comunidad/eventos",
        description: "Encuentros, webinars y conversaciones.",
      },
    ],
  },
];

export const ctaNavigation = {
  label: "Agenda una sesión",
  href: "/agenda",
} as const;
