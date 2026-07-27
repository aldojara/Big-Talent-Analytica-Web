import { Container } from "@/components/layout/container";
import { Icon } from "@/components/ui/icon";
import { authorityProofs } from "@/data/about";

export function AuthorityProofSection() {
  return (
    <section className="bg-white pb-8">
      <Container>
        <div className="grid gap-0 overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {authorityProofs.map((proof) => (
            <article
              className="min-w-0 border-b border-[var(--bta-border)] p-5 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              key={proof.title}
            >
              <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-blue-50 text-[var(--bta-blue)]">
                <Icon className="size-5" name={proof.icon} />
              </span>
              <h3 className="text-sm font-black text-[var(--bta-blue-deeper)]">
                {proof.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-[var(--bta-muted)]">
                {proof.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
