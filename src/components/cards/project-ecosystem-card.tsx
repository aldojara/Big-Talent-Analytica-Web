import Link from "next/link";

import type { ProjectEcosystemItem } from "@/types/about";

const visuals: Record<ProjectEcosystemItem["visual"], string> = {
  primary:
    "bg-[radial-gradient(circle_at_25%_25%,rgb(29_115_255/0.7),transparent_24%),linear-gradient(135deg,#021236,#0057ff_55%,#061b49)]",
  travel:
    "bg-[radial-gradient(circle_at_70%_18%,rgb(24_196_199/0.55),transparent_24%),linear-gradient(135deg,#061b49,#0f766e_62%,#172554)]",
  resources:
    "bg-[radial-gradient(circle_at_20%_25%,rgb(20_184_166/0.52),transparent_24%),linear-gradient(135deg,#021236,#064e3b_60%,#0f172a)]",
  content:
    "bg-[radial-gradient(circle_at_72%_26%,rgb(245_158_11/0.58),transparent_25%),linear-gradient(135deg,#1f2937,#7c2d12_58%,#021236)]",
};

export function ProjectEcosystemCard({
  project,
}: {
  project: ProjectEcosystemItem;
}) {
  const body = (
    <>
      <div
        className={`relative aspect-[16/7] overflow-hidden rounded-t-xl ${visuals[project.visual]}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgb(255_255_255/0.18)_1px,transparent_1px),linear-gradient(rgb(255_255_255/0.14)_1px,transparent_1px)] [background-size:24px_24px]"
        />
        {project.label ? (
          <span className="absolute left-3 top-3 rounded bg-[var(--bta-blue)] px-2 py-1 text-[0.62rem] font-black uppercase tracking-[0.08em] text-white">
            {project.label}
          </span>
        ) : null}
        <h3 className="absolute inset-x-3 bottom-3 text-base font-black leading-tight text-white">
          {project.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs leading-5 text-[var(--bta-muted)]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-[0.65rem] font-bold text-[var(--bta-blue)]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-4 w-fit rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-[0.68rem] font-bold text-amber-700">
          {project.status}
        </span>
      </div>
    </>
  );

  if (project.href) {
    return (
      <Link
        className="group flex h-full min-w-0 flex-col rounded-xl border border-[var(--bta-border)] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2"
        href={project.href}
      >
        {body}
      </Link>
    );
  }

  return (
    <article className="flex h-full min-w-0 flex-col rounded-xl border border-[var(--bta-border)] bg-white shadow-sm">
      {body}
    </article>
  );
}
