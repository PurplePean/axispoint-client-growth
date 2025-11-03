import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "asset-management",
      icon: Building2,
      title: "Asset Management",
      description: "Comprehensive oversight of your commercial real estate portfolio. We handle property operations, financial reporting, and strategic planning to maximize asset value and performance.",
      features: [
        "Property performance monitoring",
        "Financial analysis and reporting",
        "Strategic planning and execution",
        "Vendor management and oversight"
      ]
    },
    {
      id: "transaction-execution",
      icon: TrendingUp,
      title: "Transaction Execution",
      description: "Expert guidance through complex commercial real estate transactions. From acquisition to disposition, we ensure seamless execution aligned with your investment objectives.",
      features: [
        "Market analysis and valuation",
        "Deal structuring and negotiation",
        "Due diligence coordination",
        "Transaction management"
      ]
    },
    {
      id: "advisory",
      icon: Users,
      title: "Advisory Services",
      description: "Strategic counsel for institutional-grade real estate decisions. We provide data-driven insights and recommendations to optimize your commercial real estate strategy.",
      features: [
        "Portfolio optimization",
        "Investment strategy development",
        "Market research and analysis",
        "Risk assessment and mitigation"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | AxisPoint Partners</title>
        <meta
          name="description"
          content="Comprehensive commercial real estate services including asset management, transaction execution, and advisory services for institutional investors."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-surface">
        <div className="container-axis">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display text-4xl lg:text-6xl font-semibold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Institutional-grade commercial real estate services designed to maximize value
              and performance across your portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="section-padding">
        <div className="container-axis">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6">
                      <service.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-display text-3xl lg:text-4xl font-semibold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-6 w-6 text-accent flex-shrink-0 mr-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-primary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild size="lg">
                      <Link to="/contact">
                        Discuss This Service
                      </Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="card-institutional p-8 h-full flex items-center justify-center min-h-[300px]">
                      <service.icon className="h-32 w-32 text-accent/20" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-axis">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-3xl lg:text-4xl font-semibold mb-6">
              Ready to Optimize Your Portfolio?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let's discuss how AxisPoint Partners can help you achieve your commercial
              real estate investment objectives.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
