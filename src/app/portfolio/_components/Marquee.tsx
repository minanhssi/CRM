"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <div
      ref={ref}
      className="flex items-center justify-between text-[13px] font-medium tracking-[3px] text-[#E5DFC7]"
    >
      <span>STYLE //</span>
      <motion.span style={{ x }} className="hidden md:block">
        PORTFOLIO — DUONG NGOC MINH ANH
      </motion.span>
      <span className="text-port-yellow">[ 00 ]</span>
    </div>
  );
}
