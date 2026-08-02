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

const title = "Aldo Jara Pisconti | Fundador de Big Talent Analytica";
const description =
  "Conoce a Aldo Jara Pisconti, fundador de Big Talent Analytica, y su experiencia internacional en estrategia, talento, datos, inteligencia artificial y transformación digital.";
const aboutUrl = `${siteConfig.url}/sobre-mi`;
const socialImage = `${siteConfig.url}/images/about/aldo-jara-iese-certificate.jpg`;
const socialImageAlt = "Aldo Jara Pisconti en IESE Business School";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/sobre-mi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: aboutUrl,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "profile",
    images: [
      {
        url: socialImage,
        width: 1977,
        height: 1937,
        alt: socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: {
      url: socialImage,
      alt: socialImageAlt,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${aboutUrl}#person`,
  name: siteConfig.founder,
  url: aboutUrl,
  image: socialImage,
  description,
  jobTitle: "Fundador de Big Talent Analytica",
  knowsAbout: [
    "Experiencia internacional",
    "Estrategia empresarial",
    "Gestión del talento",
    "People Analytics",
    "Analítica de datos",
    "Inteligencia artificial aplicada",
    "Transformación digital",
    "Educación",
    "Mentoría profesional",
  ],
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${aboutUrl}#webpage`,
  url: aboutUrl,
  name: title,
  description,
  inLanguage: "es",
  mainEntity: {
    "@id": `${aboutUrl}#person`,
  },
};

function serializeJsonLd(jsonLd: object) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}

export default function AboutPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(profilePageJsonLd) }}
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
