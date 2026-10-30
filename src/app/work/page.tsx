import type { Metadata } from "next";
import { PublicShell } from "@/components/PublicShell";
import { PageHero } from "@/components/PageHero";
import { WorkManuscriptSection } from "@/components/WorkManuscriptSection";
import { projects, workHeroWords } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected production work — healthcare, SaaS, mobile, and web platforms engineered for real users.",
};

export default function WorkPage() {
  const featuredCount = projects.filter((p) => p.featured).length;

  return (
    <PublicShell>
      <PageHero
        badge={`Selected work · ${projects.length} builds`}
        badgeDot="#3B82F6"
        words={workHeroWords}
        suffix=" Work."
        description="Every project below is live or on the App Store. Open the link, or read the case notes for context on what shipped."
        stats={[
          { value: String(projects.length), label: "Projects" },
          { value: String(featuredCount), label: "Featured" },
          { value: "10+", label: "Years" },
        ]}
        primaryCta={{ label: "Start a Conversation", href: "/contact" }}
        secondaryCta={{ label: "Browse cases", href: "#project-01" }}
      />
      <WorkManuscriptSection />
    </PublicShell>
  );
}
