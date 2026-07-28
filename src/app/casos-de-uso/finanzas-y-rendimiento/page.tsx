import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "finanzas-y-rendimiento";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function FinanzasYRendimientoPage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
