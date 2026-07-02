const TYPE_RAMP: { name: string; sample: string; size: string; className: string }[] = [
  { name: "Display",  sample: "Aa",     size: "48 / 60",  className: "font-serif text-5xl leading-none" },
  { name: "Heading",  sample: "Header", size: "24 / 32",  className: "font-serif text-2xl leading-tight" },
  { name: "Body",     sample: "Body copy", size: "14 / 22", className: "text-sm leading-[1.55]" },
  { name: "Caption",  sample: "META · LABEL", size: "11 / 16",  className: "text-[11px] font-semibold tracking-[1.5px]" },
];

const COLORS: { name: string; hex: string; use: string }[] = [
  { name: "Primary",    hex: "#2D39CF", use: "Actions, nav" },
  { name: "Accent",     hex: "#F37B23", use: "Alerts, badges" },
  { name: "Ink",        hex: "#151515", use: "Body, headings" },
  { name: "Surface",    hex: "#F1F3FF", use: "Section tints" },
  { name: "Success",    hex: "#109C84", use: "Confirmed states" },
];

export function DesignSystemSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-white p-8 md:p-10">
      <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">DESIGN SYSTEM</p>
      <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
        Six modules, one library.
      </h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-port-body">
        Shared <strong className="font-semibold text-port-ink">typography ramp</strong>, semantic
        color tokens, and a small component set — so every module ships in the same voice.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* TYPOGRAPHY */}
        <div className="rounded-xl border border-port-border bg-port-tint-blue/60 p-5">
          <p className="text-[11px] font-semibold tracking-[2px] text-port-blue">TYPOGRAPHY</p>
          <ul className="mt-4 space-y-3">
            {TYPE_RAMP.map(t => (
              <li key={t.name} className="flex items-baseline justify-between gap-4">
                <span className={`${t.className} text-port-ink`}>{t.sample}</span>
                <span className="shrink-0 text-[11px] text-port-muted">{t.name} · {t.size}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* COLOR TOKENS */}
        <div className="rounded-xl border border-port-border bg-port-tint-blue/60 p-5">
          <p className="text-[11px] font-semibold tracking-[2px] text-port-blue">COLOR TOKENS</p>
          <ul className="mt-4 space-y-3">
            {COLORS.map(c => (
              <li key={c.name} className="flex items-center gap-3">
                <span
                  className="inline-block h-8 w-8 shrink-0 rounded-md border border-port-border"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />
                <span className="flex-1">
                  <span className="text-[13px] font-semibold text-port-ink">{c.name}</span>
                  <span className="ml-2 text-[11px] font-mono text-port-muted">{c.hex}</span>
                </span>
                <span className="shrink-0 text-[11px] text-port-muted">{c.use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COMPONENT SAMPLES */}
      <div className="mt-6 rounded-xl border border-port-border bg-port-tint-blue/60 p-5">
        <p className="text-[11px] font-semibold tracking-[2px] text-port-blue">COMPONENTS</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="rounded-lg bg-port-blue px-4 py-2 text-[13px] font-semibold text-white">Primary action</button>
          <button className="rounded-lg border border-port-blue bg-white px-4 py-2 text-[13px] font-semibold text-port-blue">Secondary</button>
          <button className="rounded-lg border border-port-border bg-white px-4 py-2 text-[13px] font-semibold text-port-body">Tertiary</button>
          <span className="rounded-full bg-[#109C84]/10 px-2.5 py-1 text-[11px] font-semibold tracking-[1.2px] text-[#109C84]">APPROVED</span>
          <span className="rounded-full bg-port-accent/10 px-2.5 py-1 text-[11px] font-semibold tracking-[1.2px] text-port-accent">PENDING</span>
          <span className="rounded-full bg-[#D8433D]/10 px-2.5 py-1 text-[11px] font-semibold tracking-[1.2px] text-[#B7332E]">REJECTED</span>
        </div>
      </div>
    </div>
  );
}
