import { AuditSection } from "@/app/components/sections/AuditSection";
import { ScrollVideoSection } from "./components/sections/ScrollVideoSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <ScrollVideoSection />
      <AuditSection />
    </main>
  );
}
