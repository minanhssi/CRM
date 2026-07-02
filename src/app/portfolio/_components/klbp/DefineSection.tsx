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
  age: number;
  gender: string;
  occupation: string;
  behavior: string;
  goals: string[];
  needs: string[];
  pains: string[];
  avatarColor: string;
  avatarBg: string;
}[] = [
  {
    name: "Barnett",
    age: 29,
    gender: "Male",
    occupation: "Personal mini supermarket owner",
    behavior:
      "Owns a personal mini supermarket. Manages transaction inventory through Excel. Customers have asked for e-wallet payment.",
    goals: [
      "Shorten transaction verification and reconciliation.",
      "Offer more payment methods for customers.",
    ],
    needs: [
      "A simpler, less time-consuming ordering + payment system.",
      "Payment options beyond just cash and bank transfer.",
    ],
    pains: [
      "Current methods don't meet purchasing needs — order volume drops.",
      "No effective way to manage income and expenses.",
    ],
    avatarColor: "#B87333",
    avatarBg: "#F0E6D8",
  },
  {
    name: "Amery",
    age: 36,
    gender: "Female",
    occupation: "Travel Service Company Owner",
    behavior:
      "Runs a travel package company. Accepts bookings via hotline, website, Facebook, Zalo — payments made through bank transfer details staff send by message.",
    goals: [
      "Review transactions in greater detail.",
      "Get an intermediary payment gateway that auto-records transactions.",
    ],
    needs: [
      "A secure and automated system for transaction storage.",
      "Auto-tracking, review, and reporting on completed transactions.",
    ],
    pains: [
      "Self-managing payments across channels invites errors and fraud.",
      "Lack of security → higher risk of fraud.",
    ],
    avatarColor: "#F0C808",
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

      {/* USER PERSONA */}
      <p className="mt-10 text-[11px] font-semibold tracking-[2.5px] text-port-blue">USER PERSONA</p>
      <p className="mt-2 max-w-2xl text-[14px] leading-[1.55] text-port-body">
        Two representative back-office users who shaped every decision.
      </p>

      <div className="mt-4 space-y-6">
        {PERSONAS.map(p => (
          <div
            key={p.name}
            className="overflow-hidden rounded-xl border border-port-border bg-white"
          >
            <div className="grid gap-6 p-6 md:grid-cols-[120px_1fr] md:gap-8 md:p-8">
              {/* Avatar column */}
              <div className="flex flex-col items-center">
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full text-4xl font-bold shadow-[0_8px_20px_-8px_rgba(21,21,21,0.15)]"
                  style={{ backgroundColor: p.avatarBg, color: p.avatarColor }}
                  aria-hidden
                >
                  {p.name.charAt(0)}
                </div>
                <p className="mt-3 text-[16px] font-semibold text-port-ink">{p.name}</p>
              </div>

              {/* Meta + Behavior + Goals + Needs */}
              <div className="space-y-4">
                {/* Meta row: Age / Gender / Occupation */}
                <div className="grid gap-3 text-[13px] leading-[1.5] md:grid-cols-3">
                  <MetaField label="Age" value={String(p.age)} />
                  <MetaField label="Gender" value={p.gender} />
                  <MetaField label="Occupation" value={p.occupation} />
                </div>

                {/* Behavior */}
                <FieldBlock
                  label="BEHAVIOR"
                  labelColor="text-port-muted"
                  bg="bg-port-tint-gray"
                  border="border-l-port-muted/40"
                >
                  <p className="text-[13px] leading-[1.55] text-port-body">{p.behavior}</p>
                </FieldBlock>

                {/* Goals + Needs side-by-side on desktop */}
                <div className="grid gap-3 md:grid-cols-2">
                  <FieldBlock
                    label="GOALS"
                    labelColor="text-[#109C84]"
                    bg="bg-[#EEF9F5]"
                    border="border-l-[#109C84]"
                  >
                    <BulletList items={p.goals} dot="bg-[#109C84]" />
                  </FieldBlock>
                  <FieldBlock
                    label="NEEDS"
                    labelColor="text-port-blue"
                    bg="bg-port-tint-blue"
                    border="border-l-port-blue"
                  >
                    <BulletList items={p.needs} dot="bg-port-blue" />
                  </FieldBlock>
                </div>
              </div>
            </div>

            {/* Pains / Frustration — full width, rose accent */}
            <div className="border-t border-port-border/70 bg-[#FEEFEB] px-6 py-5 md:px-8">
              <p className="text-[11px] font-semibold tracking-[1.8px] text-port-accent">
                PAINS / FRUSTRATION
              </p>
              <div className="mt-2">
                <BulletList items={p.pains} dot="bg-port-accent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[1.5px] text-port-muted">{label.toUpperCase()}</p>
      <p className="mt-0.5 text-[13px] font-medium text-port-ink">{value}</p>
    </div>
  );
}

function FieldBlock({
  label,
  labelColor,
  bg,
  border,
  children,
}: {
  label: string;
  labelColor: string;
  bg: string;
  border: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`rounded-lg border-l-4 ${border} ${bg} px-4 py-3`}>
      <p className={`text-[10px] font-semibold tracking-[1.8px] ${labelColor}`}>{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function BulletList({ items, dot }: { items: string[]; dot: string }) {
  return (
    <ul className="space-y-1.5 text-[13px] leading-[1.5] text-port-body">
      {items.map(item => (
        <li key={item} className="flex gap-2">
          <span className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
