"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { href: "/portfolio#work", label: "Work" },
  { href: "/portfolio#skills", label: "Skills" },
  { href: "/portfolio#about", label: "About" },
  { href: "/portfolio#contact", label: "Contact" },
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
          DNM<span className="text-port-yellow">.</span>
          <span className="hidden text-[10px] font-medium tracking-[1.6px] text-white/50 group-hover:text-white/80 md:inline">
            UX DESIGNER · B2B / ENTERPRISE
          </span>
        </Link>
        <nav className="hidden gap-8 md:flex">
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
        <a
          href="mailto:minhanhdn9601@gmail.com?subject=SAP%20UX%20Design%20Specialist%20role"
          className="group inline-flex items-center gap-2 rounded-full bg-port-yellow px-4 py-2.5 text-[12px] font-semibold tracking-[1px] text-port-blue-dark transition-all duration-300 hover:gap-3 hover:bg-white"
          aria-label="Email Duong Ngoc Minh Anh"
        >
          <Mail className="h-3.5 w-3.5" />
          <span>Email me</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}
