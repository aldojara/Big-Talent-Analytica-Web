import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "talento-y-recursos-humanos";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function TalentoYRecursosHumanosPage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
