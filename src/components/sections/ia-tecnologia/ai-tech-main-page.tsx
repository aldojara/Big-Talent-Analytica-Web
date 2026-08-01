import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { AiTechHero, AiTechPillars, ContentGrid, FinalCta, KeyAreas, SectionTitle } from "@/components/sections/ia-tecnologia/ai-tech-shared";
import { AiTechCardVisual } from "@/components/sections/ia-tecnologia/ai-tech-visual";
import { Icon } from "@/components/ui/icon";
import { aiTechnologyBasePath } from "@/data/ia-tecnologia/navigation";
import { aiTechnologyMain } from "@/data/ia-tecnologia/pages";

export function AiTechMainPage() {
  return (
    <>
      <AiTechHero
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "IA y Tecnología" }]}
        hero={aiTechnologyMain.hero}
      />
      <AiTechPillars items={aiTechnologyMain.pillars} />
      <section className="bg-white py-7" id="explorar">
        <Container>
          <SectionTitle>¿Qué encontrarás aquí?</SectionTitle>
          <ContentGrid columns="four" items={aiTechnologyMain.sections} />
        </Container>
      </section>
      <section className="bg-white py-6">
        <Container>
          <SectionTitle>Qué puedes explorar</SectionTitle>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiTechnologyMain.explore.map((item) => (
              <article className="overflow-hidden rounded-lg border border-[var(--bta-border)] bg-white shadow-[0_8px_24px_rgb(8_23_63/0.05)]" key={item.title}>
                <AiTechCardVisual variant={item.visual} />
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[0.95rem] font-black leading-tight text-[var(--bta-blue-deeper)]">{item.title}</h3>
                    <Icon className="size-4 shrink-0 text-[var(--bta-muted)]" name="arrow-right" />
                  </div>
                  <p className="mt-2 text-sm leading-5 text-[var(--bta-muted)]">{item.description}</p>
                  <Link className="mt-3 inline-flex text-xs font-black text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2" href={item.href}>
                    Explorar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <KeyAreas items={aiTechnologyMain.capabilities} title="Tecnologías y capacidades destacadas" />
      <section className="bg-white py-6">
        <Container>
          <SectionTitle>¿Para qué sirve?</SectionTitle>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aiTechnologyMain.uses.map((item) => (
              <div className="flex gap-3" key={item.title}>
                <Icon className="size-8 shrink-0 text-[var(--bta-blue)]" name={item.icon} />
                <div>
                  <h3 className="text-sm font-black text-[var(--bta-blue-deeper)]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-5">
        <Container>
          <div className="relative overflow-hidden rounded-lg bg-[var(--bta-blue-deeper)] p-5 text-white shadow-[0_18px_44px_rgb(8_23_63/0.18)] lg:p-7">
            <div className="absolute inset-y-0 right-0 hidden w-80 bg-[radial-gradient(circle_at_72%_48%,rgb(24_196_199/0.26),transparent_38%)] lg:block" />
            <div className="grid gap-6 lg:grid-cols-[1.1fr_4fr] lg:items-center">
              <div className="relative">
                <Icon className="size-10 text-sky-300" name="process" />
                <h2 className="mt-3 text-2xl font-black leading-tight">Del conocimiento a la aplicación</h2>
                <Link className="mt-4 inline-flex items-center gap-2 text-sm font-black text-sky-200 focus-visible:outline focus-visible:outline-2" href={aiTechnologyBasePath}>
                  Explorar todo el sitio
                  <Icon className="size-4" name="arrow-right" />
                </Link>
              </div>
              <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {aiTechnologyMain.crossLinks.map((item) => (
                  <Link className="border-white/18 text-blue-100 transition hover:text-white focus-visible:outline focus-visible:outline-2 lg:border-l lg:pl-6" href={item.href} key={item.title}>
                    <Icon className="size-8 text-sky-300" name={item.icon} />
                    <h3 className="mt-3 text-sm font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FinalCta
        cta={{
          title: "Convierte la tecnología en decisiones y resultados.",
          primaryCta: { label: "Agendar una sesión", href: "/agenda" },
          secondaryCta: { label: "Explorar recursos", href: "/recursos" },
        }}
      />
    </>
  );
}
