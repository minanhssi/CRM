type Kind = "context" | "problem" | "approach" | "output" | "reflection";

const KIND_STYLES: Record<Kind, { bg: string; text: string; label: string }> = {
  context: { bg: "bg-port-blue/10", text: "text-port-blue", label: "CONTEXT" },
  problem: { bg: "bg-[#D8433D]/12", text: "text-[#B7332E]", label: "PROBLEM" },
  approach: { bg: "bg-port-accent/12", text: "text-port-accent", label: "APPROACH" },
  output: { bg: "bg-[#109C84]/12", text: "text-[#109C84]", label: "OUTPUT" },
  reflection: { bg: "bg-[#8A5FD6]/12", text: "text-[#7A4FC6]", label: "REFLECTION" },
};

export function SectionKind({ kind, subtitle }: { kind: Kind; subtitle?: string }) {
  const s = KIND_STYLES[kind];
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className={`rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-[1.8px] ${s.bg} ${s.text}`}>
        {s.label}
      </span>
      {subtitle && (
        <>
          <span className="h-px w-8 bg-port-ink/15" />
          <span className="text-[11px] font-medium tracking-[1.5px] uppercase text-port-muted">{subtitle}</span>
        </>
      )}
    </div>
  );
}
