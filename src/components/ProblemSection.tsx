"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { problemPanels } from "@/lib/data";

const PANEL_COUNT = problemPanels.length;
const SEGMENT = 1 / PANEL_COUNT;

function WordReveal({ text, progress }: { text: string; progress: number }) {
  const words = text.split(" ").filter(Boolean);

  return (
    <p className="mx-auto max-w-4xl text-balance font-display text-4xl leading-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
      {words.map((word, i) => {
        const threshold = i / words.length;
        const active = progress > threshold;
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              opacity: active ? 1 : 0.35,
              transform: active ? "translateY(0px)" : "translateY(12px)",
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </p>
  );
}

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [wordProgress, setWordProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const clamped = Math.min(Math.max(v, 0), 0.999);
    const index = Math.min(
      PANEL_COUNT - 1,
      Math.floor(clamped / SEGMENT)
    );
    const local = (clamped - index * SEGMENT) / SEGMENT;
    setActiveIndex(index);
    setWordProgress(Math.min(local / 0.82, 1));
  });

  const active = problemPanels[activeIndex];

  return (
    <div ref={ref} className="relative" style={{ height: "260vh" }}>
      <section className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-bg-primary">
        <div className="container-page relative mx-auto h-full w-full">
          {/* Only one panel in the DOM — prevents label/text overlap */}
          <motion.div
            key={active.label}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <p
              className={`mb-6 text-xs uppercase tracking-[0.25em] ${active.labelColor}`}
            >
              {active.label}
            </p>
            <WordReveal text={active.text} progress={wordProgress} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
