import type { Metadata } from "next";
import { PublicShell } from "@/components/PublicShell";
import { PageHero } from "@/components/PageHero";
import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";
import { ContactTimeline } from "@/components/ContactTimeline";
import { contactHeroWords } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about your product or team. I reply within one business day.",
};

export default function ContactPage() {
  return (
    <PublicShell>
      <PageHero
        badge="Open · Remote worldwide"
        badgeDot="#22D3EE"
        prefix="Let's"
        words={contactHeroWords}
        suffix="."
        minHeight="min-h-[88svh]"
        description="Share goals, timeline, and stack. I read every message personally and reply within one business day."
        stats={[
          { value: "<24h", label: "Response" },
          { value: "30 min", label: "Discovery" },
          { value: "5 days", label: "Proposal" },
        ]}
        primaryCta={{ label: "Send a Message", href: "#message-form" }}
        secondaryCta={{
          label: "Email Direct",
          href: `mailto:${site.email}`,
        }}
      />
      <ContactChannels />
      <ContactForm />
      <ContactTimeline />
    </PublicShell>
  );
}
