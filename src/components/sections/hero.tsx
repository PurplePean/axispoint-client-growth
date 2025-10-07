import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-skyline.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional commercial real estate skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-axis">
        <div className="max-w-3xl">
          <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 tracking-tight">
            Intelligent Asset Management for Real Estate Operators and Advisors.
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            We help owners and trusted advisors make clear decisions, protect cash flow, and compound long-term value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-white border-0 px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="/contact">Connect with AxisPoint <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}