import { Icon } from "@/components/ui/icon";
import type { ProfessionalDimension } from "@/types/about";

const accents: Record<ProfessionalDimension["accent"], string> = {
  blue: "bg-blue-600 text-white shadow-[0_12px_24px_rgb(37_99_235/0.22)] after:bg-blue-500",
  violet:
    "bg-violet-600 text-white shadow-[0_12px_24px_rgb(124_58_237/0.2)] after:bg-violet-500",
  teal: "bg-teal-600 text-white shadow-[0_12px_24px_rgb(13_148_136/0.2)] after:bg-teal-500",
  cyan: "bg-sky-600 text-white shadow-[0_12px_24px_rgb(2_132_199/0.2)] after:bg-sky-500",
  rose: "bg-rose-600 text-white shadow-[0_12px_24px_rgb(225_29_72/0.18)] after:bg-rose-500",
  amber:
    "bg-amber-600 text-white shadow-[0_12px_24px_rgb(217_119_6/0.18)] after:bg-amber-500",
};

export function ProfessionalDimensionCard({
  dimension,
}: {
  dimension: ProfessionalDimension;
}) {
  return (
    <article className="relative min-w-0 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[0_8px_22px_rgb(8_23_63/0.055)]">
      <span
        className={`relative mb-4 flex size-11 items-center justify-center rounded-full after:absolute after:-bottom-24 after:left-1/2 after:h-20 after:w-px after:opacity-35 ${accents[dimension.accent]}`}
      >
        <Icon className="size-5" name={dimension.icon} />
      </span>
      <h3 className="text-sm font-bold text-[var(--bta-text)]">
        {dimension.title}
      </h3>
      <p className="mt-2 text-xs leading-5 text-[var(--bta-muted)]">
        {dimension.description}
      </p>
      <span
        aria-hidden="true"
        className={`mt-4 block h-0.5 w-24 rounded-full ${
          dimension.accent === "blue"
            ? "bg-blue-500"
            : dimension.accent === "violet"
              ? "bg-violet-500"
              : dimension.accent === "teal"
                ? "bg-teal-500"
                : dimension.accent === "cyan"
                  ? "bg-sky-500"
                  : dimension.accent === "rose"
                    ? "bg-rose-500"
                    : "bg-amber-500"
        }`}
      />
    </article>
  );
}
