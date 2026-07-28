import type { Metadata } from "next";

import { AiTechMainPage } from "@/components/sections/ia-tecnologia/ai-tech-main-page";
import { aiTechnologyMain } from "@/data/ia-tecnologia/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  ...aiTechnologyMain.metadata,
  alternates: {
    canonical: "/ia-y-tecnologia",
  },
  openGraph: {
    ...aiTechnologyMain.metadata,
    url: `${siteConfig.url}/ia-y-tecnologia`,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
  },
};

export default function IaTecnologiaPage() {
  return <AiTechMainPage />;
}
