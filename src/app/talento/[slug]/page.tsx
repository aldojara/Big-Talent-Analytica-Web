import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TalentSubpageTemplate } from "@/components/sections/talent/talent-subpage-template";
import { siteConfig } from "@/config/site";
import { getTalentSubpage, talentSubpages } from "@/data/talent-subpages";

type TalentSubpageRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return talentSubpages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: TalentSubpageRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getTalentSubpage(slug);

  if (!page) {
    return {};
  }

  const url = `/talento/${page.slug}`;

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      url: `${siteConfig.url}${url}`,
      siteName: siteConfig.name,
      locale: "es_PE",
      type: "website",
    },
  };
}

export default async function TalentSubpageRoute({
  params,
}: TalentSubpageRouteProps) {
  const { slug } = await params;
  const page = getTalentSubpage(slug);

  if (!page) {
    notFound();
  }

  return <TalentSubpageTemplate page={page} />;
}
