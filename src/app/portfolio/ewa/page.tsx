import {
  Smartphone, LayoutDashboard, Wallet, ClipboardList, Building2,
  Zap, MessageSquareText, Layers, Users, Search, ScrollText, HeartHandshake, Briefcase,
  Calendar, Calculator, ShieldCheck, Landmark, UserCog, Cog, FileCheck2, MessagesSquare,
} from "lucide-react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Eyebrow } from "../_components/Eyebrow";
import { Reveal } from "../_components/Reveal";
import { CaseHero } from "../_components/CaseHero";
import { PainCard } from "../_components/PainCard";
import { OutcomeSection } from "../_components/OutcomeSection";
import { SectionDeco } from "../_components/SectionDeco";
import { ImageBanner } from "../_components/ImageBanner";
import { ScrollProgress } from "../_components/ScrollProgress";
import { TocSidebar } from "../_components/TocSidebar";
import { CaseNav } from "../_components/CaseNav";
import { Highlight } from "../_components/Highlight";
import { PullQuote } from "../_components/PullQuote";

export const metadata = {
  title: "Earned Wage Access — mobile + admin portal payroll product | Duong Ngoc Minh Anh",
};

const INDIGO = "#4F5BD5";
const INDIGO_TEXT = "text-[#4F5BD5]";

const PLATFORMS = [
  {
    n: "01", kind: "MOBILE · WORKER", title: "Worker mobile app",
    body: "The primary experience where employees can view their earned wages and request withdrawals anytime. The flow was optimized to minimize friction, letting users complete a withdrawal request in just a few steps.",
    icon: <Smartphone className="h-5 w-5" />,
    jobs: [
      "View available earned wage balance",
      "Request a withdrawal in 3 taps",
      "Track request status and history",
      "Receive notifications after approval",
    ],
  },
  {
    n: "02", kind: "WEB · HR / ADMIN", title: "Company admin portal",
    body: "A management portal that enables HR teams to configure earned-wage policies and process employee withdrawal requests efficiently.",
    icon: <LayoutDashboard className="h-5 w-5" />,
    jobs: [
      "Configure withdrawal rules and limits",
      "Review, approve or reject requests",
      "Manage employees and withdrawal limits",
      "Export payroll reconciliation reports",
    ],
  },
];

export default function EWACaseStudy() {
  return (
    <>
      <ScrollProgress color="#4F5BD5" />
      <Header />
      <TocSidebar
        accent="#4F5BD5"
        sections={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "Problem" },
          { id: "constraints", label: "Constraints" },
          { id: "stakeholders", label: "Stakeholders" },
          { id: "workflow", label: "Workflow" },
          { id: "approach", label: "Platforms" },
          { id: "mockups", label: "Mockups" },
          { id: "validation", label: "Validation" },
          { id: "reflection", label: "Reflection" },
        ]}
      />

      <CaseHero
        caseNumber="CASE STUDY · 02 / 04"
        eyebrow="Fintech · Payroll on demand"
        title={<><span className="text-port-blue">Earned Wage Access</span> — pay workers 24/7, on the wages they already earned.</>}
        subtitle="Designed the two touchpoints I owned in this B2B2C payroll workflow — the worker mobile app and the HR admin portal — letting employees withdraw earned wages anytime without payday loans."
        tags={["MOBILE + ADMIN PORTAL", "CONNECTED WORKFLOW", "PAYROLL / FINTECH", "B2B2C"]}
        eyebrowColor="cream"
        accentClass="text-port-blue"
        heroTint="lavender"
        decoVariant="wave"
        decoColor={INDIGO}
        keyFacts={[
          { label: "ROLE", value: "Sole UX/UI Designer" },
          { label: "PLATFORMS", value: "2 · mobile + web admin" },
          { label: "METHOD", value: "Stakeholder validation · flow reviews · design critiques" },
          { label: "FOCUS", value: "Connected workflow across worker + admin" },
        ]}
        cover={{
          src: "/portfolio/Thumbnail-EWA-PNG.png",
          width: 1294,
          height: 728,
          alt: "Earned Wage Access — mobile app mockup with balance, calendar, and transaction cards",
        }}
      />

      {/* ABOUT */}
      <section id="overview" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="dots" /></div>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About Earned Wage Access</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.75] text-port-body md:text-[22px]">
                An <Highlight variant="blue">on-demand pay solution</Highlight> by KienlongBank — letting workers withdraw a portion of their already-earned wages{" "}
                <Highlight variant="strong">anytime, 24/7</Highlight>, without waiting for the regular payday.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                The wider ecosystem is B2B2C, but my design scope focused on the{" "}
                <Highlight variant="blue">two touchpoints that own the withdrawal workflow</Highlight> — the worker mobile app and the HR admin portal. Together they replace ad-hoc payday loans with a{" "}
                <Highlight>controlled, auditable</Highlight> request-and-approval loop.
              </p>
              <p className="mt-4 text-lg leading-[1.7] text-port-muted">
                On these two products I owned UX end-to-end: research, information architecture, user flows, wireframes, prototypes, high-fidelity UI, and dev handoff.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-port-border bg-white p-8 space-y-6 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                {[
                  { icon: <Briefcase className="h-4 w-4" />, label: "DOMAIN", value: "Fintech · Payroll / HR" },
                  { icon: <Users className="h-4 w-4" />, label: "ROLE", value: "Sole UX/UI — research, UX, UI, dev handoff" },
                  { icon: <Layers className="h-4 w-4" />, label: "PLATFORMS", value: "2 — worker mobile app · HR admin portal" },
                  { icon: <HeartHandshake className="h-4 w-4" />, label: "TEAM", value: "Product owner + engineering" },
                  { icon: <Search className="h-4 w-4" />, label: "METHOD", value: "Stakeholder walkthroughs · prototype reviews · flow reviews" },
                  { icon: <ScrollText className="h-4 w-4" />, label: "DELIVERABLES", value: "Flows, wireframes, prototype, design specs" },
                ].map(m => (
                  <div key={m.label} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[#4F5BD5]" style={{ backgroundColor: "rgba(79,91,213,0.15)" }}>{m.icon}</div>
                    <div>
                      <p className={`text-[11px] font-semibold tracking-[1.8px] ${INDIGO_TEXT}`}>{m.label}</p>
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
            <div className={INDIGO_TEXT}><SectionDeco variant="pulse" /></div>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Workers needed faster access to wages they had already earned.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-xl leading-[1.65] text-port-body">
              Traditional monthly payroll left many workers <Highlight variant="blue">cash-strapped mid-month</Highlight>. Without a fast, trustworthy way to draw earned wages, they often turned to <Highlight variant="strong">short-term loans with high interest</Highlight> — creating a financial-stress loop the company wanted to break for its partner employees.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}><PainCard who="Workers" label="FOR USERS"
              icon={<Wallet className="h-5 w-5" />}
              iconBg="bg-[#4F5BD5]/10" iconColor={INDIGO_TEXT} accent={INDIGO_TEXT}
              body="Unpredictable cash needs mid-month. With no structured way to access earned wages early, many fell into payday-loan debt cycles." /></Reveal>
            <Reveal delay={0.08}><PainCard who="HR & companies" label="FOR ADMINS"
              icon={<ClipboardList className="h-5 w-5" />}
              iconBg="bg-[#4F5BD5]/10" iconColor={INDIGO_TEXT} accent={INDIGO_TEXT}
              body="Manual advance requests created paperwork burden, inconsistent approval rules, and no clear audit trail of who borrowed how much." /></Reveal>
            <Reveal delay={0.16}><PainCard who="The bank" label="FOR THE BUSINESS"
              icon={<Building2 className="h-5 w-5" />}
              iconBg="bg-[#4F5BD5]/10" iconColor={INDIGO_TEXT} accent={INDIGO_TEXT}
              body="No standardized B2B2C workflow to deliver earned-wage services at scale across multiple partner companies." /></Reveal>
          </div>
        </div>
      </section>

      {/* PRODUCT CONSTRAINTS */}
      <section id="constraints" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="layers" /></div>
            <Eyebrow>Product constraints</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              The rules that shaped every design decision.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              An Earned Wage Access product sits inside a live payroll system — every screen has to respect the underlying financial and operational rules. These constraints weren&apos;t obstacles to design around; they were the shape of the product itself.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Calendar className="h-5 w-5" />, title: "Payroll cycle", body: "Withdrawal windows had to align with the company's payroll close date. Requests during cutoff windows behave differently than requests early in the month." },
              { icon: <Calculator className="h-5 w-5" />, title: "Salary calculation", body: "Earned wage is a computed value — accrued days × daily rate, minus prior withdrawals, minus deductions, capped at a company-defined percentage. The UI never invents a number." },
              { icon: <ClipboardList className="h-5 w-5" />, title: "Employer approval", body: "Some companies auto-approve; others require HR review. The same request UI has to render both flows without confusing the worker about what happens next." },
              { icon: <Wallet className="h-5 w-5" />, title: "Available balance", body: "'Earned' is what you've worked for. 'Available' is what you can withdraw right now. These are two different numbers and the copy has to keep them apart." },
              { icon: <FileCheck2 className="h-5 w-5" />, title: "Transaction status", body: "Pending, approved, rejected, processing, sent, received, failed — every state maps to a specific place in the payroll + banking pipeline and needs its own label." },
              { icon: <Landmark className="h-5 w-5" />, title: "Banking transfer", body: "The actual money move is on third-party bank rails with their own SLAs. The UX has to hold the worker's trust across a gap the design doesn't fully control." },
              { icon: <UserCog className="h-5 w-5" />, title: "Permission & role control", body: "Worker sees their own record only. HR sees their company. Admin sees the platform. The same schema, three visibility layers — enforced in the UI, not just the API." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "Audit trail", body: "Every state change carries actor, timestamp, and reason. This isn't decorative — it's what makes the product usable by compliance and finance teams downstream." },
              { icon: <Layers className="h-5 w-5" />, title: "Data consistency across surfaces", body: "The worker's request and the HR's queue item are the same record seen from two angles. State on one side must be truthful on the other — always." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#4F5BD5]/10 text-[#4F5BD5]">{c.icon}</div>
                  <h3 className="text-[16px] font-semibold text-port-ink">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-port-body">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAKEHOLDERS */}
      <section id="stakeholders" className="border-y border-port-border-soft bg-port-tint-blue">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="dots" /></div>
            <Eyebrow>Stakeholder map</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              A connected workflow, not a mobile app.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Every withdrawal touches at least five parties in sequence. Understanding what each party needs, owns, and cares about is what turned "design a mobile app" into <Highlight variant="blue">design a payroll workflow that has a mobile face</Highlight>.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Users className="h-5 w-5" />, who: "Worker / employee", needs: "A trustworthy way to check what they've earned and request part of it before payday.", owns: "Their own withdrawal history and request state.", cares: "Balance clarity, request status, expected arrival time." },
              { icon: <Briefcase className="h-5 w-5" />, who: "Employer / HR admin", needs: "A control surface to configure policy and process requests without spreadsheets.", owns: "Company withdrawal policy, employee eligibility, request approvals.", cares: "Volume of requests, exceptions, monthly reconciliation." },
              { icon: <Calculator className="h-5 w-5" />, who: "Payroll / finance team", needs: "Reliable per-employee deduction records that flow back into the monthly payroll run.", owns: "Deductions, reconciliation, month-end close.", cares: "Data integrity, timing against payroll cutoff, no manual patches." },
              { icon: <Landmark className="h-5 w-5" />, who: "Banking / payment provider", needs: "Valid transfer instructions and a callback to confirm settlement.", owns: "The actual money movement on bank rails.", cares: "Correct amount, valid account, retry / failure handling." },
              { icon: <Cog className="h-5 w-5" />, who: "Product / operations team", needs: "Visibility into what's happening across the system so edge cases don't reach the worker as silent failures.", owns: "Monitoring, exception handling, support paths.", cares: "Failed transfers, stuck approvals, disputed requests." },
              { icon: <ShieldCheck className="h-5 w-5" />, who: "Compliance & audit", needs: "A journal of who did what, when, and why — accessible without engineering support.", owns: "Regulatory posture on wage advances.", cares: "Auditability, actor + timestamp + reason on every state change." },
            ].map((s, i) => (
              <Reveal key={s.who} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F5BD5] text-white">{s.icon}</div>
                  <h3 className="text-[17px] font-semibold text-port-ink">{s.who}</h3>
                  <dl className="mt-4 space-y-3 text-[13px] leading-[1.5]">
                    <div>
                      <dt className={`text-[10px] font-semibold tracking-[1.5px] ${INDIGO_TEXT}`}>NEEDS</dt>
                      <dd className="mt-1 text-port-body">{s.needs}</dd>
                    </div>
                    <div>
                      <dt className={`text-[10px] font-semibold tracking-[1.5px] ${INDIGO_TEXT}`}>OWNS</dt>
                      <dd className="mt-1 text-port-body">{s.owns}</dd>
                    </div>
                    <div>
                      <dt className={`text-[10px] font-semibold tracking-[1.5px] ${INDIGO_TEXT}`}>CARES ABOUT</dt>
                      <dd className="mt-1 text-port-body">{s.cares}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="flow" /></div>
            <Eyebrow>End-to-end workflow</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              One request travels through seven checkpoints.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              A withdrawal starts as a tap in the worker&apos;s hand and ends as a settled transfer in their bank account — with five intermediate states each owned by a different team. The UI has to make the current position on this path visible on both surfaces at all times.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-7">
            {[
              { n: "01", title: "Check available wage", who: "WORKER" },
              { n: "02", title: "Submit request", who: "WORKER" },
              { n: "03", title: "System / HR validation", who: "HR ADMIN" },
              { n: "04", title: "Payroll record check", who: "FINANCE" },
              { n: "05", title: "Payment processed", who: "BANK" },
              { n: "06", title: "Worker receives money", who: "WORKER" },
              { n: "07", title: "Status updated across surfaces", who: "SYSTEM" },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04}>
                <div className="relative flex h-full flex-col rounded-xl border border-port-border bg-white p-5">
                  <p className={`font-bold text-2xl ${INDIGO_TEXT}`}>{step.n}</p>
                  <p className={`mt-2 text-[9px] font-semibold tracking-[1.4px] ${INDIGO_TEXT}`}>{step.who}</p>
                  <p className="mt-2 text-[13px] font-medium leading-[1.4] text-port-ink">{step.title}</p>
                  {i < 6 && (
                    <span aria-hidden className={`absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block ${INDIGO_TEXT}`}>→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH — 3 PLATFORMS */}
      <section id="approach" className="bg-port-tint-lavender">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="layers" /></div>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Designing two key touchpoints in a connected payroll workflow.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Although the Earned Wage Access ecosystem includes multiple touchpoints, my design scope focused on the <Highlight variant="blue">worker mobile app</Highlight> and the <Highlight variant="blue">company admin portal</Highlight>. The worker initiates a withdrawal through the app, while HR reviews and manages requests in the portal. I designed both around the <Highlight variant="strong">same information architecture and business rules</Highlight> to keep the workflow consistent between employees and administrators.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 md:max-w-5xl md:mx-auto">
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-9 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                  <div className="flex items-center justify-between">
                    <p className={`font-bold text-4xl ${INDIGO_TEXT}`}>{p.n}</p>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F5BD5] text-white">{p.icon}</div>
                  </div>
                  <span className={`mt-4 inline-block rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-[1.5px] ${INDIGO_TEXT}`}>{p.kind}</span>
                  <h3 className="mt-4 text-xl font-semibold text-port-ink">{p.title}</h3>
                  <p className="mt-3 text-[14px] leading-[1.55] text-port-body">{p.body}</p>
                  <p className="mt-5 text-[11px] font-semibold tracking-[1.8px] text-port-muted">KEY JOBS</p>
                  <ul className="mt-3 space-y-2 text-[14px] leading-[1.5] text-port-body">
                    {p.jobs.map(j => (
                      <li key={j} className="flex gap-2">
                        <span className={INDIGO_TEXT}>→</span>
                        <span>{j}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section id="mockups" className="border-y border-port-border-soft bg-port-tint-gray">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="arrow" /></div>
            <Eyebrow>Mockups</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Two surfaces, one shared workflow.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14">
              <ImageBanner
                src="/portfolio/ewa/mockups.png"
                alt="EWA mockups across mobile app and admin portal"
                width={1920}
                height={2138}
                caption="Mockups — worker mobile app and HR admin portal"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-8 md:px-12 md:pb-16">
          <PullQuote accent="#4F5BD5" attribution="Design principle for connected surfaces">
            Design the{" "}
            <span className="text-[#4F5BD5]">data model</span> before the UI — two roles seeing one shared record is the{" "}
            <span className="underline decoration-[#4F5BD5] decoration-4 underline-offset-8">honest broker</span>.
          </PullQuote>
        </div>
      </section>

      {/* COMPONENT / SYSTEM THINKING */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-28 md:px-12 md:pb-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="layers" /></div>
            <Eyebrow>Component thinking</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              A shared pattern library across worker and admin.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              To keep the two surfaces from drifting into different products, I designed the visual + interaction patterns once and reused them across both. The same request card, the same status vocabulary, the same empty state — read the same way on a phone in a worker&apos;s hand and a browser on an HR desk.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Request status component", body: "One badge design, one color-shape-label mapping, one set of states — pending, approved, rejected, processing, sent, received, failed. Reused unchanged on both surfaces." },
              { title: "Tables + filters", body: "Admin queue tables use one table primitive with a shared filter model. Adding a new column or filter type doesn't force a re-design." },
              { title: "Form structures", body: "Same field groups, same validation copy, same helper-text pattern across worker request form and admin policy form. Field labels stay above the input at every breakpoint." },
              { title: "Timeline / history", body: "A single event-log primitive renders the worker's request history and the admin's audit trail — both read as the same story from different angles." },
              { title: "Balance & summary cards", body: "One card family for money-related values with strict rules for label + amount + unit + secondary context, so 'earned' and 'available' can never render the same way by accident." },
              { title: "State vocabulary", body: "Empty, loading, pending, success, failure, and rejected states each have a design + copy pattern. New screens compose from these instead of inventing per-screen states." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-6">
                  <h3 className="text-[15px] font-semibold text-port-ink">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-port-body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section id="validation" className="border-y border-port-border-soft bg-port-tint-blue">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="flow" /></div>
            <Eyebrow>Validation</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              How the design was validated without formal user testing.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_420px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.7] text-port-body">
                A B2B2C payroll product sits behind an NDA wall — direct access to end workers wasn&apos;t feasible in the design phase, and the timeline didn&apos;t support a formal usability study. Validation happened through the review paths that were available: <Highlight variant="blue">stakeholder walkthroughs, prototype critiques, and flow reviews</Highlight> with the people who owned the business rules and the code.
              </p>
              <p className="mt-5 text-lg leading-[1.7] text-port-body">
                Each review focused on a different lens — Product Owner and BA on business rules, engineering on feasibility, payroll and finance on record integrity, operations on edge cases. Feedback from these sessions <Highlight variant="strong">refined the design</Highlight> before the first line of production code shipped.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <MessagesSquare className="h-5 w-5" />, label: "REFINED AFTER FEEDBACK", text: "Simplified request form — trimmed optional fields flagged by the product owner as adding friction without adding audit value." },
                  { icon: <FileCheck2 className="h-5 w-5" />, label: "REFINED AFTER FEEDBACK", text: "Clearer status naming — 'processing' vs 'sent' vs 'received' surfaced after payment-ops walked through the actual bank-callback flow." },
                  { icon: <LayoutDashboard className="h-5 w-5" />, label: "REFINED AFTER FEEDBACK", text: "Improved admin filtering — HR flagged that batch approval across many workers needed status + date + department filters together." },
                  { icon: <Wallet className="h-5 w-5" />, label: "REFINED AFTER FEEDBACK", text: "Clearer balance explanation — payroll team highlighted the risk of confusing 'earned' with 'available'; the balance card rewrote to keep both visible together." },
                ].map((o, i) => (
                  <div key={i} className="flex gap-4 rounded-xl border border-port-border bg-white p-6">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4F5BD5] text-white">{o.icon}</div>
                    <div>
                      <p className={`text-[11px] font-semibold tracking-[1.8px] ${INDIGO_TEXT}`}>{o.label}</p>
                      <p className="mt-2 text-[15px] leading-[1.5] font-medium text-port-ink">{o.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Collaboration note */}
          <Reveal delay={0.3}>
            <div className="mt-10 rounded-2xl border border-port-blue/20 bg-white/60 p-8">
              <p className={`text-[11px] font-semibold tracking-[2px] ${INDIGO_TEXT}`}>
                <Users className="mr-1 inline h-4 w-4 align-[-3px]" />
                COLLABORATION · WHO SHAPED THE DESIGN
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-port-body">
                Design decisions were reviewed against three lenses at every checkpoint: <strong className="font-semibold text-port-ink">business rules</strong> with the Product Owner, Product Manager, and Business Analyst; <strong className="font-semibold text-port-ink">technical feasibility</strong> with engineering — including which states the payroll + banking APIs could actually surface; and <strong className="font-semibold text-port-ink">operational reality</strong> with the payroll / finance team, operations, and QA. Each conversation shifted the design closer to a workflow the whole system could sustain, not just a UI that looked right.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="reflection" />
      <OutcomeSection
        title="What designing a payroll product taught me about enterprise UX."
        paragraphs={[
          "Payroll-related products are less about isolated screens and more about preserving data integrity across connected systems. One worker action can affect HR, payroll, finance, and payment operations in sequence, so the UX has to make every state clear and traceable — on both the worker's phone and the HR admin's browser, at the same time, with the same meaning.",
          "The design work that mattered most on this project was the work that happened before any high-fidelity screen: mapping constraints, drawing the workflow, naming stakeholders and what they owned, deciding the vocabulary for status. When those foundations were honest, the two surfaces almost designed themselves. When they were fuzzy, no amount of visual polish covered it up.",
        ]}
        takeaways={[
          { n: "01", label: "CONNECTED SYSTEMS, NOT SCREENS", text: "Enterprise UX in payroll is about maintaining workflow consistency across worker, HR, payroll, banking, and operations — not about designing individual screens in isolation." },
          { n: "02", label: "TRUST IS BUILT ON STATUS CLARITY", text: "In a financial product, worker trust lives in the status field. If they can't tell what happened to their request, no amount of visual polish makes up for it." },
          { n: "03", label: "DATA INTEGRITY IS THE UX", text: "The worker's request and the HR's queue item are the same record seen from two angles. Designing that record honestly is 80% of the work — the two surfaces are what falls out of that decision." },
        ]}
        accentClass="text-[#8CB8FF]"
      />

      <CaseNav currentSlug="ewa" />
      <Footer />
    </>
  );
}
