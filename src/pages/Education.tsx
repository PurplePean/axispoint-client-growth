import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap } from "lucide-react";

export default function Education() {
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
        description: "Form endpoint not configured.",
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
        source: "Education Coming Soon",
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
        title: "You're on the list!",
        description: "We'll notify you when the Education Portal launches.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Education Portal Coming Soon | AxisPoint Partners</title>
        <meta 
          name="description" 
          content="New educational resources for commercial real estate operators and advisors coming soon." 
        />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-axis">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8 mx-auto">
              <GraduationCap className="h-10 w-10 text-accent" />
            </div>

            <h1 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Education Portal Coming Soon
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We're building a new resource center featuring actionable whitepapers, operator guides, 
              and professional tools. Check back soon for updates.
            </p>

            <div className="card-institutional p-8 max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Notify Me When It's Live"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
