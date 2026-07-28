import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AiTechSubpageTemplate } from "@/components/sections/ia-tecnologia/ai-tech-subpage-template";
import { getAiTechnologyPage } from "@/data/ia-tecnologia/pages";
import { siteConfig } from "@/config/site";

const page = getAiTechnologyPage("ia-generativa");

export const metadata: Metadata = page
  ? {
      ...page.metadata,
      alternates: { canonical: "/ia-y-tecnologia/ia-generativa" },
      openGraph: {
        ...page.metadata,
        url: `${siteConfig.url}/ia-y-tecnologia/ia-generativa`,
        siteName: siteConfig.name,
        locale: "es_PE",
        type: "website",
      },
    }
  : {};

export default function IaGenerativaPage() {
  if (!page) notFound();
  return <AiTechSubpageTemplate page={page} />;
}
