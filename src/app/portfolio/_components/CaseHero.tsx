import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { BackLink } from "./BackLink";

export function CaseHero({
  caseNumber,
  eyebrow,
  title,
  subtitle,
  tags,
  eyebrowColor = "accent",
  accentClass = "text-port-accent",
}: {
  caseNumber: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  tags: string[];
  eyebrowColor?: "accent" | "yellow" | "cream";
  accentClass?: string;
}) {
  return (
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
          <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-serif mt-8 text-[44px] leading-[1.04] tracking-tight md:text-[88px]">{title}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-lg leading-[1.6] text-[#F5F0E3]/75 md:text-xl">{subtitle}</p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className={`rounded-full border border-[#F5F0E3]/15 bg-[#F5F0E3]/[0.04] px-3 py-2 text-[11px] font-semibold tracking-[1.5px] ${accentClass}`}>{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
