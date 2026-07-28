import { AiTechHero, AiTechPillars, Applications, Audiences, ContentGrid, EvaluationPanel, FinalCta, KeyAreas, Process, SectionTitle } from "@/components/sections/ia-tecnologia/ai-tech-shared";
import type { AiTechPageConfig } from "@/types/ia-tecnologia";

export function AiTechSubpageTemplate({ page }: { page: AiTechPageConfig }) {
  return (
    <>
      <AiTechHero breadcrumbs={page.breadcrumbs} hero={page.hero} />
      <AiTechPillars items={page.pillars} />
      <section className="bg-[var(--bta-soft)] py-9" id="explorar">
        <div className="mx-auto w-full max-w-[var(--bta-container)] px-4 sm:px-6 lg:px-8">
          <SectionTitle centered>{page.introTitle}</SectionTitle>
          <ContentGrid columns={page.contentItems.length === 4 ? "four" : "auto"} items={page.contentItems} />
        </div>
      </section>
      {page.keyAreas && page.keyAreasTitle ? (
        <KeyAreas items={page.keyAreas} title={page.keyAreasTitle} />
      ) : null}
      <Applications items={page.applications} title={page.applicationsTitle} />
      <Process items={page.process} title={page.processTitle} />
      <EvaluationPanel items={page.evaluationItems} title={page.evaluationTitle} variant={page.hero.visual} />
      <Audiences items={page.audiences} />
      <FinalCta cta={page.finalCta} dark={page.ctaVariant === "dark"} />
    </>
  );
}
