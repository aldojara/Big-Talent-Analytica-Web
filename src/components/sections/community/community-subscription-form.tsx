"use client";

import { useId, useState } from "react";

import { Icon } from "@/components/ui/icon";

type CommunitySubscriptionFormProps = {
  buttonLabel: string;
  placeholder?: string;
  tone?: "light" | "dark";
};

export function CommunitySubscriptionForm({
  buttonLabel,
  placeholder = "Tu correo electronico",
  tone = "light",
}: CommunitySubscriptionFormProps) {
  const [message, setMessage] = useState("Sin spam. Solo contenido de valor y noticias relevantes.");
  const inputId = useId();
  const isDark = tone === "dark";

  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const email = String(data.get("email") ?? "").trim();

        if (!email) {
          setMessage("Ingresa un correo para continuar.");
          return;
        }

        if (!form.checkValidity()) {
          setMessage("Revisa el formato del correo antes de continuar.");
          return;
        }

        setMessage("Gracias. Dejamos tu correo listo para conectarlo con la integracion final.");
        form.reset();
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={inputId}>
          Correo electronico
        </label>
        <input
          className={`min-h-12 min-w-0 flex-1 rounded-lg border px-4 text-sm outline-offset-2 transition focus:border-[var(--bta-blue)] focus:outline-2 ${
            isDark
              ? "border-white/25 bg-white text-[var(--bta-text)] placeholder:text-slate-500"
              : "border-[var(--bta-border)] bg-white text-[var(--bta-text)] placeholder:text-slate-500"
          }`}
          id={inputId}
          name="email"
          placeholder={placeholder}
          required
          type="email"
        />
        <button
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--bta-blue)] px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgb(0_87_255/0.24)] transition hover:bg-[var(--bta-blue-bright)] focus-visible:outline focus-visible:outline-2"
          type="submit"
        >
          {buttonLabel}
          <Icon className="size-4" name="arrow-right" />
        </button>
      </div>
      <p
        aria-live="polite"
        className={`mt-3 flex items-start gap-2 text-[0.72rem] leading-4 ${
          isDark ? "text-blue-100" : "text-[var(--bta-muted)]"
        }`}
      >
        <Icon className="mt-0.5 size-3.5 shrink-0" name="shield" />
        {message}
      </p>
    </form>
  );
}
