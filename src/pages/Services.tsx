import { Helmet } from "react-helmet-async";
import { Building2, TrendingUp, Users, Calculator, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Asset Management",
      description: "Comprehensive management of your commercial real estate portfolio to maximize returns and minimize risks.",
      features: ["Portfolio Optimization", "Performance Analytics", "Strategic Planning", "Risk Assessment"]
    },
    {
      icon: TrendingUp,
      title: "Investment Analysis",
      description: "Deep-dive financial analysis and market research to identify the best investment opportunities.",
      features: ["Market Research", "Financial Modeling", "Due Diligence", "Investment Strategy"]
    },
    {
      icon: Users,
      title: "Leasing Services",
      description: "Full-service leasing solutions to maximize occupancy and rental income for your properties.",
      features: ["Tenant Acquisition", "Lease Negotiations", "Market Analysis", "Tenant Relations"]
    },
    {
      icon: Calculator,
      title: "Financial Consulting",
      description: "Expert financial guidance to optimize your real estate investments and tax strategies.",
      features: ["Tax Planning", "Cash Flow Analysis", "Refinancing Strategy", "Exit Planning"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for your commercial properties.",
      features: ["Insurance Review", "Compliance Monitoring", "Market Risk Analysis", "Portfolio Diversification"]
    },
    {
      icon: Zap,
      title: "Property Optimization",
      description: "Enhance property value through strategic improvements and operational efficiency.",
      features: ["Capital Improvements", "Operational Efficiency", "Energy Management", "Technology Integration"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Real Estate Services | AxisPoint Partners</title>
        <meta 
          name="description" 
          content="Comprehensive commercial real estate services including asset management, investment analysis, leasing, and financial consulting in Texas." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-axis">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Commercial Real Estate Services
              </h1>
              <p className="text-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comprehensive solutions for commercial real estate owners, investors, and CPAs seeking expert asset management and strategic guidance.
              </p>
              <Button size="lg" className="btn-institutional">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Services
              </h2>
              <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
                From asset management to strategic consulting, we provide the expertise you need to maximize your commercial real estate investments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-institutional h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-display text-xl text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-body">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-axis">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Optimize Your Portfolio?
              </h2>
              <p className="text-body text-lg text-muted-foreground mb-8">
                Let our experienced team help you maximize the potential of your commercial real estate investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-institutional">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;