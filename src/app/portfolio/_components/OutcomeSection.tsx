import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function OutcomeSection({
  title,
  paragraphs,
  takeaways,
  accentClass = "text-port-accent",
}: {
  title: string;
  paragraphs: string[];
  takeaways: { n: string; label: string; text: string }[];
  accentClass?: string;
}) {
  return (
    <section className="border-y border-port-border-soft bg-port-tint-warm text-port-ink">
      <div className="mx-auto max-w-[1320px] px-6 py-28 md:px-12 md:py-40">
        <Reveal>
          <Eyebrow color="accent">Reflection</Eyebrow>
          <h2 className="font-serif mt-4 max-w-4xl text-4xl leading-[1.1] tracking-tight md:text-6xl">{title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-16 md:grid-cols-[1fr_420px] md:gap-20">
          <Reveal delay={0.1}>
            {paragraphs.map((p, i) => (
              <p key={i} className={`text-lg leading-[1.7] text-port-body ${i > 0 ? "mt-5" : ""}`}>
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-4">
              {takeaways.map(t => (
                <div key={t.n} className="rounded-xl border border-port-border bg-white p-6 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.15)]">
                  <p className={`text-[11px] font-semibold tracking-[1.5px] ${accentClass}`}>{`TAKEAWAY ${t.n} — ${t.label}`}</p>
                  <p className="mt-2 text-[15px] leading-[1.5] font-medium text-port-ink">{t.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
