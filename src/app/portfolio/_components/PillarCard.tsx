import type { ReactNode } from "react";

export function PillarCard({
  n,
  label,
  title,
  bullets,
  icon,
  illustration,
  accent = "text-port-accent",
  bg = "bg-white",
  iconBg = "bg-port-accent",
  iconColor = "text-white",
}: {
  n: string;
  label: string;
  title: string;
  bullets: string[];
  icon?: ReactNode;
  illustration?: ReactNode;
  accent?: string;
  bg?: string;
  iconBg?: string;
  iconColor?: string;
}) {
  return (
    <div className={`h-full rounded-2xl border border-port-border p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)] ${bg}`}>
      <div className="flex items-start justify-between">
        <p className={`font-bold text-5xl ${accent}`}>{n}</p>
        {illustration ? (
          <div className="shrink-0">{illustration}</div>
        ) : (
          icon && (
            <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
              {icon}
            </div>
          )
        )}
      </div>
      <p className="mt-5 text-[11px] font-semibold tracking-[2px] text-port-muted">{label}</p>
      <h3 className="mt-2 text-xl font-semibold text-port-ink">{title}</h3>
      <ul className="mt-5 space-y-2.5 text-[14px] leading-[1.5] text-port-body">
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
