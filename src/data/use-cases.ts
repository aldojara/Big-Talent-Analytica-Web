import type {
  FeaturedUseCase,
  UseCaseAudience,
  UseCaseCategory,
  UseCaseImpactItem,
  UseCaseProcessStep,
  UseCaseValueProposal,
  UseCasesFinalCta,
  UseCasesHero,
} from "@/types/use-case";

export const useCasesHero: UseCasesHero = {
  breadcrumb: "Casos de uso",
  title: "Casos de uso que convierten desafíos",
  highlightedTitle: "en resultados.",
  description:
    "Explora aplicaciones concretas donde talento, inteligencia artificial, analítica y transformación se traducen en impacto de negocio medible y sostenible.",
  primaryCta: { label: "Explorar casos", href: "#casos-destacados" },
  secondaryCta: { label: "Agendar una sesión", href: "/agenda" },
  metrics: [
    {
      id: "potential-efficiency",
      label: "Eficiencia potencial",
      value: "+32%",
      detail: "estimación según alcance",
    },
    {
      id: "target-adoption",
      label: "Adopción objetivo",
      value: "87%",
      detail: "meta de apropiación",
    },
    {
      id: "estimated-return",
      label: "Retorno estimado",
      value: "3.4x",
      detail: "referencial por iniciativa",
    },
    {
      id: "phased-implementation",
      label: "Implementación por fases",
      value: "6 - 10",
      detail: "semanas promedio",
    },
  ],
};

export const useCaseValueProposals: UseCaseValueProposal[] = [
  {
    id: "real-challenges",
    title: "Retos reales",
    description: "Abordamos desafíos concretos de organizaciones como la tuya.",
    icon: "strategy",
  },
  {
    id: "applied-solutions",
    title: "Soluciones aplicadas",
    description: "Diseñamos e implementamos soluciones prácticas y efectivas.",
    icon: "process",
  },
  {
    id: "measurable-results",
    title: "Resultados medibles",
    description:
      "Conectamos la ejecución con indicadores y objetivos de negocio.",
    icon: "chart",
  },
  {
    id: "guided-implementation",
    title: "Implementación acompañada",
    description:
      "Te acompañamos en cada etapa para facilitar la adopción y la generación de valor.",
    icon: "support",
  },
];

export const useCaseCategories: UseCaseCategory[] = [
  {
    id: "talent-hr",
    title: "Talento y RR. HH.",
    description:
      "Casos de selección, desarrollo, retención y cultura impulsados por datos y tecnología.",
    icon: "talent",
  },
  {
    id: "ai-automation",
    title: "IA y automatización",
    description:
      "Aplicaciones de inteligencia artificial y automatización para optimizar procesos y liberar capacidad.",
    icon: "ai",
  },
  {
    id: "business-analytics",
    title: "Analítica para negocio",
    description:
      "Soluciones de analítica que convierten datos en decisiones estratégicas.",
    icon: "analytics",
  },
  {
    id: "organizational-transformation",
    title: "Transformación organizacional",
    description:
      "Experiencias de cambio, diseño organizacional y adopción sostenible de nuevas capacidades.",
    icon: "domain",
  },
];

export const featuredUseCases: FeaturedUseCase[] = [
  {
    id: "ai-talent-selection",
    title: "Selección y desarrollo de talento con IA",
    category: "Talento",
    description:
      "Aplicamos analítica e inteligencia artificial para mejorar la identificación de capacidades, facilitar la selección y orientar el desarrollo del talento.",
    icon: "talent",
    accent: "blue",
    status: "Caso en desarrollo",
  },
  {
    id: "critical-process-automation",
    title: "Automatización de procesos críticos",
    category: "Procesos",
    description:
      "Diseñamos flujos de automatización para reducir tareas repetitivas, tiempos operativos y errores en procesos relevantes.",
    icon: "automation",
    accent: "cyan",
    status: "Caso en desarrollo",
  },
  {
    id: "digital-adoption-upskilling",
    title: "Upskilling y adopción digital",
    category: "Capacidades",
    description:
      "Diseñamos programas de desarrollo que fortalecen competencias y facilitan la adopción sostenible de nuevas herramientas.",
    icon: "learning",
    accent: "violet",
    status: "Próximamente",
  },
  {
    id: "commercial-analytics",
    title: "Analítica comercial para decisiones",
    category: "Analítica",
    description:
      "Integramos indicadores, visualizaciones y modelos de análisis para mejorar la comprensión del desempeño y la toma de decisiones.",
    icon: "sales",
    accent: "orange",
    status: "Caso en desarrollo",
  },
];

export const useCaseProcessSteps: UseCaseProcessStep[] = [
  {
    id: "challenge",
    number: "1",
    title: "Desafío",
    description: "Entendemos el contexto y definimos el reto estratégico.",
    icon: "strategy",
  },
  {
    id: "diagnosis",
    number: "2",
    title: "Diagnóstico",
    description:
      "Analizamos datos, procesos y capacidades para identificar oportunidades clave.",
    icon: "analytics",
  },
  {
    id: "design",
    number: "3",
    title: "Diseño",
    description:
      "Co-creamos la solución y el plan de acción más adecuado para la organización.",
    icon: "pencil",
  },
  {
    id: "implementation",
    number: "4",
    title: "Implementación",
    description:
      "Ejecutamos la solución con metodologías ágiles y gestión del cambio.",
    icon: "automation",
  },
  {
    id: "impact",
    number: "5",
    title: "Impacto",
    description:
      "Medimos, optimizamos y escalamos para generar valor sostenible.",
    icon: "chart",
  },
];

export const useCaseImpactItems: UseCaseImpactItem[] = [
  {
    id: "productivity",
    title: "Mayor productividad",
    description:
      "Equipos más eficientes y enfocados en las actividades que realmente generan valor.",
    icon: "chart",
  },
  {
    id: "faster-decisions",
    title: "Decisiones más rápidas",
    description:
      "Datos y analítica que aceleran y mejoran la toma de decisiones.",
    icon: "analytics",
  },
  {
    id: "sustainable-adoption",
    title: "Adopción sostenible",
    description:
      "Acompañamiento que facilita nuevos hábitos, capacidades y formas de trabajo.",
    icon: "support",
  },
  {
    id: "operational-efficiency",
    title: "Eficiencia operativa",
    description:
      "Procesos optimizados que reducen fricción, tiempos y costes operativos.",
    icon: "process",
  },
];

export const useCaseAudiences: UseCaseAudience[] = [
  {
    id: "corporate-companies",
    title: "Empresas corporativas",
    description:
      "Organizaciones que buscan innovar, optimizar y crecer de forma sostenible.",
    icon: "domain",
  },
  {
    id: "scaleups-smbs",
    title: "Scaleups y pymes",
    description:
      "Equipos en crecimiento que necesitan escalar con procesos y tecnología inteligentes.",
    icon: "rocket",
  },
  {
    id: "institutions",
    title: "Instituciones",
    description:
      "Entidades públicas, educativas o sociales que impulsan modernización y eficiencia.",
    icon: "briefcase",
  },
  {
    id: "functional-teams",
    title: "Equipos funcionales",
    description:
      "Áreas de negocio que quieren mejorar desempeño, capacidades y generación de impacto.",
    icon: "community",
  },
];

export const useCasesFinalCta: UseCasesFinalCta = {
  title: "Convirtamos tu desafío en un",
  highlightedTitle: "caso de éxito.",
  description:
    "Hablemos sobre tu contexto y diseñemos una solución práctica, medible y alineada con tus objetivos.",
  primaryCta: { label: "Agendar una sesión", href: "/agenda" },
  secondaryCta: { label: "Ver servicios", href: "/#servicios" },
};
