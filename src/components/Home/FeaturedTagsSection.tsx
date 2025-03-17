
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  featureImage?: string;
  postCount: number;
}

interface FeaturedTagsSectionProps {
  tags: Tag[];
}

const FeaturedTagsSection = ({ tags }: FeaturedTagsSectionProps) => {
  if (!tags || tags.length === 0) {
    return null;
  }
  
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4">
        <div className="mb-12 text-center max-w-2xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Explore by Topic</h2>
          <p className="text-muted-foreground text-lg">Discover content curated by categories that matter to you</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tags.map((tag, index) => (
            <Link
              key={tag.id}
              to={`/tag/${tag.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-xl aspect-[3/2] scroll-reveal",
                "transition-all duration-300 hover:shadow-md"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />
              
              <img
                src={tag.featureImage || `https://source.unsplash.com/random/400x300?${tag.name}`}
                alt={tag.name}
                className="image-fade-in absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                <h3 className="text-xl font-serif font-bold text-white mb-1">{tag.name}</h3>
                <p className="text-sm text-white/80">{tag.postCount} articles</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTagsSection;
