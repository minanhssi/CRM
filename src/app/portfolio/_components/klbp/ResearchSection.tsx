import {
  FileText, Link as LinkIcon, BarChart3, Settings, Package, User,
} from "lucide-react";
import type { ReactNode } from "react";

const COMPETITORS: { name: string; brandColor: string; features: string; ui: string }[] = [
  {
    name: "stripe",
    brandColor: "#635BFF",
    features: "Stripe is a highly flexible payment platform that supports various payment methods, including card payments, bank transfers, and cryptocurrency. It's designed for global scalability and is widely used by e-commerce websites and mobile apps.",
    ui: "Clean and professional, with a developer-centric design. Offers extensive documentation and developer tools to integrate with a wide range of platforms.",
  },
  {
    name: "9Pay",
    brandColor: "#2FAADE",
    features: "Provides comprehensive digital payment solutions, including payment gateways, wallet services, and support for payment links. It's optimized for businesses in Vietnam and integrates with local banking systems.",
    ui: "Business-friendly, focusing on simplicity and usability for Vietnamese companies. It includes features like quick access to transactions and real-time analytics.",
  },
  {
    name: "PayME",
    brandColor: "#26A65B",
    features: "Offers embedded finance solutions with quick setup features such as PayME Links, POS systems, and PayME Button without requiring technical integration. Focuses on instant payment acceptance.",
    ui: "Simple and intuitive, targeting merchants who need fast, easy payment solutions without technical complexity. The UI is designed for quick payment management.",
  },
];

const FEATURES: { icon: ReactNode; label: string; description: string }[] = [
  { icon: <FileText className="h-5 w-5" />,  label: "Pay Page",           description: "Create payment order to send to customer" },
  { icon: <LinkIcon className="h-5 w-5" />,  label: "Pay Link",           description: "Create link to receive money" },
  { icon: <BarChart3 className="h-5 w-5" />, label: "Statistic",          description: "Status statistics, transaction quantity" },
  { icon: <Settings className="h-5 w-5" />,  label: "Setting",            description: "Payment settings, account information, receiving account" },
  { icon: <Package className="h-5 w-5" />,   label: "Product Management", description: "Manage business product information" },
  { icon: <User className="h-5 w-5" />,      label: "Customer Management", description: "Manage business customer information" },
];

export function ResearchSection() {
  return (
    <div className="rounded-2xl border border-port-border bg-port-tint-blue p-8 md:p-10">
      {/* COMPETITOR ANALYSIS */}
      <p className="text-center text-[12px] font-semibold tracking-[2px] text-port-ink/60">
        COMPETITOR ANALYSIS
      </p>
      <h3 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
        Research
      </h3>
      <div className="mt-3 h-px w-full bg-port-blue/20" />
      <p className="mt-6 max-w-3xl text-[14px] leading-[1.6] text-port-body md:text-[15px]">
        I started secondary research by surveying the market and finding successful products to learn from.
        I chose <strong className="font-semibold text-port-ink">3 competitors</strong> with similar solutions to KienlongBank Pay to analyze including:
      </p>

      <div className="mt-8 space-y-5">
        {COMPETITORS.map((c, i) => (
          <div
            key={c.name}
            className="grid gap-6 rounded-xl border border-port-border bg-white p-6 md:grid-cols-[220px_1fr] md:items-start md:p-8"
          >
            <div className={`flex items-center justify-center md:justify-start ${i % 2 === 1 ? "md:order-2 md:justify-end" : ""}`}>
              <span className="font-serif text-4xl font-bold" style={{ color: c.brandColor }}>
                {c.name}
              </span>
            </div>
            <ul className={`space-y-3 text-[13px] leading-[1.55] text-port-body md:text-[14px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <li className="flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-blue" />
                <span><strong className="font-semibold text-port-ink">Features:</strong> {c.features}</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-blue" />
                <span><strong className="font-semibold text-port-ink">User Interface:</strong> {c.ui}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <p className="mt-14 text-center text-[12px] font-semibold tracking-[2px] text-port-ink/60">
        FEATURES
      </p>
      <p className="mx-auto mt-6 max-w-3xl text-[14px] leading-[1.6] text-port-body md:text-[15px]">
        I started to synthesize from the above competitors and extracted the features that solve the problems mentioned above,
        setting out important features to prioritize implementation based on the company's resources and capital.
      </p>

      <div className="mt-6 rounded-xl border border-port-border bg-white p-6 md:p-8">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {FEATURES.map(f => (
            <div key={f.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-port-blue/30 bg-port-tint-blue text-port-blue">
                {f.icon}
              </div>
              <p className="text-[13px] font-semibold text-port-ink">{f.label}</p>
              <p className="mt-1 text-[12px] leading-[1.45] text-port-muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
