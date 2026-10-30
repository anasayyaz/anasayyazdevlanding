"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contactChannels } from "@/lib/data";

function ChannelIcon({ icon }: { icon: string }) {
  const cls = "h-5 w-5";
  if (icon === "mail") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    );
  }
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (icon === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-9 4h10m-10 0a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
        <path
          d="M21 11.5a8.4 8.4 0 01-1.2 4.3L21 21l-5.4-1.4a8.5 8.5 0 11-3.6-16.1A8.4 8.4 0 0121 11.5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 9.5c0 4.5 1.5 6 6 6 .8 0 1.5-1 1.5-1l-2-1.5-1 .5c-1 0-2.5-1.5-2.5-2.5l.5-1L9.5 8s-1 .7-1 1.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
      <path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ChannelCard({
  channel,
  index,
}: {
  channel: (typeof contactChannels)[number];
  index: number;
}) {
  const inner = (
    <div className="group relative h-full overflow-hidden rounded-container border border-border bg-bg-secondary/60 p-6 transition-colors hover:border-[var(--border-hover)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at 50% 0%, ${channel.color}22, transparent 65%)`,
        }}
      />
      <div className="relative flex h-full flex-col">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-button border border-white/[0.08] bg-bg-primary text-text-secondary transition-colors group-hover:text-text-primary"
          style={{ boxShadow: `inset 0 0 0 1px ${channel.color}15` }}
        >
          <ChannelIcon icon={channel.icon} />
        </div>
        <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-text-muted">
          {channel.label}
        </p>
        <p className="mt-2 text-base text-text-primary">{channel.value}</p>
        <span
          className={`mt-auto flex items-center gap-1 pt-6 text-xs uppercase tracking-[0.18em] ${
            channel.href
              ? "text-text-secondary transition-colors group-hover:text-text-primary"
              : "text-text-muted"
          }`}
        >
          {channel.action}
          {channel.href && (
            <span className="transition-transform group-hover:translate-x-1">→</span>
          )}
        </span>
      </div>
    </div>
  );

  const external = channel.type !== "email";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08 }}
      className="h-full"
    >
      {channel.href ? (
        <Link
          href={channel.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="block h-full"
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.div>
  );
}

export function ContactChannels() {
  return (
    <section className="container-page pt-section">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-baseline justify-between gap-6"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent-blue">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.025em] md:text-4xl">
            Pick a channel.
          </h2>
        </div>
        <p className="hidden max-w-sm text-sm text-text-secondary md:block">
          Email, LinkedIn, Upwork, or GitHub — I read messages personally and reply within one
          business day.
        </p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactChannels.map((channel, i) => (
          <ChannelCard key={channel.label} channel={channel} index={i} />
        ))}
      </div>
    </section>
  );
}
