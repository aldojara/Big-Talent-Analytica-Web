import type {
  ResourceBasicItem,
  ResourceCardItem,
  ResourceListPage,
  ResourceNavItem,
  ResourceTheme,
} from "@/types/resources";

const agenda = "/agenda";
const guides = "/recursos/guias-y-plantillas";
const courses = "/recursos/cursos-y-rutas";

export const resourceThemes: Record<ResourceTheme["name"], ResourceTheme> = {
  blue: { name: "blue", accent: "#1d73ff", soft: "rgb(29 115 255 / 0.1)", border: "rgb(29 115 255 / 0.24)", text: "text-[var(--bta-blue-bright)]" },
  cyan: { name: "cyan", accent: "#18c4c7", soft: "rgb(24 196 199 / 0.12)", border: "rgb(24 196 199 / 0.26)", text: "text-cyan-300" },
  green: { name: "green", accent: "#19b979", soft: "rgb(25 185 121 / 0.12)", border: "rgb(25 185 121 / 0.26)", text: "text-emerald-300" },
  violet: { name: "violet", accent: "#7c3aed", soft: "rgb(124 58 237 / 0.12)", border: "rgb(124 58 237 / 0.26)", text: "text-violet-300" },
  amber: { name: "amber", accent: "#f59e0b", soft: "rgb(245 158 11 / 0.13)", border: "rgb(245 158 11 / 0.28)", text: "text-amber-300" },
  orange: { name: "orange", accent: "#f97316", soft: "rgb(249 115 22 / 0.12)", border: "rgb(249 115 22 / 0.28)", text: "text-orange-300" },
};

export const resourceNavItems: ResourceNavItem[] = [
  { slug: "blog", menuLabel: "Blog", href: "/recursos/blog", description: "Análisis, tendencias, opinión y conocimiento aplicado.", icon: "guide", theme: "blue" },
  { slug: "guias-y-plantillas", menuLabel: "Guías y plantillas", href: guides, description: "Frameworks, checklists y recursos listos para usar.", icon: "list-check", theme: "green" },
  { slug: "videos", menuLabel: "Videos", href: "/recursos/videos", description: "Explicaciones visuales, demos y conversaciones.", icon: "play", theme: "violet" },
  { slug: "podcasts", menuLabel: "Podcasts", href: "/recursos/podcasts", description: "Entrevistas, reflexiones y episodios en audio.", icon: "support", theme: "violet" },
  { slug: "cursos-y-rutas", menuLabel: "Cursos y rutas", href: courses, description: "Aprendizaje estructurado para desarrollar capacidades.", icon: "course", theme: "cyan" },
  { slug: "herramientas", menuLabel: "Herramientas", href: "/recursos/herramientas", description: "Utilidades, diagnósticos y recursos interactivos.", icon: "automation", theme: "orange" },
];

export const overviewFormats: ResourceBasicItem[] = resourceNavItems.map((item) => ({
  title: item.menuLabel,
  description: item.description,
  href: item.href,
  icon: item.icon,
  theme: item.theme,
}));

export const overviewFeatured: ResourceCardItem = {
  type: "GUÍA DESTACADA",
  title: "Guía práctica para diseñar una estrategia de IA aplicada al negocio",
  description: "Un recurso paso a paso para priorizar oportunidades, alinear objetivos, evaluar capacidades y construir una hoja de ruta realista.",
  href: guides,
  icon: "guide",
  theme: "blue",
  meta: ["PDF", "35 páginas", "Nivel intermedio"],
  ctaLabel: "Descargar guía",
  tags: ["IA aplicada", "Estrategia", "Roadmap"],
};

export const overviewGoals: ResourceBasicItem[] = [
  { title: "Comprender tendencias", description: "Señales para mirar el futuro con criterio.", href: "/recursos/blog", icon: "chart", theme: "blue" },
  { title: "Resolver un problema", description: "Métodos prácticos para desbloquear decisiones.", href: guides, icon: "process", theme: "green" },
  { title: "Implementar una solución", description: "Rutas para pasar de idea a ejecución.", href: "/recursos/herramientas", icon: "rocket", theme: "cyan" },
  { title: "Desarrollar una habilidad", description: "Aprendizaje aplicado por niveles.", href: courses, icon: "spark", theme: "amber" },
  { title: "Preparar una decisión", description: "Marcos y dashboards para priorizar.", href: "/recursos/herramientas", icon: "strategy", theme: "orange" },
  { title: "Formar a un equipo", description: "Contenido para capacidades compartidas.", href: courses, icon: "community", theme: "violet" },
];

const editorialCollections: ResourceBasicItem[] = [
  { title: "Introducción a la IA generativa", description: "Conceptos clave, casos de uso y herramientas para comenzar con impacto.", href: courses, icon: "spark", theme: "blue", meta: "12 recursos" },
  { title: "People analytics aplicado", description: "Datos y analítica para decisiones de talento centradas en las personas.", href: "/talento/people-analytics", icon: "talent", theme: "violet", meta: "15 recursos" },
  { title: "Automatización y mejora de procesos", description: "Métodos y herramientas para optimizar procesos y generar eficiencia.", href: "/ia-y-tecnologia/automatizacion", icon: "automation", theme: "cyan", meta: "11 recursos" },
];

const latestBlog: ResourceCardItem[] = [
  { type: "ANALYTICS", title: "Cómo evaluar casos de uso de IA sin caer en el hype", description: "Prioriza oportunidades con impacto, viabilidad y alineación.", href: "/recursos/blog", icon: "ai", theme: "blue", meta: ["16 may 2024", "6 min"], ctaLabel: "Ver artículo" },
  { type: "TALENTO", title: "Tendencias que están redefiniendo el futuro del talento", description: "Habilidades, modelos de trabajo y liderazgo en la era de la IA.", href: "/recursos/blog", icon: "talent", theme: "cyan", meta: ["8 may 2024", "6 min"], ctaLabel: "Ver artículo" },
  { type: "CUSTOMER EXPERIENCE", title: "Qué medir realmente en una estrategia de customer experience", description: "Métricas accionables para mejorar la experiencia.", href: "/recursos/blog", icon: "analytics", theme: "violet", meta: ["1 may 2024", "5 min"], ctaLabel: "Ver artículo" },
];

const mixedMedia: ResourceCardItem[] = [
  { type: "VIDEO", title: "IA aplicada al negocio: por dónde empezar", description: "Una mirada práctica para priorizar.", href: "/recursos/videos", icon: "play", theme: "blue", meta: ["12:34"], ctaLabel: "Ver video" },
  { type: "PODCAST", title: "Conversación: liderazgo y transformación", description: "Ideas para equipos en cambio.", href: "/recursos/podcasts", icon: "support", theme: "violet", meta: ["32:18"], ctaLabel: "Escuchar" },
  { type: "VIDEO", title: "Demostración: dashboards para decisiones", description: "Visualiza indicadores clave.", href: "/recursos/videos", icon: "analytics", theme: "cyan", meta: ["16:47"], ctaLabel: "Ver video" },
  { type: "PODCAST", title: "Radar de IA: señales de la semana", description: "Tendencias para seguir de cerca.", href: "/recursos/podcasts", icon: "chart", theme: "blue", meta: ["21:05"], ctaLabel: "Escuchar" },
];

const downloadableTools: ResourceBasicItem[] = [
  { title: "Plantilla: matriz de priorización", description: "Excel · Plantilla", href: guides, icon: "guide", theme: "green" },
  { title: "Checklist de adopción de IA", description: "PDF · Checklist", href: guides, icon: "list-check", theme: "violet" },
  { title: "Dashboard KPI", description: "Excel · Dashboard", href: "/recursos/herramientas", icon: "analytics", theme: "green" },
  { title: "Diagnóstico de madurez digital", description: "Web · Herramienta", href: "/recursos/herramientas", icon: "chart", theme: "orange" },
];

const categories = (items: [string, string, string, ResourceBasicItem["icon"], ResourceBasicItem["theme"]?][]): ResourceBasicItem[] =>
  items.map(([title, description, href, icon, theme]) => ({ title, description, href, icon, theme }));

const catalog = (items: Omit<ResourceCardItem, "href" | "ctaLabel">[], href: string, ctaLabel: string): ResourceCardItem[] =>
  items.map((item) => ({ ...item, href, ctaLabel }));

export const resourcePages: ResourceListPage[] = [
  {
    ...resourceNavItems[0],
    breadcrumbLabel: "Blog",
    eyebrow: "BLOG",
    title: "Ideas, análisis y tendencias para transformar conocimiento en decisiones",
    highlightedTerms: ["decisiones"],
    description: "Nuestro blog reúne artículos aplicados, análisis de expertos, tendencias, opinión y reflexiones prácticas sobre IA, analítica, talento, tecnología y negocio.",
    primaryCta: { label: "Explorar artículos", href: "#articulos-recientes" },
    secondaryCta: { label: "Suscribirme", href: "#suscripcion" },
    visual: "editorial",
    metrics: [
      { label: "Artículos publicados", value: "120+", icon: "guide" },
      { label: "Temas clave", value: "18", icon: "strategy" },
      { label: "Lectura media", value: "6 min", icon: "calendar" },
      { label: "Nuevas publicaciones", value: "2/semana", icon: "analytics" },
    ],
    categories: categories([
      ["Análisis", "Artículos con análisis profundo y basado en datos.", "/recursos/blog", "analytics", "blue"],
      ["Tendencias", "Exploramos tendencias emergentes que están marcando el futuro.", "/recursos/blog", "chart", "green"],
      ["Opinión", "Perspectivas y reflexiones sobre temas clave del ecosistema.", "/recursos/blog", "support", "violet"],
      ["Actualidad", "Novedades y noticias relevantes del mundo tech y negocio.", "/recursos/blog", "calendar", "orange"],
      ["Casos comentados", "Casos reales analizados y lecciones para aplicar.", "/recursos/blog", "guide", "cyan"],
      ["Tutoriales", "Guías prácticas para aprender y aplicar herramientas.", guides, "course", "cyan"],
    ]),
    featured: { ...latestBlog[0], type: "ANÁLISIS", meta: ["Aldo Juan Pizzocri", "8 may 2024", "6 min de lectura"], ctaLabel: "Leer artículo", tags: ["IA aplicada", "Estrategia", "Casos de uso", "Prioridades"] },
    interests: overviewGoals.slice(0, 6),
    collections: editorialCollections,
    latest: latestBlog,
    recent: catalog([
      { type: "ANÁLISIS", title: "Qué significa realmente automatizar con IA", description: "Más allá de la tecnología: procesos, datos, personas y decisiones.", icon: "ai", theme: "blue", meta: ["6 may 2024", "5 min"] },
      { type: "TENDENCIAS", title: "Tendencias que están redefiniendo el futuro del talento", description: "Habilidades, modelos de trabajo y liderazgo en la era de la IA.", icon: "talent", theme: "cyan", meta: ["3 may 2024", "6 min"] },
      { type: "OPINIÓN", title: "Qué medir en una estrategia de customer experience", description: "Métricas que importan y cómo convertirlas en acciones.", icon: "analytics", theme: "violet", meta: ["30 abr 2024", "5 min"] },
      { type: "TUTORIALES", title: "IA generativa para líderes: oportunidades y riesgos", description: "Claves para evaluar, adoptar y gobernar IA generativa.", icon: "network", theme: "cyan", meta: ["27 abr 2024", "6 min"] },
    ], "/recursos/blog", "Ver artículo"),
    ranked: latestBlog.concat(latestBlog[2]).slice(0, 4),
    newsletter: { title: "Suscríbete al blog", description: "Recibe análisis seleccionados, artículos exclusivos y tendencias directamente en tu correo.", buttonLabel: "Suscribirme" },
    metadata: { title: "Blog", description: "Ideas, análisis, tendencias y opinión sobre inteligencia artificial, analítica, talento, tecnología y negocio." },
  },
  {
    ...resourceNavItems[1],
    breadcrumbLabel: "Guías y plantillas",
    eyebrow: "GUÍAS Y PLANTILLAS",
    title: "Guías y plantillas para aplicar conocimiento",
    highlightedTerms: ["Guías", "plantillas"],
    description: "Metodologías, pasos a paso, frameworks y recursos listos para usar que te ayudarán a implementar soluciones y tomar mejores decisiones.",
    primaryCta: { label: "Ver recursos destacados", href: "#catalogo" },
    visual: "guides",
    benefits: categories([
      ["Contenido práctico y accionable", "Metodologías listas para adaptar.", guides, "guide", "blue"],
      ["Descargables listos para usar", "Formatos para acelerar trabajo.", guides, "arrow-right", "blue"],
      ["Ahorra tiempo y toma mejores decisiones", "Criterios claros para priorizar.", guides, "calendar", "blue"],
    ]),
    tabs: categories([
      ["Todas las guías", "", guides, "guide", "blue"],
      ["Metodologías", "", guides, "process", "blue"],
      ["Frameworks", "", guides, "spark", "blue"],
      ["Checklists", "", guides, "list-check", "blue"],
      ["Playbooks", "", guides, "learning", "blue"],
      ["Roadmaps", "", guides, "route", "blue"],
      ["Plantillas", "", guides, "guide", "blue"],
      ["Herramientas", "", "/recursos/herramientas", "automation", "blue"],
    ]),
    categories: [],
    featured: overviewFeatured,
    filters: [
      { label: "Tema", key: "topic", options: ["IA y automatización", "Talento y RR. HH.", "Marketing y ventas", "Operaciones", "Experiencia de cliente"] },
      { label: "Formato", key: "type", options: ["Guía", "Plantilla", "Checklist", "Framework", "Playbook"] },
      { label: "Nivel", key: "level", options: ["Básico", "Intermedio", "Avanzado"] },
      { label: "Duración estimada", key: "duration", options: ["Menos de 30 min", "30 a 60 min", "Más de 60 min"] },
      { label: "Tipo de acceso", key: "access", options: ["Gratuito", "Descargable", "Premium"] },
    ],
    catalog: catalog([
      { type: "GUÍA", title: "Guía práctica para implementar IA generativa en tu empresa", description: "Paso a paso para identificar casos de uso, preparar datos y medir resultados.", icon: "ai", theme: "violet", meta: ["45 min", "Intermedio", "Descargable"], tags: ["IA y automatización", "Guía", "Intermedio", "30 a 60 min", "Descargable"] },
      { type: "PLANTILLA", title: "Canvas de diagnóstico de procesos", description: "Plantilla editable para mapear, analizar y priorizar mejoras.", icon: "process", theme: "green", meta: ["20 min", "Básico", "Descargable"], tags: ["Operaciones", "Plantilla", "Básico", "Menos de 30 min", "Descargable"] },
      { type: "CHECKLIST", title: "Checklist de evaluación de madurez en IA", description: "Evalúa el nivel de preparación de tu organización para adoptar IA.", icon: "list-check", theme: "green", meta: ["15 min", "Básico", "Gratuito"], tags: ["IA y automatización", "Checklist", "Básico", "Menos de 30 min", "Gratuito"] },
      { type: "FRAMEWORK", title: "Framework de adopción de analítica de talento", description: "Modelo de 5 fases para diseñar e implementar people analytics.", icon: "talent", theme: "blue", meta: ["60 min", "Avanzado", "Descargable"], tags: ["Talento y RR. HH.", "Framework", "Avanzado", "30 a 60 min", "Descargable"] },
      { type: "PLAYBOOK", title: "Playbook de automatización de RR. HH.", description: "Guía práctica para automatizar procesos de talento con tecnología.", icon: "automation", theme: "violet", meta: ["30 min", "Intermedio", "Gratuito"], tags: ["Talento y RR. HH.", "Playbook", "Intermedio", "30 a 60 min", "Gratuito"] },
      { type: "GUÍA", title: "Guía para medir el ROI de proyectos de IA", description: "Metodología y fórmulas para calcular retorno de inversión.", icon: "money", theme: "blue", meta: ["35 min", "Intermedio", "Gratuito"], tags: ["IA y automatización", "Guía", "Intermedio", "30 a 60 min", "Gratuito"] },
      { type: "PLANTILLA", title: "Roadmap de transformación digital", description: "Hoja de ruta para planificar iniciativas digitales por fases.", icon: "route", theme: "green", meta: ["25 min", "Básico", "Descargable"], tags: ["Operaciones", "Plantilla", "Básico", "Menos de 30 min", "Descargable"] },
      { type: "CHECKLIST", title: "Checklist de seguridad y gobernanza de datos", description: "Verificación para asegurar buenas prácticas en gestión de datos.", icon: "shield", theme: "violet", meta: ["20 min", "Intermedio", "Gratuito"], tags: ["IA y automatización", "Checklist", "Intermedio", "Menos de 30 min", "Gratuito"] },
    ], guides, "Descargable"),
    finalCta: { title: "¿Tienes prisa?", description: "Descarga nuestras plantillas y guías más populares y comienza a aplicarlas hoy mismo.", primaryCta: { label: "Ver recursos destacados", href: "#catalogo" }, icon: "arrow-right" },
    newsletter: { title: "Recibe nuevas guías y plantillas cada semana", description: "Contenido práctico para transformar tu organización.", buttonLabel: "Suscribirme" },
    metadata: { title: "Guías y plantillas", description: "Metodologías, frameworks, checklists, playbooks, roadmaps y plantillas para aplicar conocimiento." },
  },
  {
    ...resourceNavItems[2],
    breadcrumbLabel: "Videos",
    eyebrow: "VIDEOS",
    title: "Videos para aprender, explorar y aplicar conocimiento",
    highlightedTerms: ["Videos"],
    description: "Explora demos, explicaciones, entrevistas y análisis visuales sobre IA, analítica, talento, tecnología y negocio para impulsar decisiones y resultados.",
    primaryCta: { label: "Explorar videos", href: "#videos-recientes" },
    secondaryCta: { label: "Ver playlists", href: "#playlists" },
    visual: "video",
    metrics: [
      { label: "Videos publicados", value: "95+", icon: "play" },
      { label: "Horas de contenido", value: "140+", icon: "calendar" },
      { label: "Playlists activas", value: "16", icon: "list-check" },
      { label: "Nuevos videos / mes", value: "8", icon: "chart" },
    ],
    categories: categories([
      ["Demos", "Demostraciones prácticas de soluciones y herramientas.", "/recursos/videos", "play", "blue"],
      ["Tutoriales", "Aprende paso a paso con guías visuales.", "/recursos/videos", "course", "green"],
      ["Entrevistas", "Conversaciones con expertos y líderes.", "/recursos/videos", "community", "violet"],
      ["Análisis", "Perspectivas visuales sobre tendencias y decisiones.", "/recursos/videos", "analytics", "orange"],
      ["Charlas", "Ponencias, reflexiones e ideas aplicadas.", "/recursos/videos", "support", "violet"],
      ["Webinars grabados", "Sesiones formativas y grabaciones destacadas.", "/recursos/videos", "video", "cyan"],
    ]),
    featured: { type: "VIDEO DESTACADO", title: "Cómo implementar IA generativa con enfoque práctico", description: "Un recorrido paso a paso para identificar oportunidades, seleccionar herramientas y convertir iniciativas de IA en resultados medibles.", href: "/recursos/videos", icon: "play", theme: "blue", meta: ["18:45", "Aldo Jara Pisconti", "22 abr. 2024"], ctaLabel: "Ver video", tags: ["IA generativa", "Implementación", "Casos de uso", "Estrategia"] },
    recent: mixedMedia.map((item) => ({ ...item, href: "/recursos/videos", ctaLabel: "Ver video" })),
    latest: latestBlog.map((item) => ({ ...item, href: "/recursos/videos", type: "VIDEO", ctaLabel: "Ver video" })),
    ranked: catalog([
      { type: "1", title: "Introducción a la IA para líderes", description: "24.8K vistas", icon: "ai", theme: "blue", meta: ["12:36"] },
      { type: "2", title: "Caso de uso: IA en atención al cliente", description: "18.6K vistas", icon: "support", theme: "cyan", meta: ["15:28"] },
      { type: "3", title: "People Analytics: por dónde empezar", description: "16.2K vistas", icon: "talent", theme: "violet", meta: ["14:02"] },
      { type: "4", title: "Power BI: tips para dashboards más efectivos", description: "14.3K vistas", icon: "analytics", theme: "amber", meta: ["12:47"] },
    ], "/recursos/videos", "Ver video"),
    collections: editorialCollections,
    interests: categories([
      ["Marketing y ventas", "", "/dominios/marketing-y-ventas", "megaphone", "blue"],
      ["Experiencia de cliente", "", "/dominios/experiencia-de-cliente-y-servicio", "support", "cyan"],
      ["Supply Chain y operaciones", "", "/dominios/supply-chain-y-operaciones", "domain", "green"],
      ["Procesos y transformación", "", "/dominios/procesos-y-transformacion", "process", "violet"],
      ["Finanzas y rendimiento", "", "/dominios/finanzas-y-rendimiento", "money", "amber"],
      ["Talento y RR. HH.", "", "/dominios/talento-y-recursos-humanos", "talent", "violet"],
    ]),
    newsletter: { title: "Suscríbete al canal", description: "Recibe nuevos videos, playlists y contenido visual aplicado cada semana.", buttonLabel: "Suscribirme al canal" },
    metadata: { title: "Videos", description: "Demos, explicaciones, entrevistas y análisis visuales sobre IA, analítica, talento, tecnología y negocio." },
  },
  {
    ...resourceNavItems[3],
    breadcrumbLabel: "Podcasts",
    eyebrow: "PODCASTS",
    title: "Conversaciones que inspiran y transforman",
    highlightedTerms: ["transforman"],
    description: "Episodios con expertos y líderes que comparten ideas, experiencias y estrategias sobre talento, IA y negocio.",
    primaryCta: { label: "Escuchar episodio", href: "#episodios" },
    visual: "podcast",
    benefits: categories([
      ["Conversaciones con expertos", "Diálogos con líderes y especialistas.", "/recursos/podcasts", "support", "blue"],
      ["Ideas prácticas para aplicar", "Aprendizajes concretos por episodio.", "/recursos/podcasts", "learning", "blue"],
      ["Disponible en las principales plataformas", "Referencias para escuchar donde prefieras.", "/recursos/podcasts", "analytics", "blue"],
    ]),
    categories: [],
    featured: { type: "EPISODIO DESTACADO", title: "IA generativa en las organizaciones: lecciones y próximos pasos", description: "Invitado: Diego Noriega · Head of AI Transformation.", href: "/recursos/podcasts", icon: "play", theme: "blue", meta: ["T3 · EP 12", "42:18"], ctaLabel: "Escuchar episodio" },
    programs: categories([
      ["Big Talent Conversations", "Conversaciones con líderes sobre el futuro del trabajo, la tecnología y el talento.", "/recursos/podcasts", "support", "blue"],
      ["Radar de IA", "Análisis y tendencias sobre inteligencia artificial y su impacto en los negocios.", "/recursos/podcasts", "chart", "violet"],
      ["Talento en Transformación", "Estrategias y prácticas para desarrollar personas y crear organizaciones del futuro.", "/recursos/podcasts", "talent", "cyan"],
      ["Ideas en 10 minutos", "Reflexiones breves y accionables para aplicar de inmediato.", "/recursos/podcasts", "strategy", "orange"],
    ]),
    recent: catalog([
      { type: "T3 · EP 12", title: "IA generativa en las organizaciones: lecciones y próximos pasos", description: "Diego Noriega · Head of AI Transformation", icon: "play", theme: "blue", meta: ["15 may 2024", "42:18"] },
      { type: "T3 · EP 11", title: "People Analytics: de los datos a las decisiones", description: "María Alejandra López · People Analytics Lead", icon: "play", theme: "violet", meta: ["8 may 2024", "36:40"] },
      { type: "T3 · EP 10", title: "Liderazgo híbrido: cómo inspirar en entornos cambiantes", description: "Jorge Villanueva · Leadership Advisor", icon: "play", theme: "cyan", meta: ["1 may 2024", "33:12"] },
      { type: "T3 · EP 09", title: "Automatización inteligente: casos reales y aprendizajes", description: "Ana Cubas · COO", icon: "play", theme: "orange", meta: ["24 abr 2024", "29:55"] },
      { type: "T3 · EP 08", title: "El futuro del trabajo ya llegó, ¿estamos listos?", description: "Aldo Jara Pisconti · Host", icon: "play", theme: "blue", meta: ["17 abr 2024", "28:31"] },
    ], "/recursos/podcasts", "Escuchar"),
    filters: [
      { label: "Temas", key: "topic", options: ["IA y Tecnología", "Talento y Cultura", "Liderazgo", "People Analytics", "Transformación Digital", "Productividad"] },
      { label: "Duración", key: "duration", options: ["Menos de 20 min", "20 a 40 min", "Más de 40 min"] },
      { label: "Nivel", key: "level", options: ["Básico", "Intermedio", "Avanzado"] },
    ],
    newsletter: { title: "No te pierdas ningún episodio", description: "Suscríbete a nuestro podcast y recibe los nuevos episodios directamente en tu correo.", buttonLabel: "Suscribirme" },
    metadata: { title: "Podcasts", description: "Conversaciones con expertos y líderes sobre talento, inteligencia artificial, transformación y negocio." },
  },
  {
    ...resourceNavItems[4],
    breadcrumbLabel: "Cursos y rutas",
    eyebrow: "CURSOS Y RUTAS",
    title: "Aprende. Aplica. Transforma.",
    highlightedTerms: ["Transforma"],
    description: "Rutas de aprendizaje diseñadas para desarrollar capacidades clave en talento, IA y negocio.",
    primaryCta: { label: "Explorar cursos", href: "#catalogo" },
    visual: "learning",
    benefits: categories([
      ["Contenido práctico y accionable", "Aplicación directa a retos de negocio.", courses, "video", "blue"],
      ["Aprendizaje por niveles", "Desde fundamentos hasta avanzado.", courses, "analytics", "blue"],
      ["Certificados de finalización", "Reconocimiento visual al completar.", courses, "shield", "blue"],
      ["Rutas para individuos y equipos", "Programas personales o corporativos.", courses, "community", "blue"],
    ]),
    tabs: categories([
      ["Todos los cursos", "", courses, "course", "blue"],
      ["Rutas de aprendizaje", "", courses, "route", "blue"],
      ["Fundamentos", "", courses, "guide", "blue"],
      ["Intermedio", "", courses, "analytics", "blue"],
      ["Avanzado", "", courses, "rocket", "blue"],
      ["Para líderes", "", courses, "strategy", "blue"],
      ["Para equipos", "", courses, "community", "blue"],
    ]),
    categories: [],
    featured: { ...overviewFeatured, href: courses },
    filters: [
      { label: "Tema", key: "topic", options: ["Inteligencia artificial", "Talento y liderazgo", "Analítica y datos", "Marketing y ventas", "Operaciones"] },
      { label: "Nivel", key: "level", options: ["Básico", "Intermedio", "Avanzado"] },
      { label: "Duración", key: "duration", options: ["Menos de 2 horas", "2 a 6 horas", "Más de 6 horas"] },
      { label: "Tipo", key: "type", options: ["Curso", "Ruta de aprendizaje", "Taller"] },
      { label: "Idioma", key: "access", options: ["Español", "Inglés"] },
    ],
    catalog: catalog([
      { type: "RUTA", title: "Fundamentos de IA para profesionales", description: "Desde los conceptos básicos hasta las aplicaciones prácticas.", icon: "ai", theme: "violet", meta: ["6 cursos", "12 horas", "Intermedio"], tags: ["Inteligencia artificial", "Ruta de aprendizaje", "Intermedio", "Más de 6 horas", "Español"] },
      { type: "RUTA", title: "Liderazgo y gestión del talento en la era digital", description: "Habilidades para liderar equipos de alto desempeño.", icon: "talent", theme: "cyan", meta: ["5 cursos", "10 horas", "Intermedio"], tags: ["Talento y liderazgo", "Ruta de aprendizaje", "Intermedio", "Más de 6 horas", "Español"] },
      { type: "RUTA", title: "Analítica de datos para la toma de decisiones", description: "De los datos a insights accionables para tu negocio.", icon: "analytics", theme: "blue", meta: ["7 cursos", "14 horas", "Avanzado"], tags: ["Analítica y datos", "Ruta de aprendizaje", "Avanzado", "Más de 6 horas", "Español"] },
      { type: "RUTA", title: "Transformación de procesos con IA y automatización", description: "Rediseña procesos y aumenta la eficiencia con tecnología.", icon: "process", theme: "amber", meta: ["6 cursos", "11 horas", "Intermedio"], tags: ["Operaciones", "Ruta de aprendizaje", "Intermedio", "Más de 6 horas", "Español"] },
      { type: "CURSO", title: "Introducción a la Inteligencia Artificial", description: "Comprende los conceptos clave de la IA y su impacto.", icon: "ai", theme: "violet", meta: ["4.8", "2.5 horas", "Básico"], tags: ["Inteligencia artificial", "Curso", "Básico", "2 a 6 horas", "Español"] },
      { type: "CURSO", title: "People Analytics: de datos a decisiones", description: "Aprende a usar datos para mejorar talento y cultura.", icon: "talent", theme: "cyan", meta: ["4.7", "3 horas", "Intermedio"], tags: ["Talento y liderazgo", "Curso", "Intermedio", "2 a 6 horas", "Español"] },
    ], courses, "Ver más"),
    finalCta: { title: "¿Eres parte de un equipo?", description: "Tenemos programas de formación corporativa diseñados a la medida de tu organización.", primaryCta: { label: "Conocer opciones para empresas", href: "/talento/formacion-corporativa" }, secondaryCta: { label: "Más información", href: "/agenda" }, icon: "course" },
    newsletter: { title: "Recibe recomendaciones de cursos y rutas cada semana", description: "Contenido práctico para seguir aprendiendo y aplicando.", buttonLabel: "Suscribirme" },
    metadata: { title: "Cursos y rutas", description: "Cursos y rutas de aprendizaje para desarrollar capacidades en inteligencia artificial, talento, analítica y negocio." },
  },
  {
    ...resourceNavItems[5],
    breadcrumbLabel: "Herramientas",
    eyebrow: "HERRAMIENTAS",
    title: "Herramientas para diagnosticar, decidir y acelerar la acción",
    highlightedTerms: ["Herramientas", "acción"],
    description: "Explora herramientas interactivas, diagnósticos, calculadoras, plantillas y recursos prácticos diseñados para ayudarte a convertir el conocimiento en decisiones y resultados medibles.",
    primaryCta: { label: "Explorar herramientas", href: "#catalogo" },
    secondaryCta: { label: "Ver destacadas", href: "#destacada" },
    visual: "tools",
    metrics: [
      { label: "Herramientas disponibles", value: "28+", icon: "calendar" },
      { label: "Diagnósticos", value: "8", icon: "strategy" },
      { label: "Calculadoras", value: "10", icon: "analytics" },
      { label: "Dashboards", value: "6", icon: "chart" },
      { label: "Plantillas", value: "4", icon: "guide" },
    ],
    categories: categories([
      ["Diagnósticos", "Evalúa madurez, capacidades y brechas clave.", "/recursos/herramientas", "list-check", "violet"],
      ["Calculadoras", "Estima ROI, ahorro, impacto y eficiencia.", "/recursos/herramientas", "analytics", "green"],
      ["Dashboards", "Indicadores y visualizaciones listas para usar.", "/recursos/herramientas", "chart", "blue"],
      ["Prompt kits", "Prompts listos para aplicar en IA generativa.", "/recursos/herramientas", "ai", "violet"],
      ["Planificadores", "Herramientas para planear proyectos y acciones.", "/recursos/herramientas", "calendar", "orange"],
      ["Comparadores", "Compara herramientas, opciones y enfoques.", "/recursos/herramientas", "gauge", "cyan"],
    ]),
    featured: { type: "DIAGNÓSTICO", title: "Diagnóstico de madurez en IA", description: "Evalúa el nivel de madurez de tu organización en cinco dimensiones clave y recibe recomendaciones priorizadas para avanzar.", href: "/recursos/herramientas", icon: "strategy", theme: "blue", meta: ["Interactividad alta", "5 dimensiones", "30 min", "Online", "Gratuito"], ctaLabel: "Usar herramienta" },
    filters: [
      { label: "Tema", key: "topic", options: ["IA y automatización", "Estrategia y negocio", "Datos y analítica", "Personas y talento", "Operaciones"] },
      { label: "Tipo", key: "type", options: ["Diagnóstico", "Calculadora", "Dashboard", "Planificador", "Comparador", "Prompt kit"] },
      { label: "Nivel", key: "level", options: ["Básico", "Intermedio", "Avanzado"] },
      { label: "Acceso", key: "access", options: ["Gratuito", "Interactivo", "Descargable"] },
    ],
    catalog: catalog([
      { type: "CALCULADORA", title: "Calculadora de ROI de IA", description: "Estima retorno de inversión potencial de tus iniciativas de IA.", icon: "analytics", theme: "green", meta: ["10 min", "Intermedio"], tags: ["IA y automatización", "Calculadora", "Intermedio", "Interactivo"] },
      { type: "PLANIFICADOR", title: "Matriz de priorización de casos de uso", description: "Prioriza tus casos según impacto, esfuerzo y viabilidad.", icon: "strategy", theme: "orange", meta: ["15 min", "Básico"], tags: ["Estrategia y negocio", "Planificador", "Básico", "Interactivo"] },
      { type: "DASHBOARD", title: "Dashboard KPI para líderes", description: "Visualiza indicadores clave de IA y transformación en tiempo real.", icon: "chart", theme: "blue", meta: ["Interactivo", "Intermedio"], tags: ["Datos y analítica", "Dashboard", "Intermedio", "Interactivo"] },
      { type: "DIAGNÓSTICO", title: "Diagnóstico de transformación digital", description: "Evalúa madurez digital y recibe un plan de acción recomendado.", icon: "automation", theme: "violet", meta: ["20 min", "Intermedio"], tags: ["Operaciones", "Diagnóstico", "Intermedio", "Gratuito"] },
      { type: "COMPARADOR", title: "Comparador de herramientas de IA", description: "Compara herramientas líderes según funcionalidad y usabilidad.", icon: "gauge", theme: "cyan", meta: ["10 min", "Básico"], tags: ["IA y automatización", "Comparador", "Básico", "Interactivo"] },
      { type: "PLANIFICADOR", title: "Planner de implementación", description: "Planifica fases, hitos y responsables de tu proyecto de IA.", icon: "route", theme: "violet", meta: ["25 min", "Intermedio"], tags: ["Estrategia y negocio", "Planificador", "Intermedio", "Descargable"] },
    ], "/recursos/herramientas", "Usar herramienta"),
    collections: categories([
      ["Calculadora de ROI de IA", "Usada por 1.250+ profesionales", "/recursos/herramientas", "analytics", "green"],
      ["Diagnóstico de madurez en IA", "Usada por 980+ profesionales", "/recursos/herramientas", "ai", "violet"],
      ["Dashboard KPI para líderes", "Usada por 760+ profesionales", "/recursos/herramientas", "chart", "blue"],
      ["Matriz de priorización de casos de uso", "Usada por 620+ profesionales", "/recursos/herramientas", "calendar", "orange"],
    ]),
    interests: categories([
      ["Priorizar", "Enfócate en lo que genera mayor impacto.", "/recursos/herramientas", "strategy", "blue"],
      ["Medir", "Evalúa resultados e impacto de tus iniciativas.", "/recursos/herramientas", "analytics", "blue"],
      ["Decidir", "Toma decisiones basadas en datos y evidencia.", "/recursos/herramientas", "spark", "amber"],
      ["Implementar", "Planifica, ejecuta y acelera la acción.", "/recursos/herramientas", "rocket", "cyan"],
    ]),
    finalCta: { title: "¿Necesitas ayuda para aplicar estas herramientas?", description: "Te ayudo a elegir las herramientas adecuadas y aplicarlas a tus retos reales.", primaryCta: { label: "Agenda una sesión", href: agenda }, secondaryCta: { label: "Explorar servicios", href: "/talento" }, icon: "domain" },
    metadata: { title: "Herramientas", description: "Diagnósticos, calculadoras, dashboards, prompt kits, planificadores y comparadores para tomar mejores decisiones." },
  },
];

export function getResourcePage(slug: string) {
  return resourcePages.find((page) => page.slug === slug);
}

export const overviewMetrics = [
  { label: "Recursos publicados", value: "248+", icon: "guide" as const },
  { label: "Horas de contenido", value: "180+", icon: "calendar" as const },
  { label: "Descargas totales", value: "12.4K", icon: "arrow-right" as const },
  { label: "Nuevos episodios", value: "24", icon: "analytics" as const },
];

export const overviewData = {
  formats: overviewFormats,
  featured: overviewFeatured,
  goals: overviewGoals,
  collections: editorialCollections,
  latestBlog,
  mixedMedia,
  downloadableTools,
};
