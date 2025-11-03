import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | AxisPoint Partners</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="flex min-h-screen items-center justify-center bg-surface">
        <div className="container-axis max-w-2xl">
          <div className="card-institutional p-12 text-center">
            <div className="mb-8">
              <h1 className="text-display text-8xl font-semibold text-primary mb-4">404</h1>
              <h2 className="text-display text-3xl font-semibold text-primary mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                We couldn't find the page you're looking for.
              </p>
              <p className="text-sm text-muted-foreground">
                The page may have been moved or doesn't exist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" aria-hidden="true" />
                  Return to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <button onClick={() => window.history.back()}>
                  <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
                  Go Back
                </button>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Need help finding something?
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button asChild variant="link" size="sm">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <span className="text-muted-foreground">•</span>
                <Button asChild variant="link" size="sm">
                  <Link to="/education">Education</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
