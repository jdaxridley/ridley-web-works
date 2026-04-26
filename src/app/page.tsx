import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/WorkGrid";
import { AboutPreview } from "@/components/AboutPreview";
import { ServicesBento } from "@/components/ServicesBento";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <AboutPreview />
      <ServicesBento />
      <ContactCTA />
    </>
  );
}
