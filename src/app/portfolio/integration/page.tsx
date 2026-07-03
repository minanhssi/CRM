import {
  ShoppingBag, Sparkles, ShieldCheck, Compass, Layers,
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
  title: "Integration module — AI CRM × 18 platforms | Duong Ngoc Minh Anh",
  description:
    "Guided integration experience letting CRM administrators connect an AI chatbot to 18 external platforms across four categories — social, communication, website, and external systems.",
};

const STEPS = [
  {
    n: "01", label: "SELECT CHANNEL", title: "Choose one of 18 supported platforms",
    body: "Platforms are grouped into four categories — Social Platform, Communication, Website, and External System — so administrators can locate the right integration by business context instead of scanning a long flat list.",
    img: "/portfolio/integration/step1-live.png",
  },
  {
    n: "02", label: "OAUTH AUTHORIZATION", title: "Authorize the CRM through the platform's OAuth flow",
    body: "The administrator signs into the target platform and grants the CRM the specific permissions it needs — no copy-pasting of raw tokens. When a platform uses a different authentication model, the same shell adapts to show only the fields required for that model.",
    img: "/portfolio/integration/step2-live.png",
  },
  {
    n: "03", label: "GENERATE CONNECTION INFO", title: "CRM auto-generates the Webhook URL & Secret Key",
    body: "After authorization, the CRM produces the connection information the third-party platform needs — a Webhook URL to receive real-time events (new messages, orders, business events) and a Secret Key to verify request authenticity. Both values are copy-ready for use inside the external platform.",
    img: "/portfolio/integration/step3-live.png",
  },
  {
    n: "04", label: "INTEGRATION LIVE", title: "Managed from the integration list",
    body: "Once activated, the integration appears in the management list with a connection-status badge. From there administrators can view status, edit configuration, reconnect, disable, or delete the integration at any time.",
    img: "/portfolio/integration/step4-live.png",
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
        eyebrow="AI CRM · Enterprise integration"
        title={
          <>
            Connect an AI CRM to <span className="text-port-accent">18 platforms</span> through one guided integration experience.
          </>
        }
        subtitle="Integration module inside an AI CRM — letting administrators connect an AI chatbot with 18 external platforms across four categories: Social Platform, Communication, Website, and External System."
        tags={["GUIDED SETUP", "PLATFORM CONNECTORS", "ENTERPRISE UX", "AI CRM"]}
        heroTint="peach"
        decoVariant="connect"
        decoColor="#F37B23"
        keyFacts={[
          { label: "ROLE", value: "Sole UX/UI Designer" },
          { label: "PLATFORMS", value: "18 · 4 categories" },
          { label: "PATTERNS", value: "Guided setup · Consistent flow" },
          { label: "OUTPUT", value: "Flows, UI, design specs" },
        ]}
        cover={{
          src: "/portfolio/Thumbnail-Integration.png",
          width: 1440,
          height: 810,
          alt: "Integration — AI CRM connecting to 18 platforms across four categories",
        }}
      />

      {/* ABOUT + META */}
      <section id="overview" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="dots" /></div>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About the feature</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.75] text-port-body md:text-[22px]">
                The Integration module lets CRM administrators <Highlight>connect their AI chatbot to 18 external platforms</Highlight> — from social messaging to communication tools, websites, and other business systems — through one <Highlight variant="accent">consistent setup experience</Highlight>.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                The 18 platforms span four categories — <Highlight variant="strong">Social Platform</Highlight> (Facebook Messenger, Instagram, TikTok…), <Highlight variant="strong">Communication</Highlight> (WhatsApp, Zalo OA, Telegram, Slack, Viber…), <Highlight variant="strong">Website</Highlight> (Shopify, Magento, WordPress, Framer, Website Widget…), and <Highlight variant="strong">External System</Highlight> (Shopee, Lazada, and other systems). Every platform has different authentication and configuration requirements, but the UX presents one guided setup flow so administrators don&apos;t have to learn each platform&apos;s technical model.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-port-accent-soft p-8 space-y-6">
                {[
                  { icon: <ShoppingBag className="h-4 w-4" />, label: "PRODUCT", value: "AI CRM platform — Integration module" },
                  { icon: <Sparkles className="h-4 w-4" />, label: "ROLE", value: "Sole UX/UI — research, UX, UI, dev handoff" },
                  { icon: <Compass className="h-4 w-4" />, label: "SCOPE", value: "End-to-end — flow, wireframes, UI, design system, handoff" },
                  { icon: <Layers className="h-4 w-4" />, label: "PLATFORMS", value: "18 platforms — Social · Communication · Website · External System" },
                  { icon: <ShieldCheck className="h-4 w-4" />, label: "KEY PATTERNS", value: "Guided setup · Platform categorization · Consistent flow" },
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
      <section id="problem" className="border-y border-port-border-soft bg-port-tint-rose">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="pulse" /></div>
            <Eyebrow>The problem</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Non-technical administrators needed a simple way to connect many different business platforms.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-xl leading-[1.65] text-port-body">
              Each of the 18 platforms had its own <Highlight variant="accent">setup process</Highlight>. Technical concepts like API credentials, webhook configuration, and authentication created friction for administrators without engineering backgrounds. Without guidance, integrations were <Highlight variant="strong">difficult to configure, troubleshoot, and maintain</Highlight>.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}>
              <PainCard
                who="CRM administrators" label="FOR THE USER"
                illustration={<Illustration kind="user" />}
                body="A different setup process for every platform. Unfamiliar technical terminology. No easy way to know whether an integration is working correctly."
              />
            </Reveal>
            <Reveal delay={0.08}>
              <PainCard
                who="Support team" label="FOR SUPPORT"
                illustration={<Illustration kind="ops" />}
                body="Frequent tickets caused by incorrect configuration. Difficult to identify configuration mistakes remotely. Manual troubleshooting eating into support capacity."
              />
            </Reveal>
            <Reveal delay={0.16}>
              <PainCard
                who="Engineering" label="FOR DEV"
                illustration={<Illustration kind="dev" />}
                body="Every platform uses different APIs and authentication models. Needed a scalable integration experience that could grow with new platforms without re-designing each one."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH 3 PILLARS */}
      <section id="approach" className="bg-port-tint-peach">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="layers" /></div>
            <Eyebrow>Approach</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Three design pillars to make 18 platforms feel like one experience.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              I organized the module around <Highlight variant="accent">three pillars</Highlight> that address the friction non-technical administrators face when connecting external platforms. Every screen in the module <Highlight variant="strong">traces back</Highlight> to one of these three intents.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Reveal delay={0}>
              <PillarCard
                n="01" label="PILLAR — PLATFORM ORGANIZATION" title="Group 18 platforms into four business-facing categories"
                illustration={<Illustration kind="discover" />}
                bullets={[
                  "Four categories — Social Platform, Communication, Website, External System",
                  "Recognizable platform logos so admins locate by brand, not by internal name",
                  "One guided setup flow reused across every platform",
                ]}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <PillarCard
                n="02" label="PILLAR — CLEAR SETUP GUIDANCE" title="Administrators always know where they are in the flow"
                illustration={<Illustration kind="trust" />}
                bullets={[
                  "Only the fields required for the selected platform are shown",
                  "Configuration progress and current step are visible at every stage",
                  "Validation before activation — the integration goes live only when the admin confirms",
                ]}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <PillarCard
                n="03" label="PILLAR — RELIABLE CONNECTION" title="Auto-generated Webhook URL & Secret Key, explained in plain language"
                illustration={<Illustration kind="recovery" />}
                bullets={[
                  "Webhook URL — receives real-time events (messages, orders, business events) from the connected platform",
                  "Secret Key — verifies request authenticity, preventing unauthorized calls to the CRM",
                  "Copy-ready values, visible connection status, and edit / reconnect available after setup",
                ]}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — between Approach and Flow */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 pb-8 md:px-12 md:pb-16">
          <PullQuote accent="#F37B23" attribution="Design principle behind the module">
            Good{" "}
            <span className="text-port-accent">integration UX</span> isn&apos;t about APIs — it&apos;s about helping{" "}
            <span className="underline decoration-port-accent decoration-4 underline-offset-8">non-technical users</span> confidently connect complex systems.
          </PullQuote>
        </div>
      </section>

      {/* KEY FLOW */}
      <section id="flow" className="border-y border-port-border-soft bg-port-tint-gray">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="flow" /></div>
            <Eyebrow>Key flow</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Adding a new integration — four steps, one consistent flow.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-4xl text-lg leading-[1.65] text-port-body">
              Whether the administrator is connecting Zalo OA, Shopify, or a Website Widget, the sequence stays the same: <Highlight variant="accent">select the channel → authorize via OAuth → generate the Webhook URL & Secret Key → go live</Highlight>. Only the authorization step adapts to the platform&apos;s specific requirements — everything around it is shared, so learning one integration teaches all 18.
            </p>
          </Reveal>
          <div className="mt-20 space-y-24 md:space-y-32">
            {STEPS.map((s, i) => (
              <div key={s.n} className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <MockFrame src={s.img} alt={s.title} width={1792} height={1092} />
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
        title="What this taught me about designing integrations for enterprise software."
        paragraphs={[
          "Designing integrations taught me that users don't think in APIs — they think in business outcomes. The role of the UX is to hide technical complexity while still making configuration transparent and trustworthy. When an administrator connects Shopify or Zalo OA, they don't want to reason about OAuth flows, webhooks, or secret keys — they want to know their AI chatbot is talking to that platform, and that they can see when it stops.",
          "Good integration design isn't about reducing functionality. It's about making technical workflows understandable for administrators without engineering backgrounds — grouping platforms by business context, showing only the fields that matter for the current platform, and explaining Webhook URL and Secret Key by what they do rather than what they are. Consistency does the rest: 18 platforms feel like one product when the shell around them stays the same.",
        ]}
        takeaways={[
          { n: "01", label: "ORGANIZE BEFORE CONFIGURE", text: "Grouping integrations by business context makes large ecosystems easier to navigate. Four categories are more legible than 18 tiles." },
          { n: "02", label: "EXPLAIN TECHNICAL CONCEPTS", text: "Webhook URLs and Secret Keys should be explained through their purpose — what they receive, what they protect — not their implementation." },
          { n: "03", label: "CONSISTENCY BUILDS CONFIDENCE", text: "Although every platform connects differently, using one consistent setup pattern reduces learning time and user errors." },
        ]}
      />

      <CaseNav currentSlug="integration" />
      <Footer />
    </>
  );
}
