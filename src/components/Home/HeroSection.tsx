
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeaturedCard from '../Cards/FeaturedCard';

interface HeroSectionProps {
  featuredPosts: Array<{
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    featureImage: string;
    publishedAt: string;
    readingTime: string;
    primaryTag?: {
      name: string;
      slug: string;
    };
    author: {
      name: string;
      profileImage?: string;
    };
  }>;
}

const HeroSection = ({ featuredPosts }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!featuredPosts || featuredPosts.length === 0) {
    return null;
  }
  
  const mainPost = featuredPosts[0];
  const secondaryPosts = featuredPosts.slice(1, 3);
  
  return (
    <section className="container px-4 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className={`opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            {mainPost && (
              <FeaturedCard 
                post={mainPost} 
                variant="large" 
                className={`opacity-0 ${isVisible ? 'animate-slideUp' : ''}`}
              />
            )}
          </div>
          
          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            {secondaryPosts.map((post, index) => (
              <FeaturedCard
                key={post.id}
                post={post}
                variant="medium"
                className={`opacity-0 ${isVisible ? 'animate-slideUp' : ''}`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            variant="outline" 
            size="lg" 
            className={`gap-2 opacity-0 ${isVisible ? 'animate-slideUp' : ''}`}
            style={{ animationDelay: '450ms' }}
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
