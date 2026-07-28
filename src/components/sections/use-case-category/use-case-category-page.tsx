import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type {
  UseCaseCategoryPage as UseCaseCategoryPageData,
  UseCaseFeaturedCase,
  UseCaseMetric,
  UseCaseVisualVariant,
} from "@/types/use-case-category";

const accentStyles = {
  blue: "bg-[var(--bta-blue)]",
  cyan: "bg-[var(--bta-turquoise)]",
  violet: "bg-violet-600",
  orange: "bg-orange-500",
};

export function UseCaseCategoryPage({
  page,
}: {
  page: UseCaseCategoryPageData;
}) {
  return (
    <>
      <UseCaseCategoryHero page={page} />
      <ValueStrip page={page} />
      <CapabilitiesSection page={page} />
      <FeaturedCasesSection page={page} />
      <ProcessSection page={page} />
      <ImpactSection page={page} />
      <AudiencesSection page={page} />
      <FinalCta page={page} />
    </>
  );
}

function UseCaseCategoryHero({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(112deg,rgb(2_18_54/0.98)_0%,rgb(3_22_62/0.9)_44%,rgb(1_12_35/0.98)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(circle_at_55%_32%,rgb(29_115_255/0.34),transparent_34%)]"
      />

      <Container className="relative grid gap-7 pb-16 pt-6 sm:pb-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:pb-14">
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs">
            <ol className="flex flex-wrap items-center gap-2 text-blue-100">
              <li>
                <Link
                  className="font-semibold text-[var(--bta-blue-bright)] hover:text-white focus-visible:outline focus-visible:outline-2"
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  className="font-semibold text-blue-100 hover:text-white focus-visible:outline focus-visible:outline-2"
                  href="/casos-de-uso"
                >
                  Casos de uso
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">
                {page.breadcrumbLabel}
              </li>
            </ol>
          </nav>

          <h1 className="max-w-[42rem] text-[2.15rem] font-black leading-[1.07] tracking-tight sm:text-[2.85rem] lg:text-[2.7rem] xl:text-[3.05rem]">
            {page.hero.title}
            <span className="text-[var(--bta-blue-bright)]">
              {" "}
              {page.hero.highlightedText}
            </span>
          </h1>
          <p className="mt-4 max-w-[34rem] text-sm leading-6 text-blue-50 sm:text-[0.95rem]">
            {page.hero.description}
          </p>
          <p className="mt-3 max-w-[34rem] text-[0.7rem] leading-4 text-blue-200">
            Métricas visuales ilustrativas, no resultados históricos
            verificados.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--bta-blue)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_18px_36px_rgb(0_87_255/0.26)] transition hover:bg-[var(--bta-blue-bright)] focus-visible:outline focus-visible:outline-2"
              href="#casos-destacados"
            >
              Explorar casos
              <Icon className="size-4" name="arrow-right" />
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/45 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2"
              href="/agenda"
            >
              Agendar una sesión
              <Icon className="size-4" name="calendar" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[28rem] min-w-0 lg:min-h-[31rem]">
          <HeroVisual
            metrics={page.hero.metrics}
            topics={page.hero.topics}
            variant={page.visualTheme.variant}
          />
        </div>
      </Container>
    </section>
  );
}

function HeroVisual({
  metrics,
  topics,
  variant,
}: Pick<UseCaseCategoryPageData["hero"], "metrics" | "topics"> & {
  variant: UseCaseVisualVariant;
}) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-y-5 left-[8%] right-[13%] overflow-hidden rounded-2xl border border-blue-300/25 bg-blue-950/35 shadow-[0_28px_80px_rgb(0_0_0/0.28)] backdrop-blur">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgb(29_115_255/0.8)_1px,transparent_1px)] [background-size:18px_18px]"
        />
        <DashboardCanvas variant={variant} />
      </div>

      <div className="absolute bottom-7 left-[5%] h-[62%] w-[18%] rounded-t-full bg-white/12" />
      <div className="absolute bottom-7 left-[24%] h-[50%] w-[16%] rounded-t-full bg-white/16" />
      <div className="absolute bottom-7 right-[21%] h-[66%] w-[17%] rounded-t-full bg-white/14" />

      <div className="absolute left-[2%] top-4 grid w-[min(12rem,42vw)] gap-2.5">
        {metrics.slice(0, 2).map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      <div className="absolute bottom-3 left-[16%] grid w-[min(34rem,84vw)] grid-cols-2 gap-2.5 sm:grid-cols-3">
        {metrics.slice(2, 6).map((metric) => (
          <MetricCard compact key={metric.id} metric={metric} />
        ))}
      </div>

      <div className="absolute right-0 top-7 grid w-[min(12rem,42vw)] gap-2">
        {topics.map((topic) => (
          <div
            className="flex min-h-11 items-center gap-2 rounded-lg border border-blue-300/25 bg-blue-950/65 px-3 text-xs font-bold text-white shadow-[0_18px_42px_rgb(0_0_0/0.22)] backdrop-blur"
            key={topic.id}
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--bta-blue)]/30 text-[var(--bta-blue-bright)]">
              <Icon className="size-4" name={topic.icon} />
            </span>
            <span className="min-w-0 leading-tight">{topic.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricCard({
  metric,
  compact = false,
}: {
  metric: UseCaseMetric;
  compact?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-lg border border-blue-300/30 bg-blue-950/70 p-2.5 shadow-[0_18px_42px_rgb(0_0_0/0.18)] backdrop-blur">
      <p className="min-h-[1.85rem] text-[0.62rem] font-semibold leading-[0.92rem] text-blue-100">
        {metric.label}
      </p>
      <p className={`font-black text-cyan-200 ${compact ? "text-lg" : "text-2xl"}`}>
        {metric.value}
      </p>
      <p className="text-[0.6rem] leading-4 text-blue-100">{metric.detail}</p>
    </div>
  );
}

function DashboardCanvas({ variant }: { variant: UseCaseVisualVariant }) {
  const bars =
    variant === "finance"
      ? [38, 62, 46, 78, 72, 88]
      : variant === "talent"
        ? [64, 48, 72, 58, 84, 76]
        : [32, 54, 42, 66, 58, 78];

  return (
    <div className="absolute inset-5 grid grid-cols-[1fr_0.8fr] gap-3">
      <div className="grid grid-rows-[1fr_0.82fr] gap-3">
        <div className="rounded-xl border border-blue-300/15 bg-blue-950/45 p-3">
          <div className="mb-3 h-1.5 w-28 rounded-full bg-blue-100/35" />
          <div className="flex h-[72%] items-end gap-2">
            {bars.map((height) => (
              <span
                className="flex-1 rounded-t bg-[var(--bta-blue-bright)]/70"
                key={height}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-blue-300/15 bg-blue-950/40 p-3">
          <VariantChart variant={variant} />
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-xl border border-blue-300/15 bg-blue-950/40 p-3">
          <div className="mb-4 h-1.5 w-20 rounded-full bg-blue-100/35" />
          <VariantSymbol variant={variant} />
        </div>
        <div className="rounded-xl border border-blue-300/15 bg-blue-950/40 p-3">
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                className="aspect-square rounded bg-blue-100/20"
                key={`${variant}-tile-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VariantChart({ variant }: { variant: UseCaseVisualVariant }) {
  if (variant === "customer") {
    return (
      <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
        <path d="M18 68C45 22 78 72 112 38s61 6 98-25" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        {[18, 62, 112, 164, 210].map((x, index) => (
          <circle cx={x} cy={[68, 52, 38, 44, 13][index]} fill="rgb(34 211 238 / 0.18)" key={x} r="10" stroke="currentColor" strokeWidth="3" />
        ))}
      </svg>
    );
  }

  if (variant === "marketing") {
    return (
      <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
        <path d="M28 18h184l-58 34v24l-68 14V52z" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" />
        <path d="M42 28h116M58 43h78" stroke="currentColor" strokeLinecap="round" opacity="0.5" />
      </svg>
    );
  }

  if (variant === "operations") {
    return (
      <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
        <path d="M20 70h42l38-38h58l48 30" stroke="currentColor" strokeDasharray="5 8" strokeLinecap="round" strokeWidth="4" />
        <rect height="24" rx="4" stroke="currentColor" strokeWidth="3" width="34" x="20" y="58" />
        <rect height="24" rx="4" stroke="currentColor" strokeWidth="3" width="34" x="96" y="20" />
        <rect height="24" rx="4" stroke="currentColor" strokeWidth="3" width="34" x="176" y="50" />
      </svg>
    );
  }

  if (variant === "ai") {
    return (
      <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
        {[42, 88, 130, 176].map((x, index) => (
          <circle cx={x} cy={[28, 66, 34, 62][index]} fill="rgb(34 211 238 / 0.16)" key={x} r="13" stroke="currentColor" strokeWidth="3" />
        ))}
        <path d="M54 34 76 58M101 60l18-20M143 40l21 16M42 28h46M130 34h46" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
      </svg>
    );
  }

  if (variant === "finance") {
    return (
      <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
        <path d="M12 76h210M28 66l32-18 32 9 32-30 36 18 42-34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <path d="M54 22h32M176 62h32" stroke="currentColor" strokeLinecap="round" opacity="0.55" />
      </svg>
    );
  }

  if (variant === "transformation") {
    return (
      <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
        <path d="M22 68h42l28-28h42l28 28h56" stroke="currentColor" strokeDasharray="5 8" strokeLinecap="round" strokeWidth="4" />
        {[22, 64, 92, 134, 162, 218].map((x, index) => (
          <rect height="18" key={x} rx="5" stroke="currentColor" strokeWidth="3" width="30" x={x - 15} y={[59, 59, 31, 31, 59, 59][index]} />
        ))}
      </svg>
    );
  }

  if (variant === "talent") {
    return (
      <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
        <circle cx="58" cy="31" r="15" stroke="currentColor" strokeWidth="4" />
        <circle cx="126" cy="31" r="15" stroke="currentColor" strokeWidth="4" />
        <circle cx="194" cy="31" r="15" stroke="currentColor" strokeWidth="4" />
        <path d="M30 82c8-24 48-24 56 0M98 82c8-24 48-24 56 0M166 82c8-24 48-24 56 0" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-full text-cyan-200/75" fill="none" viewBox="0 0 240 96">
      <path d="M8 74c28-35 52-12 82-36 28-22 52-15 73 5 20 19 35 12 68-26" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
      <path d="M8 86h224" stroke="currentColor" opacity="0.2" />
    </svg>
  );
}

function VariantSymbol({ variant }: { variant: UseCaseVisualVariant }) {
  const icon =
    variant === "customer"
      ? "service"
      : variant === "marketing"
        ? "megaphone"
        : variant === "operations"
          ? "route"
          : variant === "ai"
            ? "ai"
            : variant === "finance"
              ? "money"
              : variant === "transformation"
                ? "list-check"
                : variant === "talent"
                  ? "talent"
                  : "analytics";

  return (
    <div className="mx-auto flex size-24 items-center justify-center rounded-full border-[12px] border-blue-100/15 border-t-cyan-200/80 text-cyan-100">
      <Icon className="size-9" name={icon} />
    </div>
  );
}

function ValueStrip({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="relative z-10 -mt-8 bg-white">
      <Container>
        <div className="grid overflow-hidden rounded-lg border border-[var(--bta-border)] bg-white shadow-[0_8px_24px_rgb(8_23_63/0.07)] sm:grid-cols-2 lg:grid-cols-4">
          {page.valueItems.map((item) => (
            <article
              className="flex min-w-0 items-center gap-3 border-b border-[var(--bta-border)] px-4 py-3.5 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:border-r-blue-100 lg:last:border-r-0"
              key={item.id}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-6" name={item.icon} />
              </span>
              <div className="min-w-0">
                <h2 className="text-xs font-black text-[var(--bta-text)]">
                  {item.title}
                </h2>
                <p className="mt-0.5 text-[0.68rem] leading-4 text-[var(--bta-muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CapabilitiesSection({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="bg-white py-7 sm:py-8">
      <Container>
        <SectionHeading align="center" title="¿Qué encontrarás?" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.capabilities.map((capability) => (
            <article
              className="min-w-0 rounded-lg border border-[var(--bta-border)] bg-white px-5 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_22px_rgb(8_23_63/0.07)]"
              key={capability.id}
            >
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-7" name={capability.icon} />
              </span>
              <h2 className="mt-3 text-sm font-black text-[var(--bta-text)]">
                {capability.title}
              </h2>
              <p className="mt-1.5 text-xs leading-5 text-[var(--bta-muted)]">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedCasesSection({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="bg-white pb-7 sm:pb-8" id="casos-destacados">
      <Container>
        <SectionHeading align="center" title="Casos destacados" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.featuredCases.map((featuredCase) => (
            <article
              className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[var(--bta-border)] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgb(8_23_63/0.08)]"
              key={featuredCase.id}
            >
              <CaseVisual featuredCase={featuredCase} />
              <div className="flex flex-1 flex-col p-3.5">
                <h2 className="text-[0.95rem] font-black leading-tight text-[var(--bta-text)]">
                  {featuredCase.title}
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-[var(--bta-muted)]">
                  {featuredCase.description}
                </p>
                <span className="mt-auto inline-flex min-h-7 w-fit items-center rounded-full bg-blue-50 px-2.5 text-[0.68rem] font-bold text-[var(--bta-blue)]">
                  {featuredCase.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseVisual({ featuredCase }: { featuredCase: UseCaseFeaturedCase }) {
  return (
    <div className="relative aspect-[1.9] overflow-hidden bg-[var(--bta-blue-deeper)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgb(29_115_255/0.35),transparent_28%),linear-gradient(135deg,rgb(2_18_54),rgb(4_33_90))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:26px_26px]"
      />
      <span
        className={`absolute left-3 top-3 z-10 rounded-md px-2 py-1 text-[0.6rem] font-black uppercase tracking-[0.08em] text-white ${accentStyles[featuredCase.accent]}`}
      >
        {featuredCase.category}
      </span>
      <CaseScene id={featuredCase.id} />
      <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl border border-blue-200/30 bg-white/10 text-blue-100 backdrop-blur">
        <Icon className="size-7" name={featuredCase.icon} />
      </div>
    </div>
  );
}

function CaseScene({ id }: { id: string }) {
  if (id.includes("journey") || id.includes("adopcion")) {
    return (
      <svg aria-hidden="true" className="absolute inset-x-5 bottom-5 h-24 text-blue-100" fill="none" viewBox="0 0 220 100">
        <path d="M18 72h42l30-36h42l30 28h40" stroke="currentColor" strokeDasharray="5 8" strokeLinecap="round" strokeWidth="4" />
        {[18, 60, 90, 132, 162, 202].map((x, index) => (
          <circle cx={x} cy={[72, 72, 36, 36, 64, 64][index]} fill="rgb(29 115 255 / 0.25)" key={x} r="8" stroke="currentColor" strokeWidth="3" />
        ))}
      </svg>
    );
  }

  if (id.includes("scoring") || id.includes("dashboard")) {
    return (
      <svg aria-hidden="true" className="absolute inset-x-5 bottom-5 h-24 text-blue-100" fill="none" viewBox="0 0 220 100">
        <rect height="62" rx="8" stroke="currentColor" strokeWidth="3" width="176" x="22" y="18" />
        <path d="M42 62h25M42 46h42M114 66V38M142 66V28M170 66V48" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
        <circle cx="72" cy="31" r="7" stroke="rgb(34 211 238 / 0.8)" strokeWidth="3" />
      </svg>
    );
  }

  if (id.includes("riesgo") || id.includes("anomalias") || id.includes("alertas")) {
    return (
      <svg aria-hidden="true" className="absolute inset-x-5 bottom-5 h-24 text-orange-100" fill="none" viewBox="0 0 220 100">
        <path d="M110 18 54 82h112z" stroke="currentColor" strokeWidth="5" />
        <path d="M110 40v19M110 70h.01" stroke="rgb(251 146 60)" strokeLinecap="round" strokeWidth="6" />
        <path d="M20 80h34M166 80h34" stroke="currentColor" opacity="0.35" />
      </svg>
    );
  }

  if (id.includes("inventario") || id.includes("logistica") || id.includes("procesos")) {
    return (
      <svg aria-hidden="true" className="absolute inset-x-5 bottom-5 h-24 text-blue-100" fill="none" viewBox="0 0 220 100">
        <rect height="28" rx="5" stroke="currentColor" strokeWidth="4" width="42" x="20" y="54" />
        <rect height="28" rx="5" stroke="currentColor" strokeWidth="4" width="42" x="88" y="24" />
        <rect height="28" rx="5" stroke="currentColor" strokeWidth="4" width="42" x="156" y="54" />
        <path d="M62 68h26M130 38l26 30" stroke="rgb(34 211 238 / 0.8)" strokeDasharray="5 7" strokeLinecap="round" strokeWidth="4" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="absolute inset-x-5 bottom-5 h-24 text-blue-100" fill="none" viewBox="0 0 220 100">
      <path d="M12 83h190M26 73V46M55 73V28M84 73V55M113 73V21M142 73V39M171 73V15" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
      <path d="M16 29c25 18 48 12 70-8 29-26 52-4 75 10 18 11 32 4 48-14" stroke="rgb(34 211 238 / 0.75)" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

function ProcessSection({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="bg-white pb-7 sm:pb-8">
      <Container>
        <SectionHeading align="center" title="Cómo trabajamos" />
        <ol className="mt-5 grid gap-4 md:grid-cols-5 md:gap-4">
          {page.processSteps.map((step, index) => (
            <li className="relative min-w-0" key={step.id}>
              {index < page.processSteps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[calc(50%+1.75rem)] top-[2.75rem] hidden h-px w-[calc(100%-3rem)] border-t border-dashed border-[var(--bta-blue)]/55 md:block"
                />
              ) : null}
              <article className="relative flex gap-3 rounded-lg border border-blue-100 bg-white p-3.5 shadow-sm md:block md:border-0 md:p-0 md:text-center md:shadow-none">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-xs font-black text-[var(--bta-blue)] md:mx-auto">
                  {step.number}
                </span>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[var(--bta-blue)] md:mx-auto md:mt-3">
                  <Icon className="size-7" name={step.icon} />
                </span>
                <div className="min-w-0 md:pt-2">
                  <h2 className="text-sm font-black text-[var(--bta-text)]">
                    {step.title}
                  </h2>
                  <p className="mt-1 text-[0.68rem] leading-4 text-[var(--bta-muted)]">
                    {step.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ImpactSection({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="bg-white pb-7 sm:pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.16)] sm:p-6 lg:px-7 lg:py-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_87%_50%,rgb(29_115_255/0.3),transparent_28%),linear-gradient(120deg,transparent,rgb(0_87_255/0.12))]"
          />
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-full w-72 opacity-30 [background-image:radial-gradient(rgb(255_255_255/0.7)_1px,transparent_1px)] [background-size:16px_16px]"
          />
          <div className="relative grid gap-5 xl:grid-cols-[1fr_10rem] xl:items-center">
            <div className="min-w-0">
              <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                Impacto que generamos
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {page.impacts.map((item) => (
                  <article className="min-w-0" key={item.id}>
                    <span className="mb-2 flex size-7 items-center justify-center rounded-full border border-[var(--bta-blue-bright)] text-[var(--bta-blue-bright)]">
                      <Icon className="size-4" name={item.icon} />
                    </span>
                    <h3 className="text-xs font-black sm:text-sm">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.68rem] leading-4 text-blue-100">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <TargetVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

function TargetVisual() {
  return (
    <svg
      aria-hidden="true"
      className="mx-auto hidden size-36 text-[var(--bta-blue-bright)] xl:block"
      fill="none"
      viewBox="0 0 190 190"
    >
      <circle cx="86" cy="104" r="64" stroke="currentColor" strokeWidth="2" opacity="0.26" />
      <circle cx="86" cy="104" r="45" stroke="currentColor" strokeWidth="2" opacity="0.38" />
      <circle cx="86" cy="104" r="24" stroke="currentColor" strokeWidth="2.4" opacity="0.62" />
      <circle cx="86" cy="104" r="7" fill="currentColor" />
      <path d="m92 98 60-60" stroke="currentColor" strokeLinecap="round" strokeWidth="7" />
      <path d="M142 48V26h22M142 48h22V26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" />
    </svg>
  );
}

function AudiencesSection({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="bg-white pb-6 sm:pb-7">
      <Container>
        <SectionHeading align="center" title="¿Para quién es?" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.audiences.map((audience) => (
            <article
              className="flex min-h-28 min-w-0 items-center gap-3 rounded-lg border border-[var(--bta-border)] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_22px_rgb(8_23_63/0.07)]"
              key={audience.id}
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-6" name={audience.icon} />
              </span>
              <div className="min-w-0">
                <h2 className="text-sm font-black text-[var(--bta-text)]">
                  {audience.title}
                </h2>
                <p className="mt-1 text-[0.68rem] leading-4 text-[var(--bta-muted)]">
                  {audience.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta({ page }: { page: UseCaseCategoryPageData }) {
  return (
    <section className="bg-white pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.16)] sm:p-6 lg:grid lg:grid-cols-[15rem_1fr_auto] lg:items-center lg:gap-7 lg:px-7 lg:py-5">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_4%_42%,rgb(29_115_255/0.28),transparent_26%),radial-gradient(circle_at_94%_42%,rgb(29_115_255/0.25),transparent_24%)]"
          />
          <CtaVisual />
          <div className="relative min-w-0">
            <h2 className="max-w-2xl text-2xl font-black leading-tight tracking-tight sm:text-[1.8rem]">
              {page.finalCta.title}
              <span className="block text-[var(--bta-blue-bright)]">
                {page.finalCta.highlightedText}
              </span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50">
              {page.finalCta.description}
            </p>
          </div>
          <div className="relative mt-5 grid gap-2.5 sm:max-w-xs lg:mt-0 lg:w-60">
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--bta-blue)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_18px_36px_rgb(0_87_255/0.26)] transition hover:bg-[var(--bta-blue-bright)] focus-visible:outline focus-visible:outline-2"
              href={page.finalCta.primaryCta.href}
            >
              {page.finalCta.primaryCta.label}
              <Icon className="size-4" name="calendar" />
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/45 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2"
              href={page.finalCta.secondaryCta.href}
            >
              {page.finalCta.secondaryCta.label}
              <Icon className="size-4" name="arrow-right" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CtaVisual() {
  return (
    <div className="relative mb-5 hidden h-28 min-w-0 lg:mb-0 lg:block" aria-hidden="true">
      <div className="absolute bottom-0 left-3 h-24 w-16 rounded-t-[3.5rem] bg-white/13" />
      <div className="absolute bottom-0 left-[4.8rem] h-20 w-14 rounded-t-[3rem] bg-white/17" />
      <div className="absolute left-7 top-2 size-8 rounded-full bg-blue-100/25" />
      <div className="absolute left-[5.7rem] top-6 size-7 rounded-full bg-blue-100/30" />
      <div className="absolute bottom-4 left-16 h-10 w-20 rounded-lg border border-white/15 bg-white/10 backdrop-blur" />
      <div className="absolute right-6 top-4 rounded-xl border border-white/15 bg-white/10 p-2.5 text-blue-100 backdrop-blur">
        <Icon className="size-8" name="consulting" />
      </div>
    </div>
  );
}
