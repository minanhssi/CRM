import Image from "next/image";

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
  context: string;
  avatar: string;
  quote: string;
  insight: string;
  insightDetail: string;
  designResponse: string;
  designDetail: string;
  impact: string;
  avatarBg: string;
}[] = [
  {
    name: "Barnett",
    role: "Independent retail merchant",
    context: "29 · Runs a mini supermarket · Excel-based bookkeeping",
    avatar: "/portfolio/klbp/personas/barnett.png",
    quote: "I lose sales when a customer wants to pay by e-wallet and I only have cash.",
    insight: "Missing a payment method isn't friction — it's a lost order.",
    insightDetail:
      "Merchants like Barnett aren't asking for more analytics. They're asking for reliable acceptance of the payment method their customer already prefers.",
    designResponse: "3-tap payment-method setup with revenue preview.",
    designDetail:
      "Onboarding flow surfaces e-wallet / card / QR toggles as the first screen — projected uplift shown before commit so the merchant sees the value, not the config.",
    impact: "Setup time 30 min → 5 min in usability test",
    avatarBg: "#F0E6D8",
  },
  {
    name: "Amery",
    role: "Multi-channel service operator",
    context: "36 · Runs a travel-services company · Bookings across web + Facebook + Zalo",
    avatar: "/portfolio/klbp/personas/amery.png",
    quote: "My staff send bank details over Zalo. I never know if the transfer actually landed.",
    insight: "Multi-channel bookings break the audit loop before payment even settles.",
    insightDetail:
      "Every off-platform message is an audit gap. Owners can't trust reports they didn't observe end-to-end. Design has to close that loop, not add another dashboard on top.",
    designResponse: "Auto-linked payment inbox across every channel.",
    designDetail:
      "One inbox aggregates chat / web / API bookings into a single settlement view; each booking auto-matches to its bank transfer with a visible trace so no reconciliation happens off-platform.",
    impact: "Manual daily reconciliation → real-time settlement view",
    avatarBg: "#FFF8DC",
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

      {/* USER PERSONA — research → insight → design decision */}
      <p className="mt-10 text-[11px] font-semibold tracking-[2.5px] text-port-blue">USER PERSONA</p>
      <h4 className="mt-2 text-[18px] font-semibold text-port-ink">
        Two research anchors that changed the design.
      </h4>
      <p className="mt-1 max-w-2xl text-[14px] leading-[1.55] text-port-body">
        Each persona = <strong className="font-semibold text-port-ink">one research quote</strong> we couldn&apos;t design around, <strong className="font-semibold text-port-ink">one insight</strong>, and{" "}
        <strong className="font-semibold text-port-ink">the specific UI decision</strong> it drove.
      </p>

      <div
        className="mt-6 grid gap-4 md:grid-cols-2"
        style={{ gridTemplateRows: "auto auto auto auto auto" }}
      >
        {PERSONAS.map(p => (
          <div
            key={p.name}
            className="grid overflow-hidden rounded-xl border border-port-border bg-white md:row-span-5 md:grid-rows-subgrid"
          >
            {/* Header — avatar image + name + role */}
            <div className="flex items-center gap-4 border-b border-port-border/70 bg-port-tint-blue/40 px-5 py-4">
              <div
                className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-[0_6px_16px_-8px_rgba(21,21,21,0.25)]"
                style={{ backgroundColor: p.avatarBg }}
              >
                <Image
                  src={p.avatar}
                  alt={`${p.name} — persona avatar`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-port-ink">{p.name}</p>
                <p className="text-[11px] font-semibold tracking-[1.4px] text-port-blue">
                  {p.role.toUpperCase()}
                </p>
                <p className="mt-0.5 text-[11px] text-port-muted">{p.context}</p>
              </div>
            </div>

            {/* Research quote */}
            <div className="border-b border-port-border/70 px-5 py-4">
              <p className="text-[10px] font-semibold tracking-[1.8px] text-port-muted">
                RESEARCH QUOTE
              </p>
              <blockquote className="mt-2 font-serif text-[15px] leading-[1.4] text-port-ink">
                &ldquo;{p.quote}&rdquo;
              </blockquote>
            </div>

            {/* Insight */}
            <div className="border-b border-port-border/70 bg-[#F1F3FF] px-5 py-4">
              <p className="text-[10px] font-semibold tracking-[1.8px] text-port-blue">INSIGHT</p>
              <p className="mt-2 text-[14px] font-semibold leading-[1.4] text-port-ink">
                {p.insight}
              </p>
              <p className="mt-1.5 text-[12px] leading-[1.5] text-port-body">{p.insightDetail}</p>
            </div>

            {/* Design response */}
            <div className="border-b border-port-border/70 bg-[#EEF9F5] px-5 py-4">
              <p className="text-[10px] font-semibold tracking-[1.8px] text-[#109C84]">
                DESIGN RESPONSE
              </p>
              <p className="mt-2 text-[14px] font-semibold leading-[1.4] text-port-ink">
                {p.designResponse}
              </p>
              <p className="mt-1.5 text-[12px] leading-[1.5] text-port-body">{p.designDetail}</p>
            </div>

            {/* Impact chip */}
            <div className="flex items-center gap-2 bg-[#FEEFEB] px-5 py-3">
              <span className="text-[10px] font-semibold tracking-[1.8px] text-port-accent">
                IMPACT
              </span>
              <span className="text-[12px] font-medium text-port-ink">{p.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
