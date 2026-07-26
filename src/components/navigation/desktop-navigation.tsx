import Link from "next/link";

import type { NavigationItem } from "@/config/navigation";

export function DesktopNavigation({ items }: { items: NavigationItem[] }) {
  return (
    <nav aria-label="Navegación principal" className="hidden lg:block">
      <ul className="flex items-center gap-0.5 xl:gap-1">
        {items.map((item) => (
          <li className="group relative" key={item.href}>
            <Link
              aria-current={item.active ? "page" : undefined}
              className={`flex min-h-9 items-center gap-1 whitespace-nowrap rounded-lg px-1.5 text-[0.72rem] font-semibold transition focus-visible:outline focus-visible:outline-2 xl:px-2.5 xl:text-xs ${
                item.active
                  ? "text-[var(--bta-blue)]"
                  : "text-[var(--bta-text)] hover:text-[var(--bta-blue)]"
              }`}
              href={item.href}
            >
              {item.label}
              {item.children ? (
                <svg
                  aria-hidden="true"
                  className="size-3"
                  fill="none"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="m3 4.5 3 3 3-3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : null}
            </Link>
            {item.active ? (
              <span
                aria-hidden="true"
                className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-[var(--bta-blue)]"
              />
            ) : null}
            {item.children ? (
              <div className="invisible absolute left-0 top-full z-30 w-64 translate-y-2 rounded-xl border border-[var(--bta-border)] bg-white p-2 opacity-0 shadow-[var(--bta-shadow)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        className="block rounded-lg p-2.5 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2"
                        href={child.href}
                      >
                        <span className="block text-xs font-bold text-[var(--bta-text)]">
                          {child.label}
                        </span>
                        <span className="mt-1 block text-[0.7rem] leading-4 text-[var(--bta-muted)]">
                          {child.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
