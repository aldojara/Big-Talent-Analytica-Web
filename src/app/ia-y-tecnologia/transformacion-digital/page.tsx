import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AiTechSubpageTemplate } from "@/components/sections/ia-tecnologia/ai-tech-subpage-template";
import { getAiTechnologyPage } from "@/data/ia-tecnologia/pages";
import { siteConfig } from "@/config/site";

const page = getAiTechnologyPage("transformacion-digital");

export const metadata: Metadata = page
  ? {
      ...page.metadata,
      alternates: { canonical: "/ia-y-tecnologia/transformacion-digital" },
      openGraph: {
        ...page.metadata,
        url: `${siteConfig.url}/ia-y-tecnologia/transformacion-digital`,
        siteName: siteConfig.name,
        locale: "es_PE",
        type: "website",
      },
    }
  : {};

export default function TransformacionDigitalPage() {
  if (!page) notFound();
  return <AiTechSubpageTemplate page={page} />;
}
