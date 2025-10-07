import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function GetInTouch() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const endpoint = import.meta.env.VITE_FORMS_ENDPOINT;

    if (!endpoint) {
      toast({
        title: "Configuration Error",
        description: "Form endpoint not configured. Please contact support.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    const data = {
      form: "general",
      data: {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        timestamp: new Date().toISOString()
      }
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Thank you for reaching out",
        description: "We'll be in touch within 24 hours.",
      });

      (e.target as HTMLFormElement).reset();
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

  return (
    <section className="section-padding bg-background">
      <div className="container-axis">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Get in Touch
            </h2>
          </div>

          <div className="card-institutional p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="h-12"
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
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help?"
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
