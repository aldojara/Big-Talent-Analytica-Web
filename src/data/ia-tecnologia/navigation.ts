import type { NavigationItem } from "@/config/navigation";

export const aiTechnologyBasePath = "/ia-y-tecnologia";

export const aiTechnologyNavItems: NonNullable<NavigationItem["children"]> = [
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
