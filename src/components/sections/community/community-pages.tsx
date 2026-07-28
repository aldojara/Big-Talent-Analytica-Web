import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import {
  collaborationCards,
  communityBenefits,
  communityChannels,
  communityMetrics,
  communityNavItems,
  overviewEvents,
} from "@/data/community";
import type {
  CommunityContentCard,
  CommunityEvent,
  CommunityFeature,
  CommunityMetric,
  CommunitySubpage,
  CommunityTheme,
} from "@/types/community";

const themeStyles: Record<
  CommunityTheme,
  { text: string; bg: string; soft: string; border: string; gradient: string }
> = {
  blue: {
    text: "text-[var(--bta-blue-bright)]",
    bg: "bg-[var(--bta-blue)]",
    soft: "bg-blue-50 text-[var(--bta-blue)]",
    border: "border-blue-200",
    gradient: "from-blue-600 to-cyan-400",
  },
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-600",
    soft: "bg-violet-50 text-violet-700",
    border: "border-violet-200",
    gradient: "from-violet-600 to-blue-500",
  },
  teal: {
    text: "text-teal-300",
    bg: "bg-teal-500",
    soft: "bg-teal-50 text-teal-700",
    border: "border-teal-200",
    gradient: "from-teal-500 to-blue-500",
  },
  green: {
    text: "text-emerald-300",
    bg: "bg-emerald-500",
    soft: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-200",
    gradient: "from-emerald-500 to-teal-500",
  },
  orange: {
    text: "text-orange-300",
    bg: "bg-orange-500",
    soft: "bg-orange-50 text-orange-700",
    border: "border-orange-200",
    gradient: "from-orange-500 to-violet-500",
  },
  rose: {
    text: "text-rose-400",
    bg: "bg-rose-500",
    soft: "bg-rose-50 text-rose-700",
    border: "border-rose-200",
    gradient: "from-rose-500 to-orange-400",
  },
};

export function CommunityOverviewPage() {
  return (
    <>
      <CommunityMainHero />
      <FeatureCardGrid
        id="explorar"
        items={communityNavItems.map((item) => ({
          title: item.menuLabel,
          description: item.description,
          icon: item.icon,
          href: item.href,
          theme: item.theme,
        }))}
        title="Explora la comunidad"
      />
      <IconStrip items={communityBenefits} title="Lo que encontraras" />
      <OverviewHighlights />
      <ChannelGrid items={communityChannels} title="Canales y redes" />
      <FeatureCardGrid compact items={collaborationCards} title="Colaboraciones destacadas" />
      <PrivateBand />
      <FinalCta
        cta={{
          title: "Unete al ecosistema de conocimiento y transformacion.",
          description:
            "Suscribete a nuestra newsletter, participa en eventos y propon colaboraciones.",
          primaryCta: { label: "Suscribirme a la newsletter", href: "/comunidad/newsletter" },
          secondaryCta: { label: "Proponer colaboracion", href: "/comunidad/colaboraciones" },
          icon: "community",
        }}
      />
    </>
  );
}

export function CommunitySubpageView({ page }: { page: CommunitySubpage }) {
  return (
    <>
      <CommunitySubpageHero page={page} />
      <MetricStrip metrics={page.metrics} />
      <FeatureCardGrid
        id="beneficios"
        items={page.sections.introItems}
        title={page.sections.introTitle}
      />
      {page.sections.valueItems ? (
        <IconStrip items={page.sections.valueItems} title={page.sections.valueTitle ?? ""} />
      ) : null}
      {page.sections.featuredTitle ? <FeaturedExperience page={page} /> : null}
      {page.sections.process ? (
        <ProcessTimeline items={page.sections.process} title={page.sections.processTitle ?? ""} />
      ) : null}
      {page.sections.formats ? (
        <FeatureCardGrid compact items={page.sections.formats} title={page.sections.formatsTitle ?? ""} />
      ) : null}
      {page.sections.audiences ? (
        <FeatureCardGrid compact items={page.sections.audiences} title={page.sections.audienceTitle ?? ""} />
      ) : null}
      {page.sections.cards ? (
        <ContentCardGrid items={page.sections.cards} title={page.sections.cardsTitle ?? ""} />
      ) : null}
      {page.sections.testimonials ? (
        <Testimonials items={page.sections.testimonials} title={page.sections.testimonialsTitle ?? ""} />
      ) : null}
      <FinalCta
        cta={page.finalCta}
        id={
          page.slug === "comunidad-privada"
            ? "lista"
            : page.slug === "newsletter" || page.slug === "webinars-y-eventos"
              ? "suscripcion"
              : undefined
        }
      />
    </>
  );
}

function CommunityMainHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-14">
        <div>
          <Breadcrumb current="Comunidad" />
          <h1 className="mt-7 max-w-[42rem] text-[2.4rem] font-black leading-[1.06] tracking-tight sm:text-[3.25rem] lg:text-[3.55rem]">
            Una comunidad para{" "}
            <span className="text-[var(--bta-blue-bright)]">aprender, conectar y crecer</span>
          </h1>
          <p className="mt-5 max-w-[40rem] text-sm leading-7 text-blue-50 sm:text-base">
            En Big Talent Analytica reunimos conocimiento, conversaciones,
            aprendizaje y colaboracion en torno a la IA, la analitica, el
            talento, la tecnologia y la transformacion.
          </p>
          <p className="mt-3 max-w-md text-[0.7rem] leading-4 text-blue-200">
            Metricas del hero son referencias visuales ilustrativas.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#explorar">Explorar comunidad</ButtonLink>
            <ButtonLink href="/comunidad/newsletter" variant="secondary">
              Suscribirme
            </ButtonLink>
          </div>
        </div>
        <CommunityNetworkVisual metrics={communityMetrics} />
      </Container>
    </section>
  );
}

function CommunitySubpageHero({ page }: { page: CommunitySubpage }) {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground accent={page.theme} />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
        <div>
          <Breadcrumb current={page.breadcrumbLabel} parent={{ label: "Comunidad", href: "/comunidad" }} />
          <p className={`mt-7 inline-flex rounded-lg border px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] ${themeStyles[page.theme].soft} ${themeStyles[page.theme].border}`}>
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[45rem] text-[2.25rem] font-black leading-[1.06] tracking-tight sm:text-[3.05rem] lg:text-[3.35rem]">
            <HighlightedTitle page={page} />
          </h1>
          <p className="mt-5 max-w-[40rem] text-sm leading-7 text-blue-50 sm:text-base">
            {page.description}
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {page.benefits.slice(0, 3).map((benefit) => (
              <div className="rounded-xl border border-white/10 bg-white/5 p-3" key={benefit.title}>
                <Icon className={`size-7 ${themeStyles[benefit.theme ?? page.theme].text}`} name={benefit.icon} />
                <h2 className="mt-2 text-xs font-black">{benefit.title}</h2>
                <p className="mt-1 text-[0.72rem] leading-4 text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
            {page.secondaryCta ? (
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
        <HeroVisual page={page} />
      </Container>
    </section>
  );
}

function DarkHeroBackground({ accent = "blue" }: { accent?: CommunityTheme | "blue" }) {
  const color =
    accent === "orange"
      ? "rgb(249 115 22 / 0.36)"
      : accent === "teal"
        ? "rgb(20 184 166 / 0.34)"
        : accent === "violet"
          ? "rgb(124 58 237 / 0.36)"
          : "rgb(29 115 255 / 0.42)";

  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(112deg,rgb(2_18_54/0.99)_0%,rgb(3_22_62/0.95)_50%,rgb(1_12_35/0.99)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgb(29_115_255/0.72)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-2/3 opacity-80" style={{ background: `radial-gradient(circle at 55% 42%, ${color}, transparent 38%)` }} />
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
        <li aria-current="page" className="text-white">{current}</li>
      </ol>
    </nav>
  );
}

function HighlightedTitle({ page }: { page: CommunitySubpage }) {
  const pattern = new RegExp(`(${page.highlightedTerms.map(escapeRegExp).join("|")})`, "gi");

  return (
    <>
      {page.title.split(pattern).map((part, index) =>
        page.highlightedTerms.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
          <span className={themeStyles[page.theme].text} key={`${part}-${index}`}>{part}</span>
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

function CommunityNetworkVisual({ metrics }: { metrics: CommunityMetric[] }) {
  return (
    <div className="relative mx-auto min-h-[31rem] w-full max-w-[45rem]">
      <div aria-hidden="true" className="absolute inset-8 rounded-full border border-blue-300/20" />
      <div aria-hidden="true" className="absolute inset-20 rounded-full border border-dashed border-blue-300/25" />
      <svg aria-hidden="true" className="absolute inset-0 size-full text-blue-300/50" viewBox="0 0 680 520">
        <path d="M340 260 190 90M340 260 105 235M340 260 210 425M340 260 470 425M340 260 575 235M340 260 500 90" fill="none" stroke="currentColor" strokeDasharray="4 9" />
      </svg>
      <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-200/30 bg-[var(--bta-blue)] shadow-[0_0_80px_rgb(29_115_255/0.55)]">
        <Icon className="size-14 text-white" name="community" />
      </div>
      {communityNavItems.map((item, index) => (
        <OrbitNode index={index} item={item} key={item.href} />
      ))}
      <div className="absolute right-0 top-2 hidden w-40 gap-2 sm:grid">
        {metrics.map((metric) => <HeroMetric metric={metric} key={metric.label} />)}
      </div>
    </div>
  );
}

function OrbitNode({ item, index }: { item: (typeof communityNavItems)[number]; index: number }) {
  const positions = [
    "left-[44%] top-[2%]",
    "left-[4%] top-[33%]",
    "right-[6%] top-[33%]",
    "left-[12%] bottom-[10%]",
    "right-[13%] bottom-[10%]",
  ];

  return (
    <Link className={`absolute grid max-w-[9rem] place-items-center gap-2 rounded-xl border border-blue-300/25 bg-blue-950/75 p-3 text-center text-xs font-black text-white shadow-[0_18px_42px_rgb(0_0_0/0.22)] backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 ${positions[index]}`} href={item.href}>
      <span className={`grid size-12 place-items-center rounded-xl ${themeStyles[item.theme].soft}`}>
        <Icon className="size-6" name={item.icon} />
      </span>
      {item.menuLabel}
    </Link>
  );
}

function HeroMetric({ metric }: { metric: CommunityMetric }) {
  return (
    <div className="rounded-xl border border-blue-300/20 bg-blue-950/70 p-3 shadow-[0_18px_42px_rgb(0_0_0/0.2)] backdrop-blur">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-[var(--bta-blue-bright)]" name={metric.icon} />
        <p className="text-[0.65rem] font-bold leading-3 text-blue-100">{metric.label}</p>
      </div>
      <p className="mt-1 text-2xl font-black text-white">{metric.value}</p>
    </div>
  );
}

function HeroVisual({ page }: { page: CommunitySubpage }) {
  if (page.heroVisual === "channels" || page.heroVisual === "collaborations" || page.heroVisual === "private") {
    return <CommunityNetworkVisual metrics={page.metrics} />;
  }

  const dark = page.heroVisual === "events";

  return (
    <div className="relative mx-auto w-full max-w-[45rem]">
      <div className="relative ml-auto min-h-[24rem] rounded-2xl border border-white/15 bg-white/95 p-5 text-[var(--bta-text)] shadow-[0_32px_80px_rgb(0_0_0/0.25)] lg:min-h-[28rem]">
        <div className={`rounded-xl p-5 ${dark ? "bg-[var(--bta-blue-deeper)] text-white" : "bg-violet-50"}`}>
          <div className="flex items-center justify-between">
            <span className="inline-flex rounded-md bg-white/80 px-2 py-1 text-[0.62rem] font-black uppercase text-violet-700">
              {page.eyebrow}
            </span>
            <span className="grid size-8 grid-cols-3 gap-0.5 text-[var(--bta-blue)]">
              {Array.from({ length: 9 }).map((_, index) => <span className="size-1.5 rounded-full bg-current" key={index} />)}
            </span>
          </div>
          <h2 className="mt-5 max-w-md text-2xl font-black leading-tight">
            {page.heroVisual === "events" ? "IA generativa y el futuro del trabajo" : "El futuro del trabajo se construye hoy"}
          </h2>
          <p className={`mt-3 max-w-sm text-sm leading-6 ${dark ? "text-blue-100" : "text-[var(--bta-muted)]"}`}>
            Ideas y herramientas para liderar en la era de la inteligencia artificial.
          </p>
          <div className="mt-6 grid gap-3">
            {page.benefits.slice(0, 3).map((benefit) => (
              <div className={`flex items-center gap-3 rounded-lg border p-3 ${dark ? "border-white/10 bg-white/5" : "border-violet-100 bg-white"}`} key={benefit.title}>
                <Icon className={themeStyles[benefit.theme ?? page.theme].text} name={benefit.icon} />
                <span className="text-xs font-bold">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 right-4 w-36 rounded-[1.75rem] border-4 border-slate-900 bg-white p-2 shadow-2xl sm:w-44">
          <div className={`min-h-56 rounded-[1.25rem] p-3 ${dark ? "bg-violet-950 text-white" : "bg-violet-50"}`}>
            <p className="text-[0.58rem] font-black uppercase text-violet-500">{page.eyebrow}</p>
            <h3 className="mt-3 text-sm font-black leading-tight">Disena tu plan de aprendizaje con IA</h3>
            <p className="mt-2 text-[0.62rem] leading-3.5 opacity-75">Contenido claro para aplicar desde hoy.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCardGrid({
  title,
  items,
  id,
  compact = false,
}: {
  title: string;
  items: CommunityFeature[] | CommunityContentCard[];
  id?: string;
  compact?: boolean;
}) {
  return (
    <section className="bg-white py-8" id={id}>
      <Container>
        <SectionTitle title={title} />
        <div className={`mt-5 grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
          {items.map((item) => {
            const href = "href" in item ? item.href : undefined;
            const content = (
              <>
                <span className={`mx-auto grid size-14 place-items-center rounded-full ${themeStyles[item.theme ?? "blue"].soft}`}>
                  <Icon className="size-7" name={item.icon} />
                </span>
                {"tag" in item && item.tag ? (
                  <span className="mt-3 inline-flex rounded-md bg-blue-50 px-2 py-1 text-[0.62rem] font-black text-[var(--bta-blue)]">{item.tag}</span>
                ) : null}
                <h3 className="mt-3 text-sm font-black leading-tight text-[var(--bta-text)]">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
                {href ? (
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)]">
                    Explorar <Icon className="size-3" name="arrow-right" />
                  </span>
                ) : null}
              </>
            );
            const className = `rounded-xl border border-[var(--bta-border)] bg-white p-5 text-center shadow-[0_10px_28px_rgb(8_23_63/0.05)] ${
              href
                ? "group transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2"
                : ""
            }`;

            return href ? (
              <Link className={className} href={href} key={item.title}>
                {content}
              </Link>
            ) : (
              <div className={className} key={item.title}>
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function IconStrip({ title, items }: { title: string; items: CommunityFeature[] }) {
  return (
    <section className="bg-white py-4">
      <Container>
        <SectionTitle title={title} />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item) => (
            <div className="border-blue-100 px-3 text-center lg:border-l first:lg:border-l-0" key={item.title}>
              <Icon className={`mx-auto size-10 ${themeStyles[item.theme ?? "blue"].text}`} name={item.icon} />
              <h3 className="mt-3 text-sm font-black leading-tight text-[var(--bta-text)]">{item.title}</h3>
              <p className="mt-2 text-[0.72rem] leading-4 text-[var(--bta-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OverviewHighlights() {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_10px_28px_rgb(8_23_63/0.05)]">
            <h2 className="text-lg font-black">Newsletter destacada</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-[0.9fr_1.2fr]">
              <VisualPanel icon="mail" theme="blue" title="Big Ideas en IA" />
              <div>
                <h3 className="text-base font-black text-[var(--bta-blue)]">Big Ideas en IA, Datos y Talento</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--bta-muted)]">
                  Analisis profundos, herramientas practicas y tendencias clave para liderar la transformacion.
                </p>
                <div className="mt-5 space-y-3 text-xs text-[var(--bta-muted)]">
                  {["Agentes de IA en el trabajo: del piloto al impacto", "People Analytics: metricas que si importan", "Construir culturas data-driven"].map((item, index) => (
                    <p key={item}><span className="font-black text-[var(--bta-text)]">{index === 0 ? "07 may" : index === 1 ? "23 abr" : "09 abr"}</span> · {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_10px_28px_rgb(8_23_63/0.05)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-black">Proximos webinars y eventos</h2>
              <Link className="text-xs font-black text-[var(--bta-blue)]" href="/comunidad/webinars-y-eventos">Ver todos</Link>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {overviewEvents.map((event) => <EventMiniCard event={event} key={event.title} />)}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function EventMiniCard({ event }: { event: CommunityEvent }) {
  return (
    <Link className="rounded-xl border border-[var(--bta-border)] p-3 transition hover:border-blue-200 hover:bg-blue-50/40 focus-visible:outline focus-visible:outline-2" href={event.href}>
      <span className="grid size-12 place-items-center rounded-lg bg-[var(--bta-blue)] text-center text-xs font-black leading-none text-white">
        {event.date}<span className="text-[0.55rem]">{event.month}</span>
      </span>
      <p className="mt-3 text-[0.62rem] font-black text-[var(--bta-blue)]">{event.type}</p>
      <h3 className="mt-2 text-sm font-black leading-tight">{event.title}</h3>
      <p className="mt-3 text-[0.7rem] text-[var(--bta-muted)]">{event.time} · {event.duration}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)]">Reservar mi lugar <Icon className="size-3" name="arrow-right" /></span>
    </Link>
  );
}

function ChannelGrid({ title, items }: { title: string; items: CommunityContentCard[] }) {
  return (
    <section className="bg-white py-4">
      <Container>
        <SectionTitle title={title} />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {items.map((item) => (
            <Link className="rounded-xl border border-[var(--bta-border)] bg-white p-4 transition hover:border-blue-200 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2" href={item.href} key={item.title}>
              <span className={`grid size-11 place-items-center rounded-lg ${themeStyles[item.theme ?? "blue"].soft}`}>
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-3 text-sm font-black">{item.title}</h3>
              <p className="mt-1 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)]">Visitar <Icon className="size-3" name="arrow-right" /></span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PrivateBand() {
  return (
    <section className="bg-white py-6">
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-[var(--bta-blue-deeper)] p-6 text-white">
          <DarkHeroBackground />
          <div className="relative grid gap-5 lg:grid-cols-[1fr_1.4fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-black">Comunidad privada</h2>
                <span className="rounded-full bg-violet-500/30 px-3 py-1 text-xs font-black text-violet-100">Proximamente</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-blue-100">Un espacio exclusivo para miembros con grupos tematicos, sesiones especiales, recursos curados y networking de alto valor.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {["Grupos tematicos", "Sesiones exclusivas", "Recursos curados", "Networking"].map((item) => (
                <div className="rounded-lg border border-white/15 bg-white/5 p-3 text-center text-xs font-bold" key={item}>{item}</div>
              ))}
            </div>
            <ButtonLink href="/comunidad/comunidad-privada" variant="secondary">Quiero ser miembro</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MetricStrip({ metrics }: { metrics: CommunityMetric[] }) {
  return (
    <section className="bg-white py-0">
      <Container>
        <div className="-mt-8 grid gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[var(--bta-shadow)] sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric) => (
            <div className="flex items-center gap-3 px-2" key={metric.label}>
              <Icon className="size-9 text-[var(--bta-blue)]" name={metric.icon} />
              <div>
                <p className="text-2xl font-black">{metric.value}</p>
                <p className="text-xs text-[var(--bta-muted)]">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedExperience({ page }: { page: CommunitySubpage }) {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className="grid gap-6 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[0_10px_28px_rgb(8_23_63/0.05)] lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <VisualPanel icon={page.icon} theme={page.theme} title={page.sections.featuredTitle ?? page.menuLabel} />
          <div>
            <h2 className="text-2xl font-black">{page.sections.featuredTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--bta-muted)]">{page.sections.featuredDescription}</p>
            <ul className="mt-4 space-y-2">
              {page.sections.featuredBullets?.map((bullet) => (
                <li className="flex gap-2 text-sm text-[var(--bta-muted)]" key={bullet}>
                  <Icon className="mt-0.5 size-4 shrink-0 text-[var(--bta-blue)]" name="list-check" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {page.sections.featuredMetrics ? (
              <div className="mt-5 grid gap-3 rounded-xl bg-blue-50 p-4 sm:grid-cols-3">
                {page.sections.featuredMetrics.map((metric) => (
                  <div className="flex items-center gap-2" key={metric.label}>
                    <Icon className="size-7 text-[var(--bta-blue)]" name={metric.icon} />
                    <div><p className="text-lg font-black">{metric.value}</p><p className="text-[0.68rem] text-[var(--bta-muted)]">{metric.label}</p></div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContentCardGrid({ title, items }: { title: string; items: CommunityContentCard[] }) {
  return (
    <section className="bg-white py-8" id="ediciones">
      <Container>
        <div className="flex items-center justify-between gap-4">
          <SectionTitle title={title} />
          <Link className="hidden text-xs font-black text-[var(--bta-blue)] sm:inline-flex" href="/comunidad">Ver todas <Icon className="ml-1 size-3" name="arrow-right" /></Link>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link className="overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[0_10px_28px_rgb(8_23_63/0.05)] transition hover:-translate-y-0.5 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2" href={item.href} key={item.title}>
              <VisualPanel small icon={item.icon} theme={item.theme ?? "blue"} title={item.eyebrow ?? item.title} />
              <div className="p-4">
                <div className="flex items-center justify-between gap-3 text-[0.68rem] text-[var(--bta-muted)]">
                  {item.eyebrow ? <span className="rounded bg-blue-50 px-2 py-1 font-black text-[var(--bta-blue)]">{item.eyebrow}</span> : <span />}
                  {item.meta ? <span>{item.meta}</span> : null}
                </div>
                <h3 className="mt-3 text-base font-black leading-tight">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)]">Leer edicion <Icon className="size-3" name="arrow-right" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessTimeline({ title, items }: { title: string; items: NonNullable<CommunitySubpage["sections"]["process"]> }) {
  return (
    <section className="bg-white py-8">
      <Container>
        <SectionTitle centered title={title} />
        <div className="mt-5 grid gap-4 lg:grid-cols-5">
          {items.map((item) => (
            <div className="relative rounded-xl border border-[var(--bta-border)] bg-white p-4 text-center shadow-[0_10px_28px_rgb(8_23_63/0.04)]" key={item.step}>
              <span className="absolute left-3 top-3 grid size-7 place-items-center rounded-full bg-[var(--bta-blue)] text-xs font-black text-white">{item.step}</span>
              <Icon className="mx-auto mt-4 size-10 text-[var(--bta-blue)]" name={item.icon} />
              <h3 className="mt-3 text-sm font-black">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials({ title, items }: { title: string; items: NonNullable<CommunitySubpage["sections"]["testimonials"]> }) {
  return (
    <section className="bg-white py-8">
      <Container>
        <SectionTitle centered title={title} />
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <figure className="rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[0_10px_28px_rgb(8_23_63/0.04)]" key={item.name}>
              <blockquote className="text-sm leading-6 text-[var(--bta-muted)]">
                {`"${item.quote}"`}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-blue-50 text-sm font-black text-[var(--bta-blue)]">{item.name.slice(0, 1)}</span>
                <span><span className="block text-sm font-black">{item.name}</span><span className="text-xs text-[var(--bta-muted)]">{item.role}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta({
  cta,
  id,
}: {
  cta: CommunitySubpage["finalCta"];
  id?: string;
}) {
  return (
    <section className="bg-white py-8" id={id}>
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-[var(--bta-blue)] p-6 text-white shadow-[0_18px_48px_rgb(0_87_255/0.22)]">
          <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />
          <div className="relative grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <span className="grid size-16 place-items-center rounded-full border border-white/30 bg-white/10">
              <Icon className="size-8" name={cta.icon} />
            </span>
            <div>
              <h2 className="text-2xl font-black">{cta.title}</h2>
              <p className="mt-2 text-sm leading-6 text-blue-50">{cta.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={cta.primaryCta.href} variant="light">{cta.primaryCta.label}</ButtonLink>
              {cta.secondaryCta ? <ButtonLink href={cta.secondaryCta.href} variant="secondary">{cta.secondaryCta.label}</ButtonLink> : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function VisualPanel({
  icon,
  theme,
  title,
  small = false,
}: {
  icon: CommunityContentCard["icon"];
  theme: CommunityTheme;
  title: string;
  small?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden ${small ? "h-36 rounded-t-xl" : "min-h-64 rounded-xl"} bg-[var(--bta-blue-deeper)] p-5 text-white`}>
      <div aria-hidden="true" className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgb(29_115_255/0.9)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${themeStyles[theme].gradient} opacity-30`} />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end">
        <Icon className={`${small ? "size-14" : "size-20"} text-white/90`} name={icon} />
        <h3 className="mt-4 text-xl font-black leading-tight">{title}</h3>
      </div>
    </div>
  );
}

function SectionTitle({ title, centered = false }: { title: string; centered?: boolean }) {
  return (
    <h2 className={`text-xl font-black tracking-tight text-[var(--bta-text)] sm:text-2xl ${centered ? "text-center" : ""}`}>
      {title}
    </h2>
  );
}
