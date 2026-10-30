"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Full-stack web app",
  "React Native / mobile",
  "API & backend",
  "Technical leadership",
  "Not sure yet",
];

const inputClass =
  "peer w-full rounded-button border border-border bg-bg-primary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/70 transition-colors duration-200 focus:border-accent-blue focus:outline-none focus:ring-2 focus:ring-accent-blue/15";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="message-form" className="container-page pt-section">
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-accent-blue">Send a Message</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] md:text-5xl">
            Tell me about the project.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-text-secondary md:text-base">
            A short note is enough. I&apos;ll follow up with questions before proposing anything.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative mt-12 overflow-hidden rounded-container border border-border bg-bg-secondary/60 p-6 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-64 w-2/3 -translate-x-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(79,142,247,0.18), transparent 65%)",
            }}
          />
          {submitted ? (
            <p className="py-12 text-center text-text-secondary">
              Thanks — we&apos;ll reply within one business day.
            </p>
          ) : (
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-text-secondary">
                    Name<span className="text-accent-blue">*</span>
                  </span>
                  <input required placeholder="Jane Doe" className={inputClass} name="name" />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-text-secondary">
                    Email<span className="text-accent-blue">*</span>
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className={inputClass}
                    name="email"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-text-secondary">
                    Phone
                  </span>
                  <input type="tel" placeholder="Optional" className={inputClass} name="phone" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-text-secondary">
                    Company
                  </span>
                  <input placeholder="Optional" className={inputClass} name="company" />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-text-secondary">
                  What can we help with?<span className="text-accent-blue">*</span>
                </span>
                <select required className={inputClass} name="service" defaultValue={serviceOptions[0]}>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-1 text-xs uppercase tracking-[0.18em] text-text-secondary">
                  Tell us about the project<span className="text-accent-blue">*</span>
                </span>
                <textarea
                  required
                  rows={5}
                  placeholder="Where you are today, where you want to be, and the deadline if there is one."
                  className={`${inputClass} resize-none`}
                  name="message"
                />
              </label>
              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-button bg-accent-blue px-6 py-4 text-sm font-medium text-bg-primary transition-all duration-300 hover:pr-10"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="flex items-center gap-2">
                  Send message
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-3.5 w-3.5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
