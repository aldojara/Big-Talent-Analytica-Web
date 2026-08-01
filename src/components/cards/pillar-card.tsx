import Link from "@/components/ui/no-prefetch-link";

import { Icon } from "@/components/ui/icon";
import type { Pillar } from "@/types/content";

const iconAccents: Record<string, string> = {
  Talento: "bg-blue-50 text-blue-600",
  "Casos de uso": "bg-violet-50 text-violet-600",
  "IA y Tecnología": "bg-cyan-50 text-cyan-600",
  Dominios: "bg-orange-50 text-orange-600",
  Comunidad: "bg-emerald-50 text-emerald-600",
};

export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <Link
      className="group flex h-full min-h-40 min-w-0 flex-col rounded-xl border border-[var(--bta-border)] bg-white p-3.5 shadow-[0_8px_22px_rgb(8_23_63/0.055)] transition hover:-translate-y-0.5 hover:border-blue-200 focus-visible:outline focus-visible:outline-2"
      href={pillar.href}
    >
      <span
        className={`mb-3 flex size-9 items-center justify-center rounded-xl ${iconAccents[pillar.title]}`}
      >
        <Icon className="size-[1.125rem]" name={pillar.icon} />
      </span>
      <h3 className="text-sm font-bold text-[var(--bta-text)]">
        {pillar.title}
      </h3>
      <p className="mt-2 max-w-[18rem] flex-1 break-words text-[0.72rem] leading-[1.55] text-[var(--bta-muted)] sm:max-w-none">
        {pillar.description}
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--bta-blue)]">
        Ver más
        <Icon className="size-3.5" name="arrow-right" />
      </span>
    </Link>
  );
}
