"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";

import type { NavigationItem } from "@/config/navigation";
import { Icon } from "@/components/ui/icon";

type MobileNavigationProps = {
  items: NavigationItem[];
  cta: {
    label: string;
    href: string;
  };
};

export function MobileNavigation({ items, cta }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const [expandedHref, setExpandedHref] = useState<string | null>(null);
  const menuId = useId();
  const pathname = usePathname();

  const closeMenu = () => {
    setOpen(false);
    setExpandedHref(null);
  };

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
            {items.map((item) => {
              const active = isNavigationItemActive(item, pathname);

              const expanded = expandedHref === item.href;
              const subMenuId = `${menuId}-${item.href.replace(/\W+/g, "-")}`;

              return (
                <li key={item.href}>
                  {item.children ? (
                    <>
                      <div
                        className={`flex min-h-12 items-stretch rounded-xl ${
                          active
                            ? "bg-blue-50 text-[var(--bta-blue)]"
                            : "text-[var(--bta-text)] hover:bg-blue-50"
                        }`}
                      >
                        <Link
                          aria-current={active ? "page" : undefined}
                          className="flex flex-1 items-center rounded-l-xl px-4 py-3 text-base font-semibold focus-visible:outline focus-visible:outline-2"
                          href={item.href}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                        <button
                          aria-controls={subMenuId}
                          aria-expanded={expanded}
                          aria-label={`${expanded ? "Cerrar" : "Abrir"} submenú ${item.label}`}
                          className="flex min-w-12 items-center justify-center rounded-r-xl focus-visible:outline focus-visible:outline-2"
                          onClick={() =>
                            setExpandedHref((current) =>
                              current === item.href ? null : item.href,
                            )
                          }
                          type="button"
                        >
                          <Icon
                            className={`size-4 transition ${expanded ? "rotate-90" : ""}`}
                            name="arrow-right"
                          />
                        </button>
                      </div>
                      <ul
                        className={`ml-4 overflow-hidden border-l border-blue-100 pl-3 transition ${
                          expanded ? "max-h-[34rem] py-1" : "max-h-0"
                        }`}
                        id={subMenuId}
                      >
                        {item.children.map((child) => {
                          const childActive = isChildActive(child.href, pathname);

                          return (
                            <li key={child.href}>
                              <Link
                                aria-current={childActive ? "page" : undefined}
                                className={`block min-h-10 rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 ${
                                  childActive
                                    ? "bg-blue-50 text-[var(--bta-blue)]"
                                    : "text-[var(--bta-muted)] hover:bg-blue-50 hover:text-[var(--bta-blue)]"
                                }`}
                                href={child.href}
                                onClick={closeMenu}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-xl px-4 py-3 text-base font-semibold focus-visible:outline focus-visible:outline-2 ${
                        active
                          ? "bg-blue-50 text-[var(--bta-blue)]"
                          : "text-[var(--bta-text)] hover:bg-blue-50"
                      }`}
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
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

function isChildActive(href: string, pathname: string) {
  if (href === "/casos-de-uso") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavigationItemActive(item: NavigationItem, pathname: string) {
  if (item.href === "/") {
    return pathname === "/";
  }

  return (
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`) ||
    Boolean(item.children?.some((child) => pathname.startsWith(child.href)))
  );
}
