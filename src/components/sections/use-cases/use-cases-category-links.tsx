import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import type { UseCaseCategoryPage } from "@/types/use-case-category";

export function UseCasesCategoryLinks({
  pages,
}: {
  pages: UseCaseCategoryPage[];
}) {
  return (
    <section className="bg-white pb-7 sm:pb-8" aria-labelledby="casos-internos">
      <Container>
        <div className="rounded-lg border border-blue-100 bg-blue-50/45 p-3">
          <h2
            className="px-1 text-sm font-black text-[var(--bta-text)]"
            id="casos-internos"
          >
            Explora las ocho áreas de aplicación
          </h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {pages.map((page) => (
              <Link
                className="flex min-h-12 items-center justify-between gap-3 rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs font-bold text-[var(--bta-text)] transition hover:border-blue-200 hover:text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2"
                href={`/casos-de-uso/${page.slug}`}
                key={page.slug}
              >
                <span>{page.title}</span>
                <Icon className="size-3.5 shrink-0" name="arrow-right" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
