"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  const ref = useRef(null);
  const timelineRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-section">
      <div ref={ref} className="container-page text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted"
        >
          How We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          A process built around shipping.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-sm text-text-secondary md:text-base"
        >
          Four phases, one team, signed off at every gate.
        </motion.p>
      </div>

      <div ref={timelineRef} className="relative mx-auto mt-20 max-w-4xl px-6">
        <div className="absolute bottom-0 left-7 top-0 w-px bg-white/[0.06] md:left-1/2 md:-translate-x-px" />
        <motion.div
          className="absolute left-7 top-0 w-px origin-top bg-gradient-to-b from-[#4F8EF7] via-[#22D3A7] to-[#f78e4f] md:left-1/2 md:-translate-x-px"
          style={{ height: lineHeight }}
        />

        <div className="space-y-16 md:space-y-24">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-12 ${
                i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              <div
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-bg-primary font-display text-lg md:absolute md:left-1/2 md:-translate-x-1/2"
                style={{ borderColor: step.color }}
              >
                <span style={{ color: step.color, fontWeight: 600 }}>
                  {step.num}
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{ border: `1px solid ${step.color}` }}
                />
              </div>

              <div className="md:w-[calc(50%-3rem)]">
                <p
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: step.color, fontWeight: 600 }}
                >
                  {step.week}
                </p>
                <h3
                  className="mt-3 text-3xl md:text-4xl"
                  style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm italic md:text-base"
                  style={{ color: step.color }}
                >
                  {step.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                  {step.description}
                </p>
                <ul
                  className={`mt-6 grid grid-cols-2 gap-2 text-xs md:text-sm ${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-text-primary ${
                        i % 2 === 1 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                        style={{ background: step.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
