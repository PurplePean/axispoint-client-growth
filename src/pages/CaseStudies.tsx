import { Helmet } from "react-helmet-async";
import { Building2, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Downtown Office Complex Transformation",
      type: "Office",
      location: "Austin, TX",
      challenge: "A 150,000 sq ft office complex with 65% occupancy and declining rental rates in a competitive downtown market.",
      solution: "Implemented comprehensive renovation strategy, modernized common areas, upgraded building systems, and repositioned marketing approach.",
      results: [
        "Increased occupancy to 95% within 18 months",
        "Achieved 28% increase in rental rates",
        "Reduced operating expenses by 15%",
        "Improved tenant satisfaction scores by 40%"
      ],
      investment: "$2.3M",
      roi: "185%",
      timeframe: "18 months"
    },
    {
      title: "Retail Strip Center Optimization",
      type: "Retail",
      location: "Houston, TX", 
      challenge: "Underperforming retail center with multiple vacancies and outdated tenant mix in growing suburban area.",
      solution: "Strategic tenant mix curation, facade improvements, enhanced parking and signage, and targeted marketing to health and wellness tenants.",
      results: [
        "Achieved 100% occupancy from 70%",
        "Increased NOI by 45%",
        "Attracted premium tenants with longer lease terms",
        "Enhanced property value by $1.8M"
      ],
      investment: "$850K",
      roi: "210%",
      timeframe: "12 months"
    },
    {
      title: "Industrial Warehouse Portfolio",
      type: "Industrial",
      location: "Dallas, TX",
      challenge: "Portfolio of 5 industrial properties with maintenance issues, short-term leases, and below-market rents.",
      solution: "Systematic property improvements, lease restructuring, tenant retention program, and market-rate adjustments.",
      results: [
        "Extended average lease terms from 3 to 7 years",
        "Increased portfolio value by $5.2M",
        "Reduced maintenance costs by 22%",
        "Achieved 98% tenant retention rate"
      ],
      investment: "$1.2M",
      roi: "430%",
      timeframe: "24 months"
    }
  ];

  const metrics = [
    {
      value: "$12M+",
      label: "Total Property Value Added"
    },
    {
      value: "98%",
      label: "Average Occupancy Rate"
    },
    {
      value: "240%",
      label: "Average ROI Achieved"
    },
    {
      value: "15",
      label: "Successful Projects Completed"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies | AxisPoint Partners Commercial Real Estate Success Stories</title>
        <meta 
          name="description" 
          content="Real commercial real estate success stories and case studies from AxisPoint Partners. See how we've helped property owners maximize their investments." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-axis">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Case Studies
              </h1>
              <p className="text-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Real results from real projects. See how we've helped property owners transform their commercial real estate investments.
              </p>
              <Button size="lg" className="btn-institutional">
                Discuss Your Project
              </Button>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Track Record
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding bg-accent/5">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Featured Success Stories
              </h2>
              <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Detailed case studies showcasing our strategic approach and the results we deliver for our clients.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="card-institutional">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <CardTitle className="text-display text-2xl text-primary mb-2">
                          {study.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary">{study.type}</Badge>
                          <Badge variant="outline">{study.location}</Badge>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-3xl font-bold text-primary">{study.roi}</div>
                        <div className="text-sm text-muted-foreground">ROI in {study.timeframe}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-body text-muted-foreground text-sm">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-body text-muted-foreground text-sm">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4 border-t">
                      <div>
                        <span className="text-sm text-muted-foreground">Investment: </span>
                        <span className="font-semibold text-primary">{study.investment}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">ROI: </span>
                        <span className="font-semibold text-primary">{study.roi}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Timeframe: </span>
                        <span className="font-semibold text-primary">{study.timeframe}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-body text-lg text-muted-foreground mb-8">
                Let us help you achieve similar results with your commercial real estate portfolio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-institutional">
                  Schedule Strategy Session
                </Button>
                <Button size="lg" variant="outline">
                  Download Full Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;