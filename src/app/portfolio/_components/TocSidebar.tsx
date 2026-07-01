"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TocSidebar({
  sections,
  accent = "#F37B23",
}: {
  sections: { id: string; label: string }[];
  accent?: string;
}) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // show only after 15% scroll
    const onScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrolled > 0.15 && scrolled < 0.9);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visibleEntries = entries.filter(e => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const topMost = visibleEntries.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      { rootMargin: "-30% 0% -50% 0%", threshold: 0 }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
          aria-label="Case study contents"
        >
          <ul className="flex flex-col gap-2.5">
            {sections.map(s => {
              const active = s.id === activeId;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center gap-3"
                  >
                    <span
                      className="block h-[2px] rounded-full transition-all duration-500 ease-out"
                      style={{
                        width: active ? 32 : 16,
                        background: active ? accent : "rgba(21,21,21,0.25)",
                      }}
                    />
                    <span
                      className="text-[11px] font-medium tracking-[1.2px] uppercase transition-all duration-300"
                      style={{
                        opacity: active ? 1 : 0,
                        transform: `translateX(${active ? 0 : -4}px)`,
                        color: active ? "#151515" : "rgba(21,21,21,0.5)",
                      }}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
