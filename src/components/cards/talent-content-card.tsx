import Link from "@/components/ui/no-prefetch-link";

import { Icon } from "@/components/ui/icon";
import type { TalentContentItem } from "@/types/talent";

import { accentStyles } from "./talent-card-styles";

export function TalentContentCard({ item }: { item: TalentContentItem }) {
  const accent = accentStyles[item.accent];

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[0_8px_22px_rgb(8_23_63/0.055)]">
      <div
        className={`relative flex aspect-[16/8.5] items-center justify-center overflow-hidden bg-gradient-to-br ${accent.gradient} text-white`}
        role="img"
        aria-label={item.imageAlt}
      >
        <span className="absolute left-3 top-3 z-10 rounded-md bg-white/95 px-2.5 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide text-[var(--bta-blue-deeper)]">
          {item.badge}
        </span>
        <div className="absolute inset-0 opacity-75 [background-image:radial-gradient(rgb(255_255_255/0.32)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -right-8 -top-8 size-28 rounded-full border border-white/25" />
        <div className="absolute -bottom-10 left-4 size-32 rounded-full bg-white/10" />
        <Icon className="relative size-12 drop-shadow" name={item.icon} />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className={`text-[0.64rem] font-bold uppercase tracking-[0.14em] ${accent.text}`}>
          {item.category}
        </p>
        <h3 className="mt-1.5 text-sm font-black leading-5 text-[var(--bta-text)]">
          <Link
            className="rounded focus-visible:outline focus-visible:outline-2"
            href={item.href}
          >
            {item.title}
          </Link>
        </h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              className="rounded-full bg-blue-50 px-2 py-1 text-[0.62rem] font-semibold text-[var(--bta-blue)]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className={`mt-4 w-fit rounded-full ${accent.soft} ${accent.text} px-2.5 py-1 text-[0.65rem] font-bold`}
        >
          {item.status}
        </span>
      </div>
    </article>
  );
}
