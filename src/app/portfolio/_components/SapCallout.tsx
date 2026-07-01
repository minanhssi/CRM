"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function SapCallout() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mt-14 flex items-start gap-4 rounded-2xl border border-port-blue/25 bg-port-blue/[0.06] p-6 md:p-7"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-port-blue text-white">
        <Sparkles className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[11px] font-semibold tracking-[1.8px] uppercase text-port-blue">Tailored for you</p>
        <p className="mt-1.5 text-[15px] leading-[1.55] text-port-body">
          This portfolio is prepared for the{" "}
          <span className="font-semibold text-port-ink">UX Design Specialist — Customer Experience</span> role at{" "}
          <span className="font-semibold text-port-ink">SAP Labs Vietnam</span>. Case studies were selected to demonstrate enterprise back-office, workflow-oriented, and multi-role design experience.
        </p>
      </div>
    </motion.div>
  );
}
