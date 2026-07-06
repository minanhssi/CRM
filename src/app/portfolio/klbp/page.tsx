import {
  Building2, Users, Calculator, Receipt, TrendingUp, Smartphone,
  ClipboardList, Layers, ScrollText, Database, LayoutTemplate, Search,
  AlertTriangle, GitCompareArrows, Puzzle, Compass, ShieldCheck, MessagesSquare,
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
import { MockupsSection } from "../_components/klbp/MockupsSection";
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
  title: "KienlongBank Pay — Enterprise back-office audit & redesign | Duong Ngoc Minh Anh",
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
          { id: "audit", label: "Audit" },
          { id: "approach", label: "Approach" },
          { id: "process", label: "Process" },
          { id: "modules", label: "Modules" },
          { id: "system", label: "System" },
          { id: "validation", label: "Validation" },
          { id: "reflection", label: "Reflection" },
        ]}
      />

      <CaseHero
        caseNumber="CASE STUDY · 01 / 04"
        eyebrow="Fintech · Banking back-office"
        title={<>KienlongBank Pay — <span className="text-port-blue">back-office</span> for a payment gateway.</>}
        subtitle="Multi-module enterprise CMS: partner approval, employee management, transaction tracking, and configurable cash-flow workflows for a fintech product at scale."
        tags={["ENTERPRISE CMS", "MULTI-ROLE WORKFLOW", "DESIGN SYSTEM", "BANKING"]}
        eyebrowColor="cream"
        accentClass="text-port-blue"
        heroTint="blue"
        decoVariant="connect"
        decoColor={BLUE}
        keyFacts={[
          { label: "ROLE", value: "Lead UX/UI Designer" },
          { label: "MODULES", value: "6 · one shared record" },
          { label: "METHOD", value: "Research + personas + tests" },
          { label: "OUTPUT", value: "25+ specs · design system" },
        ]}
        cover={{
          src: "/portfolio/mockup-klbp.svg",
          width: 1507,
          height: 893,
          alt: "KienlongBank Pay — dashboard + QR modal mockup",
        }}
        coverBg="dark"
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
                <Highlight variant="blue">integrated payment-gateway product</Highlight> connecting the bank&apos;s partner businesses to card, QR, and payment-link rails. The back-office side is where partner-facing staff, employees, and transaction operators handle merchant approval, fee configuration, transaction tracking, and cash-flow reconciliation across multiple parties.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                I <Highlight variant="strong">took over the back-office system</Highlight> from another team already in-flight. The scope was to review the existing product direction, run a{" "}
                <Highlight variant="blue">UX audit</Highlight> across the six modules that had already been built or scoped, benchmark against comparable payment back-offices, and rework the experience for <em>consistency, clarity, and scale</em> — rather than starting from a blank sheet.
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
                  { icon: <Users className="h-4 w-4" />, label: "ROLE", value: "Lead UX/UI — research, UX, UI, dev handoff" },
                  { icon: <Layers className="h-4 w-4" />, label: "MODULES", value: "6 — partner, employees, fees, transactions, cash flow, PayPOS" },
                  { icon: <Search className="h-4 w-4" />, label: "METHOD", value: "Product audit · competitor research · IA rework · design system" },
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
              Before this pass, the six back-office modules had each grown their own patterns. Partner-facing staff, employees, and transaction operators each needed different data views, but they were reading and writing to the <Highlight variant="strong">same underlying record</Highlight> — with <Highlight variant="blue">inconsistent forms, ad-hoc status labels, and navigation</Highlight> that assumed the operator already knew where each module started and ended. Approval steps got lost between teams; reconciliation was a recurring firefight.
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

      {/* PRODUCT AUDIT */}
      <section id="audit" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="dots" /></div>
            <Eyebrow>Product audit</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              What the audit surfaced — four buckets of UX debt.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              The first phase was a structured review of the existing screens, flows, and stakeholder interviews — with a heuristic pass against Nielsen&apos;s ten and a competitor benchmark against comparable payment back-offices. The findings clustered into four themes that the redesign later addressed.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <Puzzle className="h-5 w-5" />,
                title: "Inconsistent component patterns",
                body: "Forms, tables, and status displays had drifted per module. A partner-intake form and a fee-configuration form used two different date pickers, two different validation styles, and three different button hierarchies — the same visual vocabulary answered differently on each screen.",
              },
              {
                icon: <Compass className="h-5 w-5" />,
                title: "Weak module hierarchy",
                body: "Modules were sequenced in the navigation by build order rather than by operator workflow. First-time users hit Fee Configuration before they had a partner to configure fees for — the mental model didn't match the task order.",
              },
              {
                icon: <AlertTriangle className="h-5 w-5" />,
                title: "Ambiguous transaction states",
                body: "Pending, processing, in-review, awaiting-settlement, and settled were all treated visually the same way, forcing operators to read the exact state name to differentiate. Status was carried by text alone, not by shape or icon.",
              },
              {
                icon: <Database className="h-5 w-5" />,
                title: "Duplicated data entry",
                body: "Partner records touched by three teams often ended up with three slightly different phone numbers or contact emails, because there was no single record of truth — each module wrote its own copy of the same fields.",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-port-blue/10 text-port-blue">{f.icon}</div>
                  <h3 className="text-xl font-semibold text-port-ink">{f.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-port-body">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Competitor insight callout */}
          <Reveal delay={0.24}>
            <div className="mt-10 rounded-2xl border border-port-blue/20 bg-port-tint-blue/40 p-8">
              <p className={`text-[11px] font-semibold tracking-[2px] ${SOFT_BLUE}`}>
                <GitCompareArrows className="mr-1 inline h-4 w-4 align-[-3px]" />
                COMPETITOR REVIEW · WHAT MATURE BACK-OFFICES DO
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-port-body">
                Reviewed several comparable payment back-offices to understand how mature platforms handle transaction visibility, partner onboarding, and multi-role workflows. Four patterns surfaced as worth adopting:
              </p>
              <ul className="mt-4 grid gap-2 text-[14px] leading-[1.55] text-port-body md:grid-cols-2">
                {[
                  "Transaction state uses color + shape + label together — never color alone",
                  "Partner and employee roles are surfaced in the UI, not just enforced in the backend",
                  "Auditability is treated as a first-class UX concern, not a support-team afterthought",
                  "Dashboards reward daily monitoring rather than executive reporting — operators live here",
                ].map(pt => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-blue" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-port-tint-blue">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="layers" /></div>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Kept six modules coherent through shared record, shared library, and research-led IA.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              The audit surfaced the same root cause in three different symptoms — six modules had each answered the same design question differently. I anchored the redesign around <Highlight variant="blue">three shared substrates</Highlight> that stay honest as engineering ships modules in parallel: one <Highlight variant="strong">canonical partner record</Highlight>, one component library reused across every surface, and an information architecture organized by operational task rather than by org chart.
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
            <Reveal delay={0.08}><PillarCard n="02" label="PILLAR — DESIGN SYSTEM" title="Component library tuned for cross-module reuse"
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
                "IA driven by task flow, not org chart — modules organized around jobs",
                "Usability testing with internal partners refining approval flow copy",
                "Every state change carries a reason string so ops never asks 'why?'",
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
            <div className="mt-10 space-y-8">
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
              <MockupsSection />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALIDATION & ACCESSIBILITY */}
      <section id="validation" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={SOFT_BLUE}><SectionDeco variant="pulse" /></div>
            <Eyebrow>Validation &amp; accessibility</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              How the redesign was validated — and how it stayed accessible.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              There was no formal usability study on this project — banking back-offices sit behind an internal-user wall, and the timeline didn&apos;t allow one. Validation happened through structured stakeholder reviews across the phases the design touched, and accessibility was enforced at the component-library layer so every module inherited the same baseline.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-port-blue/10 text-port-blue">
                  <MessagesSquare className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-port-ink">How the redesign was validated</h3>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.55] text-port-body">
                  {[
                    "Walkthroughs with Product Owner, BA, and engineering — checking every flow against the business rules and technical constraints they'd flagged during audit",
                    "Design reviews against the bank's compliance requirements — every state that carries legal weight was reviewed with the compliance stakeholder before shipping",
                    "Cross-module consistency audits — checking that every button, badge, and form pattern resolved back to the same design-system token",
                    "Business-rule alignment sessions with payment-ops and fraud teams to close gaps between the intended workflow and the shipped UI",
                  ].map(pt => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-blue" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-port-border/70 pt-4 text-[13px] leading-[1.55] italic text-port-muted">
                  Feedback from these sessions led to simpler navigation labels, clearer status labels, tighter form grouping, and a refined dashboard hierarchy.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-port-blue/10 text-port-blue">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-port-ink">Accessibility baked into the system</h3>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.55] text-port-body">
                  {[
                    "Type ramp meeting readable minimums across data-dense tables and dashboards",
                    "Status labels always icon + text — never color alone — so colorblind operators read the same thing",
                    "Form labels visible above every field at every input width — no floating-label collapse on small viewports",
                    "Focus + interactive states standardized in the component library so keyboard operators see the same feedback everywhere",
                    "Predictable navigation patterns — the same shell across modules so operators build muscle memory once",
                  ].map(pt => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-blue" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-port-border/70 pt-4 text-[13px] leading-[1.55] italic text-port-muted">
                  Because these rules were enforced at the library layer, every module inherited the same baseline without designers re-checking each screen.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Collaboration note */}
          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-port-blue/20 bg-port-tint-blue/40 p-8">
              <p className={`text-[11px] font-semibold tracking-[2px] ${SOFT_BLUE}`}>
                <Users className="mr-1 inline h-4 w-4 align-[-3px]" />
                COLLABORATION · WHO SHAPED THE DESIGN
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-port-body">
                Every design decision was aligned with the people who owned the business rules, the code, and the operational reality: <strong className="font-semibold text-port-ink">Product Owner and Product Manager</strong> for scope and priority, <strong className="font-semibold text-port-ink">Business Analysts</strong> for the compliance and workflow rules, <strong className="font-semibold text-port-ink">Engineering</strong> for feasibility and the shared component contract, <strong className="font-semibold text-port-ink">QA</strong> for edge cases the audit had missed, and <strong className="font-semibold text-port-ink">banking + payment-ops stakeholders</strong> for the operational context the earlier team hadn&apos;t had time to surface.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="reflection" />
      <OutcomeSection
        title="What this taught me about designing an inherited enterprise product."
        paragraphs={[
          "Taking over an inherited enterprise product taught me that most of the design work happens before you draw a new screen. The first weeks were almost entirely product audit — mapping how each module actually behaved, where patterns had diverged, and which parts of the workflow the earlier team had chosen not to invest in. That audit is what let the redesign focus on shared substrates rather than surface polish.",
          "Enterprise UX is often about improving an existing system rather than starting from zero. The redesign aimed to make six modules feel like one coherent product for the operator switching between them all day. That coherence came from three levers I'd hit again next time — shared data model, shared component library, and shared vocabulary in the UI copy — and from treating auditability as a UX concern rather than a compliance checkbox.",
        ]}
        takeaways={[
          { n: "01", label: "AUDIT BEFORE ARTIFACT", text: "Understanding what already exists and where it drifts is where most of the value lives. New pixels come after the map is drawn." },
          { n: "02", label: "CONSISTENCY IS A UX LEVER", text: "In multi-module products, small pattern inconsistencies compound into big cognitive load. A shared library isn't decoration — it's the operator's memory." },
          { n: "03", label: "DESIGN FOR THE HAND-OFF", text: "Enterprise design isn't finished in Figma. It's finished when engineering can ship a new module in the same shell without asking a designer to define every state." },
        ]}
        accentClass="text-[#8CB8FF]"
      />

      <CaseNav currentSlug="klbp" />
      <Footer />
    </>
  );
}
