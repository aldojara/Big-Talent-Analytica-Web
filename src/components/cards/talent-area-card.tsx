import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import type { TalentArea } from "@/types/talent";

import { accentStyles } from "./talent-card-styles";

export function TalentAreaCard({ area }: { area: TalentArea }) {
  const accent = accentStyles[area.accent];

  return (
    <Link
      aria-label={`Explorar área: ${area.title}`}
      className="group grid h-full min-h-36 min-w-0 grid-cols-[2.75rem_1fr] gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-3.5 shadow-[0_6px_18px_rgb(8_23_63/0.04)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_10px_24px_rgb(8_23_63/0.07)] focus-visible:outline focus-visible:outline-2"
      href={area.href ?? "#talent-areas"}
    >
      <span
        className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full ${accent.icon}`}
      >
        <Icon className="size-5" name={area.icon} />
      </span>
      <div className="flex min-w-0 flex-col">
        <h3 className="text-sm font-black leading-5 text-[var(--bta-text)]">
          {area.title}
        </h3>
        <p className="mt-1.5 flex-1 text-xs leading-[1.55] text-[var(--bta-muted)]">
          {area.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-bold text-[var(--bta-blue)] transition group-hover:text-[var(--bta-blue-deeper)]">
          Explorar área
          <Icon className="size-3.5" name="arrow-right" />
        </span>
      </div>
    </Link>
  );
}
