const QUADRANTS: { label: string; bg: string; border: string; items: string[] }[] = [
  {
    label: "Say",
    bg: "bg-[#FEEFEB]",
    border: "border-l-port-accent",
    items: [
      "“I am not sure if the transactions are accurate”",
      "“Payments sometimes take a long time because there is not enough variety of payment methods”",
      "“I want a payment gateway with high security”",
      "“I want to be able to control the cash flow in real time”",
      "“It would be great if my customers could pay using any banking app”",
    ],
  },
  {
    label: "Think",
    bg: "bg-[#F1F3FF]",
    border: "border-l-port-blue",
    items: [
      "I want to store and track transactions accurately",
      "I want to optimize costs and human resources",
      "Looking up transaction history is often time-consuming",
      "Control risks, minimize losses compared to cash payments",
      "Payments through multiple intermediaries are often not secure",
      "I want to reduce payment errors",
    ],
  },
  {
    label: "Do",
    bg: "bg-[#EEF9F5]",
    border: "border-l-[#109C84]",
    items: [
      "Use e-wallet for payment",
      "Expensive in hiring cashiers, accountants",
      "High service fees",
      "Time consuming to check the source of money",
    ],
  },
  {
    label: "Feel",
    bg: "bg-[#F5F1FE]",
    border: "border-l-[#8A5FD6]",
    items: [
      "Feeling pressured by transaction statistics",
      "Worried about the increasingly diverse payment needs of users",
      "Worried about the ability to manage money sources incorrectly",
      "Sad because costs are not optimized",
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
}[] = [
  {
    name: "Barnett",
    age: 29,
    gender: "Male",
    occupation: "Personal mini supermarket owner",
    behavior:
      "Mr. Barnett is the owner of a personal mini supermarket. He is always busy managing transaction inventory through Excel. His customers have requested an additional feature for payment via e-wallets.",
    goals: [
      "Wants to shorten transaction verification and reconciliation processes",
      "Wants to offer more payment methods for customers",
    ],
    needs: [
      "A simpler and less time-consuming ordering and payment system is needed",
      "There should be payment options beyond just cash and bank transfer",
    ],
    pains: [
      "The current payment methods do not meet customers' purchasing and ordering needs, resulting in a decrease in order volume",
      "There is no effective method for managing income and expenses",
    ],
    avatarColor: "#B87333",
  },
  {
    name: "Amery",
    age: 36,
    gender: "Female",
    occupation: "Travel Service Company Owner",
    behavior:
      "Ms. Amery is the owner of a company specializing in providing travel packages. Her company accepts bookings through a hotline on the website, Facebook, and Zalo, with payments primarily made via bank transfer details sent by staff through messages.",
    goals: [
      "She wants to review transactions in greater detail",
      "She seeks an intermediary payment gateway to automatically process and store transaction records",
    ],
    needs: [
      "A secure and automated system for transaction storage is required",
      "Automatic functionality for tracking, reviewing, and reporting on completed transactions is needed",
    ],
    pains: [
      "Self-managing the entire payment process can lead to risks of errors, fraud, and requires significant time for verifying and reconciling transactions",
      "Due to a lack of security, the risk of fraud becomes higher",
    ],
    avatarColor: "#F0C808",
  },
];

export function DefineSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-white p-8 md:p-10">
      {/* EMPATHY MAP */}
      <p className="text-center text-[12px] font-semibold tracking-[2px] text-port-ink/60">
        EMPATHY MAP
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {QUADRANTS.map(q => (
          <div
            key={q.label}
            className={`rounded-xl border-l-4 ${q.border} border-y border-r border-port-border/70 ${q.bg} p-6`}
          >
            <p className="text-[15px] font-semibold text-port-ink">{q.label}</p>
            <ul className="mt-4 space-y-2 text-[13px] leading-[1.55] text-port-body">
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
      <p className="mt-14 text-center text-[12px] font-semibold tracking-[2px] text-port-ink/60">
        USER PERSONA
      </p>
      <div className="mt-6 space-y-6">
        {PERSONAS.map(p => (
          <div key={p.name} className="grid gap-6 rounded-xl border border-port-border bg-white p-6 md:grid-cols-[140px_1fr] md:p-8">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold text-white"
                style={{ backgroundColor: p.avatarColor }}
                aria-hidden
              >
                {p.name.charAt(0)}
              </div>
              <p className="mt-3 text-[15px] font-semibold text-port-ink">{p.name}</p>
            </div>
            {/* Details */}
            <div className="grid gap-3 text-[13px] leading-[1.5] md:grid-cols-[110px_1fr] md:gap-y-2">
              <p className="font-semibold text-port-ink">Age</p>
              <p className="text-port-body">{p.age}</p>
              <p className="font-semibold text-port-ink">Gender</p>
              <p className="text-port-body">{p.gender}</p>
              <p className="font-semibold text-port-ink">Occupation</p>
              <p className="text-port-body">{p.occupation}</p>
              <p className="font-semibold text-port-ink">Behavior</p>
              <p className="text-port-body">{p.behavior}</p>
              <p className="font-semibold text-port-ink">Goals</p>
              <ul className="space-y-1 text-port-body">
                {p.goals.map(g => (
                  <li key={g} className="flex gap-2"><span className="mt-2 inline-block h-1 w-1 rounded-full bg-port-ink/50" />{g}</li>
                ))}
              </ul>
              <p className="font-semibold text-port-ink">Needs</p>
              <ul className="space-y-1 text-port-body">
                {p.needs.map(n => (
                  <li key={n} className="flex gap-2"><span className="mt-2 inline-block h-1 w-1 rounded-full bg-port-ink/50" />{n}</li>
                ))}
              </ul>
              <p className="font-semibold text-port-ink">Pains / Frustration</p>
              <ul className="space-y-1 text-port-body">
                {p.pains.map(pn => (
                  <li key={pn} className="flex gap-2"><span className="mt-2 inline-block h-1 w-1 rounded-full bg-port-ink/50" />{pn}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
