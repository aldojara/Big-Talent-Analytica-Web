import type { TalentSubpageConfig } from "@/types/talent";

const agenda = "/agenda";
const services = "/talento";

export const talentSubpages: TalentSubpageConfig[] = [
  {
    slug: "liderazgo-y-cultura",
    title: "Liderazgo y cultura",
    description:
      "Desarrollo de liderazgo, cultura organizacional, comunicación, equipos y gestión del cambio.",
    breadcrumb: "Liderazgo y cultura",
    metadata: {
      title: "Liderazgo y cultura | Big Talent Analytica",
      description:
        "Desarrollo de liderazgo, cultura organizacional, comunicación, equipos y gestión del cambio.",
    },
    hero: {
      eyebrow: "LIDERAZGO · CULTURA · TRANSFORMACIÓN",
      title: "Liderazgo que moviliza personas y cultura que sostiene el cambio",
      highlightedText: "personas y cultura",
      description:
        "Acompaño a líderes y organizaciones a desarrollar capacidades, alinear propósitos, fortalecer la comunicación y construir culturas de confianza que hacen posible la transformación en entornos cambiantes.",
      theme: "light",
      visual: "leadership",
      primaryCta: { label: "Explorar capacidades", href: "#capacidades" },
      secondaryCta: { label: "Conversemos", href: agenda },
      chips: [
        { title: "Liderazgo", description: "Dirección con propósito.", icon: "mentor" },
        { title: "Cultura organizacional", description: "Hábitos compartidos.", icon: "community" },
        { title: "Comunicación", description: "Claridad e influencia.", icon: "support" },
        { title: "Cambio", description: "Adopción sostenible.", icon: "process" },
        { title: "Equipos", description: "Colaboración real.", icon: "talent" },
        { title: "Transformación", description: "Evolución continua.", icon: "spark" },
      ],
    },
    challenges: {
      title: "Retos habituales en liderazgo y cultura",
      items: [
        { title: "Equipos desconectados", description: "Falta de cohesión y propósito compartido que limita el rendimiento y la colaboración.", icon: "community" },
        { title: "Comunicación fragmentada", description: "Mensajes inconsistentes y poca claridad que generan ruido y desalineación.", icon: "support" },
        { title: "Cambio sin adopción", description: "Iniciativas que no se adoptan porque las personas no entienden ni participan.", icon: "process" },
        { title: "Cultura que no acompaña la estrategia", description: "Valores y comportamientos que no sostienen los objetivos del negocio.", icon: "domain" },
      ],
    },
    offers: {
      title: "Capacidades que se desarrollan",
      items: [
        { title: "Liderazgo consciente", description: "Desarrolla autoconciencia, propósito y coherencia para liderar con impacto y autenticidad.", icon: "mentor", href: agenda },
        { title: "Comunicación e influencia", description: "Comunica con claridad, escucha activamente e influye para generar alineación y confianza.", icon: "support", href: agenda },
        { title: "Gestión del cambio", description: "Lidera transiciones con método, reduciendo resistencias y acelerando la adopción.", icon: "process", href: agenda },
        { title: "Cultura colaborativa", description: "Impulsa entornos de confianza, colaboración y diversidad que potencian resultados.", icon: "community", href: agenda },
        { title: "Desarrollo de equipos", description: "Fortalece capacidades, roles y confianza para que los equipos alcancen su máximo potencial.", icon: "talent", href: agenda },
        { title: "Alineación estratégica", description: "Conecta visión, prioridades y comportamientos para ejecutar la estrategia con foco.", icon: "strategy", href: agenda },
      ],
    },
    process: {
      title: "Cómo abordo el liderazgo y la cultura",
      variant: "line",
      items: [
        { step: "1", title: "Diagnóstico", description: "Comprendo el contexto, la cultura y los desafíos clave.", icon: "search" },
        { step: "2", title: "Diseño", description: "Diseño soluciones a la medida de los objetivos y las personas.", icon: "pencil" },
        { step: "3", title: "Activación", description: "Movilizo a los líderes y equipos para generar compromiso.", icon: "play" },
        { step: "4", title: "Aplicación", description: "Aplicamos herramientas y prácticas en el día a día.", icon: "rocket" },
        { step: "5", title: "Evolución", description: "Medimos impacto, aprendemos y evolucionamos juntos.", icon: "analytics" },
      ],
    },
    solutions: {
      title: "Programas y servicios relacionados",
      items: [
        { title: "Mentoría para líderes", description: "Acompañamiento 1:1 para fortalecer liderazgo, tomar mejores decisiones y generar impacto sostenible.", icon: "mentor", href: "/talento/mentoria-profesional" },
        { title: "Workshops y formación corporativa", description: "Experiencias prácticas y participativas para desarrollar habilidades clave en tus equipos.", icon: "learning", href: "/talento/formacion-corporativa" },
        { title: "Cultura y transformación organizacional", description: "Diseño e implementación de iniciativas que alinean cultura, personas y estrategia.", icon: "domain", href: "/talento/transformacion-organizacional" },
      ],
    },
    scenarios: {
      title: "Escenarios de aplicación",
      items: [
        { title: "Equipos en crecimiento", description: "Integra nuevas personas, roles y procesos sin perder cohesión ni foco.", icon: "chart" },
        { title: "Procesos de cambio organizacional", description: "Acelera la adopción y reduce la resistencia en cambios complejos.", icon: "process" },
        { title: "Liderazgo en entornos tecnológicos", description: "Desarrolla liderazgo adaptativo para equipos ágiles y multidisciplinarios.", icon: "ai" },
      ],
    },
    relatedContent: {
      title: "Contenidos relacionados",
      items: [
        { tag: "GUÍA", title: "Guía: Liderar en tiempos de cambio", description: "Principios y prácticas para liderar con claridad e inspiración en la incertidumbre.", icon: "guide", href: "/recursos/guias-y-plantillas" },
        { tag: "CURSO", title: "Curso: Liderazgo y cultura para equipos modernos", description: "Curso práctico para crear culturas de confianza y alto desempeño.", icon: "course", href: "/recursos/cursos-y-rutas" },
        { tag: "ARTÍCULO", title: "Artículo: Cómo alinear cultura y estrategia", description: "Claves para conectar valores, comportamientos y objetivos del negocio.", icon: "strategy", href: "/recursos" },
      ],
    },
    finalCta: {
      title: "El liderazgo no se impone. Se construye.",
      description:
        "Culturas sólidas y líderes capaces no solo mejoran los resultados. Hacen posible que la transformación sea sostenible en el tiempo.",
      icon: "mentor",
      primaryCta: { label: "Conversemos", href: agenda },
      secondaryCta: { label: "Explorar Talento", href: services },
    },
  },
  {
    slug: "upskilling-y-reskilling",
    title: "Upskilling y reskilling",
    description:
      "Rutas de aprendizaje para desarrollar nuevas competencias y transformar talento en capacidad real.",
    breadcrumb: "Upskilling y reskilling",
    metadata: {
      title: "Upskilling y reskilling | Big Talent Analytica",
      description:
        "Rutas de aprendizaje para desarrollar nuevas competencias y transformar talento en capacidad real.",
    },
    hero: {
      title: "Upskilling y Reskilling para transformar talento en capacidad real",
      highlightedText: "capacidad real",
      description:
        "Programas, rutas y experiencias de aprendizaje para desarrollar nuevas competencias, acelerar la adopción de IA y fortalecer la evolución profesional de personas y equipos.",
      theme: "light",
      visual: "learning",
      primaryCta: { label: "Explorar rutas", href: "#rutas" },
      secondaryCta: { label: "Solicitar programa", href: agenda },
      featureStrip: [
        { title: "Aprendizaje aplicado", description: "Práctica y casos.", icon: "learning" },
        { title: "Enfoque por roles", description: "Rutas por perfil.", icon: "talent" },
        { title: "Impacto medible", description: "Evidencia de avance.", icon: "analytics" },
        { title: "Formato flexible", description: "Modalidades adaptables.", icon: "calendar" },
      ],
    },
    offers: {
      title: "¿Qué encontrarás aquí?",
      items: [
        { title: "Rutas de aprendizaje", description: "Trayectos estructurados para desarrollar competencias técnicas, analíticas y de negocio.", icon: "course" },
        { title: "Programas corporativos", description: "Diseño de iniciativas para equipos, áreas y organizaciones en transformación.", icon: "community" },
        { title: "IA para el talento", description: "Contenidos y prácticas para integrar inteligencia artificial en el trabajo real.", icon: "ai" },
        { title: "Mentoría y acompañamiento", description: "Espacios guiados para traducir conocimiento en decisiones y ejecución.", icon: "mentor" },
      ],
    },
    solutions: {
      title: "Rutas destacadas",
      items: [
        { tag: "Ruta", title: "IA para líderes", description: "Desarrolla visión, criterio y habilidades para liderar con IA y datos.", icon: "ai", href: agenda },
        { tag: "Programa", title: "Analítica aplicada al negocio", description: "Convierte datos en decisiones que impulsan resultados.", icon: "analytics", href: agenda },
        { tag: "Workshop", title: "Reskilling digital para equipos", description: "Actualiza competencias clave para entornos digitales y ágiles.", icon: "consulting", href: agenda },
        { tag: "Mentoría", title: "Liderazgo para la transformación", description: "Fortalece tu liderazgo para movilizar personas y generar impacto.", icon: "mentor", href: agenda },
      ],
    },
    audiences: {
      title: "¿Para quién es?",
      items: [
        { title: "Profesionales en crecimiento", description: "Personas que buscan desarrollar nuevas habilidades y acelerar su evolución profesional.", icon: "mentor" },
        { title: "Líderes y mandos medios", description: "Líderes que quieren tomar mejores decisiones y potenciar el talento de sus equipos.", icon: "community" },
        { title: "RR. HH. y desarrollo organizacional", description: "Equipos que diseñan e impulsan estrategias de aprendizaje y transformación del talento.", icon: "talent" },
        { title: "Equipos en transformación", description: "Equipos que necesitan adaptarse, colaborar mejor y generar más valor en entornos cambiantes.", icon: "network" },
      ],
    },
    darkPanel: {
      title: "Enfoque práctico",
      items: [
        { title: "Competencias alineadas al negocio", description: "Aprendizaje conectado a prioridades reales.", icon: "strategy" },
        { title: "Aprendizaje por aplicación", description: "Prácticas que se trasladan al trabajo.", icon: "learning" },
        { title: "Casos y herramientas reales", description: "Experiencias con situaciones del día a día.", icon: "briefcase" },
        { title: "Desarrollo continuo y medible", description: "Seguimiento para mejorar cada ciclo.", icon: "analytics" },
      ],
    },
    process: {
      title: "Cómo trabajamos",
      subtitle:
        "Cada experiencia combina criterio estratégico, contenidos accionables y acompañamiento para convertir aprendizaje en resultados.",
      variant: "line",
      items: [
        { step: "1", title: "Diagnóstico", description: "Entendemos tu contexto, desafíos y brechas de competencias.", icon: "search" },
        { step: "2", title: "Diseño de ruta", description: "Diseñamos experiencias y rutas de aprendizaje personalizadas.", icon: "route" },
        { step: "3", title: "Formación", description: "Entregamos contenidos y experiencias prácticas de alto impacto.", icon: "course" },
        { step: "4", title: "Aplicación", description: "Aplicamos lo aprendido en proyectos, retos y casos reales.", icon: "rocket" },
        { step: "5", title: "Medición de impacto", description: "Medimos resultados, aprendizaje y retorno para seguir mejorando.", icon: "analytics" },
      ],
    },
    formats: {
      title: "Formatos disponibles",
      subtitle: "Modalidades flexibles para aprender y aplicar en cualquier momento y lugar.",
      items: [
        { title: "Workshops", description: "Sesiones aplicadas.", icon: "consulting" },
        { title: "Programas in-company", description: "Rutas para equipos.", icon: "domain" },
        { title: "Mentoría", description: "Acompañamiento guiado.", icon: "mentor" },
        { title: "Cursos y rutas", description: "Aprendizaje estructurado.", icon: "course" },
        { title: "Webinars", description: "Sesiones digitales.", icon: "video" },
        { title: "Recursos descargables", description: "Guías y plantillas.", icon: "guide" },
      ],
    },
    finalCta: {
      title: "Impulsa el desarrollo de tu equipo",
      description:
        "Diseñemos una experiencia de upskilling o reskilling alineada con tus objetivos, tu contexto y tu ritmo de transformación.",
      icon: "chart",
      primaryCta: { label: "Agenda una sesión", href: agenda },
      secondaryCta: { label: "Ver servicios", href: services },
    },
  },
  {
    slug: "talento-e-ia",
    title: "Talento e IA",
    description:
      "Estrategia, desarrollo de capacidades y adopción responsable de inteligencia artificial.",
    breadcrumb: "Talento e IA",
    metadata: {
      title: "Talento e IA | Big Talent Analytica",
      description:
        "Estrategia, desarrollo de capacidades y adopción responsable de inteligencia artificial.",
    },
    hero: {
      title: "Talento e IA: personas y tecnología que potencian resultados",
      highlightedText: "potencian resultados",
      description:
        "La inteligencia artificial amplifica el talento humano. Nuestro enfoque integra estrategia, desarrollo de capacidades y adopción responsable de IA para crear ventajas competitivas sostenibles.",
      theme: "dark",
      visual: "talent-ai",
      primaryCta: { label: "Explorar casos de uso", href: "#casos" },
      secondaryCta: { label: "Agendar una sesión", href: agenda },
    },
    process: {
      title: "Cómo conectamos talento e IA",
      variant: "cards",
      items: [
        { step: "1", title: "Diagnóstico", description: "Evaluamos madurez, oportunidades y brechas de talento y datos.", icon: "search" },
        { step: "2", title: "Estrategia", description: "Diseñamos una hoja de ruta alineada al negocio y a las personas.", icon: "strategy" },
        { step: "3", title: "Desarrollo", description: "Upskilling y reskilling para nuevas habilidades en IA y analítica.", icon: "mentor" },
        { step: "4", title: "Implementación", description: "Adoptamos soluciones y automatizamos procesos clave.", icon: "automation" },
        { step: "5", title: "Adopción", description: "Gestionamos el cambio y fomentamos una cultura data & AI.", icon: "community" },
        { step: "6", title: "Impacto", description: "Medimos resultados y escalamos lo que genera valor.", icon: "analytics" },
      ],
    },
    offers: {
      title: "Áreas de impacto",
      items: [
        { title: "Productividad", description: "Automatización inteligente de tareas y procesos.", icon: "spark" },
        { title: "Toma de decisiones", description: "Decisiones más rápidas y precisas con datos e IA.", icon: "analytics" },
        { title: "Experiencia", description: "Personalización y mejor experiencia para clientes y colaboradores.", icon: "service" },
        { title: "Innovación", description: "Nuevos productos, servicios y modelos de negocio.", icon: "learning" },
        { title: "Talento", description: "Equipos más capacitados, motivados y preparados para el futuro.", icon: "mentor" },
        { title: "Eficiencia", description: "Optimización de costos y uso inteligente de recursos.", icon: "automation" },
      ],
    },
    solutions: {
      title: "Casos de uso destacados",
      items: [
        { tag: "RR. HH. & Talento", title: "IA para selección y desarrollo de talento", description: "Identifica el mejor talento, predice potencial y personaliza planes de desarrollo.", icon: "talent", href: "/casos-de-uso/talento-y-recursos-humanos" },
        { tag: "Operaciones", title: "Automatización inteligente de procesos", description: "Reduce tiempos y errores con IA aplicada a procesos críticos del negocio.", icon: "automation", href: "/casos-de-uso/supply-chain-y-operaciones" },
        { tag: "Ventas & Marketing", title: "IA para conocer y anticipar al cliente", description: "Segmentación inteligente, predicción de demanda y recomendaciones personalizadas.", icon: "sales", href: "/casos-de-uso/marketing-y-ventas" },
        { tag: "Finanzas", title: "Analítica e IA para decisiones financieras", description: "Pronósticos más precisos, detección de anomalías y optimización de inversiones.", icon: "money", href: "/casos-de-uso/finanzas-y-rendimiento" },
      ],
    },
    finalCta: {
      title: "Conectemos talento e IA para transformar tu organización",
      description:
        "Te ayudo a diseñar e implementar soluciones prácticas que generen impacto real y sostenible.",
      icon: "network",
      primaryCta: { label: "Agendar una sesión", href: agenda },
    },
  },
  {
    slug: "formacion-corporativa",
    title: "Formación corporativa",
    description:
      "Programas de formación corporativa orientados a capacidades, adopción y resultados de negocio.",
    breadcrumb: "Formación corporativa",
    metadata: {
      title: "Formación corporativa | Big Talent Analytica",
      description:
        "Programas de formación corporativa orientados a capacidades, adopción y resultados de negocio.",
    },
    hero: {
      title: "Formación corporativa que convierte aprendizaje en resultados",
      highlightedText: "aprendizaje en resultados",
      description:
        "Diseñamos programas formativos para equipos y organizaciones que necesitan desarrollar capacidades, acelerar la adopción de nuevas herramientas y traducir el conocimiento en ejecución real.",
      theme: "dark",
      visual: "training",
      primaryCta: { label: "Explorar programas", href: "#programas" },
      secondaryCta: { label: "Solicitar propuesta", href: agenda },
      featureStrip: [
        { title: "Aprendizaje aplicado", description: "Formación práctica orientada a resolver desafíos reales.", icon: "learning" },
        { title: "Diseño a medida", description: "Programas personalizados según objetivos y contexto.", icon: "process" },
        { title: "Medición de impacto", description: "Evaluamos resultados y transferencia al negocio.", icon: "analytics" },
        { title: "Formatos flexibles", description: "Modalidades y duraciones que se adaptan a tu organización.", icon: "calendar" },
      ],
    },
    offers: {
      title: "¿Qué ofrecemos?",
      items: [
        { title: "Programas in-company", description: "Diseñamos e impartimos programas a medida dentro de tu organización.", icon: "community" },
        { title: "Academias corporativas", description: "Creamos academias para desarrollar habilidades clave de forma continua y escalable.", icon: "course" },
        { title: "Workshops ejecutivos", description: "Sesiones intensivas para abordar temas estratégicos y generar planes de acción.", icon: "consulting" },
        { title: "Escuelas internas de liderazgo", description: "Desarrollamos líderes capaces de inspirar, gestionar equipos y generar impacto sostenible.", icon: "shield" },
      ],
    },
    solutions: {
      title: "Soluciones formativas",
      items: [
        { tag: "IA", title: "IA y productividad para equipos", description: "Aprende a usar herramientas de IA para automatizar tareas, mejorar procesos y ganar tiempo.", icon: "ai", href: agenda },
        { tag: "Analítica", title: "Analítica aplicada para negocio", description: "Convierte datos en decisiones con modelos, visualizaciones y métricas que impulsan resultados.", icon: "analytics", href: agenda },
        { tag: "Liderazgo", title: "Liderazgo en entornos de cambio", description: "Fortalece habilidades para liderar equipos, gestionar el cambio y construir culturas adaptativas.", icon: "mentor", href: agenda },
        { tag: "Upskilling", title: "Upskilling funcional por áreas", description: "Programas por áreas funcionales para fortalecer capacidades y elevar el rendimiento.", icon: "chart", href: agenda },
      ],
    },
    audiences: {
      title: "¿Para quién es?",
      items: [
        { title: "RR. HH. y desarrollo", description: "Potencia el desarrollo del talento y crea programas que generen impacto medible.", icon: "talent" },
        { title: "Líderes y mandos medios", description: "Adquiere herramientas para gestionar equipos, tomar decisiones y liderar con propósito.", icon: "mentor" },
        { title: "Equipos comerciales y operativos", description: "Mejora habilidades clave para la ejecución, la colaboración y el logro de objetivos.", icon: "community" },
        { title: "Organizaciones en transformación", description: "Acelera la adopción de nuevas formas de trabajo, tecnologías y modelos de negocio.", icon: "domain" },
      ],
    },
    darkPanel: {
      title: "Enfoque corporativo",
      items: [
        { title: "Diagnóstico de necesidades", description: "Identificamos brechas y prioridades de aprendizaje.", icon: "search" },
        { title: "Diseño alineado al negocio", description: "Diseñamos soluciones formativas conectadas a tus objetivos.", icon: "strategy" },
        { title: "Aprendizaje por aplicación", description: "Metodologías prácticas que impulsan la transferencia real.", icon: "learning" },
        { title: "Seguimiento y medición", description: "Evaluamos impacto y ajustamos para lograr resultados.", icon: "analytics" },
      ],
    },
    process: {
      title: "Cómo trabajamos",
      variant: "line",
      items: [
        { step: "1", title: "Diagnóstico", description: "Entendemos tu contexto, desafíos y objetivos.", icon: "search" },
        { step: "2", title: "Diseño", description: "Creamos el programa formativo a la medida de tu organización.", icon: "pencil" },
        { step: "3", title: "Facilitación", description: "Impartimos con expertos y metodologías efectivas.", icon: "mentor" },
        { step: "4", title: "Aplicación", description: "Acompañamos la transferencia al trabajo diario.", icon: "rocket" },
        { step: "5", title: "Medición", description: "Evaluamos resultados e impacto en el negocio.", icon: "analytics" },
      ],
    },
    formats: {
      title: "Formatos disponibles",
      items: [
        { title: "Workshops", description: "Sesiones prácticas.", icon: "community" },
        { title: "Programas in-company", description: "Programas a medida.", icon: "domain" },
        { title: "Bootcamps", description: "Aprendizaje intensivo.", icon: "ai" },
        { title: "Mentoría para líderes", description: "Acompañamiento ejecutivo.", icon: "mentor" },
        { title: "Webinars", description: "Sesiones virtuales.", icon: "video" },
        { title: "Recursos descargables", description: "Material de apoyo.", icon: "guide" },
      ],
    },
    finalCta: {
      title: "Impulsa el aprendizaje estratégico de tu organización",
      description:
        "Conviértete en una organización que aprende, se adapta y genera resultados sostenibles.",
      icon: "course",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      secondaryCta: { label: "Ver servicios", href: services },
    },
  },
  {
    slug: "mentoria-profesional",
    title: "Mentoría profesional",
    description:
      "Mentoría para profesionales, líderes, especialistas y personas en transición profesional.",
    breadcrumb: "Mentoría profesional",
    metadata: {
      title: "Mentoría profesional | Big Talent Analytica",
      description:
        "Mentoría para profesionales, líderes, especialistas y personas en transición profesional.",
    },
    hero: {
      title: "Mentoría profesional que acelera crecimiento y decisiones de carrera",
      highlightedText: "crecimiento y decisiones de carrera",
      description:
        "Acompañamos a líderes, especialistas y profesionales en momentos clave de desarrollo para fortalecer su perfil, ampliar perspectiva y traducir objetivos en un plan de acción concreto.",
      theme: "dark",
      visual: "mentoring",
      primaryCta: { label: "Explorar mentorías", href: "#mentorias" },
      secondaryCta: { label: "Solicitar sesión", href: agenda },
      featureStrip: [
        { title: "Acompañamiento personalizado", description: "Mentorías centradas en tus metas, contexto y etapa profesional.", icon: "mentor" },
        { title: "Experiencia aplicada", description: "Orientación práctica basada en trayectoria real y casos concretos.", icon: "shield" },
        { title: "Desarrollo estratégico", description: "Fortalecemos visión, criterio y capacidad de decisión.", icon: "chart" },
        { title: "Flexibilidad de formato", description: "Sesiones adaptadas a disponibilidad, modalidad y ritmo de avance.", icon: "calendar" },
      ],
    },
    offers: {
      title: "¿Qué ofrecemos?",
      items: [
        { title: "Mentoría de carrera", description: "Definimos objetivos, posicionamiento y próximos pasos de crecimiento.", icon: "briefcase" },
        { title: "Mentoría para liderazgo", description: "Acompañamos a líderes en gestión de equipos, influencia y toma de decisiones.", icon: "community" },
        { title: "Mentoría para especialistas", description: "Impulsamos perfiles técnicos o funcionales hacia mayor impacto y visibilidad.", icon: "shield" },
        { title: "Mentoría para transición profesional", description: "Apoyamos cambios de rol, reinvención y nuevos desafíos laborales.", icon: "process" },
      ],
    },
    solutions: {
      title: "Soluciones de mentoría",
      items: [
        { tag: "Carrera", title: "Claridad de carrera y crecimiento", description: "Ordena tus objetivos, fortalece tu propuesta de valor y traza una ruta profesional clara.", icon: "briefcase", href: agenda },
        { tag: "Liderazgo", title: "Mentoría para líderes y managers", description: "Desarrolla criterio, comunicación y capacidad para liderar equipos con impacto.", icon: "mentor", href: agenda },
        { tag: "Transición", title: "Cambio de rol y reposicionamiento", description: "Prepárate para asumir nuevos retos, entrevistas, visibilidad y evolución profesional.", icon: "process", href: agenda },
        { tag: "Alto potencial", title: "Aceleración de talento clave", description: "Impulsa perfiles de alto potencial con acompañamiento estratégico y seguimiento.", icon: "chart", href: agenda },
      ],
    },
    audiences: {
      title: "¿Para quién es?",
      items: [
        { title: "Profesionales en crecimiento", description: "Buscan foco, dirección y herramientas para avanzar con mayor confianza.", icon: "route" },
        { title: "Líderes y mandos medios", description: "Necesitan fortalecer su liderazgo, comunicación e influencia.", icon: "community" },
        { title: "Especialistas y expertos", description: "Quieren ampliar impacto, visibilidad y proyección dentro de la organización.", icon: "mentor" },
        { title: "Talento en transición", description: "Están atravesando cambios de rol, promoción o reconversión profesional.", icon: "process" },
      ],
    },
    darkPanel: {
      title: "Enfoque de mentoría",
      items: [
        { title: "Diagnóstico inicial", description: "Identificamos metas, contexto y desafíos prioritarios.", icon: "search" },
        { title: "Ruta personalizada", description: "Diseñamos un plan de desarrollo con foco y acciones concretas.", icon: "route" },
        { title: "Sesiones aplicadas", description: "Trabajamos casos reales, decisiones y situaciones del día a día.", icon: "mentor" },
        { title: "Seguimiento y evolución", description: "Medimos avances, aprendizajes y próximos pasos.", icon: "analytics" },
      ],
    },
    process: {
      title: "Cómo trabajamos",
      variant: "line",
      items: [
        { step: "1", title: "Exploración", description: "Entendemos objetivos, contexto y momento profesional.", icon: "search" },
        { step: "2", title: "Diagnóstico", description: "Priorizamos oportunidades de desarrollo y foco.", icon: "list-check" },
        { step: "3", title: "Mentoría", description: "Realizamos sesiones con herramientas, preguntas y guía práctica.", icon: "support" },
        { step: "4", title: "Aplicación", description: "Trasladamos aprendizajes a decisiones y acciones concretas.", icon: "rocket" },
        { step: "5", title: "Seguimiento", description: "Acompañamos el avance y consolidación del proceso.", icon: "analytics" },
      ],
    },
    formats: {
      title: "Formatos disponibles",
      items: [
        { title: "Sesiones 1:1", description: "Acompañamiento personal.", icon: "support" },
        { title: "Mentoría para líderes", description: "Foco en liderazgo.", icon: "community" },
        { title: "Programas corporativos", description: "Mentoría escalable.", icon: "domain" },
        { title: "Mentoría virtual", description: "Sesiones remotas.", icon: "video" },
        { title: "Mentoría híbrida", description: "Ritmo combinado.", icon: "process" },
        { title: "Recursos de apoyo", description: "Guías y materiales.", icon: "guide" },
      ],
    },
    finalCta: {
      title: "Impulsa el desarrollo estratégico de tu talento",
      description:
        "Convierte la mentoría en una herramienta para crecer, decidir mejor y generar impacto sostenible.",
      icon: "mentor",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      secondaryCta: { label: "Ver servicios", href: services },
    },
  },
  {
    slug: "transformacion-organizacional",
    title: "Transformación organizacional",
    description:
      "Estrategia, cultura, procesos, tecnología y capacidades para convertir el cambio en una ventaja sostenible.",
    breadcrumb: "Transformación organizacional",
    metadata: {
      title: "Transformación organizacional | Big Talent Analytica",
      description:
        "Estrategia, cultura, procesos, tecnología y capacidades para convertir el cambio en una ventaja sostenible.",
    },
    hero: {
      title: "Transformación organizacional",
      highlightedText: "organizacional",
      subtitle: "Convierte el cambio en una ventaja sostenible.",
      description:
        "Acompañamos a organizaciones a evolucionar su estrategia, procesos, cultura y capacidades para adaptarse al cambio, innovar y generar resultados extraordinarios en entornos complejos y dinámicos.",
      theme: "dark",
      visual: "transformation",
      primaryCta: { label: "Explorar enfoque", href: "#enfoque" },
      secondaryCta: { label: "Solicitar diagnóstico", href: agenda },
      featureStrip: [
        { title: "Alineación estratégica", description: "Conectamos la visión con acciones y resultados medibles.", icon: "strategy" },
        { title: "Cultura y personas", description: "Impulsamos culturas adaptativas centradas en el talento.", icon: "community" },
        { title: "Procesos eficientes", description: "Rediseñamos procesos para agilidad y valor continuo.", icon: "process" },
        { title: "Tecnología habilitadora", description: "Integramos tecnología para escalar capacidades y decisiones.", icon: "ai" },
        { title: "Resultados sostenibles", description: "Generamos impacto real y mejora continua.", icon: "analytics" },
      ],
    },
    offers: {
      title: "¿Qué ofrecemos?",
      items: [
        { title: "Estrategia de transformación", description: "Diseñamos hojas de ruta alineadas al negocio y al contexto del mercado.", icon: "strategy" },
        { title: "Gestión del cambio", description: "Preparamos a las personas y líderes para adoptar, sostener y acelerar el cambio.", icon: "community" },
        { title: "Rediseño de procesos", description: "Eliminamos fricciones y optimizamos procesos clave end-to-end.", icon: "process" },
        { title: "Gobierno y KPI", description: "Definimos indicadores, rituales y tableros para gestionar el impacto.", icon: "analytics" },
        { title: "Programas a medida", description: "Soluciones adaptadas a tu industria, madurez y objetivos estratégicos.", icon: "consulting" },
      ],
    },
    process: {
      title: "Nuestro enfoque",
      variant: "line",
      items: [
        { step: "1", title: "Diagnóstico", description: "Entendemos la situación actual, desafíos y oportunidades.", icon: "search" },
        { step: "2", title: "Diseño", description: "Co-creamos la estrategia y el plan de transformación priorizado.", icon: "strategy" },
        { step: "3", title: "Ejecución", description: "Implementamos iniciativas con foco en valor rápido y adopción.", icon: "rocket" },
        { step: "4", title: "Medición", description: "Monitoreamos avances con KPI y ajustamos en tiempo real.", icon: "analytics" },
        { step: "5", title: "Sostenibilidad", description: "Institucionalizamos capacidades y cultura de mejora continua.", icon: "shield" },
      ],
    },
    darkPanel: {
      title: "Resultados que generamos",
      items: [
        { title: "Mayor agilidad y capacidad de adaptación", description: "Equipos preparados para responder mejor al cambio.", icon: "list-check" },
        { title: "Procesos más simples y eficientes", description: "Operaciones con menos fricción y más foco.", icon: "list-check" },
        { title: "Decisiones basadas en datos", description: "Gobierno claro para medir y aprender.", icon: "list-check" },
        { title: "Equipos más comprometidos y preparados", description: "Personas con claridad y participación.", icon: "list-check" },
        { title: "Mejora de productividad y rentabilidad", description: "Resultados conectados a valor de negocio.", icon: "list-check" },
        { title: "Ventaja competitiva sostenible", description: "Capacidades que permanecen en el tiempo.", icon: "list-check" },
      ],
    },
    audiences: {
      title: "¿Con quién trabajamos?",
      items: [
        { title: "Empresas corporativas", description: "Organizaciones que buscan escalar y transformar su modelo de negocio.", icon: "domain" },
        { title: "Instituciones", description: "Entidades públicas y privadas que impulsan modernización y eficiencia.", icon: "guide" },
        { title: "Pymes y scaleups", description: "Equipos que necesitan ordenar, crecer y profesionalizar sus operaciones.", icon: "automation" },
        { title: "Equipos y áreas", description: "Unidades funcionales que quieren mejorar resultados y colaboración.", icon: "community" },
        { title: "Organizaciones globales", description: "Entornos multiculturales que requieren alineación y ejecución regional.", icon: "globe" },
      ],
    },
    finalCta: {
      title: "Transformemos tu organización en una ventaja competitiva",
      description:
        "Hablemos de tus desafíos y diseñemos juntos el camino a seguir.",
      icon: "process",
      primaryCta: { label: "Agendar una sesión", href: agenda },
      secondaryCta: { label: "Ver servicios", href: services },
    },
  },
];

const navIcons = {
  "liderazgo-y-cultura": "community",
  "upskilling-y-reskilling": "chart",
  "talento-e-ia": "ai",
  "formacion-corporativa": "learning",
  "mentoria-profesional": "mentor",
  "transformacion-organizacional": "domain",
} as const;

export const talentSubpageNavItems = talentSubpages.map((page) => ({
  label: page.title,
  href: `/talento/${page.slug}`,
  description: page.description,
  icon: navIcons[page.slug as keyof typeof navIcons],
}));

export function getTalentSubpage(slug: string) {
  return talentSubpages.find((page) => page.slug === slug);
}
