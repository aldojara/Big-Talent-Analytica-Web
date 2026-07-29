import type { IconName } from "@/types/content";

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

export const talentNavigationItems: NonNullable<NavigationItem["children"]> = [
  {
    label: "Liderazgo y cultura",
    href: "/talento/liderazgo-y-cultura",
    description:
      "Desarrollo de liderazgo, cultura organizacional, comunicación, equipos y gestión del cambio.",
    icon: "community",
  },
  {
    label: "Upskilling y reskilling",
    href: "/talento/upskilling-y-reskilling",
    description:
      "Rutas de aprendizaje para desarrollar nuevas competencias y transformar talento en capacidad real.",
    icon: "chart",
  },
  {
    label: "Talento e IA",
    href: "/talento/talento-e-ia",
    description:
      "Estrategia, desarrollo de capacidades y adopción responsable de inteligencia artificial.",
    icon: "ai",
  },
  {
    label: "Formación corporativa",
    href: "/talento/formacion-corporativa",
    description:
      "Programas in-company, workshops y experiencias de aprendizaje para equipos.",
    icon: "learning",
  },
  {
    label: "Mentoría profesional",
    href: "/talento/mentoria-profesional",
    description:
      "Acompañamiento individual para acelerar decisiones, carrera y liderazgo.",
    icon: "mentor",
  },
  {
    label: "Transformación organizacional",
    href: "/talento/transformacion-organizacional",
    description:
      "Gestión del cambio, capacidades, cultura y adopción para evolucionar organizaciones.",
    icon: "domain",
  },
];

export const useCaseCategoryNavigationItems: NonNullable<NavigationItem["children"]> = [
  {
    label: "Experiencia de cliente",
    href: "/casos-de-uso/experiencia-de-cliente",
    description: "Journey, personalización y fidelización.",
    icon: "route",
  },
  {
    label: "Marketing y ventas",
    href: "/casos-de-uso/marketing-y-ventas",
    description: "Audiencias, campañas, conversión y ventas.",
    icon: "megaphone",
  },
  {
    label: "Supply Chain y Operaciones",
    href: "/casos-de-uso/supply-chain-y-operaciones",
    description: "Planificación, inventario, logística y procesos.",
    icon: "process",
  },
  {
    label: "Analítica y toma de decisiones",
    href: "/casos-de-uso/analitica-y-toma-de-decisiones",
    description: "Dashboards, forecasting, KPIs e insights.",
    icon: "analytics",
  },
  {
    label: "IA aplicada al negocio",
    href: "/casos-de-uso/ia-aplicada-al-negocio",
    description: "Predicción, automatización y optimización.",
    icon: "ai",
  },
  {
    label: "Finanzas y rendimiento",
    href: "/casos-de-uso/finanzas-y-rendimiento",
    description: "Rentabilidad, forecasting, riesgo y control.",
    icon: "money",
  },
  {
    label: "Transformación digital y organizacional",
    href: "/casos-de-uso/transformacion-digital-y-organizacional",
    description: "Cambio, procesos, adopción y capacidades.",
    icon: "automation",
  },
  {
    label: "Talento y RR. HH.",
    href: "/casos-de-uso/talento-y-recursos-humanos",
    description: "Atracción, desempeño, people analytics y cultura.",
    icon: "talent",
  },
];

export const aiTechnologyBasePath = "/ia-y-tecnologia";

export const aiTechnologyNavigationItems: NonNullable<NavigationItem["children"]> = [
  {
    label: "Radar de IA y Tecnología",
    href: `${aiTechnologyBasePath}/radar`,
    description: "Señales, tendencias y oportunidades emergentes.",
    icon: "strategy",
  },
  {
    label: "Inteligencia artificial",
    href: `${aiTechnologyBasePath}/inteligencia-artificial`,
    description: "Fundamentos, enfoques y aplicaciones reales.",
    icon: "ai",
  },
  {
    label: "IA generativa",
    href: `${aiTechnologyBasePath}/ia-generativa`,
    description: "Modelos, copilotos, prompting y productividad.",
    icon: "spark",
  },
  {
    label: "Datos y analítica",
    href: `${aiTechnologyBasePath}/datos-y-analitica`,
    description: "Datos confiables e inteligencia accionable.",
    icon: "analytics",
  },
  {
    label: "Automatización",
    href: `${aiTechnologyBasePath}/automatizacion`,
    description: "Procesos, workflows, bots e integración operativa.",
    icon: "automation",
  },
  {
    label: "Herramientas y plataformas",
    href: `${aiTechnologyBasePath}/herramientas-y-plataformas`,
    description: "Selección, comparación e implementación con criterio.",
    icon: "briefcase",
  },
  {
    label: "Transformación digital",
    href: `${aiTechnologyBasePath}/transformacion-digital`,
    description: "Estrategia, procesos, tecnología y adopción.",
    icon: "rocket",
  },
  {
    label: "IA responsable y gobierno",
    href: `${aiTechnologyBasePath}/ia-responsable-y-gobierno`,
    description: "Ética, riesgos, privacidad, gobierno y cumplimiento.",
    icon: "shield",
  },
];

export const domainNavigationItems: NonNullable<NavigationItem["children"]> = [
  {
    label: "Marketing y ventas",
    href: "/dominios/marketing-y-ventas",
    description: "Audiencias, campañas, conversión, CRM y rendimiento comercial.",
    icon: "megaphone",
  },
  {
    label: "Experiencia de cliente y servicio",
    href: "/dominios/experiencia-de-cliente-y-servicio",
    description: "Journey, fidelización, Contact Center y customer success.",
    icon: "support",
  },
  {
    label: "Supply Chain y operaciones",
    href: "/dominios/supply-chain-y-operaciones",
    description: "Planificación, inventario, logística, calidad y ejecución.",
    icon: "domain",
  },
  {
    label: "Procesos y transformación",
    href: "/dominios/procesos-y-transformacion",
    description: "Procesos, automatización, cambio y adopción organizacional.",
    icon: "process",
  },
  {
    label: "Finanzas y rendimiento",
    href: "/dominios/finanzas-y-rendimiento",
    description: "Planificación, forecasting, rentabilidad, riesgo y control.",
    icon: "money",
  },
  {
    label: "Talento y Recursos Humanos",
    href: "/dominios/talento-y-recursos-humanos",
    description: "Atracción, capacidades, desempeño, people analytics y experiencia.",
    icon: "talent",
  },
];

export const resourceNavigationItems: NonNullable<NavigationItem["children"]> = [
  {
    label: "Blog",
    href: "/recursos/blog",
    description: "Análisis, tendencias, opinión y conocimiento aplicado.",
    icon: "guide",
  },
  {
    label: "Guías y plantillas",
    href: "/recursos/guias-y-plantillas",
    description: "Frameworks, checklists y recursos listos para usar.",
    icon: "list-check",
  },
  {
    label: "Videos",
    href: "/recursos/videos",
    description: "Explicaciones visuales, demos y conversaciones.",
    icon: "play",
  },
  {
    label: "Podcasts",
    href: "/recursos/podcasts",
    description: "Entrevistas, reflexiones y episodios en audio.",
    icon: "support",
  },
  {
    label: "Cursos y rutas",
    href: "/recursos/cursos-y-rutas",
    description: "Aprendizaje estructurado para desarrollar capacidades.",
    icon: "course",
  },
  {
    label: "Herramientas",
    href: "/recursos/herramientas",
    description: "Utilidades, diagnósticos y recursos interactivos.",
    icon: "automation",
  },
];

export const communityNavigationItems: NonNullable<NavigationItem["children"]> = [
  {
    label: "Newsletter",
    href: "/comunidad/newsletter",
    description: "Ideas semanales para aprender y aplicar IA, datos y talento.",
    icon: "mail",
  },
  {
    label: "Webinars y eventos",
    href: "/comunidad/webinars-y-eventos",
    description: "Sesiones en vivo, encuentros y grabaciones destacadas.",
    icon: "calendar",
  },
  {
    label: "Canales y redes",
    href: "/comunidad/canales-y-redes",
    description: "Presencia social, contenido corto y conversación abierta.",
    icon: "megaphone",
  },
  {
    label: "Colaboraciones",
    href: "/comunidad/colaboraciones",
    description: "Alianzas, invitados, proyectos y sinergias con propósito.",
    icon: "network",
  },
  {
    label: "Comunidad privada",
    href: "/comunidad/comunidad-privada",
    description: "Espacio futuro para miembros, networking y aprendizaje.",
    icon: "shield",
  },
];

export const mainNavigation: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  {
    label: "Talento",
    href: "/talento",
    children: talentNavigationItems,
  },
  {
    label: "Casos de uso",
    href: "/casos-de-uso",
    children: useCaseCategoryNavigationItems,
  },
  {
    label: "IA y Tecnología",
    href: aiTechnologyBasePath,
    children: aiTechnologyNavigationItems,
  },
  {
    label: "Dominios",
    href: "/dominios",
    children: domainNavigationItems,
  },
  {
    label: "Recursos y blog",
    href: "/recursos",
    children: resourceNavigationItems,
  },
  {
    label: "Comunidad",
    href: "/comunidad",
    children: communityNavigationItems,
  },
];

export const ctaNavigation = {
  label: "Agenda una sesión",
  href: "/agenda",
} as const;
