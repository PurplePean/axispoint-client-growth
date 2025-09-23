import { Link } from "react-router-dom";

export function Footer() {
  const services = [
    { name: "Asset Management", href: "/services#asset-management" },
    { name: "Transaction Execution", href: "/services#transaction-execution" },
    { name: "Advisory Services", href: "/services#advisory" },
  ];

  const company = [
    { name: "About", href: "/about" },
    
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Compliance", href: "/compliance" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container-axis section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-xl font-semibold">
              AxisPoint Partners
            </Link>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">
              Institutional grade asset management for commercial real estate. 
              We manage the plan, the people, and the performance.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/80 hover:text-white transition-[var(--transition-smooth)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/80 hover:text-white transition-[var(--transition-smooth)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/80 hover:text-white transition-[var(--transition-smooth)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} AxisPoint Partners. All rights reserved.
            </p>
            <p className="text-xs text-white/60 mt-4 md:mt-0 max-w-md text-center md:text-right">
              AxisPoint Partners provides asset and portfolio management. Brokerage and leasing activities 
              are conducted through our licensed partner. We do not provide tax or legal advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}