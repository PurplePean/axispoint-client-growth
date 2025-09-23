import { User, Award, TrendingUp, Users } from "lucide-react";

export function Credibility() {
  const stats = [
    { value: "$2.3B+", label: "Assets Under Management" },
    { value: "150+", label: "Transactions Completed" },
    { value: "25+", label: "Years Combined Experience" },
    { value: "98%", label: "Client Retention Rate" }
  ];

  const team = [
    {
      name: "Zachary Russell",
      role: "Multifamily Asset Manager & Acquisitions",
      credentials: "Real Estate Professional",
      icon: TrendingUp
    },
    {
      name: "Ethaniel Vu",
      role: "Commercial Real Estate Asset Manager & Leasing",
      credentials: "TREC License",
      icon: Users
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-axis">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-display text-4xl lg:text-5xl font-semibold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="text-center mb-12">
          <h2 className="text-display text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Experienced Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team combines deep market expertise with institutional-grade processes 
            to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="card-institutional p-8 text-center hover-scale group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <member.icon className="h-10 w-10 text-accent group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-display text-xl font-semibold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-3">
                {member.role}
              </p>
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 rounded-full">
                <Award className="h-3 w-3 text-accent" />
                <span className="text-xs font-medium text-accent">{member.credentials}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent rounded-sm" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Institutional Grade</h4>
              <p className="text-sm text-muted-foreground text-center">
                Enterprise-level processes, reporting, and risk management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}