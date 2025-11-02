import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AxisPoint Partners</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="section-padding bg-surface">
        <div className="container-axis max-w-4xl">
          <h1 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Information Collection and Use
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AxisPoint Partners collects information to provide better services to our clients
                and prospective clients. We collect information when you contact us through our
                website forms, email, or phone communications.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Contact information (name, email address, phone number)</li>
                <li>• Company or practice information</li>
                <li>• Professional role and location</li>
                <li>• Communications and correspondence with our team</li>
                <li>• Information about your commercial real estate interests</li>
              </ul>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                How We Use Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Respond to your inquiries and requests</li>
                <li>• Provide our services and communicate about them</li>
                <li>• Send relevant information about commercial real estate opportunities</li>
                <li>• Improve our services and client experience</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties.
                We may share information with trusted partners who assist us in operating
                our business, conducting our services, or serving our clients, provided
                those parties agree to keep this information confidential.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information
                from unauthorized access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your information</li>
                <li>• Opt-out of marketing communications</li>
              </ul>
            </div>

            <div className="card-institutional p-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our data practices,
                please contact us at:
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
