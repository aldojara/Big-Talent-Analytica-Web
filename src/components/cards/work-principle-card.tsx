import { Icon } from "@/components/ui/icon";
import type { WorkPrinciple } from "@/types/about";

export function WorkPrincipleCard({
  principle,
}: {
  principle: WorkPrinciple;
}) {
  return (
    <article className="min-w-0 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-sm">
      <span className="mb-3 flex size-9 items-center justify-center rounded-xl bg-blue-50 text-[var(--bta-blue)]">
        <Icon className="size-[1.125rem]" name={principle.icon} />
      </span>
      <h3 className="text-sm font-bold leading-5 text-[var(--bta-text)]">
        {principle.title}
      </h3>
      <p className="mt-2 text-[0.72rem] leading-5 text-[var(--bta-muted)]">
        {principle.description}
      </p>
    </article>
  );
}
