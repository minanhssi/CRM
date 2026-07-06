import {
  ShoppingBag, Sparkles, ShieldCheck, Compass, Layers,
  Users, Briefcase, Headphones, UserCog, Wrench, Building2,
  KeyRound, Link2, Wifi, Clock, AlertCircle, RotateCcw, CheckCircle2, MessagesSquare,
  ClipboardCheck, Puzzle, Cog,
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
  title: "Integration module — Guided CRM integration flow for 18 platforms | Duong Ngoc Minh Anh",
  description:
    "Guided setup experience letting non-technical CRM administrators connect 18 external platforms — social, communication, website, and external systems — through one consistent integration flow.",
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
          { id: "roles", label: "Roles" },
          { id: "constraints", label: "Constraints" },
          { id: "approach", label: "Approach" },
          { id: "flow", label: "Key flow" },
          { id: "states", label: "States" },
          { id: "decisions", label: "Decisions" },
          { id: "components", label: "Components" },
          { id: "validation", label: "Validation" },
          { id: "reflection", label: "Reflection" },
        ]}
      />

      <CaseHero
        caseNumber="CASE STUDY · 04 / 04"
        eyebrow="Enterprise CRM · Guided integration"
        title={
          <>
            One <span className="text-port-accent">guided setup flow</span> to connect a CRM to 18 different business platforms.
          </>
        }
        subtitle="Integration module inside an enterprise CRM — letting non-technical administrators connect 18 external platforms across four categories (Social Platform, Communication, Website, External System) through a single consistent setup experience."
        tags={["GUIDED SETUP", "INTEGRATION UX", "PLATFORM CONNECTORS", "ENTERPRISE CRM"]}
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
                The Integration module is the surface where CRM administrators <Highlight>connect the CRM to 18 external business platforms</Highlight> — from social messaging to communication tools, websites, and marketplaces — through one <Highlight variant="accent">consistent setup experience</Highlight>. It handles authentication, permission setup, webhook configuration, data sync, and message routing behind a UI a non-technical admin can actually use.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                The 18 platforms span four categories — <Highlight variant="strong">Social Platform</Highlight> (Facebook Messenger, Instagram, TikTok…), <Highlight variant="strong">Communication</Highlight> (WhatsApp, Zalo OA, Telegram, Slack, Viber…), <Highlight variant="strong">Website</Highlight> (Shopify, Magento, WordPress, Framer, Website Widget…), and <Highlight variant="strong">External System</Highlight> (Shopee, Lazada, and other business systems). Every platform has different authentication and configuration requirements, but the UX presents one guided setup flow so administrators don&apos;t have to learn each platform&apos;s technical model.
              </p>
              <p className="mt-4 text-[14px] leading-[1.55] italic text-port-muted">
                Note on scope: the wider CRM product uses AI for chatbot conversations. This case study focuses on the <strong className="font-semibold not-italic text-port-ink">integration setup workflow</strong> — how administrators connect the CRM to external platforms — not on AI model design or conversational UX.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-port-accent-soft p-8 space-y-6">
                {[
                  { icon: <ShoppingBag className="h-4 w-4" />, label: "PRODUCT", value: "Enterprise CRM — Integration module" },
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

      {/* USER ROLES */}
      <section id="roles" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="dots" /></div>
            <Eyebrow>User roles</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Five roles, one integration surface.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              The Integration module isn&apos;t used by one persona — it&apos;s used by different people at different points in the integration&apos;s lifecycle. Understanding what each role owns, needs, and worries about is what turned &quot;design a settings page&quot; into <Highlight variant="accent">design an enterprise integration workflow</Highlight>.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <UserCog className="h-5 w-5" />, who: "CRM Admin", needs: "A predictable way to add, edit, and disable integrations without asking engineering.", owns: "Which platforms are connected and how they're configured.", cares: "Setup speed, connection status, minimal technical jargon." },
              { icon: <Headphones className="h-5 w-5" />, who: "Customer Support Manager", needs: "Visibility into which channels are receiving customer conversations right now.", owns: "Support-team access to conversations, agent routing rules.", cares: "Live channels, message flow, escalation to specific inboxes." },
              { icon: <Cog className="h-5 w-5" />, who: "Operations Admin", needs: "Ability to configure permission tiers, monitor integration health, and respond to failures.", owns: "Role-based access control, operational monitoring.", cares: "Who can connect what, failed connections, sync errors, audit trail." },
              { icon: <Briefcase className="h-5 w-5" />, who: "Business Owner", needs: "A high-level view that the platforms customers use are actually connected and working.", owns: "Business decisions about which platforms matter.", cares: "Coverage across categories, uptime, cost of unavailable channels." },
              { icon: <Wrench className="h-5 w-5" />, who: "Internal setup / technical support", needs: "A way to help admins finish setup when a platform's requirements don't match the default flow.", owns: "First-line integration support, custom platform mappings.", cares: "Reproducible setup, useful error messages, actionable diagnostic info." },
              { icon: <ShieldCheck className="h-5 w-5" />, who: "Compliance & security", needs: "Assurance that credentials are stored securely and access is scoped correctly.", owns: "Platform-level security posture.", cares: "Token expiry, permission scope, revocation, event auditability." },
            ].map((r, i) => (
              <Reveal key={r.who} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-7">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-port-accent text-white">{r.icon}</div>
                  <h3 className="text-[17px] font-semibold text-port-ink">{r.who}</h3>
                  <dl className="mt-4 space-y-3 text-[13px] leading-[1.5]">
                    <div>
                      <dt className="text-[10px] font-semibold tracking-[1.5px] text-port-accent">NEEDS</dt>
                      <dd className="mt-1 text-port-body">{r.needs}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold tracking-[1.5px] text-port-accent">OWNS</dt>
                      <dd className="mt-1 text-port-body">{r.owns}</dd>
                    </div>
                    <div>
                      <dt className="text-[10px] font-semibold tracking-[1.5px] text-port-accent">CARES ABOUT</dt>
                      <dd className="mt-1 text-port-body">{r.cares}</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION CONSTRAINTS */}
      <section id="constraints" className="border-y border-port-border-soft bg-port-tint-peach/40">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="layers" /></div>
            <Eyebrow>Integration constraints</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              The technical realities every platform brings to the table.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Each of the 18 platforms has its own way of authenticating, permissioning, and delivering events. The UX has to sit on top of that variance without leaking it to the admin — while still handling the reality that <Highlight variant="accent">tokens expire, permissions change, and connections drop</Highlight>.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <KeyRound className="h-5 w-5" />, title: "Platform authentication", body: "OAuth 2.0 for most, API-key for some, custom SSO for a few. The setup flow adapts per platform without exposing the mechanism to the admin." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "Access permissions", body: "Different platforms require different scopes. The UI shows what will be requested before the OAuth prompt so admins can approve or escalate to their operations team." },
              { icon: <KeyRound className="h-5 w-5" />, title: "API keys & tokens", body: "Some platforms return long-lived tokens, others rotate them. The design has to store, refresh, and surface expiry without asking the admin to touch the values." },
              { icon: <Link2 className="h-5 w-5" />, title: "Webhook setup", body: "Each integration generates a Webhook URL the third-party platform posts events to. Copy-ready, versioned, and revokable — the admin can regenerate if the URL leaks." },
              { icon: <Compass className="h-5 w-5" />, title: "Channel mapping", body: "Which platform channel maps to which CRM inbox, agent group, or automation. Mapping happens after auth, before test, so mistakes are visible before the integration goes live." },
              { icon: <Layers className="h-5 w-5" />, title: "Data synchronization", body: "Contacts, conversations, and events flow both ways per platform's rules. The UI names what will sync and what won't, so admins don't discover the boundary in production." },
              { icon: <Puzzle className="h-5 w-5" />, title: "Message routing rules", body: "Where an inbound message ends up — which agent, which queue, which automation. Rules are shared across integrations so admins learn once." },
              { icon: <Clock className="h-5 w-5" />, title: "Expired token handling", body: "When a token expires or is revoked, the integration transitions to Reconnect Required. The admin gets a one-tap path to re-authorize without redoing configuration." },
              { icon: <RotateCcw className="h-5 w-5" />, title: "Failed connection recovery", body: "Failures are named specifically — permission revoked, webhook rejected, provider outage — so the recovery step is obvious instead of a generic retry." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-port-accent/10 text-port-accent">{c.icon}</div>
                  <h3 className="text-[16px] font-semibold text-port-ink">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-port-body">{c.body}</p>
                </div>
              </Reveal>
            ))}
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
              Whether the administrator is connecting Zalo OA, Shopify, or a Website Widget, the sequence stays the same. Only the authorization step adapts to the platform&apos;s specific requirements — everything around it is shared, so learning one integration teaches all 18.
            </p>
          </Reveal>

          {/* 6-step guided setup principle */}
          <Reveal delay={0.15}>
            <div className="mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
              {[
                { n: "01", title: "Choose platform", state: "Discover" },
                { n: "02", title: "Authenticate via OAuth / permission setup", state: "Authorize" },
                { n: "03", title: "Configure channel or webhook settings", state: "Configure" },
                { n: "04", title: "Map fields / routing rules", state: "Map" },
                { n: "05", title: "Test connection", state: "Verify" },
                { n: "06", title: "Confirm and manage integration", state: "Manage" },
              ].map((step, i) => (
                <div key={step.n} className="relative flex h-full flex-col rounded-xl border border-port-border bg-white p-4">
                  <p className="font-bold text-xl text-port-accent">{step.n}</p>
                  <p className="mt-2 text-[9px] font-semibold tracking-[1.4px] uppercase text-port-accent">{step.state}</p>
                  <p className="mt-2 text-[12px] font-medium leading-[1.35] text-port-ink">{step.title}</p>
                  {i < 5 && (
                    <span aria-hidden className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block text-port-accent">→</span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] leading-[1.55] italic text-port-muted">
              Why this beats a single long form: each step limits the admin to one decision at a time, surfaces platform-specific fields only when needed, and lets the flow recover from a failed test before the integration goes live. The four mock screens below show how the shell renders on real platforms — every integration composes from this same sequence.
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

      {/* CONNECTION STATES & ERROR STATES */}
      <section id="states" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="pulse" /></div>
            <Eyebrow>Connection &amp; error states</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              Nine states that carry the integration&apos;s trust.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              An integration UX fails if the admin can&apos;t tell whether the connection is working. I defined <Highlight variant="accent">nine canonical states</Highlight> that any integration can be in — each with a clear label, a recommended next action, and a visual treatment that reads the same across all 18 platforms.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { label: "Not connected", body: "Never set up. The next action is to start the guided flow." },
              { label: "Connecting", body: "Setup in progress. Show step + estimated time; block edits." },
              { label: "Connected", body: "Live and healthy. Show last successful event + one-tap manage." },
              { label: "Pending verification", body: "Waiting for the platform to confirm. Explain what's expected + when to worry." },
              { label: "Missing permission", body: "OAuth was granted but a scope is missing. One-tap re-authorize with the missing scope highlighted." },
              { label: "Expired token", body: "Auth valid, but token needs refresh. Silent refresh where possible; otherwise a Reconnect Required nudge." },
              { label: "Failed connection", body: "Explicit failure. Show the platform's reason + a specific recovery step, not a generic retry." },
              { label: "Reconnect required", body: "Admin action needed. Preserve configuration; only re-auth is required." },
              { label: "Sync error", body: "Auth works but data flow is broken. Point at what failed (webhook, field mapping, quota) with an actionable fix." },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.03}>
                <div className="h-full rounded-xl border border-port-border bg-white p-5">
                  <p className="text-[10px] font-semibold tracking-[1.6px] text-port-accent">STATE</p>
                  <p className="mt-2 text-[15px] font-semibold text-port-ink">{s.label}</p>
                  <p className="mt-2 text-[12px] leading-[1.5] text-port-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section id="decisions" className="border-y border-port-border-soft bg-port-tint-peach/40">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="dots" /></div>
            <Eyebrow>Design decisions</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              What I decided — and why.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Seven choices carried most of the weight. Each was resolved by asking the same question — <Highlight variant="accent">what does a non-technical admin actually need in this moment?</Highlight>
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { title: "Guided flow instead of one long configuration form", why: "A long form assumes the admin knows every field applies to their platform. A guided flow limits the admin to one decision at a time, hides irrelevant fields, and lets the design gate errors to the step that caused them instead of the final submit." },
              { title: "One consistent flow across every platform", why: "Different platforms need different fields, but every platform benefits from the same six-step spine (choose → auth → configure → map → test → confirm). Learning one integration teaches all 18, and the admin builds muscle memory instead of re-learning per platform." },
              { title: "Platform-specific settings inside the same shell", why: "The variance is real — some platforms need webhook URLs, some don't; some need field mapping, some don't. Rendering platform-specific fields inside the shared shell keeps the mental model steady while still respecting each platform's rules." },
              { title: "Show permission requirements before authentication", why: "OAuth prompts are opaque and jarring. Surfacing the scopes the CRM will request — with a plain-language explanation — before the platform's OAuth screen means the admin approves knowingly, and can escalate to their operations team before granting." },
              { title: "Connection status visible after setup", why: "The most common admin question is 'is this still working?' — surfacing state (Connected, Pending, Reconnect Required, Failed) on the integration list card is faster than opening the detail view. The list becomes the health dashboard." },
              { title: "Test connection before final confirmation", why: "Activating an integration that quietly doesn't work is worse than a slow setup. A test step at the end of configuration catches misconfigured webhooks, missing scopes, and unreachable endpoints while the admin still has the context to fix them." },
              { title: "Plain-language error messages instead of raw API errors", why: "'HTTP 401 Unauthorized' tells the admin nothing. 'Your Shopify token was revoked — reconnect to restore the integration' names the cause, the impact, and the fix. The API error is available in a diagnostic drawer for the support team." },
            ].map((d, i) => (
              <Reveal key={d.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                  <p className="text-[10px] font-semibold tracking-[2px] text-port-accent">DECISION</p>
                  <h3 className="mt-3 text-[18px] font-semibold text-port-ink">{d.title}</h3>
                  <p className="mt-4 text-[10px] font-semibold tracking-[2px] text-port-accent">WHY</p>
                  <p className="mt-2 text-[13px] leading-[1.6] text-port-body">{d.why}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPONENT THINKING */}
      <section id="components" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="layers" /></div>
            <Eyebrow>Component thinking</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              A pattern library tuned for scaling to more platforms.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              Because every integration composes from the same shell, the visual + interaction patterns had to be <Highlight variant="accent">reusable, composable, and stable</Highlight>. Adding platform #19 should be a content change, not a design cycle.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Integration card", body: "Platform logo + name + status badge + last-event timestamp. One card design carries every platform on the management list." },
              { title: "Platform selector", body: "Category-first grid with logos, search, and filters. Adding a new platform is a config entry, not a layout change." },
              { title: "Stepper flow", body: "Six-step spine with clear current-step, completed-step, and disabled-step states. Same stepper renders every platform." },
              { title: "Permission checklist", body: "OAuth scopes listed with plain-language descriptions before the OAuth prompt. Missing scopes highlight after connection." },
              { title: "Status badge", body: "Icon + color + label. One badge design carries all nine states; state name never renders alone." },
              { title: "Error message pattern", body: "Cause + impact + fix, in that order. A diagnostic drawer surfaces the raw API error for support." },
              { title: "Connection summary", body: "Post-setup card showing what's connected, what will sync, and where events will land. Reuses the same layout on the confirmation screen and the detail view." },
              { title: "Reconnect action", body: "One-tap re-auth that preserves configuration. Renders on the card, in the detail view, and in the notification — same affordance, three surfaces." },
              { title: "Empty state — no integrations", body: "Explains what integrations do + one primary CTA to start the guided flow. Doesn't hide behind a decorative illustration." },
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

      {/* VALIDATION & COLLABORATION */}
      <section id="validation" className="border-y border-port-border-soft bg-port-tint-peach/40">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <div className="text-port-accent"><SectionDeco variant="arrow" /></div>
            <Eyebrow>Validation &amp; collaboration</Eyebrow>
            <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">
              How the design was validated — without formal user studies.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl text-lg leading-[1.65] text-port-body">
              CRM admins sit behind customer NDAs and the setup happens infrequently — a formal usability study wasn&apos;t feasible. Validation happened through the review paths that were available: <Highlight variant="accent">stakeholder walkthroughs, prototype critiques, and engineering feasibility reviews</Highlight> — each session focused on a specific lens the design had to survive.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.05}>
              <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-port-accent text-white">
                  <MessagesSquare className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-port-ink">Validation activities</h3>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.55] text-port-body">
                  {[
                    "Stakeholder walkthroughs — running the full setup flow with product, business, and support teams end-to-end on a single platform",
                    "Prototype reviews — testing the stepper + shell against three platforms with very different auth models",
                    "Design critiques — reviewing status badges, error copy, and permission checklists with the product team",
                    "Engineering feasibility review — checking which states the platform SDKs could reliably surface, which edge cases could happen in production",
                    "Setup-flow review with internal users — walking the flow with an operations admin who would eventually use the module",
                    "Error-message review with the technical team — translating API errors into cause + impact + fix language",
                  ].map(pt => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="h-full rounded-2xl border border-port-border bg-white p-8 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-port-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-port-ink">Refined after feedback</h3>
                <ul className="mt-4 space-y-2 text-[14px] leading-[1.55] text-port-body">
                  {[
                    "Simplified setup steps — dropped an intermediate configuration screen where the required fields were empty for most platforms",
                    "Clearer permission explanation — added a scope checklist above the OAuth CTA after operations flagged that admins didn't know what they were about to authorize",
                    "Improved error messages — replaced 'connection failed' with the specific cause + fix after the support team walked through their common tickets",
                    "Stronger connection status visibility — moved the status badge from the detail view to the list card so admins see health at a glance",
                    "Refined platform selection — added categories after the first prototype showed 18 platforms in one grid felt like scanning a directory",
                    "Clearer confirmation screen — surfaced Webhook URL + Secret Key + connection summary together instead of on separate steps",
                  ].map(pt => (
                    <li key={pt} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 rounded-2xl border border-port-accent/20 bg-white/70 p-8">
              <p className="text-[11px] font-semibold tracking-[2px] text-port-accent">
                <Users className="mr-1 inline h-4 w-4 align-[-3px]" />
                COLLABORATION · WHO SHAPED THE DESIGN
              </p>
              <p className="mt-3 text-[15px] leading-[1.65] text-port-body">
                Design decisions were aligned against three lenses at every checkpoint: <strong className="font-semibold text-port-ink">business requirements</strong> with the Product Owner, Product Manager, and Business Analyst — which platforms mattered, how customers would use them; <strong className="font-semibold text-port-ink">technical feasibility</strong> with engineering, QA, and the technical integration team — which states the SDKs could surface, which platform requirements couldn&apos;t be hidden, how each platform&apos;s edge cases actually behaved in production; and <strong className="font-semibold text-port-ink">operational reality</strong> with Customer Support and Operations — what a real support ticket looks like, where admin confidence breaks down, which error paths are common enough to design for.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="reflection" />
      <OutcomeSection
        title="What designing an enterprise integration module taught me about UX."
        paragraphs={[
          "Good integration UX is not about exposing more technical options. It's about guiding non-technical administrators through complex setup steps in a way that feels predictable, recoverable, and trustworthy. The admin doesn't want to reason about OAuth flows, webhooks, or scope strings — they want to know the CRM is talking to Shopify, and that they can see when it stops.",
          "The design work that mattered most on this project happened before any high-fidelity screen: mapping the roles, naming the constraints, drawing the six-step spine, defining the nine canonical states, deciding the vocabulary of error and recovery. When those foundations were honest, adding a new platform became a content decision — not a design cycle. When they were fuzzy, no amount of consistency in the shell covered it up.",
        ]}
        takeaways={[
          { n: "01", label: "GUIDE, DON'T EXPOSE", text: "Enterprise integration UX is about hiding technical complexity while making configuration transparent and trustworthy — not about surfacing more options." },
          { n: "02", label: "NAME EVERY STATE", text: "In an integration product, admin confidence lives in the status field. Every state — Connected, Pending, Reconnect Required, Failed — needs a specific label and a specific next action." },
          { n: "03", label: "ONE SPINE, MANY PLATFORMS", text: "Consistency across platforms is what turns 18 integrations into one product. The shell teaches the admin once; the platform-specific fields fit inside it." },
        ]}
      />

      <CaseNav currentSlug="integration" />
      <Footer />
    </>
  );
}
