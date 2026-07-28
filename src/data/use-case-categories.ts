import type {
  UseCaseCategoryPage,
  UseCaseProcessStep,
} from "@/types/use-case-category";
import type { IconName } from "@/types/content";

export type UseCaseCategoryNavItem = {
  label: string;
  href: string;
  description: string;
  icon: IconName;
};

const defaultCtas = {
  primaryCta: { label: "Agendar una sesión", href: "/agenda" },
  secondaryCta: { label: "Ver servicios", href: "/casos-de-uso" },
};

const processDescriptions: Record<string, string> = {
  Diagnóstico: "Entendemos tu contexto, datos disponibles y objetivos clave.",
  "Mapeo del journey":
    "Mapeamos experiencias actuales, puntos de contacto y momentos de verdad.",
  "Mapeo operativo":
    "Visualizamos procesos, flujos y puntos críticos del negocio.",
  "Datos y audiencias":
    "Integramos datos y construimos audiencias y modelos con alto potencial.",
  "Integración de datos":
    "Conectamos y preparamos datos de múltiples fuentes con calidad y seguridad.",
  "Diseño de estrategia":
    "Diseñamos una estrategia práctica basada en datos y objetivos.",
  "Diseño analítico":
    "Diseñamos modelos, KPI y dashboards alineados a la decisión.",
  "Modelado y diseño":
    "Desarrollamos modelos analíticos y diseñamos soluciones a medida.",
  "Priorización de casos":
    "Priorizamos casos por impacto, viabilidad y alineación estratégica.",
  Priorización: "Priorizamos iniciativas con mayor impacto y viabilidad.",
  "Diseño de solución":
    "Diseñamos la solución, modelo y arquitectura adecuados al contexto.",
  Implementación:
    "Implementamos, integramos tecnología y acompañamos la adopción.",
  "Medición de impacto":
    "Medimos resultados, aprendemos y optimizamos para generar valor sostenido.",
};

function processSteps(titles: string[]): UseCaseProcessStep[] {
  return titles.map((title, index) => ({
    id: title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
    number: String(index + 1),
    title,
    description:
      processDescriptions[title] ??
      "Avanzamos con foco en valor, adopción e impacto.",
    icon:
      title === "Diagnóstico"
        ? "search"
        : title.includes("datos") || title.includes("audiencias")
          ? "analytics"
        : title.includes("Mapeo")
            ? "route"
            : title.includes("Priorización")
              ? "list-check"
              : title.includes("Diseño")
                ? "pencil"
                : title === "Implementación"
                  ? "rocket"
                  : "chart",
  }));
}

export const useCaseCategoryPages: UseCaseCategoryPage[] = [
  {
    slug: "experiencia-de-cliente",
    title: "Experiencia de cliente",
    metadataTitle: "Experiencia de cliente | Big Talent Analytica",
    metadataDescription:
      "Soluciones de experiencia de cliente, journey analytics, personalización, servicio y fidelización basadas en datos, analítica e IA.",
    breadcrumbLabel: "Experiencia de cliente",
    visualTheme: { variant: "customer", accent: "blue" },
    hero: {
      title: "Experiencia de cliente que convierte interacciones en",
      highlightedText: "lealtad y crecimiento",
      description:
        "Diseñamos y activamos soluciones basadas en datos, analítica, IA y procesos para mejorar cada viaje del cliente, elevar la calidad del servicio, personalizar interacciones y construir relaciones duraderas que impulsan el crecimiento.",
      topics: [
        { id: "journey", label: "Journey", icon: "process" },
        { id: "personalizacion", label: "Personalización", icon: "talent" },
        { id: "omnicanal", label: "Omnicanal", icon: "network" },
        { id: "servicio", label: "Servicio", icon: "support" },
        { id: "insights", label: "Insights", icon: "analytics" },
      ],
      metrics: [
        { id: "nps", label: "NPS", value: "+18", detail: "indicador ilustrativo" },
        { id: "retencion", label: "Retención", value: "+12%", detail: "escenario potencial" },
        { id: "conversion", label: "Conversión", value: "+21%", detail: "indicador ilustrativo" },
        { id: "csat", label: "CSAT", value: "92%", detail: "escenario potencial" },
      ],
    },
    valueItems: [
      { id: "journey", title: "Journey centrado en el cliente", description: "Mapeamos y optimizamos cada punto de contacto.", icon: "talent" },
      { id: "insights", title: "Insights accionables", description: "Convertimos datos y comportamientos en decisiones útiles.", icon: "analytics" },
      { id: "personalizacion", title: "Experiencias personalizadas", description: "Usamos IA y datos para ajustar mensajes y canales.", icon: "spark" },
      { id: "impacto", title: "Impacto medible", description: "Medimos satisfacción, retención y crecimiento.", icon: "strategy" },
    ],
    capabilities: [
      { id: "journey-omni", title: "Customer journey y experiencia omnicanal", description: "Mapeo, análisis y optimización de journeys para eliminar fricciones y mejorar la experiencia en todos los canales.", icon: "process" },
      { id: "personalizacion", title: "Personalización y segmentación", description: "Segmentación avanzada y personalización de contenidos, ofertas y mensajes para aumentar relevancia y conversión.", icon: "talent" },
      { id: "servicio", title: "Servicio y fidelización", description: "Diseño de modelos de servicio, automatización e iniciativas que incrementan satisfacción y lealtad.", icon: "support" },
      { id: "voz", title: "Analítica de clientes y voz del cliente", description: "Captura y análisis de feedback, NPS, CSAT y tendencias para acciones de mejora continua.", icon: "megaphone" },
    ],
    featuredCases: [
      { id: "journey-analytics", title: "Journey analytics para mejorar conversión", category: "Analítica", description: "Análisis de comportamientos y embudos para identificar fricciones y optimizar conversiones.", icon: "analytics", accent: "blue", status: "Caso en desarrollo" },
      { id: "personalizacion-campanas", title: "Personalización de campañas y ofertas", category: "Personalización", description: "Modelos de segmentación y recomendación para aumentar relevancia, apertura y conversión.", icon: "spark", accent: "cyan", status: "Caso en desarrollo" },
      { id: "servicio-atencion", title: "Optimización de atención y servicio", category: "Servicio", description: "Rediseño de procesos y automatización para reducir tiempos de respuesta y elevar satisfacción.", icon: "support", accent: "violet", status: "Caso en desarrollo" },
      { id: "fidelizacion-datos", title: "Programa de fidelización basado en datos", category: "Fidelización", description: "Modelos de lealtad y recompensas personalizadas que incrementan retención y valor del cliente.", icon: "strategy", accent: "orange", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Mapeo del journey", "Diseño de solución", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "satisfaccion", title: "Mayor satisfacción y retención", description: "Clientes más satisfechos y leales a lo largo del tiempo.", icon: "service" },
      { id: "conversion", title: "Incremento de conversión", description: "Experiencias relevantes que convierten más.", icon: "chart" },
      { id: "friccion", title: "Menor fricción en la experiencia", description: "Procesos y journeys más simples, rápidos y efectivos.", icon: "spark" },
      { id: "decisiones", title: "Decisiones más rápidas con datos", description: "Insights en tiempo real para actuar con agilidad.", icon: "analytics" },
    ],
    audiences: [
      { id: "retail", title: "Retail y e-commerce", description: "Mejora experiencias de compra, personaliza ofertas y aumenta conversión.", icon: "sales" },
      { id: "banca", title: "Banca y servicios", description: "Eleva confianza y lealtad en cada canal.", icon: "domain" },
      { id: "educacion", title: "Educación y formación", description: "Acompaña estudiantes con experiencias personalizadas.", icon: "course" },
      { id: "turismo", title: "Turismo, viajes y hospitalidad", description: "Optimiza cada etapa del viaje y recomendaciones.", icon: "globe" },
    ],
    finalCta: {
      title: "Diseñemos experiencias que generen",
      highlightedText: "valor real.",
      description: "Hablemos sobre tu negocio y diseñemos juntos la mejor estrategia para tus clientes y tu crecimiento.",
      ...defaultCtas,
    },
  },
  {
    slug: "marketing-y-ventas",
    title: "Marketing y ventas",
    metadataTitle: "Marketing y ventas | Big Talent Analytica",
    metadataDescription:
      "Casos de uso de marketing y ventas con segmentación, campañas, conversión, inteligencia comercial y automatización basada en datos.",
    breadcrumbLabel: "Marketing y ventas",
    visualTheme: { variant: "marketing", accent: "cyan" },
    hero: {
      title: "Marketing y ventas que convierten datos en",
      highlightedText: "crecimiento comercial",
      description:
        "Usamos datos, analítica, IA y automatización para mejorar la segmentación, optimizar campañas, aumentar la conversión, impulsar ingresos y elevar la productividad comercial.",
      topics: [
        { id: "segmentacion", label: "Segmentación", icon: "talent" },
        { id: "campanas", label: "Campañas", icon: "megaphone" },
        { id: "conversion", label: "Conversión", icon: "strategy" },
        { id: "ventas", label: "Ventas", icon: "sales" },
        { id: "insights", label: "Insights", icon: "analytics" },
      ],
      metrics: [
        { id: "roas", label: "ROAS", value: "4.2x", detail: "indicador ilustrativo" },
        { id: "conversion", label: "Conversión", value: "3.6%", detail: "escenario potencial" },
        { id: "cac", label: "CAC", value: "-22%", detail: "indicador ilustrativo" },
        { id: "pipeline", label: "Pipeline generado", value: "$2.4M", detail: "escenario potencial" },
        { id: "ingresos", label: "Crecimiento de ingresos", value: "+27%", detail: "indicador ilustrativo" },
        { id: "leads", label: "Calidad de leads", value: "82/100", detail: "escenario potencial" },
      ],
    },
    valueItems: [
      { id: "segmentacion", title: "Segmentación inteligente", description: "Audiencias precisas basadas en comportamiento y valor potencial.", icon: "talent" },
      { id: "automatizacion", title: "Automatización comercial", description: "Flujos que activan y nutren oportunidades.", icon: "automation" },
      { id: "analitica", title: "Analítica accionable", description: "Dashboards y recomendaciones para decidir mejor.", icon: "analytics" },
      { id: "impacto", title: "Impacto medible", description: "Resultados claros en conversión, ingresos y productividad.", icon: "strategy" },
    ],
    capabilities: [
      { id: "audiencias", title: "Segmentación y audiencias", description: "Construcción de audiencias de alto valor y modelos predictivos para encontrar a tus mejores clientes.", icon: "talent" },
      { id: "campanas", title: "Campañas y performance", description: "Estrategias y optimización de campañas para maximizar alcance, engagement y retorno de inversión.", icon: "megaphone" },
      { id: "funnel", title: "Funnel y conversión", description: "Análisis y mejoras en cada etapa del embudo para convertir más y reducir fricción.", icon: "strategy" },
      { id: "inteligencia", title: "Inteligencia comercial", description: "Insights y forecasting que potencian pipeline, productividad y crecimiento de ventas.", icon: "sales" },
    ],
    featuredCases: [
      { id: "segmentacion-predictiva", title: "Segmentación predictiva para campañas", category: "Audiencias", description: "Modelos que identifican audiencias con mayor probabilidad de conversión y valor.", icon: "network", accent: "cyan", status: "Caso en desarrollo" },
      { id: "lead-scoring", title: "Scoring de leads y priorización comercial", category: "Ventas", description: "Priorizamos leads por potencial y probabilidad de compra para enfocar esfuerzos.", icon: "sales", accent: "blue", status: "Caso en desarrollo" },
      { id: "inversion-publicitaria", title: "Optimización de inversión publicitaria", category: "Performance", description: "Maximizamos ROAS y reducimos costos mejorando pujas, audiencias y creatividades.", icon: "chart", accent: "violet", status: "Caso en desarrollo" },
      { id: "forecasting-ventas", title: "Analítica de ventas y forecasting", category: "Analítica", description: "Dashboards y modelos predictivos para anticipar demanda, detectar riesgos y guiar decisiones.", icon: "analytics", accent: "orange", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Datos y audiencias", "Diseño de estrategia", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "conversion", title: "Mayor conversión", description: "Aumentamos la tasa de conversión y el cierre de oportunidades.", icon: "strategy" },
      { id: "inversion", title: "Mejor uso de inversión", description: "Optimizamos ROAS y reducimos costos de adquisición.", icon: "chart" },
      { id: "decisiones", title: "Decisiones comerciales más rápidas", description: "Insights para actuar con agilidad y precisión.", icon: "spark" },
      { id: "crecimiento", title: "Crecimiento sostenible", description: "Estrategias que impulsan ingresos y rentabilidad.", icon: "rocket" },
    ],
    audiences: [
      { id: "retail", title: "Retail y e-commerce", description: "Mejora conversiones online, AOV y lealtad con estrategias basadas en datos.", icon: "sales" },
      { id: "b2b", title: "B2B y servicios", description: "Genera demanda, califica leads y acelera ciclos comerciales.", icon: "briefcase" },
      { id: "educacion", title: "Educación y cursos", description: "Atrae y convierte más estudiantes con campañas y embudos optimizados.", icon: "course" },
      { id: "turismo", title: "Turismo, viajes y hospitalidad", description: "Incrementa reservas directas y fidelización.", icon: "globe" },
    ],
    finalCta: {
      title: "Impulsemos tu estrategia comercial con",
      highlightedText: "resultados reales.",
      description: "Hablemos sobre tus objetivos y diseñemos un plan de marketing y ventas que acelere tu crecimiento.",
      ...defaultCtas,
    },
  },
];

const remainingPages: UseCaseCategoryPage[] = [
  {
    slug: "supply-chain-y-operaciones",
    title: "Supply Chain y Operaciones",
    metadataTitle: "Supply Chain y Operaciones | Big Talent Analytica",
    metadataDescription:
      "Optimización de planificación, inventario, logística, fulfillment y operaciones con datos, analítica, IA y automatización.",
    breadcrumbLabel: "Supply Chain y Operaciones",
    visualTheme: { variant: "operations", accent: "blue" },
    hero: {
      title: "Supply Chain y Operaciones que convierten datos en",
      highlightedText: "eficiencia y continuidad",
      description:
        "Optimizamos planificación, inventario, logística, fulfillment y operaciones para mejorar el nivel de servicio y la rentabilidad, apalancando datos, analítica, IA y automatización.",
      topics: [
        { id: "planificacion", label: "Planificación", icon: "calendar" },
        { id: "inventario", label: "Inventario", icon: "domain" },
        { id: "logistica", label: "Logística", icon: "process" },
        { id: "automatizacion", label: "Automatización", icon: "automation" },
        { id: "insights", label: "Insights", icon: "analytics" },
      ],
      metrics: [
        { id: "otif", label: "OTIF", value: "96%", detail: "indicador ilustrativo" },
        { id: "costos", label: "Costos", value: "-18%", detail: "escenario potencial" },
        { id: "forecast", label: "Forecast accuracy", value: "89%", detail: "indicador ilustrativo" },
        { id: "lead-time", label: "Lead time", value: "-22%", detail: "escenario potencial" },
        { id: "rotacion", label: "Rotación de inventario", value: "+17%", detail: "indicador ilustrativo" },
      ],
    },
    valueItems: [
      { id: "procesos", title: "Procesos críticos", description: "Mejoramos operaciones clave de punta a punta.", icon: "strategy" },
      { id: "visibilidad", title: "Visibilidad operativa", description: "Integramos datos para monitoreo en tiempo real.", icon: "analytics" },
      { id: "decisiones", title: "Decisiones ágiles", description: "Analítica e IA para priorizar acciones.", icon: "spark" },
      { id: "impacto", title: "Impacto medible", description: "Reducimos costos, tiempos y fricción.", icon: "chart" },
    ],
    capabilities: [
      { id: "planificacion", title: "Planificación y demanda", description: "Pronostica con mayor precisión y alinea demanda con capacidad y recursos disponibles.", icon: "chart" },
      { id: "inventario", title: "Inventario y abastecimiento", description: "Optimiza niveles de inventario y abastecimiento para reducir costos y evitar quiebres.", icon: "domain" },
      { id: "logistica", title: "Logística y distribución", description: "Mejora rutas, transporte y entregas para un servicio confiable y eficiente.", icon: "process" },
      { id: "operaciones", title: "Operaciones y mejora continua", description: "Automatiza procesos y estandariza para aumentar productividad y calidad operativa.", icon: "automation" },
    ],
    featuredCases: [
      { id: "forecasting-demanda", title: "Forecasting para planificación de demanda", category: "Planificación", description: "Modelos predictivos para elevar precisión del forecast y reducir errores de planificación.", icon: "chart", accent: "blue", status: "Caso en desarrollo" },
      { id: "inventario-reposicion", title: "Optimización de inventario y reposición", category: "Inventario", description: "Rediseño de políticas para reducir quiebres, capital inmovilizado y sobrestock.", icon: "domain", accent: "cyan", status: "Caso en desarrollo" },
      { id: "procesos-operativos", title: "Automatización de procesos operativos", category: "Operaciones", description: "Automatizamos tareas clave para reducir tiempos de ciclo y errores.", icon: "automation", accent: "violet", status: "Caso en desarrollo" },
      { id: "logistica-distribucion", title: "Analítica logística para distribución eficiente", category: "Logística", description: "Analítica para optimizar rutas, cargas y tiempos de entrega.", icon: "process", accent: "orange", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Mapeo operativo", "Diseño de solución", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "eficiencia", title: "Mayor eficiencia operativa", description: "Más productividad con menos fricción.", icon: "chart" },
      { id: "costo", title: "Menor costo y desperdicio", description: "Optimizamos recursos y reducimos pérdidas.", icon: "strategy" },
      { id: "visibilidad", title: "Más visibilidad y control", description: "Monitoreo en tiempo real y decisiones informadas.", icon: "analytics" },
      { id: "continuidad", title: "Continuidad y nivel de servicio", description: "Operaciones resilientes y clientes satisfechos.", icon: "support" },
    ],
    audiences: [
      { id: "retail", title: "Retail y consumo", description: "Mejora disponibilidad, reduce quiebres y optimiza inventarios.", icon: "sales" },
      { id: "manufactura", title: "Manufactura", description: "Optimiza planificación, capacidad y ejecución en planta.", icon: "domain" },
      { id: "logistica", title: "Logística y distribución", description: "Mejora rutas, consolidación y entregas.", icon: "process" },
      { id: "servicios", title: "Servicios y operaciones internas", description: "Estandariza procesos y aumenta eficiencia.", icon: "community" },
    ],
    finalCta: {
      title: "Hagamos tus operaciones",
      highlightedText: "más eficientes y escalables.",
      description: "Convirtamos tus datos en decisiones y resultados que impulsan eficiencia y crecimiento sostenible.",
      ...defaultCtas,
    },
  },
  {
    slug: "analitica-y-toma-de-decisiones",
    title: "Analítica y toma de decisiones",
    metadataTitle: "Analítica y toma de decisiones | Big Talent Analytica",
    metadataDescription:
      "Analítica, visualización, forecasting, KPIs e IA para convertir datos en decisiones más rápidas, precisas y accionables.",
    breadcrumbLabel: "Analítica y toma de decisiones",
    visualTheme: { variant: "analytics", accent: "blue" },
    hero: {
      title: "Analítica y toma de decisiones que convierten datos en",
      highlightedText: "dirección y resultados",
      description:
        "Integramos datos, analítica, visualización e IA para transformar información en decisiones más rápidas, precisas y accionables que impulsen el crecimiento del negocio.",
      topics: [
        { id: "dashboards", label: "Dashboards", icon: "consulting" },
        { id: "forecasting", label: "Forecasting", icon: "chart" },
        { id: "kpis", label: "KPIs", icon: "strategy" },
        { id: "escenarios", label: "Escenarios", icon: "network" },
        { id: "insights", label: "Insights", icon: "analytics" },
      ],
      metrics: [
        { id: "forecast", label: "Forecast accuracy", value: "91%", detail: "indicador ilustrativo" },
        { id: "respuesta", label: "Tiempo de respuesta", value: "-28%", detail: "escenario potencial" },
        { id: "rentabilidad", label: "Rentabilidad", value: "+19%", detail: "indicador ilustrativo" },
        { id: "adopcion", label: "Adopción", value: "84%", detail: "escenario potencial" },
        { id: "riesgos", label: "Riesgos detectados", value: "7", detail: "alertas críticas" },
        { id: "kpis", label: "KPIs críticos", value: "12", detail: "monitoreados" },
      ],
    },
    valueItems: [
      { id: "vision", title: "Visión integrada", description: "Unificamos fuentes para una visión completa del negocio.", icon: "network" },
      { id: "insights", title: "Insights accionables", description: "Convertimos información compleja en recomendaciones claras.", icon: "spark" },
      { id: "decisiones", title: "Decisiones más rápidas", description: "Dashboards y alertas para actuar con confianza.", icon: "strategy" },
      { id: "impacto", title: "Impacto medible", description: "Resultados clave para demostrar y mejorar continuamente.", icon: "chart" },
    ],
    capabilities: [
      { id: "dashboards", title: "Dashboards ejecutivos", description: "Visualizaciones claras y en tiempo real para monitorear lo que realmente importa.", icon: "consulting" },
      { id: "forecasting", title: "Forecasting y proyecciones", description: "Modelos predictivos que anticipan tendencias, demanda y escenarios futuros.", icon: "chart" },
      { id: "rentabilidad", title: "Análisis de rentabilidad", description: "Evaluamos clientes, canales, productos y regiones para maximizar rentabilidad.", icon: "analytics" },
      { id: "riesgos", title: "Cohortes, anomalías y riesgos", description: "Detectamos patrones y riesgos críticos antes de que el problema escale.", icon: "strategy" },
    ],
    featuredCases: [
      { id: "dashboard-direccion", title: "Dashboard de negocio para dirección", category: "Dashboards", description: "Visión ejecutiva con KPIs estratégicos para monitorear desempeño.", icon: "consulting", accent: "blue", status: "Caso en desarrollo" },
      { id: "forecasting-comercial", title: "Forecasting comercial y de demanda", category: "Forecasting", description: "Proyecciones para optimizar inventarios, planificación comercial y asignación.", icon: "chart", accent: "cyan", status: "Caso en desarrollo" },
      { id: "rentabilidad-cliente", title: "Rentabilidad por cliente y canal", category: "Rentabilidad", description: "Análisis detallado para identificar oportunidades de mejora.", icon: "analytics", accent: "violet", status: "Caso en desarrollo" },
      { id: "alertas-insights", title: "Alertas e insights para decisiones críticas", category: "Insights", description: "Detección temprana de anomalías con recomendaciones accionables.", icon: "spark", accent: "orange", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Integración de datos", "Diseño analítico", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "rapidez", title: "Decisiones más rápidas", description: "Actúa con información actualizada y confiable.", icon: "chart" },
      { id: "claridad", title: "Mayor claridad ejecutiva", description: "Visibilidad total del negocio para alinear mejor.", icon: "analytics" },
      { id: "asignacion", title: "Mejor asignación de recursos", description: "Invierte donde se genera más valor.", icon: "strategy" },
      { id: "incertidumbre", title: "Menor incertidumbre", description: "Anticipa riesgos y escenarios con mayor confianza.", icon: "support" },
      { id: "crecimiento", title: "Crecimiento sostenible", description: "Decisiones basadas en datos que impulsan resultados.", icon: "rocket" },
    ],
    audiences: [
      { id: "direccion", title: "Dirección y liderazgo", description: "Visibilidad estratégica para decidir y comunicar mejor.", icon: "community" },
      { id: "finanzas", title: "Finanzas y control de gestión", description: "Controla márgenes, costos y proyecciones.", icon: "analytics" },
      { id: "comercial", title: "Comercial y marketing", description: "Prioriza oportunidades y mejora el ROI.", icon: "megaphone" },
      { id: "operaciones", title: "Operaciones y planificación", description: "Optimiza recursos y nivel de servicio.", icon: "process" },
    ],
    finalCta: {
      title: "Convirtamos tus datos en decisiones con",
      highlightedText: "impacto real.",
      description: "Hablemos sobre tu contexto y diseñemos la solución analítica que tu negocio necesita para crecer.",
      ...defaultCtas,
    },
  },
];

export const allUseCaseCategoryPages: UseCaseCategoryPage[] = [
  ...useCaseCategoryPages,
  ...remainingPages,
  {
    slug: "ia-aplicada-al-negocio",
    title: "IA aplicada al negocio",
    metadataTitle: "IA aplicada al negocio | Big Talent Analytica",
    metadataDescription:
      "Aplicaciones de inteligencia artificial para automatizar procesos, mejorar decisiones, personalizar experiencias y generar valor medible.",
    breadcrumbLabel: "IA aplicada al negocio",
    visualTheme: { variant: "ai", accent: "violet" },
    hero: {
      title: "IA aplicada al negocio que convierte datos en",
      highlightedText: "decisiones y valor",
      description:
        "Aplicamos inteligencia artificial para resolver problemas reales de negocio, automatizar procesos, mejorar decisiones y generar impacto medible en resultados clave.",
      topics: [
        { id: "prediccion", label: "Predicción", icon: "chart" },
        { id: "automatizacion", label: "Automatización", icon: "automation" },
        { id: "personalizacion", label: "Personalización", icon: "talent" },
        { id: "optimizacion", label: "Optimización", icon: "strategy" },
        { id: "insights", label: "Insights", icon: "spark" },
        { id: "responsable", label: "IA responsable", icon: "support" },
      ],
      metrics: [
        { id: "precision", label: "Precisión", value: "+23%", detail: "indicador ilustrativo" },
        { id: "respuesta", label: "Tiempo de respuesta", value: "-31%", detail: "escenario potencial" },
        { id: "adopcion", label: "Adopción", value: "78%", detail: "indicador ilustrativo" },
        { id: "ahorro", label: "Ahorro operativo", value: "-18%", detail: "escenario potencial" },
        { id: "conversion", label: "Conversión", value: "+16%", detail: "indicador ilustrativo" },
      ],
    },
    valueItems: [
      { id: "proposito", title: "IA con propósito", description: "Soluciones alineadas a objetivos de negocio.", icon: "strategy" },
      { id: "automatizacion", title: "Automatización inteligente", description: "Procesos más eficientes y menos tareas manuales.", icon: "automation" },
      { id: "decisiones", title: "Decisiones asistidas", description: "Insights accionables para decidir con confianza.", icon: "ai" },
      { id: "impacto", title: "Impacto medible", description: "Medimos, iteramos y escalamos lo que funciona.", icon: "chart" },
    ],
    capabilities: [
      { id: "atencion", title: "Atención al cliente y asistentes", description: "IA conversacional y asistentes inteligentes que mejoran experiencia y tiempos de respuesta.", icon: "support" },
      { id: "ventas", title: "Ventas y personalización", description: "Modelos que impulsan recomendaciones, segmentación y estrategias comerciales.", icon: "sales" },
      { id: "operaciones", title: "Operaciones y eficiencia", description: "Automatización y analítica para optimizar procesos y productividad.", icon: "automation" },
      { id: "finanzas", title: "Finanzas y riesgos", description: "Modelos predictivos y detección de riesgos para decisiones financieras más seguras.", icon: "money" },
    ],
    featuredCases: [
      { id: "asistente-soporte", title: "Asistente inteligente para soporte y atención", category: "Atención al cliente", description: "IA conversacional que resuelve consultas y reduce tiempos de espera.", icon: "support", accent: "blue", status: "Caso en desarrollo" },
      { id: "prediccion-demanda", title: "Predicción de demanda y recomendación comercial", category: "Ventas", description: "Modelos predictivos para anticipar demanda y recomendar acciones.", icon: "sales", accent: "cyan", status: "Caso en desarrollo" },
      { id: "automatizacion-critica", title: "Automatización de procesos críticos", category: "Operaciones", description: "Automatizamos flujos repetitivos para mejorar eficiencia.", icon: "automation", accent: "violet", status: "Caso en desarrollo" },
      { id: "anomalias-riesgos", title: "Detección de anomalías y riesgos", category: "Finanzas y riesgos", description: "IA para identificar patrones inusuales y actuar a tiempo.", icon: "alert", accent: "orange", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Priorización de casos", "Diseño de solución", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "productividad", title: "Mayor productividad", description: "Procesos más eficientes y equipos enfocados en lo importante.", icon: "rocket" },
      { id: "experiencia", title: "Mejor experiencia del cliente", description: "Respuestas más rápidas y personalizadas.", icon: "service" },
      { id: "decisiones", title: "Decisiones más rápidas", description: "Insights en tiempo real para decidir con confianza.", icon: "spark" },
      { id: "escala", title: "Escalabilidad sostenible", description: "Soluciones que crecen y se adaptan a tu negocio.", icon: "chart" },
    ],
    audiences: [
      { id: "servicios", title: "Empresas de servicios", description: "Mejora eficiencia operativa y experiencia del cliente.", icon: "domain" },
      { id: "retail", title: "Retail y e-commerce", description: "Personaliza experiencias y maximiza ventas.", icon: "sales" },
      { id: "finanzas", title: "Finanzas y seguros", description: "Gestiona riesgos y toma decisiones más inteligentes.", icon: "money" },
      { id: "innovacion", title: "Equipos de innovación y analítica", description: "Impulsa proyectos de IA con foco práctico.", icon: "spark" },
    ],
    finalCta: {
      title: "Llevemos la IA de la idea al",
      highlightedText: "resultado real.",
      description: "Agendemos una sesión y exploremos oportunidades de IA prácticas y alineadas a tus objetivos.",
      ...defaultCtas,
    },
  },
  {
    slug: "finanzas-y-rendimiento",
    title: "Finanzas y rendimiento",
    metadataTitle: "Finanzas y rendimiento | Big Talent Analytica",
    metadataDescription:
      "Analítica financiera para margen, flujo de caja, forecasting, riesgo, KPIs y decisiones de rendimiento con impacto en negocio.",
    breadcrumbLabel: "Finanzas y rendimiento",
    visualTheme: { variant: "finance", accent: "cyan" },
    hero: {
      title: "Finanzas y rendimiento que convierten datos en",
      highlightedText: "rentabilidad y control",
      description:
        "Integramos datos, analítica, IA y automatización para optimizar margen, flujo de caja, forecasting, riesgo y decisiones financieras con impacto real en tu negocio.",
      topics: [
        { id: "rentabilidad", label: "Rentabilidad", icon: "chart" },
        { id: "forecasting", label: "Forecasting", icon: "analytics" },
        { id: "riesgo", label: "Riesgo", icon: "support" },
        { id: "kpis", label: "KPIs", icon: "strategy" },
        { id: "eficiencia", label: "Eficiencia", icon: "automation" },
      ],
      metrics: [
        { id: "margen", label: "Margen", value: "+18%", detail: "indicador ilustrativo" },
        { id: "cashflow", label: "Cash flow", value: "+12%", detail: "escenario potencial" },
        { id: "costos", label: "Costos", value: "-9%", detail: "indicador ilustrativo" },
        { id: "forecast", label: "Forecast accuracy", value: "92%", detail: "escenario potencial" },
        { id: "roi", label: "ROI", value: "4.1x", detail: "indicador ilustrativo" },
        { id: "riesgo", label: "Riesgo detectado", value: "7 alertas", detail: "escenario potencial" },
      ],
    },
    valueItems: [
      { id: "visibilidad", title: "Visibilidad financiera", description: "Consolida y visualiza datos financieros en tiempo real.", icon: "analytics" },
      { id: "decisiones", title: "Decisiones más rápidas", description: "Información predictiva para anticiparte.", icon: "spark" },
      { id: "control", title: "Control del rendimiento", description: "Monitorea márgenes, costos y KPIs críticos.", icon: "gauge" },
      { id: "impacto", title: "Impacto medible", description: "Resultados concretos sobre rentabilidad y caja.", icon: "strategy" },
    ],
    capabilities: [
      { id: "rentabilidad", title: "Rentabilidad y márgenes", description: "Analiza rentabilidad por producto, cliente, canal y región para optimizar márgenes.", icon: "strategy" },
      { id: "forecasting", title: "Forecasting y presupuestos", description: "Proyecciones financieras con modelos predictivos y escenarios.", icon: "calendar" },
      { id: "riesgo", title: "Riesgo y anomalías", description: "Detecta desviaciones y riesgos financieros con IA para actuar antes.", icon: "shield" },
      { id: "kpis", title: "Control de gestión y KPIs", description: "Dashboards y reportes ejecutivos para monitorear desempeño financiero.", icon: "chart" },
    ],
    featuredCases: [
      { id: "rentabilidad-cliente-canal", title: "Rentabilidad por cliente y canal", category: "Rentabilidad", description: "Análisis integral para identificar clientes, canales y productos rentables.", icon: "money", accent: "blue", status: "Caso en desarrollo" },
      { id: "forecasting-financiero", title: "Forecasting financiero y presupuestario", category: "Forecasting", description: "Modelos predictivos para mejorar planificación y asignación de recursos.", icon: "calendar", accent: "cyan", status: "Caso en desarrollo" },
      { id: "riesgo-anomalias", title: "Alertas de riesgo y anomalías", category: "Riesgo", description: "Detección temprana de desviaciones para minimizar impactos.", icon: "alert", accent: "orange", status: "Caso en desarrollo" },
      { id: "dashboards-rendimiento", title: "Dashboards ejecutivos de rendimiento", category: "KPIs", description: "KPIs financieros clave en dashboards interactivos para decisión ejecutiva.", icon: "consulting", accent: "violet", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Integración de datos", "Modelado y diseño", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "rentabilidad", title: "Mayor rentabilidad", description: "Optimizamos márgenes y maximizamos valor.", icon: "chart" },
      { id: "incertidumbre", title: "Menor incertidumbre", description: "Anticipamos escenarios y reducimos riesgos.", icon: "support" },
      { id: "control", title: "Mejor control financiero", description: "Monitoreo y gestión en tiempo real.", icon: "gauge" },
      { id: "datos", title: "Decisiones basadas en datos", description: "Información confiable para decisiones inteligentes.", icon: "analytics" },
      { id: "crecimiento", title: "Crecimiento sostenible", description: "Resultados financieros de largo plazo.", icon: "rocket" },
    ],
    audiences: [
      { id: "direccion", title: "Dirección y liderazgo", description: "Toma decisiones estratégicas con información financiera.", icon: "talent" },
      { id: "finanzas", title: "Finanzas y control de gestión", description: "Mejora planificación, control y análisis.", icon: "analytics" },
      { id: "pricing", title: "Comercial y pricing", description: "Define estrategias basadas en rentabilidad real.", icon: "diamond" },
      { id: "operaciones", title: "Operaciones y planificación", description: "Alinea operaciones con objetivos financieros.", icon: "automation" },
    ],
    finalCta: {
      title: "Convirtamos tus finanzas en",
      highlightedText: "decisiones con impacto real.",
      description: "Hablemos sobre tus desafíos y cómo podemos ayudarte a alcanzar objetivos financieros.",
      ...defaultCtas,
    },
  },
  {
    slug: "transformacion-digital-y-organizacional",
    title: "Transformación digital y organizacional",
    metadataTitle: "Transformación digital y organizacional | Big Talent Analytica",
    metadataDescription:
      "Transformación digital y organizacional con estrategia, procesos, personas, tecnología, adopción y analítica para crear capacidades sostenibles.",
    breadcrumbLabel: "Transformación digital y organizacional",
    visualTheme: { variant: "transformation", accent: "blue" },
    hero: {
      title: "Transformación digital y organizacional que convierte cambio en",
      highlightedText: "capacidades y resultados",
      description:
        "Integramos estrategia, procesos, personas, tecnología, adopción y analítica para impulsar cambios sostenibles que generan valor real y medible.",
      topics: [
        { id: "cambio", label: "Cambio", icon: "strategy" },
        { id: "procesos", label: "Procesos", icon: "automation" },
        { id: "adopcion", label: "Adopción", icon: "talent" },
        { id: "tecnologia", label: "Tecnología", icon: "globe" },
        { id: "cultura", label: "Cultura", icon: "community" },
        { id: "resultados", label: "Resultados", icon: "chart" },
      ],
      metrics: [
        { id: "adopcion", label: "Adopción", value: "+34%", detail: "indicador ilustrativo" },
        { id: "tiempo", label: "Tiempo de implementación", value: "-28%", detail: "escenario potencial" },
        { id: "productividad", label: "Productividad", value: "+22%", detail: "indicador ilustrativo" },
        { id: "procesos", label: "Procesos digitalizados", value: "76%", detail: "escenario potencial" },
        { id: "satisfaccion", label: "Satisfacción de usuarios", value: "+31%", detail: "indicador ilustrativo" },
      ],
    },
    valueItems: [
      { id: "proposito", title: "Cambio con propósito", description: "Alineamos la transformación con la estrategia.", icon: "strategy" },
      { id: "procesos", title: "Procesos más ágiles", description: "Simplificamos y aceleramos la operación.", icon: "automation" },
      { id: "adopcion", title: "Adopción sostenible", description: "Involucramos personas para consolidar hábitos.", icon: "community" },
      { id: "impacto", title: "Impacto medible", description: "Medimos resultados para mejorar continuamente.", icon: "chart" },
    ],
    capabilities: [
      { id: "estrategia", title: "Estrategia y hoja de ruta", description: "Definimos visión clara, objetivos y plan de transformación con impacto y prioridad.", icon: "guide" },
      { id: "cambio", title: "Gestión del cambio y adopción", description: "Diseñamos estrategias para involucrar, comunicar y preparar personas.", icon: "community" },
      { id: "procesos", title: "Digitalización de procesos", description: "Rediseñamos y automatizamos procesos clave para ganar eficiencia.", icon: "process" },
      { id: "equipos", title: "Habilitación de equipos", description: "Desarrollamos habilidades y capacidades digitales para sostener el desempeño.", icon: "course" },
    ],
    featuredCases: [
      { id: "adopcion-comercial", title: "Adopción digital en equipos comerciales", category: "Comercial", description: "Plan de adopción que aumenta el uso de herramientas y productividad.", icon: "sales", accent: "blue", status: "Caso en desarrollo" },
      { id: "crm-cambio", title: "Implementación de CRM y cambio cultural", category: "CRM", description: "Gestión del cambio para mejorar colaboración y experiencia del cliente.", icon: "consulting", accent: "cyan", status: "Caso en desarrollo" },
      { id: "procesos-automatizacion", title: "Rediseño de procesos y automatización", category: "Procesos", description: "Automatización de procesos críticos para reducir tiempos y errores.", icon: "automation", accent: "violet", status: "Caso en desarrollo" },
      { id: "transformacion-datos", title: "Transformación operativa basada en datos", category: "Datos", description: "Analítica operativa para decisiones en tiempo real y eficiencia.", icon: "analytics", accent: "orange", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Priorización", "Diseño de solución", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "adopcion", title: "Mayor adopción y alineación", description: "Equipos comprometidos con la visión.", icon: "community" },
      { id: "procesos", title: "Procesos más simples y eficientes", description: "Menos fricción y más tiempo para generar valor.", icon: "automation" },
      { id: "equipos", title: "Equipos mejor preparados", description: "Nuevas capacidades para innovar y adaptarse.", icon: "talent" },
      { id: "decisiones", title: "Decisiones más ágiles", description: "Información confiable para actuar rápido.", icon: "chart" },
      { id: "crecimiento", title: "Crecimiento sostenible", description: "Transformación que prepara el futuro.", icon: "rocket" },
    ],
    audiences: [
      { id: "direccion", title: "Dirección y liderazgo", description: "Alinea transformación con estrategia e impacto.", icon: "community" },
      { id: "rrhh", title: "RR. HH. y talento", description: "Desarrolla capacidades y gestiona el cambio.", icon: "talent" },
      { id: "operaciones", title: "Operaciones y procesos", description: "Optimiza procesos y adopta tecnología.", icon: "automation" },
      { id: "innovacion", title: "Áreas de transformación e innovación", description: "Lidera iniciativas de cambio organizacional.", icon: "spark" },
    ],
    finalCta: {
      title: "Hagamos de la transformación una",
      highlightedText: "ventaja competitiva real.",
      description: "Diseñemos juntos una hoja de ruta que convierta el cambio en capacidades, impacto y resultados sostenibles.",
      ...defaultCtas,
    },
  },
  {
    slug: "talento-y-recursos-humanos",
    title: "Talento y RR. HH.",
    metadataTitle: "Talento y RR. HH. | Big Talent Analytica",
    metadataDescription:
      "People analytics, IA y estrategia de talento para atracción, desempeño, desarrollo, compromiso, retención y crecimiento organizacional.",
    breadcrumbLabel: "Talento y RR. HH.",
    visualTheme: { variant: "talent", accent: "cyan" },
    hero: {
      title: "Talento y RR. HH. que convierten datos en",
      highlightedText: "personas, desempeño y crecimiento",
      description:
        "Integramos analítica, IA, people analytics, estrategia de talento y experiencia del empleado para atraer, desarrollar y retener talento con impacto real en tu organización.",
      topics: [
        { id: "atraccion", label: "Atracción", icon: "talent" },
        { id: "desempeno", label: "Desempeño", icon: "chart" },
        { id: "people", label: "People analytics", icon: "analytics" },
        { id: "aprendizaje", label: "Aprendizaje", icon: "course" },
        { id: "sucesion", label: "Sucesión", icon: "strategy" },
        { id: "experiencia", label: "Experiencia", icon: "service" },
      ],
      metrics: [
        { id: "rotacion", label: "Rotación voluntaria", value: "12.4%", detail: "indicador ilustrativo" },
        { id: "compromiso", label: "Compromiso", value: "78%", detail: "escenario potencial" },
        { id: "cobertura", label: "Tiempo de cobertura", value: "28 días", detail: "indicador ilustrativo" },
        { id: "desempeno", label: "Desempeño promedio", value: "4.3/5", detail: "escenario potencial" },
        { id: "diversidad", label: "Diversidad de género", value: "42%", detail: "indicador ilustrativo" },
      ],
    },
    valueItems: [
      { id: "vision", title: "Visión integral", description: "Conectamos personas, datos y estrategia.", icon: "analytics" },
      { id: "decisiones", title: "Decisiones basadas en datos", description: "Menos intuición, más evidencia para actuar.", icon: "chart" },
      { id: "experiencia", title: "Experiencia del empleado", description: "Momentos que impulsan compromiso.", icon: "service" },
      { id: "impacto", title: "Impacto medible", description: "Resultados traducidos en negocio.", icon: "strategy" },
    ],
    capabilities: [
      { id: "atraccion", title: "Atracción y reclutamiento", description: "Analítica e IA para atraer talento ideal, mejorar calidad de candidatos y reducir tiempos.", icon: "talent" },
      { id: "desempeno", title: "Desempeño y desarrollo", description: "Evalúa y potencia desempeño con datos, objetivos claros y planes personalizados.", icon: "chart" },
      { id: "people", title: "People analytics y planificación", description: "Dashboards e insights para planificar dotación, sucesión y necesidades futuras.", icon: "analytics" },
      { id: "cultura", title: "Cultura, compromiso y retención", description: "Mide voz del empleado, identifica drivers de compromiso y reduce rotación.", icon: "service" },
    ],
    featuredCases: [
      { id: "reducir-rotacion", title: "People analytics para reducir rotación", category: "People analytics", description: "Identificamos factores de riesgo y acciones para reducir rotación.", icon: "analytics", accent: "cyan", status: "Caso en desarrollo" },
      { id: "dashboard-talento", title: "Dashboard de talento y compromiso", category: "Dashboard", description: "Visibilidad ejecutiva de métricas clave para decisiones rápidas.", icon: "consulting", accent: "orange", status: "Caso en desarrollo" },
      { id: "skills-brechas", title: "Mapa de skills y brechas críticas", category: "Skills", description: "Detectamos brechas y priorizamos desarrollo de capacidades.", icon: "course", accent: "violet", status: "Caso en desarrollo" },
      { id: "reclutamiento-cobertura", title: "Analítica para reclutamiento y cobertura", category: "Reclutamiento", description: "Optimizamos embudos de selección y tiempos de cobertura.", icon: "talent", accent: "blue", status: "Caso en desarrollo" },
    ],
    processSteps: processSteps(["Diagnóstico", "Integración de datos", "Diseño de solución", "Implementación", "Medición de impacto"]),
    impacts: [
      { id: "retencion", title: "Mejor retención", description: "Reducimos rotación gestionando factores críticos.", icon: "community" },
      { id: "decisiones", title: "Decisiones más rápidas", description: "Insights de talento para actuar con agilidad.", icon: "spark" },
      { id: "experiencia", title: "Mejor experiencia del empleado", description: "Entendemos su voz y mejoramos lo importante.", icon: "service" },
      { id: "productividad", title: "Mayor productividad", description: "Equipos enfocados y alineados a objetivos.", icon: "chart" },
      { id: "alineacion", title: "Talento alineado al negocio", description: "Capacidades y sucesión que impulsan crecimiento.", icon: "strategy" },
    ],
    audiences: [
      { id: "rrhh", title: "RR. HH. y talento", description: "Equipos que buscan transformar procesos y decisiones.", icon: "talent" },
      { id: "direccion", title: "Dirección y liderazgo", description: "Líderes que necesitan visibilidad y control.", icon: "briefcase" },
      { id: "lideres", title: "Líderes de área", description: "Gerentes que quieren desarrollar equipos de alto desempeño.", icon: "community" },
      { id: "organizaciones", title: "Organizaciones en transformación", description: "Empresas que impulsan cultura y crecimiento.", icon: "domain" },
    ],
    finalCta: {
      title: "Impulsemos el talento con",
      highlightedText: "decisiones y resultados reales.",
      description: "Hablemos de tus desafíos y diseñemos juntos la solución que tu organización necesita.",
      ...defaultCtas,
    },
  },
];

export const useCaseCategoryNavItems: UseCaseCategoryNavItem[] = [
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

export function getUseCaseCategoryPage(slug: string) {
  return allUseCaseCategoryPages.find((page) => page.slug === slug);
}
