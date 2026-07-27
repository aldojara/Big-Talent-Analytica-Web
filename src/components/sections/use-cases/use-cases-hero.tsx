import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import type { UseCasesHero as UseCasesHeroData } from "@/types/use-case";

export function UseCasesHero({ hero }: { hero: UseCasesHeroData }) {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgb(29_115_255/0.32),transparent_34%),linear-gradient(112deg,rgb(2_18_54/0.98)_0%,rgb(3_22_62/0.92)_46%,rgb(1_12_35/0.98)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <Container className="relative grid gap-6 pb-16 pt-6 sm:pb-20 sm:pt-7 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:pb-16 lg:pt-7">
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs">
            <ol className="flex items-center gap-2 text-blue-100">
              <li>
                <Link
                  className="font-semibold text-[var(--bta-blue-bright)] hover:text-white focus-visible:outline focus-visible:outline-2"
                  href="/"
                >
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">
                {hero.breadcrumb}
              </li>
            </ol>
          </nav>

          <h1 className="max-w-[37rem] text-[2.45rem] font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {hero.title}
            <span className="block text-[var(--bta-blue-bright)]">
              {hero.highlightedTitle}
            </span>
          </h1>
          <p className="mt-4 max-w-[32rem] text-sm leading-6 text-blue-50 sm:text-[0.95rem]">
            {hero.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[var(--bta-blue)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_18px_36px_rgb(0_87_255/0.26)] transition hover:bg-[var(--bta-blue-bright)] focus-visible:outline focus-visible:outline-2"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
              <Icon className="size-4" name="arrow-right" />
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/45 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
              <Icon className="size-4" name="calendar" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[22rem] min-w-0 sm:min-h-[25rem] lg:min-h-[28rem]">
          <DashboardVisual metrics={hero.metrics} />
        </div>
      </Container>
    </section>
  );
}

function DashboardVisual({ metrics }: Pick<UseCasesHeroData, "metrics">) {
  return (
    <div className="absolute inset-0 mx-auto max-w-[45rem]">
      <div className="absolute inset-y-4 right-0 w-[86%] overflow-hidden rounded-2xl border border-blue-300/25 bg-blue-950/30 shadow-[0_28px_80px_rgb(0_0_0/0.28)] backdrop-blur">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgb(29_115_255/0.7)_1px,transparent_1px)] [background-size:18px_18px]"
        />
        <DashboardScreen />
        <svg
          aria-hidden="true"
          className="absolute right-9 top-7 size-24 text-[var(--bta-blue-bright)]"
          fill="none"
          viewBox="0 0 120 120"
        >
          <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="16" opacity="0.24" />
          <path d="M60 18a42 42 0 1 1-36 63.6" stroke="currentColor" strokeLinecap="round" strokeWidth="16" />
        </svg>
        <svg
          aria-hidden="true"
          className="absolute bottom-10 right-14 h-20 w-40 text-blue-300"
          fill="none"
          viewBox="0 0 180 96"
        >
          <path d="M4 78 35 50l26 13 31-38 27 19 39-34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
          <path d="M4 88h166" stroke="currentColor" opacity="0.28" />
        </svg>
      </div>

      <HumanFigure className="absolute bottom-5 left-[6%] h-[74%] w-[24%]" pose="left" />
      <HumanFigure className="absolute bottom-5 left-[32%] h-[63%] w-[20%]" pose="center" />
      <HumanFigure className="absolute bottom-5 right-[8%] h-[75%] w-[23%]" pose="right" />

      <div className="absolute right-0 top-4 grid w-[min(11rem,38vw)] gap-3">
        {metrics.slice(0, 2).map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      <div className="absolute bottom-4 left-[30%] grid w-[min(19rem,68vw)] grid-cols-2 gap-3">
        {metrics.slice(2).map((metric) => (
          <MetricCard key={metric.id} metric={metric} compact />
        ))}
      </div>
      <div className="absolute right-1 top-[34%] hidden w-32 rounded-xl border border-blue-300/25 bg-blue-950/65 p-2 text-[0.68rem] font-bold text-white shadow-[0_18px_42px_rgb(0_0_0/0.22)] sm:block">
        {["Talento", "IA", "Procesos", "Resultados"].map((label) => (
          <div
            className="flex items-center gap-2 border-b border-white/10 py-1.5 last:border-b-0"
            key={label}
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-[var(--bta-blue)]/25 text-[var(--bta-blue-bright)]">
              <Icon
                className="size-3.5"
                name={
                  label === "Talento"
                    ? "talent"
                    : label === "IA"
                      ? "ai"
                      : label === "Procesos"
                        ? "process"
                        : "chart"
                }
              />
            </span>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="absolute left-[20%] top-[16%] h-[48%] w-[55%] rounded-xl border border-blue-300/20 bg-[linear-gradient(140deg,rgb(29_115_255/0.22),rgb(2_18_54/0.58))] p-3">
      <div className="grid h-full grid-cols-[1fr_0.8fr] gap-3">
        <div className="grid grid-rows-[1fr_0.8fr] gap-2">
          <div className="rounded-lg border border-blue-300/10 bg-blue-950/40 p-2">
            <div className="mb-2 h-1.5 w-16 rounded-full bg-blue-200/40" />
            <div className="flex h-[72%] items-end gap-1.5">
              {[32, 54, 42, 66, 58, 78, 72].map((height) => (
                <span
                  className="flex-1 rounded-t bg-[var(--bta-blue-bright)]/65"
                  key={height}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-blue-300/10 bg-blue-950/35 p-2">
            <svg aria-hidden="true" className="size-full text-cyan-200/70" fill="none" viewBox="0 0 210 80">
              <path d="M8 60c28-32 50-8 78-30 25-20 45-13 64 5 18 17 31 10 52-20" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
              <path d="M8 70h194" stroke="currentColor" opacity="0.18" />
            </svg>
          </div>
        </div>
        <div className="rounded-lg border border-blue-300/10 bg-blue-950/35 p-2">
          <div className="mb-3 h-1.5 w-14 rounded-full bg-blue-200/40" />
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                className="aspect-square rounded bg-blue-200/20"
                key={`map-dot-${index}`}
              />
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            <span className="block h-1.5 rounded-full bg-blue-200/35" />
            <span className="block h-1.5 w-2/3 rounded-full bg-blue-200/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HumanFigure({
  className,
  pose,
}: {
  className: string;
  pose: "left" | "center" | "right";
}) {
  const facingLeft = pose === "right";

  return (
    <div className={className} aria-hidden="true">
      <svg
        className="size-full text-white/18"
        fill="none"
        viewBox="0 0 150 310"
      >
        <ellipse cx="75" cy="295" fill="rgb(0 0 0 / 0.28)" rx="52" ry="10" />
        <circle cx="75" cy="52" r="28" fill="currentColor" />
        <path
          d="M42 112c3-34 63-34 67 0l10 120H32z"
          fill="currentColor"
        />
        <path
          d={facingLeft ? "M46 124 9 175" : "M104 124l37 51"}
          stroke="rgb(147 197 253 / 0.55)"
          strokeLinecap="round"
          strokeWidth="14"
        />
        <path
          d={pose === "center" ? "M46 132h58" : facingLeft ? "M105 137 70 174" : "M45 137l35 37"}
          stroke="rgb(219 234 254 / 0.35)"
          strokeLinecap="round"
          strokeWidth="13"
        />
        <path
          d="M52 230 43 296M98 230l9 66"
          stroke="rgb(255 255 255 / 0.18)"
          strokeLinecap="round"
          strokeWidth="16"
        />
      </svg>
    </div>
  );
}

function MetricCard({
  metric,
  compact = false,
}: {
  metric: UseCasesHeroData["metrics"][number];
  compact?: boolean;
}) {
  return (
    <div className="rounded-lg border border-blue-300/30 bg-blue-950/60 p-2.5 shadow-[0_18px_42px_rgb(0_0_0/0.18)] backdrop-blur">
      <p className="text-[0.66rem] font-semibold text-blue-100">{metric.label}</p>
      <p className={`font-black text-cyan-200 ${compact ? "text-xl" : "text-2xl"}`}>
        {metric.value}
      </p>
      <p className="text-[0.62rem] leading-4 text-blue-100">{metric.detail}</p>
    </div>
  );
}
