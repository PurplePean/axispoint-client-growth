import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react";

// Base schema for all inquiries
const baseSchema = z.object({
  inquiryType: z.enum(["general", "professional"], {
    required_error: "Please select an inquiry type",
  }),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().optional(),
});

// Extended schema for professional inquiries
const professionalSchema = baseSchema.extend({
  company_practice: z.string().min(2, "Company/Practice name is required"),
  role: z.string().min(2, "Role is required"),
  city_state: z.string().min(2, "City/State is required"),
  client_focus: z.string().min(2, "Client focus is required"),
});

// General inquiry schema (requires message)
const generalSchema = baseSchema.extend({
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof baseSchema> & Partial<z.infer<typeof professionalSchema>>;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [mountTime] = useState(Date.now());
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(baseSchema),
    mode: "onBlur",
  });

  const inquiryType = watch("inquiryType");

  // Update validation schema when inquiry type changes
  const getValidationSchema = () => {
    if (inquiryType === "professional") {
      return professionalSchema;
    } else if (inquiryType === "general") {
      return generalSchema;
    }
    return baseSchema;
  };

  const onSubmit = async (data: FormData) => {
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

    // Honeypot check
    if (data.honeypot) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

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

    const payload = {
      form: formType,
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        ...(inquiryType === "professional" && {
          company_practice: data.company_practice,
          role: data.role,
          city_state: data.city_state,
          client_focus: data.client_focus,
        }),
        message: data.message || "",
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
        body: JSON.stringify(payload),
      });

      setShowSuccessDialog(true);
      reset();
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
      icon: Mail,
      title: "Email - Ethaniel",
      details: "Ethaniel@AxisPoint.llc",
      description: "Leasing & Transaction Execution"
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

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <DialogTitle className="text-center text-2xl">Message Sent Successfully!</DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Thank you for reaching out to AxisPoint Partners. We'll respond within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button onClick={() => setShowSuccessDialog(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
                      <item.icon className="h-6 w-6 text-accent" aria-hidden="true" />
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field - hidden */}
                <input
                  type="text"
                  {...register("honeypot")}
                  style={{ position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">
                    Inquiry Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={inquiryType}
                    onValueChange={(value) => setValue("inquiryType", value as "general" | "professional")}
                  >
                    <SelectTrigger className={errors.inquiryType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="professional">Professional Collaboration</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.inquiryType && (
                    <p className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" aria-hidden="true" />
                      {errors.inquiryType.message}
                    </p>
                  )}
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    className={errors.name ? "border-destructive" : ""}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" aria-hidden="true" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className={errors.email ? "border-destructive" : ""}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" aria-hidden="true" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone {inquiryType === "general" ? "(optional)" : ""}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(832) 580-2815"
                  />
                </div>

                {/* Professional Fields */}
                {inquiryType === "professional" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="company_practice">
                        Company/Practice <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="company_practice"
                        {...register("company_practice")}
                        placeholder="Your firm name"
                        className={errors.company_practice ? "border-destructive" : ""}
                        aria-invalid={errors.company_practice ? "true" : "false"}
                        aria-describedby={errors.company_practice ? "company-error" : undefined}
                      />
                      {errors.company_practice && (
                        <p id="company-error" className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.company_practice.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">
                        Role <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="role"
                        {...register("role")}
                        placeholder="e.g., Managing Partner, CPA"
                        className={errors.role ? "border-destructive" : ""}
                        aria-invalid={errors.role ? "true" : "false"}
                        aria-describedby={errors.role ? "role-error" : undefined}
                      />
                      {errors.role && (
                        <p id="role-error" className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.role.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city_state">
                        City/State <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="city_state"
                        {...register("city_state")}
                        placeholder="e.g., Houston, TX"
                        className={errors.city_state ? "border-destructive" : ""}
                        aria-invalid={errors.city_state ? "true" : "false"}
                        aria-describedby={errors.city_state ? "city-error" : undefined}
                      />
                      {errors.city_state && (
                        <p id="city-error" className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.city_state.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="client_focus">
                        Client Focus <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="client_focus"
                        {...register("client_focus")}
                        placeholder="e.g., Commercial RE investors"
                        className={errors.client_focus ? "border-destructive" : ""}
                        aria-invalid={errors.client_focus ? "true" : "false"}
                        aria-describedby={errors.client_focus ? "focus-error" : undefined}
                      />
                      {errors.client_focus && (
                        <p id="focus-error" className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" aria-hidden="true" />
                          {errors.client_focus.message}
                        </p>
                      )}
                    </div>
                  </>
                )}

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message {inquiryType === "professional" ? "(optional)" : <span className="text-destructive">*</span>}
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="How can we help?"
                    className={`min-h-[120px] resize-none ${errors.message ? "border-destructive" : ""}`}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" aria-hidden="true" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isLoading || !inquiryType}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
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
