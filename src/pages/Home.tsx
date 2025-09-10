import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Credibility } from "@/components/sections/credibility";
import { LeadForm } from "@/components/sections/lead-form";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Credibility />
      <LeadForm />
    </>
  );
}