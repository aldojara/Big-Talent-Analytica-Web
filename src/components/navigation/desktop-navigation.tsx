"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useEffect, useId, useRef, useState } from "react";

import type { NavigationItem } from "@/config/navigation";
import { Icon } from "@/components/ui/icon";

export function DesktopNavigation({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal" className="hidden lg:block">
      <ul className="flex items-center gap-0.5 xl:gap-1" key={pathname}>
        {items.map((item) => (
          <DesktopNavigationItem item={item} key={item.href} pathname={pathname} />
        ))}
      </ul>
    </nav>
  );
}

function DesktopNavigationItem({
  item,
  pathname,
}: {
  item: NavigationItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const dropdownId = useId();
  const itemRef = useRef<HTMLLIElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverOpenedAtRef = useRef(0);
  const active = isNavigationItemActive(item, pathname);
  const isUseCasesMenu = item.href === "/casos-de-uso";

  useEffect(() => {
    if (!open) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    function closeOnOutsideClick(event: MouseEvent) {
      if (
        itemRef.current &&
        event.target instanceof Node &&
        !itemRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [open]);

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function hasFinePointer() {
    return (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
  }

  function openFromHover() {
    if (!item.children || !hasFinePointer()) {
      return;
    }

    clearCloseTimer();
    hoverOpenedAtRef.current = Date.now();
    setOpen(true);
  }

  function closeFromHover() {
    if (!item.children || !hasFinePointer()) {
      return;
    }

    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpen(false), 160);
  }

  function handleChevronKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => {
        panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
      });
    }
  }

  return (
    <li className="relative" ref={itemRef}>
      <div className="flex items-center">
        <Link
          aria-current={active ? "page" : undefined}
          className={`flex min-h-9 items-center whitespace-nowrap rounded-lg px-1.5 text-[0.72rem] font-semibold transition focus-visible:outline focus-visible:outline-2 xl:px-2.5 xl:text-xs ${
            active
              ? "text-[var(--bta-blue)]"
              : "text-[var(--bta-text)] hover:text-[var(--bta-blue)]"
          }`}
          href={item.href}
          onMouseEnter={openFromHover}
          onMouseLeave={closeFromHover}
        >
          {item.label}
        </Link>
        {item.children ? (
          <button
            aria-controls={dropdownId}
            aria-expanded={open}
            aria-label={`${open ? "Cerrar" : "Abrir"} submenú ${item.label}`}
            className={`-ml-1 flex min-h-9 items-center rounded-lg px-1 text-[0.72rem] transition hover:text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2 xl:text-xs ${
              active ? "text-[var(--bta-blue)]" : "text-[var(--bta-text)]"
            }`}
            onClick={() => {
              setOpen((current) => {
                if (current && Date.now() - hoverOpenedAtRef.current < 250) {
                  hoverOpenedAtRef.current = 0;
                  return true;
                }

                hoverOpenedAtRef.current = 0;
                return !current;
              });
            }}
            onKeyDown={handleChevronKeyDown}
            type="button"
          >
            <svg
              aria-hidden="true"
              className={`size-3 transition ${open ? "rotate-180" : ""}`}
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
          </button>
        ) : null}
      </div>
      {active ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-[var(--bta-blue)]"
        />
      ) : null}
      {item.children ? (
        <div
          className={`invisible absolute top-full z-40 translate-y-2 rounded-xl border border-[var(--bta-border)] bg-white opacity-0 shadow-[0_18px_48px_rgb(8_23_63/0.14)] transition ${
            isUseCasesMenu
              ? "left-1/2 w-[min(720px,calc(100vw-2rem))] -translate-x-1/2 p-3"
              : "right-0 w-64 p-2"
          } ${
            open ? "visible translate-y-0 opacity-100" : ""
          }`}
          id={dropdownId}
          onMouseEnter={openFromHover}
          onMouseLeave={closeFromHover}
          ref={panelRef}
        >
          {isUseCasesMenu ? (
            <UseCasesMegaMenu
              items={item.children}
              onNavigate={() => setOpen(false)}
              pathname={pathname}
            />
          ) : (
            <CompactDropdown
              items={item.children}
              onNavigate={() => setOpen(false)}
              pathname={pathname}
            />
          )}
        </div>
      ) : null}
    </li>
  );
}

function UseCasesMegaMenu({
  items,
  pathname,
  onNavigate,
}: {
  items: NonNullable<NavigationItem["children"]>;
  pathname: string;
  onNavigate: () => void;
}) {
  const leftItems = items.slice(0, 4);
  const rightItems = items.slice(4, 8);

  return (
    <div className="max-h-[min(72vh,30rem)] overflow-y-auto">
      <div className="grid gap-2 md:grid-cols-2">
        <div className="grid gap-2">
          {leftItems.map((child) => (
            <MegaMenuLink
              child={child}
              key={child.href}
              onNavigate={onNavigate}
              pathname={pathname}
            />
          ))}
        </div>
        <div className="grid gap-2">
          {rightItems.map((child) => (
            <MegaMenuLink
              child={child}
              key={child.href}
              onNavigate={onNavigate}
              pathname={pathname}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MegaMenuLink({
  child,
  pathname,
  onNavigate,
  featured = false,
}: {
  child: NonNullable<NavigationItem["children"]>[number];
  pathname: string;
  onNavigate: () => void;
  featured?: boolean;
}) {
  const active = isChildActive(child.href, pathname);

  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={`flex min-h-14 items-center gap-3 rounded-lg border p-3 transition focus-visible:outline focus-visible:outline-2 ${
        active
          ? "border-blue-200 bg-blue-50 text-[var(--bta-blue)]"
          : "border-transparent text-[var(--bta-text)] hover:border-blue-100 hover:bg-blue-50/70"
      } ${featured ? "bg-[var(--bta-blue-deeper)] text-white hover:bg-[var(--bta-blue-dark)]" : ""}`}
      href={child.href}
      onClick={onNavigate}
    >
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${
          featured
            ? "bg-white/10 text-[var(--bta-blue-bright)]"
            : "bg-blue-50 text-[var(--bta-blue)]"
        }`}
      >
        <Icon className="size-5" name={child.icon ?? "arrow-right"} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black leading-tight">
          {child.label}
        </span>
        <span
          className={`mt-0.5 block text-[0.72rem] leading-4 ${
            featured ? "text-blue-100" : "text-[var(--bta-muted)]"
          }`}
        >
          {child.description}
        </span>
      </span>
    </Link>
  );
}

function CompactDropdown({
  items,
  pathname,
  onNavigate,
}: {
  items: NonNullable<NavigationItem["children"]>;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <ul className="space-y-1">
      {items.map((child) => {
        const childActive = isChildActive(child.href, pathname);

        return (
          <li key={child.href}>
            <Link
              aria-current={childActive ? "page" : undefined}
              className={`block rounded-lg p-2.5 transition focus-visible:outline focus-visible:outline-2 ${
                childActive
                  ? "bg-blue-50 text-[var(--bta-blue)]"
                  : "hover:bg-blue-50"
              }`}
              href={child.href}
              onClick={onNavigate}
            >
              <span className="block text-xs font-bold">{child.label}</span>
              <span className="mt-1 block text-[0.7rem] leading-4 text-[var(--bta-muted)]">
                {child.description}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
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

function isChildActive(href: string, pathname: string) {
  if (href === "/casos-de-uso") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
