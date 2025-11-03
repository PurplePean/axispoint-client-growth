import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | AxisPoint Partners</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="section-padding bg-surface">
        <div className="container-axis max-w-4xl">
          <h1 className="text-display text-4xl lg:text-5xl font-semibold text-primary mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the AxisPoint Partners website and services, you agree
                to be bound by these Terms of Service and all applicable laws and regulations.
                If you do not agree with any of these terms, you are prohibited from using
                or accessing this site.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Professional Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AxisPoint Partners provides asset and portfolio management services for
                commercial real estate. All services are subject to executed service
                agreements. Information on this website does not constitute a service
                agreement or commitment to provide services.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                No Advisory Relationship
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Use of this website does not create a professional advisory relationship.
                The content on this website is for informational purposes only and should
                not be considered professional advice. We do not provide tax, legal, or
                investment advice through this website.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The content, design, graphics, and other materials on this website are
                protected by copyright, trademark, and other intellectual property laws.
                You may not reproduce, distribute, or create derivative works from any
                content without our express written permission.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This website and its contents are provided "as is" without warranties of
                any kind, either express or implied. We do not warrant that the website
                will be uninterrupted, error-free, or free of viruses or other harmful
                components.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                AxisPoint Partners shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of
                or inability to use this website or any content, even if we have been
                advised of the possibility of such damages.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Links to Third-Party Sites
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. These links are
                provided for your convenience only. We have no control over and assume
                no responsibility for the content, privacy policies, or practices of any
                third-party sites.
              </p>
            </div>

            <div className="card-institutional p-8 mb-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes
                will be effective immediately upon posting to this website. Your continued
                use of the website following any changes constitutes acceptance of those
                changes.
              </p>
            </div>

            <div className="card-institutional p-8">
              <h2 className="text-display text-2xl font-semibold text-primary mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about these Terms of Service should be directed to:
              </p>
              <p className="text-primary mt-4">
                <strong>AxisPoint Partners</strong><br />
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
