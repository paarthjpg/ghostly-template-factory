
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PostCardProps {
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
  variant?: 'vertical' | 'horizontal';
  className?: string;
}

const PostCard = ({ 
  post, 
  variant = 'vertical', 
  className 
}: PostCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  if (variant === 'horizontal') {
    return (
      <Link
        to={`/${post.slug}`}
        className={cn(
          "group flex flex-col sm:flex-row gap-5 overflow-hidden rounded-xl p-1 transition-all duration-300",
          "hover:bg-muted/50",
          className
        )}
      >
        <div className="relative aspect-video sm:w-1/3 overflow-hidden rounded-lg">
          <img
            src={post.featureImage}
            alt={post.title}
            className={cn(
              "image-fade-in h-full w-full object-cover transition-all duration-500",
              imageLoaded ? 'loaded' : '',
              "group-hover:scale-105"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div className="flex flex-col sm:w-2/3">
          <div className="flex items-center gap-2 mb-2">
            {post.primaryTag && (
              <Badge variant="secondary" className="text-xs">
                {post.primaryTag.name}
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-2 mb-3">
            {post.excerpt}
          </p>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.profileImage} alt={post.author.name} />
                <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
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
        </div>
      </Link>
    );
  }
  
  return (
    <Link
      to={`/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl transition-all duration-300",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <img
          src={post.featureImage}
          alt={post.title}
          className={cn(
            "image-fade-in h-full w-full object-cover transition-all duration-500",
            imageLoaded ? 'loaded' : '',
            "group-hover:scale-105"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        {post.primaryTag && (
          <Badge variant="secondary" className="text-xs">
            {post.primaryTag.name}
          </Badge>
        )}
      </div>
      
      <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      
      <p className="text-muted-foreground line-clamp-3 mb-4">
        {post.excerpt}
      </p>
      
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.profileImage} alt={post.author.name} />
            <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{post.author.name}</span>
        </div>
        
        <div className="flex items-center gap-3 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
