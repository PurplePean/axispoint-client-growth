import { CheckCircle2 } from "lucide-react";

export function OurApproach() {
  const pillars = [
    "Experience you can verify",
    "Discipline without drama",
    "Partnership mindset"
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-axis">
        <div className="text-center mb-16">
          <h2 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Our Approach
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">
                {pillar}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
