import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Eyebrow } from "./_components/Eyebrow";
import { Reveal } from "./_components/Reveal";
import { SapCallout } from "./_components/SapCallout";
import { Highlight } from "./_components/Highlight";
import { DecoShapes } from "./_components/DecoShapes";

const PROJECTS = [
  {
    n: "01",
    slug: "klbp",
    badge: "FLAGSHIP",
    badgeColor: "bg-port-blue text-white",
    title: "KienlongBank Pay",
    summary:
      "Multi-module back-office for a payment gateway: partner approval, employee management, transaction tracking, and configurable cash-flow workflows.",
    tags: ["Enterprise CMS", "Workflow design", "Design system", "Multi-role", "Banking"],
    thumb: "/portfolio/klbp/hero.png",
    thumbW: 1902, thumbH: 1121,
  },
  {
    n: "02",
    slug: "ewa",
    badge: "FINTECH × HR",
    badgeColor: "bg-[#4F5BD5] text-white",
    title: "Earned Wage Access",
    summary:
      "End-to-end design across 3 platforms — worker web, company admin portal, and worker mobile app — letting employees draw earned wages 24/7.",
    tags: ["Admin portal", "Mobile app", "Responsive", "User testing", "Payroll"],
    thumb: "/portfolio/ewa/hero.png",
    thumbW: 2064, thumbH: 1440,
  },
  {
    n: "03",
    slug: "ezpos",
    badge: "B2B RETAIL",
    badgeColor: "bg-[#109C84] text-white",
    title: "EzPOS",
    summary:
      "Mobile POS app for merchants — quick card & QR payments, transaction history, and simplified daily reconciliation.",
    tags: ["Mobile", "POS", "Payment", "Merchant tools", "Full UX process"],
    thumb: "/portfolio/ezpos/hero.png",
    thumbW: 1480, thumbH: 1062,
  },
  {
    n: "04",
    slug: "integration",
    badge: "CRM × AUTOMATION",
    badgeColor: "bg-port-accent text-white",
    title: "Integration feature",
    summary:
      "Guided integration flow letting CRM admins connect FB Messenger, Zalo OA, Instagram, WhatsApp, Shopify, and public APIs — for data sync, auto-messaging, and lead capture.",
    tags: ["Guided interaction", "Multi-platform", "Automation UX", "CRM"],
    thumb: "/portfolio/integration/hero.png",
    thumbW: 1440, thumbH: 1096,
  },
];

const SKILL_COLS = [
  {
    label: "RESEARCH",
    title: "Discover & frame the problem",
    items: [
      "User interviews and usability testing",
      "Information architecture & workflow analysis",
      "Synthesizing qualitative & quantitative input",
      "Translating business and tech constraints into design",
    ],
  },
  {
    label: "DESIGN",
    title: "Craft the experience",
    items: [
      "Interaction design & user flows",
      "Wireframing & high-fidelity prototyping",
      "Responsive web + mobile UI",
      "Design systems & component libraries",
    ],
  },
  {
    label: "DELIVERY",
    title: "Collaborate & ship",
    items: [
      "End-to-end ownership (research → handoff)",
      "Close collaboration with PO and engineering",
      "Accessibility-aware design",
      "Exploring AI-assisted UX patterns",
    ],
  },
];

export default function PortfolioOverview() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white text-port-ink">
        <DecoShapes variant="hero" />
        <div className="relative mx-auto max-w-[1320px] px-6 pb-28 pt-16 md:px-12 md:pb-40 md:pt-24">
          <Reveal direction="up">
            <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-port-accent">
              01. — Intro
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <p className="mt-3 text-[15px] font-semibold tracking-[3px] uppercase text-port-blue">
              UX Designer Portfolio
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="font-serif mt-8 text-[64px] leading-[0.92] tracking-tight md:text-[140px] lg:text-[160px]">
              Duong Ngoc<br />Minh Anh<span className="text-port-blue">.</span>
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.18}>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-port-blue" aria-hidden />
              <p className="text-[15px] font-medium text-port-blue underline decoration-port-blue/40 decoration-1 underline-offset-4">
                Portfolio of Duong Ngoc Minh Anh
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.24}>
            <p className="mt-8 max-w-3xl text-xl leading-[1.55] text-port-ink md:text-2xl">
              UX Designer — 3+ years building{" "}
              <span
                className="bg-port-yellow/60 px-1.5 font-semibold text-port-ink"
                style={{ boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}
              >
                enterprise &amp; B2B workflows
              </span>{" "}
              for fintech, payment, and CRM products.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.32}>
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-[15px]">
              <a
                href="mailto:minhanhdn9601@gmail.com"
                className="group inline-flex items-center gap-3 font-medium text-port-ink transition-colors hover:text-port-blue"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-port-blue text-white shadow-[0_6px_16px_-6px_rgba(45,57,207,0.5)] transition-transform group-hover:scale-105">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="underline decoration-port-blue/30 decoration-2 underline-offset-4 transition-colors group-hover:decoration-port-blue">
                  minhanhdn9601@gmail.com
                </span>
              </a>
              <span className="text-port-muted">·</span>
              <a
                href="https://www.linkedin.com/in/duongngocminhanh/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 font-medium text-port-ink transition-colors hover:text-port-blue"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-port-blue text-white shadow-[0_6px_16px_-6px_rgba(45,57,207,0.5)] transition-transform group-hover:scale-105">
                  <LinkedinIcon className="h-4 w-4" />
                </span>
                <span className="underline decoration-port-blue/30 decoration-2 underline-offset-4 transition-colors group-hover:decoration-port-blue">
                  linkedin.com/in/duongngocminhanh
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-y border-port-border-soft bg-port-tint-blue">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>01 — Intro</Eyebrow>
            <h2 className="font-serif mt-4 text-5xl tracking-tight md:text-7xl">About</h2>
          </Reveal>
          <div className="mt-16 grid gap-16 md:grid-cols-[1fr_320px] md:gap-24">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.75] text-port-body md:text-[22px]">
                I design <Highlight variant="blue">end-to-end UX for enterprise products</Highlight> — translating complex business workflows into clear, accessible interfaces. My work spans{" "}
                <Highlight>fintech back-office systems</Highlight>,{" "}
                <Highlight>payment platforms</Highlight>, and{" "}
                <Highlight>CRM automation</Highlight> — where I lead research, interaction design, and design-system contributions in close collaboration with product and engineering.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-port-muted">
                Currently exploring{" "}
                <Highlight variant="yellow">AI-assisted and guided-interaction patterns</Highlight> to enrich enterprise experiences.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-10">
                {[
                  ["3+", "YEARS EXPERIENCE"],
                  ["4", "ENTERPRISE PROJECTS"],
                  ["3", "PLATFORMS / PRODUCT"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <p className="font-bold text-5xl text-port-ink md:text-6xl">{n}</p>
                    <p className="mt-2 text-xs font-medium tracking-[1.5px] text-port-muted">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <SapCallout />
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-12 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>02 — Case studies</Eyebrow>
                <h2 className="font-serif mt-3 text-5xl tracking-tight md:text-6xl">Selected work</h2>
              </div>
              <p className="max-w-md text-[15px] leading-[1.55] text-port-muted">
                Four enterprise / B2B case studies — click any card to open the full write-up.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={`/portfolio/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-port-border bg-white transition-all duration-500 hover:-translate-y-1 hover:border-port-ink hover:shadow-[0_28px_60px_-16px_rgba(21,21,21,0.18)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-port-tint-gray">
                    <Image
                      src={p.thumb}
                      alt={`${p.title} — hero banner`}
                      width={p.thumbW}
                      height={p.thumbH}
                      quality={92}
                      sizes="(min-width: 1280px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <div className="absolute right-3 top-3">
                      <span className={`rounded-full px-2.5 py-1 text-[9px] font-semibold tracking-[1.4px] shadow-sm ${p.badgeColor}`}>{p.badge}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-medium tracking-[1.8px] text-port-muted">{p.n}</p>
                    <h3 className="font-semibold mt-1.5 text-xl leading-tight tracking-tight text-port-ink">{p.title}</h3>
                    <p className="mt-2.5 line-clamp-2 text-[13px] leading-[1.5] text-port-body">{p.summary}</p>
                    <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.5px] text-port-ink transition-transform group-hover:translate-x-1">
                      View case study
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative overflow-hidden border-y border-port-border-soft bg-port-tint-peach text-port-ink">
        <DecoShapes variant="skills" parallax={false} />
        <div className="relative mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>03 — Approach</Eyebrow>
            <h2 className="font-serif mt-4 text-5xl leading-tight tracking-tight md:text-7xl">
              Skills &amp; <span className="text-port-blue">approach</span>
              <span className="text-port-yellow">.</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {SKILL_COLS.map((col, i) => (
              <Reveal key={col.label} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-port-border bg-white p-9 text-port-ink shadow-[0_12px_30px_-16px_rgba(21,21,21,0.12)]">
                  <p className="text-[11px] font-semibold tracking-[2px] text-port-blue">{col.label}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight md:text-2xl">{col.title}</h3>
                  <ul className="mt-7 space-y-3 text-[15px] leading-[1.55] text-port-body">
                    {col.items.map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
