import type { Metadata } from "next";

import { AboutFinalCtaSection } from "@/components/sections/about/about-final-cta-section";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { AuthorityProofSection } from "@/components/sections/about/authority-proof-section";
import { CareerJourneySection } from "@/components/sections/about/career-journey-section";
import { EcosystemFlowSection } from "@/components/sections/about/ecosystem-flow-section";
import { ProfessionalArchitectureSection } from "@/components/sections/about/professional-architecture-section";
import { ProjectsEcosystemSection } from "@/components/sections/about/projects-ecosystem-section";
import { WorkPrinciplesSection } from "@/components/sections/about/work-principles-section";
import { siteConfig } from "@/config/site";

const title = "Sobre mí | Aldo Jara Pisconti";
const description =
  "Conoce la trayectoria, experiencia internacional y arquitectura profesional de Aldo Jara Pisconti en estrategia, talento, datos, inteligencia artificial, educación y mentoría.";
const aboutUrl = `${siteConfig.url}/sobre-mi`;

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/sobre-mi",
  },
  openGraph: {
    title,
    description,
    url: aboutUrl,
    siteName: siteConfig.name,
    type: "profile",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.founder,
  url: aboutUrl,
};

export default function AboutPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        type="application/ld+json"
      />
      <AboutHeroSection />
      <CareerJourneySection />
      <AuthorityProofSection />
      <ProfessionalArchitectureSection />
      <EcosystemFlowSection />
      <ProjectsEcosystemSection />
      <WorkPrinciplesSection />
      <AboutFinalCtaSection />
    </>
  );
}
