type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[var(--bta-blue)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-full break-words text-xl font-bold tracking-tight text-[var(--bta-text)] sm:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-[var(--bta-muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
