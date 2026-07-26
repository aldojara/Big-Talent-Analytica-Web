export type NavigationItem = {
  label: string;
  href: string;
  active?: boolean;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
};

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/", active: true },
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
    children: [
      {
        label: "Por área",
        href: "/casos-de-uso/areas",
        description: "Aplicaciones para marketing, ventas y operaciones.",
      },
      {
        label: "Por tecnología",
        href: "/casos-de-uso/tecnologias",
        description: "IA generativa, analítica y automatización.",
      },
    ],
  },
  {
    label: "IA y Tecnología",
    href: "/ia-tecnologia",
    children: [
      {
        label: "Radar",
        href: "/ia-tecnologia/radar",
        description: "Tendencias, herramientas y señales del mercado.",
      },
      {
        label: "Guías prácticas",
        href: "/ia-tecnologia/guias",
        description: "Marcos para aplicar IA con criterio.",
      },
    ],
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
