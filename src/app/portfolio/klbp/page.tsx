import {
  Building2, Users, Calculator, Receipt, TrendingUp, Smartphone,
  ClipboardList, Layers, ScrollText, Database, LayoutTemplate, Search,
} from "lucide-react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Eyebrow } from "../_components/Eyebrow";
import { Reveal } from "../_components/Reveal";
import { CaseHero } from "../_components/CaseHero";
import { ProcessSection } from "../_components/klbp/ProcessSection";
import { ResearchSection } from "../_components/klbp/ResearchSection";
import { DefineSection } from "../_components/klbp/DefineSection";
import { DesignSystemSection } from "../_components/klbp/DesignSystemSection";
import { PatternsSection } from "../_components/klbp/PatternsSection";
import { PainCard } from "../_components/PainCard";
import { PillarCard } from "../_components/PillarCard";
import { ModuleCard } from "../_components/ModuleCard";
import { OutcomeSection } from "../_components/OutcomeSection";
import { SectionDeco } from "../_components/SectionDeco";
import { ImageBanner } from "../_components/ImageBanner";
import { ScrollProgress } from "../_components/ScrollProgress";
import { TocSidebar } from "../_components/TocSidebar";
import { CaseNav } from "../_components/CaseNav";
import { Highlight } from "../_components/Highlight";
import { PullQuote } from "../_components/PullQuote";

export const metadata = {
  title: "KienlongBank Pay — Payment gateway back-office | Duong Ngoc Minh Anh",
};

const BLUE = "#2D39CF";
const SOFT_BLUE = "text-port-blue";
const IconBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-port-blue/10 text-port-blue">{children}</div>
);

const MODULES = [
  { n: "01", title: "Partner management", body: "Merchant approval workflow with KYC intake, fee-tier assignment, and CIF resolution. Approval states are auditable end-to-end.", icon: <Building2 className="h-5 w-5" /> },
  { n: "02", title: "Employee management", body: "Role-scoped access for partner staff — assign permissions per module, track sessions, revoke instantly when someone leaves.", icon: <Users className="h-5 w-5" /> },
  { n: "03", title: "Fee configuration", body: "Configurable fee tiers per partner, per transaction type. Version-controlled — every change reversible.", icon: <Calculator className="h-5 w-5" /> },
  { n: "04", title: "Transaction operations", body: "Unified view of pending, settled, and failed transactions across all partners. Filter by state, date, channel; export for reconciliation.", icon: <Receipt className="h-5 w-5" /> },
  { n: "05", title: "Cash-flow oversight", body: "Real-time cash-flow dashboard showing inbound partner deposits, outbound settlements, and pending reserves. Alerts for anomalies.", icon: <TrendingUp className="h-5 w-5" /> },
  { n: "06", title: "PayPOS integration", body: "Bridge module between the back-office and the merchant-facing PayPOS mobile app — partner staff configure PayPOS from the same admin.", icon: <Smartphone className="h-5 w-5" /> },
];

export default function KLBPCaseStudy() {
  return (
    <>
      <ScrollProgress color="#2D39CF" />
      <Header />
      <TocSidebar
        accent="#2D39CF"
        sections={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "Problem" },
          { id: "approach", label: "Approach" },
          { id: "process", label: "Process" },
          { id: "modules", label: "Modules" },
          { id: "system", label: "System" },
          { id: "reflection", label: "Reflection" },
        ]}
      />

      <CaseHero
        caseNumber="CASE STUDY · 01 / 04"
        eyebrow="Case study 01 — Fintech · Banking back-office"
        title={<>KienlongBank Pay — <span className="text-port-blue">back-office</span> for a payment gateway.</>}
        subtitle="Multi-module enterprise CMS: partner approval, employee management, transaction tracking, and configurable cash-flow workflows for a fintech product at scale."
        tags={["ENTERPRISE CMS", "MULTI-ROLE WORKFLOW", "DESIGN SYSTEM", "BANKING"]}
        eyebrowColor="cream"
        accentClass="text-port-blue"
        heroTint="blue"
        decoVariant="connect"
        decoColor={BLUE}
        keyFacts={[
          { label: "ROLE", value: "Lead UX designer" },
          { label: "DOMAIN", value: "Fintech · Back-office" },
          { label: "MODULES", value: "6 · one shared record" },
          { label: "METHOD", value: "Research + personas + tests" },
          { label: "OUTPUT", value: "25+ specs · design system" },
        ]}
        cover={{
          src: "/portfolio/klbp/hero.png",
          width: 1902,
          height: 1121,
          alt: "KienlongBank Pay — dashboard mockup",
        }}
      />

      {/* ABOUT + META */}
      <section id="overview" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="dots" /></div>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About the product</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.75] text-port-body md:text-[22px]">
                KienlongBank Pay is an{" "}
                <Highlight variant="blue">integrated payment-gateway product</Highlight>. The back-office side is where the bank&apos;s partner businesses, employees, and transaction operators do their work — approving merchants, configuring fee tiers, tracking transactions, and reconciling cash flow across multiple parties.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                I led the UX for the entire back-office system across{" "}
                <Highlight variant="strong">six core modules</Highlight> — partner management, employee management, fee configuration, transaction operations, cash-flow oversight, and PayPOS integration. Each module ships to a{" "}
                <Highlight variant="blue">different internal role</Highlight>, but they share <em>one workflow engine</em>.
              </p>
              <p className="mt-4 text-lg leading-[1.7] text-port-muted">
                The flagship challenge was making a{" "}
                <Highlight>multi-role, multi-step approval workflow</Highlight> feel coherent rather than bureaucratic — with an audit trail thorough enough for banking compliance, but a UX simple enough that non-technical partner-facing staff don&apos;t need training to use it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-port-border bg-white p-8 space-y-6 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                {[
                  { icon: <Building2 className="h-4 w-4" />, label: "DOMAIN", value: "Fintech · Banking back-office" },
                  { icon: <LayoutTemplate className="h-4 w-4" />, label: "PRODUCT", value: "Payment gateway CMS — multi-module enterprise" },
                  { icon: <Users className="h-4 w-4" />, label: "ROLE", value: "Lead UX designer — research, UX, UI, handoff" },
                  { icon: <Layers className="h-4 w-4" />, label: "MODULES", value: "6 — partner, employees, fees, transactions, cash flow, PayPOS" },
                  { icon: <Search className="h-4 w-4" />, label: "METHOD", value: "User research · empathy map · personas · usability test" },
                  { icon: <ScrollText className="h-4 w-4" />, label: "OUTPUT", value: "Wireframes, prototype, design system, 25+ specs" },
                ].map(m => (
                  <div key={m.label} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-port-blue/15 text-port-blue">{m.icon}</div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[1.8px] text-port-blue">{m.label}</p>
                      <p className="mt-1 text-[15px] leading-[1.45] font-medium text-port-ink">{m.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="border-y border-port-border-soft bg-port-tint-rose">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="pulse" /></div>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Six modules, three roles, one workflow — and no shared operational surface.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-xl leading-[1.65] text-port-body">
              Before this rebuild, KienlongBank&apos;s payment operations sat across <Highlight variant="blue">scattered internal tools and spreadsheets</Highlight>. Partners, employees, and transaction operators each needed different data views but the <Highlight variant="strong">same underlying record</Highlight>. Approval steps got lost between teams; reconciliation was a monthly fire drill.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}><PainCard who="Partner-facing staff" label="FOR THE USER"
              icon={<ClipboardList className="h-5 w-5" />}
              iconBg="bg-port-blue/10" iconColor="text-port-blue" accent="text-port-blue"
              body="Approving new merchants meant chasing signatures, KYC docs, and CIF numbers across three internal tools. Errors caught at the bank compliance stage cost 3–5 days of rework." /></Reveal>
            <Reveal delay={0.08}><PainCard who="Transaction operators" label="FOR THE TEAM"
              icon={<Receipt className="h-5 w-5" />}
              iconBg="bg-port-blue/10" iconColor="text-port-blue" accent="text-port-blue"
              body="No unified view of pending vs. settled transactions. Reconciliation involved exporting CSVs from three systems and matching by hand." /></Reveal>
            <Reveal delay={0.16}><PainCard who="The bank" label="FOR THE BUSINESS"
              icon={<Layers className="h-5 w-5" />}
              iconBg="bg-port-blue/10" iconColor="text-port-blue" accent="text-port-blue"
              body="No standardized workflow to onboard partners at scale. Every new business line meant a new spreadsheet — and a new audit surface for compliance to review." /></Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-port-tint-blue">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="layers" /></div>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Three design pillars that made six modules feel like one product.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              I organized the design around <Highlight variant="blue">three pillars</Highlight> each addressing a real bottleneck. <Highlight variant="strong">Every screen in the back-office</Highlight> traces back to one of them.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}><PillarCard n="01" label="PILLAR — SHARED RECORD" title="One partner record, six module views"
              icon={<Database className="h-5 w-5" />}
              accent={SOFT_BLUE} bg="bg-white" iconBg="bg-port-blue"
              bullets={[
                "Every module reads and writes to the same partner-record schema",
                "Views are role-scoped: partner-facing staff see intake state, operators see transaction state",
                "Handoff between modules preserves state — no lost approvals mid-flow",
                "Every action is journaled with actor, timestamp, and reason",
              ]} /></Reveal>
            <Reveal delay={0.08}><PillarCard n="02" label="PILLAR — DESIGN SYSTEM" title="One component library, six-module consistency"
              icon={<LayoutTemplate className="h-5 w-5" />}
              accent={SOFT_BLUE} bg="bg-white" iconBg="bg-port-blue"
              bullets={[
                "Typography ramp + color tokens applied across every module",
                "Table, form, drawer, and modal patterns reused unchanged",
                "Status badges standardized: pending · approved · rejected · settled",
                "Icon set shared with the customer-facing Pay Page + Pay Link surface",
              ]} /></Reveal>
            <Reveal delay={0.16}><PillarCard n="03" label="PILLAR — RESEARCH-LED" title="Grounded in real operator behavior"
              icon={<Search className="h-5 w-5" />}
              accent={SOFT_BLUE} bg="bg-white" iconBg="bg-port-blue"
              bullets={[
                "Competitor teardown of Stripe, Payoo, PayME to benchmark expectations",
                "Empathy map with two operator personas (Barnett — retail, Amery — travel)",
                "IA driven by task flow, not org chart — modules organized around jobs",
                "Usability testing with internal partners refining approval flow copy",
              ]} /></Reveal>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — anchor thesis */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-8 md:px-12 md:pb-16">
          <PullQuote accent="#2D39CF" attribution="Design thesis for six-module coherence">
            One{" "}
            <span className="text-port-blue">shared record</span>, six module views —{" "}
            <span className="underline decoration-port-blue decoration-4 underline-offset-8">operators trust the system</span> because they can trace every action back to its origin.
          </PullQuote>
        </div>
      </section>

      {/* PROCESS + RESEARCH SNAPSHOT */}
      <section id="process" className="border-y border-port-border-soft bg-port-tint-gray">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="arrow" /></div>
            <Eyebrow>Process</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Five-stage design process from research to test.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14">
              <ProcessSection />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-8 xl:grid-cols-2">
              <ResearchSection />
              <DefineSection />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="flow" /></div>
            <Eyebrow>Key modules</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Six modules, each a jobs-to-be-done surface.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.06}>
                <ModuleCard n={m.n} title={m.title} body={m.body} icon={m.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM + MOCKUPS */}
      <section id="system" className="border-y border-port-border-soft bg-port-tint-blue">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="layers" /></div>
            <Eyebrow>Design system &amp; mockups</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Shared tokens, one component library, six-module consistency.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14">
              <DesignSystemSection />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <PatternsSection />
            </div>
          </Reveal>
        </div>
      </section>

      <div id="reflection" />
      <OutcomeSection
        title="What this taught me about designing at enterprise scale."
        paragraphs={[
          "The hardest part of enterprise back-office design isn't the individual screen — it's making six independently-scoped modules feel like one coherent product to the person switching between them all day. That coherence comes from three levers: shared data model, shared component library, and shared vocabulary in the UI copy.",
          "The banking-compliance requirements pushed me to design for auditability first — every action journaled, every state change visible, every reason field required. Ironically, that constraint made the UX clearer for the operator, not slower: when the interface always shows why something is in a given state, the operator spends less time investigating and more time deciding.",
        ]}
        takeaways={[
          { n: "01", label: "SHARED RECORD, ROLE-SCOPED VIEWS", text: "One data schema across modules beats six local schemas. Views are cheap; canonical records are what keep the system honest." },
          { n: "02", label: "AUDITABILITY AS UX", text: "'Why is this pending?' should never require a support ticket. The interface itself should answer that in-place." },
          { n: "03", label: "DESIGN SYSTEM = TIME COMPRESSION", text: "Six modules would have taken six times as long without a shared component library. The system paid for itself on module 2." },
        ]}
        accentClass="text-[#8CB8FF]"
      />

      <CaseNav currentSlug="klbp" />
      <Footer />
    </>
  );
}
