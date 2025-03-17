
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PostCard from '../Cards/PostCard';

interface LatestPostsSectionProps {
  posts: Array<{
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
  title?: string;
  description?: string;
}

const LatestPostsSection = ({ 
  posts,
  title = "Latest Articles",
  description = "Explore our latest stories and insights"
}: LatestPostsSectionProps) => {
  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <section className="container px-4 py-16 md:py-20">
      <div className="mb-12 text-center max-w-2xl mx-auto scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={post.id} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12 scroll-reveal">
        <Button variant="outline" size="lg" className="gap-2">
          View all posts
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default LatestPostsSection;
