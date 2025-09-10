import { useState } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully",
      description: "We'll respond within 24 hours. Thank you for your interest in AxisPoint.",
    });

    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@axispoint.com",
      description: "For general inquiries and new client requests"
    },
    {
      icon: Phone,
      title: "Phone", 
      details: "(555) 123-4567",
      description: "Monday - Friday, 8:00 AM - 6:00 PM"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "123 Financial District\nSuite 2500\nNew York, NY 10004",
      description: "By appointment only"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 hours",
      description: "For all client communications"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact AxisPoint | Connect With Our Asset Management Team</title>
        <meta 
          name="description" 
          content="Get in touch with AxisPoint for commercial real estate asset management services. Professional consultation and strategic planning available." 
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="section-padding bg-surface">
            <div className="container-axis">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-display text-4xl lg:text-6xl font-semibold text-primary mb-6">
                  Let's Discuss Your Real Estate Goals
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Connect with our team to explore how institutional-grade asset management 
                  can optimize your commercial real estate portfolio.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Info & Form */}
          <section className="section-padding">
            <div className="container-axis">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-display text-3xl font-semibold text-primary mb-8">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-8">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg flex-shrink-0">
                          <item.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-1">
                            {item.title}
                          </h3>
                          <p className="text-primary font-medium mb-1 whitespace-pre-line">
                            {item.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CPA Referral Notice */}
                  <div className="card-institutional p-6 mt-8">
                    <h3 className="font-semibold text-primary mb-3">
                      For CPA Referrals
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We work collaboratively with accounting professionals to expand their 
                      commercial real estate advisory services. Contact us to discuss our 
                      co-branded resources and referral partnership opportunities.
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="card-institutional p-8">
                  <h2 className="text-display text-2xl font-semibold text-primary mb-6">
                    Send us a message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          placeholder="First name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Select name="role" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="owner">Property Owner</SelectItem>
                          <SelectItem value="investor">Real Estate Investor</SelectItem>
                          <SelectItem value="cpa">CPA / Accountant</SelectItem>
                          <SelectItem value="advisor">Financial Advisor</SelectItem>
                          <SelectItem value="executive">Corporate Executive</SelectItem>
                          <SelectItem value="manager">Property Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select name="subject" required>
                        <SelectTrigger>
                          <SelectValue placeholder="What can we help with?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asset-management">Asset Management Services</SelectItem>
                          <SelectItem value="transaction">Transaction Execution</SelectItem>
                          <SelectItem value="advisory">Advisory Services</SelectItem>
                          <SelectItem value="cpa-partnership">CPA Partnership</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="existing-client">Existing Client Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Please describe your current situation and what you're looking to achieve..."
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending Message..." : "Send Message"}
                    </Button>

                    <div className="flex items-center justify-center pt-4">
                      <Button variant="outline" size="lg" type="button">
                        Schedule a Discovery Call
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      By submitting this form, you consent to be contacted about our services. 
                      We respect your privacy and do not share client information. 
                      AxisPoint does not provide tax or legal advice.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}