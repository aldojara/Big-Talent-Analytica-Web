import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "experiencia-de-cliente";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function ExperienciaDeClientePage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
