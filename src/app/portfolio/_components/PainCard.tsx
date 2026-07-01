import type { ReactNode } from "react";

export function PainCard({
  who,
  label,
  body,
  icon,
  illustration,
  accent = "text-port-accent",
  iconBg = "bg-port-accent/10",
  iconColor = "text-port-accent",
}: {
  who: string;
  label: string;
  body: string;
  icon?: ReactNode;
  illustration?: ReactNode;
  accent?: string;
  iconBg?: string;
  iconColor?: string;
}) {
  return (
    <div className="h-full rounded-2xl border border-port-border bg-white p-8">
      {illustration ? (
        <div className="mb-6">{illustration}</div>
      ) : (
        icon && (
          <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
            {icon}
          </div>
        )
      )}
      <p className={`text-[11px] font-semibold tracking-[2px] ${accent}`}>{label}</p>
      <h3 className="mt-3 text-xl font-semibold text-port-ink">{who}</h3>
      <p className="mt-3 text-[14px] leading-[1.55] text-port-body">{body}</p>
    </div>
  );
}
