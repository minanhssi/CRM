"use client";

import { motion, type Variants } from "framer-motion";

const BLUE = "#2D39CF";
const YELLOW = "#FFD52D";
const CREAM = "#F0E8D9";
const CREAM_L = "#FBF6EA";
const INK = "#151515";

type Kind =
  | "user" | "team" | "business" | "dev" | "ops"
  | "discover" | "trust" | "recovery"
  | "phone" | "dashboard" | "monitor"
  | "search" | "flow" | "wire" | "palette" | "prototype" | "system" | "sparkle"
  | "layers" | "wallet" | "chart" | "receipt" | "building" | "settings"
  | "connect" | "chat" | "shield" | "check";

const containerVariants: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const floatY: Variants = {
  hidden: { y: 6 },
  show: { y: [-2, 2, -2], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } },
};
const spin: Variants = {
  hidden: { rotate: 0 },
  show: { rotate: 360, transition: { duration: 26, repeat: Infinity, ease: "linear" } },
};
const pulse: Variants = {
  hidden: { scale: 0.9, opacity: 0.6 },
  show: { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } },
};

function Wrap({ children, className = "h-16 w-16" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Illustration({ kind, className }: { kind: Kind; className?: string }) {
  return <Wrap className={className}>{ILLU[kind]}</Wrap>;
}

const ILLU: Record<Kind, React.ReactNode> = {
  user: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.circle variants={floatY} cx="32" cy="26" r="9" fill={BLUE} />
      <path d="M14 54 Q32 38 50 54 L50 60 L14 60 Z" fill={BLUE} />
      <circle cx="46" cy="18" r="3.5" fill={YELLOW} />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <circle cx="22" cy="28" r="7" fill={BLUE} />
      <circle cx="42" cy="28" r="7" fill={BLUE} opacity="0.7" />
      <path d="M10 50 Q22 40 34 50 L34 56 L10 56 Z" fill={BLUE} />
      <path d="M30 50 Q42 40 54 50 L54 56 L30 56 Z" fill={BLUE} opacity="0.7" />
      <motion.circle variants={pulse} cx="52" cy="16" r="3" fill={YELLOW} />
    </svg>
  ),
  business: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="16" y="30" width="14" height="22" rx="1.5" fill={BLUE} />
      <rect x="32" y="20" width="16" height="32" rx="1.5" fill={BLUE} opacity="0.7" />
      <rect x="20" y="34" width="3" height="3" fill={CREAM_L} />
      <rect x="20" y="40" width="3" height="3" fill={CREAM_L} />
      <rect x="20" y="46" width="3" height="3" fill={CREAM_L} />
      <rect x="36" y="26" width="3" height="3" fill={CREAM_L} />
      <rect x="41" y="26" width="3" height="3" fill={CREAM_L} />
      <rect x="36" y="32" width="3" height="3" fill={CREAM_L} />
      <rect x="41" y="32" width="3" height="3" fill={CREAM_L} />
      <motion.circle variants={floatY} cx="14" cy="16" r="4" fill={YELLOW} />
    </svg>
  ),
  dev: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="12" y="18" width="40" height="28" rx="3" fill={BLUE} />
      <rect x="16" y="22" width="32" height="18" rx="1" fill={CREAM_L} />
      <path d="M22 28 L18 32 L22 36" stroke={BLUE} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 28 L46 32 L42 36" stroke={BLUE} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 26 L34 38" stroke={YELLOW} strokeWidth="2" strokeLinecap="round" />
      <rect x="24" y="46" width="16" height="4" rx="1" fill={BLUE} />
    </svg>
  ),
  ops: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.g variants={spin} style={{ transformOrigin: "32px 32px" }}>
        <path d="M32 12 L34 18 L40 18 L36 22 L38 28 L32 25 L26 28 L28 22 L24 18 L30 18 Z" fill={BLUE} />
      </motion.g>
      <circle cx="32" cy="42" r="10" fill={BLUE} opacity="0.85" />
      <circle cx="32" cy="42" r="4" fill={CREAM_L} />
      <circle cx="46" cy="20" r="3" fill={YELLOW} />
    </svg>
  ),
  discover: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.g variants={spin} style={{ transformOrigin: "32px 32px" }}>
        <circle cx="32" cy="32" r="18" fill="none" stroke={BLUE} strokeWidth="2" strokeDasharray="4 4" />
      </motion.g>
      <path d="M32 14 L36 28 L32 32 L28 28 Z" fill={BLUE} />
      <circle cx="32" cy="32" r="3" fill={YELLOW} />
    </svg>
  ),
  trust: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <ellipse cx="32" cy="32" rx="20" ry="12" fill={BLUE} />
      <circle cx="32" cy="32" r="7" fill={CREAM_L} />
      <motion.circle variants={pulse} cx="32" cy="32" r="3.5" fill={BLUE} />
      <circle cx="44" cy="24" r="2.5" fill={YELLOW} />
    </svg>
  ),
  recovery: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.g variants={spin} style={{ transformOrigin: "32px 32px" }}>
        <path
          d="M46 32 A14 14 0 1 1 32 18"
          stroke={BLUE}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path d="M32 14 L36 20 L32 22 Z" fill={BLUE} />
      </motion.g>
      <circle cx="32" cy="32" r="3" fill={YELLOW} />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="22" y="12" width="20" height="40" rx="3" fill={BLUE} />
      <rect x="24" y="16" width="16" height="30" rx="1" fill={CREAM_L} />
      <rect x="27" y="20" width="10" height="2" rx="1" fill={BLUE} opacity="0.35" />
      <rect x="27" y="26" width="10" height="6" rx="1" fill={BLUE} opacity="0.2" />
      <rect x="27" y="35" width="10" height="4" rx="1" fill={YELLOW} />
      <circle cx="32" cy="49" r="1.5" fill={CREAM_L} />
      <motion.circle variants={floatY} cx="48" cy="18" r="4" fill={YELLOW} />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="10" y="16" width="44" height="30" rx="3" fill={BLUE} />
      <rect x="13" y="19" width="38" height="4" rx="1" fill={CREAM_L} opacity="0.3" />
      <rect x="13" y="26" width="12" height="17" rx="1" fill={CREAM_L} />
      <rect x="27" y="26" width="10" height="10" rx="1" fill={CREAM_L} />
      <rect x="27" y="38" width="10" height="5" rx="1" fill={CREAM_L} />
      <rect x="39" y="26" width="12" height="17" rx="1" fill={CREAM_L} />
      <motion.rect variants={pulse} x="30" y="29" width="4" height="4" fill={YELLOW} />
      <rect x="16" y="50" width="32" height="4" rx="2" fill={BLUE} opacity="0.85" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="10" y="14" width="44" height="30" rx="2" fill={BLUE} />
      <rect x="14" y="18" width="36" height="22" rx="1" fill={CREAM_L} />
      <path d="M18 32 L26 26 L32 30 L38 22 L46 34" stroke={BLUE} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="46" cy="34" r="2.5" fill={YELLOW} />
      <rect x="26" y="46" width="12" height="3" rx="1" fill={BLUE} />
      <rect x="20" y="49" width="24" height="3" rx="1" fill={BLUE} opacity="0.7" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.g variants={spin} style={{ transformOrigin: "26px 26px" }}>
        <circle cx="26" cy="26" r="12" fill="none" stroke={BLUE} strokeWidth="3" />
      </motion.g>
      <circle cx="26" cy="26" r="6" fill={YELLOW} />
      <path d="M38 38 L48 48" stroke={BLUE} strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  flow: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <circle cx="16" cy="20" r="5" fill={BLUE} />
      <circle cx="48" cy="20" r="5" fill={BLUE} />
      <circle cx="32" cy="44" r="6" fill={BLUE} />
      <path d="M20 22 Q26 34 30 40" stroke={BLUE} strokeWidth="2" fill="none" strokeDasharray="3 3" />
      <path d="M44 22 Q38 34 34 40" stroke={BLUE} strokeWidth="2" fill="none" strokeDasharray="3 3" />
      <motion.circle variants={pulse} cx="32" cy="44" r="3" fill={YELLOW} />
    </svg>
  ),
  wire: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="14" y="14" width="36" height="36" rx="3" fill="none" stroke={BLUE} strokeWidth="2" />
      <rect x="18" y="18" width="14" height="4" rx="1" fill={BLUE} />
      <rect x="18" y="26" width="20" height="10" rx="1" fill={BLUE} opacity="0.35" />
      <rect x="18" y="40" width="12" height="4" rx="1" fill={YELLOW} />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <path
        d="M32 12 A20 20 0 1 0 32 52 C 28 52, 26 48, 26 45 C 26 42, 28 40, 32 40 A 8 8 0 0 0 32 24 A 4 4 0 0 1 32 16 Z"
        fill={BLUE}
      />
      <circle cx="24" cy="24" r="3" fill={YELLOW} />
      <circle cx="42" cy="20" r="3" fill={CREAM_L} />
      <circle cx="46" cy="34" r="3" fill={CREAM_L} />
    </svg>
  ),
  prototype: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="14" y="18" width="24" height="30" rx="3" fill={BLUE} />
      <rect x="16" y="22" width="20" height="22" rx="1" fill={CREAM_L} />
      <rect x="30" y="26" width="20" height="26" rx="3" fill={BLUE} opacity="0.85" />
      <rect x="32" y="30" width="16" height="18" rx="1" fill={CREAM_L} />
      <motion.circle variants={floatY} cx="52" cy="18" r="3.5" fill={YELLOW} />
    </svg>
  ),
  system: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="12" y="18" width="16" height="12" rx="2" fill={BLUE} />
      <rect x="32" y="18" width="20" height="12" rx="2" fill={BLUE} opacity="0.65" />
      <rect x="12" y="34" width="24" height="12" rx="2" fill={BLUE} opacity="0.85" />
      <rect x="40" y="34" width="12" height="12" rx="2" fill={YELLOW} />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.g variants={pulse} style={{ transformOrigin: "32px 32px" }}>
        <path d="M32 12 L34 28 L48 30 L34 32 L32 48 L30 32 L16 30 L30 28 Z" fill={BLUE} />
      </motion.g>
      <path d="M50 18 L52 22 L56 24 L52 26 L50 30 L48 26 L44 24 L48 22 Z" fill={YELLOW} />
      <circle cx="18" cy="46" r="3" fill={YELLOW} />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.g variants={floatY}>
        <path d="M32 14 L52 26 L32 38 L12 26 Z" fill={BLUE} />
        <path d="M32 30 L52 42 L32 54 L12 42 Z" fill={BLUE} opacity="0.5" />
      </motion.g>
      <circle cx="46" cy="16" r="3" fill={YELLOW} />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="10" y="20" width="44" height="28" rx="4" fill={BLUE} />
      <rect x="10" y="26" width="44" height="6" fill={INK} opacity="0.15" />
      <rect x="38" y="34" width="12" height="8" rx="1.5" fill={YELLOW} />
      <circle cx="44" cy="38" r="2" fill={BLUE} />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="10" y="46" width="44" height="4" rx="1" fill={INK} opacity="0.15" />
      <motion.rect variants={floatY} x="14" y="34" width="8" height="14" fill={BLUE} />
      <motion.rect variants={floatY} x="26" y="24" width="8" height="24" fill={BLUE} opacity="0.7" />
      <motion.rect variants={floatY} x="38" y="18" width="8" height="30" fill={YELLOW} />
    </svg>
  ),
  receipt: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <path d="M18 12 L46 12 L46 52 L42 48 L38 52 L34 48 L30 52 L26 48 L22 52 L18 48 Z" fill={BLUE} />
      <rect x="22" y="20" width="20" height="2.5" rx="1" fill={CREAM_L} />
      <rect x="22" y="26" width="16" height="2.5" rx="1" fill={CREAM_L} />
      <rect x="22" y="32" width="18" height="2.5" rx="1" fill={CREAM_L} />
      <rect x="22" y="38" width="10" height="2.5" rx="1" fill={YELLOW} />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <rect x="18" y="18" width="28" height="34" fill={BLUE} />
      <rect x="22" y="24" width="4" height="4" fill={CREAM_L} />
      <rect x="30" y="24" width="4" height="4" fill={CREAM_L} />
      <rect x="38" y="24" width="4" height="4" fill={CREAM_L} />
      <rect x="22" y="32" width="4" height="4" fill={CREAM_L} />
      <rect x="30" y="32" width="4" height="4" fill={YELLOW} />
      <rect x="38" y="32" width="4" height="4" fill={CREAM_L} />
      <rect x="28" y="42" width="8" height="10" fill={CREAM_L} />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.g variants={spin} style={{ transformOrigin: "32px 32px" }}>
        <path
          d="M32 14 L34 18 L38 16 L38 21 L42 23 L40 27 L44 30 L40 33 L42 37 L38 39 L38 44 L34 42 L32 46 L30 42 L26 44 L26 39 L22 37 L24 33 L20 30 L24 27 L22 23 L26 21 L26 16 L30 18 Z"
          fill={BLUE}
        />
      </motion.g>
      <circle cx="32" cy="30" r="6" fill={CREAM_L} />
      <circle cx="32" cy="30" r="3" fill={YELLOW} />
    </svg>
  ),
  connect: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <circle cx="16" cy="32" r="7" fill={BLUE} />
      <circle cx="48" cy="32" r="7" fill={YELLOW} />
      <motion.path
        variants={{ hidden: { pathLength: 0 }, show: { pathLength: 1, transition: { duration: 1.2 } } }}
        d="M23 32 L41 32"
        stroke={BLUE}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="4 4"
        fill="none"
      />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <path d="M12 20 Q12 14 18 14 L46 14 Q52 14 52 20 L52 38 Q52 44 46 44 L26 44 L18 52 L18 44 Q12 44 12 38 Z" fill={BLUE} />
      <motion.circle variants={pulse} cx="22" cy="29" r="2.5" fill={CREAM_L} />
      <motion.circle variants={pulse} cx="32" cy="29" r="2.5" fill={CREAM_L} />
      <motion.circle variants={pulse} cx="42" cy="29" r="2.5" fill={YELLOW} />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <path
        d="M32 12 L48 18 L48 34 Q48 46 32 52 Q16 46 16 34 L16 18 Z"
        fill={BLUE}
      />
      <path d="M25 32 L30 37 L40 26" stroke={YELLOW} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 64 64" className="block h-full w-full">
      <circle cx="32" cy="32" r="30" fill={CREAM} />
      <motion.circle variants={pulse} cx="32" cy="32" r="20" fill={BLUE} />
      <path d="M22 32 L29 39 L44 24" stroke={YELLOW} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
