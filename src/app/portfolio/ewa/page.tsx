import {
  Smartphone, Monitor, LayoutDashboard, Wallet, ClipboardList, Building2,
  Zap, MessageSquareText, Layers, Users, Search, ScrollText, HeartHandshake, Briefcase,
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
  title: "Earned Wage Access — 3-platform payroll product | Duong Ngoc Minh Anh",
};

const INDIGO = "#4F5BD5";
const INDIGO_TEXT = "text-[#4F5BD5]";

const PLATFORMS = [
  {
    n: "01", kind: "MOBILE · WORKER", title: "Worker mobile app",
    body: "The primary surface where employees discover and request earned-wage withdrawals. Designed for one-handed, 3-tap flow.",
    icon: <Smartphone className="h-5 w-5" />,
    jobs: [
      "View remaining earned balance at a glance",
      "Request withdrawal in 3 taps",
      "Track request status & history",
      "Receive push notifications for approval",
    ],
  },
  {
    n: "02", kind: "WEB · HR / ADMIN", title: "Company admin portal",
    body: "Configuration + approval cockpit for HR. Sets up advance rules, monthly limits, and reviews incoming requests.",
    icon: <LayoutDashboard className="h-5 w-5" />,
    jobs: [
      "Configure advance rules per employee tier",
      "Review & approve / reject requests",
      "Manage employee list & their limits",
      "Export reports for payroll reconciliation",
    ],
  },
  {
    n: "03", kind: "WEB · WORKER", title: "Worker web view",
    body: "Lightweight desktop companion to the mobile app — used at-work for detailed history and balance verification.",
    icon: <Monitor className="h-5 w-5" />,
    jobs: [
      "View detailed transaction history",
      "Check exact earned balance & cap",
      "Manage account & connected info",
      "View remaining advance allowance",
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
          { id: "approach", label: "Platforms" },
          { id: "mockups", label: "Mockups" },
          { id: "validation", label: "Validation" },
          { id: "reflection", label: "Reflection" },
        ]}
      />

      <CaseHero
        caseNumber="CASE STUDY · 02 / 04"
        eyebrow="Case study 02 — Fintech × HR"
        title={<><span className="text-[#8CB8FF]">Earned Wage Access</span> — pay workers 24/7, on the wages they already earned.</>}
        subtitle="End-to-end design across three connected platforms — worker mobile app, company admin portal, and worker web — letting employees withdraw earned wages anytime without payday loans."
        tags={["3-PLATFORM PRODUCT", "USER TESTING", "PAYROLL WORKFLOW", "B2B2C"]}
        eyebrowColor="cream"
        accentClass="text-[#8CB8FF]"
        decoVariant="wave"
        decoColor={INDIGO}
        keyFacts={[
          { label: "ROLE", value: "Solo UX Designer" },
          { label: "DOMAIN", value: "Fintech · Payroll / HR" },
          { label: "PLATFORMS", value: "3 · mobile + 2 web" },
          { label: "METHOD", value: "3 rounds of usability tests" },
          { label: "OUTCOME", value: "Flow 6 → 3 perceived steps" },
        ]}
      />

      {/* COVER SNAPSHOT */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 pt-16 md:px-12 md:pt-24">
          <ImageBanner
            src="/portfolio/ewa/hero.png"
            alt="Earned Wage Access — case study cover"
            width={2064}
            height={1440}
            caption="Case study cover — Earned Wage Access"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="overview" className="bg-port-cream">
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
                The product spans{" "}
                <Highlight variant="blue">three connected platforms</Highlight> — a worker mobile app for self-service requests, a company admin portal for HR configuration and approval, and a worker web view to track history and remaining balance. Together they replace ad-hoc payday loans with a{" "}
                <Highlight>controlled, auditable B2B2C workflow</Highlight>.
              </p>
              <p className="mt-4 text-lg leading-[1.7] text-port-muted">
                I owned UX end-to-end for all three platforms: research, information architecture, user flows, wireframes, prototypes, high-fidelity UI, and dev handoff.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-port-cream-light p-8 space-y-6">
                {[
                  { icon: <Briefcase className="h-4 w-4" />, label: "DOMAIN", value: "Fintech · Payroll / HR" },
                  { icon: <Users className="h-4 w-4" />, label: "ROLE", value: "Solo UX Designer — Research, UX, UI, handoff" },
                  { icon: <Layers className="h-4 w-4" />, label: "PLATFORMS", value: "3 — worker mobile · admin portal · worker web" },
                  { icon: <HeartHandshake className="h-4 w-4" />, label: "TEAM", value: "Product owner + engineering" },
                  { icon: <Search className="h-4 w-4" />, label: "METHOD", value: "User interviews + in-company usability testing" },
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
      <section id="problem" className="bg-port-cream-light">
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
              Traditional monthly payroll left many workers cash-strapped mid-month. Without a fast, trustworthy way to draw earned wages, they often turned to short-term loans with high interest — creating a financial-stress loop the company wanted to break for its partner employees.
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

      {/* APPROACH — 3 PLATFORMS */}
      <section id="approach" className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="layers" /></div>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Designing across three connected platforms.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Each platform serves a different actor, but they share one workflow — a request originated on mobile is reviewed in the admin portal and reflected back to the worker. I designed the data model and information architecture together, so the three platforms stay consistent while each surface stays focused on its primary task.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PLATFORMS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-port-cream-light p-9">
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
      <section id="mockups" className="bg-port-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="arrow" /></div>
            <Eyebrow>Mockups</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Three surfaces, one shared workflow.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14">
              <ImageBanner
                src="/portfolio/ewa/mockups.png"
                alt="EWA mockups across web and mobile"
                width={1920}
                height={2138}
                caption="Mockups — worker web, company admin portal, and worker mobile app"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 pb-8 md:px-12 md:pb-16">
          <PullQuote accent="#4F5BD5" attribution="Design principle for B2B2C surfaces">
            Design the{" "}
            <span className="text-[#4F5BD5]">data model</span> before the UI — three roles seeing one shared record is the{" "}
            <span className="underline decoration-[#4F5BD5] decoration-4 underline-offset-8">honest broker</span>.
          </PullQuote>
        </div>
      </section>

      {/* VALIDATION */}
      <section id="validation" className="bg-port-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={INDIGO_TEXT}><SectionDeco variant="flow" /></div>
            <Eyebrow>Validation</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Tested with internal-company employees as proxy users.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_420px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.7] text-port-body">
                Direct access to KienlongBank&apos;s end customers was limited during early design phases. I ran moderated usability tests with internal-company employees — whose monthly-salary pattern closely matches the target audience — across three iterative rounds.
              </p>
              <p className="mt-5 text-lg leading-[1.7] text-port-body">
                Each round surfaced specific friction in the request flow, the consent step, and limit visibility. I adjusted wireframes and copy between rounds, reducing perceived steps in the withdrawal flow and clarifying language around &apos;earned&apos; versus &apos;available&apos; balance.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-4">
                {[
                  { icon: <Zap className="h-5 w-5" />, text: "Withdrawal flow simplified — from 6 perceived steps to 3." },
                  { icon: <MessageSquareText className="h-5 w-5" />, text: "Balance copy rewritten — testers no longer confused 'earned' vs 'available'." },
                  { icon: <LayoutDashboard className="h-5 w-5" />, text: "Admin approval queue shipped with bulk actions after HR feedback." },
                ].map((o, i) => (
                  <div key={i} className="flex gap-4 rounded-xl border border-port-border bg-white p-6">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4F5BD5] text-white">{o.icon}</div>
                    <div>
                      <p className={`text-[11px] font-semibold tracking-[1.8px] ${INDIGO_TEXT}`}>{`OUTCOME 0${i + 1}`}</p>
                      <p className="mt-2 text-[15px] leading-[1.5] font-medium text-port-ink">{o.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div id="reflection" />
      <OutcomeSection
        title="What this taught me about designing across connected surfaces."
        paragraphs={[
          "A B2B2C product only feels seamless when the three actors — the worker, the company admin, and the bank — see the same underlying record from their own vantage point. I designed the data model and IA together before touching any UI, which meant that when I later diverged the surfaces visually, the data trail stayed consistent.",
          "Running usability tests with proxy users (internal-company employees on monthly salary) turned out to be the most cost-effective research move of the project. It surfaced language issues in the balance copy that would have been invisible in a solo design review.",
        ]}
        takeaways={[
          { n: "01", label: "ONE MODEL, THREE SURFACES", text: "Design the schema before the UI. When three roles see the same record from different angles, the schema is the honest broker." },
          { n: "02", label: "PROXY USERS ARE STILL USERS", text: "When target users are behind an NDA wall, proxy users with similar context surface 80% of the copy and flow issues." },
          { n: "03", label: "COPY IS UX", text: "'Earned' vs. 'available' is a 2-word decision that determines whether every future support ticket exists." },
        ]}
        accentClass="text-[#8CB8FF]"
      />

      <CaseNav currentSlug="ewa" />
      <Footer />
    </>
  );
}
