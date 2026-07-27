import type { TalentAccent } from "@/types/talent";

export const accentStyles: Record<
  TalentAccent,
  {
    icon: string;
    soft: string;
    border: string;
    text: string;
    gradient: string;
  }
> = {
  blue: {
    icon: "bg-[var(--bta-blue)] text-white shadow-[0_12px_26px_rgb(0_87_255/0.24)]",
    soft: "bg-blue-50",
    border: "border-blue-100",
    text: "text-[var(--bta-blue)]",
    gradient: "from-blue-700 to-blue-500",
  },
  violet: {
    icon: "bg-violet-600 text-white shadow-[0_12px_26px_rgb(124_58_237/0.22)]",
    soft: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-700",
    gradient: "from-violet-700 to-blue-600",
  },
  green: {
    icon: "bg-emerald-600 text-white shadow-[0_12px_26px_rgb(5_150_105/0.2)]",
    soft: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    gradient: "from-emerald-700 to-teal-500",
  },
  orange: {
    icon: "bg-orange-600 text-white shadow-[0_12px_26px_rgb(234_88_12/0.2)]",
    soft: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
    gradient: "from-orange-700 to-amber-500",
  },
  cyan: {
    icon: "bg-cyan-600 text-white shadow-[0_12px_26px_rgb(8_145_178/0.2)]",
    soft: "bg-cyan-50",
    border: "border-cyan-100",
    text: "text-cyan-700",
    gradient: "from-cyan-700 to-blue-500",
  },
  rose: {
    icon: "bg-rose-600 text-white shadow-[0_12px_26px_rgb(225_29_72/0.18)]",
    soft: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-700",
    gradient: "from-rose-600 to-red-500",
  },
};
