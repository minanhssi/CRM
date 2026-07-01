"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { BackLink } from "./BackLink";
import { HeroDeco } from "./HeroDeco";
import { KeyFacts } from "./KeyFacts";
import type { ReactNode } from "react";

type CoverImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export function CaseHero({
  caseNumber,
  eyebrow,
  title,
  subtitle,
  tags,
  eyebrowColor = "accent",
  accentClass = "text-port-accent",
  decoVariant = "orbit",
  decoColor = "#F37B23",
  keyFacts,
  cover,
}: {
  caseNumber: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  tags: string[];
  eyebrowColor?: "accent" | "yellow" | "cream";
  accentClass?: string;
  decoVariant?: "orbit" | "grid" | "wave" | "connect";
  decoColor?: string;
  keyFacts?: { label: string; value: string; icon?: ReactNode }[];
  cover?: CoverImage;
}) {
  return (
    <section className="relative overflow-hidden bg-port-ink text-[#F5F0E3]">
      {!cover && <HeroDeco variant={decoVariant} accent={decoColor} />}
      <div className="relative mx-auto max-w-[1320px] px-6 pt-10 md:px-12 md:pt-12">
        <div className="flex items-center justify-between">
          <BackLink />
          <span className="text-[11px] font-medium tracking-[2px] text-[#F5F0E3]/45">{caseNumber}</span>
        </div>
        <div className="mt-2 h-px w-full bg-[#F5F0E3]/15" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 pb-20 pt-14 md:px-12 md:pb-24 md:pt-20">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          {/* LEFT — text content */}
          <div>
            <Reveal>
              <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-serif mt-6 text-[40px] leading-[1.05] tracking-tight md:text-[64px] xl:text-[72px]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-[16px] leading-[1.6] text-[#F5F0E3]/75 md:text-[17px]">
                {subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map(t => (
                  <span
                    key={t}
                    className={`rounded-full border border-[#F5F0E3]/15 bg-[#F5F0E3]/[0.04] px-3 py-1.5 text-[10px] font-semibold tracking-[1.4px] ${accentClass}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — cover image */}
          {cover && (
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D14] shadow-[0_36px_80px_-20px_rgba(0,0,0,0.55),0_16px_40px_-8px_rgba(0,0,0,0.25)]"
              >
                <Image
                  src={cover.src}
                  alt={cover.alt ?? "Case study cover"}
                  width={cover.width}
                  height={cover.height}
                  quality={92}
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="block h-auto w-full"
                  priority
                />
                {/* subtle inner top-left highlight for glass feel */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
              </div>
            </motion.div>
          )}
        </div>

        {/* KEY FACTS — full width */}
        {keyFacts && keyFacts.length > 0 && (
          <div className="mt-12 md:mt-16">
            <KeyFacts items={keyFacts} accentClass={accentClass} />
          </div>
        )}
      </div>
    </section>
  );
}
