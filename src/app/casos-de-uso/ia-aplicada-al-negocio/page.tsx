import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "ia-aplicada-al-negocio";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function IaAplicadaAlNegocioPage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
