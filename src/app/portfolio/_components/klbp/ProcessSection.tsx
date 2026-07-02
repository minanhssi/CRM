import {
  Search, PenLine, Lightbulb, Palette, ClipboardCheck,
} from "lucide-react";
import type { ReactNode } from "react";

const STEPS: { icon: ReactNode; label: string; description: string }[] = [
  { icon: <Search className="h-5 w-5" />,          label: "Research", description: "User Research, Competitor Analysis" },
  { icon: <PenLine className="h-5 w-5" />,         label: "Define",   description: "Persona, Journey Map, Problem Statement" },
  { icon: <Lightbulb className="h-5 w-5" />,       label: "Idea",     description: "Brainstorming, IA, Userflow" },
  { icon: <Palette className="h-5 w-5" />,         label: "Design",   description: "Wireframe, Prototype, UI" },
  { icon: <ClipboardCheck className="h-5 w-5" />,  label: "Test",     description: "User Testing, Screen Evaluation" },
];

export function ProcessSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.12)] md:p-10">
      <div className="grid gap-8 md:grid-cols-5">
        {STEPS.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-port-blue/30 bg-port-tint-blue text-port-blue">
              {s.icon}
            </div>
            <p className="text-[15px] font-semibold text-port-ink">{s.label}</p>
            <p className="mt-1.5 text-[13px] leading-[1.5] text-port-muted">{s.description}</p>
            {i < STEPS.length - 1 && (
              <div className="mt-6 hidden h-px w-full bg-port-border md:block" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
