import { Building2, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
  const services = [
    {
      icon: Building2,
      title: "Asset & Portfolio Management",
      description: "Comprehensive oversight of your commercial real estate investments with institutional-grade processes and reporting.",
      outcomes: ["Optimized performance", "Risk mitigation", "Strategic positioning"],
      href: "/services#asset-management"
    },
    {
      icon: TrendingUp,
      title: "Transaction Execution",
      description: "Professional brokerage and leasing services through our licensed partner, ensuring seamless deal execution.",
      outcomes: ["Market expertise", "Deal optimization", "Regulatory compliance"],
      href: "/services#transaction-execution"
    },
    {
      icon: Users,
      title: "Advisory for CPAs & Finance Teams",
      description: "Strategic guidance for accounting professionals and finance teams on commercial real estate matters.",
      outcomes: ["Enhanced services", "Client expansion", "Revenue growth"],
      href: "/services#advisory"
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-axis">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Three Service Lanes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive commercial real estate solutions designed for institutional clients, 
            professional service firms, and sophisticated investors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-institutional p-8 group hover:shadow-[var(--shadow-medium)]">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 group-hover:bg-accent/20 transition-[var(--transition-smooth)]">
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="text-display text-2xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium text-primary mb-3">Key Outcomes:</h4>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome, outcomeIndex) => (
                    <li key={outcomeIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:border-accent group-hover:text-accent"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}