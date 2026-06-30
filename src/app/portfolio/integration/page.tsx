import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Eyebrow } from "../_components/Eyebrow";
import { Reveal } from "../_components/Reveal";
import { MockFrame } from "../_components/MockFrame";
import { BackLink } from "../_components/BackLink";

export const metadata = {
  title: "Integration feature — CRM × Automation | Duong Ngoc Minh Anh",
  description:
    "Guided integration flow letting CRM admins connect 8+ channels — Zalo OA, FB Messenger, Shopify, public APIs — for data sync, auto-messaging, and lead capture.",
};

const STEPS = [
  {
    n: "01",
    label: "SELECT TYPE",
    title: "Pick a channel",
    body:
      "Categorized grid of 8 channels with one-line purpose hints. Empty state nudges first-time admins toward their first connection.",
    img: "/portfolio/integration/step1-list.png",
  },
  {
    n: "02",
    label: "CONFIGURE",
    title: "Auth in the right model",
    body:
      "Step 2 swaps based on channel — OAuth redirect for FB/Zalo, token field for Slack/WhatsApp, embed snippet for website, key for Shopify.",
    img: "/portfolio/integration/step2-auth.png",
  },
  {
    n: "03",
    label: "VALIDATE",
    title: "Token health check",
    body:
      "Client-side validation first, then a background ping to the provider — inline error with docs link on failure, never silent acceptance.",
    img: "/portfolio/integration/step3-validate.png",
  },
  {
    n: "04",
    label: "CONFIRM",
    title: "Review before going live",
    body:
      "Confirm screen names exactly what will sync, who gets notified on token expiry, and what permissions the CRM is requesting from the platform.",
    img: "/portfolio/integration/step4-confirm.png",
  },
  {
    n: "05",
    label: "SUCCESS + LIVE",
    title: "Healthy state + next steps",
    body:
      "Success modal links to the integration detail page, with notification settings already filled in and a live status badge visible on the integration card.",
    img: "/portfolio/integration/step5-success.png",
  },
];

const PILLARS = [
  {
    n: "01",
    label: "PILLAR — DISCOVERY",
    title: "Guided selection over a long flat list",
    bullets: [
      "Group 8 channels by type — Chatbot · Messaging · E-commerce · Developer",
      "Show purpose hint under each channel, so admin picks intent first",
      "Reuse the same wizard shell for every channel — only step 2 changes",
      "Empty state on the integration list nudges admins toward their first connection",
    ],
  },
  {
    n: "02",
    label: "PILLAR — TRUST",
    title: "Make token health visible at every step",
    bullets: [
      "Validate token client-side before submission (saves a backend round-trip)",
      "Inline error messages reference the platform docs link directly",
      "Each integration card surfaces a status indicator: healthy · stale · expired",
      "Tooltip on resync explains exactly what happens before the user clicks it",
    ],
  },
  {
    n: "03",
    label: "PILLAR — RECOVERY",
    title: "Treat token expiry as a normal lifecycle event",
    bullets: [
      "Detect drift / expired tokens automatically and badge the affected card",
      "One-click resync flow with a confirm modal — never silent re-auth",
      "Notification email field is a setting on each integration, not a global default",
      "Delete is undoable for 7 days; bulk delete confirms with channel-by-channel checklist",
    ],
  },
];

const PAIN = [
  {
    who: "CRM admin",
    label: "FOR THE USER",
    body:
      "Pasting tokens with no validation. No way to tell if Zalo OA was still connected or if a Shopify key had expired three weeks ago.",
  },
  {
    who: "Ops & support",
    label: "FOR THE TEAM",
    body:
      "Every 'why isn't my chatbot replying?' ticket required ops to manually inspect tokens. No audit trail of who connected what, or when.",
  },
  {
    who: "Engineering",
    label: "FOR DEV",
    body:
      "Each channel was a different connection model. Bespoke UI per channel meant duplicated code, inconsistent error states, and frequent regressions.",
  },
];

export default function IntegrationCaseStudy() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-port-ink text-[#F5F0E3]">
        <div className="mx-auto max-w-[1320px] px-6 pt-10 md:px-12 md:pt-12">
          <div className="flex items-center justify-between">
            <BackLink />
            <span className="text-[11px] font-medium tracking-[2px] text-[#F5F0E3]/45">CASE STUDY · 04 / 04</span>
          </div>
          <div className="mt-2 h-px w-full bg-[#F5F0E3]/15" />
        </div>
        <div className="mx-auto max-w-[1320px] px-6 pb-28 pt-16 md:px-12 md:pb-40 md:pt-24">
          <Reveal>
            <Eyebrow color="accent">Case study 04 — CRM × Automation</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif mt-8 text-[44px] leading-[1.04] tracking-tight md:text-[88px]">
              Connect a CRM to <span className="text-port-accent">8+ channels</span> — in minutes, with no broken tokens.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-[1.6] text-[#F5F0E3]/75 md:text-xl">
              One guided integration flow for FB Messenger, Zalo OA, Instagram, WhatsApp, Slack, Shopify, Embed, and a Public API — designed for trust, recovery, and zero-IT setup.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-2">
              {["GUIDED INTERACTION", "MULTI-PLATFORM", "AUTOMATION UX", "TRUST UX"].map(t => (
                <span key={t} className="rounded-full border border-[#F5F0E3]/15 bg-[#F5F0E3]/[0.04] px-3 py-2 text-[11px] font-semibold tracking-[1.5px] text-port-accent">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT + META */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About the feature</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.65] text-port-body md:text-[22px]">
                Integration is the feature inside a CRM platform that lets non-technical admins connect their workspace to external messaging, e-commerce, and developer channels — enabling auto-messaging, data sync, and lead capture without involving an engineer.
              </p>
              <p className="mt-6 text-lg leading-[1.65] text-port-muted">
                The feature covers eight channels with very different connection models — OAuth bots (FB Messenger, Zalo OA, Instagram, WhatsApp, Slack), credentialed app keys (Shopify), embed snippets (website widget), and a public API token. Each model needed its own configuration UX, but the entry, recovery, and trust patterns had to feel like one consistent surface.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-port-accent-soft p-8 space-y-7">
                <MetaRow label="PRODUCT" value="CRM platform — internal feature module" />
                <MetaRow label="ROLE" value="Sole UX/UI designer for the Integration feature" />
                <MetaRow label="SCOPE" value="End-to-end — flow, wireframes, UI, design system, handoff" />
                <MetaRow label="CHANNELS" value="8 — chatbot (5), e-commerce (1), web embed (1), public API (1)" />
                <MetaRow label="KEY PATTERNS" value="Guided wizard · Token validation · Recovery / re-sync" />
              </div>
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
              Admins were copy-pasting tokens across 8+ channels — with no audit trail and no recovery.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-xl leading-[1.65] text-port-body">
              Before this feature, connecting a channel meant pasting raw API tokens into a generic form, with no validation. Tokens silently expired. There was no way to tell if a connection was healthy. And every channel type required a different mental model from the admin.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PAIN.map((p, i) => (
              <Reveal key={p.who} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-8">
                  <p className="text-[11px] font-semibold tracking-[2px] text-port-accent">{p.label}</p>
                  <h3 className="mt-4 text-xl font-semibold text-port-ink">{p.who}</h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-port-body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH 3 PILLARS */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Three design pillars to make integrations feel like one feature, not eight.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              I organized the feature around three pillars that each addressed a real problem the admins reported. Every screen in the feature traces back to one of these three intents.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-port-cream-light p-9">
                  <p className="font-bold text-5xl text-port-accent">{p.n}</p>
                  <p className="mt-5 text-[11px] font-semibold tracking-[2px] text-port-muted">{p.label}</p>
                  <h3 className="mt-3 text-xl font-semibold text-port-ink">{p.title}</h3>
                  <ul className="mt-6 space-y-3 text-[14px] leading-[1.55] text-port-body">
                    {p.bullets.map(b => (
                      <li key={b} className="flex gap-2">
                        <span className="text-port-accent">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FLOW */}
      <section className="bg-port-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Key flow</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Adding a new integration — five steps, one mental model.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-lg leading-[1.65] text-port-body">
              Whether the admin is connecting Zalo OA or a public API, the flow is the same: pick what to connect → tell us how to authenticate → we validate → confirm → live. The only thing that changes between channels is the middle step.
            </p>
          </Reveal>
          <div className="mt-20 space-y-24 md:space-y-32">
            {STEPS.map((s, i) => (
              <div key={s.n} className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-20">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <MockFrame src={s.img} alt={s.title} width={1366} height={768} />
                </div>
                <Reveal direction={i % 2 === 0 ? "left" : "right"}>
                  <Eyebrow>{`${s.n}. ${s.label}`}</Eyebrow>
                  <h3 className="font-serif mt-4 text-3xl leading-[1.15] tracking-tight md:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-port-body">{s.body}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="bg-port-ink text-[#F5F0E3]">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow color="accent">Reflection</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              What this taught me — and why it transfers to AI-assisted enterprise UX.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_420px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.7] text-[#F5F0E3]/80">
                Integration UX is fundamentally about building trust in a system the user can&apos;t see end-to-end. The same pattern shows up in AI-assisted enterprise design: the user grants the system permission to act on their behalf, and the design has to make outcomes visible, recoverable, and explainable at every step.
              </p>
              <p className="mt-5 text-lg leading-[1.7] text-[#F5F0E3]/80">
                The three patterns I leaned on — guided selection, visible status, named consequence — apply directly to AI experiences like conversational flows, agentic actions, and recommendation surfaces. I&apos;m carrying these principles into my exploration of AI-assisted UX patterns next.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <TakeawayCard n="01" label="GUIDED OVER FLAT" text="When you have 5+ options of different kinds, group by intent — the picker becomes a question, not a list." />
                <TakeawayCard n="02" label="STATUS BEATS DOCS" text="A visible badge replaces a help article. Make the system's current state legible before you write words about it." />
                <TakeawayCard n="03" label="NAMED CONSEQUENCE" text="Replace 'Are you sure?' with the exact thing that will happen — it gives the user a real choice, not a yes/no reflex." />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[1.8px] text-port-accent">{label}</p>
      <p className="mt-1.5 text-[15px] leading-[1.45] font-medium text-port-ink">{value}</p>
    </div>
  );
}

function TakeawayCard({ n, label, text }: { n: string; label: string; text: string }) {
  return (
    <div className="rounded-xl border border-[#F5F0E3]/15 bg-[#F5F0E3]/[0.04] p-6">
      <p className="text-[11px] font-semibold tracking-[1.5px] text-port-accent">{`TAKEAWAY ${n} — ${label}`}</p>
      <p className="mt-2 text-[15px] leading-[1.5] font-medium text-white/95">{text}</p>
    </div>
  );
}
