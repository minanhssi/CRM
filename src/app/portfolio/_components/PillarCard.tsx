import type { ReactNode } from "react";

export function PillarCard({
  n,
  label,
  title,
  bullets,
  icon,
  accent = "text-port-accent",
  bg = "bg-port-cream-light",
  iconBg = "bg-port-accent",
  iconColor = "text-white",
}: {
  n: string;
  label: string;
  title: string;
  bullets: string[];
  icon?: ReactNode;
  accent?: string;
  bg?: string;
  iconBg?: string;
  iconColor?: string;
}) {
  return (
    <div className={`h-full rounded-2xl p-9 ${bg}`}>
      <div className="flex items-start justify-between">
        <p className={`font-bold text-5xl ${accent}`}>{n}</p>
        {icon && (
          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
            {icon}
          </div>
        )}
      </div>
      <p className="mt-5 text-[11px] font-semibold tracking-[2px] text-port-muted">{label}</p>
      <h3 className="mt-3 text-xl font-semibold text-port-ink">{title}</h3>
      <ul className="mt-6 space-y-3 text-[14px] leading-[1.55] text-port-body">
        {bullets.map(b => (
          <li key={b} className="flex gap-2">
            <span className={accent}>→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
