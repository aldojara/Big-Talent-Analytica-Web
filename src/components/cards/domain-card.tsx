import Link from "@/components/ui/no-prefetch-link";

import { Icon } from "@/components/ui/icon";
import type { Domain } from "@/types/content";

export function DomainCard({ domain }: { domain: Domain }) {
  return (
    <Link
      className="group flex min-h-24 flex-col items-center justify-center rounded-xl border border-[var(--bta-border)] bg-white p-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2"
      href={domain.href}
    >
      <span className="mb-2 text-[var(--bta-blue)] transition group-hover:text-[var(--bta-turquoise)]">
        <Icon className="size-7" name={domain.icon} />
      </span>
      <span className="text-xs font-bold leading-4 text-[var(--bta-text)]">
        {domain.title}
      </span>
    </Link>
  );
}
