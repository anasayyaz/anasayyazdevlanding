"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { services } from "@/lib/data";

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      setActiveIndex(
        Math.min(services.length - 1, Math.floor(v * services.length))
      );
    });
  }, [scrollYProgress]);

  const active = services[activeIndex];

  const barScale = useTransform(scrollYProgress, (v) => {
    const idx = Math.min(
      services.length - 1,
      Math.floor(v * services.length)
    );
    const local = v * services.length - idx;
    return (idx + local) / services.length;
  });

  return (
    <section
      ref={ref}
      id="services"
      className="relative"
      style={{ height: "400vh" }}
    >
      <div
        className="sticky top-0 flex h-screen w-full items-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsla(0,0%,100%,0.03) 1px, transparent 1px), linear-gradient(to bottom, hsla(0,0%,100%,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div className="absolute left-0 right-0 top-12 z-30 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-text-secondary">
            What We Do · Four Services
          </p>
        </div>

        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 md:flex md:flex-col md:gap-5 lg:right-10">
          {services.map((s, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={s.id}
                className="flex items-center justify-end gap-3 text-right transition-opacity duration-300"
                style={{ opacity: isActive ? 1 : 0.3 }}
              >
                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: s.color, fontWeight: 600 }}
                >
                  {s.label}
                </span>
                <div
                  className="h-px transition-all duration-300"
                  style={{
                    background: s.color,
                    width: isActive ? 32 : 12,
                  }}
                />
                <span
                  className="w-6 text-xs tabular-nums"
                  style={{ color: s.color, fontWeight: 600 }}
                >
                  {s.id}
                </span>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20">
          <div className="container-page pb-6">
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                Scroll
              </span>
              <div className="relative h-px flex-1 bg-white/[0.08]">
                <motion.div
                  className="absolute inset-0 origin-left"
                  style={{
                    background: active.color,
                    scaleX: barScale,
                  }}
                />
              </div>
              <span className="flex items-baseline gap-1 text-[10px] uppercase tracking-[0.2em] text-text-secondary">
                <span
                  className="text-base tabular-nums transition-colors duration-300"
                  style={{ color: active.color, fontWeight: 600 }}
                >
                  {active.id}
                </span>
                <span className="text-text-muted">/ 04</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          {services.map((service, index) => {
            if (activeIndex !== index) return null;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 flex items-center"
              >
                <div className="container-page grid w-full items-center gap-10 md:grid-cols-12 md:gap-16">
                  <motion.div
                    className="md:col-span-4"
                    initial={{ opacity: 0, scale: 0.7, y: 80 }}
                    animate={{ opacity: 0.6, scale: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p
                      className="text-[8rem] leading-[0.85] md:text-[14rem]"
                      style={{
                        fontWeight: 700,
                        letterSpacing: "-0.06em",
                        color: service.color,
                        transformOrigin: "left center",
                      }}
                    >
                      {service.id}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.25em] text-text-muted">
                      {service.label}
                    </p>
                  </motion.div>

                  <motion.div
                    className="md:col-span-5"
                    initial={{ y: 120 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3
                      className="text-4xl leading-[1.02] md:text-6xl lg:text-7xl"
                      style={{ fontWeight: 700, letterSpacing: "-0.035em" }}
                    >
                      {service.title}
                    </h3>
                  </motion.div>

                  <motion.div
                    className="md:col-span-3"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                      {service.description}
                    </p>
                    <ul
                      className="mt-6 space-y-2.5 border-l pl-4"
                      style={{ borderColor: `${service.color}50` }}
                    >
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-text-primary"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full"
                            style={{ background: service.color }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
