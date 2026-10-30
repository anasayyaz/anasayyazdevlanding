"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/lib/site";
import { Button } from "./ui/Button";

const marqueeItems = Array.from({ length: 4 }).map((_, i) => (
  <span
    key={i}
    className="mx-8 flex shrink-0 items-center gap-4 text-5xl font-bold uppercase tracking-[0.15em] text-white/[0.06] md:text-7xl"
  >
    Let&apos;s ship something durable
    <span className="text-accent-blue" aria-hidden>
      ✦
    </span>
  </span>
));

export function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact">
      <div className="overflow-hidden border-y border-white/[0.06] py-10">
        <div className="flex w-max animate-marquee-horizontal">
          {[...marqueeItems, ...marqueeItems]}
        </div>
      </div>

      <div ref={ref} className="container-page py-section">
        <div className="group relative overflow-hidden rounded-container border border-border bg-bg-secondary px-8 py-20 text-center md:px-16 md:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(520px circle at 50% 50%, rgba(34, 211, 167, 0.18), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -left-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(79,142,247,0.25), transparent 60%)",
              filter: "blur(20px)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(34,211,167,0.2), transparent 60%)",
              filter: "blur(20px)",
            }}
            aria-hidden
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-balance text-4xl font-bold md:text-6xl"
            >
              Ready for a senior engineer who owns delivery?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-xl text-base text-text-secondary md:text-lg"
            >
              30 minutes to talk scope, stack, and timeline. No sales deck — just
              an honest read on what it takes to get to production.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Button href="/contact">Get in Touch</Button>
              <Button href={`mailto:${site.email}`} variant="secondary">
                Email directly
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
