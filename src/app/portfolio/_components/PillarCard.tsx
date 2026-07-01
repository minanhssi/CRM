export function PillarCard({
  n,
  label,
  title,
  bullets,
  accent = "text-port-accent",
  bg = "bg-port-cream-light",
}: {
  n: string;
  label: string;
  title: string;
  bullets: string[];
  accent?: string;
  bg?: string;
}) {
  return (
    <div className={`h-full rounded-2xl p-9 ${bg}`}>
      <p className={`font-bold text-5xl ${accent}`}>{n}</p>
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
