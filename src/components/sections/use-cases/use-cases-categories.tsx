import Link from "@/components/ui/no-prefetch-link";

import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";
import type { UseCaseCategory } from "@/types/use-case";

export function UseCasesCategories({
  categories,
}: {
  categories: UseCaseCategory[];
}) {
  return (
    <section className="bg-white py-7 sm:py-8">
      <Container>
        <SectionHeading align="center" title="¿Qué encontrarás?" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const content = (
              <>
              <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-6" name={category.icon} />
              </span>
              <h2 className="mt-3 text-sm font-black text-[var(--bta-text)]">
                {category.title}
              </h2>
              <p className="mt-1.5 text-xs leading-5 text-[var(--bta-muted)]">
                {category.description}
              </p>
              </>
            );

            if (category.href) {
              return (
                <Link
                  className="block min-w-0 rounded-lg border border-[var(--bta-border)] bg-white px-5 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_22px_rgb(8_23_63/0.07)] focus-visible:outline focus-visible:outline-2"
                  href={category.href}
                  key={category.id}
                >
                  {content}
                </Link>
              );
            }

            return (
              <article
                className="min-w-0 rounded-lg border border-[var(--bta-border)] bg-white px-5 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_22px_rgb(8_23_63/0.07)]"
                key={category.id}
              >
                {content}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
