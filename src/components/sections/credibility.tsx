import teamZachary from "@/assets/team-zachary.jpg";
import teamEthan from "@/assets/team-ethan.jpg";

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
      role: "Principal & Managing Director",
      image: teamZachary,
      credentials: "CRE, MBA"
    },
    {
      name: "Ethaniel Vu",
      role: "Licensed Transaction Partner",
      image: teamEthan,
      credentials: "Licensed Broker, CCIM"
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
            <div key={index} className="card-institutional p-8 text-center">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-display text-xl font-semibold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-1">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {member.credentials}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent rounded-sm" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Licensed & Bonded</h4>
              <p className="text-sm text-muted-foreground text-center">
                Fully licensed real estate professionals with comprehensive insurance coverage
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent rounded-sm" />
              </div>
              <h4 className="font-semibold text-primary mb-2">Fiduciary Standard</h4>
              <p className="text-sm text-muted-foreground text-center">
                Committed to acting in our clients' best interests at all times
              </p>
            </div>
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