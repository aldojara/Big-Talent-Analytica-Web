import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { ResourceFilteredCatalog } from "@/components/sections/resources/resource-filtered-catalog";
import {
  overviewData,
  overviewMetrics,
  resourceNavItems,
  resourceThemes,
} from "@/data/resources";
import type {
  ResourceBasicItem,
  ResourceCardItem,
  ResourceListPage,
  ResourceNavItem,
} from "@/types/resources";

export function ResourcesOverviewPage() {
  return (
    <>
      <ResourceOverviewHero />
      <BasicGrid title="Explora por formato" items={overviewData.formats} columns="three" />
      <FeaturedResource item={overviewData.featured} title="Recurso destacado" />
      <TwoColumnResourceSection
        left={{ title: "Explora según tu objetivo", items: overviewData.goals }}
        middle={{ title: "Colecciones y rutas recomendadas", items: overviewData.collections }}
        right={{ title: "Últimos contenidos del blog", items: overviewData.latestBlog }}
      />
      <MediaStrip title="Videos y podcasts recientes" items={overviewData.mixedMedia} />
      <BasicGrid title="Herramientas y descargables" items={overviewData.downloadableTools} columns="four" compact />
      <FinalCta
        cta={{
          title: "¿Buscas recursos alineados con tus retos y objetivos?",
          description:
            "Diseñemos una ruta de aprendizaje, contenido o recursos aplicados para tu organización.",
          primaryCta: { label: "Agenda una sesión", href: "/agenda" },
          secondaryCta: { label: "Explorar servicios", href: "/talento" },
          icon: "calendar",
        }}
      />
    </>
  );
}

export function ResourceSubpage({ page }: { page: ResourceListPage }) {
  return (
    <>
      <ResourceSubpageHero page={page} />
      {page.tabs ? <IconTabs items={page.tabs} /> : null}
      {page.categories.length > 0 ? (
        <BasicGrid title="Explora por categoría" items={page.categories} columns="six" />
      ) : null}
      <FeaturedResource item={page.featured} title={page.slug === "herramientas" ? "Herramienta destacada" : page.slug === "videos" ? "Video destacado" : page.slug === "blog" ? "Artículo destacado" : "Recurso destacado"} />
      {page.filters && page.catalog ? (
        <ResourceFilteredCatalog
          filters={page.filters}
          items={page.catalog}
          title={
            page.slug === "cursos-y-rutas"
              ? "Cursos y rutas disponibles"
              : page.slug === "herramientas"
                ? "Herramientas disponibles"
                : "Recursos disponibles"
          }
        />
      ) : null}
      {page.programs ? <BasicGrid title="Nuestros programas" items={page.programs} columns="four" /> : null}
      {page.interests || page.collections || page.latest ? (
        <TwoColumnResourceSection
          left={page.interests ? { title: page.slug === "herramientas" ? "Cómo te ayudan estas herramientas" : "Explora según tu interés", items: page.interests } : undefined}
          middle={page.collections ? { title: page.slug === "herramientas" ? "Herramientas más usadas" : page.slug === "videos" ? "Playlists recomendadas" : "Series editoriales recomendadas", items: page.collections } : undefined}
          right={page.latest ? { title: page.slug === "videos" ? "Últimos videos" : "Últimos artículos", items: page.latest } : undefined}
        />
      ) : null}
      {page.recent ? (
        page.slug === "podcasts" ? (
          <PodcastRows items={page.recent} />
        ) : (
          <MediaStrip
            id={page.slug === "videos" ? "videos-recientes" : "articulos-recientes"}
            title={page.slug === "videos" ? "Videos recientes" : "Artículos recientes"}
            items={page.recent}
          />
        )
      ) : null}
      {page.ranked ? <RankingSection title={page.slug === "videos" ? "Videos más vistos" : "Artículos más leídos"} items={page.ranked} /> : null}
      {page.slug === "videos" && page.interests ? (
        <BasicGrid title="Videos por dominio" items={page.interests} columns="six" compact />
      ) : null}
      {page.finalCta ? <FinalCta cta={page.finalCta} /> : null}
      {page.newsletter ? <NewsletterCta newsletter={page.newsletter} secondaryHref={page.slug === "videos" ? "/recursos" : undefined} /> : null}
    </>
  );
}

function ResourceOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
        <div>
          <Breadcrumb current="Recursos y blog" />
          <p className="mt-8 text-[0.72rem] font-black uppercase tracking-[0.18em] text-[var(--bta-blue-bright)]">
            RECURSOS Y BLOG
          </p>
          <h1 className="mt-4 max-w-3xl text-[2.25rem] font-black leading-[1.08] tracking-tight sm:text-[3.2rem] lg:text-[3.45rem]">
            Contenido para aprender, aplicar y transformar
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
            Explora artículos, guías, plantillas, videos, podcasts, cursos y herramientas diseñados para convertir conocimiento en decisiones, capacidades y resultados.
          </p>
          <p className="mt-3 max-w-xl text-[0.7rem] leading-4 text-blue-200">
            Métricas del hero son referencias visuales ilustrativas.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#formatos">Explorar recursos</ButtonLink>
            <ButtonLink href="#destacado" variant="secondary">Ver destacados</ButtonLink>
          </div>
        </div>
        <ResourcesOrbitVisual />
      </Container>
    </section>
  );
}

function ResourceSubpageHero({ page }: { page: ResourceListPage }) {
  const theme = resourceThemes[page.theme];

  return (
    <section className="relative overflow-hidden bg-[var(--bta-blue-deeper)] text-white">
      <DarkHeroBackground accent={theme.accent} />
      <Container className="relative grid gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
        <div>
          <Breadcrumb current={page.breadcrumbLabel} parent={{ label: "Recursos y blog", href: "/recursos" }} />
          <p className="mt-8 inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em]" style={{ borderColor: theme.border, backgroundColor: theme.soft, color: theme.accent }}>
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-[2.25rem] font-black leading-[1.08] tracking-tight sm:text-[3.1rem] lg:text-[3.35rem]">
            <HighlightedTitle title={page.title} terms={page.highlightedTerms ?? []} theme={page.theme} />
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">{page.description}</p>
          {page.benefits ? (
            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {page.benefits.map((benefit) => (
                <div className="flex gap-3 text-sm font-bold text-blue-50" key={benefit.title}>
                  <Icon className="size-7 shrink-0" name={benefit.icon} />
                  <span>{benefit.title}</span>
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={page.primaryCta.href}>{page.primaryCta.label}</ButtonLink>
            {page.secondaryCta ? <ButtonLink href={page.secondaryCta.href} variant="secondary">{page.secondaryCta.label}</ButtonLink> : null}
          </div>
        </div>
        <HeroMockup page={page} />
      </Container>
    </section>
  );
}

function DarkHeroBackground({ accent = "#1d73ff" }: { accent?: string }) {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(112deg,rgb(2_18_54/0.98)_0%,rgb(3_22_62/0.94)_48%,rgb(1_12_35/0.98)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:radial-gradient(rgb(29_115_255/0.78)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-2/3 opacity-70" style={{ background: `radial-gradient(circle at 55% 42%, ${accent}66, transparent 36%)` }} />
    </>
  );
}

function Breadcrumb({ current, parent }: { current: string; parent?: { label: string; href: string } }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold">
      <ol className="flex flex-wrap items-center gap-2 text-blue-100">
        <li><Link className="text-[var(--bta-blue-bright)] hover:text-white focus-visible:outline focus-visible:outline-2" href="/">Inicio</Link></li>
        <li aria-hidden="true">/</li>
        {parent ? (
          <>
            <li><Link className="hover:text-white focus-visible:outline focus-visible:outline-2" href={parent.href}>{parent.label}</Link></li>
            <li aria-hidden="true">/</li>
          </>
        ) : null}
        <li aria-current="page" className="text-white">{current}</li>
      </ol>
    </nav>
  );
}

function HighlightedTitle({ title, terms, theme }: { title: string; terms: string[]; theme: ResourceListPage["theme"] }) {
  if (terms.length === 0) return title;
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  const parts = title.split(pattern);

  return (
    <>
      {parts.map((part, index) =>
        terms.some((term) => term.toLowerCase() === part.toLowerCase()) ? (
          <span className={resourceThemes[theme].text} key={`${part}-${index}`}>{part}</span>
        ) : part,
      )}
    </>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function ResourcesOrbitVisual() {
  return (
    <div className="relative mx-auto min-h-[30rem] w-full max-w-[44rem]">
      <div aria-hidden="true" className="absolute inset-7 rounded-full border border-blue-300/20" />
      <div aria-hidden="true" className="absolute inset-20 rounded-full border border-dashed border-blue-300/25" />
      <svg aria-hidden="true" className="absolute inset-0 size-full text-blue-300/50" viewBox="0 0 680 520">
        <path d="M340 260 190 95M340 260 110 260M340 260 230 425M340 260 450 425M340 260 570 260M340 260 490 95" fill="none" stroke="currentColor" strokeDasharray="4 9" />
      </svg>
      <div className="absolute left-1/2 top-1/2 grid size-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-200/30 bg-[var(--bta-blue)] shadow-[0_0_80px_rgb(29_115_255/0.55)]">
        <span className="grid grid-cols-3 gap-1 text-white">{Array.from({ length: 9 }).map((_, index) => <span className="size-2.5 rounded-full bg-current" key={index} />)}</span>
      </div>
      {resourceNavItems.map((item, index) => <OrbitNode index={index} item={item} key={item.slug} />)}
      <div className="absolute right-0 top-2 grid w-40 gap-2">
        {overviewMetrics.map((metric) => <MetricCard metric={metric} key={metric.label} />)}
      </div>
    </div>
  );
}

function OrbitNode({ item, index }: { item: ResourceBasicItem | ResourceNavItem; index: number }) {
  const positions = ["left-[18%] top-[8%]", "right-[22%] top-[9%]", "left-[7%] top-[42%]", "right-[8%] top-[42%]", "left-[22%] bottom-[8%]", "right-[22%] bottom-[8%]"];
  const theme = resourceThemes[item.theme ?? "blue"];
  const label = "menuLabel" in item ? item.menuLabel : item.title;

  return (
    <Link className={`absolute grid place-items-center gap-2 rounded-xl border bg-blue-950/75 p-3 text-center text-xs font-black text-white shadow-[0_18px_42px_rgb(0_0_0/0.22)] backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 ${positions[index]}`} href={item.href} style={{ borderColor: theme.border }}>
      <span className="grid size-12 place-items-center rounded-xl" style={{ backgroundColor: theme.soft, color: theme.accent }}>
        <Icon className="size-6" name={item.icon} />
      </span>
      {label}
    </Link>
  );
}

function MetricCard({ metric }: { metric: { label: string; value: string; icon: ResourceCardItem["icon"] } }) {
  return (
    <div className="rounded-xl border border-blue-300/20 bg-blue-950/70 p-3 shadow-[0_18px_42px_rgb(0_0_0/0.22)] backdrop-blur">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-[var(--bta-blue-bright)]" name={metric.icon} />
        <p className="text-[0.65rem] font-bold leading-3 text-blue-100">{metric.label}</p>
      </div>
      <p className="mt-1 text-2xl font-black text-white">{metric.value}</p>
    </div>
  );
}

function HeroMockup({ page }: { page: ResourceListPage }) {
  const theme = resourceThemes[page.theme];
  const metrics = page.metrics?.slice(0, 5);

  return (
    <div className="relative mx-auto min-h-[26rem] w-full max-w-[44rem]">
      <div className="absolute inset-5 overflow-hidden rounded-2xl border border-blue-300/20 bg-blue-950/45 p-5 shadow-[0_28px_80px_rgb(0_0_0/0.26)] backdrop-blur">
        <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.07)_1px,transparent_1px)] [background-size:38px_38px]" />
        <div className="relative grid h-full gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-blue-300/20 bg-slate-950/55 p-4">
            <div className="flex items-center gap-2">
              {[52, 72, 44].map((width) => <span className="h-2 rounded-full bg-blue-200/25" key={width} style={{ width }} />)}
            </div>
            <div className="mt-6 grid gap-3">
              {[68, 88, 54, 78].map((width, index) => (
                <div className="rounded-lg border border-blue-200/10 bg-white/5 p-3" key={width}>
                  <span className="block h-2 rounded-full" style={{ width: `${width}%`, backgroundColor: index === 0 ? theme.accent : "rgb(147 197 253 / 0.45)" }} />
                  <span className="mt-2 block h-2 w-1/2 rounded-full bg-blue-200/15" />
                </div>
              ))}
            </div>
            {page.visual === "video" ? <PlayOverlay /> : null}
            {page.visual === "podcast" ? <AudioWave accent={theme.accent} /> : null}
          </div>
          <div className="grid gap-3">
            <div className="grid place-items-center rounded-xl border border-blue-300/20 bg-white/5 p-6" style={{ color: theme.accent }}>
              <Icon className="size-20" name={page.icon} />
            </div>
            <div className="rounded-xl border border-blue-300/20 bg-white/5 p-4">
              <p className="text-xs font-black text-blue-50">{page.featured.type}</p>
              <p className="mt-2 text-lg font-black leading-6 text-white">{page.featured.title}</p>
            </div>
          </div>
        </div>
      </div>
      {metrics ? (
        <div className="absolute right-0 top-2 grid w-40 gap-2">
          {metrics.map((metric) => <MetricCard metric={metric} key={metric.label} />)}
        </div>
      ) : null}
    </div>
  );
}

function PlayOverlay() {
  return (
    <div className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur">
      <Icon className="size-9" name="play" />
    </div>
  );
}

function AudioWave({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-x-8 bottom-8 flex h-20 items-center gap-1.5">
      {[26, 58, 36, 74, 44, 64, 30, 68, 42, 56, 28, 72].map((height, index) => (
        <span className="flex-1 rounded-full" key={`${height}-${index}`} style={{ height, backgroundColor: index % 2 ? accent : "rgb(147 197 253 / 0.45)" }} />
      ))}
    </div>
  );
}

function IconTabs({ items }: { items: ResourceBasicItem[] }) {
  return (
    <Container className="-mt-8 relative z-10">
      <div className="grid gap-2 rounded-xl border border-[var(--bta-border)] bg-white p-3 shadow-[0_20px_55px_rgb(8_23_63/0.14)] sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
        {items.map((item, index) => (
          <Link className={`grid min-h-20 place-items-center rounded-lg p-3 text-center text-xs font-black text-[var(--bta-text)] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 ${index === 0 ? "text-[var(--bta-blue)] ring-1 ring-blue-100" : ""}`} href={item.href} key={item.title}>
            <Icon className="mb-2 size-8" name={item.icon} />
            {item.title}
          </Link>
        ))}
      </div>
    </Container>
  );
}

function BasicGrid({ title, items, columns, compact = false }: { title: string; items: ResourceBasicItem[]; columns: "three" | "four" | "six"; compact?: boolean }) {
  const gridClass = columns === "six" ? "md:grid-cols-3 xl:grid-cols-6" : columns === "four" ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <section className="bg-white py-6 sm:py-8" id={title === "Explora por formato" ? "formatos" : undefined}>
      <Container>
        <h2 className="text-xl font-black text-[var(--bta-text)]">{title}</h2>
        <div className={`mt-4 grid gap-4 ${gridClass}`}>
          {items.map((item) => <BasicResourceCard compact={compact} item={item} key={item.title} />)}
        </div>
      </Container>
    </section>
  );
}

function BasicResourceCard({ item, compact = false }: { item: ResourceBasicItem; compact?: boolean }) {
  const theme = resourceThemes[item.theme ?? "blue"];

  return (
    <Link className={`group flex min-h-28 items-center gap-4 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[var(--bta-shadow)] transition hover:-translate-y-0.5 hover:border-blue-200 focus-visible:outline focus-visible:outline-2 ${compact ? "min-h-20" : ""}`} href={item.href}>
      <span className="grid size-14 shrink-0 place-items-center rounded-full" style={{ backgroundColor: theme.soft, color: theme.accent }}>
        <Icon className="size-7" name={item.icon} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-black leading-5 text-[var(--bta-text)]">{item.title}</span>
        {item.description ? <span className="mt-1 block text-xs leading-5 text-[var(--bta-muted)]">{item.description}</span> : null}
        {item.meta ? <span className="mt-1 block text-[0.7rem] font-bold text-[var(--bta-blue)]">{item.meta}</span> : null}
      </span>
      <Icon className="size-4 shrink-0 text-[var(--bta-blue)] transition group-hover:translate-x-1" name="arrow-right" />
    </Link>
  );
}

function FeaturedResource({ item, title }: { item: ResourceCardItem; title: string }) {
  const theme = resourceThemes[item.theme];

  return (
    <section className="bg-white py-4 sm:py-6" id="destacado">
      <Container>
        <h2 className="text-xl font-black text-[var(--bta-text)]">{title}</h2>
        <article className="mt-4 grid overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[var(--bta-shadow)] lg:grid-cols-[23rem_1fr]">
          <div className="relative min-h-48 overflow-hidden bg-[var(--bta-blue-deeper)] p-5 text-white">
            <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="relative grid h-full place-items-center rounded-xl border border-white/15 bg-white/5" style={{ color: theme.accent }}>
              <Icon className="size-24" name={item.icon} />
            </div>
          </div>
          <div className="grid gap-5 p-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex rounded-full px-2.5 py-1 text-[0.65rem] font-black" style={{ backgroundColor: theme.soft, color: theme.accent }}>{item.type}</span>
              <h3 className="mt-3 max-w-2xl text-2xl font-black leading-8 text-[var(--bta-text)]">{item.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--bta-muted)]">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(item.tags ?? item.meta).map((tag) => <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[0.7rem] font-bold text-[var(--bta-muted)]" key={tag}>{tag}</span>)}
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-[var(--bta-muted)]">
                {item.meta.map((meta) => <span className="inline-flex items-center gap-1.5" key={meta}><Icon className="size-3.5" name="calendar" />{meta}</span>)}
              </div>
            </div>
            <ButtonLink className="self-end" href={item.href}>{item.ctaLabel}</ButtonLink>
          </div>
        </article>
      </Container>
    </section>
  );
}

function TwoColumnResourceSection({ left, middle, right }: { left?: { title: string; items: ResourceBasicItem[] }; middle?: { title: string; items: ResourceBasicItem[] }; right?: { title: string; items: (ResourceBasicItem | ResourceCardItem)[] } }) {
  const sections = [left, middle, right].filter(Boolean) as { title: string; items: (ResourceBasicItem | ResourceCardItem)[] }[];

  return (
    <section className="bg-white py-6 sm:py-8">
      <Container>
        <div className={`grid gap-6 ${sections.length === 3 ? "lg:grid-cols-[0.9fr_1.1fr_1.1fr]" : "lg:grid-cols-2"}`}>
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-black text-[var(--bta-text)]">{section.title}</h2>
              <div className="mt-4 grid gap-3">
                {section.items.map((item) => <SmallResourceRow item={item} key={item.title} />)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SmallResourceRow({ item }: { item: ResourceBasicItem | ResourceCardItem }) {
  const theme = resourceThemes[item.theme ?? "blue"];

  return (
    <Link className="group flex items-center gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-3 shadow-[var(--bta-shadow)] transition hover:border-blue-200 focus-visible:outline focus-visible:outline-2" href={item.href}>
      <span className="grid size-12 shrink-0 place-items-center rounded-xl" style={{ backgroundColor: theme.soft, color: theme.accent }}>
        <Icon className="size-6" name={item.icon} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-black leading-5 text-[var(--bta-text)]">{item.title}</span>
        <span className="mt-1 block text-xs leading-4 text-[var(--bta-muted)]">{item.description}</span>
        {"meta" in item && item.meta ? <span className="mt-1 block text-[0.7rem] font-bold text-[var(--bta-blue)]">{Array.isArray(item.meta) ? item.meta.join(" · ") : item.meta}</span> : null}
      </span>
      <Icon className="size-4 shrink-0 text-[var(--bta-blue)] transition group-hover:translate-x-1" name="arrow-right" />
    </Link>
  );
}

function MediaStrip({ title, items, id }: { title: string; items: ResourceCardItem[]; id?: string }) {
  return (
    <section className="bg-white py-6 sm:py-8" id={id}>
      <Container>
        <h2 className="text-xl font-black text-[var(--bta-text)]">{title}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => <MediaCard item={item} key={item.title} />)}
        </div>
      </Container>
    </section>
  );
}

function MediaCard({ item }: { item: ResourceCardItem }) {
  const theme = resourceThemes[item.theme];

  return (
    <article className="overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[var(--bta-shadow)]">
      <div className="relative min-h-28 bg-[var(--bta-blue-deeper)] p-4 text-white">
        <div className="grid size-14 place-items-center rounded-full bg-white/10" style={{ color: theme.accent }}>
          <Icon className="size-7" name={item.icon} />
        </div>
        <span className="absolute bottom-3 right-3 rounded bg-slate-950/80 px-2 py-1 text-[0.65rem] font-bold">{item.meta[0]}</span>
      </div>
      <div className="p-4">
        <span className="text-[0.62rem] font-black" style={{ color: theme.accent }}>{item.type}</span>
        <h3 className="mt-1 text-sm font-black leading-5 text-[var(--bta-text)]">{item.title}</h3>
        <a className="mt-3 inline-flex items-center gap-1 text-xs font-black text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2" href={item.href}>{item.ctaLabel}<Icon className="size-3" name="arrow-right" /></a>
      </div>
    </article>
  );
}

function PodcastRows({ items }: { items: ResourceCardItem[] }) {
  return (
    <section className="bg-white py-6 sm:py-8" id="episodios">
      <Container>
        <h2 className="text-xl font-black text-[var(--bta-text)]">Episodios recientes</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_18rem]">
          <div className="rounded-xl border border-[var(--bta-border)] bg-white shadow-[var(--bta-shadow)]">
            {items.map((item) => (
              <div className="grid gap-3 border-b border-[var(--bta-border)] p-4 last:border-b-0 sm:grid-cols-[6rem_1fr_auto]" key={item.title}>
                <div className="grid min-h-20 place-items-center rounded-xl bg-[var(--bta-blue-deeper)] text-[var(--bta-blue-bright)]"><Icon className="size-8" name="play" /></div>
                <div>
                  <p className="text-[0.7rem] font-bold text-[var(--bta-muted)]">{item.type}</p>
                  <h3 className="text-base font-black text-[var(--bta-text)]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[var(--bta-muted)]">{item.description}</p>
                </div>
                <div className="flex items-center gap-4 text-xs font-semibold text-[var(--bta-muted)] sm:flex-col sm:items-end sm:justify-center">
                  <span>{item.meta[0]}</span><span>{item.meta[1]}</span>
                  <a className="font-black text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2" href={item.href}>{item.ctaLabel}</a>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded-xl bg-[var(--bta-soft)] p-4">
            <h3 className="text-sm font-black text-[var(--bta-text)]">Buscar y filtrar</h3>
            <label className="mt-3 block text-xs font-bold text-[var(--bta-muted)]" htmlFor="podcast-search">Buscar episodio</label>
            <input className="mt-1 min-h-10 w-full rounded-lg border border-[var(--bta-border)] px-3 text-sm focus-visible:outline focus-visible:outline-2" id="podcast-search" placeholder="Tema o invitado..." type="search" />
            <div className="mt-5 rounded-xl bg-[var(--bta-blue-deeper)] p-4 text-white">
              <h3 className="font-black">No te pierdas ningún episodio</h3>
              <p className="mt-2 text-xs leading-5 text-blue-100">Recibe nuevos episodios directamente en tu correo.</p>
              <label className="mt-3 block text-xs font-bold text-blue-100" htmlFor="podcast-email">Correo electrónico</label>
              <input className="mt-1 min-h-10 w-full rounded-lg border border-white/20 px-3 text-sm text-[var(--bta-text)]" id="podcast-email" type="email" autoComplete="email" placeholder="Tu correo electrónico" />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function RankingSection({ title, items }: { title: string; items: ResourceCardItem[] }) {
  return (
    <section className="bg-white py-6 sm:py-8">
      <Container>
        <h2 className="text-xl font-black text-[var(--bta-text)]">{title}</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Link className="flex items-center gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-3 shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2" href={item.href} key={`${item.title}-${index}`}>
              <span className="text-3xl font-black text-[var(--bta-blue)]">{index + 1}</span>
              <span className="min-w-0">
                <span className="block text-xs font-black leading-4 text-[var(--bta-text)]">{item.title}</span>
                <span className="mt-1 block text-[0.7rem] text-[var(--bta-muted)]">{item.meta.join(" · ")}</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function NewsletterCta({ newsletter, secondaryHref }: { newsletter: NonNullable<ResourceListPage["newsletter"]>; secondaryHref?: string }) {
  return (
    <section className="bg-white py-6 sm:py-8" id="suscripcion">
      <Container>
        <form className="grid gap-4 rounded-xl bg-[var(--bta-blue)] p-5 text-white shadow-[0_20px_55px_rgb(0_87_255/0.24)] lg:grid-cols-[1fr_24rem_auto] lg:items-center">
          <div>
            <h2 className="text-2xl font-black">{newsletter.title}</h2>
            <p className="mt-1 text-sm text-blue-50">{newsletter.description}</p>
          </div>
          <label className="block">
            <span className="sr-only">Correo electrónico</span>
            <input className="min-h-11 w-full rounded-lg border border-white/25 px-4 text-sm text-[var(--bta-text)] focus-visible:outline focus-visible:outline-2" type="email" autoComplete="email" placeholder="Ingresa tu correo electrónico" />
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button className="min-h-11 rounded-lg bg-white px-5 text-sm font-black text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2" type="button">{newsletter.buttonLabel}</button>
            {secondaryHref ? <Link className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/40 px-5 text-sm font-black text-white focus-visible:outline focus-visible:outline-2" href={secondaryHref}>Ir a Recursos y blog</Link> : null}
          </div>
        </form>
      </Container>
    </section>
  );
}

function FinalCta({ cta }: { cta: NonNullable<ResourceListPage["finalCta"]> }) {
  return (
    <section className="bg-white py-6 sm:py-8">
      <Container>
        <div className="grid gap-5 rounded-xl bg-[linear-gradient(110deg,var(--bta-blue)_0%,#0036c9_100%)] p-5 text-white shadow-[0_20px_55px_rgb(0_87_255/0.24)] lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="grid size-16 place-items-center rounded-full bg-white/12"><Icon className="size-8" name={cta.icon} /></span>
          <div>
            <h2 className="text-2xl font-black">{cta.title}</h2>
            <p className="mt-1 text-sm leading-6 text-blue-50">{cta.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={cta.primaryCta.href} variant="light">{cta.primaryCta.label}</ButtonLink>
            {cta.secondaryCta ? <ButtonLink href={cta.secondaryCta.href} variant="secondary">{cta.secondaryCta.label}</ButtonLink> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
