"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { homeProjects, stats } from "@/lib/data";
import { Odometer, Sparkline } from "./Odometer";

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-section">
      <div ref={ref} className="container-page text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-text-muted">
          Track Record
        </p>
        <h2 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
          Built for businesses you can verify.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm text-text-secondary md:text-base">
          Every site below is live. Hover any tile to visit it.
        </p>

        <div className="mb-16 mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-container border border-border bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-bg-secondary p-7 text-left transition-colors hover:bg-bg-tertiary md:p-9"
            >
              <p
                className="text-xs uppercase tracking-[0.18em] text-text-secondary"
                style={{ fontWeight: 600 }}
              >
                {stat.label}
              </p>
              <p className="mt-4 text-5xl leading-none tabular-nums md:text-6xl">
                {stat.text ? (
                  <span
                    style={{
                      fontWeight: 700,
                      letterSpacing: "-0.04em",
                      color: stat.color,
                    }}
                  >
                    {stat.text}
                  </span>
                ) : (
                  <Odometer
                    value={stat.value!}
                    suffix={stat.suffix!}
                    color={stat.color!}
                  />
                )}
              </p>
              <div className="mt-5 flex items-end justify-between">
                <p className="text-[10px] uppercase tracking-[0.15em] text-text-muted">
                  {stat.sub}
                </p>
                {stat.sparkline && (
                  <Sparkline
                    points={stat.sparkline}
                    color={stat.color!}
                    inView={inView}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-text-muted">Selected live work</p>
        <p className="mt-1 text-xs text-text-muted">
          Web, mobile, and healthcare — all linkable.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {homeProjects.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-card border border-border bg-bg-secondary transition-all duration-300 hover:border-accent-blue hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover object-top opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                sizes="150px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                <p className="text-xs font-medium text-text-primary transition-colors group-hover:text-accent-blue">
                  {p.name}
                </p>
                <p className="truncate text-[9px] text-text-muted">{p.url}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
