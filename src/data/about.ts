import { ctaNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type {
  AboutHeroContent,
  AboutSocialLink,
  AuthorityProof,
  CareerMilestone,
  EcosystemStep,
  ProfessionalDimension,
  ProjectEcosystemItem,
  WorkPrinciple,
} from "@/types/about";

export const aboutHero: AboutHeroContent = {
  eyebrow: "ESTRATEGIA · TALENTO · IA APLICADA",
  title: siteConfig.founder,
  lead:
    "Transformo conocimiento, datos e inteligencia artificial en proyectos con utilidad real.",
  description:
    "Integro estrategia, talento, datos, educación, mentoría y experiencia internacional para diseñar soluciones que educan, inspiran y generan impacto positivo en personas, organizaciones y comunidades.",
  ctas: {
    primary: { label: "Conversemos", href: ctaNavigation.href },
    secondary: { label: "Ver mi trayectoria", href: "#trayectoria" },
  },
  chips: [
    "Experiencia internacional",
    "Datos e IA",
    "Talento",
    "Transformación",
    "Educación",
    "Mentoría",
  ],
  floatingProofs: [
    { label: "Estrategia y analítica", icon: "analytics" },
    { label: "Consultoría aplicada", icon: "briefcase" },
    { label: "Mentoría y crecimiento", icon: "talent" },
    { label: "Enseñanza y conocimiento", icon: "course" },
    { label: "Visión holística", icon: "globe" },
  ],
};

export const careerMilestones: CareerMilestone[] = [
  {
    number: "1",
    title: "Liderazgo corporativo",
    description: "Gestión de equipos y proyectos en empresas multinacionales.",
  },
  {
    number: "2",
    title: "Talento y transformación",
    description:
      "Diseño de estrategias de talento, cultura y cambio organizacional.",
  },
  {
    number: "3",
    title: "Datos y analítica",
    description: "Uso estratégico de datos para decisiones y crecimiento.",
  },
  {
    number: "4",
    title: "IA aplicada al negocio",
    description:
      "Implementación de IA en procesos, productos y experiencias.",
  },
  {
    number: "5",
    title: "Formación ejecutiva internacional",
    description:
      "Educación y desarrollo en Lider y Strateos, con visión global y práctica.",
  },
  {
    number: "6",
    title: "Ecosistema propio",
    description:
      "Creación de proyectos que educan, inspiran y generan impacto real.",
  },
];

export const authorityProofs: AuthorityProof[] = [
  {
    title: "Trayectoria global",
    description: "Experiencia internacional.",
    icon: "globe",
  },
  {
    title: "Trayectoria corporativa y cruzada",
    description: "En empresas líderes y proyectos de alto impacto.",
    icon: "analytics",
  },
  {
    title: "Formación internacional",
    description: "Estudios y certificaciones en Latinoamérica, Europa y EE. UU.",
    icon: "diamond",
  },
  {
    title: "LatAm + Europa",
    description:
      "Experiencia multicultural que conecta contextos y oportunidades.",
    icon: "globe",
  },
];

export const professionalDimensions: ProfessionalDimension[] = [
  {
    title: "Profesional y estrategia",
    description:
      "Estrategia corporativa, modelos de negocio y liderazgo ejecutivo con foco en resultados.",
    icon: "strategy",
    accent: "blue",
  },
  {
    title: "Consultoría aplicada",
    description:
      "Asesoría a empresas y profesionales en datos, IA, productos y comunicación para generar cambios medibles.",
    icon: "briefcase",
    accent: "violet",
  },
  {
    title: "Mentoría y crecimiento",
    description:
      "Acompaño a profesionales y emprendedores a acelerar su desarrollo y potenciar su impacto.",
    icon: "talent",
    accent: "teal",
  },
  {
    title: "Enseñanza y conocimiento",
    description:
      "Creo experiencias de aprendizaje prácticas y memorables que transforman la intención en acción.",
    icon: "learning",
    accent: "cyan",
  },
  {
    title: "Creatividad y contenido",
    description:
      "Contenido que informa, inspira y conecta: artículos, guías, cursos, podcasts y experiencias.",
    icon: "pencil",
    accent: "rose",
  },
  {
    title: "Visión holística",
    description:
      "Veo sistemas, conecto perspectivas y diseño cambios que generan impacto duradero.",
    icon: "globe",
    accent: "amber",
  },
];

export const ecosystemSteps: EcosystemStep[] = [
  {
    title: "Datos e IA",
    description: "Entiendo para tomar decisiones mejores.",
    icon: "analytics",
  },
  {
    title: "Educación",
    description: "Aprendo para crecer y enseñar a otros.",
    icon: "course",
  },
  {
    title: "Mentoría",
    description: "Acompaño para multiplicar resultados.",
    icon: "talent",
  },
  {
    title: "Proyectos",
    description: "Creo soluciones con impacto real.",
    icon: "rocket",
  },
  {
    title: "Contenido",
    description: "Comparto para inspirar y generar impacto.",
    icon: "megaphone",
  },
  {
    title: "Comunidad",
    description: "Conecto para colaborar y crear valor.",
    icon: "community",
  },
];

export const projectEcosystem: ProjectEcosystemItem[] = [
  {
    title: "Big Talent Analytica",
    label: "PROYECTO PRINCIPAL",
    description:
      "Consultoría en datos, analítica e IA aplicada a talento, educación y estrategia organizacional.",
    tags: ["Datos", "IA", "Consultoría"],
    status: "En desarrollo",
    href: "/",
    visual: "primary",
  },
  {
    title: "Aprende Francés Viajando",
    description:
      "Plataforma EdTech para aprender francés con experiencias prácticas, cultura y experiencias de viaje.",
    tags: ["EdTech", "Idiomas", "Comunidad"],
    status: "En desarrollo",
    visual: "travel",
  },
  {
    title: "Recursos inteligentes",
    description:
      "Guías, plantillas y herramientas para aprender mejor con tecnología y enfoque estratégico.",
    tags: ["EdTech", "Productividad", "IA"],
    status: "En desarrollo",
    visual: "resources",
  },
  {
    title: "Exploración y contenido",
    description:
      "Historias, rutas y consejos para viajar mejor, conectar culturas y vivir experiencias auténticas.",
    tags: ["Viajes", "Contenido", "Experiencias"],
    status: "En desarrollo",
    visual: "content",
  },
];

export const workPrinciples: WorkPrinciple[] = [
  {
    title: "Claridad antes que complejidad",
    description: "Simplificar lo complejo para que cualquiera pueda avanzar.",
    icon: "diamond",
  },
  {
    title: "Tecnología con utilidad real",
    description: "Herramientas al servicio de las personas y el propósito.",
    icon: "automation",
  },
  {
    title: "Aprender para comunicar",
    description: "Solo se aprende de verdad cuando se comparte.",
    icon: "community",
  },
  {
    title: "Evolución continua",
    description: "Iterar, medir y mejorar. Siempre aprendiendo.",
    icon: "sales",
  },
  {
    title: "Visión global",
    description: "Pensar globalmente y actuar con impacto local.",
    icon: "globe",
  },
];

export const aboutSocialLinks: AboutSocialLink[] = [
  {
    label: "Email",
    href: `mailto:${siteConfig.contactEmail}`,
    icon: "mail",
  },
];
