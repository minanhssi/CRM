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
        {/* Concentric outline rings — far right, subtle */}
        <svg
          className="absolute -right-[520px] top-1/2 h-[1400px] w-[1400px] -translate-y-1/2 text-port-blue/25"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="400" r="330" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="400" cy="400" r="270" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="400" r="210" stroke="currentColor" strokeWidth="1" strokeDasharray="2 5" />
        </svg>

        {/* LARGE solid blue circle — dominant right side */}
        <motion.svg
          style={{ y: yA }}
          viewBox="0 0 800 800"
          className="absolute -right-[280px] top-[40px] h-[820px] w-[820px] text-port-blue"
        >
          <circle cx="400" cy="400" r="380" fill="currentColor" />
        </motion.svg>

        {/* Small blue accent circle floating top-right of the big one */}
        <motion.svg
          style={{ y: yB }}
          viewBox="0 0 100 100"
          className="absolute right-[38%] top-[18%] h-8 w-8 text-port-blue"
        >
          <circle cx="50" cy="50" r="48" fill="currentColor" />
        </motion.svg>

        {/* Yellow accent dot mid-right */}
        <motion.svg
          style={{ y: yB, rotate }}
          viewBox="0 0 100 100"
          className="absolute right-[24%] top-[62%] h-6 w-6 text-port-yellow"
        >
          <circle cx="50" cy="50" r="48" fill="currentColor" />
        </motion.svg>

        {/* Yellow quarter circle bottom-left */}
        <svg
          className="absolute -bottom-[80px] -left-[80px] h-[260px] w-[260px] text-port-yellow"
          viewBox="0 0 200 200"
        >
          <circle cx="0" cy="200" r="200" fill="currentColor" />
        </svg>

        {/* Blue dot grid top-left */}
        <svg className="absolute left-8 top-24 h-24 w-24 text-port-blue/25" viewBox="0 0 120 120">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={10 + c * 18} cy={10 + r * 18} r="2" fill="currentColor" />
            ))
          )}
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
