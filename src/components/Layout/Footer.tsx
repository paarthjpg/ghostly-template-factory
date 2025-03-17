
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Github, Youtube, Mail } from 'lucide-react';

interface FooterProps {
  siteTitle?: string;
  siteDescription?: string;
}

const Footer = ({ 
  siteTitle = "Luminous", 
  siteDescription = "A premium minimalist Ghost theme inspired by Apple design principles."
}: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5">
            <div className="mb-6">
              <Link to="/" className="text-2xl font-serif font-bold">
                {siteTitle}
              </Link>
              <p className="mt-3 text-muted-foreground max-w-md">
                {siteDescription}
              </p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Github">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h3 className="text-base font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/tag/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
              <li><Link to="/style-guide" className="text-muted-foreground hover:text-foreground transition-colors">Style Guide</Link></li>
              <li><Link to="/membership" className="text-muted-foreground hover:text-foreground transition-colors">Membership</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-base font-medium mb-4">Subscribe to our newsletter</h3>
            <p className="text-muted-foreground mb-4">Get the latest posts delivered straight to your inbox.</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="max-w-sm" 
                required
              />
              <Button type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            © {currentYear} {siteTitle}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
