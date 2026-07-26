import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import type { FeaturedContent } from "@/types/content";

const accentClasses = {
  blue: "from-blue-600 to-cyan-500",
  teal: "from-teal-500 to-emerald-400",
  violet: "from-violet-600 to-blue-500",
  rose: "from-rose-500 to-blue-700",
};

export function ContentCard({ item }: { item: FeaturedContent }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[0_8px_22px_rgb(8_23_63/0.06)]">
      <div
        className={`relative flex aspect-[16/7.5] items-center justify-center bg-gradient-to-br ${accentClasses[item.accent]} text-white`}
      >
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide text-[var(--bta-blue-deeper)]">
          {item.type}
        </span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(255_255_255/0.32),transparent_30%),linear-gradient(135deg,transparent_45%,rgb(255_255_255/0.16)_45%,transparent_55%)]" />
        <Icon className="relative size-10 opacity-95" name={item.icon} />
      </div>
      <div className="p-3.5">
        <h3 className="max-w-[18rem] break-words text-sm font-bold leading-5 text-[var(--bta-text)] sm:max-w-none">
          {item.title}
        </h3>
        <p className="mt-1.5 max-w-[18rem] break-words text-xs leading-5 text-[var(--bta-muted)] sm:max-w-none">
          {item.description}
        </p>
        <Link
          className="mt-3 inline-flex text-xs font-semibold text-[var(--bta-blue)] hover:text-[var(--bta-blue-deeper)] focus-visible:outline focus-visible:outline-2"
          href={item.href}
        >
          {item.ctaLabel} <span aria-hidden="true">&nbsp;-&gt;</span>
        </Link>
      </div>
    </article>
  );
}
