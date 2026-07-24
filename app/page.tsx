import { AuditSection } from "./components/sections/AuditSection";
import { ContactSection } from "./components/sections/ContactSection";
import { PageAnimations } from "./components/PageAnimations";
import { HeaderSection } from "./components/sections/HeaderSection";
import { HeroSection } from "./components/sections/HeroSection";
import { OfferSection } from "./components/sections/OfferSection";
import { PageFooter } from "./components/sections/PageFooter";
import { ResultsSection } from "./components/sections/ResultsSection";
import { StepsSection } from "./components/sections/StepsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_18%),linear-gradient(180deg,#050505_0%,#090909_42%,#050505_100%)] text-zinc-100">
      <PageAnimations />
      <div className="relative z-10 flex min-h-screen w-full flex-col gap-16 px-6 pb-16 pt-6 sm:px-10 lg:px-16 xl:px-20">
        <HeaderSection />
        <HeroSection />
        <OfferSection />
        <AuditSection />
        <StepsSection />
        <ResultsSection />
        <ContactSection />
        <PageFooter />
      </div>
    </main>
  );
}
