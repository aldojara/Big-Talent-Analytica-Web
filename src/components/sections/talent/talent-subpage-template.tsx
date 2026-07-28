import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import type {
  TalentSubpageBasicItem,
  TalentSubpageConfig,
  TalentSubpageProcessStep,
  TalentSubpageVisual,
} from "@/types/talent";

export function TalentSubpageTemplate({ page }: { page: TalentSubpageConfig }) {
  return (
    <>
      <TalentSubpageHero page={page} />
      {page.challenges ? <IconCardSection section={page.challenges} /> : null}
      {page.offers ? (
        <IconCardSection
          id={page.slug === "liderazgo-y-cultura" ? "capacidades" : undefined}
          section={page.offers}
        />
      ) : null}
      {page.solutions ? (
        <MediaCardSection
          id={
            page.slug === "upskilling-y-reskilling"
              ? "rutas"
              : page.slug === "talento-e-ia"
                ? "casos"
                : page.slug === "formacion-corporativa"
                  ? "programas"
                  : page.slug === "mentoria-profesional"
                    ? "mentorias"
                    : undefined
          }
          section={page.solutions}
        />
      ) : null}
      {page.audiences || page.darkPanel ? (
        <AudiencePanel page={page} />
      ) : null}
      {page.process ? (
        <ProcessSection
          id={page.slug === "transformacion-organizacional" ? "enfoque" : undefined}
          process={page.process}
        />
      ) : null}
      {page.formats ? <FormatGrid section={page.formats} /> : null}
      {page.scenarios ? <ScenarioSection section={page.scenarios} /> : null}
      {page.relatedContent ? <RelatedContent section={page.relatedContent} /> : null}
      <FinalCta cta={page.finalCta} />
    </>
  );
}

function TalentSubpageHero({ page }: { page: TalentSubpageConfig }) {
  const dark = page.hero.theme === "dark";

  return (
    <section
      className={`relative overflow-hidden ${
        dark
          ? "bg-[var(--bta-blue-deeper)] text-white"
          : "bg-white text-[var(--bta-blue-deeper)]"
      }`}
    >
      {dark ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(110deg,rgb(2_18_54/0.98)_0%,rgb(4_26_72/0.92)_48%,rgb(1_12_35/0.98)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgb(29_115_255/0.7)_1px,transparent_1px)] [background-size:18px_18px]"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_55%_35%,rgb(29_115_255/0.12),transparent_42%)] lg:block"
        />
      )}

      <Container
        className={`relative grid gap-8 pb-8 pt-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center ${
          page.hero.featureStrip ? "lg:pb-20" : "lg:pb-9"
        } ${dark ? "lg:pt-8" : "lg:pt-7"}`}
      >
        <div className="min-w-0">
          <Breadcrumb current={page.breadcrumb} dark={dark} />
          {page.hero.eyebrow ? (
            <p className="mt-7 text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--bta-blue)]">
              {page.hero.eyebrow}
            </p>
          ) : null}
          <h1
            className={`mt-5 max-w-[42rem] text-[2.25rem] font-black leading-[1.06] tracking-tight sm:text-[3rem] lg:text-[clamp(3rem,4.2vw,4rem)] ${
              dark ? "text-white" : "text-[var(--bta-blue-deeper)]"
            }`}
          >
            <HighlightedTitle
              highlight={page.hero.highlightedText}
              title={page.hero.title}
            />
          </h1>
          {page.hero.subtitle ? (
            <p className="mt-3 max-w-[36rem] text-xl font-semibold text-blue-100 sm:text-2xl">
              {page.hero.subtitle}
            </p>
          ) : null}
          <p
            className={`mt-4 max-w-[36rem] text-sm leading-6 sm:text-[0.98rem] ${
              dark ? "text-blue-50" : "text-[var(--bta-muted)]"
            }`}
          >
            {page.hero.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={page.hero.primaryCta.href}>
              {page.hero.primaryCta.label}
            </ButtonLink>
            {page.hero.secondaryCta ? (
              <ButtonLink
                href={page.hero.secondaryCta.href}
                variant={dark ? "secondary" : "light"}
              >
                {page.hero.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        <TalentHeroVisual dark={dark} variant={page.hero.visual} />

        {page.hero.chips ? (
          <nav
            aria-label="Temas de talento"
            className="lg:col-span-2"
          >
            <ul className="flex gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-2 sm:overflow-visible md:grid-cols-3 lg:grid-cols-6">
              {page.hero.chips.map((item) => (
                <li className="min-w-[11rem] sm:min-w-0" key={item.title}>
                  <span className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--bta-border)] bg-white px-3 text-center text-[0.72rem] font-black text-[var(--bta-text)] shadow-[0_6px_18px_rgb(8_23_63/0.035)]">
                    <Icon className="size-4 shrink-0 text-[var(--bta-blue)]" name={item.icon} />
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>

      {page.hero.featureStrip ? (
        <FeatureStrip items={page.hero.featureStrip} overlap={dark} />
      ) : null}
    </section>
  );
}

function HighlightedTitle({
  title,
  highlight,
}: {
  title: string;
  highlight: string;
}) {
  const index = title.lastIndexOf(highlight);

  if (index === -1) {
    return (
      <>
        {title}{" "}
        <span className="text-[var(--bta-blue-bright)]">{highlight}</span>
      </>
    );
  }

  return (
    <>
      {title.slice(0, index)}
      <span className="text-[var(--bta-blue-bright)]">{highlight}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

function Breadcrumb({ current, dark }: { current: string; dark: boolean }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-xs font-semibold ${dark ? "text-blue-100" : "text-[var(--bta-muted)]"}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            className={`${dark ? "text-[var(--bta-blue-bright)] hover:text-white" : "text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)]"} focus-visible:outline focus-visible:outline-2`}
            href="/"
          >
            Inicio
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link
            className={`${dark ? "hover:text-white" : "hover:text-[var(--bta-blue)]"} focus-visible:outline focus-visible:outline-2`}
            href="/talento"
          >
            Talento
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className={dark ? "text-white" : "text-[var(--bta-blue-deeper)]"}>
          {current}
        </li>
      </ol>
    </nav>
  );
}

function FeatureStrip({
  items,
  overlap,
}: {
  items: TalentSubpageBasicItem[];
  overlap: boolean;
}) {
  return (
    <div className={`relative z-20 bg-white ${overlap ? "-mt-8" : "border-y border-[var(--bta-border)]"}`}>
      <Container>
        <div className="grid gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_18px_44px_rgb(8_23_63/0.1)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div className="flex min-h-20 gap-3 lg:border-r lg:border-[var(--bta-border)] lg:pr-4 last:lg:border-r-0" key={item.title}>
              <Icon className="size-10 shrink-0 text-[var(--bta-blue)]" name={item.icon} />
              <div>
                <h2 className="text-sm font-black leading-tight text-[var(--bta-blue-deeper)]">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-[var(--bta-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

function TalentHeroVisual({
  variant,
  dark,
}: {
  variant: TalentSubpageVisual;
  dark: boolean;
}) {
  const labelsByVariant: Record<TalentSubpageVisual, string[]> = {
    leadership: ["Confianza", "Propósito", "Alineación", "Impacto"],
    learning: ["Mapa de habilidades", "Progreso 75%", "Competencias clave", "Ruta activa"],
    "talent-ai": ["Estrategia", "Personas", "Datos", "IA responsable", "Herramientas", "Resultados"],
    training: ["Progreso 78%", "Mapa de habilidades", "Participación 92%", "Impacto +24%"],
    mentoring: ["Progreso 82%", "Objetivos definidos", "Impacto +35%", "Plan de acción"],
    transformation: ["Estrategia", "Personas", "Procesos", "Tecnología", "Resultados"],
  };
  const labels = labelsByVariant[variant];

  return (
    <div className="relative mx-auto min-h-[24rem] w-full max-w-[39rem] sm:min-h-[30rem]">
      <div
        aria-hidden="true"
        className={`absolute inset-4 overflow-hidden rounded-2xl border ${
          dark
            ? "border-blue-300/20 bg-blue-950/35 shadow-[0_28px_80px_rgb(0_0_0/0.26)]"
            : "border-blue-100 bg-blue-50/40 shadow-[0_18px_52px_rgb(8_23_63/0.08)]"
        }`}
      >
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgb(29_115_255/0.7)_1px,transparent_1px)] [background-size:18px_18px]" />
        <HeroScene variant={variant} />
      </div>

      {labels.map((label, index) => (
        <FloatingMetric
          dark={dark}
          index={index}
          key={label}
          label={label}
          variant={variant}
        />
      ))}
    </div>
  );
}

function FloatingMetric({
  label,
  index,
  variant,
  dark,
}: {
  label: string;
  index: number;
  variant: TalentSubpageVisual;
  dark: boolean;
}) {
  const positions: Record<TalentSubpageVisual, string[]> = {
    leadership: [
      "left-2 top-7",
      "right-4 top-10",
      "left-6 bottom-10",
      "right-3 bottom-12",
    ],
    learning: [
      "left-4 top-6",
      "right-4 top-12",
      "right-3 bottom-14",
      "left-7 bottom-8",
    ],
    "talent-ai": [
      "left-3 top-12",
      "left-4 top-[36%]",
      "left-8 bottom-12",
      "right-4 top-11",
      "right-2 top-[40%]",
      "right-7 bottom-12",
    ],
    training: [
      "left-3 top-7",
      "left-[32%] top-4",
      "right-4 top-9",
      "right-5 bottom-12",
    ],
    mentoring: [
      "left-4 top-8",
      "left-[38%] top-5",
      "right-7 bottom-14",
      "left-8 bottom-10",
    ],
    transformation: [
      "left-5 top-9",
      "left-[27%] top-10",
      "left-[48%] top-10",
      "right-[17%] top-10",
      "right-4 top-10",
    ],
  };

  return (
    <div
      className={`absolute z-20 hidden max-w-[10.5rem] rounded-lg border p-2.5 text-[0.68rem] font-black leading-tight shadow-[0_18px_42px_rgb(8_23_63/0.12)] backdrop-blur sm:block ${positions[variant][index]} ${
        dark
          ? "border-blue-300/30 bg-blue-950/75 text-white"
          : "border-blue-100 bg-white/95 text-[var(--bta-blue-deeper)]"
      }`}
    >
      <span className="block text-[var(--bta-blue-bright)]">{label}</span>
      <span className={`mt-1 block text-[0.6rem] font-semibold ${dark ? "text-blue-100" : "text-[var(--bta-muted)]"}`}>
        Métrica visual ilustrativa
      </span>
    </div>
  );
}

function HeroScene({ variant }: { variant: TalentSubpageVisual }) {
  if (variant === "leadership") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex size-36 items-center justify-center rounded-full border-[8px] border-white bg-[var(--bta-blue)] text-white shadow-[0_18px_38px_rgb(0_87_255/0.22)]">
          <Icon className="size-16" name="talent" />
          <Orbit icon="community" position="-left-20 top-9" />
          <Orbit icon="support" position="-right-20 top-9" />
          <Orbit icon="process" position="bottom-[-4.5rem] left-1/2 -translate-x-1/2" />
        </div>
      </div>
    );
  }

  if (variant === "talent-ai") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-64 w-44 rounded-full bg-[linear-gradient(90deg,rgb(5_30_82/0.3),rgb(29_115_255/0.18))]">
          <div className="absolute left-10 top-8 h-44 w-24 rounded-full border border-cyan-200/55" />
          <Icon className="absolute left-20 top-20 size-24 text-cyan-200" name="ai" />
        </div>
        <div className="absolute inset-14 rounded-full border border-blue-300/35" />
        <div className="absolute inset-24 rounded-full border border-blue-300/25" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 grid grid-cols-[0.85fr_1.15fr] items-end gap-4 p-8">
      <div className="flex h-60 items-end justify-center gap-3">
        <Person height="h-40" />
        <Person height="h-52" />
        <Person height="h-36" />
      </div>
      <div className="mb-8 rounded-xl border border-blue-300/20 bg-blue-950/40 p-4">
        <div className="mb-4 h-2 w-36 rounded-full bg-blue-100/40" />
        <div className="flex h-32 items-end gap-2">
          {[38, 62, 48, 76, 66, 88, 80].map((height) => (
            <span
              className="flex-1 rounded-t bg-[var(--bta-blue-bright)]/75"
              key={height}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Orbit({ icon, position }: { icon: TalentSubpageBasicItem["icon"]; position: string }) {
  return (
    <span className={`absolute flex size-14 items-center justify-center rounded-full border border-blue-200 bg-white text-[var(--bta-blue)] shadow-[0_12px_28px_rgb(8_23_63/0.08)] ${position}`}>
      <Icon className="size-7" name={icon} />
    </span>
  );
}

function Person({ height }: { height: string }) {
  return (
    <span className={`relative w-16 rounded-t-full bg-white/16 ${height}`}>
      <span className="absolute -top-7 left-1/2 size-12 -translate-x-1/2 rounded-full bg-white/18" />
    </span>
  );
}

function IconCardSection({
  section,
  id,
}: {
  section: { title: string; items: TalentSubpageBasicItem[] };
  id?: string;
}) {
  return (
    <section className="bg-white py-7 sm:py-8" id={id}>
      <Container>
        <SectionTitle centered={section.items.length > 4}>{section.title}</SectionTitle>
        <div className={`mt-5 grid gap-4 sm:grid-cols-2 ${section.items.length === 5 ? "lg:grid-cols-5" : section.items.length === 6 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {section.items.map((item) => (
            <IconCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IconCard({ item }: { item: TalentSubpageBasicItem }) {
  const content = (
    <>
      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[var(--bta-blue)]">
        <Icon className="size-7" name={item.icon} />
      </span>
      <div className="min-w-0">
        <h3 className="text-[0.95rem] font-black leading-tight text-[var(--bta-blue-deeper)]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-5 text-[var(--bta-muted)]">
          {item.description}
        </p>
      </div>
      {item.href ? (
        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-black text-[var(--bta-blue)]">
          Conocer más
          <Icon className="size-3.5" name="arrow-right" />
        </span>
      ) : null}
    </>
  );

  const className =
    "group flex min-h-40 flex-col rounded-lg border border-[var(--bta-border)] bg-white p-4 shadow-[0_8px_24px_rgb(8_23_63/0.045)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[var(--bta-shadow)]";

  if (item.href) {
    return (
      <Link className={className} href={item.href}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}

function MediaCardSection({
  section,
  id,
}: {
  section: { title: string; items: TalentSubpageBasicItem[] };
  id?: string;
}) {
  return (
    <section className="bg-white py-7" id={id}>
      <Container>
        <SectionTitle centered>{section.title}</SectionTitle>
        <div className={`mt-5 grid gap-5 sm:grid-cols-2 ${section.items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {section.items.map((item) => (
            <article
              className="overflow-hidden rounded-lg border border-[var(--bta-border)] bg-white shadow-[0_8px_24px_rgb(8_23_63/0.05)] transition hover:-translate-y-0.5 hover:shadow-[var(--bta-shadow)]"
              key={item.title}
            >
              <CardVisual item={item} />
              <div className="p-4">
                <h3 className="text-[0.98rem] font-black leading-tight text-[var(--bta-blue-deeper)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-[var(--bta-muted)]">
                  {item.description}
                </p>
                {item.href ? (
                  <Link
                    className="mt-3 inline-flex items-center gap-2 text-xs font-black text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2"
                    href={item.href}
                  >
                    Conocer programa
                    <Icon className="size-3.5" name="arrow-right" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CardVisual({ item }: { item: TalentSubpageBasicItem }) {
  return (
    <div className="relative h-32 overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgb(29_115_255/0.48),transparent_36%)]" />
      {item.tag ? (
        <span className="absolute left-3 top-3 rounded-md bg-[var(--bta-blue)] px-2 py-1 text-[0.58rem] font-black uppercase">
          {item.tag}
        </span>
      ) : null}
      <Icon className="absolute bottom-4 right-4 size-16 text-blue-200/70" name={item.icon} />
    </div>
  );
}

function AudiencePanel({ page }: { page: TalentSubpageConfig }) {
  const hasBoth = page.audiences && page.darkPanel;

  return (
    <section className="bg-white py-7">
      <Container className={hasBoth ? "grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start" : ""}>
        {page.audiences ? <AudienceList section={page.audiences} /> : null}
        {page.darkPanel ? <DarkPanel panel={page.darkPanel} /> : null}
      </Container>
    </section>
  );
}

function AudienceList({
  section,
}: {
  section: { title: string; items: TalentSubpageBasicItem[] };
}) {
  return (
    <div>
      <SectionTitle>{section.title}</SectionTitle>
      <div className="mt-4 grid gap-3">
        {section.items.map((item) => (
          <article
            className="flex min-h-20 gap-3 rounded-lg border border-[var(--bta-border)] bg-white p-3 shadow-[0_6px_20px_rgb(8_23_63/0.04)]"
            key={item.title}
          >
            <Icon className="size-9 shrink-0 text-[var(--bta-blue)]" name={item.icon} />
            <div>
              <h3 className="text-sm font-black text-[var(--bta-blue-deeper)]">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-[var(--bta-muted)]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function DarkPanel({
  panel,
}: {
  panel: { title: string; items: TalentSubpageBasicItem[] };
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.18)] lg:p-7">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-72 opacity-70 [background-image:radial-gradient(circle_at_65%_50%,rgb(29_115_255/0.36),transparent_38%)]"
      />
      <h2 className="relative text-2xl font-black tracking-tight sm:text-[1.7rem]">
        {panel.title}
      </h2>
      <ul className="relative mt-5 grid gap-3">
        {panel.items.map((item) => (
          <li className="flex gap-3" key={item.title}>
            <Icon className="mt-0.5 size-5 shrink-0 text-cyan-200" name={item.icon} />
            <span>
              <span className="block text-sm font-black">{item.title}</span>
              <span className="mt-0.5 block text-xs leading-5 text-blue-100">
                {item.description}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessSection({
  process,
  id,
}: {
  process: NonNullable<TalentSubpageConfig["process"]>;
  id?: string;
}) {
  if (process.variant === "cards") {
    return (
      <section className="bg-[var(--bta-soft)] py-8" id={id}>
        <Container>
          <SectionTitle centered>{process.title}</SectionTitle>
          <ProcessCardGrid items={process.items} />
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-white py-7" id={id}>
      <Container>
        <SectionTitle centered>{process.title}</SectionTitle>
        {process.subtitle ? (
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-6 text-[var(--bta-muted)]">
            {process.subtitle}
          </p>
        ) : null}
        <ol className="mt-7 grid gap-5 lg:grid-cols-5">
          {process.items.map((item) => (
            <li
              className="relative text-center lg:not-last:after:absolute lg:not-last:after:left-[calc(50%+2rem)] lg:not-last:after:top-8 lg:not-last:after:h-px lg:not-last:after:w-[calc(100%-4rem)] lg:not-last:after:bg-blue-300 lg:not-last:after:[background-image:linear-gradient(90deg,var(--bta-blue),var(--bta-blue))]"
              key={item.step}
            >
              <StepBadge item={item} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ProcessCardGrid({ items }: { items: TalentSubpageProcessStep[] }) {
  return (
    <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {items.map((item) => (
        <li
          className="rounded-lg border border-[var(--bta-border)] bg-white p-4 text-center shadow-[0_8px_24px_rgb(8_23_63/0.045)]"
          key={item.step}
        >
          <StepBadge item={item} />
        </li>
      ))}
    </ol>
  );
}

function StepBadge({ item }: { item: TalentSubpageProcessStep }) {
  return (
    <>
      <span className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-blue-200 bg-white text-[var(--bta-blue)] shadow-[0_8px_22px_rgb(8_23_63/0.06)]">
        <Icon className="size-8" name={item.icon} />
        <span className="absolute -left-1 -top-1 flex size-6 items-center justify-center rounded-full bg-[var(--bta-blue)] text-xs font-black text-white">
          {item.step}
        </span>
      </span>
      <h3 className="mt-3 text-sm font-black text-[var(--bta-blue-deeper)]">
        {item.title}
      </h3>
      <p className="mx-auto mt-1 max-w-40 text-xs leading-5 text-[var(--bta-muted)]">
        {item.description}
      </p>
    </>
  );
}

function FormatGrid({
  section,
}: {
  section: { title: string; subtitle?: string; items: TalentSubpageBasicItem[] };
}) {
  return (
    <section className="bg-white py-7">
      <Container>
        <SectionTitle centered>{section.title}</SectionTitle>
        {section.subtitle ? (
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-[var(--bta-muted)]">
            {section.subtitle}
          </p>
        ) : null}
        <div className="mt-5 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {section.items.map((item) => (
            <article
              className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-[var(--bta-border)] bg-white p-3 text-center shadow-[0_6px_20px_rgb(8_23_63/0.035)]"
              key={item.title}
            >
              <Icon className="size-9 text-[var(--bta-blue)]" name={item.icon} />
              <h3 className="mt-2 text-[0.78rem] font-black leading-tight text-[var(--bta-blue-deeper)]">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ScenarioSection({
  section,
}: {
  section: { title: string; items: TalentSubpageBasicItem[] };
}) {
  return (
    <section className="bg-white py-6">
      <Container>
        <SectionTitle>{section.title}</SectionTitle>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {section.items.map((item) => (
            <article className="flex gap-4 rounded-lg border border-[var(--bta-border)] bg-blue-50/45 p-4" key={item.title}>
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--bta-blue)] text-white">
                <Icon className="size-8" name={item.icon} />
              </span>
              <div>
                <h3 className="text-base font-black leading-tight text-[var(--bta-blue-deeper)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-[var(--bta-muted)]">
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

function RelatedContent({
  section,
}: {
  section: { title: string; items: TalentSubpageBasicItem[] };
}) {
  return (
    <section className="bg-white py-6">
      <Container>
        <SectionTitle>{section.title}</SectionTitle>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {section.items.map((item) => (
            <Link
              className="group grid min-h-32 grid-cols-[5rem_1fr] gap-3 rounded-lg border border-[var(--bta-border)] bg-white p-3 shadow-[0_8px_24px_rgb(8_23_63/0.045)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[var(--bta-shadow)]"
              href={item.href ?? "/recursos"}
              key={item.title}
            >
              <span className="relative flex h-full min-h-24 items-center justify-center rounded-lg bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-12" name={item.icon} />
              </span>
              <span>
                {item.tag ? (
                  <span className="rounded bg-[var(--bta-blue)] px-2 py-1 text-[0.58rem] font-black uppercase text-white">
                    {item.tag}
                  </span>
                ) : null}
                <span className="mt-2 block text-[0.95rem] font-black leading-tight text-[var(--bta-blue-deeper)]">
                  {item.title}
                </span>
                <span className="mt-1.5 block text-xs leading-5 text-[var(--bta-muted)]">
                  {item.description}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-black text-[var(--bta-blue)]">
                  Leer más
                  <Icon className="size-3.5" name="arrow-right" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta({ cta }: { cta: TalentSubpageConfig["finalCta"] }) {
  return (
    <section className="bg-white pb-8 pt-3">
      <Container>
        <div className="relative grid gap-5 overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.18)] sm:grid-cols-[auto_1fr_auto] sm:items-center lg:p-7">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-96 opacity-70 [background-image:radial-gradient(circle_at_70%_50%,rgb(29_115_255/0.36),transparent_38%)] lg:block"
          />
          <span className="relative flex size-16 items-center justify-center rounded-full bg-[var(--bta-blue)]/25 text-blue-100 ring-1 ring-blue-300/30">
            <Icon className="size-9" name={cta.icon} />
          </span>
          <div className="relative">
            <h2 className="max-w-3xl text-2xl font-black leading-tight tracking-tight sm:text-[1.85rem]">
              {cta.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-blue-100">
              {cta.description}
            </p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={cta.primaryCta.href}>{cta.primaryCta.label}</ButtonLink>
            {cta.secondaryCta ? (
              <ButtonLink href={cta.secondaryCta.href} variant="secondary">
                {cta.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SectionTitle({
  children,
  centered = false,
}: {
  children: string;
  centered?: boolean;
}) {
  return (
    <h2
      className={`text-2xl font-black tracking-tight text-[var(--bta-blue-deeper)] sm:text-[1.75rem] ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}
