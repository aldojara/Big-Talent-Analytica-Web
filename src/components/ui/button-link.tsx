import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--bta-blue)] text-white shadow-[0_14px_32px_rgb(0_87_255/0.24)] hover:bg-[var(--bta-blue-bright)]",
  secondary:
    "border border-white/35 bg-white/5 text-white hover:border-white/65 hover:bg-white/10",
  ghost:
    "text-white hover:bg-white/10",
  light:
    "bg-white text-[var(--bta-blue)] shadow-[0_14px_32px_rgb(8_23_63/0.12)] hover:bg-blue-50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition ${variants[variant]} focus-visible:outline focus-visible:outline-2 sm:text-sm ${className}`}
      href={href}
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </Link>
  );
}
