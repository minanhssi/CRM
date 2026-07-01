import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Eyebrow } from "../_components/Eyebrow";
import { Reveal } from "../_components/Reveal";
import { CaseHero } from "../_components/CaseHero";
import { MetaCard } from "../_components/MetaCard";
import { PainCard } from "../_components/PainCard";
import { OutcomeSection } from "../_components/OutcomeSection";

export const metadata = {
  title: "EzPOS — Mobile POS for merchants | Duong Ngoc Minh Anh",
  description:
    "Mobile POS app for retail merchants — quick card & QR payments, transaction history, and end-of-day reconciliation that fits in 3 minutes.",
};

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Competitor analysis",
    body:
      "Teardown of Square, Stripe Terminal, and SumUp to benchmark the smallest viable checkout flow. Identified 3 patterns worth adopting and 2 to explicitly avoid.",
  },
  {
    n: "02",
    title: "User flow",
    body:
      "Mapped the merchant's day-in-life: open shift → take payment → check history → close shift. Every screen serves one of these four states.",
  },
  {
    n: "03",
    title: "Moodboard",
    body:
      "Assembled visual references for one-thumb interfaces and merchant tools. Landed on a green-accented dark theme that reads well outdoors at market stalls.",
  },
  {
    n: "04",
    title: "Wireframing",
    body:
      "Low-fi wireframes for the 30+ screens covering all 4 states, prioritizing thumb-reachable primary actions on every screen.",
  },
  {
    n: "05",
    title: "Prototyping",
    body:
      "Interactive Figma prototype covering the checkout flow and history views. Used for internal reviews with PO and later informal user tests.",
  },
  {
    n: "06",
    title: "Design system",
    body:
      "Typography ramp, color tokens, and component set tuned for a repeated-use merchant tool. Component library sized for standard mobile widths.",
  },
  {
    n: "07",
    title: "High-fi UI",
    body:
      "Final high-fidelity screens with green accent + dark theme, motion notes for card confirmation animations, and dev handoff specs.",
  },
];

export default function EzPOSCaseStudy() {
  return (
    <>
      <Header />

      <CaseHero
        caseNumber="CASE STUDY · 03 / 04"
        eyebrow="Case study 03 — B2B Retail · Mobile POS"
        title={
          <>
            EzPOS — fast card &amp; QR payments, designed for the <span className="text-[#3DC5A6]">merchant in motion</span>.
          </>
        }
        subtitle="Mobile point-of-sale app for retail merchants — quick card & QR payments, transaction history, and a simplified end-of-day reconciliation flow that fits in 3 minutes."
        tags={["MOBILE POS", "PAYMENT", "MERCHANT TOOLS", "FULL UX PROCESS"]}
        eyebrowColor="cream"
        accentClass="text-[#3DC5A6]"
      />

      {/* ABOUT */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About EzPOS</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.65] text-port-body md:text-[22px]">
                EzPOS is a B2B mobile payment app for retail merchants. The job is small but high-frequency: take a payment, see today&apos;s transactions, close the day. The challenge was building a clean checkout flow that works one-handed at the counter, plus reconciliation tools that respect a busy merchant&apos;s time.
              </p>
              <p className="mt-6 text-lg leading-[1.65] text-port-muted">
                I led the full UX process — competitor analysis (Square, Stripe Terminal, SumUp), moodboard, user flow, wireframing, prototyping, design system, and high-fidelity UI. Output was a 30+ screen mobile app with a tight, on-brand visual language.
              </p>
              <p className="mt-4 text-lg leading-[1.65] text-port-muted">
                The visual identity leans dark with green accent — chosen after moodboarding for legibility outdoors at market stalls and small-shop storefronts.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <MetaCard
                items={[
                  { label: "DOMAIN", value: "Retail · Mobile POS" },
                  { label: "PRODUCT", value: "Mobile payment app for merchants" },
                  { label: "ROLE", value: "End-to-end UX / UI designer" },
                  { label: "PLATFORM", value: "Mobile (iOS / Android)" },
                  { label: "PROCESS", value: "7 steps — competitor analysis → high-fi UI" },
                  { label: "OUTPUT", value: "30+ screen mobile app + design system" },
                ]}
                bg="bg-port-cream-light"
                labelColor="text-[#3DC5A6]"
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
              Merchants needed fast, one-handed checkout — at the counter, at markets, on the move.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-xl leading-[1.65] text-port-body">
              Small retail merchants juggle cash, cards, QR payments, and receipts — all while the next customer is already at the counter. Existing POS apps assumed a stationary setup and a two-handed operator. Neither assumption held for the target user.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                who: "Merchants",
                label: "FOR THE USER",
                body:
                  "Split attention between customer, product, and app. Two-handed POS flows dropped transactions when the merchant needed a free hand for the item.",
              },
              {
                who: "Multi-shop owners",
                label: "FOR THE BUSINESS",
                body:
                  "End-of-day reconciliation across multiple staff and shifts was a 20-minute manual export-and-match. No unified daily summary.",
              },
              {
                who: "The payment provider",
                label: "FOR THE PLATFORM",
                body:
                  "No consistent transaction UI across merchant apps meant repeated support burden — every shop asked the same 5 questions.",
              },
            ].map((p, i) => (
              <Reveal key={p.who} delay={i * 0.08}>
                <PainCard who={p.who} label={p.label} body={p.body} accent="text-[#3DC5A6]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 7 STEPS */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Process</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Seven steps, end-to-end ownership.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              I owned every step from competitor teardown to dev handoff. This is the process I ran — each step feeding into the next, with the earlier steps re-visited when later steps surfaced new assumptions.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-port-cream-light p-8">
                  <p className="font-bold text-4xl text-[#3DC5A6]">{s.n}</p>
                  <h3 className="mt-5 text-xl font-semibold text-port-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-port-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OutcomeSection
        title="What this taught me about designing for high-frequency mobile tools."
        paragraphs={[
          "High-frequency merchant tools live or die by how many taps a task takes. My biggest breakthrough on this project came in the wireframe phase, when I realized the merchant switches between four states repeatedly (take payment → check history → open shift → close shift). Every screen from that point forward was designed to make one of those four transitions feel like a single decision, not a multi-step form.",
          "Building the design system alongside the UI (not after) meant every new screen shipped in half the time of the previous one. By screen 20, I was assembling layouts from tokens rather than building each one from scratch.",
        ]}
        takeaways={[
          {
            n: "01",
            label: "ONE-THUMB IS A CONSTRAINT",
            text: "Merchants have one hand for the phone and one for the product. Primary actions belong in the bottom third of every screen.",
          },
          {
            n: "02",
            label: "FOUR STATES, ONE MENTAL MODEL",
            text: "Complex products often reduce to 3–5 states. Name them explicitly; design every screen as a transition between two.",
          },
          {
            n: "03",
            label: "SYSTEM-FIRST, SPEED COMPOUNDS",
            text: "Design system built alongside — not after — the UI cuts screen-shipping time by ~50% by the second half of the project.",
          },
        ]}
        accentClass="text-[#3DC5A6]"
      />

      <Footer />
    </>
  );
}
