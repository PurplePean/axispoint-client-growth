import { Building2, Lightbulb, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export function WhatWeDo() {
  const services = [
    {
      icon: Building2,
      title: "Asset Management",
      description: "Day-to-day performance tied to measurable outcomes"
    },
    {
      icon: Lightbulb,
      title: "Advisory",
      description: "Clear scenarios for acquisitions, dispositions, and planning"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Short, usable guidance for owners and professionals",
      link: "/education"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-axis">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-institutional p-8 group hover:shadow-[var(--shadow-medium)]">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-6 group-hover:bg-accent/20 transition-[var(--transition-smooth)]">
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="text-display text-2xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              
              <p className="text-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {service.link && (
                <Link 
                  to={service.link} 
                  className="inline-block mt-4 text-accent hover:text-accent/80 font-medium transition-[var(--transition-smooth)]"
                >
                  Learn more →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
