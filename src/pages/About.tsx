import { Shield, Target, Users2, User, Mail, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Fiduciary Standard",
      description: "We are committed to acting in our clients' best interests at all times, maintaining the highest standards of professional conduct and transparency."
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Every strategy we implement is designed to deliver measurable outcomes and sustainable value for our clients' commercial real estate portfolios."
    },
    {
      icon: Users2,
      title: "Partnership Approach",
      description: "We work collaboratively with CPAs, finance teams, and ownership groups to ensure seamless integration with existing advisory relationships."
    }
  ];

  const team = [
    {
      name: "Zachary Russell",
      role: "Multifamily Asset Manager & Acquisitions",
      bio: "Zachary brings over 15 years of commercial real estate experience, specializing in institutional asset management and strategic portfolio optimization. He holds an MBA in Finance and maintains the CRE designation.",
      credentials: ["Licensed Real Estate Professional"],
      contact: "zachary@axispointpartners.com",
      icon: User
    },
    {
      name: "Ethaniel Vu",
      role: "Commercial Real Estate Asset Manager & Leasing",
      bio: "Ethaniel serves as our licensed broker partner, handling all transaction execution and leasing activities. With 12 years of market experience and CCIM certification, he ensures compliant and optimized deal execution.",
      credentials: ["CCIM Certification", "Commercial Investment Member"],
      contact: "ethaniel@axispointpartners.com",
      icon: Award
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-surface">
        <div className="container-axis">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-4xl lg:text-6xl font-semibold text-primary mb-6">
              The AxisPoint Partners Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded on the principle that commercial real estate deserves institutional-grade 
              management regardless of portfolio size, AxisPoint Partners bridges the gap between 
              sophisticated investment strategies and accessible professional services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding">
        <div className="container-axis">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl lg:text-4xl font-semibold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe that professional commercial real estate management should be 
              transparent, results-driven, and aligned with our clients' broader financial objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-institutional p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-display text-xl font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-surface">
        <div className="container-axis">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl lg:text-4xl font-semibold text-primary mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team combines deep market expertise with institutional processes 
              to deliver exceptional results for commercial real estate clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card-institutional p-8 hover-scale group">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-display text-2xl font-semibold text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-primary mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Credentials
                      </h4>
                      <ul className="space-y-2">
                        {member.credentials.map((credential, credIndex) => (
                          <li key={credIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                            {credential}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <a 
                        href={`mailto:${member.contact}`} 
                        className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors story-link"
                      >
                        <Mail className="h-4 w-4" />
                        {member.contact}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics & Compliance */}
      <section className="section-padding">
        <div className="container-axis">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display text-3xl lg:text-4xl font-semibold text-primary mb-6">
                Ethics & Compliance
              </h2>
              <p className="text-lg text-muted-foreground">
                We maintain the highest standards of professional conduct and regulatory compliance 
                in all our client relationships and business activities.
              </p>
            </div>

            <div className="card-institutional p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3">Regulatory Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AxisPoint Partners provides asset and portfolio management services. All brokerage and leasing 
                    activities are conducted through our licensed partner, Ethaniel Vu. We maintain 
                    appropriate licensing, bonding, and insurance coverage as required by state regulations.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary mb-3">Professional Standards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not provide tax or legal advice. Clients are encouraged to consult with their 
                    existing CPA, attorney, and financial advisors regarding all tax, legal, and broader 
                    financial planning matters related to their real estate investments.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-primary mb-3">Confidentiality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Client information is maintained in strict confidence and is never shared without 
                    explicit written consent. We employ industry-standard data security measures to 
                    protect sensitive financial and property information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}