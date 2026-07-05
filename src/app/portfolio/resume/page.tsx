import Link from "next/link";
import {
  Download, Mail, MapPin, Globe, ArrowUpRight, Clock, FileText,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Eyebrow } from "../_components/Eyebrow";
import { Reveal } from "../_components/Reveal";

export const metadata = {
  title: "Resume — Duong Ngoc Minh Anh · UX Designer",
  description:
    "Enterprise UX Designer with 3+ years designing workflow applications, SaaS products, and digital banking platforms. Download the PDF or read online.",
};

const CORE_SKILLS: { name: string; accent?: boolean }[] = [
  // Enterprise & Product
  { name: "Enterprise UX", accent: true },
  { name: "Product Design" },
  { name: "User-centered Design" },
  { name: "Workflow Design", accent: true },
  { name: "Enterprise Systems" },
  // UX Research & Strategy
  { name: "User Flow" },
  { name: "Customer Journey" },
  { name: "Information Architecture", accent: true },
  { name: "Interaction Design" },
  { name: "Interaction Models", accent: true },
  { name: "Qualitative Research", accent: true },
  { name: "Usability Testing" },
  { name: "Accessibility" },
  // UI Craft
  { name: "Design System", accent: true },
  { name: "Dashboard Design" },
  { name: "Responsive UI" },
  { name: "Complex Forms" },
  { name: "Wireframing" },
  { name: "Prototyping" },
  // Delivery
  { name: "Cross-functional Collaboration" },
  { name: "Developer Handoff" },
  { name: "Design QA" },
  { name: "Design Thinking" },
];

const EXPERIENCE: {
  role: string;
  company: string;
  period: string;
  freelance?: boolean;
  headline: string;
  bullets: { title: string; body: string }[];
  projects?: { name: string; body: string }[];
}[] = [
  {
    role: "UX/UI Designer",
    company: "MAYTRIX",
    period: "07/2025 — Present",
    headline:
      "Leading UX/UI for a test-prep ed-tech ecosystem — building learning platforms, internal operations tools, and marketing sites.",
    bullets: [
      { title: "Exam Prep & Online Course Platform", body: "Web app for practice tests, mock exams, and self-paced courses." },
      { title: "Internal Operations CRM", body: "Role-based system for accounting, academic affairs, and teaching staff." },
      { title: "Test-Center Landing Pages", body: "Marketing landing pages for the exam-prep center." },
    ],
  },
  {
    role: "UX/UI Designer",
    company: "KIENLONGBANK",
    period: "2023 — 2024",
    headline: "Designed enterprise banking solutions focused on digital lending, employee financial services, and workflow-oriented banking operations.",
    bullets: [],
    projects: [
      {
        name: "Project: Earned Wage Access",
        body: "Designed a flexible salary access platform enabling employees to access earned wages before payday. Created user flows, information architecture, wireframes, prototypes, and high-fidelity UI. Facilitated usability validation sessions with internal users and synthesized findings into workflow improvements. Ensured UI consistency and accessibility (WCAG-aligned) across web and mobile experiences.",
      },
      {
        name: "Project: Loan Origination System",
        body: "Designed an enterprise loan origination platform that streamlined multi-step approval workflows for banking operations. Optimized complex forms, dashboard views, and multi-step approval workflows to improve task completion. Built reusable UI components following design system standards. Collaborated with Product Managers, Business Analysts, Engineers, and QA throughout product delivery.",
      },
    ],
  },
  {
    role: "UX/UI Designer",
    company: "UNICLOUD GROUP",
    period: "2022 — 2023",
    headline: "Designed fintech and enterprise banking products for KienlongBank and internal business platforms.",
    bullets: [
      { title: "KienlongBank Pay", body: "Mobile banking & payment app for retail customers." },
      { title: "UniPOS", body: "POS system for merchant sales and store management." },
      { title: "Pay Gate Core", body: "Payment gateway processing transactions across channels." },
      { title: "eKYC", body: "Electronic identity verification (Know-Your-Customer) onboarding." },
      { title: "UnicloudCA", body: "Digital signature & e-contract certificate authority." },
    ],
  },
  {
    role: "UX/UI Designer",
    company: "PITO",
    period: "Freelance",
    freelance: true,
    headline: "Restaurant-tech design across web and mobile.",
    bullets: [
      { title: "Pito Web Platform", body: "B2B ordering for company meals and event catering." },
      { title: "Pito Mobile App", body: "On-the-go ordering and order tracking for business clients." },
    ],
  },
  {
    role: "UX/UI Designer",
    company: "EVOL",
    period: "Freelance",
    freelance: true,
    headline: "Integrations and workforce operations tools.",
    bullets: [
      { title: "Integration Module", body: "Chat bot, eTag & time-attendance flows built into the platform." },
      { title: "Workforce Management Suite", body: "Manage staff, work locations, and projects on the web." },
      { title: "Project Management Tool", body: "Project tracking connected to the integration services above." },
    ],
  },
];

const FEATURED_PROJECTS = [
  { name: "Enterprise Workforce Management Platform", domain: "Enterprise SaaS" },
  { name: "Education CRM", domain: "CRM Platform" },
  { name: "VTest Learning Platform", domain: "EdTech" },
  { name: "Earned Wage Access", domain: "HR Fintech" },
  { name: "Loan Origination System", domain: "Digital Lending" },
  { name: "Payment Gateway", domain: "Payments" },
  { name: "UniPOS", domain: "Merchant POS" },
  { name: "KienlongBank Pay", domain: "Payment Platform" },
];

const AI_PRODUCT_DESIGN = [
  "AI-assisted enterprise workflows",
  "Conversational interaction design",
  "Prompt-driven UX",
  "Recommendation systems",
  "Human-centered AI interfaces",
];

const TOOLS = [
  "Figma", "Figjam", "Miro", "Jira", "Confluence",
  "Adobe Photoshop", "Adobe Illustrator", "Claude", "Stitch",
  "Google AI Studio", "Superdesign.dev", "v0.dev",
];

export default function ResumePage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-port-border-soft bg-white">
        <div className="mx-auto max-w-[1080px] px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-28">
          <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-start md:gap-12">
            {/* LEFT — text column */}
            <div>
              <Reveal>
                <Eyebrow>Resume</Eyebrow>
                <h1 className="font-serif mt-4 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                  Duong Ngoc Minh Anh<span className="text-port-blue">.</span>
                </h1>
                <p className="mt-3 text-[15px] font-semibold tracking-[2px] uppercase text-port-blue">
                  User Experience Designer
                </p>
                <p className="mt-4 text-[15px] text-port-muted">
                  Enterprise SaaS · B2B · Fintech · Banking · Workflow Systems
                </p>

                {/* Meta strip — last updated + reading time */}
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-port-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#31C48D]" />
                    <span className="font-medium">Last updated · July 2026</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="font-medium">Estimated reading time · 2 min</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    <span className="font-medium">PDF · 2 pages</span>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 grid gap-2 text-[14px] text-port-body sm:grid-cols-2">
                  <ContactItem icon={<MapPin className="h-4 w-4" />} label="Ho Chi Minh City, Vietnam" />
                  <ContactItem
                    icon={<Mail className="h-4 w-4" />}
                    label="minhanhdn9601@gmail.com"
                    href="mailto:minhanhdn9601@gmail.com"
                  />
                  <ContactItem
                    icon={<LinkedinIcon className="h-4 w-4" />}
                    label="linkedin.com/in/duongngocminhanh"
                    href="https://www.linkedin.com/in/duongngocminhanh/"
                  />
                  <ContactItem
                    icon={<Globe className="h-4 w-4" />}
                    label="duongngocminhanh.com"
                    href="/portfolio"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="/resume.pdf"
                    download="Duong-Ngoc-Minh-Anh-CV.pdf"
                    className="group inline-flex items-center gap-2 rounded-full bg-port-blue px-5 py-3 text-[13px] font-semibold text-white transition-all hover:gap-3 hover:bg-port-blue-dark"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <Link
                    href="/portfolio#work"
                    className="group inline-flex items-center gap-2 rounded-full border border-port-border bg-white px-5 py-3 text-[13px] font-semibold text-port-ink transition-colors hover:border-port-ink"
                  >
                    View projects
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* RIGHT — portrait */}
            <Reveal direction="up" delay={0.15}>
              <div className="relative mx-auto w-[220px] md:w-[280px]">
                {/* Circular tint plate that anchors the illustration */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-port-tint-blue/70"
                />
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-full ring-1 ring-port-blue/15"
                />
                {/* Yellow accent dot echoing the About hero */}
                <span
                  aria-hidden
                  className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-port-yellow shadow-[0_4px_10px_-2px_rgba(0,0,0,0.15)]"
                />
                <div className="relative aspect-square overflow-hidden rounded-full shadow-[0_18px_44px_-18px_rgba(15,20,60,0.35)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/portfolio/portrait.jpg"
                    alt="Duong Ngoc Minh Anh portrait"
                    width={400}
                    height={534}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "50% 22%" }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="border-b border-port-border-soft bg-port-tint-blue">
        <div className="mx-auto max-w-[1080px] px-6 py-16 md:px-12 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">PROFESSIONAL SUMMARY</p>
            <p className="mt-4 max-w-3xl text-[18px] leading-[1.65] text-port-ink md:text-[20px]">
              UX Designer with <strong className="font-semibold">3+ years of experience</strong> designing enterprise workflow applications, SaaS products, and digital banking platforms. Experienced in translating user research, business requirements, and operational complexity into <strong className="font-semibold">scalable interaction models</strong>, information architecture, and design systems. Passionate about improving usability, accessibility, and workflow efficiency through <strong className="font-semibold">evidence-driven design</strong> and close collaboration with product, engineering, and research teams.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE SKILLS */}
      <section className="border-b border-port-border-soft bg-white">
        <div className="mx-auto max-w-[1080px] px-6 py-16 md:px-12 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">CORE DESIGN EXPERTISE</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CORE_SKILLS.map(s => (
                <span
                  key={s.name}
                  className={
                    s.accent
                      ? "rounded-full border border-[#D8E6FF] bg-[#EEF4FF] px-3 py-1.5 text-[12px] font-medium text-[#0F5BFF]"
                      : "rounded-full border border-port-border bg-[#F5F7FA] px-3 py-1.5 text-[12px] font-medium text-port-ink"
                  }
                >
                  {s.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="border-b border-port-border-soft bg-white">
        <div className="mx-auto max-w-[1080px] px-6 py-16 md:px-12 md:py-20">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">PROFESSIONAL EXPERIENCE</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-port-ink md:text-4xl">
              Experience timeline.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {EXPERIENCE.map(exp => (
              <Reveal key={`${exp.company}-${exp.period}`} delay={0.05}>
                <div className="rounded-2xl border border-port-border bg-white p-6 md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-[18px] font-semibold text-port-ink">{exp.role}</h3>
                      <span className="text-[11px] font-semibold tracking-[1.5px] text-port-blue">·</span>
                      <p className="text-[14px] font-semibold tracking-[1.4px] text-port-blue">{exp.company}</p>
                      {exp.freelance && (
                        <span className="ml-1 rounded-full bg-port-tint-warm px-2 py-0.5 text-[10px] font-semibold tracking-[1.2px] text-port-accent">
                          FREELANCE
                        </span>
                      )}
                    </div>
                    {!exp.freelance && (
                      <p className="text-[12px] font-medium tracking-[1.2px] text-port-muted">{exp.period}</p>
                    )}
                  </div>

                  {exp.headline && (
                    <p className="mt-3 text-[14px] leading-[1.6] italic text-port-body">{exp.headline}</p>
                  )}

                  {exp.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2 text-[13px] leading-[1.55] text-port-body">
                      {exp.bullets.map(b => (
                        <li key={b.title} className="flex gap-2">
                          <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-port-blue" />
                          <span>
                            <strong className="font-semibold text-port-ink">{b.title}</strong>
                            {" — "}
                            {b.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.projects && (
                    <div className="mt-5 space-y-4 border-l-2 border-port-blue/20 pl-4">
                      {exp.projects.map(pr => (
                        <div key={pr.name}>
                          <p className="text-[13px] font-semibold text-port-ink">{pr.name}</p>
                          <p className="mt-1 text-[13px] leading-[1.6] text-port-body">{pr.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS + AI DESIGN + TOOLS */}
      <section className="border-b border-port-border-soft bg-port-tint-blue">
        <div className="mx-auto max-w-[1080px] px-6 py-16 md:px-12 md:py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Featured projects */}
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">FEATURED PRODUCT PROJECTS</p>
              <ul className="mt-5 divide-y divide-port-border/70 overflow-hidden rounded-xl border border-port-border bg-white">
                {FEATURED_PROJECTS.map(p => (
                  <li key={p.name} className="flex items-center justify-between gap-4 px-5 py-3">
                    <span className="text-[13px] font-medium text-port-ink">{p.name}</span>
                    <span className="shrink-0 text-[11px] font-semibold tracking-[1.2px] text-port-muted">
                      {p.domain}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-[11px] font-semibold tracking-[2.5px] text-port-accent">AI PRODUCT DESIGN</p>
                <ul className="mt-3 space-y-1.5 text-[13px] leading-[1.55] text-port-body">
                  {AI_PRODUCT_DESIGN.map(item => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-port-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Tools + Education + Credentials + Languages */}
            <Reveal delay={0.1}>
              <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">DESIGN, PM &amp; AI TOOLS</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {TOOLS.map(t => (
                  <span
                    key={t}
                    className="rounded-full border border-port-border bg-white px-3 py-1.5 text-[12px] font-medium text-port-ink"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-5">
                <InfoBlock label="EDUCATION">
                  <p className="text-[14px] font-semibold text-port-ink">University of Economics and Law</p>
                  <p className="mt-0.5 text-[13px] text-port-body">
                    Bachelor of Management Information Systems
                  </p>
                  <p className="mt-0.5 text-[12px] tracking-[1.2px] text-port-muted">2018 — 2022</p>
                </InfoBlock>

                <InfoBlock label="CREDENTIALS">
                  <p className="text-[13px] font-medium text-port-ink">
                    Google UX Design Professional Certificate
                  </p>
                </InfoBlock>

                <InfoBlock label="LANGUAGES">
                  <ul className="grid gap-1 text-[13px] leading-[1.5]">
                    <li className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold text-port-ink">Vietnamese</span>
                      <span className="text-port-muted">Native</span>
                    </li>
                    <li className="flex items-baseline justify-between gap-3">
                      <span className="font-semibold text-port-ink">English</span>
                      <span className="text-port-muted">Professional Working Proficiency</span>
                    </li>
                  </ul>
                </InfoBlock>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section className="bg-port-ink text-white">
        <div className="mx-auto max-w-[1080px] px-6 py-16 md:px-12 md:py-20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold tracking-[2.5px] text-port-yellow">DOWNLOAD RESUME</p>
              <h2 className="mt-2 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                Need the offline copy?
              </h2>
              <p className="mt-3 text-[13px] text-white/60">
                Last updated: July 2026 · PDF · 2 pages
              </p>
            </div>
            <a
              href="/resume.pdf"
              download="Duong-Ngoc-Minh-Anh-CV.pdf"
              className="group inline-flex items-center gap-3 rounded-full bg-port-yellow px-6 py-4 text-[14px] font-semibold text-port-blue-dark transition-all hover:gap-4 hover:bg-white"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactItem({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const body = (
    <span className="inline-flex items-center gap-2 text-port-body">
      <span className="text-port-blue">{icon}</span>
      {label}
    </span>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="hover:text-port-blue">
      {body}
    </a>
  ) : (
    body
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[2.5px] text-port-blue">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
