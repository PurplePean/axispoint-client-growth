import { Helmet } from "react-helmet-async";
import { Calculator, FileText, TrendingUp, Users, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ForCPAs = () => {
  const benefits = [
    {
      icon: Calculator,
      title: "Tax Strategy Optimization",
      description: "We help your clients maximize tax benefits through strategic real estate investments and 1031 exchanges."
    },
    {
      icon: FileText,
      title: "Detailed Financial Reporting",
      description: "Comprehensive reports that integrate seamlessly with your accounting processes and client presentations."
    },
    {
      icon: TrendingUp,
      title: "Investment Performance Analytics",
      description: "Regular performance metrics and benchmarking to support your client advisory services."
    },
    {
      icon: Users,
      title: "Client Referral Partnership",
      description: "Refer your clients to our asset management services and receive ongoing collaboration benefits."
    },
    {
      icon: Shield,
      title: "Compliance Support",
      description: "Stay compliant with real estate regulations while we handle the operational complexities."
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Focus on your core accounting services while we manage your clients' real estate portfolios."
    }
  ];

  const testimonials = [
    {
      quote: "AxisPoint Partners has been instrumental in helping our clients optimize their real estate investments. Their detailed reporting makes our job much easier.",
      author: "Sarah Johnson, CPA",
      firm: "Johnson & Associates"
    },
    {
      quote: "The collaboration with AxisPoint has allowed us to offer comprehensive wealth management services to our clients without expanding our team.",
      author: "Michael Chen, CPA",
      firm: "Chen Tax Services"
    }
  ];

  return (
    <>
      <Helmet>
        <title>CPA Partnership Program | AxisPoint Partners</title>
        <meta 
          name="description" 
          content="Partner with AxisPoint Partners to offer your clients expert commercial real estate asset management services. CPA referral program available." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-axis">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Partnership Program for CPAs
              </h1>
              <p className="text-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Enhance your client services with our commercial real estate expertise. We handle the asset management while you focus on what you do best.
              </p>
              <Button size="lg" className="btn-institutional">
                Become a Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Partner with AxisPoint?
              </h2>
              <p className="text-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Our partnership program is designed to complement your accounting services and provide additional value to your clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-institutional h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-display text-xl text-primary">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-body">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="section-padding bg-accent/5">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                How Our Partnership Works
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-display text-xl font-semibold text-primary mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-body text-muted-foreground">
                    We meet to understand your practice and identify opportunities for collaboration.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-display text-xl font-semibold text-primary mb-2">
                    Client Introduction
                  </h3>
                  <p className="text-body text-muted-foreground">
                    You introduce us to clients who could benefit from our asset management services.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-display text-xl font-semibold text-primary mb-2">
                    Ongoing Collaboration
                  </h3>
                  <p className="text-body text-muted-foreground">
                    We provide regular updates and coordinate on tax strategies and financial planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <div className="container-axis">
            <div className="text-center mb-16">
              <h2 className="text-display text-3xl md:text-4xl font-bold text-primary mb-4">
                What Our CPA Partners Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-institutional">
                  <CardContent className="pt-6">
                    <blockquote className="text-body text-lg mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm">
                      <div className="font-semibold text-primary">{testimonial.author}</div>
                      <div className="text-muted-foreground">{testimonial.firm}</div>
                    </div>
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
                Ready to Partner with Us?
              </h2>
              <p className="text-body text-lg text-muted-foreground mb-8">
                Join our network of trusted CPA partners and enhance your client service offerings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-institutional">
                  Schedule Partnership Call
                </Button>
                <Button size="lg" variant="outline">
                  Download Partnership Guide
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForCPAs;