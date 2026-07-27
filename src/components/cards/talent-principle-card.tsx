import { Icon } from "@/components/ui/icon";
import type { TalentPrinciple } from "@/types/talent";

import { accentStyles } from "./talent-card-styles";

export function TalentPrincipleCard({
  principle,
}: {
  principle: TalentPrinciple;
}) {
  const accent = accentStyles[principle.accent];

  return (
    <article className="flex h-full min-h-32 min-w-0 gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-3.5 shadow-[0_8px_22px_rgb(8_23_63/0.04)]">
      <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${accent.soft} ${accent.text}`}>
        <Icon className="size-5" name={principle.icon} />
      </span>
      <div className="min-w-0">
        <h3 className="text-xs font-black leading-4 text-[var(--bta-text)]">
          {principle.title}
        </h3>
        <p className="mt-2 text-[0.72rem] leading-5 text-[var(--bta-muted)]">
          {principle.description}
        </p>
      </div>
    </article>
  );
}
