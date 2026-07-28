import type { IconName } from "@/types/content";
import { aiTechnologyBasePath, aiTechnologyNavItems } from "@/data/ia-tecnologia/navigation";
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
    children: [
      {
        label: "Desarrollo profesional",
        href: "/talento/desarrollo-profesional",
        description: "Rutas y criterios para crecer con tecnología.",
      },
      {
        label: "Gestión del talento",
        href: "/talento/gestion",
        description: "Prácticas para equipos de alto desempeño.",
      },
    ],
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
    children: [
      {
        label: "Marketing y ventas",
        href: "/dominios/marketing-ventas",
        description: "Crecimiento, demanda y experiencia comercial.",
      },
      {
        label: "Operaciones",
        href: "/dominios/operaciones",
        description: "Procesos, supply chain y eficiencia.",
      },
    ],
  },
  {
    label: "Recursos",
    href: "/recursos",
    children: [
      {
        label: "Guías",
        href: "/recursos/guias",
        description: "Plantillas y recursos descargables.",
      },
      {
        label: "Cursos",
        href: "/recursos/cursos",
        description: "Rutas de aprendizaje aplicadas.",
      },
    ],
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
