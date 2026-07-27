import type { Metadata } from "next";

import { CorporateTraining } from "@/components/sections/talent/corporate-training";
import { TalentAi } from "@/components/sections/talent/talent-ai";
import { TalentAreas } from "@/components/sections/talent/talent-areas";
import { TalentAudiences } from "@/components/sections/talent/talent-audiences";
import { TalentContent } from "@/components/sections/talent/talent-content";
import { TalentFinalCta } from "@/components/sections/talent/talent-final-cta";
import { TalentHero } from "@/components/sections/talent/talent-hero";
import { TalentMethod } from "@/components/sections/talent/talent-method";
import { TalentPrinciples } from "@/components/sections/talent/talent-principles";
import { TalentSolutions } from "@/components/sections/talent/talent-solutions";
import { siteConfig } from "@/config/site";

const title = "Talento, aprendizaje y transformación | Big Talent Analytica";
const description =
  "Desarrollo de talento, liderazgo, upskilling, reskilling, formación corporativa, mentoría profesional e inteligencia artificial para transformar personas, equipos y organizaciones.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/talento",
  },
  openGraph: {
    title,
    description,
    url: `${siteConfig.url}/talento`,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
  },
};

export default function TalentoPage() {
  return (
    <>
      <TalentHero />
      <TalentAreas />
      <TalentMethod />
      <TalentSolutions />
      <CorporateTraining />
      <TalentAi />
      <TalentContent />
      <TalentAudiences />
      <TalentPrinciples />
      <TalentFinalCta />
    </>
  );
}
