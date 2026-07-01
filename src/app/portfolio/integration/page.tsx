import {
  Wallet, ShoppingBag, Smartphone, Sparkles, ShieldCheck, RefreshCcw,
  AlertTriangle, LifeBuoy, Code, Compass, Eye, TimerReset,
} from "lucide-react";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Eyebrow } from "../_components/Eyebrow";
import { Reveal } from "../_components/Reveal";
import { MockFrame } from "../_components/MockFrame";
import { CaseHero } from "../_components/CaseHero";
import { MetaCard } from "../_components/MetaCard";
import { PainCard } from "../_components/PainCard";
import { PillarCard } from "../_components/PillarCard";
import { OutcomeSection } from "../_components/OutcomeSection";
import { SectionDeco } from "../_components/SectionDeco";
import { ScrollProgress } from "../_components/ScrollProgress";
import { TocSidebar } from "../_components/TocSidebar";
import { CaseNav } from "../_components/CaseNav";
import { Highlight } from "../_components/Highlight";
import { PullQuote } from "../_components/PullQuote";
import { Illustration } from "../_components/Illustration";

export const metadata = {
  title: "Integration feature — CRM × Automation | Duong Ngoc Minh Anh",
  description:
    "Guided integration flow letting CRM admins connect 8+ channels — Zalo OA, FB Messenger, Shopify, public APIs — for data sync, auto-messaging, and lead capture.",
};

const STEPS = [
  {
    n: "01", label: "SELECT TYPE", title: "Pick a channel",
    body: "Categorized grid of 8 channels with one-line purpose hints. Empty state nudges first-time admins toward their first connection.",
    img: "/portfolio/integration/step1-list.png",
  },
  {
    n: "02", label: "CONFIGURE", title: "Auth in the right model",
    body: "Step 2 swaps based on channel — OAuth redirect for FB/Zalo, token field for Slack/WhatsApp, embed snippet for website, key for Shopify.",
    img: "/portfolio/integration/step2-auth.png",
  },
  {
    n: "03", label: "VALIDATE", title: "Token health check",
    body: "Client-side validation first, then a background ping to the provider — inline error with docs link on failure, never silent acceptance.",
    img: "/portfolio/integration/step3-validate.png",
  },
  {
    n: "04", label: "CONFIRM", title: "Review before going live",
    body: "Confirm screen names exactly what will sync, who gets notified on token expiry, and what permissions the CRM is requesting.",
    img: "/portfolio/integration/step4-confirm.png",
  },
  {
    n: "05", label: "SUCCESS + LIVE", title: "Healthy state + next steps",
    body: "Success modal links to the integration detail page, with notification settings already filled in and a live status badge visible.",
    img: "/portfolio/integration/step5-success.png",
  },
];

export default function IntegrationCaseStudy() {
  return (
    <>
      <ScrollProgress color="#F37B23" />
      <Header />
      <TocSidebar
        accent="#F37B23"
        sections={[
          { id: "overview", label: "Overview" },
          { id: "problem", label: "Problem" },
          { id: "approach", label: "Approach" },
          { id: "flow", label: "Key flow" },
          { id: "reflection", label: "Reflection" },
        ]}
      />

      <CaseHero
        caseNumber="CASE STUDY · 04 / 04"
        eyebrow="Case study 04 — CRM × Automation"
        title={
          <>
            Connect a CRM to <span className="text-port-accent">8+ channels</span> — in minutes, with no broken tokens.
          </>
        }
        subtitle="One guided integration flow for FB Messenger, Zalo OA, Instagram, WhatsApp, Slack, Shopify, Embed, and a Public API — designed for trust, recovery, and zero-IT setup."
        tags={["GUIDED INTERACTION", "MULTI-PLATFORM", "AUTOMATION UX", "TRUST UX"]}
        decoVariant="connect"
        decoColor="#F37B23"
        keyFacts={[
          { label: "ROLE", value: "Sole UX/UI designer" },
          { label: "DOMAIN", value: "CRM · Automation" },
          { label: "CHANNELS", value: "8 · chat, e-com, dev" },
          { label: "PATTERNS", value: "Guided wizard, trust UX" },
          { label: "OUTPUT", value: "Flows, UI, design specs" },
        ]}
      />

      {/* ABOUT + META */}
      <section id="overview" className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="dots" /></div>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About the feature</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.75] text-port-body md:text-[22px]">
                Integration is the feature inside a CRM platform that lets{" "}
                <Highlight>non-technical admins connect their workspace</Highlight> to external messaging, e-commerce, and developer channels — enabling{" "}
                <Highlight variant="accent">auto-messaging</Highlight>,{" "}
                <Highlight variant="accent">data sync</Highlight>, and{" "}
                <Highlight variant="accent">lead capture</Highlight> without involving an engineer.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                The feature covers{" "}
                <Highlight variant="strong">eight channels</Highlight> with very different connection models — OAuth bots (FB Messenger, Zalo OA, Instagram, WhatsApp, Slack), credentialed app keys (Shopify), embed snippets (website widget), and a public API token. Each model needed its own configuration UX, but the entry, recovery, and trust patterns had to feel like <em>one consistent surface</em>.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-port-accent-soft p-8 space-y-6">
                {[
                  { icon: <ShoppingBag className="h-4 w-4" />, label: "PRODUCT", value: "CRM platform — internal feature module" },
                  { icon: <Sparkles className="h-4 w-4" />, label: "ROLE", value: "Sole UX/UI designer for the Integration feature" },
                  { icon: <Compass className="h-4 w-4" />, label: "SCOPE", value: "End-to-end — flow, wireframes, UI, design system, handoff" },
                  { icon: <Wallet className="h-4 w-4" />, label: "CHANNELS", value: "8 — chatbot (5), e-commerce (1), web embed (1), public API (1)" },
                  { icon: <ShieldCheck className="h-4 w-4" />, label: "KEY PATTERNS", value: "Guided wizard · Token validation · Recovery / re-sync" },
                ].map(m => (
                  <div key={m.label} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-port-accent/15 text-port-accent">
                      {m.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[1.8px] text-port-accent">{m.label}</p>
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
            <div className="text-port-accent"><SectionDeco variant="pulse" /></div>
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
            <Reveal delay={0}>
              <PainCard
                who="CRM admin" label="FOR THE USER"
                illustration={<Illustration kind="user" />}
                body="Pasting tokens with no validation. No way to tell if a channel was still connected."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <PainCard
                who="Ops & support" label="FOR THE TEAM"
                illustration={<Illustration kind="ops" />}
                body="Every 'why isn't my chatbot replying?' ticket needed manual token inspection. No audit trail."
              />
            </Reveal>
            <Reveal delay={0.16}>
              <PainCard
                who="Engineering" label="FOR DEV"
                illustration={<Illustration kind="dev" />}
                body="Each channel = a different connection model. Bespoke UI meant duplicated code and inconsistent error states."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH 3 PILLARS */}
      <section id="approach" className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="layers" /></div>
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
            <Reveal delay={0}>
              <PillarCard
                n="01" label="PILLAR — DISCOVERY" title="Guided selection over a long flat list"
                illustration={<Illustration kind="discover" />}
                bullets={[
                  "Group 8 channels by type — Chatbot · Messaging · E-com · Dev",
                  "Purpose hint under each channel — admin picks intent first",
                  "One wizard shell for every channel — only step 2 changes",
                ]}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <PillarCard
                n="02" label="PILLAR — TRUST" title="Token health visible at every step"
                illustration={<Illustration kind="trust" />}
                bullets={[
                  "Client-side token validation saves a backend round-trip",
                  "Inline errors link straight to the platform docs",
                  "Status indicator on every card: healthy · stale · expired",
                ]}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <PillarCard
                n="03" label="PILLAR — RECOVERY" title="Token expiry as a normal lifecycle event"
                illustration={<Illustration kind="recovery" />}
                bullets={[
                  "Detect drift automatically and badge the affected card",
                  "One-click resync with a confirm modal — never silent re-auth",
                  "Delete is undoable for 7 days; bulk delete confirms per channel",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — between Approach and Flow */}
      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 pb-8 md:px-12 md:pb-16">
          <PullQuote accent="#F37B23" attribution="Design principle behind the feature">
            <span className="text-port-accent">Integration UX</span> is fundamentally about building{" "}
            <span className="underline decoration-port-accent decoration-4 underline-offset-8">trust</span> in a system the user can&apos;t see end-to-end.
          </PullQuote>
        </div>
      </section>

      {/* KEY FLOW */}
      <section id="flow" className="bg-port-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="flow" /></div>
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

      <div id="reflection" />
      <OutcomeSection
        title="What this taught me — and why it transfers to AI-assisted enterprise UX."
        paragraphs={[
          "Integration UX is fundamentally about building trust in a system the user can't see end-to-end. The same pattern shows up in AI-assisted enterprise design: the user grants the system permission to act on their behalf, and the design has to make outcomes visible, recoverable, and explainable at every step.",
          "The three patterns I leaned on — guided selection, visible status, named consequence — apply directly to AI experiences like conversational flows, agentic actions, and recommendation surfaces. I'm carrying these principles into my exploration of AI-assisted UX patterns next.",
        ]}
        takeaways={[
          { n: "01", label: "GUIDED OVER FLAT", text: "When you have 5+ options of different kinds, group by intent — the picker becomes a question, not a list." },
          { n: "02", label: "STATUS BEATS DOCS", text: "A visible badge replaces a help article. Make the system's current state legible before you write words about it." },
          { n: "03", label: "NAMED CONSEQUENCE", text: "Replace 'Are you sure?' with the exact thing that will happen — it gives the user a real choice, not a yes/no reflex." },
        ]}
      />

      <CaseNav currentSlug="integration" />
      <Footer />
    </>
  );
}
