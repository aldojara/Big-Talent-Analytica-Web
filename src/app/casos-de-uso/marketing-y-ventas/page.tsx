import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "marketing-y-ventas";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function MarketingYVentasPage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
