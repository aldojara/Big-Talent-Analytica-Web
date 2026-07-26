import type { IconName } from "@/types/content";

type IconProps = {
  name: IconName;
  className?: string;
  title?: string;
};

export function Icon({ name, className = "size-6", title }: IconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      role={title ? "img" : undefined}
      viewBox="0 0 24 24"
    >
      {name === "talent" && (
        <>
          <circle cx="8" cy="8" r="3" {...common} />
          <circle cx="16" cy="8" r="3" {...common} />
          <path d="M3.5 19a4.5 4.5 0 0 1 9 0" {...common} />
          <path d="M11.5 19a4.5 4.5 0 0 1 9 0" {...common} />
        </>
      )}
      {name === "briefcase" && (
        <>
          <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" {...common} />
          <rect x="4" y="7" width="16" height="12" rx="2" {...common} />
          <path d="M4 12h16M10 12v2h4v-2" {...common} />
        </>
      )}
      {name === "ai" && (
        <>
          <rect x="6" y="6" width="12" height="12" rx="2" {...common} />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" {...common} />
          <path d="M9.5 15V9l5 6V9" {...common} />
        </>
      )}
      {name === "domain" && (
        <>
          <path d="M4 20V9l5-4 5 4v11" {...common} />
          <path d="M14 20V8l6 3v9M7 20v-4h4v4M17 20v-3" {...common} />
        </>
      )}
      {name === "community" && (
        <>
          <circle cx="12" cy="8" r="3.2" {...common} />
          <path d="M5 20a7 7 0 0 1 14 0" {...common} />
          <path d="M4 12.5a3 3 0 0 1 3-3M20 12.5a3 3 0 0 0-3-3" {...common} />
        </>
      )}
      {name === "analytics" && (
        <>
          <path d="M4 19V5M4 19h16" {...common} />
          <path d="M8 16v-5M12 16V8M16 16v-7" {...common} />
        </>
      )}
      {name === "chart" && (
        <>
          <path d="M4 18 9 9l4 5 6-9" {...common} />
          <path d="M4 20h16" {...common} />
        </>
      )}
      {name === "guide" && (
        <>
          <path d="M6 4h9l3 3v13H6z" {...common} />
          <path d="M15 4v4h4M9 12h6M9 16h5" {...common} />
        </>
      )}
      {name === "course" && (
        <>
          <path d="m3 8.5 9-4 9 4-9 4z" {...common} />
          <path d="M6 11v4.5c1.8 1.7 10.2 1.7 12 0V11" {...common} />
        </>
      )}
      {name === "video" && (
        <>
          <rect x="4" y="6" width="12" height="12" rx="2" {...common} />
          <path d="m16 10 4-2.5v9L16 14" {...common} />
        </>
      )}
      {name === "play" && <path d="M8 5v14l11-7z" {...common} />}
      {name === "megaphone" && (
        <>
          <path d="M4 14h3l9 4V6l-9 4H4z" {...common} />
          <path d="M7 14v4M18 9l2-1M18 15l2 1" {...common} />
        </>
      )}
      {name === "sales" && (
        <>
          <path d="M4 17 10 11l4 4 6-8" {...common} />
          <path d="M15 7h5v5" {...common} />
        </>
      )}
      {name === "process" && (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1.5" {...common} />
          <rect x="14" y="14" width="6" height="6" rx="1.5" {...common} />
          <path d="M10 7h4a3 3 0 0 1 3 3v4M14 17h-4a3 3 0 0 1-3-3v-4" {...common} />
        </>
      )}
      {name === "support" && (
        <>
          <path d="M5 13v-1a7 7 0 0 1 14 0v1" {...common} />
          <path d="M5 13h3v5H5zM16 13h3v5h-3zM16 18c0 1.5-1.5 2-4 2" {...common} />
        </>
      )}
      {name === "automation" && (
        <>
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" {...common} />
        </>
      )}
      {name === "strategy" && (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <circle cx="12" cy="12" r="3" {...common} />
          <path d="m15 9 4-4M19 5v4M19 5h-4" {...common} />
        </>
      )}
      {name === "learning" && (
        <>
          <path d="M5 5h10a4 4 0 0 1 4 4v10H9a4 4 0 0 1-4-4z" {...common} />
          <path d="M9 9h6M9 13h5" {...common} />
        </>
      )}
      {name === "mentor" && (
        <>
          <circle cx="12" cy="8" r="3" {...common} />
          <path d="M6 20a6 6 0 0 1 12 0M18 5l2-2M6 5 4 3" {...common} />
        </>
      )}
      {name === "consulting" && (
        <>
          <rect x="4" y="5" width="16" height="12" rx="2" {...common} />
          <path d="M8 21h8M10 17v4M14 17v4M8 9h8M8 13h5" {...common} />
        </>
      )}
      {name === "service" && (
        <>
          <path d="M12 3v4M5 8l3 2M19 8l-3 2M6 21h12" {...common} />
          <path d="M8 13a4 4 0 0 1 8 0v5H8z" {...common} />
        </>
      )}
      {name === "calendar" && (
        <>
          <rect x="4" y="5" width="16" height="15" rx="2" {...common} />
          <path d="M8 3v4M16 3v4M4 10h16M8 14h3M13 14h3M8 17h3" {...common} />
        </>
      )}
      {name === "mail" && (
        <>
          <rect x="4" y="6" width="16" height="12" rx="2" {...common} />
          <path d="m4 8 8 6 8-6" {...common} />
        </>
      )}
      {name === "spark" && (
        <path d="M12 2 9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" {...common} />
      )}
    </svg>
  );
}
