import type { AiTechVisualVariant } from "@/types/ia-tecnologia";

type VisualTone = {
  label: string;
  metric: string;
  panels: string[];
  nodes: string[];
};

const visualTones: Record<AiTechVisualVariant, VisualTone> = {
  main: {
    label: "Ecosistema IA",
    metric: "IA + datos + automatización",
    panels: ["Datos", "Automatización", "Radar", "Plataformas", "Gobierno"],
    nodes: ["IA", "BI", "API", "RPA", "KPIs"],
  },
  radar: {
    label: "Radar activo",
    metric: "Señales priorizadas",
    panels: ["Tendencias", "Mercado", "Datos", "Gobierno", "Oportunidades"],
    nodes: ["IA", "Señal", "Riesgo", "Mercado", "Adopción"],
  },
  ai: {
    label: "Sistemas inteligentes",
    metric: "Modelos y predicción",
    panels: ["Modelos", "Predicción", "NLP", "Visión", "Automatización"],
    nodes: ["Modelo", "Dato", "Patrón", "Decisión", "Aprendizaje"],
  },
  generative: {
    label: "LLMs y copilotos",
    metric: "Contenido asistido",
    panels: ["Prompts", "Copilotos", "Asistentes", "Contenido", "Flujos"],
    nodes: ["Texto", "Idea", "Chat", "Brief", "Síntesis"],
  },
  data: {
    label: "Dashboard ejecutivo",
    metric: "KPIs y predicción",
    panels: ["Ingresos", "Clientes", "Margen", "NPS", "Calidad"],
    nodes: ["KPI", "Score", "Insight", "Forecast", "Segmento"],
  },
  automation: {
    label: "Workflows",
    metric: "Procesos conectados",
    panels: ["Inicio", "Validación", "Aprobación", "Integración", "Fin"],
    nodes: ["Bot", "API", "Tarea", "Regla", "Evento"],
  },
  tools: {
    label: "Ecosistema de herramientas",
    metric: "Comparación y selección",
    panels: ["Catálogo", "Criterios", "Integración", "Seguridad", "Valor"],
    nodes: ["Suite", "BI", "CRM", "No-code", "Copilot"],
  },
  transformation: {
    label: "Transformación digital",
    metric: "Estrategia a resultados",
    panels: ["Estrategia", "Procesos", "Datos", "Personas", "Adopción"],
    nodes: ["Roadmap", "Cultura", "Operación", "Tecnología", "Impacto"],
  },
  governance: {
    label: "Gobernanza de IA",
    metric: "Control y confianza",
    panels: ["Ética", "Riesgos", "Privacidad", "Seguridad", "Auditoría"],
    nodes: ["Control", "Política", "Cumplimiento", "Madurez", "Transparencia"],
  },
};

const bars: Record<AiTechVisualVariant, number[]> = {
  main: [46, 68, 55, 84, 74],
  radar: [36, 52, 64, 82, 72],
  ai: [52, 68, 76, 60, 86],
  generative: [44, 78, 66, 88, 72],
  data: [58, 64, 74, 92, 80],
  automation: [36, 52, 72, 76, 90],
  tools: [48, 58, 66, 74, 84],
  transformation: [44, 56, 70, 82, 88],
  governance: [54, 62, 72, 68, 84],
};

export function AiTechVisual({ variant }: { variant: AiTechVisualVariant }) {
  const tone = visualTones[variant];

  return (
    <div className="relative min-h-[17rem] overflow-hidden lg:min-h-[23.5rem] xl:min-h-[25rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgb(24_196_199/0.28),transparent_30%),radial-gradient(circle_at_30%_70%,rgb(0_87_255/0.23),transparent_32%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(125_211_252/0.1)_1px,transparent_1px),linear-gradient(90deg,rgb(125_211_252/0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute inset-4 rounded-2xl border border-sky-300/20 bg-slate-950/18 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] lg:inset-7">
        <div className="grid h-full gap-4 p-4 sm:p-5 lg:grid-cols-[1.25fr_0.9fr] lg:p-6">
          <VisualPrimary variant={variant} tone={tone} />
          <VisualSide variant={variant} tone={tone} />
        </div>
      </div>
    </div>
  );
}

function VisualPrimary({
  variant,
  tone,
}: {
  variant: AiTechVisualVariant;
  tone: VisualTone;
}) {
  if (variant === "radar") {
    return (
      <ScenePanel title={tone.label} subtitle={tone.metric}>
        <RadarCanvas labels={tone.panels.slice(0, 4)} />
      </ScenePanel>
    );
  }

  if (variant === "ai") {
    return (
      <ScenePanel title={tone.label} subtitle={tone.metric}>
        <BrainCanvas labels={tone.panels.slice(0, 4)} />
      </ScenePanel>
    );
  }

  if (variant === "generative") {
    return (
      <ScenePanel title={tone.label} subtitle={tone.metric}>
        <GenerativeCanvas labels={tone.panels.slice(0, 4)} />
      </ScenePanel>
    );
  }

  if (variant === "automation") {
    return (
      <ScenePanel title={tone.label} subtitle={tone.metric}>
        <WorkflowCanvas labels={tone.panels} />
      </ScenePanel>
    );
  }

  if (variant === "tools") {
    return (
      <ScenePanel title={tone.label} subtitle={tone.metric}>
        <ToolGrid labels={tone.nodes} />
      </ScenePanel>
    );
  }

  if (variant === "transformation") {
    return (
      <ScenePanel title={tone.label} subtitle={tone.metric}>
        <TransformationCanvas labels={tone.panels} />
      </ScenePanel>
    );
  }

  if (variant === "governance") {
    return (
      <ScenePanel title={tone.label} subtitle={tone.metric}>
        <GovernanceCanvas labels={tone.panels} />
      </ScenePanel>
    );
  }

  return (
    <ScenePanel title={tone.label} subtitle={tone.metric}>
      <DashboardCanvas variant={variant} tone={tone} />
    </ScenePanel>
  );
}

function VisualSide({
  variant,
  tone,
}: {
  variant: AiTechVisualVariant;
  tone: VisualTone;
}) {
  return (
    <div className="grid min-h-0 gap-3 lg:grid-rows-[auto_1fr]">
      <div className="rounded-xl border border-sky-300/20 bg-slate-950/35 p-3 backdrop-blur">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-sky-300">
          {variant === "data" ? "Resumen ejecutivo" : variant === "governance" ? "Nivel de control" : "Lectura rápida"}
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {tone.panels.slice(0, 4).map((panel, index) => (
            <div className="rounded-lg bg-white/8 p-2" key={panel}>
              <span className="block text-[0.65rem] font-semibold leading-3 text-blue-100">
                {panel}
              </span>
              <span className="mt-1 block text-sm font-black text-white">
                {index === 0 ? "+62%" : index === 1 ? "3.4/5" : index === 2 ? "128" : "78%"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-0 rounded-xl border border-sky-300/20 bg-slate-950/30 p-3 backdrop-blur">
        <div className="flex h-full items-end gap-2">
          {bars[variant].map((height, index) => (
            <span
              className="flex-1 rounded-t bg-gradient-to-t from-[var(--bta-blue)] to-sky-300"
              key={index}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ScenePanel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[14rem] overflow-hidden rounded-2xl border border-sky-300/25 bg-slate-950/38 p-4 shadow-[0_22px_58px_rgb(0_0_0/0.2)] backdrop-blur">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-md border border-sky-300/35 px-2 py-1 text-xs font-black text-sky-100">
          {title}
        </span>
        <span className="text-xs font-bold text-sky-200">{subtitle}</span>
      </div>
      <div className="h-[calc(100%-3rem)] min-h-[11rem]">{children}</div>
    </div>
  );
}

function DashboardCanvas({
  variant,
  tone,
}: {
  variant: AiTechVisualVariant;
  tone: VisualTone;
}) {
  return (
    <div className="grid h-full gap-3 sm:grid-cols-[1.15fr_0.85fr]">
      <LineChart />
      <div className="grid gap-3">
        <Donut />
        <div className="grid grid-cols-2 gap-2">
          {tone.nodes.slice(0, 4).map((node) => (
            <span
              className="rounded-lg border border-sky-300/18 bg-white/8 px-2 py-2 text-center text-[0.68rem] font-bold text-sky-100"
              key={node}
            >
              {node}
            </span>
          ))}
        </div>
      </div>
      {variant === "main" ? (
        <div className="sm:col-span-2 grid grid-cols-3 gap-2">
          {tone.panels.slice(0, 3).map((panel) => (
            <span className="rounded-lg bg-sky-300/10 px-3 py-2 text-xs font-bold text-sky-100" key={panel}>
              {panel}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function RadarCanvas({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full place-items-center">
      <div className="relative size-48 rounded-full border border-sky-300/40 sm:size-56">
        {[1, 2, 3].map((ring) => (
          <span
            className="absolute rounded-full border border-sky-300/22"
            key={ring}
            style={{ inset: `${ring * 13}%` }}
          />
        ))}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-sky-300/22" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-sky-300/22" />
        <span className="absolute left-1/2 top-1/2 h-px w-[46%] origin-left -rotate-[32deg] bg-sky-300 shadow-[0_0_18px_rgb(56_189_248/0.7)]" />
        {[
          ["22%", "34%"],
          ["63%", "28%"],
          ["72%", "62%"],
          ["38%", "76%"],
          ["49%", "48%"],
        ].map(([left, top], index) => (
          <span
            className="absolute size-2 rounded-full bg-sky-300 shadow-[0_0_14px_rgb(56_189_248/0.8)]"
            key={`${left}-${top}`}
            style={{ left, top }}
            title={labels[index % labels.length]}
          />
        ))}
      </div>
    </div>
  );
}

function BrainCanvas({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full gap-3 sm:grid-cols-[1fr_0.8fr]">
      <svg className="h-full min-h-40 w-full text-sky-300/80" fill="none" viewBox="0 0 300 220">
        <path d="M62 110c0-52 38-82 87-82 50 0 90 31 90 82 0 55-40 86-90 86-49 0-87-31-87-86Z" stroke="currentColor" strokeWidth="2.2" />
        <path d="M88 86l44 24 42-50 34 66-55 34-54-18-23 34M132 110l21 50M174 60l-42 50" stroke="currentColor" strokeWidth="1.8" />
        {[88, 132, 174, 208, 153, 99].map((x, index) => (
          <circle cx={x} cy={[86, 110, 60, 126, 160, 142][index]} fill="currentColor" key={x} r="5" />
        ))}
      </svg>
      <LabelStack labels={labels} />
    </div>
  );
}

function GenerativeCanvas({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full gap-3 sm:grid-cols-[0.9fr_1.1fr]">
      <LabelStack labels={labels} />
      <div className="grid place-items-center rounded-xl border border-sky-300/18 bg-sky-300/8">
        <div className="grid size-28 place-items-center rounded-full border border-sky-300/35 bg-slate-950/35 text-center text-sm font-black text-white shadow-[0_0_42px_rgb(56_189_248/0.24)]">
          LLMs
          <span className="px-4 text-[0.65rem] font-semibold leading-3 text-blue-100">
            prompts · copilotos · contenido
          </span>
        </div>
      </div>
    </div>
  );
}

function WorkflowCanvas({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full place-items-center">
      <div className="grid w-full max-w-sm gap-2">
        {labels.map((label, index) => (
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2" key={label}>
            <span className="h-px bg-sky-300/25" />
            <span className="min-w-32 rounded-lg border border-sky-300/35 bg-slate-950/35 px-3 py-2 text-center text-xs font-bold text-sky-100">
              {label}
            </span>
            <span className={index === labels.length - 1 ? "h-px bg-transparent" : "h-px bg-sky-300/25"} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolGrid({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full grid-cols-2 gap-3 sm:grid-cols-3">
      {labels.map((label, index) => (
        <div className="rounded-xl border border-sky-300/22 bg-white/8 p-3 text-xs font-bold text-white" key={label}>
          <span className="mb-3 block size-8 rounded-lg bg-sky-300/15" />
          {label}
          <span className="mt-2 block text-sky-300">Valor {index + 1}</span>
        </div>
      ))}
    </div>
  );
}

function TransformationCanvas({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full place-items-center">
      <div className="grid w-full max-w-md grid-cols-2 gap-3">
        {labels.map((label, index) => (
          <div
            className={`rounded-xl border border-sky-300/24 bg-white/8 p-3 text-xs font-bold text-sky-100 ${
              index === 0 ? "col-span-2 text-center text-white" : ""
            }`}
            key={label}
          >
            {label}
            <span className="mt-2 block h-1.5 rounded-full bg-sky-300/18">
              <span className="block h-full rounded-full bg-sky-300" style={{ width: `${50 + index * 9}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function GovernanceCanvas({ labels }: { labels: string[] }) {
  return (
    <div className="grid h-full gap-3 sm:grid-cols-[0.8fr_1.2fr]">
      <div className="grid place-items-center rounded-xl border border-sky-300/20 bg-sky-300/8">
        <div className="grid size-28 place-items-center rounded-2xl border border-sky-300/35 bg-slate-950/35 text-center text-white">
          <span className="text-3xl">◇</span>
          <span className="text-[0.65rem] font-black">CONTROL</span>
        </div>
      </div>
      <LabelStack labels={labels} />
    </div>
  );
}

function LabelStack({ labels }: { labels: string[] }) {
  return (
    <div className="grid content-center gap-2">
      {labels.map((label) => (
        <div className="rounded-lg border border-sky-300/20 bg-slate-950/32 px-3 py-2 text-xs font-bold text-sky-100" key={label}>
          {label}
        </div>
      ))}
    </div>
  );
}

function LineChart() {
  return (
    <svg className="h-full min-h-32 w-full rounded-lg bg-white/8 p-3 text-sky-300" fill="none" viewBox="0 0 220 120">
      <path d="M8 98h204M10 20v82" stroke="currentColor" strokeOpacity=".25" />
      <path d="M12 84 45 72 72 78 100 48 130 58 165 28 208 38" stroke="currentColor" strokeWidth="4" />
      <path d="M12 100 45 90 72 94 100 78 130 82 165 66 208 70" stroke="#1d73ff" strokeWidth="3" />
    </svg>
  );
}

function Donut() {
  return (
    <div className="grid min-h-28 place-items-center rounded-lg bg-white/8">
      <div className="grid size-20 place-items-center rounded-full bg-[conic-gradient(#38bdf8_0_45%,#0057ff_45%_78%,rgb(255_255_255/0.14)_78%)]">
        <div className="grid size-12 place-items-center rounded-full bg-[var(--bta-blue-deeper)] text-xs font-black text-white">
          72
        </div>
      </div>
    </div>
  );
}

export function AiTechCardVisual({
  variant,
  tag,
}: {
  variant: AiTechVisualVariant;
  tag?: string;
}) {
  const tone = visualTones[variant];

  return (
    <div className="relative h-30 overflow-hidden bg-[var(--bta-blue-deeper)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgb(24_196_199/0.36),transparent_32%),linear-gradient(135deg,rgb(0_87_255/0.34),transparent_56%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgb(255_255_255/0.11)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
      {tag ? (
        <span className="absolute left-3 top-3 rounded-md bg-[var(--bta-blue)] px-2 py-1 text-[0.62rem] font-black uppercase text-white">
          {tag}
        </span>
      ) : null}
      <div className="absolute bottom-3 left-3 right-3">
        {variant === "radar" || variant === "governance" ? (
          <div className="size-20 rounded-full border border-sky-300/50">
            <span className="block size-full rounded-full border-[18px] border-sky-300/10" />
          </div>
        ) : variant === "automation" ||
          variant === "tools" ||
          variant === "transformation" ? (
          <div className="grid grid-cols-3 gap-2">
            {tone.nodes.slice(0, 3).map((node) => (
              <span className="rounded-md border border-sky-300/25 bg-white/10 px-2 py-2 text-center text-[0.6rem] font-bold text-sky-100" key={node}>
                {node}
              </span>
            ))}
          </div>
        ) : (
          <LineChart />
        )}
      </div>
    </div>
  );
}
