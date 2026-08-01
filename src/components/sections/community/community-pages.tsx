import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { CommunitySubscriptionForm } from "@/components/sections/community/community-subscription-form";
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
    gradient: "from-blue-700 via-blue-500 to-cyan-400",
  },
  violet: {
    text: "text-violet-500",
    bg: "bg-violet-600",
    soft: "bg-violet-50 text-violet-700",
    border: "border-violet-200",
    gradient: "from-violet-700 via-blue-600 to-violet-400",
  },
  teal: {
    text: "text-teal-400",
    bg: "bg-teal-500",
    soft: "bg-teal-50 text-teal-700",
    border: "border-teal-200",
    gradient: "from-teal-600 via-blue-600 to-cyan-400",
  },
  green: {
    text: "text-emerald-400",
    bg: "bg-emerald-500",
    soft: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-200",
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
  },
  orange: {
    text: "text-orange-400",
    bg: "bg-orange-500",
    soft: "bg-orange-50 text-orange-700",
    border: "border-orange-200",
    gradient: "from-orange-500 via-violet-600 to-blue-600",
  },
  rose: {
    text: "text-rose-500",
    bg: "bg-rose-500",
    soft: "bg-rose-50 text-rose-700",
    border: "border-rose-200",
    gradient: "from-rose-500 via-red-500 to-orange-400",
  },
};

const channelDetailCards = [
  {
    title: "Quiero ideas practicas",
    description: "Articulos, analisis y marcos para aplicar en tu organizacion.",
    cta: "Ir a LinkedIn",
    icon: "spark" as const,
    theme: "blue" as const,
  },
  {
    title: "Quiero aprender con videos",
    description: "Entrevistas, webinars y charlas explicadas por expertos.",
    cta: "Ir a YouTube",
    icon: "play" as const,
    theme: "rose" as const,
  },
  {
    title: "Quiero escuchar conversaciones",
    description: "Historias y debates que inspiran y generan ideas.",
    cta: "Ir al Podcast",
    icon: "support" as const,
    theme: "violet" as const,
  },
  {
    title: "Quiero novedades semanales",
    description: "Recibe cada semana ideas, recursos y contenido exclusivo.",
    cta: "Suscribirme",
    icon: "mail" as const,
    theme: "blue" as const,
  },
];

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
  if (page.heroVisual === "newsletter") {
    return <NewsletterPage page={page} />;
  }

  if (page.heroVisual === "events") {
    return <EventsPage page={page} />;
  }

  if (page.heroVisual === "channels") {
    return <ChannelsPage page={page} />;
  }

  if (page.heroVisual === "collaborations") {
    return <CollaborationPage page={page} />;
  }

  return <PrivateCommunityPage page={page} />;
}

function NewsletterPage({ page }: { page: CommunitySubpage }) {
  return (
    <>
      <LightDeviceHero page={page} />
      <SoftFeatureBand items={page.sections.introItems} title={page.sections.introTitle} />
      {page.sections.cards ? (
        <ContentCardGrid actionLabel="Leer edicion" items={page.sections.cards} title={page.sections.cardsTitle ?? ""} />
      ) : null}
      <NewsletterCta page={page} />
    </>
  );
}

function EventsPage({ page }: { page: CommunitySubpage }) {
  return (
    <>
      <LightDeviceHero page={page} />
      <MetricStrip metrics={page.metrics} />
      <EventGrid id="eventos" items={overviewEvents} title="Proximos eventos" />
      {page.sections.cards ? (
        <ContentCardGrid
          actionLabel="Ver grabacion"
          id="grabaciones"
          items={page.sections.cards}
          title={page.sections.cardsTitle ?? ""}
          video
        />
      ) : null}
      <FinalCta cta={page.finalCta} id="suscripcion" withForm />
    </>
  );
}

function ChannelsPage({ page }: { page: CommunitySubpage }) {
  return (
    <>
      <DarkCommunityHero page={page} />
      <ChannelGrid id="canales" items={communityChannels} title={page.sections.introTitle} />
      {page.sections.valueItems ? (
        <IconStrip items={page.sections.valueItems} title={page.sections.valueTitle ?? ""} />
      ) : null}
      <ChannelsDashboard page={page} />
      <IntentGrid />
      <FinalCta cta={page.finalCta} id="suscripcion" />
    </>
  );
}

function CollaborationPage({ page }: { page: CommunitySubpage }) {
  return (
    <>
      <DarkCommunityHero page={page} />
      <FeatureCardGrid items={page.sections.introItems} title={page.sections.introTitle} />
      {page.sections.valueItems ? (
        <IconStrip centered items={page.sections.valueItems} title={page.sections.valueTitle ?? ""} />
      ) : null}
      <FeaturedExperience page={page} split />
      {page.sections.cards ? (
        <ContentCardGrid actionLabel="Ver mas" id="colaboraciones" items={page.sections.cards} title={page.sections.cardsTitle ?? ""} />
      ) : null}
      {page.sections.formats ? (
        <FeatureCardGrid compact items={page.sections.formats} title={page.sections.formatsTitle ?? ""} />
      ) : null}
      <FinalCta cta={page.finalCta} dark id="colaborar" />
    </>
  );
}

function PrivateCommunityPage({ page }: { page: CommunitySubpage }) {
  return (
    <>
      <DarkCommunityHero page={page} />
      <FeatureCardGrid id="beneficios" items={page.sections.introItems} title={page.sections.introTitle} />
      {page.sections.valueItems ? (
        <IconStrip centered items={page.sections.valueItems} title={page.sections.valueTitle ?? ""} />
      ) : null}
      <FeaturedExperience page={page} />
      {page.sections.process ? (
        <ProcessTimeline items={page.sections.process} title={page.sections.processTitle ?? ""} />
      ) : null}
      {page.sections.formats ? (
        <FeatureCardGrid compact items={page.sections.formats} title={page.sections.formatsTitle ?? ""} />
      ) : null}
      {page.sections.audiences ? (
        <FeatureCardGrid compact items={page.sections.audiences} title={page.sections.audienceTitle ?? ""} />
      ) : null}
      {page.sections.testimonials ? (
        <Testimonials items={page.sections.testimonials} title={page.sections.testimonialsTitle ?? ""} />
      ) : null}
      <FinalCta cta={page.finalCta} dark id="lista" withForm />
    </>
  );
}

function CommunityMainHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-[0.78fr_1.06fr_0.42fr] lg:items-center lg:py-12">
        <div>
          <Breadcrumb current="Comunidad" />
          <h1 className="mt-7 max-w-[36rem] text-[2.45rem] font-black leading-[1.05] tracking-tight sm:text-[3.25rem] lg:text-[3.55rem]">
            Una comunidad para{" "}
            <span className="text-[var(--bta-blue-bright)]">aprender, conectar y crecer</span>
          </h1>
          <p className="mt-5 max-w-[38rem] text-sm leading-7 text-blue-50 sm:text-base">
            En Big Talent Analytica reunimos conocimiento, conversaciones,
            aprendizaje y colaboracion en torno a la IA, la analitica, el
            talento, la tecnologia y la transformacion.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#explorar">Explorar comunidad</ButtonLink>
            <ButtonLink href="/comunidad/newsletter" variant="secondary">
              Suscribirme
            </ButtonLink>
          </div>
        </div>
        <CommunityNetworkVisual items={communityNavItems} />
        <MetricsPanel metrics={communityMetrics} />
      </Container>
    </section>
  );
}

function DarkCommunityHero({ page }: { page: CommunitySubpage }) {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground accent={page.theme} />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-[0.78fr_1.06fr_0.42fr] lg:items-center lg:py-12">
        <div>
          <Breadcrumb current={page.breadcrumbLabel} parent={{ label: "Comunidad", href: "/comunidad" }} />
          <h1 className="mt-7 max-w-[39rem] text-[2.35rem] font-black leading-[1.06] tracking-tight sm:text-[3rem] lg:text-[3.25rem]">
            <HighlightedTitle page={page} />
          </h1>
          <p className="mt-5 max-w-[38rem] text-sm leading-7 text-blue-50 sm:text-base">
            {page.description}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
            {page.secondaryCta ? (
              <ButtonLink href={page.secondaryCta.href} variant="secondary">
                {page.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>
        <CommunityNetworkVisual items={heroItemsForPage(page)} theme={page.theme} />
        <MetricsPanel metrics={page.metrics} />
      </Container>
    </section>
  );
}

function LightDeviceHero({ page }: { page: CommunitySubpage }) {
  return (
    <section className="overflow-hidden bg-[linear-gradient(105deg,#ffffff_0%,#f7f8ff_58%,#eef3ff_100%)]">
      <Container className="grid gap-8 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:py-14">
        <div>
          <Breadcrumb current={page.breadcrumbLabel} light parent={{ label: "Comunidad", href: "/comunidad" }} />
          <p className={`mt-7 inline-flex rounded-md px-3 py-1 text-[0.68rem] font-black uppercase ${themeStyles[page.theme].soft}`}>
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[42rem] text-[2.35rem] font-black leading-[1.07] tracking-tight text-[var(--bta-text)] sm:text-[3rem] lg:text-[3.25rem]">
            {page.title}
          </h1>
          <p className="mt-5 max-w-[39rem] text-base leading-7 text-[var(--bta-text)]">
            {page.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {page.benefits.slice(0, 3).map((benefit) => (
              <MiniBenefit benefit={benefit} key={benefit.title} />
            ))}
          </div>
          {page.heroVisual === "newsletter" ? (
            <div className="mt-8 max-w-[40rem]" id="suscripcion">
              <CommunitySubscriptionForm buttonLabel={page.primaryCta.label} />
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
              {page.secondaryCta ? (
                <ButtonLink className="border-[var(--bta-border)] bg-white text-[var(--bta-blue)] hover:bg-blue-50" href={page.secondaryCta.href} variant="secondary">
                  {page.secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </div>
        <DeviceMockup page={page} />
      </Container>
    </section>
  );
}

function DarkHeroBackground({ accent = "blue" }: { accent?: CommunityTheme | "blue" }) {
  const color =
    accent === "orange"
      ? "rgb(168 85 247 / 0.42)"
      : accent === "teal"
        ? "rgb(20 184 166 / 0.36)"
        : accent === "violet"
          ? "rgb(124 58 237 / 0.42)"
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
  light = false,
}: {
  current: string;
  parent?: { label: string; href: string };
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold">
      <ol className={`flex flex-wrap items-center gap-2 ${light ? "text-slate-500" : "text-blue-100"}`}>
        <li>
          <Link className={`${light ? "text-slate-600 hover:text-[var(--bta-blue)]" : "text-[var(--bta-blue-bright)] hover:text-white"} focus-visible:outline focus-visible:outline-2`} href="/">
            Inicio
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        {parent ? (
          <>
            <li>
              <Link className="hover:text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2" href={parent.href}>
                {parent.label}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
          </>
        ) : null}
        <li aria-current="page" className={light ? "text-[var(--bta-text)]" : "text-white"}>
          {current}
        </li>
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

function heroItemsForPage(page: CommunitySubpage) {
  if (page.heroVisual === "collaborations") {
    return collaborationCards.map((item) => ({ ...item, menuLabel: item.title }));
  }

  if (page.heroVisual === "private") {
    return page.benefits.map((item) => ({ ...item, menuLabel: item.title }));
  }

  if (page.heroVisual === "channels") {
    return [
      ...communityChannels.slice(0, 5).map((item) => ({ ...item, menuLabel: item.title })),
      { ...communityChannels[5], menuLabel: "Newsletter" },
    ];
  }

  return communityNavItems;
}

function CommunityNetworkVisual({
  items,
  theme = "blue",
}: {
  items: Array<{ title?: string; menuLabel?: string; href?: string; icon: CommunityFeature["icon"]; theme?: CommunityTheme }>;
  theme?: CommunityTheme;
}) {
  const visibleItems = items.slice(0, 6);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[33rem]">
      <div aria-hidden="true" className="absolute inset-[12%] rounded-full border border-blue-300/20" />
      <div aria-hidden="true" className="absolute inset-[24%] rounded-full border border-dashed border-blue-300/30" />
      <svg aria-hidden="true" className="absolute inset-0 size-full text-blue-300/50" viewBox="0 0 520 520">
        <path d="M260 260 260 38M260 260 70 150M260 260 450 150M260 260 88 388M260 260 432 388M260 260 260 482" fill="none" stroke="currentColor" strokeDasharray="4 9" />
      </svg>
      <div className={`absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-200/35 ${themeStyles[theme].bg} shadow-[0_0_80px_rgb(29_115_255/0.62)]`}>
        <Icon className="size-14 text-white" name="community" />
      </div>
      {visibleItems.map((item, index) => (
        <OrbitNode index={index} item={item} key={`${item.menuLabel ?? item.title}-${index}`} />
      ))}
    </div>
  );
}

function OrbitNode({
  item,
  index,
}: {
  item: { title?: string; menuLabel?: string; href?: string; icon: CommunityFeature["icon"]; theme?: CommunityTheme };
  index: number;
}) {
  const positions = [
    "left-1/2 top-0 -translate-x-1/2",
    "left-[7%] top-[26%]",
    "right-[7%] top-[26%]",
    "left-[12%] bottom-[8%]",
    "right-[12%] bottom-[8%]",
    "left-1/2 bottom-0 -translate-x-1/2",
  ];
  const content = (
    <>
      <span className={`grid size-12 place-items-center rounded-full ${themeStyles[item.theme ?? "blue"].soft}`}>
        <Icon className="size-6" name={item.icon} />
      </span>
      <span>{item.menuLabel ?? item.title}</span>
    </>
  );
  const className = `absolute grid w-[7.5rem] place-items-center gap-2 rounded-xl border border-blue-300/25 bg-blue-950/80 p-3 text-center text-[0.72rem] font-black leading-tight text-white shadow-[0_18px_42px_rgb(0_0_0/0.22)] backdrop-blur ${positions[index]}`;

  return item.href ? (
    <Link className={`${className} transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2`} href={item.href}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}

function MetricsPanel({ metrics }: { metrics: CommunityMetric[] }) {
  return (
    <aside className="rounded-xl border border-blue-200/25 bg-blue-950/55 p-4 shadow-[0_18px_42px_rgb(0_0_0/0.2)] backdrop-blur">
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {metrics.map((metric) => (
          <li className="flex items-center gap-3 border-blue-200/15 py-2 lg:border-b lg:last:border-b-0" key={metric.label}>
            <Icon className="size-7 shrink-0 text-[var(--bta-blue-bright)]" name={metric.icon} />
            <div>
              <p className="text-xl font-black leading-tight text-white">{metric.value}</p>
              <p className="text-[0.72rem] leading-4 text-blue-100">{metric.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function DeviceMockup({ page }: { page: CommunitySubpage }) {
  const isEvent = page.heroVisual === "events";

  return (
    <div className="relative mx-auto min-h-[24rem] w-full max-w-[44rem] sm:min-h-[29rem]">
      <div className="absolute bottom-0 left-1/2 h-4 w-[72%] -translate-x-1/2 rounded-full bg-slate-950/20 blur-lg" />
      <div className="absolute left-4 right-[18%] top-2 rounded-[1.35rem] border-[10px] border-slate-950 bg-slate-950 shadow-[0_28px_60px_rgb(8_23_63/0.22)] sm:left-0 sm:right-[14%]">
        <div className="overflow-hidden rounded-xl bg-white">
          <MockScreen event={isEvent} page={page} />
        </div>
        <div className="mx-auto h-4 w-[72%] rounded-b-2xl bg-slate-800" />
      </div>
      <div className="absolute bottom-4 right-0 w-[30%] min-w-[8.5rem] rounded-[1.65rem] border-[8px] border-slate-950 bg-slate-950 shadow-[0_24px_45px_rgb(8_23_63/0.24)]">
        <div className="min-h-[18rem] overflow-hidden rounded-[1.05rem] bg-white">
          <MockScreen compact event={isEvent} page={page} />
        </div>
      </div>
    </div>
  );
}

function MockScreen({
  page,
  event = false,
  compact = false,
}: {
  page: CommunitySubpage;
  event?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`${compact ? "p-3" : "p-5"} ${event ? "bg-[var(--bta-blue-deeper)] text-white" : "bg-[#f5f1ff] text-[var(--bta-text)]"}`}>
      <div className="flex items-center justify-between">
        <span className="grid size-5 grid-cols-3 gap-0.5 text-[var(--bta-blue)]">
          {Array.from({ length: 9 }).map((_, index) => <span className="size-1 rounded-full bg-current" key={index} />)}
        </span>
        <span className={`rounded-full px-2 py-1 text-[0.56rem] font-black uppercase ${event ? "bg-white text-rose-600" : "bg-white text-violet-700"}`}>
          {event ? "En vivo" : page.eyebrow}
        </span>
      </div>
      <div className={`mt-5 overflow-hidden rounded-xl ${event ? "bg-[radial-gradient(circle_at_65%_35%,rgb(124_58_237/0.8),transparent_32%),linear-gradient(135deg,#080b38,#17054f)]" : "bg-white/70"} ${compact ? "p-3" : "p-5"}`}>
        <p className="inline-flex rounded-md bg-violet-500/20 px-2 py-1 text-[0.58rem] font-black uppercase text-violet-300">
          {event ? "Proximo webinar" : "Newsletter"}
        </p>
        <h2 className={`${compact ? "mt-3 text-base" : "mt-4 text-2xl"} max-w-md font-black leading-tight`}>
          {event ? "IA generativa y el futuro del trabajo" : "El futuro del trabajo se construye hoy"}
        </h2>
        <p className={`${compact ? "mt-2 text-[0.62rem] leading-3.5" : "mt-3 text-sm leading-6"} max-w-sm ${event ? "text-blue-100" : "text-[var(--bta-muted)]"}`}>
          Ideas y herramientas para liderar en la era de la inteligencia artificial.
        </p>
        <div className={`mt-5 grid gap-2 ${compact ? "" : "max-w-md"}`}>
          {page.benefits.slice(0, 3).map((benefit) => (
            <div className={`flex items-center gap-2 rounded-lg border p-2 ${event ? "border-white/10 bg-white/5" : "border-violet-100 bg-white"}`} key={benefit.title}>
              <Icon className={`size-4 ${themeStyles[benefit.theme ?? page.theme].text}`} name={benefit.icon} />
              <span className="text-[0.7rem] font-bold">{benefit.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniBenefit({ benefit }: { benefit: CommunityFeature }) {
  return (
    <div>
      <span className={`grid size-11 place-items-center rounded-lg ${themeStyles[benefit.theme ?? "blue"].soft}`}>
        <Icon className="size-6" name={benefit.icon} />
      </span>
      <h2 className="mt-3 text-sm font-black text-[var(--bta-text)]">{benefit.title}</h2>
      <p className="mt-2 text-xs leading-5 text-[var(--bta-text)]">{benefit.description}</p>
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
    <section className="bg-white py-7" id={id}>
      <Container>
        <SectionTitle centered={title.length < 32} title={title} />
        <div className={`mt-5 grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
          {items.map((item) => {
            const href = "href" in item ? item.href : undefined;
            return (
              <FeatureCard href={href} item={item} key={item.title} />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({
  item,
  href,
}: {
  item: CommunityFeature | CommunityContentCard;
  href?: string;
}) {
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
  const className = `flex min-h-52 flex-col rounded-xl border border-[var(--bta-border)] bg-white p-5 text-center shadow-[0_10px_28px_rgb(8_23_63/0.05)] ${
    href
      ? "transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2"
      : ""
  }`;

  return href ? (
    <Link className={className} href={href}>
      {content}
    </Link>
  ) : (
    <div className={className}>{content}</div>
  );
}

function SoftFeatureBand({ title, items }: { title: string; items: CommunityFeature[] }) {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className="rounded-xl bg-[#f3f2ff] p-6 sm:p-8">
          <SectionTitle title={title} />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {items.map((item) => (
              <div key={item.title}>
                <Icon className={`size-9 ${themeStyles[item.theme ?? "violet"].text}`} name={item.icon} />
                <h3 className="mt-4 text-sm font-black leading-tight">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[var(--bta-text)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function IconStrip({
  title,
  items,
  centered = false,
}: {
  title: string;
  items: CommunityFeature[];
  centered?: boolean;
}) {
  return (
    <section className="bg-white py-5">
      <Container>
        <SectionTitle centered={centered} title={title} />
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
    <section className="bg-white py-7">
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

function ChannelGrid({
  title,
  items,
  id,
}: {
  title: string;
  items: CommunityContentCard[];
  id?: string;
}) {
  return (
    <section className="bg-white py-6" id={id}>
      <Container>
        <SectionTitle title={title} />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {items.map((item) => (
            <Link className="rounded-xl border border-[var(--bta-border)] bg-white p-4 transition hover:border-blue-200 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2" href={item.href} key={item.title}>
              <span className={`grid size-11 place-items-center rounded-lg ${themeStyles[item.theme ?? "blue"].soft}`}>
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-3 text-sm font-black">{item.title}</h3>
              <p className="mt-1 min-h-10 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
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
          <DarkHeroBackground accent="violet" />
          <div className="relative grid gap-5 lg:grid-cols-[1fr_1.4fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-black">Comunidad privada</h2>
                <span className="rounded-full bg-violet-500/30 px-3 py-1 text-xs font-black text-violet-100">Proximamente</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-blue-100">Un espacio exclusivo para miembros con grupos tematicos, sesiones especiales, recursos curados y networking de alto valor.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-4">
              {["Grupos tematicos", "Sesiones exclusivas", "Recursos curados", "Networking de alto valor"].map((item) => (
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
        <div className="-mt-8 grid gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[var(--bta-shadow)] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.slice(0, 4).map((metric) => (
            <div className="flex items-center justify-center gap-3 px-2" key={metric.label}>
              <Icon className="size-10 text-[var(--bta-blue)]" name={metric.icon} />
              <div>
                <p className="text-3xl font-black leading-tight">{metric.value}</p>
                <p className="text-xs text-[var(--bta-muted)]">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function EventGrid({ title, items, id }: { title: string; items: CommunityEvent[]; id?: string }) {
  return (
    <section className="bg-white py-8" id={id}>
      <Container>
        <div className="flex items-center justify-between gap-4">
          <SectionTitle title={title} />
          <Link className="hidden text-xs font-black text-[var(--bta-blue)] sm:inline-flex" href="/comunidad/webinars-y-eventos">
            Ver todos los proximos eventos <Icon className="ml-1 size-3" name="arrow-right" />
          </Link>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((event, index) => (
            <Link className="overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[0_10px_28px_rgb(8_23_63/0.06)] transition hover:-translate-y-0.5 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2" href={event.href} key={event.title}>
              <div className="relative h-32">
                <VisualPanel icon={index === 1 ? "learning" : index === 3 ? "domain" : "ai"} small theme={event.theme ?? "blue"} title={event.type} />
                <span className="absolute right-0 top-0 grid size-16 place-items-center rounded-bl-xl bg-[#ebe9ff] text-center text-xl font-black text-[var(--bta-text)]">
                  {event.date}<span className="block text-[0.65rem]">{event.month}</span>
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-black leading-tight">{event.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[var(--bta-muted)]">{event.description}</p>
                <p className="mt-4 text-[0.72rem] text-[var(--bta-muted)]">{event.time} · {event.duration}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)]">Registrarme gratis <Icon className="size-3" name="arrow-right" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedExperience({ page, split = false }: { page: CommunitySubpage; split?: boolean }) {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className={`grid gap-6 rounded-xl border border-[var(--bta-border)] bg-white p-5 shadow-[0_10px_28px_rgb(8_23_63/0.05)] ${split ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1fr_1.55fr_0.42fr]"} lg:items-center`}>
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
            {split && page.sections.featuredMetrics ? (
              <FeaturedMetricBand metrics={page.sections.featuredMetrics} />
            ) : null}
          </div>
          {!split && page.sections.featuredMetrics ? (
            <div className="grid gap-4 border-blue-100 lg:border-l lg:pl-6">
              {page.sections.featuredMetrics.map((metric) => (
                <div className="flex items-center gap-3" key={metric.label}>
                  <Icon className="size-8 text-[var(--bta-blue)]" name={metric.icon} />
                  <div><p className="text-2xl font-black">{metric.value}</p><p className="text-xs text-[var(--bta-muted)]">{metric.label}</p></div>
                </div>
              ))}
              <ButtonLink href="#lista">Solicitar acceso</ButtonLink>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function FeaturedMetricBand({ metrics }: { metrics: CommunityMetric[] }) {
  return (
    <div className="mt-5 grid gap-3 rounded-xl bg-blue-50 p-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <div className="flex items-center gap-2" key={metric.label}>
          <Icon className="size-7 text-[var(--bta-blue)]" name={metric.icon} />
          <div><p className="text-lg font-black">{metric.value}</p><p className="text-[0.68rem] text-[var(--bta-muted)]">{metric.label}</p></div>
        </div>
      ))}
    </div>
  );
}

function ContentCardGrid({
  title,
  items,
  id,
  actionLabel = "Leer edicion",
  video = false,
}: {
  title: string;
  items: CommunityContentCard[];
  id?: string;
  actionLabel?: string;
  video?: boolean;
}) {
  return (
    <section className="bg-white py-8" id={id ?? "ediciones"}>
      <Container>
        <div className="flex items-center justify-between gap-4">
          <SectionTitle title={title} />
          <Link className="hidden text-xs font-black text-[var(--bta-blue)] sm:inline-flex" href="/comunidad">
            Ver todas <Icon className="ml-1 size-3" name="arrow-right" />
          </Link>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link className="overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[0_10px_28px_rgb(8_23_63/0.05)] transition hover:-translate-y-0.5 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2" href={item.href} key={item.title}>
              <div className="relative">
                <VisualPanel small icon={item.icon} theme={item.theme ?? "blue"} title={item.eyebrow ?? item.title} />
                {video ? (
                  <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[var(--bta-blue)] shadow-lg">
                    <Icon name="play" />
                  </span>
                ) : null}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-3 text-[0.68rem] text-[var(--bta-muted)]">
                  {item.eyebrow ? <span className="rounded bg-blue-50 px-2 py-1 font-black text-[var(--bta-blue)]">{item.eyebrow}</span> : <span />}
                  {item.meta ? <span>{item.meta}</span> : null}
                </div>
                <h3 className="mt-3 text-base font-black leading-tight">{item.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)]">{actionLabel} <Icon className="size-3" name="arrow-right" /></span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ChannelsDashboard({ page }: { page: CommunitySubpage }) {
  const recent = page.sections.cards ?? [];

  return (
    <section className="bg-white py-6">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_0.95fr]">
          <div className="rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_10px_28px_rgb(8_23_63/0.05)]">
            <h2 className="text-lg font-black">Canal destacado</h2>
            <VisualPanel icon="community" theme="blue" title="LinkedIn" />
            <h3 className="mt-4 text-xl font-black text-[var(--bta-text)]">LinkedIn</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--bta-muted)]">El canal principal para articulos, analisis y reflexiones sobre IA, talento y transformacion.</p>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[var(--bta-border)] pt-4 text-center">
              {["16.2K Seguidores", "320+ Publicaciones", "8.5% Engagement"].map((item) => (
                <p className="text-xs font-black text-[var(--bta-text)]" key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_10px_28px_rgb(8_23_63/0.05)]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black">Publicaciones recientes</h2>
              <Link className="text-xs font-black text-[var(--bta-blue)]" href="/comunidad/canales-y-redes">Ver todas</Link>
            </div>
            <div className="mt-4 grid gap-3">
              {recent.map((item) => (
                <Link className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-[var(--bta-border)] pb-3 last:border-b-0 focus-visible:outline focus-visible:outline-2" href={item.href} key={item.title}>
                  <VisualPanel icon={item.icon} small theme={item.theme ?? "blue"} title={item.eyebrow ?? item.title} />
                  <div>
                    <p className="text-[0.65rem] font-black text-[var(--bta-blue)]">{item.eyebrow}</p>
                    <h3 className="text-sm font-black leading-tight">{item.title}</h3>
                    <span className="mt-2 inline-flex text-xs font-black text-[var(--bta-blue)]">Ver publicacion</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_10px_28px_rgb(8_23_63/0.05)]">
            <h2 className="text-lg font-black">Contenido por plataforma</h2>
            <div className="mt-4 grid gap-3">
              {communityChannels.map((item) => (
                <div className="flex gap-3" key={item.title}>
                  <span className={`grid size-10 shrink-0 place-items-center rounded-lg ${themeStyles[item.theme ?? "blue"].soft}`}>
                    <Icon className="size-5" name={item.icon} />
                  </span>
                  <div>
                    <h3 className="text-sm font-black">{item.title}</h3>
                    <p className="text-xs leading-4 text-[var(--bta-muted)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IntentGrid() {
  return (
    <section className="bg-white py-6">
      <Container>
        <SectionTitle title="Donde quieres empezar?" />
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {channelDetailCards.map((item) => (
            <Link className={`rounded-xl border border-[var(--bta-border)] bg-gradient-to-br ${themeStyles[item.theme].gradient} bg-opacity-10 p-4 text-[var(--bta-text)] shadow-[0_10px_28px_rgb(8_23_63/0.04)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2`} href="/comunidad/canales-y-redes" key={item.title}>
              <div className="flex gap-3">
                <span className={`grid size-14 shrink-0 place-items-center rounded-xl ${themeStyles[item.theme].soft}`}>
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h3 className="text-sm font-black">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)]">{item.cta} <Icon className="size-3" name="arrow-right" /></span>
                </div>
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
          {items.map((item, index) => (
            <div className="relative rounded-xl border border-[var(--bta-border)] bg-white p-4 text-center shadow-[0_10px_28px_rgb(8_23_63/0.04)]" key={item.step}>
              {index < items.length - 1 ? (
                <span aria-hidden="true" className="absolute -right-4 top-1/2 hidden text-blue-300 lg:block">----&gt;</span>
              ) : null}
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

function NewsletterCta({ page }: { page: CommunitySubpage }) {
  return (
    <section className="bg-white py-8">
      <Container>
        <div className="grid gap-6 rounded-xl bg-[#f3f2ff] p-6 sm:p-8 lg:grid-cols-[auto_1fr_0.95fr] lg:items-center">
          <span className="grid size-28 place-items-center rounded-2xl bg-violet-100 text-violet-600">
            <Icon className="size-16" name="mail" />
          </span>
          <div>
            <h2 className="text-2xl font-black">{page.finalCta.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--bta-text)]">{page.finalCta.description}</p>
          </div>
          <div>
            <CommunitySubscriptionForm buttonLabel={page.finalCta.primaryCta.label} />
            <p className="mt-4 text-xs font-black text-[var(--bta-text)]">Unete a mas de 4,200 suscriptores</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta({
  cta,
  id,
  dark = false,
  withForm = false,
}: {
  cta: CommunitySubpage["finalCta"];
  id?: string;
  dark?: boolean;
  withForm?: boolean;
}) {
  return (
    <section className="bg-white py-8" id={id}>
      <Container>
        <div className={`relative overflow-hidden rounded-xl p-6 text-white shadow-[0_18px_48px_rgb(0_87_255/0.22)] ${dark ? "bg-[var(--bta-blue-deeper)]" : "bg-[var(--bta-blue)]"}`}>
          {dark ? <DarkHeroBackground /> : <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />}
          <div className={`relative grid gap-5 ${withForm ? "lg:grid-cols-[auto_1fr_0.95fr]" : "lg:grid-cols-[auto_1fr_auto]"} lg:items-center`}>
            <span className="grid size-16 place-items-center rounded-full border border-white/30 bg-white/10">
              <Icon className="size-8" name={cta.icon} />
            </span>
            <div>
              <h2 className="text-2xl font-black">{cta.title}</h2>
              <p className="mt-2 text-sm leading-6 text-blue-50">{cta.description}</p>
            </div>
            {withForm ? (
              <CommunitySubscriptionForm buttonLabel={cta.primaryCta.label} tone="dark" />
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={cta.primaryCta.href} variant="light">{cta.primaryCta.label}</ButtonLink>
                {cta.secondaryCta ? <ButtonLink href={cta.secondaryCta.href} variant="secondary">{cta.secondaryCta.label}</ButtonLink> : null}
              </div>
            )}
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
    <div className={`relative overflow-hidden ${small ? "h-full min-h-32 rounded-t-xl" : "min-h-64 rounded-xl"} bg-[var(--bta-blue-deeper)] p-5 text-white`}>
      <div aria-hidden="true" className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgb(29_115_255/0.9)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${themeStyles[theme].gradient} opacity-40`} />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end">
        <Icon className={`${small ? "size-12" : "size-20"} text-white/90`} name={icon} />
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
