
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

interface FeaturedCardProps {
  post: {
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
  };
  variant?: 'large' | 'medium';
  className?: string;
  style?: React.CSSProperties;
}

const FeaturedCard = ({ 
  post, 
  variant = 'large', 
  className,
  style
}: FeaturedCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <Link 
      to={`/${post.slug}`}
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-md",
        variant === 'large' ? 'md:aspect-[16/9] aspect-[3/4]' : 'aspect-[3/2]',
        className
      )}
      style={style}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10" />
      
      <img
        src={post.featureImage}
        alt={post.title}
        className={cn(
          "image-fade-in absolute inset-0 h-full w-full object-cover transition-all duration-500",
          imageLoaded ? 'loaded' : '',
          "group-hover:scale-105"
        )}
        onLoad={() => setImageLoaded(true)}
      />
      
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        {post.primaryTag && (
          <Badge 
            variant="secondary" 
            className="self-start mb-3 text-xs bg-primary/80 text-primary-foreground backdrop-blur-sm hover:bg-primary/70"
          >
            {post.primaryTag.name}
          </Badge>
        )}
        
        <h2 className={cn(
          "text-white font-serif font-bold leading-tight mb-3 transition-all duration-200 group-hover:text-white/90",
          variant === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
        )}>
          {post.title}
        </h2>
        
        {variant === 'large' && (
          <p className="text-white/80 line-clamp-2 mb-4 max-w-2xl">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
