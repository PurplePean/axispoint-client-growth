import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock } from "lucide-react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const [mountTime] = useState(Date.now());
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Anti-spam: Reject if submitted too quickly
    const timeSinceMount = Date.now() - mountTime;
    if (timeSinceMount < 2000) {
      toast({
        title: "Please wait",
        description: "Please take a moment to review your information.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    const honeypot = formData.get("company");
    if (honeypot) {
      // Silent fail for bots
      setIsLoading(false);
      return;
    }

    const endpoint = import.meta.env.VITE_FORMS_ENDPOINT;

    if (!endpoint) {
      toast({
        title: "Configuration Error",
        description: "Form endpoint not configured.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    const formType = inquiryType === "professional" ? "cpa" : "general";
    
    const data = {
      form: formType,
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone") || "",
        ...(inquiryType === "professional" && {
          company_practice: formData.get("company_practice"),
          role: formData.get("role"),
          city_state: formData.get("city_state"),
          client_focus: formData.get("client_focus"),
        }),
        message: formData.get("message") || "",
        timestamp: new Date().toISOString()
      }
    };

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Message sent successfully",
        description: "We'll respond within 24 hours. Thank you for your interest in AxisPoint.",
      });

      (e.target as HTMLFormElement).reset();
      setInquiryType("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email - Zachary",
      details: "Zach@AxisPoint.llc",
      description: "Asset Management & Acquisitions"
    },
    {
      icon: Phone,
      title: "Phone", 
      details: "(832) 580-2815",
      description: "Monday - Friday, 8:00 AM - 6:00 PM"
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
        <title>Contact | AxisPoint Partners</title>
        <meta 
          name="description" 
          content="Get in touch with AxisPoint Partners for commercial real estate asset management and advisory services." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-surface">
        <div className="container-axis">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display text-4xl lg:text-6xl font-semibold text-primary mb-6">
              Let's Discuss Your Real Estate Goals
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Connect with our team to explore how we can help optimize your commercial real estate investments.
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
            </div>

            {/* Contact Form */}
            <div className="card-institutional p-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-6">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden */}
                <input
                  type="text"
                  name="company"
                  style={{ position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select 
                    name="inquiryType" 
                    required 
                    value={inquiryType}
                    onValueChange={setInquiryType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="professional">Professional Collaboration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone {inquiryType === "general" ? "(optional)" : ""}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(832) 580-2815"
                  />
                </div>

                {inquiryType === "professional" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="company_practice">Company/Practice *</Label>
                      <Input
                        id="company_practice"
                        name="company_practice"
                        required
                        placeholder="Your firm name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Role *</Label>
                      <Input
                        id="role"
                        name="role"
                        required
                        placeholder="e.g., Managing Partner, CPA"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city_state">City/State *</Label>
                      <Input
                        id="city_state"
                        name="city_state"
                        required
                        placeholder="e.g., Houston, TX"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="client_focus">Client Focus *</Label>
                      <Input
                        id="client_focus"
                        name="client_focus"
                        required
                        placeholder="e.g., Commercial RE investors"
                      />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">Message {inquiryType === "professional" ? "(optional)" : "*"}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required={inquiryType !== "professional"}
                    placeholder="How can we help?"
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isLoading || !inquiryType}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this form, you consent to be contacted about our services. 
                  We respect your privacy and do not share client information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
