import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "analitica-y-toma-de-decisiones";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function AnaliticaYTomaDeDecisionesPage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
