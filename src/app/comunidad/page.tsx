import type { Metadata } from "next";

import { CommunityOverviewPage } from "@/components/sections/community/community-pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Comunidad",
  description:
    "Newsletter, eventos, canales, colaboraciones y futura comunidad privada para aprender, conectar y crecer.",
  alternates: {
    canonical: "/comunidad",
  },
  openGraph: {
    title: "Comunidad | Big Talent Analytica",
    description:
      "Newsletter, eventos, canales, colaboraciones y futura comunidad privada para aprender, conectar y crecer.",
    url: `${siteConfig.url}/comunidad`,
    siteName: siteConfig.name,
    locale: "es_PE",
    type: "website",
  },
};

export default function ComunidadPage() {
  return <CommunityOverviewPage />;
}
