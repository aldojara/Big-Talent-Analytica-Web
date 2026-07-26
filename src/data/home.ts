import type {
  Cta,
  Domain,
  FeaturedContent,
  LearningFormat,
  Pillar,
  RadarItem,
  Service,
} from "@/types/content";

export const heroContent = {
  eyebrow: "Big Talent Analytica",
  title: "Conocimiento que transforma talento en resultados",
  description:
    "Plataforma de conocimiento y casos de uso sobre IA, analítica, tecnología y gestión del talento para impulsar la transformación digital en personas y organizaciones.",
  ctas: [
    { label: "Explorar contenidos", href: "/recursos" },
    { label: "Ver casos de uso", href: "/casos-de-uso" },
    { label: "Conocer la plataforma", href: "/sobre-mi" },
  ] satisfies Cta[],
  specialties: [
    "Analítica y Datos",
    "Inteligencia Artificial",
    "Transformación Digital",
    "Talento y Desarrollo",
    "Estrategia y Negocios",
  ],
} as const;

export const pillars: Pillar[] = [
  {
    title: "Talento",
    description:
      "Formación, desarrollo profesional y gestión del talento para potenciar personas y equipos.",
    href: "/talento",
    icon: "talent",
  },
  {
    title: "Casos de uso",
    description:
      "Ejemplos reales y aplicables por industria y área funcional para inspirar y actuar.",
    href: "/casos-de-uso",
    icon: "briefcase",
  },
  {
    title: "IA y Tecnología",
    description:
      "Herramientas, tendencias y guías para aplicar IA, datos y automatización en tu negocio.",
    href: "/ia-tecnologia",
    icon: "ai",
  },
  {
    title: "Dominios",
    description:
      "Soluciones y conocimiento organizado por áreas y procesos clave del negocio.",
    href: "/dominios",
    icon: "domain",
  },
  {
    title: "Comunidad",
    description:
      "Conecta, aprende y comparte con una comunidad que impulsa la transformación.",
    href: "/comunidad",
    icon: "community",
  },
];

export const radarItems: RadarItem[] = [
  {
    title: "OpenAI presenta nuevas capacidades para modelos multimodales",
    category: "Novedad",
    date: "15 may 2026",
    topic: "IA Generativa",
    href: "/ia-tecnologia/openai-capacidades-multimodales",
  },
  {
    title: "Cinco tendencias de analítica que redefinen la toma de decisiones",
    category: "Análisis",
    date: "12 may 2026",
    topic: "Analítica",
    href: "/ia-tecnologia/tendencias-analitica",
  },
  {
    title: "Copilotos empresariales: productividad con gobierno y criterio",
    category: "Herramienta",
    date: "8 may 2026",
    topic: "Productividad",
    href: "/ia-tecnologia/copilotos-empresariales",
  },
  {
    title: "Automatización inteligente como ventaja competitiva sostenible",
    category: "Tendencia",
    date: "5 may 2026",
    topic: "Automatización",
    href: "/ia-tecnologia/automatizacion-inteligente",
  },
];

export const featuredContent: FeaturedContent[] = [
  {
    title: "IA para predecir demanda en Supply Chain",
    type: "Caso de uso",
    description:
      "Cómo combinar señales comerciales, inventario y modelos predictivos para anticipar escenarios.",
    href: "/casos-de-uso/ia-prediccion-demanda",
    ctaLabel: "Ver caso de uso",
    accent: "blue",
    icon: "chart",
  },
  {
    title: "Guía práctica: implementa analítica en tu empresa",
    type: "Guía",
    description:
      "Un marco simple para priorizar datos, decisiones y capacidades antes de invertir en tecnología.",
    href: "/recursos/guia-analitica-empresa",
    ctaLabel: "Descargar guía",
    accent: "teal",
    icon: "guide",
  },
  {
    title: "Ruta de aprendizaje en IA aplicada a negocios",
    type: "Curso",
    description:
      "Una secuencia introductoria para pasar de conceptos a aplicaciones concretas en áreas clave.",
    href: "/recursos/ruta-ia-negocios",
    ctaLabel: "Ver ruta",
    accent: "violet",
    icon: "course",
  },
  {
    title: "Cómo iniciar tu transformación digital sin morir en el intento",
    type: "Video",
    description:
      "Criterios para ordenar prioridades, equipo, cultura y herramientas desde el primer trimestre.",
    href: "/recursos/video-transformacion-digital",
    ctaLabel: "Ver video",
    accent: "rose",
    icon: "video",
  },
];

export const domains: Domain[] = [
  { title: "Marketing", href: "/dominios/marketing", icon: "megaphone" },
  { title: "Ventas", href: "/dominios/ventas", icon: "sales" },
  { title: "Supply Chain", href: "/dominios/supply-chain", icon: "process" },
  {
    title: "Atención al cliente",
    href: "/dominios/atencion-al-cliente",
    icon: "support",
  },
  { title: "Contact Center", href: "/dominios/contact-center", icon: "support" },
  { title: "Procesos", href: "/dominios/procesos", icon: "automation" },
  {
    title: "Recursos Humanos",
    href: "/dominios/recursos-humanos",
    icon: "talent",
  },
  { title: "Operaciones", href: "/dominios/operaciones", icon: "strategy" },
];

export const learningFormats: LearningFormat[] = [
  {
    title: "Artículos",
    description: "Análisis y opiniones",
    href: "/recursos/articulos",
    icon: "guide",
  },
  {
    title: "Videos",
    description: "Contenido práctico",
    href: "/recursos/videos",
    icon: "play",
  },
  {
    title: "Guías",
    description: "Recursos descargables",
    href: "/recursos/guias",
    icon: "learning",
  },
  {
    title: "Cursos",
    description: "Formación especializada",
    href: "/recursos/cursos",
    icon: "course",
  },
  {
    title: "Casos de uso",
    description: "Aplicaciones reales",
    href: "/casos-de-uso",
    icon: "briefcase",
  },
  {
    title: "Webinars",
    description: "Eventos en vivo",
    href: "/recursos/webinars",
    icon: "video",
  },
];

export const services: Service[] = [
  {
    title: "Mentoría",
    description: "Sesiones 1:1 para potenciar tu desarrollo y liderazgo.",
    href: "/servicios/mentoria",
    icon: "mentor",
    accent: "blue",
  },
  {
    title: "Consultoría",
    description: "Soluciones a medida para retos y procesos clave.",
    href: "/servicios/consultoria",
    icon: "consulting",
    accent: "teal",
  },
  {
    title: "Formación",
    description: "Programas y talleres para equipos y profesionales.",
    href: "/servicios/formacion",
    icon: "course",
    accent: "violet",
  },
  {
    title: "Conferencias",
    description: "Charlas inspiradoras y prácticas para transformar.",
    href: "/servicios/conferencias",
    icon: "service",
    accent: "orange",
  },
];
