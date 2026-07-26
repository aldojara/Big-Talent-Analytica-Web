"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { NavigationItem } from "@/config/navigation";

type MobileNavigationProps = {
  items: NavigationItem[];
  cta: {
    label: string;
    href: string;
  };
};

export function MobileNavigation({ items, cta }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const closeMenu = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? "Cerrar menú principal" : "Abrir menú principal"}
        className="inline-flex size-11 items-center justify-center rounded-xl border border-[var(--bta-border)] text-[var(--bta-text)] transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        <span
          aria-hidden="true"
          className="relative flex h-4 w-5 flex-col justify-between"
        >
          <span
            className={`h-0.5 rounded-full bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 rounded-full bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        className={`absolute inset-x-0 top-full z-40 border-b border-[var(--bta-border)] bg-white shadow-[var(--bta-shadow)] transition ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
        id={menuId}
      >
        <nav aria-label="Navegación móvil" className="mx-auto max-w-7xl px-4 py-5">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={item.active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold focus-visible:outline focus-visible:outline-2 ${
                    item.active
                      ? "bg-blue-50 text-[var(--bta-blue)]"
                      : "text-[var(--bta-text)] hover:bg-blue-50"
                  }`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="ml-4 border-l border-blue-100 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          className="block rounded-lg px-4 py-2 text-sm text-[var(--bta-muted)] hover:bg-blue-50 hover:text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2"
                          href={child.href}
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link
            className="mt-5 flex min-h-12 items-center justify-center rounded-xl bg-[var(--bta-blue)] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgb(0_87_255/0.24)] focus-visible:outline focus-visible:outline-2"
            href={cta.href}
            onClick={closeMenu}
          >
            {cta.label}
          </Link>
        </nav>
      </div>
    </div>
  );
}
