import { redirect } from "next/navigation";

type LegacyAiTechnologyPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

const legacySlugRedirects: Record<string, string> = {
  "automatizacion-inteligente": "automatizacion",
  "copilotos-empresariales": "ia-generativa",
  "openai-capacidades-multimodales": "ia-generativa",
  "tendencias-analitica": "radar",
};

export default async function LegacyAiTechnologyPage({ params }: LegacyAiTechnologyPageProps) {
  const { slug = [] } = await params;
  const legacySlug = slug.join("/");
  const destinationSlug = legacySlugRedirects[legacySlug] ?? legacySlug;

  redirect(`/ia-y-tecnologia${destinationSlug ? `/${destinationSlug}` : ""}`);
}
