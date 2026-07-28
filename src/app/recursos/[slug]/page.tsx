import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResourceSubpage } from "@/components/sections/resources/resource-pages";
import { siteConfig } from "@/config/site";
import { getResourcePage, resourcePages } from "@/data/resources";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return resourcePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(slug);

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

export default async function RecursosSubpage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const page = getResourcePage(slug);

  if (!page) {
    notFound();
  }

  return <ResourceSubpage page={page} />;
}
