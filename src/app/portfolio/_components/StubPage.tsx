import { Header } from "./Header";
import { Footer } from "./Footer";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { BackLink } from "./BackLink";

export function StubPage({
  badge,
  badgeColor,
  caseNumber,
  title,
  subtitle,
  intro,
  meta,
  paragraphs,
  highlights,
}: {
  badge: string;
  badgeColor: string;
  caseNumber: string;
  title: string;
  subtitle: string;
  intro: string;
  meta: { label: string; value: string }[];
  paragraphs: string[];
  highlights: { title: string; body: string }[];
}) {
  return (
    <>
      <Header />
      <section className="bg-port-ink text-[#F5F0E3]">
        <div className="mx-auto max-w-[1320px] px-6 pt-10 md:px-12 md:pt-12">
          <div className="flex items-center justify-between">
            <BackLink />
            <span className="text-[11px] font-medium tracking-[2px] text-[#F5F0E3]/45">{caseNumber}</span>
          </div>
          <div className="mt-2 h-px w-full bg-[#F5F0E3]/15" />
        </div>
        <div className="mx-auto max-w-[1320px] px-6 pb-28 pt-16 md:px-12 md:pb-40 md:pt-24">
          <Reveal>
            <span className={`inline-block rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[1.5px] ${badgeColor}`}>{badge}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif mt-8 text-[44px] leading-[1.04] tracking-tight md:text-[88px]">{title}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-3xl text-lg leading-[1.6] text-[#F5F0E3]/75 md:text-xl">{subtitle}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-port-cream">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Project overview</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">About this project</h2>
          </Reveal>
          <div className="mt-14 grid gap-16 md:grid-cols-[1fr_400px] md:gap-20">
            <Reveal delay={0.1}>
              <p className="text-xl leading-[1.65] text-port-body md:text-[22px]">{intro}</p>
              {paragraphs.map((p, i) => (
                <p key={i} className="mt-6 text-lg leading-[1.65] text-port-muted">
                  {p}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-port-cream-light p-8 space-y-7">
                {meta.map(m => (
                  <div key={m.label}>
                    <p className="text-[11px] font-semibold tracking-[1.8px] text-port-blue">{m.label}</p>
                    <p className="mt-1.5 text-[15px] leading-[1.45] font-medium text-port-ink">{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-port-cream-light">
        <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
          <Reveal>
            <Eyebrow>Highlights</Eyebrow>
            <h2 className="font-serif mt-4 text-4xl tracking-tight md:text-6xl">What this case study covers</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-port-border bg-port-cream p-8">
                  <h3 className="text-xl font-semibold text-port-ink">{h.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-port-body">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-20 rounded-2xl bg-port-blue p-10 text-center md:p-14">
              <p className="text-[12px] font-semibold tracking-[2px] uppercase text-port-yellow">In-depth visuals</p>
              <h3 className="font-serif mt-3 text-3xl tracking-tight text-[#F5F0E3] md:text-5xl">Full case study available in Figma.</h3>
              <p className="mt-4 max-w-2xl mx-auto text-[15px] leading-[1.6] text-[#F5F0E3]/75">
                The original case study lives in Figma — including process diagrams, design system, full screen mockups, and rationale notes.
              </p>
              <a
                href="https://www.figma.com/design/tJHnJ9EBntAcbxTojunTpL/Porfolio"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-port-yellow px-6 py-3 text-[13px] font-semibold tracking-[1.5px] uppercase text-port-blue transition-transform hover:scale-105"
              >
                Open in Figma
                <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
