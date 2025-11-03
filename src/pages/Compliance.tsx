import { Helmet } from "react-helmet-async";
import { Shield, FileText, AlertCircle } from "lucide-react";

export default function Compliance() {
  return (
    <>
      <Helmet>
        <title>Compliance | AxisPoint Partners</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="section-padding bg-surface">
        <div className="container-axis max-w-4xl">
          <h1 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Compliance & Disclosures
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">
            AxisPoint Partners is committed to maintaining the highest standards of
            compliance and transparency in all our operations.
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="card-institutional p-8 mb-8">
              <div className="flex items-start mb-4">
                <Shield className="h-8 w-8 text-accent mr-4 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                    Regulatory Compliance
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    AxisPoint Partners operates in full compliance with all applicable
                    federal, state, and local regulations governing commercial real estate
                    asset management and advisory services.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-institutional p-8 mb-8">
              <div className="flex items-start mb-4">
                <FileText className="h-8 w-8 text-accent mr-4 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                    Licensing & Partnerships
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AxisPoint Partners provides asset and portfolio management services.
                    All brokerage and leasing activities are conducted through our licensed
                    partner entities in accordance with state real estate commission requirements.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain partnerships with licensed brokers who handle all transactions
                    requiring real estate licenses, ensuring full regulatory compliance while
                    delivering comprehensive service to our clients.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-institutional p-8 mb-8">
              <div className="flex items-start mb-4">
                <AlertCircle className="h-8 w-8 text-accent mr-4 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                    Important Disclosures
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-primary font-semibold mb-2">No Tax or Legal Advice</h3>
                      <p>
                        AxisPoint Partners does not provide tax, legal, or accounting advice.
                        Clients should consult with their own tax, legal, and accounting
                        professionals for advice specific to their situation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary font-semibold mb-2">No Investment Advice</h3>
                      <p>
                        Information provided on this website is for informational purposes only
                        and does not constitute investment advice or a recommendation to buy,
                        sell, or hold any investment or pursue any investment strategy.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary font-semibold mb-2">Professional Relationships</h3>
                      <p>
                        Our services are provided under executed service agreements. Contact
                        through this website does not create a professional relationship or
                        any obligation on either party.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-primary font-semibold mb-2">Fair Housing Statement</h3>
                      <p>
                        AxisPoint Partners and our partner entities are committed to compliance
                        with all federal, state, and local fair housing laws and equal opportunity
                        regulations in all our operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Professional Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AxisPoint Partners adheres to the following professional standards:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fiduciary duty to our clients' best interests</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Confidentiality and data protection</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent communication and reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-accent flex-shrink-0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Conflict of interest disclosure and management</span>
                </li>
              </ul>
            </div>

            <div className="card-institutional p-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Questions About Compliance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our compliance policies or require additional
                disclosures, please contact us:
              </p>
              <p className="text-primary mt-4">
                <strong>Email:</strong> Zach@AxisPoint.llc<br />
                <strong>Phone:</strong> (832) 580-2815
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
