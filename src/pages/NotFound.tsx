
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/Layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="container flex items-center justify-center min-h-[80vh] px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-8xl font-serif font-bold mb-6 text-primary/80 animate-fadeIn">404</h1>
          <h2 className="text-3xl font-serif font-medium mb-4 animate-slideUp" style={{ animationDelay: '100ms' }}>Page not found</h2>
          <p className="text-muted-foreground mb-8 animate-slideUp" style={{ animationDelay: '200ms' }}>
            The page you're looking for doesn't exist or has been moved to another location.
          </p>
          <Button asChild className="animate-slideUp" style={{ animationDelay: '300ms' }}>
            <Link to="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
