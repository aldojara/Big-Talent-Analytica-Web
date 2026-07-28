import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "transformacion-digital-y-organizacional";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function TransformacionDigitalYOrganizacionalPage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
