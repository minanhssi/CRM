const TYPE_RAMP: { name: string; weight: string; size: string; lineHeight: string }[] = [
  { name: "Heading",    weight: "Medium", size: "20", lineHeight: "28" },
  { name: "Title",      weight: "Medium", size: "16", lineHeight: "24" },
  { name: "Body",       weight: "Normal", size: "14", lineHeight: "20" },
  { name: "Button",     weight: "Normal", size: "14", lineHeight: "20" },
  { name: "Small text", weight: "Normal", size: "12", lineHeight: "16" },
];

const NEUTRAL: { hex: string; label: string }[] = [
  { hex: "#111928", label: "Ink" },
  { hex: "#6B7280", label: "Gray" },
  { hex: "#FFFFFF", label: "Surface" },
];

const SEMANTIC: { hex: string; label: string }[] = [
  { hex: "#F05252", label: "Danger" },
  { hex: "#31C48D", label: "Success" },
  { hex: "#FACA15", label: "Warning" },
];

const GRADIENT_STOPS = ["#00DCDC", "#8C73FF", "#3366FF"];

export function DesignSystemSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-white p-8 md:p-10">
      <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">DESIGN SYSTEM</p>
      <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
        Six modules, one library.
      </h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-port-body">
        Built on <strong className="font-semibold text-port-ink">Roboto</strong>, five text roles,
        and three color families (primary, neutral, semantic) — the same tokens shipped every module.
      </p>

      {/* TYPOGRAPHY TABLE */}
      <div className="mt-8 rounded-xl border border-port-border bg-port-tint-blue/60 p-6">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-[11px] font-semibold tracking-[2px] text-port-blue">TYPOGRAPHY</p>
          <p className="text-[11px] font-semibold tracking-[1.5px] text-port-muted">ROBOTO</p>
        </div>
        <div className="mt-4 overflow-hidden rounded-lg border border-port-border bg-white">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-port-tint-gray text-[11px] font-semibold tracking-[1.5px] text-port-muted">
              <tr>
                <th className="px-4 py-3">FONT CATEGORY</th>
                <th className="px-4 py-3">FONT WEIGHT</th>
                <th className="px-4 py-3">FONT SIZE</th>
                <th className="px-4 py-3">LINE HEIGHT</th>
              </tr>
            </thead>
            <tbody>
              {TYPE_RAMP.map((row, i) => (
                <tr key={row.name} className={i > 0 ? "border-t border-port-border" : ""}>
                  <td className="px-4 py-3 font-semibold text-port-ink">{row.name}</td>
                  <td className="px-4 py-3 text-port-body">{row.weight}</td>
                  <td className="px-4 py-3 font-mono text-port-body">{row.size}</td>
                  <td className="px-4 py-3 font-mono text-port-body">{row.lineHeight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* COLORS */}
      <div className="mt-6 rounded-xl border border-port-border bg-port-tint-blue/60 p-6">
        <p className="text-[11px] font-semibold tracking-[2px] text-port-blue">COLORS</p>

        <div className="mt-5 space-y-4">
          {/* Primary */}
          <div className="grid grid-cols-[100px_1fr] items-center gap-4 rounded-lg bg-white p-4 md:grid-cols-[110px_1fr]">
            <p className="text-[11px] font-semibold tracking-[1.5px] text-port-muted">PRIMARY</p>
            <div className="flex flex-wrap gap-3">
              <Swatch hex="#3366FF" />
            </div>
          </div>

          {/* Neutral */}
          <div className="grid grid-cols-[100px_1fr] items-center gap-4 rounded-lg bg-white p-4 md:grid-cols-[110px_1fr]">
            <p className="text-[11px] font-semibold tracking-[1.5px] text-port-muted">NEUTRAL</p>
            <div className="flex flex-wrap gap-3">
              {NEUTRAL.map(c => <Swatch key={c.hex} hex={c.hex} />)}
            </div>
          </div>

          {/* Semantic */}
          <div className="grid grid-cols-[100px_1fr] items-center gap-4 rounded-lg bg-white p-4 md:grid-cols-[110px_1fr]">
            <p className="text-[11px] font-semibold tracking-[1.5px] text-port-muted">SEMANTIC</p>
            <div className="flex flex-wrap gap-3">
              {SEMANTIC.map(c => <Swatch key={c.hex} hex={c.hex} />)}
            </div>
          </div>

          {/* Gradient */}
          <div className="grid grid-cols-[100px_1fr] items-center gap-4 rounded-lg bg-white p-4 md:grid-cols-[110px_1fr]">
            <p className="text-[11px] font-semibold tracking-[1.5px] text-port-muted">GRADIENT</p>
            <div
              className="flex h-14 flex-1 items-end justify-between rounded-md px-3 pb-1.5"
              style={{
                backgroundImage: `linear-gradient(to right, ${GRADIENT_STOPS[0]}, ${GRADIENT_STOPS[1]}, ${GRADIENT_STOPS[2]})`,
              }}
            >
              {GRADIENT_STOPS.map(hex => (
                <span
                  key={hex}
                  className="rounded bg-black/70 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-white"
                >
                  {hex}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Swatch({ hex }: { hex: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-port-border">
      <span className="block h-10 w-24" style={{ backgroundColor: hex }} />
      <span className="block bg-port-ink px-2 py-1 text-center font-mono text-[10px] font-semibold text-white">
        {hex}
      </span>
    </div>
  );
}
