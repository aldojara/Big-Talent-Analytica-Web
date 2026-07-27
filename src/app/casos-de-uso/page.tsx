import type { Metadata } from "next";

import { FeaturedUseCases } from "@/components/sections/use-cases/featured-use-cases";
import { UseCasesAudiences } from "@/components/sections/use-cases/use-cases-audiences";
import { UseCasesCategories } from "@/components/sections/use-cases/use-cases-categories";
import { UseCasesFinalCta } from "@/components/sections/use-cases/use-cases-final-cta";
import { UseCasesHero } from "@/components/sections/use-cases/use-cases-hero";
import { UseCasesImpact } from "@/components/sections/use-cases/use-cases-impact";
import { UseCasesProcess } from "@/components/sections/use-cases/use-cases-process";
import { UseCasesValueStrip } from "@/components/sections/use-cases/use-cases-value-strip";
import { siteConfig } from "@/config/site";
import {
  featuredUseCases,
  useCaseAudiences,
  useCaseCategories,
  useCaseImpactItems,
  useCaseProcessSteps,
  useCaseValueProposals,
  useCasesFinalCta,
  useCasesHero,
} from "@/data/use-cases";

const title = "Casos de uso | Big Talent Analytica";
const description =
  "Explora casos de uso de talento, inteligencia artificial, automatización, analítica y transformación organizacional orientados a resultados de negocio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/casos-de-uso",
  },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/casos-de-uso`,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
  },
};

export default function CasosDeUsoPage() {
  return (
    <>
      <UseCasesHero hero={useCasesHero} />
      <UseCasesValueStrip items={useCaseValueProposals} />
      <UseCasesCategories categories={useCaseCategories} />
      <FeaturedUseCases cases={featuredUseCases} />
      <UseCasesProcess steps={useCaseProcessSteps} />
      <UseCasesImpact items={useCaseImpactItems} />
      <UseCasesAudiences audiences={useCaseAudiences} />
      <UseCasesFinalCta cta={useCasesFinalCta} />
    </>
  );
}
