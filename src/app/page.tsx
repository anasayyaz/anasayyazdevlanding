import { PublicShell } from "@/components/PublicShell";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WorkSection } from "@/components/WorkSection";
import { ProcessSection } from "@/components/ProcessSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <PublicShell>
        <Hero />
        <div className="relative bg-bg-primary">
          <ProblemSection />
          <ServicesSection />
        </div>
        <WorkSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
    </PublicShell>
  );
}
