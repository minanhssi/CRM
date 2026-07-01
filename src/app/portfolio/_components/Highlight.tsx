import type { ReactNode } from "react";

type Variant = "accent" | "blue" | "green" | "yellow" | "muted" | "strong";

const VARIANTS: Record<Variant, string> = {
  accent: "bg-port-accent/10 text-port-ink font-semibold decoration-port-accent/70",
  blue: "bg-port-blue/10 text-port-ink font-semibold decoration-port-blue/70",
  green: "bg-[#109C84]/10 text-port-ink font-semibold decoration-[#109C84]/70",
  yellow: "bg-port-yellow/25 text-port-ink font-semibold decoration-port-yellow/70",
  muted: "bg-port-ink/5 text-port-ink font-medium",
  strong: "font-bold text-port-ink underline decoration-port-accent decoration-2 underline-offset-4",
};

export function Highlight({
  children,
  variant = "accent",
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`rounded px-[3px] py-[1px] ${VARIANTS[variant]}`}
      style={{
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </span>
  );
}
