import type { Metadata } from "next";

import { ResourcesOverviewPage } from "@/components/sections/resources/resource-pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Recursos y blog",
  description:
    "Artículos, guías, plantillas, videos, podcasts, cursos y herramientas para aprender, aplicar y transformar.",
  alternates: {
    canonical: "/recursos",
  },
  openGraph: {
    title: "Recursos y blog | Big Talent Analytica",
    description:
      "Artículos, guías, plantillas, videos, podcasts, cursos y herramientas para aprender, aplicar y transformar.",
    url: `${siteConfig.url}/recursos`,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
  },
};

export default function RecursosPage() {
  return <ResourcesOverviewPage />;
}
