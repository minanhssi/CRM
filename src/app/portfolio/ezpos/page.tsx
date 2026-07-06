import {
  ShoppingBag, QrCode, CreditCard, Hand, Store, MessageSquareWarning,
  SearchCode, GitBranch, Palette, PenLine, MousePointerClick, LayoutGrid, Sparkles,
  Briefcase, Smartphone, Users, ClipboardList,
  Wifi, Clock, CheckCircle2, XCircle, RotateCcw, AlertCircle, Receipt, ShieldCheck, MessagesSquare, Volume2, Fingerprint, Landmark,
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
  title: "EzPOS — Mobile POS payment workflow for merchants in motion | Duong Ngoc Minh Anh",
};

const TEAL = "#109C84";
const TEAL_TEXT = "text-[#109C84]";

const PROCESS_STEPS = [
  { n: "01", title: "Competitor analysis", body: "Teardown of mPOS.vn, Payoo, and Square — each chosen for a specific lens: mPOS.vn for local payment device connectivity, Payoo for QR checkout and merchant transaction history, Square for one-handed checkout and design-system rigor. Extracted the patterns worth adopting and the ones to explicitly avoid.", icon: <SearchCode className="h-5 w-5" /> },
  { n: "02", title: "User flow", body: "Mapped the merchant's day-in-life: open shift → take payment → check history → close shift. Every screen serves one of these four states.", icon: <GitBranch className="h-5 w-5" /> },
  { n: "03", title: "Moodboard", body: "Assembled visual references for one-thumb interfaces and merchant tools. Landed on a green-accented dark theme that reads well outdoors at market stalls.", icon: <Palette className="h-5 w-5" /> },
  { n: "04", title: "Wireframing", body: "Low-fi wireframes for the 30+ screens covering all 4 states, prioritizing thumb-reachable primary actions on every screen.", icon: <PenLine className="h-5 w-5" /> },
  { n: "05", title: "Prototyping", body: "Interactive Figma prototype covering the checkout flow and history views. Used for internal reviews with PO and later informal user tests.", icon: <MousePointerClick className="h-5 w-5" /> },
  { n: "06", title: "Design system", body: "Typography ramp, color tokens, and component set tuned for a repeated-use merchant tool. Component library sized for standard mobile widths.", icon: <LayoutGrid className="h-5 w-5" /> },
  { n: "07", title: "High-fi UI", body: "Final high-fidelity screens with green accent + dark theme, motion notes for card confirmation animations, and dev handoff specs.", icon: <Sparkles className="h-5 w-5" /> },
];

export default function EzPOSCaseStudy() {
  return (
    <>
      <ScrollProgress color="#109C84" />
      <Header />
      <TocSidebar
        accent="#109C84"
        sections={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "Problem" },
          { id: "constraints", label: "Constraints" },
          { id: "workflow", label: "Workflow" },
          { id: "process", label: "Process" },
          { id: "decisions", label: "Decisions" },
          { id: "states", label: "States" },
          { id: "components", label: "Components" },
          { id: "ui", label: "Final UI" },
          { id: "validation", label: "Validation" },
          { id: "reflection", label: "Reflection" },
        ]}
      />

      <CaseHero
        caseNumber="CASE STUDY · 03 / 04"
        eyebrow="B2B Retail · Mobile POS"
        title={<>EzPOS — fast card &amp; QR payments, designed for the <span className="text-[#109C84]">merchant in motion</span>.</>}
        subtitle="Mobile point-of-sale app for retail merchants — quick card & QR payments, transaction history, and a simplified end-of-day reconciliation flow that fits in 3 minutes."
        tags={["MOBILE POS · FINTECH", "PAYMENT WORKFLOW", "MERCHANT UX", "ONE-HAND MOBILE"]}
        eyebrowColor="cream"
        accentClass="text-[#109C84]"
        heroTint="mint"
        decoVariant="grid"
        decoColor={TEAL}
        keyFacts={[
          { label: "ROLE", value: "Sole UX/UI Designer" },
          { label: "PLATFORM", value: "iOS · Android" },
          { label: "PROCESS", value: "7-step full UX cycle" },
          { label: "OUTPUT", value: "30+ screens · design system" },
        ]}
        cover={{
          src: "/portfolio/Thumbnail-EzPOS.png",
          width: 1440,
          height: 810,
          alt: "EzPOS — dual phone mockup with checkout and payment UI",
        }}
      />

      {/* ABOUT */}
      <section id="overview" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="dots" /></div>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About EzPOS</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.75] text-port-body md:text-[22px]">
                EzPOS is a <Highlight variant="green">mobile fintech payment product</Highlight> for retail merchants — handling <Highlight variant="green">card payments, QR checkout, transaction history, and daily reconciliation</Highlight> from a single phone the merchant carries between the counter, the market stall, and delivery runs.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                This wasn&apos;t a visual redesign — it was a <Highlight variant="strong">payment workflow problem</Highlight>. Every screen has to serve a merchant who is often <Highlight>holding a product in one hand and the phone in the other</Highlight>, in a noisy environment, on an unstable network, with a customer waiting.
              </p>
              <p className="mt-4 text-lg leading-[1.7] text-port-muted">
                I led the end-to-end UX process — <Highlight variant="green">competitive analysis of mPOS.vn, Payoo, and Square</Highlight>, moodboarding, user flows, wireframing, prototyping, design system, high-fidelity UI, and developer handoff. The visual identity leans dark with a green accent — chosen after moodboarding for outdoor legibility at market stalls and small-shop storefronts.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-port-border bg-white p-8 space-y-6 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                {[
                  { icon: <Briefcase className="h-4 w-4" />, label: "DOMAIN", value: "Retail · Mobile POS" },
                  { icon: <ShoppingBag className="h-4 w-4" />, label: "PRODUCT", value: "Mobile payment app for merchants" },
                  { icon: <Users className="h-4 w-4" />, label: "ROLE", value: "Sole UX/UI — research, UX, UI, dev handoff" },
                  { icon: <Smartphone className="h-4 w-4" />, label: "PLATFORM", value: "Mobile (iOS / Android)" },
                  { icon: <ClipboardList className="h-4 w-4" />, label: "PROCESS", value: "7 steps — competitor analysis → high-fi UI" },
                  { icon: <LayoutGrid className="h-4 w-4" />, label: "OUTPUT", value: "30+ screen mobile app + design system" },
                ].map(m => (
                  <div key={m.label} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: "rgba(16,156,132,0.15)", color: TEAL }}>{m.icon}</div>
                    <div>
                      <p className={`text-[11px] font-semibold tracking-[1.8px] ${TEAL_TEXT}`}>{m.label}</p>
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
            <div className={TEAL_TEXT}><SectionDeco variant="pulse" /></div>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Merchants needed fast, one-handed checkout — at the counter, at markets, on the move.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-xl leading-[1.65] text-port-body">
              Small retail merchants juggle cash, cards, QR payments, and receipts — all while the next customer is already at the counter. Existing POS apps assumed a <Highlight variant="green">stationary setup and a two-handed operator</Highlight>. <Highlight variant="strong">Neither assumption held</Highlight> for the target user.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}><PainCard who="Merchants" label="FOR THE USER"
              icon={<Hand className="h-5 w-5" />}
              iconBg="bg-[#109C84]/10" iconColor={TEAL_TEXT} accent={TEAL_TEXT}
              body="Split attention between customer, product, and app. Two-handed POS flows dropped transactions when the merchant needed a free hand for the item." /></Reveal>
            <Reveal delay={0.08}><PainCard who="Multi-shop owners" label="FOR THE BUSINESS"
              icon={<Store className="h-5 w-5" />}
              iconBg="bg-[#109C84]/10" iconColor={TEAL_TEXT} accent={TEAL_TEXT}
              body="End-of-day reconciliation across multiple staff and shifts was a 20-minute manual export-and-match. No unified daily summary." /></Reveal>
            <Reveal delay={0.16}><PainCard who="The payment provider" label="FOR THE PLATFORM"
              icon={<MessageSquareWarning className="h-5 w-5" />}
              iconBg="bg-[#109C84]/10" iconColor={TEAL_TEXT} accent={TEAL_TEXT}
              body="No consistent transaction UI across merchant apps meant repeated support burden — every shop asked the same 5 questions." /></Reveal>
          </div>
        </div>
      </section>

      {/* MERCHANT CONSTRAINTS */}
      <section id="constraints" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="layers" /></div>
            <Eyebrow>Merchant constraints</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              The reality every screen had to survive.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              A merchant payment app doesn&apos;t get to assume a quiet room, a stable network, and a two-handed operator. The <Highlight variant="green">operating environment</Highlight> shaped every design decision — sometimes more than the feature list did.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Clock className="h-5 w-5" />, title: "Speed at the counter", body: "The customer is waiting. Each payment has to complete in seconds, not steps. The design has to reduce hesitation at the moment of payment." },
              { icon: <Hand className="h-5 w-5" />, title: "One-hand operation", body: "The merchant often holds a product or receipt in the other hand. Every primary action must be reachable with the thumb of the hand already on the phone." },
              { icon: <Volume2 className="h-5 w-5" />, title: "Noisy, distracting environment", body: "Markets, small shops, delivery runs. The interface can't rely on subtle motion or quiet copy — critical states need to read at a glance in bright light and busy backgrounds." },
              { icon: <Wifi className="h-5 w-5" />, title: "Unstable network", body: "Payment flows have to communicate what the app knows and what it doesn't. A pending state is not a failure — but it must never look like success either." },
              { icon: <CheckCircle2 className="h-5 w-5" />, title: "Payment status clarity", body: "Merchant + customer both watch the same screen at the moment of truth. Success and failure need immediate, unambiguous visual language — no room for interpretation." },
              { icon: <RotateCcw className="h-5 w-5" />, title: "Failure recovery", body: "When something fails — network drop, card decline, QR timeout — the merchant needs a one-tap path to retry or fall back to a different method, without losing the amount." },
              { icon: <ClipboardList className="h-5 w-5" />, title: "History at reach", body: "\"Did that last payment go through?\" is asked constantly. Transaction history has to be one tap away and readable at a glance." },
              { icon: <Receipt className="h-5 w-5" />, title: "Daily reconciliation", body: "End-of-day the merchant needs to close out — total revenue, count by method, disputed transactions. This isn't a report screen; it's part of the daily rhythm." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "Trust in a financial product", body: "Every money-moving screen carries a trust cost. Confidence comes from consistency: same status vocabulary, same confirmation language, same recovery affordance across every payment method." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(16,156,132,0.10)", color: TEAL }}>{c.icon}</div>
                  <h3 className="text-[16px] font-semibold text-port-ink">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-port-body">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="border-y border-port-border-soft bg-port-tint-mint/40">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="flow" /></div>
            <Eyebrow>Merchant workflow</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              A single payment travels nine checkpoints in under a minute.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              The whole product hangs on this loop. Getting the sequence right — and making the state visible at every step — mattered more than any individual screen.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-9">
            {[
              { n: "01", title: "Open app", state: "Idle" },
              { n: "02", title: "Choose payment method", state: "Card / QR" },
              { n: "03", title: "Enter amount", state: "Input" },
              { n: "04", title: "Generate QR / process card", state: "Processing" },
              { n: "05", title: "Confirm payment", state: "Awaiting" },
              { n: "06", title: "Show payment result", state: "Success / Fail" },
              { n: "07", title: "Issue receipt / save txn", state: "Recorded" },
              { n: "08", title: "Review history", state: "Review" },
              { n: "09", title: "Reconcile daily revenue", state: "Close-out" },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.03}>
                <div className="relative flex h-full flex-col rounded-xl border border-port-border bg-white p-4">
                  <p className={`font-bold text-xl ${TEAL_TEXT}`}>{step.n}</p>
                  <p className={`mt-2 text-[9px] font-semibold tracking-[1.4px] uppercase ${TEAL_TEXT}`}>{step.state}</p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.35] text-port-ink">{step.title}</p>
                  {i < 8 && (
                    <span aria-hidden className={`absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block ${TEAL_TEXT}`}>→</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 7 STEPS */}
      <section id="process" className="bg-port-tint-mint">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="flow" /></div>
            <Eyebrow>Process</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Seven-step design process — from competitor research to developer handoff.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              My process began with analyzing <Highlight variant="green">mPOS.vn, Payoo, and Square</Highlight> to understand common payment flows, merchant workflows, and UI patterns before defining opportunities for EzPOS. Each step fed into the next, with the <Highlight variant="strong">earlier steps re-visited</Highlight> when later steps surfaced new assumptions.
            </p>
          </Reveal>

          {/* Competitor breakdown — why these 3 and what each contributed */}
          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                {
                  name: "mPOS.vn",
                  region: "VN · Domestic reference",
                  focus: "Payment flow, POS device connectivity, transaction management",
                },
                {
                  name: "Payoo",
                  region: "VN · Merchant leader",
                  focus: "QR payments, transaction history, merchant-facing experience",
                },
                {
                  name: "Square",
                  region: "US · Global benchmark",
                  focus: "One-handed checkout, design system rigor, modern POS flow",
                },
              ].map((c, i) => (
                <div key={c.name} className="rounded-2xl border border-port-border bg-white p-6 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className={`font-bold text-2xl ${TEAL_TEXT}`}>{`0${i + 1}`}</p>
                    <span className={`text-[10px] font-semibold tracking-[1.6px] uppercase ${TEAL_TEXT}`}>{c.region}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-port-ink">{c.name}</h3>
                  <p className="mt-2 text-[11px] font-semibold tracking-[1.6px] uppercase text-port-muted">Studied for</p>
                  <p className="mt-1 text-[14px] leading-[1.55] text-port-body">{c.focus}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-14">
              <ImageBanner
                src="/portfolio/ezpos/methods.png"
                alt="Process methods overview — competitor analysis to UI"
                width={1440}
                height={2269}
                caption="Process visual — 7 methods from competitor analysis to UI design"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-8 md:px-12 md:pb-16">
          <PullQuote accent="#109C84" attribution="Constraint that shaped every screen">
            Merchants have{" "}
            <span className="text-[#109C84]">one hand for the phone</span> and one for the product. Primary actions belong in the{" "}
            <span className="underline decoration-[#109C84] decoration-4 underline-offset-8">bottom third</span> of every screen.
          </PullQuote>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section id="decisions" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="dots" /></div>
            <Eyebrow>Design decisions</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              What I decided — and why.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Six choices carried most of the weight. Each was resolved by asking the same question — <Highlight variant="green">what does this merchant, in this moment, actually need?</Highlight>
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Separate card and QR payment flows",
                why: "Card and QR run on different mental models — card is a physical action (tap / insert), QR is a scan-or-show. Merging them into one flow forced merchants to re-read the screen each time. Splitting them at the entry point lets each flow render only what's relevant to that method.",
              },
              {
                title: "Primary CTA in the thumb zone",
                why: "The merchant is already holding the phone in the hand that will tap the CTA. Placing 'Confirm' or 'Charge' in the bottom third of every screen means the payment can be completed without shifting grip — which matters when the other hand is holding the customer's product.",
              },
              {
                title: "Dashboard leads with revenue + recent transactions",
                why: "The two questions merchants open the app to answer are 'how much did I make today?' and 'did that last payment go through?'. The dashboard answers both above the fold — everything else lives one tap away.",
              },
              {
                title: "Payment status = shape + color + label together",
                why: "In a bright market or a busy shop, color alone fails. Every status — pending, processing, success, failed — carries a shape (icon), a color, and a label. Three redundant signals so the merchant reads the state at a glance even in awkward lighting.",
              },
              {
                title: "Transaction history with filter-first design",
                why: "The list gets long fast. A filter row above the list (date · method · status) is faster than scrolling, and the filter chips double as a visual summary of what the merchant is currently looking at.",
              },
              {
                title: "Dark theme with green accent",
                why: "Payment moments are high-contrast — the merchant looks at the screen briefly, in bright outdoor light, then back at the customer. A dark canvas makes the accented CTA and status pop harder than a light theme would; the green reads well outdoors and doesn't wash out under sun.",
              },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                  <p className={`text-[10px] font-semibold tracking-[2px] ${TEAL_TEXT}`}>DECISION</p>
                  <h3 className="mt-3 text-[18px] font-semibold text-port-ink">{d.title}</h3>
                  <p className={`mt-4 text-[10px] font-semibold tracking-[2px] ${TEAL_TEXT}`}>WHY</p>
                  <p className="mt-2 text-[13px] leading-[1.6] text-port-body">{d.why}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT STATES + EDGE CASES */}
      <section id="states" className="border-y border-port-border-soft bg-port-tint-mint/40">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="pulse" /></div>
            <Eyebrow>Payment states &amp; edge cases</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Six states, seven edge cases, one status vocabulary.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              A payment app fails badly if a merchant can&apos;t tell whether the money moved. I defined <Highlight variant="green">six canonical states</Highlight> that any transaction can be in — plus a set of edge cases the design has to handle without falling back to \"something went wrong.\"
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Pending", body: "Waiting for the customer or the payment method." },
              { label: "Processing", body: "Sent to the payment provider; waiting for the result." },
              { label: "Success", body: "Confirmed by the provider. Money moved." },
              { label: "Failed", body: "Explicit failure from the provider or timeout." },
              { label: "Refunded", body: "Merchant-initiated reversal of a completed txn." },
              { label: "Cancelled", body: "Merchant or customer aborted before completion." },
            ].map(s => (
              <Reveal key={s.label} delay={0.05}>
                <div className="h-full rounded-xl border border-port-border bg-white p-5">
                  <p className={`text-[10px] font-semibold tracking-[1.6px] ${TEAL_TEXT}`}>STATE</p>
                  <p className="mt-2 text-[15px] font-semibold text-port-ink">{s.label}</p>
                  <p className="mt-2 text-[12px] leading-[1.5] text-port-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-[#109C84]/20 bg-white p-8">
              <p className={`text-[11px] font-semibold tracking-[2px] ${TEAL_TEXT}`}>
                <AlertCircle className="mr-1 inline h-4 w-4 align-[-3px]" />
                EDGE CASES · WHERE THE DESIGN HAS TO HOLD
              </p>
              <ul className="mt-4 grid gap-2 text-[13px] leading-[1.55] text-port-body md:grid-cols-2">
                {[
                  "Unstable network mid-payment — hold state, don't fake success",
                  "Duplicate payment attempt — detect + confirm before charging twice",
                  "Failed QR scan — offer manual entry or fall back to card",
                  "Card transaction error — surface provider reason + one-tap retry",
                  "App closed during processing — resume state on re-open, don't lose the amount",
                  "Merchant verifies a transaction later — deep-link from history to a self-contained detail view",
                  "Refund on a failed txn — block; refund only on completed payments",
                ].map(e => (
                  <li key={e} className="flex gap-2">
                    <span className={`mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${TEAL_TEXT}`} style={{ backgroundColor: TEAL }} />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPONENT THINKING */}
      <section id="components" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="layers" /></div>
            <Eyebrow>Component thinking</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              A mobile pattern library, tuned for the same screen used 200× a day.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              The merchant looks at these components thousands of times a month. They had to be <Highlight variant="green">consistent, reusable, and readable at speed</Highlight> — every new screen composes from the same building blocks so nothing surprises the muscle memory.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Payment method cards", body: "Card, QR, cash — same shape, same tap target, same visual weight. The merchant chooses in a glance, not by reading." },
              { title: "Bottom navigation", body: "Four tabs, thumb-reachable — Home, Pay, History, Settings. Same on every screen so re-entry is muscle memory." },
              { title: "Transaction list item", body: "Amount + method + status + time — always in the same order, same alignment. Scanning a list of 100 is a single sweep of the eye." },
              { title: "Status badge", body: "Icon + color + label. One badge design carries all six states; the state name never renders alone." },
              { title: "Amount input", body: "Full-width, large, thumb-typed. Currency and denomination handled by input mask so the merchant can't enter a malformed number." },
              { title: "Confirmation modal", body: "One primary action, one secondary. Amount + method summarized above the fold. No decorative content between the merchant and the tap." },
              { title: "Receipt / result screen", body: "Same layout for success and failure — only the icon, color, and copy change. Familiar structure means no re-orientation at a critical moment." },
              { title: "Empty + error states", body: "Every screen has its empty (no transactions today) and error (network lost, provider timeout) state. Composed from the same primitives so they never look like bugs." },
              { title: "Toast + banner", body: "Toast for transient info, banner for state the merchant needs to act on. Never confuse them — a merchant reading a toast expecting a banner is a support ticket." },
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

      {/* UI GALLERY */}
      <section id="ui" className="border-y border-port-border-soft bg-port-tint-gray">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="layers" /></div>
            <Eyebrow>Final UI</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              High-fidelity mockups — dark theme, green accent, one-thumb tuned.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-14">
              <ImageBanner
                src="/portfolio/ezpos/ui.png"
                alt="EzPOS final UI mockup grid"
                width={2880}
                height={5722}
                caption="Final UI — mobile POS screens across the checkout, history, and settings flows"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALIDATION & COLLABORATION */}
      <section id="validation" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className={TEAL_TEXT}><SectionDeco variant="arrow" /></div>
            <Eyebrow>Validation &amp; collaboration</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              How the design was validated — without formal user studies.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Merchant time is expensive and hard to book. The design was validated through the review paths that were available — <Highlight variant="green">prototype walkthroughs, design critiques, and stakeholder reviews</Highlight> — with each session focused on a specific lens the design had to survive.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: TEAL, color: 'white' }}>
                  <MessagesSquare className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-port-ink">Validation activities</h3>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.55] text-port-body">
                  {[
                    "Prototype walkthroughs with the product team — running the whole payment loop end-to-end on a phone in hand",
                    "Design reviews with product / business — checking payment logic against the real provider rules",
                    "One-handed reachability check — testing every primary CTA against actual thumb reach on a 6″ phone",
                    "Payment-flow review with stakeholders — walking through card + QR + failure paths side by side",
                    "Dark-theme readability review — checking contrast + type in outdoor light conditions with a real phone",
                    "Transaction-status clarity review — testing whether success / failure / pending read at a glance without reading the label",
                  ].map(pt => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: TEAL }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: TEAL, color: 'white' }}>
                  <Fingerprint className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-port-ink">Refined after feedback</h3>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.55] text-port-body">
                  {[
                    "Clearer payment status labels — 'Waiting' → 'Processing' and 'Confirmed' → 'Paid' after the product owner flagged operator confusion",
                    "Stronger success + failure states — added icon + color + label together after the review team noticed color alone got lost in bright light",
                    "Simplified checkout flow — trimmed a confirmation step where the confirmation was already implicit in the amount input",
                    "Transaction list readability — moved status to the leading edge after the review flagged that the amount pulled the eye first",
                    "Refined CTA placement — nudged primary buttons deeper into the thumb zone after one-handed reachability checks",
                    "Payment-method entry — split card + QR at the entry point instead of a shared amount screen after stakeholder review",
                  ].map(pt => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: TEAL }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-[#109C84]/20 bg-port-tint-mint/40 p-8">
              <p className={`text-[11px] font-semibold tracking-[2px] ${TEAL_TEXT}`}>
                <Users className="mr-1 inline h-4 w-4 align-[-3px]" />
                COLLABORATION · WHO SHAPED THE DESIGN
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-port-body">
                Design decisions were aligned against three lenses at every checkpoint: <strong className="font-semibold text-port-ink">payment rules</strong> with the Product Owner, Product Manager, and Business Analyst — what the payment provider actually returns and when; <strong className="font-semibold text-port-ink">technical feasibility</strong> with engineering and QA — which states the SDK could reliably surface, which edge cases could actually happen in production; and <strong className="font-semibold text-port-ink">merchant operations</strong> with business + payment stakeholders — how a real shop closes a day, what a support ticket usually looks like, where confidence breaks down.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="reflection" />
      <OutcomeSection
        title="What designing a merchant payment product taught me about UX."
        paragraphs={[
          "Merchant payment UX is less about adding more features and more about reducing hesitation at the moment of payment. When a merchant is serving a customer, the interface has to make the next action obvious, the payment status clear, and recovery from errors simple. Everything else — visual polish, animation, decorative content — is subordinate to that.",
          "The design work that mattered most on this project happened before any high-fidelity screen: mapping the merchant's constraints, drawing the payment workflow, naming the states, deciding the vocabulary of confirmation and recovery. When those foundations were honest, the visual system had a shape to fill. When they were fuzzy, no dark theme or green accent covered it up.",
        ]}
        takeaways={[
          { n: "01", label: "SPEED IS THE FEATURE", text: "In a merchant payment product, the shortest path from open-app to money-moved is the whole product. Every decorative element gets weighed against how much it slows down that path." },
          { n: "02", label: "STATUS CARRIES TRUST", text: "In a financial product, worker trust lives in the status field. Success + failure need shape + color + label together, not any one alone — the merchant reads the state before they read the words." },
          { n: "03", label: "DESIGN FOR THE MERCHANT'S HAND", text: "One-hand operation isn't a nice-to-have — it's the actual usage pattern. Primary actions belong in the bottom third of every screen, and the design has to survive noise, sun, and an unstable network." },
        ]}
        accentClass="text-[#3DC5A6]"
      />

      <CaseNav currentSlug="ezpos" />
      <Footer />
    </>
  );
}
