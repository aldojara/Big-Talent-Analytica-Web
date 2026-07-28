import type {
  DomainBasicItem,
  DomainNavItem,
  DomainPage,
  DomainResource,
  DomainTheme,
} from "@/types/domains";

const agenda = "/agenda";
const cases = "/casos-de-uso";
const resources = "/recursos";

export const domainThemes: Record<DomainTheme["name"], DomainTheme> = {
  blue: {
    name: "blue",
    accent: "#1d73ff",
    soft: "rgb(29 115 255 / 0.1)",
    border: "rgb(29 115 255 / 0.22)",
    text: "text-[var(--bta-blue-bright)]",
  },
  cyan: {
    name: "cyan",
    accent: "#18c4c7",
    soft: "rgb(24 196 199 / 0.11)",
    border: "rgb(24 196 199 / 0.24)",
    text: "text-cyan-300",
  },
  green: {
    name: "green",
    accent: "#19b979",
    soft: "rgb(25 185 121 / 0.12)",
    border: "rgb(25 185 121 / 0.24)",
    text: "text-emerald-300",
  },
  violet: {
    name: "violet",
    accent: "#7c3aed",
    soft: "rgb(124 58 237 / 0.11)",
    border: "rgb(124 58 237 / 0.24)",
    text: "text-violet-300",
  },
  amber: {
    name: "amber",
    accent: "#f59e0b",
    soft: "rgb(245 158 11 / 0.12)",
    border: "rgb(245 158 11 / 0.26)",
    text: "text-amber-300",
  },
};

export const domainNavItems: DomainNavItem[] = [
  {
    slug: "marketing-y-ventas",
    menuLabel: "Marketing y ventas",
    href: "/dominios/marketing-y-ventas",
    description: "Audiencias, campañas, conversión, CRM y rendimiento comercial.",
    icon: "megaphone",
    theme: "blue",
  },
  {
    slug: "experiencia-de-cliente-y-servicio",
    menuLabel: "Experiencia de cliente y servicio",
    href: "/dominios/experiencia-de-cliente-y-servicio",
    description: "Journey, fidelización, Contact Center y customer success.",
    icon: "support",
    theme: "cyan",
  },
  {
    slug: "supply-chain-y-operaciones",
    menuLabel: "Supply Chain y operaciones",
    href: "/dominios/supply-chain-y-operaciones",
    description: "Planificación, inventario, logística, calidad y ejecución.",
    icon: "domain",
    theme: "green",
  },
  {
    slug: "procesos-y-transformacion",
    menuLabel: "Procesos y transformación",
    href: "/dominios/procesos-y-transformacion",
    description: "Procesos, automatización, cambio y adopción organizacional.",
    icon: "process",
    theme: "violet",
  },
  {
    slug: "finanzas-y-rendimiento",
    menuLabel: "Finanzas y rendimiento",
    href: "/dominios/finanzas-y-rendimiento",
    description: "Planificación, forecasting, rentabilidad, riesgo y control.",
    icon: "money",
    theme: "amber",
  },
  {
    slug: "talento-y-recursos-humanos",
    menuLabel: "Talento y Recursos Humanos",
    href: "/dominios/talento-y-recursos-humanos",
    description: "Atracción, capacidades, desempeño, people analytics y experiencia.",
    icon: "talent",
    theme: "violet",
  },
];

const commonResources = (domain: string): DomainResource[] => [
  {
    type: "Artículo",
    title: `Tendencias aplicadas a ${domain}`,
    description: "Ideas y criterios para priorizar oportunidades con datos e IA.",
    href: resources,
    icon: "guide",
  },
  {
    type: "Guía",
    title: "Frameworks y metodologías",
    description: "Pasos prácticos para diseñar iniciativas aplicables.",
    href: "/recursos/guias",
    icon: "learning",
  },
  {
    type: "Caso",
    title: "Historias reales de impacto medible",
    description: "Ejemplos de aplicación y métricas de referencia.",
    href: cases,
    icon: "briefcase",
  },
  {
    type: "Video",
    title: "Charlas y mejores prácticas",
    description: "Explicaciones compactas para compartir con tu equipo.",
    href: "/recursos/videos",
    icon: "play",
  },
  {
    type: "Curso",
    title: "Rutas de aprendizaje",
    description: "Capacidades para aplicar analítica, automatización e IA.",
    href: "/recursos/cursos",
    icon: "course",
  },
];

const baseFinalCta = {
  description:
    "Diseñemos juntos una hoja de ruta, un workshop o una sesión estratégica según tus dominios y objetivos.",
  primaryCta: { label: "Agenda una sesión", href: agenda },
  secondaryCta: { label: "Explorar servicios", href: "/talento" },
  icon: "spark" as const,
};

export const domainPages: DomainPage[] = [
  {
    ...domainNavItems[0],
    breadcrumbLabel: "Marketing y ventas",
    eyebrow: "DOMINIOS · MARKETING Y VENTAS",
    title: "Marketing y ventas impulsados por datos, IA y conversión",
    highlightedTerms: ["datos", "IA", "conversión"],
    description:
      "Explora cómo la analítica, la automatización y la inteligencia artificial ayudan a comprender audiencias, optimizar campañas, mejorar la conversión y acelerar el rendimiento comercial.",
    primaryCta: { label: "Explorar capacidades", href: "#capacidades" },
    secondaryCta: { label: "Ver casos de uso", href: cases },
    visual: "marketing",
    challengesTitle: "Retos clave en Marketing y ventas",
    challenges: [
      { title: "Audiencias y segmentación", description: "Dificultad para entender audiencias, crear segmentos precisos y activar mensajes relevantes.", icon: "talent" },
      { title: "Campañas y atribución", description: "Medir el impacto real de las campañas es complejo por falta de atribución clara.", icon: "strategy" },
      { title: "Conversión y lead scoring", description: "Identificar leads con mayor potencial y priorizarlos sigue siendo un reto.", icon: "sales" },
      { title: "CRM y pipeline comercial", description: "Datos fragmentados y poca visibilidad afectan la previsión y la toma de decisiones.", icon: "briefcase" },
      { title: "Personalización", description: "Entregar experiencias y contenidos personalizados a escala continua sigue siendo difícil.", icon: "service" },
      { title: "Forecasting y revenue performance", description: "Predecir demanda e ingresos futuros con confianza requiere mejores señales.", icon: "analytics" },
    ],
    capabilitiesTitle: "Capacidades aplicadas",
    capabilities: [
      { title: "Customer analytics", description: "Comprende audiencias, comportamientos y valor del cliente en profundidad.", icon: "network" },
      { title: "Marketing automation", description: "Automatiza journeys y campañas para escalar con eficiencia.", icon: "automation" },
      { title: "IA generativa para contenidos", description: "Crea contenidos, mensajes y creatividades personalizadas con IA.", icon: "pencil" },
      { title: "Sales intelligence", description: "Provee insights accionables para priorizar cuentas y oportunidades.", icon: "spark" },
      { title: "Attribution & measurement", description: "Mide el impacto real en cada etapa del funnel y canal.", icon: "analytics" },
      { title: "Next best action", description: "Recomienda la mejor acción para cada cliente en tiempo real.", icon: "strategy" },
    ],
    relatedDomains: [
      "experiencia-de-cliente-y-servicio",
      "finanzas-y-rendimiento",
      "talento-y-recursos-humanos",
      "procesos-y-transformacion",
    ],
    useCases: [
      { tag: "Marketing", title: "Lead scoring con IA", description: "Modelos de IA que priorizan leads con mayor probabilidad de conversión usando datos de comportamiento.", impact: "Mayor foco comercial", meta: "Marketing", href: "/casos-de-uso/marketing-y-ventas", icon: "sales" },
      { tag: "Marketing", title: "Personalización de campañas", description: "Segmentación dinámica y generación automática de contenidos para aumentar relevancia.", impact: "Más engagement", meta: "Marketing", href: "/casos-de-uso/marketing-y-ventas", icon: "service" },
      { tag: "Ventas", title: "Forecast comercial y pipeline intelligence", description: "Predicción de ingresos y análisis del pipeline para mejorar precisión y decisiones.", impact: "Mejor forecast", meta: "Ventas", href: "/casos-de-uso/marketing-y-ventas", icon: "chart" },
    ],
    metrics: [
      { label: "Tasa de conversión", value: "1.50%", description: "Indicador visual de referencia", icon: "gauge", delta: "+18%" },
      { label: "ROI de campañas", value: "$2.4M", description: "Ejemplo de KPI comercial", icon: "money", delta: "+24%" },
      { label: "Leads calificados", value: "18.6K", description: "Volumen ilustrativo", icon: "talent" },
      { label: "Pipeline", value: "$1.2M", description: "Referencia comercial", icon: "briefcase" },
    ],
    resources: commonResources("marketing y ventas"),
    finalCta: {
      title: "¿Quieres aplicar estas capacidades en tu organización?",
      ...baseFinalCta,
    },
    metadata: {
      title: "Marketing y ventas",
      description:
        "Analítica, automatización e inteligencia artificial para audiencias, campañas, conversión, CRM y rendimiento comercial.",
    },
  },
  {
    ...domainNavItems[1],
    breadcrumbLabel: "Experiencia de cliente y servicio",
    eyebrow: "DOMINIO",
    title: "Experiencia de cliente y servicio",
    highlightedTerms: ["cliente", "servicio"],
    description:
      "Diseña experiencias memorables en cada punto de contacto. Mejora la satisfacción, impulsa la lealtad y genera valor a lo largo de todo el customer journey.",
    primaryCta: { label: "Explorar casos de uso", href: cases },
    secondaryCta: { label: "Ver recursos del dominio", href: resources },
    visual: "customer",
    challengesTitle: "Principales retos",
    challenges: [
      { title: "Clientes más exigentes", description: "Expectativas más altas y menos tolerancia al error.", icon: "talent" },
      { title: "Experiencias fragmentadas", description: "Múltiples canales y sistemas desconectados.", icon: "network" },
      { title: "Tiempos de respuesta", description: "Demoras que impactan la satisfacción y la lealtad.", icon: "calendar" },
      { title: "Falta de personalización", description: "Interacciones genéricas que no generan conexión.", icon: "sales" },
      { title: "Costos operativos altos", description: "Procesos manuales e ineficiencias operativas.", icon: "money" },
      { title: "Fidelización en riesgo", description: "Competencia intensa y clientes volátiles.", icon: "shield" },
    ],
    capabilitiesTitle: "Capacidades que impulsan la experiencia",
    capabilities: [
      { title: "Conocimiento del cliente", description: "Integra y analiza datos para comprender comportamientos, necesidades y preferencias.", icon: "strategy" },
      { title: "Omnicanalidad inteligente", description: "Conecta todos los canales con contexto único y continuidad.", icon: "support" },
      { title: "Automatización e IA", description: "Resuelve más rápido con asistentes virtuales, IA y flujos automatizados.", icon: "ai" },
      { title: "Personalización", description: "Ofrece experiencias y recomendaciones relevantes en tiempo real.", icon: "diamond" },
      { title: "Medición y mejora continua", description: "Monitorea, analiza y optimiza la experiencia con datos.", icon: "analytics" },
    ],
    relatedDomains: ["marketing-y-ventas", "procesos-y-transformacion", "talento-y-recursos-humanos"],
    useCases: [
      { tag: "IA + Analítica", title: "Predicción de abandono (Churn)", description: "Anticipa clientes en riesgo y activa acciones personalizadas.", impact: "Retención de clientes", meta: "Banca / Telecom", href: "/casos-de-uso/experiencia-de-cliente", icon: "analytics" },
      { tag: "Automatización", title: "Asistente virtual inteligente", description: "Resuelve consultas frecuentes 24/7 con IA generativa y escalamiento a agentes.", impact: "Tiempos de respuesta", meta: "Retail / Servicios", href: "/casos-de-uso/experiencia-de-cliente", icon: "ai" },
      { tag: "Analítica", title: "Análisis de sentimiento", description: "Monitorea conversaciones y redes para detectar emociones y temas críticos.", impact: "Satisfacción del cliente", meta: "Todos los sectores", href: "/casos-de-uso/experiencia-de-cliente", icon: "chart" },
      { tag: "Automatización", title: "Resumen automático de casos", description: "IA que resume interacciones y sugiere próximos pasos para agentes.", impact: "Productividad de agentes", meta: "Contact Center", href: "/casos-de-uso/experiencia-de-cliente", icon: "guide" },
    ],
    metrics: [
      { label: "CSAT", value: "87%", description: "Satisfacción del cliente", icon: "service" },
      { label: "NPS", value: "62", description: "Lealtad y recomendación", icon: "support" },
      { label: "FCR", value: "76%", description: "Casos resueltos en primer contacto", icon: "calendar" },
      { label: "CES", value: "4.2/5", description: "Esfuerzo percibido del cliente", icon: "analytics" },
      { label: "CLV", value: "+26%", description: "Valor de vida del cliente", icon: "money" },
    ],
    resources: [
      { type: "Artículo", title: "Omnicanalidad: del canal a la experiencia", description: "Cómo crear experiencias conectadas y consistentes.", href: resources, icon: "guide" },
      { type: "Guía", title: "Customer Journey Mapping", description: "Paso a paso para mapear y mejorar cada interacción.", href: "/recursos/guias", icon: "learning" },
      { type: "Video", title: "IA generativa en el servicio al cliente", description: "Casos reales y estrategias para implementarla.", href: "/recursos/videos", icon: "play" },
      { type: "Plantilla", title: "Matriz de experiencia de cliente", description: "Evalúa puntos de contacto y oportunidades de mejora.", href: "/recursos/guias", icon: "list-check" },
    ],
    finalCta: {
      title: "¿Listo para transformar la experiencia de tus clientes?",
      description: "Hablemos sobre tus retos y diseñemos juntos la mejor estrategia.",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      icon: "calendar",
    },
    metadata: {
      title: "Experiencia de cliente y servicio",
      description:
        "Datos, automatización e inteligencia artificial para mejorar el customer journey, la atención y la fidelización.",
    },
  },
  {
    ...domainNavItems[2],
    breadcrumbLabel: "Supply Chain y operaciones",
    eyebrow: "DOMINIO · SUPPLY CHAIN Y OPERACIONES",
    title: "Supply Chain y operaciones impulsadas por datos, visibilidad y optimización",
    highlightedTerms: ["datos", "visibilidad", "optimización"],
    description:
      "Transforma tu cadena de valor con analítica avanzada, automatización, IA e inteligencia operacional para mejorar la planificación, los inventarios, la logística, los niveles de servicio y la ejecución end-to-end.",
    primaryCta: { label: "Explorar casos de uso", href: cases },
    secondaryCta: { label: "Ver recursos del dominio", href: resources },
    visual: "supply",
    challengesTitle: "Principales retos",
    challenges: [
      { title: "Variabilidad de la demanda", description: "Pronósticos inexactos que generan quiebres o sobreinventario.", icon: "chart" },
      { title: "Inventarios desalineados", description: "Exceso o falta de stock por mala planificación y visibilidad limitada.", icon: "domain" },
      { title: "Baja visibilidad end-to-end", description: "Falta de trazabilidad y datos en tiempo real de punta a punta.", icon: "search" },
      { title: "Costos logísticos altos", description: "Transporte, almacenaje y distribución poco eficientes.", icon: "money" },
      { title: "Cuellos de botella operativos", description: "Procesos manuales, retrasos y capacidad subutilizada.", icon: "process" },
      { title: "Calidad y servicio", description: "Incumplimientos, devoluciones y baja satisfacción del cliente.", icon: "shield" },
    ],
    capabilitiesTitle: "Capacidades que impulsan este dominio",
    capabilities: [
      { title: "Planificación y forecasting", description: "Modelos predictivos y escenarios para planificación colaborativa y precisa.", icon: "analytics" },
      { title: "Visibilidad y trazabilidad", description: "Datos en tiempo real e integración para trazabilidad end-to-end.", icon: "search" },
      { title: "Optimización logística", description: "Ruteo, cargas y redes optimizadas para reducir costos y tiempos.", icon: "route" },
      { title: "Automatización e IA", description: "IA, RPA y machine learning para decisiones autónomas y eficiencia.", icon: "ai" },
      { title: "Control y mejora continua", description: "Dashboards, alertas y analítica para mejorar el desempeño.", icon: "gauge" },
    ],
    relatedDomains: ["finanzas-y-rendimiento", "procesos-y-transformacion", "talento-y-recursos-humanos"],
    useCases: [
      { tag: "Planificación", title: "Forecast de demanda", description: "Mayor precisión en pronósticos y mejor alineación de la cadena.", impact: "Mejor planificación", meta: "Supply Chain", href: "/casos-de-uso/supply-chain-y-operaciones", icon: "chart" },
      { tag: "Inventarios", title: "Optimización de inventarios", description: "Reducción de inventarios y mejor nivel de servicio.", impact: "Menos capital inmovilizado", meta: "Inventarios", href: "/casos-de-uso/supply-chain-y-operaciones", icon: "domain" },
      { tag: "Logística", title: "Ruteo y logística inteligente", description: "Menores costos logísticos y tiempos de entrega.", impact: "Rutas más eficientes", meta: "Logística", href: "/casos-de-uso/supply-chain-y-operaciones", icon: "route" },
      { tag: "Operaciones", title: "Mantenimiento predictivo y continuidad operativa", description: "Menos fallas, mayor OEE y continuidad del negocio.", impact: "Mayor disponibilidad", meta: "Operaciones", href: "/casos-de-uso/supply-chain-y-operaciones", icon: "automation" },
    ],
    metrics: [
      { label: "Forecast accuracy", value: "86%", description: "Precisión del pronóstico", icon: "strategy" },
      { label: "OTIF", value: "95.2%", description: "Órdenes a tiempo y completas", icon: "route" },
      { label: "Rotación de inventario", value: "7.8x", description: "Veces por año", icon: "domain" },
      { label: "Fill rate", value: "97.1%", description: "Nivel de servicio", icon: "sales" },
      { label: "Costo logístico", value: "$2.45M", description: "Referencia operativa", icon: "money", delta: "-12%" },
      { label: "OEE", value: "78%", description: "Eficiencia global del equipo", icon: "gauge" },
    ],
    resources: [
      { type: "Artículo", title: "Tendencias que están transformando la Supply Chain", description: "Analítica e IA redefiniendo cadenas de suministro.", href: resources, icon: "guide" },
      { type: "Guía", title: "Analítica para la cadena de suministro", description: "Metodologías y casos para planificación, inventarios y logística.", href: "/recursos/guias", icon: "learning" },
      { type: "Video", title: "Cómo la IA optimiza tus operaciones", description: "Ejemplos reales de IA aplicada en pronósticos, ruteo y control.", href: "/recursos/videos", icon: "play" },
      { type: "Plantilla", title: "Dashboard de Supply Chain y operaciones", description: "Plantilla para monitorear KPIs clave de la cadena de valor.", href: "/recursos/guias", icon: "analytics" },
    ],
    finalCta: {
      title: "¿Listo para optimizar tu cadena de valor y tus operaciones?",
      description: "Conversemos sobre tus retos y construyamos una operación más eficiente y resiliente.",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      icon: "network",
    },
    metadata: {
      title: "Supply Chain y operaciones",
      description:
        "Analítica, automatización e inteligencia artificial para planificación, inventarios, logística, calidad y operaciones.",
    },
  },
  {
    ...domainNavItems[3],
    breadcrumbLabel: "Procesos y transformación",
    eyebrow: "PROCESOS Y TRANSFORMACIÓN",
    title: "Procesos y transformación impulsados por automatización, inteligencia y cambio organizacional",
    highlightedTerms: ["automatización", "inteligencia", "cambio organizacional"],
    description:
      "Rediseñamos y optimizamos procesos de punta a punta, eliminamos fricción, aceleramos la adopción y escalamos la transformación con datos, IA y automatización para generar valor sostenible.",
    primaryCta: { label: "Explorar casos de uso", href: cases },
    secondaryCta: { label: "Ver recursos del dominio", href: resources },
    visual: "process",
    challengesTitle: "Principales retos",
    challenges: [
      { title: "Procesos fragmentados", description: "Información disgregada y handoffs ineficientes que generan reprocesos.", icon: "process" },
      { title: "Tiempos de ciclo altos", description: "Procesos lentos que impactan la experiencia y los resultados.", icon: "calendar" },
      { title: "Cuellos de botella", description: "Concertaciones y esperas que limitan la capacidad y eficiencia.", icon: "gauge" },
      { title: "Tareas manuales y repetitivas", description: "Trabajo operativo que consume tiempo y es propenso a errores.", icon: "support" },
      { title: "Baja adopción del cambio", description: "Resistencia al cambio y poca adopción de nuevos procesos.", icon: "talent" },
      { title: "Falta de trazabilidad y control", description: "Poca visibilidad end-to-end para auditar y medir desempeño.", icon: "shield" },
    ],
    capabilitiesTitle: "Capacidades que impulsan este dominio",
    capabilities: [
      { title: "Process mining", description: "Descubrimiento y análisis de procesos reales para identificar brechas.", icon: "search" },
      { title: "Automatización y workflow", description: "Diseño y orquestación de flujos automatizados que reducen tiempos.", icon: "process" },
      { title: "Inteligencia documental", description: "Extracción, clasificación y comprensión de documentos para decisiones rápidas.", icon: "guide" },
      { title: "IA para procesos", description: "Modelos que predicen, recomiendan y optimizan decisiones y asignaciones.", icon: "ai" },
      { title: "Gestión del cambio y adopción", description: "Estrategias para adopción sostenible del cambio.", icon: "community" },
      { title: "Medición y mejora continua", description: "KPIs, tableros y feedback loops para mejorar continuamente.", icon: "analytics" },
    ],
    relatedDomains: domainNavItems.filter((item) => item.slug !== "procesos-y-transformacion").map((item) => item.slug),
    useCases: [
      { tag: "Process mining", title: "Descubrimiento de procesos con process mining", description: "Visualiza el flujo real de procesos para identificar brechas y oportunidades.", impact: "Menos fricción", meta: "Procesos", href: "/casos-de-uso/transformacion-digital-y-organizacional", icon: "network" },
      { tag: "Automatización", title: "Automatización documental y aprobaciones", description: "Automatiza captura, validación y aprobación de documentos.", impact: "Ciclos más cortos", meta: "Workflow", href: "/casos-de-uso/transformacion-digital-y-organizacional", icon: "guide" },
      { tag: "IA y NLP", title: "Clasificación inteligente de solicitudes", description: "Clasifica, enruta y prioriza solicitudes automáticamente.", impact: "Mayor velocidad", meta: "IA", href: "/casos-de-uso/transformacion-digital-y-organizacional", icon: "ai" },
      { tag: "Adopción", title: "Asistente interno para adopción de procesos", description: "Asistente conversacional que guía a usuarios en nuevos procesos.", impact: "Más adopción", meta: "Cambio", href: "/casos-de-uso/transformacion-digital-y-organizacional", icon: "support" },
    ],
    metrics: [
      { label: "Tiempo de ciclo", value: "-32%", description: "Promedio ilustrativo", icon: "calendar" },
      { label: "Automatización", value: "68%", description: "Tareas repetitivas", icon: "automation" },
      { label: "Cumplimiento de SLA", value: "91%", description: "Referencia operativa", icon: "shield" },
      { label: "Adopción del proceso", value: "+24%", description: "Usuarios activos", icon: "talent" },
      { label: "Retrabajo", value: "-18%", description: "Reprocesos", icon: "process" },
      { label: "Satisfacción interna", value: "4.6/5", description: "Indicador interno", icon: "diamond" },
    ],
    resources: [
      { type: "Artículo", title: "Qué es Process Mining y cómo transforma los procesos", description: "Cómo revelar oportunidades reales de mejora.", href: resources, icon: "guide" },
      { type: "Guía", title: "Roadmap de automatización de procesos", description: "Prioriza, diseña y escala automatización.", href: "/recursos/guias", icon: "learning" },
      { type: "Video", title: "Gestión del cambio para transformaciones exitosas", description: "Claves para sostener adopción en la organización.", href: "/recursos/videos", icon: "play" },
      { type: "Plantilla", title: "Dashboard de monitoreo de procesos", description: "Mide eficiencia, SLA y adopción.", href: "/recursos/guias", icon: "analytics" },
    ],
    finalCta: {
      title: "¿Listo para transformar tus procesos y acelerar la adopción?",
      description: "Conversemos sobre tus desafíos y diseñemos un plan de acción con IA y automatización.",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      icon: "rocket",
    },
    metadata: {
      title: "Procesos y transformación",
      description:
        "Automatización, inteligencia artificial, rediseño de procesos y gestión del cambio para mejorar la operación.",
    },
  },
  {
    ...domainNavItems[4],
    breadcrumbLabel: "Finanzas y rendimiento",
    eyebrow: "DOMINIO · FINANZAS Y RENDIMIENTO",
    title: "Finanzas y rendimiento impulsados por datos, control y decisiones inteligentes",
    highlightedTerms: ["datos", "control", "decisiones inteligentes"],
    description:
      "Mejora la planificación, el forecasting, la rentabilidad y la gestión de riesgos con analítica avanzada, automatización y visibilidad financiera en tiempo real para optimizar el rendimiento y maximizar el valor.",
    primaryCta: { label: "Explorar casos de uso", href: cases },
    secondaryCta: { label: "Ver recursos del dominio", href: resources },
    visual: "finance",
    challengesTitle: "Principales retos",
    challenges: [
      { title: "Visibilidad financiera limitada", description: "Información dispersa, reportes tardíos y falta de datos en tiempo real.", icon: "search" },
      { title: "Forecasting impreciso", description: "Pronósticos poco confiables que afectan planificación y decisiones.", icon: "strategy" },
      { title: "Presión sobre rentabilidad", description: "Márgenes en disminución y dificultad para identificar palancas de mejora.", icon: "analytics" },
      { title: "Riesgo y cumplimiento", description: "Exposición a riesgos financieros y regulatorios sin gestión proactiva.", icon: "shield" },
      { title: "Procesos manuales", description: "Tareas repetitivas y dependencia de hojas de cálculo.", icon: "automation" },
      { title: "Decisiones lentas", description: "Ciclos de cierre largos e insights tardíos.", icon: "calendar" },
    ],
    capabilitiesTitle: "Capacidades que impulsan este dominio",
    capabilities: [
      { title: "Financial analytics", description: "Análisis avanzado de resultados, márgenes y tendencias financieras.", icon: "analytics" },
      { title: "Planning & forecasting", description: "Modelos predictivos para presupuestos, escenarios y proyecciones.", icon: "chart" },
      { title: "Automatización financiera", description: "Automatiza cierres, reportes y conciliaciones para ganar eficiencia.", icon: "automation" },
      { title: "Gestión de riesgo", description: "Identifica, mide y mitiga riesgos financieros y operativos.", icon: "shield" },
      { title: "Control de desempeño", description: "Dashboards y KPIs para monitorear ejecución y rendimiento.", icon: "gauge" },
      { title: "IA para decisiones", description: "IA generativa y machine learning para recomendaciones y patrones.", icon: "ai" },
    ],
    relatedDomains: ["marketing-y-ventas", "supply-chain-y-operaciones", "procesos-y-transformacion", "talento-y-recursos-humanos"],
    useCases: [
      { tag: "Forecasting", title: "Forecast financiero con IA", description: "Pronósticos más precisos combinando modelos estadísticos, IA y variables externas.", impact: "Mayor precisión", meta: "Finanzas", href: "/casos-de-uso/finanzas-y-rendimiento", icon: "chart" },
      { tag: "Detección", title: "Detección de anomalías y fraude", description: "Identifica transacciones inusuales y patrones de fraude en tiempo real.", impact: "Menos pérdidas", meta: "Riesgo", href: "/casos-de-uso/finanzas-y-rendimiento", icon: "shield" },
      { tag: "Rentabilidad", title: "Rentabilidad por cliente o producto", description: "Analiza márgenes, costos y valor para optimizar portafolio.", impact: "Mejor rentabilidad", meta: "Performance", href: "/casos-de-uso/finanzas-y-rendimiento", icon: "money" },
      { tag: "Cash Flow", title: "Cash flow y control presupuestario", description: "Monitorea flujos, desvíos y escenarios para garantizar liquidez.", impact: "Mayor control", meta: "Tesorería", href: "/casos-de-uso/finanzas-y-rendimiento", icon: "analytics" },
    ],
    metrics: [
      { label: "Precisión del forecast", value: "89%", description: "Modelos más precisos", icon: "strategy" },
      { label: "Variación presupuestaria", value: "-14%", description: "Vs. presupuesto anual", icon: "money" },
      { label: "Margen EBITDA", value: "18%", description: "+2.3 pp vs. trimestre anterior", icon: "chart" },
      { label: "Cierre financiero", value: "-35%", description: "Tiempo de cierre reducido", icon: "calendar" },
      { label: "Cash conversion", value: "+22%", description: "Vs. año anterior", icon: "money" },
      { label: "Riesgo controlado", value: "94%", description: "Riesgos dentro del apetito", icon: "shield" },
    ],
    resources: [
      { type: "Artículo", title: "Tendencias en analítica financiera", description: "Transformaciones que están redefiniendo las finanzas.", href: resources, icon: "guide" },
      { type: "Guía", title: "Forecasting y performance", description: "Prácticas para crear modelos financieros robustos.", href: "/recursos/guias", icon: "learning" },
      { type: "Video", title: "Cómo la IA mejora el control financiero", description: "Casos de detección de riesgo y control del gasto.", href: "/recursos/videos", icon: "play" },
      { type: "Plantilla", title: "Dashboard de rentabilidad", description: "KPIs financieros y de negocio listos para monitorear.", href: "/recursos/guias", icon: "analytics" },
    ],
    finalCta: {
      title: "¿Listo para fortalecer tus decisiones financieras y tu rendimiento?",
      description: "Conversemos sobre tus desafíos y diseñemos una solución a la medida.",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      icon: "analytics",
    },
    metadata: {
      title: "Finanzas y rendimiento",
      description:
        "Analítica, forecasting, automatización, riesgo y control para mejorar decisiones financieras y rendimiento.",
    },
  },
  {
    ...domainNavItems[5],
    breadcrumbLabel: "Talento y Recursos Humanos",
    eyebrow: "DOMINIO",
    title: "Talento y Recursos Humanos",
    highlightedTerms: ["Talento", "Recursos Humanos"],
    description:
      "Potencia a las personas y a la organización con datos, inteligencia y tecnología. Atrae, desarrolla y retén el talento que impulsa el crecimiento sostenible.",
    primaryCta: { label: "Explorar casos de uso", href: cases },
    secondaryCta: { label: "Ver recursos del dominio", href: resources },
    visual: "talent",
    challengesTitle: "Principales retos",
    challenges: [
      { title: "Atracción y selección", description: "Competir por talento clave en un mercado cada vez más demandante.", icon: "talent" },
      { title: "Desarrollo y capacidades", description: "Cerrar brechas de habilidades y preparar capacidades para el futuro.", icon: "chart" },
      { title: "Retención y compromiso", description: "Mejorar la experiencia del empleado y reducir rotación.", icon: "community" },
      { title: "Productividad y desempeño", description: "Alinear objetivos, desempeño y reconocimiento de manera efectiva.", icon: "gauge" },
      { title: "Cumplimiento y riesgos", description: "Gestionar cumplimiento laboral, equidad, diversidad y bienestar.", icon: "shield" },
      { title: "Decisiones basadas en datos", description: "Convertir datos de personas en insights accionables.", icon: "analytics" },
    ],
    capabilitiesTitle: "Capacidades que transforman la gestión del talento",
    capabilities: [
      { title: "People Analytics", description: "Analiza datos de personas para entender patrones y tomar mejores decisiones.", icon: "talent" },
      { title: "Atracción inteligente", description: "Segmentación de candidatos, matching y evaluación con IA.", icon: "strategy" },
      { title: "Desarrollo y aprendizaje", description: "Rutas de aprendizaje personalizadas y gestión de habilidades.", icon: "course" },
      { title: "Gestión del desempeño", description: "Objetivos claros, feedback continuo y evaluaciones más efectivas.", icon: "diamond" },
      { title: "Experiencia del empleado", description: "Medición, escucha activa y acciones que mejoran engagement.", icon: "service" },
      { title: "Automatización de RR. HH.", description: "Procesos más simples y eficientes con asistentes virtuales.", icon: "automation" },
    ],
    relatedDomains: domainNavItems.filter((item) => item.slug !== "talento-y-recursos-humanos").map((item) => item.slug),
    useCases: [
      { tag: "People Analytics", title: "Predicción de rotación", description: "Identifica colaboradores en riesgo y toma acciones preventivas.", impact: "Rotación voluntaria", meta: "Retención", href: "/casos-de-uso/talento-y-recursos-humanos", icon: "analytics" },
      { tag: "Talento", title: "Matching de candidatos", description: "IA que conecta candidatos con roles según habilidades y potencial.", impact: "Calidad de contratación", meta: "Selección", href: "/casos-de-uso/talento-y-recursos-humanos", icon: "talent" },
      { tag: "Aprendizaje", title: "Rutas de aprendizaje personalizadas", description: "Recomendaciones de contenido basadas en skills y objetivos.", impact: "Desarrollo de capacidades", meta: "Aprendizaje", href: "/casos-de-uso/talento-y-recursos-humanos", icon: "course" },
      { tag: "Experiencia", title: "Análisis de clima y cultura", description: "Monitorea clima organizacional y detecta oportunidades de mejora.", impact: "Engagement", meta: "Cultura", href: "/casos-de-uso/talento-y-recursos-humanos", icon: "service" },
      { tag: "Desempeño", title: "Gestión de objetivos y OKR", description: "Alinea equipos y mide progreso en tiempo real.", impact: "Alineación y foco", meta: "Desempeño", href: "/casos-de-uso/talento-y-recursos-humanos", icon: "gauge" },
      { tag: "Automatización", title: "Asistente virtual de RR. HH.", description: "Resuelve consultas frecuentes y automatiza procesos administrativos.", impact: "Productividad del área", meta: "Operaciones", href: "/casos-de-uso/talento-y-recursos-humanos", icon: "ai" },
    ],
    metrics: [
      { label: "Rotación voluntaria", value: "12.4%", description: "Indicador de referencia", icon: "talent", delta: "-1.8 pp" },
      { label: "eNPS", value: "+48", description: "Vs. trimestre anterior", icon: "service" },
      { label: "Cobertura de skills", value: "72%", description: "Skills críticas cubiertas", icon: "course" },
      { label: "Time to fill", value: "32 días", description: "Tiempo de cobertura", icon: "calendar" },
      { label: "Employee Experience", value: "86%", description: "Experiencia del empleado", icon: "diamond" },
      { label: "Productividad", value: "+17%", description: "Por empleado", icon: "analytics" },
    ],
    resources: [
      { type: "Artículo", title: "People Analytics: de datos a decisiones que importan", description: "Cómo convertir datos de personas en acciones.", href: resources, icon: "guide" },
      { type: "Guía", title: "Diseño de rutas de aprendizaje", description: "Pasos clave para crear programas efectivos.", href: "/recursos/guias", icon: "learning" },
      { type: "Video", title: "IA en Recursos Humanos", description: "Casos y oportunidades de aplicación.", href: "/recursos/videos", icon: "play" },
      { type: "Plantilla", title: "Matriz de habilidades y brechas", description: "Evalúa habilidades actuales y planifica desarrollo.", href: "/recursos/guias", icon: "list-check" },
    ],
    finalCta: {
      title: "¿Quieres transformar la gestión del talento en tu organización?",
      description: "Conversemos sobre tus retos y diseñemos juntos la mejor estrategia.",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      icon: "calendar",
    },
    metadata: {
      title: "Talento y Recursos Humanos",
      description:
        "Datos, inteligencia artificial y tecnología para atracción, desarrollo, experiencia, desempeño y people analytics.",
    },
  },
];

export const overviewCrossChallenges: DomainBasicItem[] = [
  { title: "Automatización", description: "Menos tareas manuales.", icon: "automation" },
  { title: "Toma de decisiones con datos", description: "Mejor criterio ejecutivo.", icon: "analytics" },
  { title: "Experiencia del cliente", description: "Interacciones más útiles.", icon: "service" },
  { title: "Productividad", description: "Más foco y menos fricción.", icon: "gauge" },
  { title: "Transformación digital", description: "Cambio sostenible.", icon: "ai" },
  { title: "Desarrollo de capacidades", description: "Talento preparado.", icon: "course" },
];

export const overviewFeaturedUseCases = [
  { tag: "Marketing y ventas", title: "Lead scoring con IA", description: "Identifica y prioriza leads con mayor probabilidad de conversión usando modelos de IA y datos de interacción.", href: "/casos-de-uso/marketing-y-ventas", icon: "sales" as const, theme: "blue" as const },
  { tag: "Supply Chain y operaciones", title: "Forecast de demanda", description: "Predice la demanda con mayor precisión combinando señales internas y externas.", href: "/casos-de-uso/supply-chain-y-operaciones", icon: "chart" as const, theme: "green" as const },
  { tag: "Talento y RR. HH.", title: "People analytics para rotación", description: "Anticipa el riesgo de rotación y diseña acciones de retención basadas en datos.", href: "/casos-de-uso/talento-y-recursos-humanos", icon: "talent" as const, theme: "violet" as const },
];

export const overviewResourceTypes = [
  { title: "Artículos", description: "Ideas y tendencias aplicadas al negocio.", href: resources, icon: "guide" as const },
  { title: "Guías", description: "Frameworks y metodologías paso a paso.", href: "/recursos/guias", icon: "learning" as const },
  { title: "Casos", description: "Historias reales de impacto medible.", href: cases, icon: "briefcase" as const },
  { title: "Videos", description: "Charlas y explicaciones prácticas.", href: "/recursos/videos", icon: "play" as const },
  { title: "Cursos", description: "Rutas de aprendizaje y certificaciones.", href: "/recursos/cursos", icon: "course" as const },
];

export function getDomainPage(slug: string) {
  return domainPages.find((page) => page.slug === slug);
}
