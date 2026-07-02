import {
  FileText, Link as LinkIcon, BarChart3, Settings, Package, User,
} from "lucide-react";
import type { ReactNode } from "react";

const COMPETITORS: { name: string; brandColor: string; takeaway: string; feature: string }[] = [
  {
    name: "stripe",
    brandColor: "#635BFF",
    takeaway: "Global standard for developer flexibility",
    feature: "Reference for API-first architecture and clean transaction flows.",
  },
  {
    name: "9Pay",
    brandColor: "#2FAADE",
    takeaway: "Vietnam-first, business-friendly",
    feature: "Reference for local integrations and real-time analytics UI.",
  },
  {
    name: "PayME",
    brandColor: "#26A65B",
    takeaway: "No-code embedded payments",
    feature: "Reference for zero-setup Pay Link, POS, and Pay Button surfaces.",
  },
];

const FEATURES: { icon: ReactNode; label: string }[] = [
  { icon: <FileText className="h-5 w-5" />,  label: "Pay Page" },
  { icon: <LinkIcon className="h-5 w-5" />,  label: "Pay Link" },
  { icon: <BarChart3 className="h-5 w-5" />, label: "Statistic" },
  { icon: <Settings className="h-5 w-5" />,  label: "Setting" },
  { icon: <Package className="h-5 w-5" />,   label: "Product" },
  { icon: <User className="h-5 w-5" />,      label: "Customer" },
];

export function ResearchSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-port-tint-blue p-8 md:p-10">
      <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">
        COMPETITOR ANALYSIS
      </p>
      <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
        Research
      </h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-port-body">
        Benchmarked <strong className="font-semibold text-port-ink">3 payment platforms</strong> to
        prioritize what to build first — global reach, local trust, and setup speed.
      </p>

      <div className="mt-6 space-y-3">
        {COMPETITORS.map(c => (
          <div
            key={c.name}
            className="grid grid-cols-[110px_1fr] items-center gap-4 rounded-xl border border-port-border bg-white px-5 py-4"
          >
            <span className="font-serif text-2xl font-bold" style={{ color: c.brandColor }}>
              {c.name}
            </span>
            <div>
              <p className="text-[14px] font-semibold text-port-ink">{c.takeaway}</p>
              <p className="mt-1 text-[12px] leading-[1.45] text-port-muted">{c.feature}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-port-border bg-white p-5">
        <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">6 CORE FEATURES</p>
        <p className="mt-1 text-[13px] leading-[1.5] text-port-body">
          Distilled from the teardown into the modules the bank could ship first.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
          {FEATURES.map(f => (
            <div key={f.label} className="flex flex-col items-center gap-2 rounded-lg bg-port-tint-blue py-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-port-blue">
                {f.icon}
              </div>
              <p className="text-[11px] font-semibold text-port-ink">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
