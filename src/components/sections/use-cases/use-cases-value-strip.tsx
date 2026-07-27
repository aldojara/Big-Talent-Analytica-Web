import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import type { UseCaseValueProposal } from "@/types/use-case";

export function UseCasesValueStrip({
  items,
}: {
  items: UseCaseValueProposal[];
}) {
  return (
    <section className="relative z-10 -mt-8 bg-white">
      <Container>
        <div className="grid gap-0 overflow-hidden rounded-lg border border-[var(--bta-border)] bg-white shadow-[0_8px_24px_rgb(8_23_63/0.07)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              className="flex min-w-0 items-center gap-3 border-b border-[var(--bta-border)] px-4 py-3.5 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:border-r-blue-100 lg:last:border-r-0"
              key={item.id}
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-5" name={item.icon} />
              </span>
              <div className="min-w-0">
                <h2 className="text-xs font-black text-[var(--bta-text)]">
                  {item.title}
                </h2>
                <p className="mt-0.5 text-[0.68rem] leading-4 text-[var(--bta-muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
