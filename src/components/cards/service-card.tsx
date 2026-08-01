import Link from "@/components/ui/no-prefetch-link";

import { Icon } from "@/components/ui/icon";
import type { Service } from "@/types/content";

const accents = {
  blue: "bg-blue-600",
  teal: "bg-teal-500",
  violet: "bg-violet-600",
  orange: "bg-orange-500",
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      className="group min-w-0 rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[var(--bta-shadow)] focus-visible:outline focus-visible:outline-2"
      href={service.href}
    >
      <span
        className={`mb-4 flex size-10 items-center justify-center rounded-full text-white ${accents[service.accent]}`}
      >
        <Icon className="size-5" name={service.icon} />
      </span>
      <h3 className="text-sm font-bold text-[var(--bta-text)]">
        {service.title}
      </h3>
      <p className="mt-2 max-w-[18rem] break-words text-xs leading-5 text-[var(--bta-muted)] sm:max-w-none">
        {service.description}
      </p>
    </Link>
  );
}
