import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DomainDetailPage } from "@/components/sections/domains/domain-pages";
import { siteConfig } from "@/config/site";
import { domainPages, getDomainPage } from "@/data/domains";

type DomainRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return domainPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: DomainRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getDomainPage(slug);

  if (!page) {
    return {};
  }

  const url = `/dominios/${page.slug}`;

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

export default async function DomainPageRoute({ params }: DomainRouteProps) {
  const { slug } = await params;
  const page = getDomainPage(slug);

  if (!page) {
    notFound();
  }

  return <DomainDetailPage page={page} />;
}
