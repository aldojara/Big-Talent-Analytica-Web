import { Icon } from "@/components/ui/icon";
import type { TalentAudience } from "@/types/talent";

import { accentStyles } from "./talent-card-styles";

export function TalentAudienceCard({ audience }: { audience: TalentAudience }) {
  const accent = accentStyles[audience.accent];

  return (
    <article className="flex min-h-20 min-w-0 items-center gap-3 rounded-xl border border-[var(--bta-border)] bg-white p-3.5 shadow-[0_8px_22px_rgb(8_23_63/0.04)]">
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-full ${accent.soft} ${accent.text} ring-1 ${accent.border}`}
      >
        <Icon className="size-5" name={audience.icon} />
      </span>
      <h3 className="text-xs font-black leading-4 text-[var(--bta-text)]">
        {audience.title}
      </h3>
    </article>
  );
}
