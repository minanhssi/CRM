"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Decorative background shapes. Renders large SVG blobs / arcs / dot grid
 * as ambient decoration; absolute positioned so they sit behind content.
 * Uses framer-motion for parallax on scroll.
 */
export function DecoShapes({
  variant = "hero",
  parallax = true,
}: {
  variant?: "hero" | "about" | "skills" | "footer";
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 800], [0, parallax ? -120 : 0]);
  const yB = useTransform(scrollY, [0, 800], [0, parallax ? 60 : 0]);
  const rotate = useTransform(scrollY, [0, 800], [0, parallax ? 24 : 0]);

  if (variant === "hero") {
    return (
      <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Large blue blob top-right */}
        <motion.svg
          style={{ y: yA, rotate }}
          viewBox="0 0 600 600"
          className="absolute -right-40 -top-40 h-[720px] w-[720px] text-port-blue"
        >
          <path
            fill="currentColor"
            fillOpacity="0.9"
            d="M300 60c65 0 130 20 175 68s70 116 60 180-60 118-115 160-118 62-180 46-118-70-152-125-52-118-40-180 60-118 120-140 88-9 132-9z"
          />
        </motion.svg>

        {/* Yellow blob bottom-left */}
        <motion.svg
          style={{ y: yB }}
          viewBox="0 0 400 400"
          className="absolute -bottom-20 -left-20 h-[380px] w-[380px] text-port-yellow"
        >
          <path
            fill="currentColor"
            d="M200 40c50 0 96 20 130 55s50 84 40 130-50 86-90 108-90 26-130 6-70-70-84-120-6-104 30-140 60-39 104-39z"
          />
        </motion.svg>

        {/* Yellow dots pattern top-left */}
        <svg className="absolute left-12 top-24 h-32 w-32 text-port-blue/25" viewBox="0 0 120 120">
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 7 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={10 + c * 16} cy={10 + r * 16} r="2" fill="currentColor" />
            ))
          )}
        </svg>

        {/* Blue thin arc middle-right */}
        <svg
          className="absolute right-10 top-1/2 h-64 w-64 -translate-y-1/2 text-port-blue/40"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
        </svg>
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Small blue blob top-right */}
        <svg viewBox="0 0 300 300" className="absolute -right-16 top-10 h-72 w-72 text-port-blue/70">
          <path
            fill="currentColor"
            d="M150 30c40 0 78 18 100 50s26 78 12 116-52 66-96 74-90-10-116-50-30-92-8-130 50-60 108-60z"
          />
        </svg>
        {/* Yellow squiggle */}
        <svg viewBox="0 0 200 60" className="absolute bottom-20 left-12 h-14 w-64 text-port-yellow" fill="none">
          <path
            d="M4 40 Q30 8 60 30 T120 30 T180 30 Q190 30 196 20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === "skills") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Yellow blob bottom-right */}
        <svg viewBox="0 0 400 400" className="absolute -bottom-24 -right-16 h-96 w-96 text-port-yellow">
          <path
            fill="currentColor"
            d="M200 40c55 0 100 20 130 60s40 90 20 130-60 80-120 100-100 0-140-40-40-100-30-160 40-90 140-90z"
          />
        </svg>
        {/* Blue dots grid top-left */}
        <svg className="absolute left-8 top-16 h-28 w-28 text-port-blue/40" viewBox="0 0 120 120">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r="2.5" fill="currentColor" />
            ))
          )}
        </svg>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Yellow arc bottom-right */}
        <svg viewBox="0 0 400 400" className="absolute -bottom-20 -right-20 h-96 w-96 text-port-yellow" fill="none">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
        </svg>
        {/* Blue soft blob top-left */}
        <svg viewBox="0 0 400 400" className="absolute -top-20 -left-20 h-96 w-96 text-port-blue">
          <path
            fill="currentColor"
            fillOpacity="0.85"
            d="M200 40c65 0 118 30 148 82s34 116 4 168-90 84-152 82-118-38-146-88-14-118 22-166 62-78 124-78z"
          />
        </svg>
      </div>
    );
  }

  return null;
}
