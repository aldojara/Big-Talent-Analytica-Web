import type { Metadata } from "next";

import { DomainsOverviewPage } from "@/components/sections/domains/domain-pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dominios",
  description:
    "Explora cómo la inteligencia artificial, la analítica, la automatización y el talento se aplican a las principales áreas del negocio.",
  alternates: {
    canonical: "/dominios",
  },
  openGraph: {
    title: "Dominios | Big Talent Analytica",
    description:
      "Explora cómo la inteligencia artificial, la analítica, la automatización y el talento se aplican a las principales áreas del negocio.",
    url: `${siteConfig.url}/dominios`,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
  },
};

export default function DominiosPage() {
  return <DomainsOverviewPage />;
}
