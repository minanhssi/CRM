"use client";

import type { ReactNode } from "react";

export type BadgeTone =
  | "neutral"
  | "blue"
  | "green"
  | "orange"
  | "gold"
  | "red"
  | "purple";

const TONE: Record<BadgeTone, string> = {
  neutral: "bg-gray-3 text-gray-8",
  blue: "bg-blue-1 text-blue-8",
  green: "bg-green-1 text-green-7",
  orange: "bg-orange-1 text-orange-7",
  gold: "bg-gold-1 text-gold-7",
  red: "bg-red-1 text-red-6",
  purple: "bg-purple-1 text-purple-6",
};

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
  /** Render a small leading status dot in the tone color. */
  dot?: boolean;
}

/** Pill badge / tag — programs, branches, statuses, counts. */
export function Badge({ tone = "neutral", dot = false, children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-medium leading-tight whitespace-nowrap ${TONE[tone]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${DOT[tone]}`} />}
      {children}
    </span>
  );
}

const DOT: Record<BadgeTone, string> = {
  neutral: "bg-gray-6",
  blue: "bg-blue-6",
  green: "bg-green-6",
  orange: "bg-orange-5",
  gold: "bg-gold-5",
  red: "bg-red-5",
  purple: "bg-purple-5",
};

// High-contrast count chips: darkest hue text on a clearly visible tint.
const COUNT_TONE: Record<BadgeTone, string> = {
  neutral: "bg-gray-4 text-gray-10",
  blue: "bg-blue-2 text-blue-9",
  green: "bg-green-2 text-green-7",
  orange: "bg-orange-2 text-orange-7",
  gold: "bg-gold-2 text-gold-7",
  red: "bg-red-2 text-red-7",
  purple: "bg-purple-2 text-purple-6",
};

/** Small numeric count chip used in column headers and tabs. */
export function CountBadge({ children, tone = "neutral" }: { children: ReactNode; tone?: BadgeTone }) {
  return (
    <span
      className={`inline-flex items-center justify-center h-[22px] min-w-[26px] px-2 rounded-full text-[11px] font-bold ${COUNT_TONE[tone]}`}
    >
      {children}
    </span>
  );
}
