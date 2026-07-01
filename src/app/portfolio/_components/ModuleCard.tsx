import type { ReactNode } from "react";

export function ModuleCard({
  n,
  title,
  body,
  icon,
  illustration,
  iconBg = "bg-port-blue/10",
  iconColor = "text-port-blue",
}: {
  n: string;
  title: string;
  body: string;
  icon?: ReactNode;
  illustration?: ReactNode;
  iconBg?: string;
  iconColor?: string;
}) {
  return (
    <div className="h-full rounded-2xl border border-port-border bg-white p-7">
      <div className="flex items-start justify-between">
        <p className="text-[13px] font-medium tracking-[2px] text-port-muted">{n}</p>
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
      <h3 className="mt-4 text-lg font-semibold text-port-ink">{title}</h3>
      <p className="mt-2.5 text-[14px] leading-[1.5] text-port-body">{body}</p>
    </div>
  );
}
