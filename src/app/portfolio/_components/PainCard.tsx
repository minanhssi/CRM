export function PainCard({
  who,
  label,
  body,
  accent = "text-port-accent",
}: {
  who: string;
  label: string;
  body: string;
  accent?: string;
}) {
  return (
    <div className="h-full rounded-2xl border border-port-border bg-white p-8">
      <p className={`text-[11px] font-semibold tracking-[2px] ${accent}`}>{label}</p>
      <h3 className="mt-4 text-xl font-semibold text-port-ink">{who}</h3>
      <p className="mt-3 text-[15px] leading-[1.55] text-port-body">{body}</p>
    </div>
  );
}
