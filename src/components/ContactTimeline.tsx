"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { contactSteps } from "@/lib/data";

export function ContactTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="container-page py-section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-accent-mint">What happens next</p>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] md:text-5xl">
          From inbox to kickoff in a week.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-text-secondary md:text-base">
          A short, predictable path — no chasing, no surprise calls, no demos you didn&apos;t ask
          for.
        </p>
      </motion.div>

      <div className="relative mx-auto mt-16 max-w-3xl">
        <div
          aria-hidden
          className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-white/[0.08] md:block"
        />
        <motion.div
          aria-hidden
          className="absolute left-6 top-2 hidden w-px origin-top bg-gradient-to-b from-accent-blue via-accent-mint to-[#a16cf7] md:block"
          style={{ height: lineHeight }}
        />
        <ol className="space-y-12">
          {contactSteps.map((step, i) => (
            <motion.li
              key={step.chapter}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className="relative flex gap-6 md:gap-10"
            >
              <div className="flex flex-col items-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border bg-bg-primary"
                  style={{
                    borderColor: `${step.color}55`,
                    boxShadow: `0 0 0 4px ${step.color}10`,
                  }}
                >
                  <span className="font-serif text-base" style={{ color: step.color }}>
                    {step.numeral}
                  </span>
                </div>
              </div>
              <div className="flex-1 pt-1.5">
                <p
                  className="text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: step.color }}
                >
                  Chapter {step.numeral} · {step.chapter}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm text-text-secondary md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
