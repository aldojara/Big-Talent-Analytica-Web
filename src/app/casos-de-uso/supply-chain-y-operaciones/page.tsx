import { buildUseCaseCategoryMetadata, RenderUseCaseCategoryPage } from "../category-page-utils";

const slug = "supply-chain-y-operaciones";

export const metadata = buildUseCaseCategoryMetadata(slug);

export default function SupplyChainYOperacionesPage() {
  return <RenderUseCaseCategoryPage slug={slug} />;
}
