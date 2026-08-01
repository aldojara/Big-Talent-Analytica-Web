import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import {
  domainNavItems,
  domainThemes,
  overviewCrossChallenges,
  overviewFeaturedUseCases,
  overviewResourceTypes,
} from "@/data/domains";
import type { DomainBasicItem, DomainPage, DomainThemeName } from "@/types/domains";

export function DomainsOverviewPage() {
  return (
    <>
      <DomainsOverviewHero />
      <OverviewDomainGrid />
      <CrossChallenges />
      <OverviewConnectionMap />
      <OverviewFeaturedUseCases />
      <OverviewResources />
      <DomainFinalCta
        cta={{
          title: "¿Quieres aplicar estas capacidades en tu organización?",
          description:
            "Diseñemos una hoja de ruta, un workshop o una sesión estratégica según tu dominio y objetivos.",
          primaryCta: { label: "Agenda una sesión", href: "/agenda" },
          secondaryCta: { label: "Explorar servicios", href: "/talento" },
          icon: "spark",
        }}
        theme="blue"
      />
    </>
  );
}

export function DomainDetailPage({ page }: { page: DomainPage }) {
  return (
    <>
      <DomainHero page={page} />
      <IconGridSection
        columns="six"
        id="retos"
        items={page.challenges}
        title={page.challengesTitle}
        theme={page.theme}
      />
      <IconGridSection
        columns={page.capabilities.length > 5 ? "six" : "five"}
        id="capacidades"
        items={page.capabilities}
        title={page.capabilitiesTitle}
        theme={page.theme}
      />
      <DomainConnections activeSlug={page.slug} relatedSlugs={page.relatedDomains} theme={page.theme} />
      <UseCasesSection page={page} />
      <MetricsSection page={page} />
      <ResourcesSection page={page} />
      <DomainFinalCta cta={page.finalCta} theme={page.theme} />
    </>
  );
}

function DomainsOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground />
      <Container className="relative grid gap-8 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-16">
        <div>
          <Breadcrumb current="Dominios" />
          <p className="mt-8 text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--bta-blue-bright)]">
            DOMINIOS
          </p>
          <h1 className="mt-4 max-w-[42rem] text-[2.55rem] font-black leading-[1.05] tracking-tight sm:text-[3.35rem] lg:text-[3.65rem]">
            Dominios que conectan estrategia, IA y resultados
          </h1>
          <p className="mt-5 max-w-[40rem] text-sm leading-7 text-blue-50 sm:text-base">
            Explora cómo la inteligencia artificial, la analítica, la automatización y el talento se aplican en las principales áreas del negocio para transformar decisiones, procesos y experiencias.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#explora-dominios">Explorar dominios</ButtonLink>
            <ButtonLink href="/casos-de-uso" variant="secondary">
              Ver casos de uso
            </ButtonLink>
          </div>
        </div>
        <DomainsOrbitVisual />
      </Container>
    </section>
  );
}

function DomainHero({ page }: { page: DomainPage }) {
  const theme = domainThemes[page.theme];

  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground accent={theme.accent} />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-14">
        <div>
          <Breadcrumb current={page.breadcrumbLabel} parent={{ label: "Dominios", href: "/dominios" }} />
          <p
            className="mt-7 inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em]"
            style={{ borderColor: theme.border, backgroundColor: theme.soft, color: theme.accent }}
          >
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[45rem] text-[2.35rem] font-black leading-[1.06] tracking-tight sm:text-[3.2rem] lg:text-[3.35rem]">
            <HighlightedTitle title={page.title} terms={page.highlightedTerms} theme={page.theme} />
          </h1>
          <p className="mt-5 max-w-[39rem] text-sm leading-7 text-blue-50 sm:text-base">
            {page.description}
          </p>
          <p className="mt-3 max-w-[34rem] text-[0.7rem] leading-4 text-blue-200">
            Métricas y paneles del hero son ejemplos visuales ilustrativos, no resultados históricos certificados.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
            <ButtonLink href={page.secondaryCta.href} variant="secondary">
              {page.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
        <DomainMetricVisual page={page} />
      </Container>
    </section>
  );
}

function DarkHeroBackground({ accent = "#1d73ff" }: { accent?: string }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(112deg,rgb(2_18_54/0.98)_0%,rgb(3_22_62/0.93)_48%,rgb(1_12_35/0.98)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgb(29_115_255/0.8)_1px,transparent_1px)] [background-size:18px_18px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-2/3 opacity-70"
        style={{
          background: `radial-gradient(circle at 55% 38%, ${accent}66, transparent 34%)`,
        }}
      />
    </>
  );
}

function Breadcrumb({
  current,
  parent,
}: {
  current: string;
  parent?: { label: string; href: string };
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold">
      <ol className="flex flex-wrap items-center gap-2 text-blue-100">
        <li>
          <Link className="text-[var(--bta-blue-bright)] hover:text-white focus-visible:outline focus-visible:outline-2" href="/">
            Inicio
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        {parent ? (
          <>
            <li>
              <Link className="hover:text-white focus-visible:outline focus-visible:outline-2" href={parent.href}>
                {parent.label}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
          </>
        ) : null}
        <li aria-current="page" className="text-white">
          {current}
        </li>
      </ol>
    </nav>
  );
}

function HighlightedTitle({
  title,
  terms,
  theme,
}: {
  title: string;
  terms: string[];
  theme: DomainThemeName;
}) {
  const accentClass = domainThemes[theme].text;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  const parts = title.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        terms.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
          <span className={accentClass} key={`${part}-${index}`}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function DomainsOrbitVisual() {
  return (
    <div className="relative mx-auto min-h-[28rem] w-full max-w-[43rem] sm:min-h-[32rem]" aria-label="Seis dominios conectados">
      <div aria-hidden="true" className="absolute inset-4 rounded-full border border-blue-300/15" />
      <div aria-hidden="true" className="absolute inset-16 rounded-full border border-blue-300/20 border-dashed" />
      <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-200/30 bg-[var(--bta-blue)] shadow-[0_0_80px_rgb(29_115_255/0.55)]">
        <span className="grid grid-cols-3 gap-1 text-white">
          {Array.from({ length: 9 }).map((_, index) => (
            <span className="size-2.5 rounded-full bg-current" key={index} />
          ))}
        </span>
      </div>
      <svg aria-hidden="true" className="absolute inset-0 size-full text-blue-300/60" viewBox="0 0 680 520">
        <path d="M340 260 184 115M340 260 118 260M340 260 255 418M340 260 480 418M340 260 566 260M340 260 496 115" fill="none" stroke="currentColor" strokeDasharray="4 9" />
      </svg>
      {domainNavItems.map((item, index) => (
        <OrbitNode index={index} item={item} key={item.slug} />
      ))}
    </div>
  );
}

function OrbitNode({ item, index }: { item: (typeof domainNavItems)[number]; index: number }) {
  const positions = [
    "left-[17%] top-[12%]",
    "left-[4%] top-[43%]",
    "right-[6%] top-[18%]",
    "right-[5%] top-[52%]",
    "left-[20%] bottom-[12%]",
    "right-[24%] bottom-[7%]",
  ];
  const theme = domainThemes[item.theme];

  return (
    <Link className={`absolute flex max-w-[13rem] items-center gap-2 rounded-full border bg-blue-950/70 p-2 pr-3 text-xs font-black leading-tight text-white shadow-[0_18px_42px_rgb(0_0_0/0.22)] backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 ${positions[index]}`} href={item.href} style={{ borderColor: theme.border }}>
      <span className="grid size-10 shrink-0 place-items-center rounded-full" style={{ backgroundColor: theme.soft, color: theme.accent }}>
        <Icon className="size-5" name={item.icon} />
      </span>
      {item.menuLabel}
    </Link>
  );
}

function DomainMetricVisual({ page }: { page: DomainPage }) {
  const theme = domainThemes[page.theme];
  const metricPreview = page.metrics.slice(0, 4);

  return (
    <div className="relative mx-auto min-h-[30rem] w-full max-w-[45rem] sm:min-h-[34rem]">
      <div className="absolute inset-5 overflow-hidden rounded-2xl border border-blue-300/20 bg-blue-950/35 shadow-[0_28px_80px_rgb(0_0_0/0.26)] backdrop-blur">
        <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:42px_42px]" />
        <HeroDashboard visual={page.visual} accent={theme.accent} />
      </div>
      <div className="absolute left-0 top-7 grid w-[min(15rem,52vw)] gap-3">
        {metricPreview.slice(0, 2).map((metric) => (
          <HeroMetricCard accent={theme.accent} key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="absolute bottom-3 right-0 grid w-[min(26rem,82vw)] grid-cols-2 gap-3 sm:grid-cols-2">
        {metricPreview.slice(2, 4).map((metric) => (
          <HeroMetricCard accent={theme.accent} compact key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="absolute right-2 top-8 hidden w-44 rounded-xl border border-blue-300/25 bg-blue-950/75 p-3 text-white shadow-[0_18px_42px_rgb(0_0_0/0.22)] backdrop-blur sm:block">
        <p className="text-[0.68rem] font-black">Panel ilustrativo</p>
        <div className="mt-3 flex items-end gap-1.5">
          {[42, 70, 52, 86, 64].map((height) => (
            <span className="flex-1 rounded-t" key={height} style={{ height: `${height}px`, backgroundColor: theme.accent }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroMetricCard({
  metric,
  accent,
  compact = false,
}: {
  metric: DomainPage["metrics"][number];
  accent: string;
  compact?: boolean;
}) {
  return (
    <div className="rounded-xl border border-blue-300/25 bg-blue-950/75 p-3 shadow-[0_18px_42px_rgb(0_0_0/0.24)] backdrop-blur">
      <p className="text-[0.65rem] font-bold leading-4 text-blue-100">{metric.label}</p>
      <p className={`font-black ${compact ? "text-2xl" : "text-3xl"}`} style={{ color: accent }}>
        {metric.value}
      </p>
      <p className="text-[0.62rem] leading-4 text-blue-100">{metric.delta ? `${metric.delta} · ` : ""}{metric.description}</p>
    </div>
  );
}

function HeroDashboard({ visual, accent }: { visual: DomainPage["visual"]; accent: string }) {
  return (
    <div className="absolute inset-6 grid grid-cols-[1fr_0.82fr] gap-4">
      <div className="grid grid-rows-[1fr_0.82fr] gap-4">
        <div className="rounded-xl border border-blue-300/15 bg-blue-950/45 p-4">
          <p className="text-[0.68rem] font-black text-blue-100">{visual === "marketing" ? "Embudo de conversión" : visual === "finance" ? "Tendencia de rentabilidad" : visual === "supply" ? "KPI operativos" : "Eficiencia operacional"}</p>
          <FunnelOrChart visual={visual} accent={accent} />
        </div>
        <div className="rounded-xl border border-blue-300/15 bg-blue-950/40 p-4">
          <p className="text-[0.68rem] font-black text-blue-100">{visual === "supply" ? "Rutas y entregas" : visual === "talent" ? "People Analytics" : visual === "customer" ? "Journey y satisfacción" : "Evolución"}</p>
          <LineChart accent={accent} />
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid place-items-center rounded-xl border border-blue-300/15 bg-blue-950/40 p-4">
          <RadialNetwork visual={visual} accent={accent} />
        </div>
        <div className="rounded-xl border border-blue-300/15 bg-blue-950/40 p-4">
          <p className="mb-3 text-[0.68rem] font-black text-blue-100">Indicadores</p>
          <div className="space-y-2">
            {["Planificación", "Automatización", "Control"].map((label, index) => (
              <div className="grid grid-cols-[1fr_auto] items-center gap-2 text-[0.64rem] font-bold text-blue-100" key={label}>
                <span>{label}</span>
                <span style={{ color: accent }}>{[82, 68, 91][index]}%</span>
                <span className="col-span-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <span className="block h-full rounded-full" style={{ width: `${[82, 68, 91][index]}%`, backgroundColor: accent }} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FunnelOrChart({ visual, accent }: { visual: DomainPage["visual"]; accent: string }) {
  if (visual === "marketing") {
    return (
      <div className="mt-5 grid gap-2">
        {[96, 76, 54, 34].map((width, index) => (
          <span className="mx-auto h-8 rounded-md" key={width} style={{ width: `${width}%`, backgroundColor: index < 2 ? "#1d73ff" : accent, opacity: 0.9 }} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6 flex h-32 items-end gap-2">
      {[35, 54, 48, 70, 58, 82, 76, 92].map((height) => (
        <span className="flex-1 rounded-t" key={height} style={{ height: `${height}%`, backgroundColor: accent, opacity: 0.82 }} />
      ))}
    </div>
  );
}

function LineChart({ accent }: { accent: string }) {
  return (
    <svg aria-hidden="true" className="mt-4 h-28 w-full" fill="none" viewBox="0 0 260 112">
      <path d="M10 86C42 58 55 76 82 48s54 7 82-20 53 6 86-15" stroke={accent} strokeLinecap="round" strokeWidth="5" />
      <path d="M10 96h240" stroke="rgb(191 219 254 / 0.2)" />
      {[10, 82, 164, 250].map((x, index) => (
        <circle cx={x} cy={[86, 48, 28, 13][index]} fill="rgb(2 18 54)" key={x} r="6" stroke={accent} strokeWidth="3" />
      ))}
    </svg>
  );
}

function RadialNetwork({ visual, accent }: { visual: DomainPage["visual"]; accent: string }) {
  const icon = visual === "finance" ? "money" : visual === "talent" ? "talent" : visual === "supply" ? "domain" : visual === "process" ? "process" : visual === "customer" ? "support" : "megaphone";

  return (
    <div className="relative size-44">
      <div className="absolute inset-0 rounded-full border border-blue-200/20" />
      <div className="absolute inset-8 rounded-full border border-blue-200/20 border-dashed" />
      <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-200/30 bg-blue-950" style={{ color: accent }}>
        <Icon className="size-10" name={icon} />
      </div>
      {[0, 1, 2, 3, 4].map((index) => (
        <span
          className="absolute grid size-10 place-items-center rounded-full border border-blue-200/25 bg-blue-950 text-blue-100"
          key={index}
          style={{
            left: `${50 + 38 * Math.cos((index * Math.PI * 2) / 5 - Math.PI / 2)}%`,
            top: `${50 + 38 * Math.sin((index * Math.PI * 2) / 5 - Math.PI / 2)}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Icon className="size-4" name={["analytics", "ai", "automation", "shield", "network"][index] as DomainBasicItem["icon"]} />
        </span>
      ))}
    </div>
  );
}

function OverviewDomainGrid() {
  return (
    <section className="bg-white py-7 sm:py-9" id="explora-dominios">
      <Container>
        <DomainSectionHeading title="Explora por dominio" />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {domainNavItems.map((domain) => (
            <Link className="group flex min-h-28 items-center gap-4 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[0_10px_28px_rgb(8_23_63/0.06)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_40px_rgb(8_23_63/0.1)] focus-visible:outline focus-visible:outline-2" href={domain.href} key={domain.slug}>
              <IconBubble icon={domain.icon} theme={domain.theme} />
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-black text-[var(--bta-blue-deeper)]">{domain.menuLabel}</span>
                <span className="mt-1 block text-sm leading-5 text-[var(--bta-muted)]">{domain.description}</span>
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[var(--bta-border)] text-[var(--bta-blue)] group-hover:bg-blue-50">
                <Icon className="size-4" name="arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CrossChallenges() {
  return (
    <section className="bg-white pb-7">
      <Container>
        <DomainSectionHeading title="Retos transversales" />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {overviewCrossChallenges.map((item) => (
            <div className="flex min-h-20 items-center gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_8px_24px_rgb(8_23_63/0.05)]" key={item.title}>
              <Icon className="size-7 shrink-0 text-[var(--bta-blue)]" name={item.icon} />
              <div>
                <h3 className="text-xs font-black leading-tight text-[var(--bta-blue-deeper)]">{item.title}</h3>
                <p className="mt-1 text-[0.68rem] leading-4 text-[var(--bta-muted)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OverviewConnectionMap() {
  const primary = ["marketing-y-ventas", "experiencia-de-cliente-y-servicio", "supply-chain-y-operaciones", "finanzas-y-rendimiento"];
  const transverse = ["procesos-y-transformacion", "talento-y-recursos-humanos"];

  return (
    <section className="bg-white pb-8">
      <Container>
        <DomainSectionHeading title="Cómo se conectan los dominios" />
        <div className="mt-5 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[0_12px_32px_rgb(8_23_63/0.06)]">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
            {primary.map((slug, index) => {
              const item = domainNavItems.find((domain) => domain.slug === slug);
              if (!item) return null;
              return (
                <div className="contents" key={slug}>
                  <DomainPill domain={item} />
                  {index < primary.length - 1 ? <span aria-hidden="true" className="hidden text-center text-2xl font-black text-[var(--bta-blue-deeper)] lg:block">↔</span> : null}
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            {transverse.map((slug) => {
              const item = domainNavItems.find((domain) => domain.slug === slug);
              return item ? <DomainPill domain={item} key={slug} transverse /> : null;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function DomainConnections({
  activeSlug,
  relatedSlugs,
  theme,
}: {
  activeSlug: string;
  relatedSlugs: string[];
  theme: DomainThemeName;
}) {
  const active = domainNavItems.find((item) => item.slug === activeSlug);
  const related = relatedSlugs
    .map((slug) => domainNavItems.find((item) => item.slug === slug))
    .filter((item): item is (typeof domainNavItems)[number] => Boolean(item));

  if (!active) return null;

  return (
    <section className="bg-white py-7">
      <Container>
        <DomainSectionHeading title="Cómo se conecta este dominio" />
        <div className="mt-5 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_12px_32px_rgb(8_23_63/0.06)]">
          <div className="grid gap-3 lg:grid-cols-[repeat(2,1fr)_1.1fr_repeat(2,1fr)] lg:items-center">
            {related.slice(0, 2).map((item) => (
              <DomainPill domain={item} key={item.slug} />
            ))}
            <DomainPill active domain={active} theme={theme} />
            {related.slice(2, 4).map((item) => (
              <DomainPill domain={item} key={item.slug} />
            ))}
          </div>
          {related.length > 4 ? (
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(4).map((item) => (
                <DomainPill domain={item} key={item.slug} />
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function DomainPill({
  domain,
  active = false,
  transverse = false,
  theme,
}: {
  domain: (typeof domainNavItems)[number];
  active?: boolean;
  transverse?: boolean;
  theme?: DomainThemeName;
}) {
  const currentTheme = domainThemes[theme ?? domain.theme];

  return (
    <Link
      className={`flex min-h-16 items-center justify-center gap-3 rounded-lg border p-3 text-center text-xs font-black leading-tight transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 ${
        active ? "text-white shadow-[0_16px_34px_rgb(8_23_63/0.18)]" : "bg-white text-[var(--bta-blue-deeper)]"
      } ${transverse ? "lg:min-h-14" : ""}`}
      href={domain.href}
      style={{
        backgroundColor: active ? "var(--bta-blue-deeper)" : currentTheme.soft,
        borderColor: currentTheme.border,
      }}
    >
      <Icon className="size-5 shrink-0" name={domain.icon} />
      {domain.menuLabel}
    </Link>
  );
}

function IconGridSection({
  title,
  items,
  theme,
  id,
  columns,
}: {
  title: string;
  items: DomainBasicItem[];
  theme: DomainThemeName;
  id?: string;
  columns: "five" | "six";
}) {
  return (
    <section className="bg-white py-7" id={id}>
      <Container>
        <DomainSectionHeading title={title} />
        <div className={`mt-5 grid gap-4 sm:grid-cols-2 ${columns === "five" ? "lg:grid-cols-5" : "lg:grid-cols-3 xl:grid-cols-6"}`}>
          {items.map((item) => (
            <article className="rounded-xl border border-[var(--bta-border)] bg-white p-5 text-center shadow-[0_8px_26px_rgb(8_23_63/0.055)]" key={item.title}>
              <IconBubble icon={item.icon} theme={theme} />
              <h2 className="mt-4 text-sm font-black leading-tight text-[var(--bta-blue-deeper)]">{item.title}</h2>
              <p className="mt-2 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function UseCasesSection({ page }: { page: DomainPage }) {
  return (
    <section className="bg-white py-7" id="casos-destacados">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <DomainSectionHeading title="Casos de uso destacados" />
          <Link className="inline-flex items-center gap-1.5 text-xs font-black text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2" href="/casos-de-uso">
            Ver todos los casos de uso
            <Icon className="size-3.5" name="arrow-right" />
          </Link>
        </div>
        <div className={`mt-5 grid gap-5 ${page.useCases.length > 4 ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" : "md:grid-cols-2 lg:grid-cols-4"}`}>
          {page.useCases.map((useCase) => (
            <Link className="group overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[0_10px_28px_rgb(8_23_63/0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgb(8_23_63/0.1)] focus-visible:outline focus-visible:outline-2" href={useCase.href} key={useCase.title}>
              <div className="relative h-28 overflow-hidden bg-[var(--bta-blue-deeper)]">
                <MiniCaseVisual icon={useCase.icon} theme={page.theme} />
                <span className="absolute left-3 top-3 rounded-md px-2 py-1 text-[0.58rem] font-black uppercase text-white" style={{ backgroundColor: domainThemes[page.theme].accent }}>
                  {useCase.tag}
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-sm font-black leading-tight text-[var(--bta-blue-deeper)]">{useCase.title}</h2>
                <p className="mt-2 text-xs leading-5 text-[var(--bta-muted)]">{useCase.description}</p>
                {useCase.impact ? (
                  <p className="mt-3 text-[0.68rem] font-bold text-[var(--bta-blue-deeper)]">
                    Impacto: <span className="font-semibold text-[var(--bta-muted)]">{useCase.impact}</span>
                  </p>
                ) : null}
                {useCase.meta ? (
                  <span className="mt-3 inline-flex rounded-md bg-blue-50 px-2 py-1 text-[0.65rem] font-bold text-[var(--bta-blue)]">{useCase.meta}</span>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OverviewFeaturedUseCases() {
  return (
    <section className="bg-white py-7">
      <Container>
        <DomainSectionHeading title="Casos de uso destacados" />
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {overviewFeaturedUseCases.map((useCase) => (
            <Link className="group flex min-h-44 gap-4 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[0_10px_28px_rgb(8_23_63/0.06)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2" href={useCase.href} key={useCase.title}>
              <div className="min-w-0 flex-1">
                <p className="text-[0.65rem] font-black uppercase" style={{ color: domainThemes[useCase.theme].accent }}>
                  {useCase.tag}
                </p>
                <h2 className="mt-2 text-base font-black text-[var(--bta-blue-deeper)]">{useCase.title}</h2>
                <p className="mt-2 text-xs leading-5 text-[var(--bta-muted)]">{useCase.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-[var(--bta-blue)]">
                  Ver más
                  <Icon className="size-3.5" name="arrow-right" />
                </span>
              </div>
              <span className="grid size-20 shrink-0 place-items-center rounded-full" style={{ backgroundColor: domainThemes[useCase.theme].soft, color: domainThemes[useCase.theme].accent }}>
                <Icon className="size-9" name={useCase.icon} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MetricsSection({ page }: { page: DomainPage }) {
  return (
    <section className="bg-[var(--bta-soft)] py-7">
      <Container>
        <DomainSectionHeading title="Métricas clave" description="Indicadores de referencia para orientar conversación y priorización; no representan resultados reales de clientes." />
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {page.metrics.map((metric) => (
            <article className="rounded-xl border border-[var(--bta-border)] bg-white p-4 text-center shadow-[0_8px_26px_rgb(8_23_63/0.05)]" key={metric.label}>
              <IconBubble icon={metric.icon} theme={page.theme} small />
              <h2 className="mt-3 text-xs font-bold text-[var(--bta-muted)]">{metric.label}</h2>
              <p className="mt-1 text-3xl font-black text-[var(--bta-blue-deeper)]">{metric.value}</p>
              <p className="mt-1 text-[0.68rem] leading-4 text-[var(--bta-muted)]">{metric.delta ? `${metric.delta} · ` : ""}{metric.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ResourcesSection({ page }: { page: DomainPage }) {
  return (
    <section className="bg-white py-7">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <DomainSectionHeading title="Recursos y contenidos recomendados" />
          <Link className="inline-flex items-center gap-1.5 text-xs font-black text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2" href="/recursos">
            Ver todos los recursos
            <Icon className="size-3.5" name="arrow-right" />
          </Link>
        </div>
        <ResourceGrid resources={page.resources} theme={page.theme} />
      </Container>
    </section>
  );
}

function OverviewResources() {
  return (
    <section className="bg-white py-7">
      <Container>
        <DomainSectionHeading title="Recursos por dominio" />
        <ResourceGrid resources={overviewResourceTypes.map((item) => ({ type: item.title, title: item.title, description: item.description, href: item.href, icon: item.icon }))} theme="blue" compact />
      </Container>
    </section>
  );
}

function ResourceGrid({
  resources,
  theme,
  compact = false,
}: {
  resources: DomainPage["resources"];
  theme: DomainThemeName;
  compact?: boolean;
}) {
  return (
    <div className={`mt-5 grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-2 lg:grid-cols-4"}`}>
      {resources.map((resource) => (
        <Link className="group flex min-h-28 gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_8px_26px_rgb(8_23_63/0.05)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2" href={resource.href} key={`${resource.type}-${resource.title}`}>
          <IconBubble icon={resource.icon} theme={theme} small />
          <span className="min-w-0">
            <span className="block text-[0.65rem] font-black uppercase text-[var(--bta-blue)]">{resource.type}</span>
            <span className="mt-1 block text-sm font-black leading-tight text-[var(--bta-blue-deeper)]">{resource.title}</span>
            <span className="mt-1 block text-xs leading-5 text-[var(--bta-muted)]">{resource.description}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function DomainFinalCta({
  cta,
  theme,
}: {
  cta: DomainPage["finalCta"];
  theme: DomainThemeName;
}) {
  const themeData = domainThemes[theme];

  return (
    <section className="bg-white pb-8 pt-2">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-[var(--bta-blue)] p-5 text-white shadow-[0_18px_44px_rgb(0_87_255/0.2)] sm:p-7">
          <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 opacity-40" style={{ background: `radial-gradient(circle at 75% 50%, ${themeData.accent}, transparent 45%)` }} />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-white/12 text-white">
                <Icon className="size-7" name={cta.icon} />
              </span>
              <div>
                <h2 className="text-xl font-black leading-tight sm:text-2xl">{cta.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-blue-50">{cta.description}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink className="bg-white text-[var(--bta-blue)] hover:bg-blue-50" href={cta.primaryCta.href} variant="light">
                {cta.primaryCta.label}
              </ButtonLink>
              {cta.secondaryCta ? (
                <ButtonLink href={cta.secondaryCta.href} variant="secondary">
                  {cta.secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DomainSectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-black tracking-tight text-[var(--bta-blue-deeper)]">{title}</h2>
      <span aria-hidden="true" className="mt-2 block h-0.5 w-9 rounded-full bg-[var(--bta-blue)]" />
      {description ? <p className="mt-3 text-sm leading-6 text-[var(--bta-muted)]">{description}</p> : null}
    </div>
  );
}

function IconBubble({
  icon,
  theme,
  small = false,
}: {
  icon: DomainBasicItem["icon"];
  theme: DomainThemeName;
  small?: boolean;
}) {
  const themeData = domainThemes[theme];

  return (
    <span className={`mx-auto grid shrink-0 place-items-center rounded-xl border ${small ? "size-11" : "size-16"}`} style={{ backgroundColor: themeData.soft, borderColor: themeData.border, color: themeData.accent }}>
      <Icon className={small ? "size-5" : "size-8"} name={icon} />
    </span>
  );
}

function MiniCaseVisual({ icon, theme }: { icon: DomainBasicItem["icon"]; theme: DomainThemeName }) {
  const accent = domainThemes[theme].accent;

  return (
    <div className="absolute inset-0">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgb(29_115_255/0.8)_1px,transparent_1px)] [background-size:16px_16px]" />
      <svg aria-hidden="true" className="absolute inset-x-4 bottom-4 h-16 w-[calc(100%-2rem)]" fill="none" viewBox="0 0 260 72">
        <path d="M6 58C42 14 74 64 112 30s62 5 92-17 34 11 50 3" stroke={accent} strokeLinecap="round" strokeWidth="4" />
        <path d="M8 64h244" stroke="rgb(191 219 254 / 0.18)" />
      </svg>
      <span className="absolute right-4 top-6 grid size-14 place-items-center rounded-full bg-white/10 text-white">
        <Icon className="size-7" name={icon} />
      </span>
    </div>
  );
}
