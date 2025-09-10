import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Credibility } from "@/components/sections/credibility";
import { LeadForm } from "@/components/sections/lead-form";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AxisPoint Asset Management | Institutional Grade Commercial Real Estate</title>
        <meta 
          name="description" 
          content="Professional asset management for commercial real estate. We manage the plan, the people, and the performance with institutional-grade processes and expertise." 
        />
        <meta name="keywords" content="commercial real estate, asset management, CPA services, institutional investing, property management" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <Hero />
          <ServicesOverview />
          <Credibility />
          <LeadForm />
        </main>
        
        <Footer />
      </div>
    </>
  );
}