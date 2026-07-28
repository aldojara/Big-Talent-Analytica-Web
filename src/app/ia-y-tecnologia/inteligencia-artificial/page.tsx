import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AiTechSubpageTemplate } from "@/components/sections/ia-tecnologia/ai-tech-subpage-template";
import { getAiTechnologyPage } from "@/data/ia-tecnologia/pages";
import { siteConfig } from "@/config/site";

const page = getAiTechnologyPage("inteligencia-artificial");

export const metadata: Metadata = page
  ? {
      ...page.metadata,
      alternates: { canonical: "/ia-y-tecnologia/inteligencia-artificial" },
      openGraph: {
        ...page.metadata,
        url: `${siteConfig.url}/ia-y-tecnologia/inteligencia-artificial`,
        siteName: siteConfig.name,
        locale: "es_PE",
        type: "website",
      },
    }
  : {};

export default function InteligenciaArtificialPage() {
  if (!page) notFound();
  return <AiTechSubpageTemplate page={page} />;
}
