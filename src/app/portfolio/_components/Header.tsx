"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_ITEMS = [
  { href: "/portfolio#work", label: "Work" },
  { href: "/portfolio#skills", label: "Skills" },
  { href: "/portfolio#about", label: "About" },
  { href: "/portfolio#contact", label: "Contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(45,57,207,0)", "rgba(45,57,207,0.92)"]);
  const blur = useTransform(scrollY, [0, 80], [0, 12]);
  const backdropFilter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.header
      style={{ backgroundColor: bg, backdropFilter, WebkitBackdropFilter: backdropFilter as never }}
      className="sticky top-0 z-50 transition-colors"
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-4 text-[13px] font-medium tracking-[2px] text-[#F5F0E3] md:px-12">
        <Link href="/portfolio" className="font-serif text-xl transition-colors hover:text-port-yellow">
          DNM<span className="text-port-yellow">.</span>
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
          href="mailto:minhanhdn9601@gmail.com"
          className="group relative overflow-hidden rounded-full border border-[#F5F0E3]/40 px-4 py-2 text-[12px] transition-colors hover:bg-port-yellow hover:text-port-blue hover:border-port-yellow"
        >
          <span className="relative">Get in touch</span>
        </a>
      </div>
    </motion.header>
  );
}
