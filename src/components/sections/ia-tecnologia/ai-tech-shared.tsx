import Link from "next/link";

import { Container } from "@/components/layout/container";
import { AiTechCardVisual, AiTechVisual } from "@/components/sections/ia-tecnologia/ai-tech-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import type { AiTechApplication, AiTechBasicItem, AiTechBreadcrumb, AiTechPageConfig, AiTechProcessStep } from "@/types/ia-tecnologia";

export function AiTechHero({ breadcrumbs, hero }: Pick<AiTechPageConfig, "breadcrumbs" | "hero">) {
  return (
    <section className="overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <Container className="grid gap-6 py-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:py-0">
        <div className="relative z-10 flex flex-col justify-center py-3 lg:py-9">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="mt-6 max-w-[39rem] text-4xl font-black leading-[1.07] tracking-tight sm:text-5xl lg:text-[clamp(2.45rem,3.25vw,3rem)]">
            {hero.title}
            <span className="text-[var(--bta-blue-bright)]">
              {" "}
              {hero.highlightedText}
            </span>
          </h1>
          <p className="mt-4 max-w-[36rem] text-sm leading-6 text-blue-100 sm:text-[0.95rem]">
            {hero.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {hero.highlights.map((item) => (
              <div className="flex min-h-12 items-center gap-2.5 border-white/20 text-blue-50 xl:border-r xl:pr-3 last:xl:border-r-0" key={item.title}>
                <Icon className="size-6 shrink-0 text-sky-300" name={item.icon} />
                <span>
                  <span className="block text-xs font-black leading-tight">{item.title}</span>
                  <span className="mt-0.5 block text-[0.68rem] leading-4 text-blue-100">{item.description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative -mx-4 sm:-mx-6 lg:-mr-8 lg:ml-0">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[var(--bta-blue-deeper)] to-transparent lg:block" />
          <AiTechVisual variant={hero.visual} />
        </div>
      </Container>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: readonly AiTechBreadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold text-blue-100">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
            {index > 0 ? <span aria-hidden="true" className="text-blue-300">›</span> : null}
            {item.href ? (
              <Link className="hover:text-white focus-visible:outline focus-visible:outline-2" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function AiTechPillars({ items }: { items: readonly AiTechBasicItem[] }) {
  return (
    <section className="border-b border-[var(--bta-border)] bg-white">
      <Container className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div className="flex gap-3 border-[var(--bta-border)] lg:border-r lg:pr-5 last:lg:border-r-0" key={item.title}>
            <Icon className="size-8 shrink-0 text-[var(--bta-blue)]" name={item.icon} />
            <div>
              <h2 className="text-sm font-black text-[var(--bta-blue-deeper)]">{item.title}</h2>
              <p className="mt-0.5 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function SectionTitle({ children, centered = false }: { children: string; centered?: boolean }) {
  return (
    <h2 className={`text-2xl font-black tracking-tight text-[var(--bta-blue-deeper)] sm:text-[1.7rem] ${centered ? "text-center" : ""}`}>
      {children}
    </h2>
  );
}

export function ContentGrid({ items, columns = "auto" }: { items: readonly AiTechBasicItem[]; columns?: "auto" | "four" }) {
  const gridClass = columns === "four" ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <div className={`mt-5 grid gap-4 sm:grid-cols-2 ${gridClass}`}>
      {items.map((item, index) => (
        <article className="flex min-h-36 flex-col rounded-lg border border-[var(--bta-border)] bg-white p-4 shadow-[0_8px_24px_rgb(8_23_63/0.045)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[var(--bta-shadow)]" key={item.title}>
          <Icon className="size-9 text-[var(--bta-blue)]" name={item.icon} />
          <h3 className="mt-3 text-[0.95rem] font-black leading-tight text-[var(--bta-blue-deeper)]">
            {columns === "four" ? null : `${index + 1}. `}
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-5 text-[var(--bta-muted)]">{item.description}</p>
          {item.href ? (
            <Link className="mt-auto inline-flex items-center gap-2 pt-3 text-xs font-black text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2" href={item.href}>
              Explorar
              <Icon className="size-3.5" name="arrow-right" />
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export function KeyAreas({ title, items }: { title: string; items: readonly AiTechBasicItem[] }) {
  return (
    <section className="bg-white py-6">
      <Container>
        <SectionTitle centered>{title}</SectionTitle>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item) => (
            <div className="border-[var(--bta-border)] text-center lg:border-r lg:px-3 last:lg:border-r-0" key={item.title}>
              <Icon className="mx-auto size-8 text-[var(--bta-blue)]" name={item.icon} />
              <h3 className="mt-2 text-[0.82rem] font-black leading-tight text-[var(--bta-blue-deeper)]">{item.title}</h3>
              <p className="mt-1.5 text-[0.72rem] leading-4 text-[var(--bta-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Applications({ title, items }: { title: string; items: readonly AiTechApplication[] }) {
  return (
    <section className="bg-white py-6" id="aplicaciones">
      <Container>
        <SectionTitle centered>{title}</SectionTitle>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article className="overflow-hidden rounded-lg border border-[var(--bta-border)] bg-white shadow-[0_8px_24px_rgb(8_23_63/0.05)] transition hover:-translate-y-0.5 hover:shadow-[var(--bta-shadow)]" key={item.title}>
              <AiTechCardVisual tag={item.tag} variant={item.visual} />
              <div className="p-4">
                <h3 className="text-[0.95rem] font-black leading-tight text-[var(--bta-blue-deeper)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-5 text-[var(--bta-muted)]">{item.description}</p>
                <Link className="mt-3 inline-flex items-center gap-2 text-xs font-black text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2" href={item.href}>
                  Explorar
                  <Icon className="size-3.5" name="arrow-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Process({ title, items }: { title: string; items: readonly AiTechProcessStep[] }) {
  return (
    <section className="bg-white py-5">
      <Container>
        <SectionTitle centered>{title}</SectionTitle>
        <ol className="mt-6 grid gap-4 lg:grid-cols-5">
          {items.map((item) => (
            <li className="relative text-center lg:px-2 lg:not-last:after:absolute lg:not-last:after:left-[calc(50%+1.75rem)] lg:not-last:after:top-7 lg:not-last:after:h-px lg:not-last:after:w-[calc(100%-3.5rem)] lg:not-last:after:bg-blue-300" key={item.step}>
              <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-blue-200 bg-white text-[var(--bta-blue)] shadow-[0_8px_22px_rgb(8_23_63/0.06)]">
                <Icon className="size-7" name={item.icon} />
              </span>
              <span className="absolute left-1/2 top-0 flex size-6 -translate-x-9 items-center justify-center rounded-full bg-[var(--bta-blue)] text-xs font-black text-white">
                {item.step}
              </span>
              <h3 className="mt-3 text-sm font-black text-[var(--bta-blue-deeper)]">{item.title}</h3>
              <p className="mt-1 text-[0.72rem] leading-4 text-[var(--bta-muted)]">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function EvaluationPanel({ title, items, variant }: { title: string; items: readonly AiTechBasicItem[]; variant: AiTechPageConfig["hero"]["visual"] }) {
  return (
    <section className="bg-white py-5" id="evaluacion">
      <Container>
        <div className="relative overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.18)] lg:p-7">
          <PanelDecoration variant={variant} />
          <h2 className="relative text-2xl font-black tracking-tight sm:text-[1.7rem]">{title}</h2>
          <div className="relative mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {items.map((item) => (
              <div className="border-white/18 lg:border-r lg:pr-3 last:lg:border-r-0" key={item.title}>
                <Icon className="size-8 text-sky-300" name={item.icon} />
                <h3 className="mt-2 text-sm font-black">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Audiences({ items }: { items: readonly AiTechBasicItem[] }) {
  return (
    <section className="bg-white py-6" id="audiencias">
      <Container>
        <SectionTitle centered>¿Para quién es?</SectionTitle>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article className="flex min-h-24 gap-3 rounded-lg border border-[var(--bta-border)] bg-white p-4 shadow-[0_6px_20px_rgb(8_23_63/0.04)]" key={item.title}>
              <Icon className="size-9 shrink-0 text-[var(--bta-blue)]" name={item.icon} />
              <div>
                <h3 className="text-sm font-black text-[var(--bta-blue-deeper)]">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FinalCta({ cta, dark = false }: { cta: AiTechPageConfig["finalCta"]; dark?: boolean }) {
  return (
    <section className="bg-white pb-7 pt-1">
      <Container>
        <div className={`relative overflow-hidden grid gap-5 rounded-lg p-5 sm:grid-cols-[1fr_auto] sm:items-center lg:p-7 ${dark ? "bg-[var(--bta-blue-deeper)] text-white" : "bg-blue-50 text-[var(--bta-blue-deeper)]"}`}>
          {dark ? <div className="absolute inset-y-0 right-0 hidden w-80 bg-[radial-gradient(circle_at_70%_50%,rgb(24_196_199/0.28),transparent_38%)] lg:block" /> : null}
          <div>
            <h2 className="relative max-w-2xl text-2xl font-black leading-tight tracking-tight sm:text-[1.85rem]">{cta.title}</h2>
            {cta.description ? <p className={`mt-2 text-sm ${dark ? "text-blue-100" : "text-[var(--bta-muted)]"}`}>{cta.description}</p> : null}
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={cta.primaryCta.href}>{cta.primaryCta.label}</ButtonLink>
            <ButtonLink href={cta.secondaryCta.href} variant={dark ? "secondary" : "light"}>
              {cta.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PanelDecoration({ variant }: { variant: AiTechPageConfig["hero"]["visual"] }) {
  const common = "absolute inset-y-0 right-0 hidden w-80 opacity-70 lg:block";

  if (variant === "radar" || variant === "governance") {
    return (
      <div className={common}>
        <div className="absolute right-8 top-1/2 size-48 -translate-y-1/2 rounded-full border border-sky-300/25">
          <span className="absolute inset-8 rounded-full border border-sky-300/20" />
          <span className="absolute inset-16 rounded-full border border-sky-300/20" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-sky-300/18" />
          <span className="absolute left-0 top-1/2 h-px w-full bg-sky-300/18" />
        </div>
      </div>
    );
  }

  if (variant === "automation" || variant === "tools" || variant === "transformation") {
    return (
      <div className={common}>
        {[0, 1, 2, 3].map((index) => (
          <span className="absolute rounded-lg border border-sky-300/20 bg-sky-300/8" key={index} style={{ right: `${36 + index * 34}px`, top: `${34 + index * 34}px`, width: 74, height: 36 }} />
        ))}
      </div>
    );
  }

  return (
    <div className={common}>
      <svg className="absolute right-8 top-1/2 h-52 w-72 -translate-y-1/2 text-sky-300/25" fill="none" viewBox="0 0 280 200">
        <path d="M42 120 92 72l46 42 58-76 38 58" stroke="currentColor" strokeWidth="3" />
        <path d="M70 152c24-80 124-98 168-18" stroke="currentColor" strokeDasharray="5 8" strokeWidth="2" />
        {[42, 92, 138, 196, 234].map((x, index) => (
          <circle cx={x} cy={[120, 72, 114, 38, 96][index]} fill="currentColor" key={x} r="5" />
        ))}
      </svg>
    </div>
  );
}
