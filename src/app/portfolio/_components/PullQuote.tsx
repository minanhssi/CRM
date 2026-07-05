"use client";

import { motion } from "framer-motion";

export function PullQuote({
  children,
  attribution,
  accent = "#F37B23",
}: {
  children: React.ReactNode;
  attribution?: string;
  accent?: string;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto max-w-4xl py-16 md:py-24"
    >
      <span
        aria-hidden
        className="font-serif absolute -left-4 -top-4 text-[80px] leading-none opacity-25 md:-left-6 md:text-[140px]"
        style={{ color: accent }}
      >
        &ldquo;
      </span>
      <blockquote className="font-serif relative pl-4 text-3xl leading-[1.25] text-port-ink md:pl-8 md:text-5xl">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-6 pl-4 text-[13px] font-medium tracking-[1.5px] uppercase text-port-muted md:pl-8">
          — {attribution}
        </figcaption>
      )}
    </motion.figure>
  );
}
