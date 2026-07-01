"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function KeyFacts({
  items,
  accentClass = "text-port-accent",
}: {
  items: { label: string; value: string; icon?: ReactNode }[];
  accentClass?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#F5F0E3]/12 bg-[#F5F0E3]/[0.03] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
    >
      {items.map(item => (
        <div key={item.label} className="flex flex-col gap-2 bg-port-ink px-5 py-4">
          <div className="flex items-center gap-2">
            {item.icon && <span className={accentClass}>{item.icon}</span>}
            <p className={`text-[10px] font-semibold tracking-[1.8px] uppercase ${accentClass}`}>
              {item.label}
            </p>
          </div>
          <p className="text-[15px] font-semibold leading-[1.25] text-[#F5F0E3]">
            {item.value}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
