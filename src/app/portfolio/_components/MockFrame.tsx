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
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={92}
        sizes="(min-width: 1200px) 800px, 100vw"
        className="block w-full h-auto"
        priority={false}
      />
    </motion.div>
  );
}
