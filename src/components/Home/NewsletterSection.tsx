
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center scroll-reveal">
          <Mail className="h-12 w-12 mx-auto mb-6 text-primary opacity-80" />
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Stay in the Loop
          </h2>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates, exclusive content,
            and special offers straight to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
              required
            />
            <Button type="submit" className="sm:flex-shrink-0">
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
