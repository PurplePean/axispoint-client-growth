import { Helmet } from "react-helmet-async";
import { Building, TrendingUp, Shield, Users, DollarSign, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ForOwners = () => {
  const services = [
    {
      icon: Building,
      title: "Portfolio Management",
      description: "Comprehensive oversight of your entire commercial real estate portfolio with strategic optimization."
    },
    {
      icon: TrendingUp,
      title: "Value Enhancement",
      description: "Identify and implement strategies to increase property values and maximize returns on investment."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Protect your investments with comprehensive risk assessment and mitigation strategies."
    },
    {
      icon: Users,
      title: "Tenant Relations",
      description: "Professional tenant management and retention strategies to ensure stable income streams."
    },
    {
      icon: DollarSign,
      title: "Financial Optimization",
      description: "Maximize cash flow through strategic leasing, expense management, and capital improvements."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Regular reporting and analytics to track performance and identify new opportunities."
    }
  ];

  const challenges = [
    {
      problem: "Time-Consuming Management",
      solution: "We handle day-to-day operations so you can focus on your core business or enjoy your time."
    },
    {
      problem: "Market Uncertainty",
      solution: "Our market expertise helps navigate economic changes and identify growth opportunities."
    },
    {
      problem: "Tenant Issues",
      solution: "Professional tenant relations and lease management to minimize vacancies and disputes."
    },
    {
      problem: "Capital Allocation",
      solution: "Strategic guidance on when and where to invest in improvements for maximum ROI."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Property Management for Owners | AxisPoint Partners</title>
        <meta 
          name="description" 
          content="Professional commercial real estate asset management services for property owners. Maximize returns while minimizing hands-on involvement." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-axis">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                For Property Owners
              </h1>
              <p className="text-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Professional asset management that maximizes your commercial real estate returns while minimizing your time investment and stress.
              </p>
              <Button size="lg" className="btn-institutional">
                Get Free Portfolio Analysis
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Comprehensive Asset Management
              </h2>
              <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
                From acquisition to disposition, we manage every aspect of your commercial real estate investment.
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
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-body">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="section-padding bg-accent/5">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Common Owner Challenges We Solve
              </h2>
              <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Let us handle the complexities while you enjoy the benefits of commercial real estate ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {challenges.map((challenge, index) => (
                <Card key={index} className="card-institutional">
                  <CardHeader>
                    <CardTitle className="text-display text-xl text-primary mb-2">
                      {challenge.problem}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-muted-foreground">
                      <span className="font-semibold text-accent">Our Solution:</span> {challenge.solution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Proven Results for Our Clients
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Average Occupancy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">23%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Average ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">48hrs</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Average Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="section-padding bg-primary/5">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Management Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <h3 className="text-display text-lg font-semibold text-primary mb-2">
                    Portfolio Assessment
                  </h3>
                  <p className="text-body text-sm text-muted-foreground">
                    Comprehensive analysis of your current properties and market position.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-display text-lg font-semibold text-primary mb-2">
                    Strategic Planning
                  </h3>
                  <p className="text-body text-sm text-muted-foreground">
                    Develop customized strategies for optimization and growth.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-display text-lg font-semibold text-primary mb-2">
                    Implementation
                  </h3>
                  <p className="text-body text-sm text-muted-foreground">
                    Execute the plan with professional property management.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">4</span>
                  </div>
                  <h3 className="text-display text-lg font-semibold text-primary mb-2">
                    Ongoing Optimization
                  </h3>
                  <p className="text-body text-sm text-muted-foreground">
                    Continuous monitoring and improvement of performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Optimize Your Portfolio?
              </h2>
              <p className="text-body text-lg text-muted-foreground mb-8">
                Let our experienced team handle your commercial real estate while you focus on what matters most to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-institutional">
                  Schedule Free Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Download Owner's Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForOwners;