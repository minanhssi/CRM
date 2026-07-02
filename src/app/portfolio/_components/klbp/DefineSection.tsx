const QUADRANTS: { label: string; bg: string; border: string; items: string[] }[] = [
  {
    label: "Say",
    bg: "bg-[#FEEFEB]",
    border: "border-l-port-accent",
    items: [
      "“I'm not sure if my transactions are accurate.”",
      "“I need a payment gateway I can actually trust.”",
    ],
  },
  {
    label: "Think",
    bg: "bg-[#F1F3FF]",
    border: "border-l-port-blue",
    items: [
      "How do I minimize losses vs cash payments?",
      "Reconciling in Excel every week is killing me.",
    ],
  },
  {
    label: "Do",
    bg: "bg-[#EEF9F5]",
    border: "border-l-[#109C84]",
    items: [
      "Manually verify each transaction against paper receipts.",
      "Pay for extra staff just to close the books.",
    ],
  },
  {
    label: "Feel",
    bg: "bg-[#F5F1FE]",
    border: "border-l-[#8A5FD6]",
    items: [
      "Pressured by unclear transaction reports.",
      "Anxious about mismanaging cash flow.",
    ],
  },
];

const PERSONAS: {
  name: string;
  role: string;
  age: number;
  goal: string;
  goalHighlight: string;
  pain: string;
  painHighlight: string;
  avatarColor: string;
}[] = [
  {
    name: "Barnett",
    role: "Mini-supermarket owner",
    age: 29,
    goal: "Shorten reconciliation and offer more payment methods to customers.",
    goalHighlight: "Shorten reconciliation",
    pain: "Cash-only checkout is costing orders — no way to accept e-wallets or track income cleanly.",
    painHighlight: "Cash-only checkout is costing orders",
    avatarColor: "#B87333",
  },
  {
    name: "Amery",
    role: "Travel service owner",
    age: 36,
    goal: "One secure gateway that auto-records every transaction from web, Facebook, Zalo.",
    goalHighlight: "One secure gateway that auto-records",
    pain: "Self-managing payments across channels invites errors and fraud.",
    painHighlight: "invites errors and fraud",
    avatarColor: "#F0C808",
  },
];

export function DefineSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-white p-8 md:p-10">
      {/* EMPATHY MAP */}
      <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">EMPATHY MAP</p>
      <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
        Define
      </h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-port-body">
        <strong className="font-semibold text-port-ink">2 lines per quadrant</strong> — the sharpest
        signals from interviews, not the full transcript.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {QUADRANTS.map(q => (
          <div
            key={q.label}
            className={`rounded-xl border-l-4 ${q.border} border-y border-r border-port-border/70 ${q.bg} p-5`}
          >
            <p className="text-[14px] font-semibold text-port-ink">{q.label}</p>
            <ul className="mt-3 space-y-2 text-[13px] leading-[1.5] text-port-body">
              {q.items.map(item => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-port-ink/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* USER PERSONA */}
      <p className="mt-10 text-[11px] font-semibold tracking-[2.5px] text-port-blue">USER PERSONA</p>
      <p className="mt-2 max-w-2xl text-[14px] leading-[1.55] text-port-body">
        Two representative back-office users who shaped every decision.
      </p>

      <div className="mt-4 space-y-4">
        {PERSONAS.map(p => (
          <div
            key={p.name}
            className="grid grid-cols-[80px_1fr] items-start gap-4 rounded-xl border border-port-border bg-white p-5"
          >
            <div className="flex flex-col items-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white"
                style={{ backgroundColor: p.avatarColor }}
                aria-hidden
              >
                {p.name.charAt(0)}
              </div>
              <p className="mt-2 text-[13px] font-semibold text-port-ink">{p.name}</p>
              <p className="text-[11px] text-port-muted">{p.age}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[1.5px] text-port-muted">
                {p.role.toUpperCase()}
              </p>
              <div className="mt-3">
                <p className="text-[11px] font-semibold tracking-[1.5px] text-[#109C84]">GOAL</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-port-body">
                  {p.goal.split(p.goalHighlight)[0]}
                  <strong className="font-semibold text-port-ink">{p.goalHighlight}</strong>
                  {p.goal.split(p.goalHighlight)[1]}
                </p>
              </div>
              <div className="mt-2">
                <p className="text-[11px] font-semibold tracking-[1.5px] text-port-accent">PAIN</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-port-body">
                  {p.pain.split(p.painHighlight)[0]}
                  <strong className="font-semibold text-port-ink">{p.painHighlight}</strong>
                  {p.pain.split(p.painHighlight)[1]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
