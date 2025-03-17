
import React from 'react';
import PostCard from '../Cards/PostCard';

interface RelatedPostsProps {
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
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts || posts.length === 0) {
    return null;
  }
  
  return (
    <section className="container px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center scroll-reveal">You might also enjoy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.id} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
