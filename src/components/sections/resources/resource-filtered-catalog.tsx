"use client";

import { useMemo, useState } from "react";

import { Icon } from "@/components/ui/icon";
import { resourceThemes } from "@/data/resources";
import type { ResourceCardItem, ResourceFilterGroup } from "@/types/resources";

type ResourceFilteredCatalogProps = {
  items: ResourceCardItem[];
  filters: ResourceFilterGroup[];
  title: string;
};

export function ResourceFilteredCatalog({
  items,
  filters,
  title,
}: ResourceFilteredCatalogProps) {
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const filteredItems = useMemo(() => {
    const activeValues = Object.values(selected).flat();

    if (activeValues.length === 0) {
      return items;
    }

    return items.filter((item) =>
      activeValues.every((value) => item.tags?.includes(value) || item.type === value),
    );
  }, [items, selected]);

  function toggle(groupKey: string, value: string) {
    setSelected((current) => {
      const currentValues = current[groupKey] ?? [];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return { ...current, [groupKey]: nextValues };
    });
  }

  function clearFilters() {
    setSelected({});
  }

  return (
    <section className="bg-white py-6 sm:py-8" id="catalogo">
      <div className="mx-auto grid w-full max-w-[var(--bta-container)] gap-6 px-4 sm:px-6 lg:grid-cols-[15rem_1fr] lg:px-8">
        <aside className="rounded-xl border border-[var(--bta-border)] bg-white p-4 shadow-[var(--bta-shadow)] lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-black text-[var(--bta-text)]">Filtros</h2>
            <button
              className="text-[0.7rem] font-bold text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2"
              onClick={clearFilters}
              type="button"
            >
              Limpiar filtros
            </button>
          </div>
          <div className="mt-4 grid gap-5">
            {filters.map((group) => (
              <fieldset key={group.key}>
                <legend className="text-xs font-black text-[var(--bta-text)]">
                  {group.label}
                </legend>
                <div className="mt-2 grid gap-2">
                  {group.options.map((option) => {
                    const id = `${group.key}-${option.replace(/\W+/g, "-")}`;
                    const checked = selected[group.key]?.includes(option) ?? false;

                    return (
                      <label
                        className="flex min-h-6 cursor-pointer items-start gap-2 text-[0.72rem] leading-4 text-[var(--bta-muted)]"
                        htmlFor={id}
                        key={option}
                      >
                        <input
                          checked={checked}
                          className="mt-0.5 size-3.5 rounded border-[var(--bta-border)]"
                          id={id}
                          onChange={() => toggle(group.key, option)}
                          type="checkbox"
                        />
                        {option}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </aside>
        <div>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-black text-[var(--bta-text)]">{title}</h2>
              <p className="mt-1 text-xs text-[var(--bta-muted)]">
                Mostrando {filteredItems.length} de {items.length} recursos
              </p>
            </div>
            <label className="flex items-center gap-2 text-xs font-semibold text-[var(--bta-muted)]">
              Ordenar por:
              <select className="min-h-10 rounded-lg border border-[var(--bta-border)] bg-white px-3 text-[var(--bta-text)] focus-visible:outline focus-visible:outline-2">
                <option>Más recientes</option>
                <option>Más relevantes</option>
              </select>
            </label>
          </div>
          {filteredItems.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <ResourceCatalogCard item={item} key={item.title} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[var(--bta-border)] bg-[var(--bta-soft)] p-8 text-center text-sm font-semibold text-[var(--bta-muted)]">
              No hay recursos con esa combinación de filtros.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ResourceCatalogCard({ item }: { item: ResourceCardItem }) {
  const theme = resourceThemes[item.theme];

  return (
    <article className="overflow-hidden rounded-xl border border-[var(--bta-border)] bg-white shadow-[var(--bta-shadow)]">
      <div className="relative min-h-32 overflow-hidden bg-[var(--bta-blue-deeper)] p-4 text-white">
        <MiniVisual accent={theme.accent} icon={item.icon} />
        <span
          className="relative inline-flex rounded-full px-2.5 py-1 text-[0.62rem] font-black"
          style={{ backgroundColor: theme.soft, color: theme.accent }}
        >
          {item.type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-black leading-5 text-[var(--bta-text)]">{item.title}</h3>
        <p className="mt-2 min-h-12 text-xs leading-5 text-[var(--bta-muted)]">{item.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-[0.7rem] font-semibold text-[var(--bta-muted)]">
          {item.meta.map((meta) => (
            <span className="inline-flex items-center gap-1" key={meta}>
              <Icon className="size-3" name="calendar" />
              {meta}
            </span>
          ))}
        </div>
        <a
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-[var(--bta-blue)] focus-visible:outline focus-visible:outline-2"
          href={item.href}
        >
          {item.ctaLabel}
          <Icon className="size-3" name="arrow-right" />
        </a>
      </div>
    </article>
  );
}

function MiniVisual({ accent, icon }: { accent: string; icon: ResourceCardItem["icon"] }) {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(255_255_255/0.09)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.09)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div
        className="absolute right-5 top-5 grid size-20 place-items-center rounded-2xl border border-white/15 bg-white/5"
        style={{ color: accent }}
      >
        <Icon className="size-10" name={icon} />
      </div>
      <div
        className="absolute -bottom-10 left-8 size-32 rounded-full blur-2xl"
        style={{ backgroundColor: `${accent}66` }}
      />
    </div>
  );
}
