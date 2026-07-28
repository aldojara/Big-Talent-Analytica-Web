import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { UseCaseCategoryPage } from "@/components/sections/use-case-category/use-case-category-page";
import { getUseCaseCategoryPage } from "@/data/use-case-categories";
import { siteConfig } from "@/config/site";

export function buildUseCaseCategoryMetadata(slug: string): Metadata {
  const page = getUseCaseCategoryPage(slug);

  if (!page) {
    return {};
  }

  const url = `${siteConfig.url}/casos-de-uso/${page.slug}`;

  return {
    title: page.metadataTitle,
    description: page.metadataDescription,
    alternates: {
      canonical: `/casos-de-uso/${page.slug}`,
    },
    openGraph: {
      title: page.metadataTitle,
      description: page.metadataDescription,
      url,
      siteName: siteConfig.name,
      locale: "es_PE",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: page.metadataTitle,
      description: page.metadataDescription,
    },
  };
}

export function RenderUseCaseCategoryPage({ slug }: { slug: string }) {
  const page = getUseCaseCategoryPage(slug);

  if (!page) {
    notFound();
  }

  return <UseCaseCategoryPage page={page} />;
}
