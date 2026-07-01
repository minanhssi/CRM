"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroDeco({ variant = "orbit", accent = "#F37B23" }: { variant?: "orbit" | "grid" | "wave" | "connect"; accent?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 800], [0, 60]);
  const y = useTransform(scrollY, [0, 800], [0, -80]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 items-center justify-end overflow-hidden opacity-70 md:flex"
      aria-hidden
    >
      <motion.svg
        style={{ rotate, y }}
        viewBox="0 0 600 600"
        className="h-full w-auto max-w-[560px] translate-x-24"
        fill="none"
      >
        {variant === "orbit" && (
          <>
            <circle cx="300" cy="300" r="240" stroke={accent} strokeWidth="1" strokeOpacity="0.35" />
            <circle cx="300" cy="300" r="170" stroke={accent} strokeWidth="1" strokeOpacity="0.55" />
            <circle cx="300" cy="300" r="100" stroke={accent} strokeWidth="1" strokeOpacity="0.9" />
            <circle cx="300" cy="60" r="7" fill={accent} />
            <circle cx="530" cy="300" r="5" fill={accent} fillOpacity="0.8" />
            <circle cx="90" cy="240" r="4" fill={accent} fillOpacity="0.6" />
          </>
        )}
        {variant === "grid" && (
          <>
            {Array.from({ length: 10 }).map((_, r) => (
              <line key={`h${r}`} x1="60" y1={80 + r * 48} x2="540" y2={80 + r * 48} stroke={accent} strokeWidth="1" strokeOpacity={0.15 + r * 0.04} />
            ))}
            {Array.from({ length: 10 }).map((_, c) => (
              <line key={`v${c}`} x1={60 + c * 54} y1="80" x2={60 + c * 54} y2="560" stroke={accent} strokeWidth="1" strokeOpacity={0.15 + c * 0.04} />
            ))}
            <rect x="240" y="240" width="140" height="140" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.5" />
          </>
        )}
        {variant === "wave" && (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <path
                key={i}
                d={`M0 ${240 + i * 20} Q150 ${180 + i * 20} 300 ${240 + i * 20} T600 ${240 + i * 20}`}
                stroke={accent}
                strokeWidth="1.2"
                strokeOpacity={0.2 + i * 0.12}
                fill="none"
              />
            ))}
          </>
        )}
        {variant === "connect" && (
          <>
            <circle cx="120" cy="180" r="34" stroke={accent} strokeWidth="1.5" />
            <circle cx="440" cy="140" r="24" stroke={accent} strokeWidth="1.5" />
            <circle cx="480" cy="380" r="30" stroke={accent} strokeWidth="1.5" />
            <circle cx="180" cy="440" r="22" stroke={accent} strokeWidth="1.5" />
            <circle cx="300" cy="300" r="46" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.8" />
            <line x1="150" y1="200" x2="270" y2="290" stroke={accent} strokeWidth="1" strokeOpacity="0.7" />
            <line x1="420" y1="160" x2="326" y2="272" stroke={accent} strokeWidth="1" strokeOpacity="0.7" />
            <line x1="460" y1="360" x2="332" y2="322" stroke={accent} strokeWidth="1" strokeOpacity="0.7" />
            <line x1="205" y1="425" x2="278" y2="330" stroke={accent} strokeWidth="1" strokeOpacity="0.7" />
          </>
        )}
      </motion.svg>
    </div>
  );
}
