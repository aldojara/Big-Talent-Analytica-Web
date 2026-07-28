import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CommunitySubpageView } from "@/components/sections/community/community-pages";
import { siteConfig } from "@/config/site";
import { communityPages, getCommunityPage } from "@/data/community";

type CommunityPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return communityPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: CommunityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCommunityPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical: page.href,
    },
    openGraph: {
      title: `${page.metadata.title} | Big Talent Analytica`,
      description: page.metadata.description,
      url: `${siteConfig.url}${page.href}`,
      siteName: siteConfig.name,
      locale: "es_PE",
      type: "website",
    },
  };
}

export default async function ComunidadSubpage({ params }: CommunityPageProps) {
  const { slug } = await params;
  const page = getCommunityPage(slug);

  if (!page) {
    notFound();
  }

  return <CommunitySubpageView page={page} />;
}
