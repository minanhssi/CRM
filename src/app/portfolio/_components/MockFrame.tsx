"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MockFrame({
  src,
  alt,
  width = 1366,
  height = 768,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="rounded-2xl overflow-hidden border border-port-border bg-white shadow-[0_24px_60px_-20px_rgba(21,21,21,0.22),0_8px_20px_-8px_rgba(21,21,21,0.08)] transition-shadow hover:shadow-[0_32px_80px_-20px_rgba(21,21,21,0.28),0_12px_28px_-8px_rgba(21,21,21,0.12)]"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block w-full h-auto"
        priority={false}
      />
    </motion.div>
  );
}
