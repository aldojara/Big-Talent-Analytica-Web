import type {
  TalentAiUse,
  TalentArea,
  TalentAudience,
  TalentContentItem,
  TalentFormat,
  TalentPrinciple,
  TalentSolution,
  TalentStep,
} from "@/types/talent";

export const talentHero = {
  eyebrow: "TALENTO · APRENDIZAJE · TRANSFORMACIÓN",
  title:
    "Desarrollo talento y capacidades para transformar personas, equipos y organizaciones.",
  description:
    "Integro liderazgo, aprendizaje, upskilling, transformación organizacional e inteligencia artificial para crear soluciones formativas y estratégicas con utilidad real.",
  ctas: [
    { label: "Explorar áreas", href: "#talent-areas" },
    { label: "Conversemos", href: "/agenda" },
  ],
} as const;

export const talentAreas: TalentArea[] = [
  {
    id: "leadership-culture",
    title: "Liderazgo y cultura",
    description:
      "Desarrollo de líderes, equipos y culturas que favorecen aprendizaje, colaboración y cambio sostenible.",
    icon: "community",
    href: "/talento/liderazgo-y-cultura",
    accent: "blue",
  },
  {
    id: "upskilling-reskilling",
    title: "Upskilling y reskilling",
    description:
      "Rutas para actualizar capacidades, acelerar transición de roles y preparar talento para nuevos desafíos.",
    icon: "chart",
    href: "/talento/upskilling-y-reskilling",
    accent: "violet",
  },
  {
    id: "talent-ai",
    title: "Talento e IA",
    description:
      "Aplicación de IA para potenciar aprendizaje, productividad, toma de decisiones y evolución de capacidades.",
    icon: "ai",
    href: "/talento/talento-e-ia",
    accent: "cyan",
  },
  {
    id: "corporate-training",
    title: "Formación corporativa",
    description:
      "Programas in company, talleres y experiencias de aprendizaje alineadas con objetivos de negocio.",
    icon: "learning",
    href: "/talento/formacion-corporativa",
    accent: "blue",
  },
  {
    id: "professional-mentoring",
    title: "Mentoría profesional",
    description:
      "Acompañamiento a profesionales, líderes y emprendedores para crecer con foco, criterio y dirección.",
    icon: "mentor",
    href: "/talento/mentoria-profesional",
    accent: "green",
  },
  {
    id: "organizational-transformation",
    title: "Transformación organizacional",
    description:
      "Conexión entre estrategia, personas, procesos y adopción tecnológica para impulsar cambios reales.",
    icon: "domain",
    href: "/talento/transformacion-organizacional",
    accent: "orange",
  },
];

export const talentSteps: TalentStep[] = [
  {
    id: "diagnosis",
    title: "Diagnóstico",
    description: "Entender contexto, capacidades y necesidades reales.",
    icon: "strategy",
    accent: "blue",
  },
  {
    id: "design",
    title: "Diseño",
    description: "Definir objetivos, rutas, formatos y resultados esperados.",
    icon: "pencil",
    accent: "violet",
  },
  {
    id: "learning",
    title: "Aprendizaje",
    description: "Activar experiencias prácticas, útiles y memorables.",
    icon: "learning",
    accent: "blue",
  },
  {
    id: "application",
    title: "Aplicación",
    description: "Llevar lo aprendido a decisiones, procesos y trabajo real.",
    icon: "rocket",
    accent: "green",
  },
  {
    id: "evolution",
    title: "Evolución",
    description: "Medir avances, iterar y fortalecer capacidades en el tiempo.",
    icon: "analytics",
    accent: "orange",
  },
];

export const talentSolutions: TalentSolution[] = [
  {
    id: "professionals",
    title: "Para profesionales",
    audience: "Profesionales",
    items: [
      "Mentoría profesional",
      "Desarrollo de liderazgo",
      "Aprendizaje aplicado",
      "Upskilling personal",
    ],
    cta: { label: "Explorar para profesionales", href: "#talent-audiences" },
    icon: "mentor",
    accent: "blue",
  },
  {
    id: "companies",
    title: "Para empresas e instituciones",
    audience: "Empresas e instituciones",
    items: [
      "Formación corporativa",
      "Programas in company",
      "Talento e IA",
      "Cambio organizacional",
    ],
    cta: { label: "Explorar para empresas", href: "#corporate-training" },
    icon: "domain",
    accent: "green",
  },
];

export const talentFormats: TalentFormat[] = [
  { id: "workshops", title: "Talleres", format: "Taller", icon: "community" },
  {
    id: "in-company",
    title: "Programas in company",
    format: "Programa",
    icon: "briefcase",
  },
  { id: "bootcamps", title: "Bootcamps", format: "Bootcamp", icon: "ai" },
  {
    id: "learning-paths",
    title: "Rutas de aprendizaje",
    format: "Ruta",
    icon: "guide",
  },
  {
    id: "executive-talks",
    title: "Charlas ejecutivas",
    format: "Charla",
    icon: "mentor",
  },
  {
    id: "applied-workshops",
    title: "Workshops aplicados",
    format: "Workshop",
    icon: "spark",
  },
];

export const talentAiUses: TalentAiUse[] = [
  { id: "ai-learning", title: "IA para aprendizaje", icon: "course" },
  {
    id: "ai-productivity",
    title: "IA para productividad profesional",
    icon: "chart",
  },
  { id: "ai-program-design", title: "IA para diseño de programas", icon: "guide" },
  { id: "ai-role-change", title: "IA para transformación de roles", icon: "mentor" },
  {
    id: "ai-knowledge",
    title: "IA para gestión del conocimiento",
    icon: "automation",
  },
  { id: "ai-leadership", title: "IA para equipos y liderazgo", icon: "talent" },
];

export const talentContentItems: TalentContentItem[] = [
  {
    id: "leadership-change",
    category: "Curso",
    badge: "Curso",
    title: "Liderazgo en entornos de cambio",
    tags: ["Liderazgo", "Cambio", "Equipos"],
    status: "En desarrollo",
    image: "visual-leadership-change",
    imageAlt: "Composición abstracta sobre brújula, dirección y cambio.",
    href: "/recursos/cursos-y-rutas",
    icon: "strategy",
    accent: "orange",
  },
  {
    id: "upskilling-transition",
    category: "Ruta",
    badge: "Ruta",
    title: "Upskilling para profesionales en transición",
    tags: ["Upskilling", "Carrera", "Transición"],
    status: "En desarrollo",
    image: "visual-upskilling-transition",
    imageAlt: "Composición abstracta de ruta profesional hacia nuevas capacidades.",
    href: "/recursos/rutas/upskilling-profesionales-transicion",
    icon: "chart",
    accent: "green",
  },
  {
    id: "ai-talent-development",
    category: "Curso",
    badge: "Curso",
    title: "IA aplicada al desarrollo del talento",
    tags: ["IA", "Talento", "Aprendizaje"],
    status: "Próximamente",
    image: "visual-ai-talent-development",
    imageAlt: "Composición abstracta de inteligencia artificial y aprendizaje.",
    href: "/recursos/cursos-y-rutas",
    icon: "ai",
    accent: "blue",
  },
  {
    id: "future-capabilities",
    category: "Guía",
    badge: "Guía",
    title: "Cómo diseñar capacidades para el futuro",
    tags: ["Estrategia", "Aprendizaje", "Futuro"],
    status: "Disponible",
    image: "visual-future-capabilities",
    imageAlt: "Composición abstracta de páginas y planificación de capacidades.",
    href: "/recursos/guias-y-plantillas",
    icon: "guide",
    accent: "orange",
  },
];

export const talentAudiences: TalentAudience[] = [
  {
    id: "leaders",
    title: "Líderes y ejecutivos",
    audience: "Líderes",
    icon: "community",
    accent: "blue",
  },
  {
    id: "hr-talent",
    title: "RR. HH. y talento",
    audience: "RR. HH.",
    icon: "learning",
    accent: "green",
  },
  {
    id: "learning-teams",
    title: "Equipos de aprendizaje",
    audience: "Equipos",
    icon: "course",
    accent: "violet",
  },
  {
    id: "professionals",
    title: "Profesionales en crecimiento",
    audience: "Profesionales",
    icon: "network",
    accent: "orange",
  },
  {
    id: "entrepreneurs",
    title: "Emprendedores",
    audience: "Emprendedores",
    icon: "spark",
    accent: "rose",
  },
  {
    id: "companies",
    title: "Empresas e instituciones",
    audience: "Empresas",
    icon: "domain",
    accent: "blue",
  },
];

export const talentPrinciples: TalentPrinciple[] = [
  {
    id: "learn-apply",
    title: "Aprender para aplicar",
    description:
      "El aprendizaje cobra sentido cuando se convierte en acción y resultados.",
    icon: "learning",
    accent: "blue",
  },
  {
    id: "purposeful-tech",
    title: "Tecnología con propósito",
    description: "La tecnología potencia capacidades humanas, no las reemplaza.",
    icon: "network",
    accent: "violet",
  },
  {
    id: "capabilities-first",
    title: "Capacidades antes que moda",
    description: "Desarrollar habilidades relevantes y sostenibles, no seguir tendencias.",
    icon: "strategy",
    accent: "green",
  },
  {
    id: "human-change",
    title: "Cambio con foco humano",
    description: "Las personas están al centro del cambio y la transformación.",
    icon: "mentor",
    accent: "rose",
  },
  {
    id: "continuous-evolution",
    title: "Evolución continua",
    description: "El desarrollo es un proceso constante de aprendizaje y mejora.",
    icon: "analytics",
    accent: "orange",
  },
];
