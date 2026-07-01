import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Eyebrow } from "../_components/Eyebrow";
import { Reveal } from "../_components/Reveal";
import { CaseHero } from "../_components/CaseHero";
import { MetaCard } from "../_components/MetaCard";
import { PainCard } from "../_components/PainCard";
import { PillarCard } from "../_components/PillarCard";
import { OutcomeSection } from "../_components/OutcomeSection";

export const metadata = {
  title: "KienlongBank Pay — Payment gateway back-office | Duong Ngoc Minh Anh",
  description:
    "Multi-module enterprise back-office for a payment gateway: partner approval, employee management, transaction tracking, and configurable cash-flow workflows.",
};

export default function KLBPCaseStudy() {
  return (
    <>
      <Header />

      <CaseHero
        caseNumber="CASE STUDY · 01 / 04"
        eyebrow="Case study 01 — Fintech · Banking back-office"
        title={
          <>
            KienlongBank Pay — <span className="text-port-blue">back-office</span> for a payment gateway.
          </>
        }
        subtitle="Multi-module enterprise CMS: partner approval, employee management, transaction tracking, and configurable cash-flow workflows for a fintech product at scale."
        tags={["ENTERPRISE CMS", "MULTI-ROLE WORKFLOW", "DESIGN SYSTEM", "BANKING"]}
        eyebrowColor="cream"
        accentClass="text-[#8CC8FF]"
      />

      {/* ABOUT + META */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About the product</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.65] text-port-body md:text-[22px]">
                KienlongBank Pay is an integrated payment-gateway product. The back-office side is where the bank&apos;s partner businesses, employees, and transaction operators do their work — approving merchants, configuring fee tiers, tracking transactions, and reconciling cash flow across multiple parties.
              </p>
              <p className="mt-6 text-lg leading-[1.65] text-port-muted">
                I led the UX for the entire back-office system across six core modules — partner management, employee management, fee configuration, transaction operations, cash-flow oversight, and PayPOS integration. Each module ships to a different internal role, but they share one workflow engine.
              </p>
              <p className="mt-4 text-lg leading-[1.65] text-port-muted">
                The flagship challenge was making a multi-role, multi-step approval workflow feel coherent rather than bureaucratic — with an audit trail thorough enough for banking compliance, but a UX simple enough that non-technical partner-facing staff don&apos;t need training to use it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <MetaCard
                items={[
                  { label: "DOMAIN", value: "Fintech · Banking back-office" },
                  { label: "PRODUCT", value: "Payment gateway CMS — multi-module enterprise" },
                  { label: "ROLE", value: "Lead UX designer — research, UX, UI, handoff" },
                  { label: "MODULES", value: "6 — partner, employees, fees, transactions, cash flow, PayPOS" },
                  { label: "METHOD", value: "User research · empathy map · personas · usability test" },
                  { label: "OUTPUT", value: "Wireframes, prototype, design system, 25+ specs" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-port-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Six modules, three roles, one workflow — and no shared operational surface.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-xl leading-[1.65] text-port-body">
              Before this rebuild, KienlongBank&apos;s payment operations sat across scattered internal tools and spreadsheets. Partners, employees, and transaction operators each needed different data views but the same underlying record. Approval steps got lost between teams; reconciliation was a monthly fire drill; and every new partner onboarding required manual coordination.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                who: "Partner-facing staff",
                label: "FOR THE USER",
                body:
                  "Approving new merchants meant chasing signatures, KYC docs, and CIF numbers across three internal tools. Errors caught at the bank compliance stage cost 3–5 days of rework.",
              },
              {
                who: "Transaction operators",
                label: "FOR THE TEAM",
                body:
                  "No unified view of pending vs. settled transactions. Reconciliation involved exporting CSVs from three systems and matching by hand.",
              },
              {
                who: "The bank",
                label: "FOR THE BUSINESS",
                body:
                  "No standardized workflow to onboard partners at scale. Every new business line meant a new spreadsheet — and a new audit surface for compliance to review.",
              },
            ].map((p, i) => (
              <Reveal key={p.who} delay={i * 0.08}>
                <PainCard who={p.who} label={p.label} body={p.body} accent="text-port-blue" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH — 3 PILLARS */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Three design pillars that made six modules feel like one product.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              I organized the design around three pillars each addressing a real bottleneck. Every screen in the back-office traces back to one of them.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}>
              <PillarCard
                n="01"
                label="PILLAR — SHARED RECORD"
                title="One partner record, six module views"
                bullets={[
                  "Every module reads and writes to the same partner-record schema",
                  "Views are role-scoped: partner-facing staff see intake state, operators see transaction state",
                  "Handoff between modules preserves state — no lost approvals mid-flow",
                  "Every action is journaled with actor, timestamp, and reason",
                ]}
                accent="text-port-blue"
                bg="bg-port-cream-light"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <PillarCard
                n="02"
                label="PILLAR — DESIGN SYSTEM"
                title="One component library, six-module consistency"
                bullets={[
                  "Typography ramp + color tokens applied across every module",
                  "Table, form, drawer, and modal patterns reused unchanged",
                  "Status badges standardized: pending · approved · rejected · settled",
                  "Icon set shared with the customer-facing Pay Page + Pay Link surface",
                ]}
                accent="text-port-blue"
                bg="bg-port-cream-light"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <PillarCard
                n="03"
                label="PILLAR — RESEARCH-LED"
                title="Grounded in real operator behavior"
                bullets={[
                  "Competitor teardown of Stripe, Payoo, PayME to benchmark expectations",
                  "Empathy map with two operator personas (Barnett — retail, Amery — travel)",
                  "IA driven by task flow, not org chart — modules organized around jobs",
                  "Usability testing with internal partners refining approval flow copy",
                ]}
                accent="text-port-blue"
                bg="bg-port-cream-light"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MODULES OVERVIEW */}
      <section className="bg-port-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Key modules</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Six modules, each a jobs-to-be-done surface.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                title: "Partner management",
                body: "Merchant approval workflow with KYC intake, fee-tier assignment, and CIF resolution. Approval states are auditable end-to-end.",
              },
              {
                n: "02",
                title: "Employee management",
                body: "Role-scoped access for partner staff — assign permissions per module, track sessions, revoke instantly when someone leaves.",
              },
              {
                n: "03",
                title: "Fee configuration",
                body: "Configurable fee tiers per partner, per transaction type. Version-controlled — every change reversible.",
              },
              {
                n: "04",
                title: "Transaction operations",
                body: "Unified view of pending, settled, and failed transactions across all partners. Filter by state, date, channel; export for reconciliation.",
              },
              {
                n: "05",
                title: "Cash-flow oversight",
                body: "Real-time cash-flow dashboard showing inbound partner deposits, outbound settlements, and pending reserves. Alerts for anomalies.",
              },
              {
                n: "06",
                title: "PayPOS integration",
                body: "Bridge module between the back-office and the merchant-facing PayPOS mobile app — partner staff configure PayPOS from the same admin.",
              },
            ].map((m, i) => (
              <Reveal key={m.n} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-8">
                  <p className="text-[13px] font-medium tracking-[2px] text-port-muted">{m.n}</p>
                  <h3 className="mt-4 text-xl font-semibold text-port-ink">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-port-body">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OutcomeSection
        title="What this taught me about designing at enterprise scale."
        paragraphs={[
          "The hardest part of enterprise back-office design isn't the individual screen — it's making six independently-scoped modules feel like one coherent product to the person switching between them all day. That coherence comes from three levers: shared data model, shared component library, and shared vocabulary in the UI copy.",
          "The banking-compliance requirements pushed me to design for auditability first — every action journaled, every state change visible, every reason field required. Ironically, that constraint made the UX clearer for the operator, not slower: when the interface always shows why something is in a given state, the operator spends less time investigating and more time deciding.",
        ]}
        takeaways={[
          {
            n: "01",
            label: "SHARED RECORD, ROLE-SCOPED VIEWS",
            text: "One data schema across modules beats six local schemas. Views are cheap; canonical records are what keep the system honest.",
          },
          {
            n: "02",
            label: "AUDITABILITY AS UX",
            text: "'Why is this pending?' should never require a support ticket. The interface itself should answer that in-place.",
          },
          {
            n: "03",
            label: "DESIGN SYSTEM = TIME COMPRESSION",
            text: "Six modules would have taken six times as long without a shared component library. The system paid for itself on module 2.",
          },
        ]}
      />

      <Footer />
    </>
  );
}
