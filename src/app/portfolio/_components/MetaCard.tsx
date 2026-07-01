export function MetaCard({
  items,
  bg = "bg-port-cream-light",
  labelColor = "text-port-blue",
}: {
  items: { label: string; value: string }[];
  bg?: string;
  labelColor?: string;
}) {
  return (
    <div className={`rounded-2xl ${bg} p-8 space-y-7`}>
      {items.map(m => (
        <div key={m.label}>
          <p className={`text-[11px] font-semibold tracking-[1.8px] ${labelColor}`}>{m.label}</p>
          <p className="mt-1.5 text-[15px] leading-[1.45] font-medium text-port-ink">{m.value}</p>
        </div>
      ))}
    </div>
  );
}
