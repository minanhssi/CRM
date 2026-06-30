"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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
        <Link href="/portfolio" className="font-serif text-xl">
          DNM<span className="text-port-yellow">.</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <Link href="/portfolio#work" className="hover:text-port-yellow transition-colors">Work</Link>
          <Link href="/portfolio#skills" className="hover:text-port-yellow transition-colors">Skills</Link>
          <Link href="/portfolio#about" className="hover:text-port-yellow transition-colors">About</Link>
          <Link href="/portfolio#contact" className="hover:text-port-yellow transition-colors">Contact</Link>
        </nav>
        <a
          href="mailto:minhanhdn9601@gmail.com"
          className="rounded-full border border-[#F5F0E3]/40 px-4 py-2 text-[12px] hover:bg-port-yellow hover:text-port-blue hover:border-port-yellow transition-all"
        >
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
