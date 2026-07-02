import Image from "next/image";

const MOCKUPS: { label: string; title: string; description: string; src: string; w: number; h: number }[] = [
  {
    label: "DASHBOARD",
    title: "Dashboard",
    description: "Overview of accounts, balances, transaction history at a glance.",
    src: "/portfolio/klbp/mockups/dashboard.png",
    w: 1464,
    h: 1048,
  },
  {
    label: "STATISTIC",
    title: "Statistic",
    description: "Real-time revenue, transaction volume, and comparative views.",
    src: "/portfolio/klbp/mockups/statistic.png",
    w: 1508,
    h: 1244,
  },
  {
    label: "PAY PAGE",
    title: "Pay Page",
    description: "Multi-step payment order creation with customer info + product list.",
    src: "/portfolio/klbp/mockups/paypage.png",
    w: 1465,
    h: 1048,
  },
  {
    label: "PAY LINK",
    title: "Pay Link",
    description: "Reusable payment link with QR + status tracking + customer capture.",
    src: "/portfolio/klbp/mockups/paylink.png",
    w: 1465,
    h: 1048,
  },
];

export function MockupsSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-white p-8 md:p-10">
      <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">HIGH-FIDELITY MOCKUPS</p>
      <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
        Key modules, shipped.
      </h3>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-port-body">
        Four representative screens from the six-module back-office —{" "}
        <strong className="font-semibold text-port-ink">one shared component library</strong>{" "}
        keeps the pattern consistent across finance, ops, and partner roles.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {MOCKUPS.map(m => (
          <div key={m.label} className="rounded-xl border border-port-border bg-port-tint-blue/40 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold tracking-[1.8px] text-port-blue">{m.label}</p>
                <p className="mt-1.5 text-[15px] font-semibold text-port-ink">{m.title}</p>
              </div>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg">
              <Image
                src={m.src}
                alt={`${m.title} — KLBP back-office screen`}
                width={m.w}
                height={m.h}
                quality={92}
                sizes="(min-width: 768px) 640px, 100vw"
                className="block h-auto w-full"
              />
            </div>
            <p className="mt-3 text-[12px] leading-[1.5] text-port-muted">{m.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
