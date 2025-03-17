
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Sparkles } from 'lucide-react';

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
  const [isHovered, setIsHovered] = useState(false);
  
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
        "group relative overflow-hidden rounded-xl shadow-sm transition-all duration-500",
        "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
        variant === 'large' ? 'md:aspect-[16/9] aspect-[3/4]' : 'aspect-[3/2]',
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced gradient overlay with more vibrant colors */}
      <div className={cn(
        "absolute inset-0 z-10 transition-all duration-500",
        "bg-gradient-to-t from-black/80 via-black/40 to-transparent",
        isHovered ? "opacity-90" : "opacity-100"
      )} />
      
      {/* Subtle color overlay on hover */}
      <div className={cn(
        "absolute inset-0 bg-primary/20 z-5 transition-opacity duration-500",
        isHovered ? "opacity-20" : "opacity-0"
      )} />
      
      <img
        src={post.featureImage}
        alt={post.title}
        className={cn(
          "image-fade-in absolute inset-0 h-full w-full object-cover transition-all duration-700",
          imageLoaded ? 'loaded' : '',
          "group-hover:scale-110"
        )}
        onLoad={() => setImageLoaded(true)}
      />
      
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        {post.primaryTag && (
          <Badge 
            variant="secondary" 
            className={cn(
              "self-start mb-3 text-xs backdrop-blur-sm transition-all duration-300",
              "bg-primary/70 text-primary-foreground hover:bg-primary group-hover:translate-y-0",
              "border border-white/10 group-hover:shadow-md group-hover:shadow-primary/20",
              "flex items-center gap-1.5"
            )}
          >
            <Sparkles className="w-3 h-3 text-yellow-300" />
            {post.primaryTag.name}
          </Badge>
        )}
        
        <h2 className={cn(
          "text-white font-serif font-bold leading-tight mb-3 transition-all duration-300",
          "drop-shadow-md group-hover:text-white/95 group-hover:translate-y-0",
          variant === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
        )}>
          {post.title}
        </h2>
        
        {variant === 'large' && (
          <p className={cn(
            "text-white/90 line-clamp-2 mb-4 max-w-2xl",
            "transition-all duration-300 group-hover:text-white"
          )}>
            {post.excerpt}
          </p>
        )}
        
        <div className={cn(
          "flex items-center gap-4 text-white/80 text-sm",
          "transition-all duration-300 group-hover:text-white/95"
        )}>
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
