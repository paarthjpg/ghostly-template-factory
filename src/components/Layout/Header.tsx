
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, Search, X } from 'lucide-react';

interface HeaderProps {
  siteTitle?: string;
  navigation?: { label: string; url: string }[];
  isHome?: boolean;
}

export function Header({ 
  siteTitle = "Luminous", 
  navigation = [
    { label: "Home", url: "/" },
    { label: "Features", url: "/tag/features" },
    { label: "Style Guide", url: "/style-guide" },
    { label: "Membership", url: "/membership" },
    { label: "Contact", url: "/contact" },
  ],
  isHome = false
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome || mobileMenuOpen || searchOpen 
          ? "bg-background/80 backdrop-blur-lg border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={cn(
                "text-xl md:text-2xl font-serif font-bold transition-all duration-300",
                isScrolled ? "text-primary" : isHome ? "text-primary" : "text-primary"
              )}
            >
              {siteTitle}
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="sm"
              className="ml-2"
              aria-label="Subscribe"
            >
              Subscribe
            </Button>
          </nav>
          
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              aria-label="Search"
              className="mr-1"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg animate-slideDown">
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  className="text-base font-medium py-2 transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="default"
                size="sm"
                className="mt-2"
              >
                Subscribe
              </Button>
            </nav>
          </div>
        </div>
      )}
      
      {/* Search overlay */}
      {searchOpen && (
        <div className="border-t bg-background/95 backdrop-blur-lg animate-slideDown">
          <div className="container px-4 py-4">
            <div className="flex items-center">
              <input
                type="search"
                placeholder="Search..."
                className="flex-1 bg-transparent border-b border-border focus:border-primary outline-none py-2 px-1 text-lg"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSearch}
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
