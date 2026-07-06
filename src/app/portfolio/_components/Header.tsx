"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "/portfolio#skills", label: "Skills" },
  { href: "/portfolio#about", label: "About" },
  { href: "/portfolio#contact", label: "Contact" },
];

const WORK_ITEMS = [
  { href: "/portfolio/klbp", label: "KienlongBank Pay", meta: "Flagship — B2C banking" },
  { href: "/portfolio/ewa", label: "Earned Wage Access", meta: "Fintech · B2B2C" },
  { href: "/portfolio/integration", label: "Integration feature", meta: "Enterprise workflow" },
  { href: "/portfolio/ezpos", label: "EzPOS", meta: "SaaS POS · SMB" },
];

export function Header() {
  const { scrollY } = useScroll();
  // Always visible solid background so header text stays readable on any section
  const bg = useTransform(scrollY, [0, 80], ["rgba(24, 31, 138, 0.96)", "rgba(45, 57, 207, 0.98)"]);
  const blur = useTransform(scrollY, [0, 80], [8, 14]);
  const backdropFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter, WebkitBackdropFilter: backdropFilter as never }}
      className="sticky top-0 z-50 border-b border-white/10 shadow-[0_2px_12px_-6px_rgba(0,0,0,0.35)]"
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-3.5 text-[13px] font-medium tracking-[2px] text-white md:px-12">
        <Link href="/portfolio" className="group flex items-center gap-2 font-serif text-xl transition-colors hover:text-port-yellow">
          DNMA<span className="text-port-yellow">.</span>
          <span className="hidden text-[10px] font-medium tracking-[1.6px] text-white/50 group-hover:text-white/80 md:inline">
            UX DESIGNER · B2B / ENTERPRISE
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <div className="group/work relative">
            <Link
              href="/portfolio#work"
              className="relative flex items-center gap-1.5 py-1 transition-colors hover:text-port-yellow"
              aria-haspopup="true"
            >
              Work
              <svg
                aria-hidden
                viewBox="0 0 10 6"
                className="h-1.5 w-2.5 transition-transform duration-300 group-hover/work:translate-y-0.5"
              >
                <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1.5px] scale-x-0 origin-left bg-port-yellow transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/work:scale-x-100" />
            </Link>
            {/* Bridge so cursor can travel from label to menu without hover gap */}
            <div className="absolute left-0 right-0 top-full h-3" aria-hidden />
            <div
              className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] z-50 w-[320px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover/work:pointer-events-auto group-hover/work:translate-y-0 group-hover/work:opacity-100 group-focus-within/work:pointer-events-auto group-focus-within/work:translate-y-0 group-focus-within/work:opacity-100"
              role="menu"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(15,20,60,0.45)] ring-1 ring-port-ink/5">
                <p className="px-3 pb-1.5 pt-2 text-[10px] font-semibold tracking-[1.8px] text-port-muted">
                  SELECTED WORK
                </p>
                {WORK_ITEMS.map(w => (
                  <Link
                    key={w.href}
                    href={w.href}
                    role="menuitem"
                    className="group/item flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 tracking-normal transition-colors hover:bg-port-tint-blue focus:bg-port-tint-blue focus:outline-none"
                  >
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-port-ink transition-colors group-hover/item:text-port-blue">
                        {w.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] font-medium tracking-[0.3px] text-port-muted">
                        {w.meta}
                      </span>
                    </span>
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-port-muted opacity-0 transition-all duration-200 group-hover/item:-translate-y-0.5 group-hover/item:translate-x-0.5 group-hover/item:text-port-blue group-hover/item:opacity-100" />
                  </Link>
                ))}
                <div className="mt-1 border-t border-port-border/70 pt-1">
                  <Link
                    href="/portfolio#work"
                    role="menuitem"
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[12px] font-semibold tracking-[0.3px] text-port-blue transition-colors hover:bg-port-tint-blue focus:bg-port-tint-blue focus:outline-none"
                  >
                    See all projects
                    <span aria-hidden className="transition-transform duration-300 group-hover/work:translate-x-0.5">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 transition-colors hover:text-port-yellow group"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1.5px] scale-x-0 origin-left bg-port-yellow transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="/resume.pdf"
            download="Duong-Ngoc-Minh-Anh-CV.pdf"
            className="hidden text-[12px] font-medium tracking-[1.5px] text-white/70 underline decoration-white/25 decoration-1 underline-offset-4 transition-colors hover:text-port-yellow hover:decoration-port-yellow md:inline"
            aria-label="Download résumé as PDF"
          >
            PDF ↓
          </a>
          <Link
            href="/portfolio/resume"
            className="group inline-flex items-center gap-2 rounded-full bg-port-yellow px-4 py-2.5 text-[12px] font-semibold tracking-[1px] text-port-blue-dark transition-all duration-300 hover:gap-3 hover:bg-white"
            aria-label="View résumé"
          >
            <span>View résumé</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
