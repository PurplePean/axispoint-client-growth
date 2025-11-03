import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/education" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50" role="navigation" aria-label="Main navigation">
      <div className="container-axis">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3" aria-label="AxisPoint Partners home">
            <img
              src="/logo.svg"
              alt="AxisPoint Partners"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-[var(--transition-smooth)] hover:text-accent ${
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
                aria-current={location.pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="ml-4" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1" role="menu">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-[var(--transition-smooth)] hover:text-accent ${
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="w-full" asChild>
                  <Link to="/contact" role="menuitem">Contact</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}