import type { ReactNode } from "react";

const PATTERNS: {
  label: string;
  title: string;
  problem: string;
  solution: string;
  visual: ReactNode;
}[] = [
  {
    label: "APPROVAL",
    title: "Multi-step approval trail",
    problem: "6 modules × 3 roles = 18 possible approver states.",
    solution: "One horizontal stepper with role + timestamp on each stop.",
    visual: (
      <div className="flex items-center gap-1.5">
        {[
          { color: "bg-[#109C84]", ring: "ring-[#109C84]/30" },
          { color: "bg-[#109C84]", ring: "ring-[#109C84]/30" },
          { color: "bg-port-accent", ring: "ring-port-accent/30" },
          { color: "bg-port-border", ring: "ring-port-border" },
          { color: "bg-port-border", ring: "ring-port-border" },
        ].map((s, i, arr) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className={`inline-block h-3 w-3 rounded-full ${s.color} ring-4 ${s.ring}`} />
            {i < arr.length - 1 && <span className="inline-block h-px w-6 bg-port-border" />}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "AUDIT",
    title: "In-place reason display",
    problem: "Ops team paged 'why is this pending?' 12× a day.",
    solution: "State + reason + who + when render inline. No support ticket.",
    visual: (
      <div className="w-full rounded-md border border-port-border bg-white p-2.5 text-[10px] leading-tight">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-port-accent">PENDING</span>
          <span className="text-port-muted">14:22</span>
        </div>
        <div className="mt-1 text-port-body">Awaiting <b>Compliance review</b></div>
        <div className="mt-0.5 text-port-muted">by Ha Anh · TX #4821</div>
      </div>
    ),
  },
  {
    label: "PERMISSIONS",
    title: "Role-scoped sidebar",
    problem: "Partner / employee / ops needed different left nav.",
    solution: "One sidebar, one config file — 3 role bundles, no forks.",
    visual: (
      <div className="w-full space-y-1">
        {["Partners", "Employees", "Transactions", "Cash flow"].map((l, i) => (
          <div key={l} className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[10px] ${i === 1 ? "bg-port-blue/10 text-port-blue font-semibold" : "text-port-muted"}`}>
            <span className={`inline-block h-2 w-2 rounded-sm ${i === 1 ? "bg-port-blue" : "bg-port-border"}`} />
            {l}
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "CONFIG",
    title: "Fee tier builder",
    problem: "Fee logic buried in a JSON blob in the CMS.",
    solution: "Visual tier editor with live preview per partner class.",
    visual: (
      <div className="w-full space-y-1 text-[10px]">
        {[
          { tier: "Tier A", fee: "0.5%", bg: "bg-port-tint-blue" },
          { tier: "Tier B", fee: "1.2%", bg: "bg-port-tint-peach" },
          { tier: "Tier C", fee: "2.0%", bg: "bg-port-tint-warm" },
        ].map(r => (
          <div key={r.tier} className={`flex items-center justify-between rounded px-2 py-1 ${r.bg}`}>
            <span className="font-semibold text-port-ink">{r.tier}</span>
            <span className="font-mono text-port-body">{r.fee}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export function PatternsSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-white p-8 md:p-10">
      <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">KEY PATTERNS</p>
      <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
        Four patterns that carried the system.
      </h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-port-body">
        Instead of shipping <strong className="font-semibold text-port-ink">6 disconnected UIs</strong>,
        the design system consolidated the repeated back-office problems into four reusable patterns.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {PATTERNS.map(p => (
          <div key={p.label} className="rounded-xl border border-port-border bg-port-tint-blue/40 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold tracking-[1.8px] text-port-blue">{p.label}</p>
                <p className="mt-1.5 text-[15px] font-semibold text-port-ink">{p.title}</p>
              </div>
            </div>
            <div className="mt-3 min-h-[64px] flex items-center">{p.visual}</div>
            <div className="mt-3 space-y-2 text-[12px] leading-[1.5]">
              <p>
                <span className="font-semibold text-port-accent">Problem</span>
                <span className="ml-2 text-port-body">{p.problem}</span>
              </p>
              <p>
                <span className="font-semibold text-[#109C84]">Solution</span>
                <span className="ml-2 text-port-body">{p.solution}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
