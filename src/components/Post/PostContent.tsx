
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface PostContentProps {
  post: {
    title: string;
    html: string;
    featureImage: string;
    publishedAt: string;
    readingTime: string;
    tags?: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
    author: {
      name: string;
      bio?: string;
      profileImage?: string;
      website?: string;
      twitter?: string;
      facebook?: string;
    };
  };
}

const PostContent = ({ post }: PostContentProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
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
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // You'd add a toast notification here in a real implementation
  };
  
  return (
    <article>
      {/* Post Header */}
      <header className="container px-4 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className={`max-w-3xl mx-auto opacity-0 ${isAnimated ? 'animate-fadeIn' : ''}`}>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <Link key={tag.id} to={`/tag/${tag.slug}`}>
                  <Badge variant="secondary">{tag.name}</Badge>
                </Link>
              ))}
            </div>
          )}
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif opacity-0 ${isAnimated ? 'animate-slideUp' : ''}`} style={{ animationDelay: '100ms' }}>
            {post.title}
          </h1>
          
          <div className={`flex items-center justify-between flex-wrap gap-4 opacity-0 ${isAnimated ? 'animate-slideUp' : ''}`} style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.profileImage} alt={post.author.name} />
                <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">Author</div>
              </div>
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
      </header>
      
      {/* Featured Image */}
      <div className="w-full mb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className={`aspect-[16/9] rounded-lg overflow-hidden shadow-md opacity-0 ${isAnimated ? 'animate-slideUp' : ''}`} style={{ animationDelay: '300ms' }}>
            <img
              src={post.featureImage}
              alt={post.title}
              className={`image-fade-in w-full h-full object-cover ${isImageLoaded ? 'loaded' : ''}`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="container px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className={`flex justify-center space-x-2 mb-8 opacity-0 ${isAnimated ? 'animate-slideUp' : ''}`} style={{ animationDelay: '400ms' }}>
            <Button variant="outline" size="icon" aria-label="Share on Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Share on Facebook">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Share on LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Copy link" onClick={copyLinkToClipboard}>
              <Link2 className="h-4 w-4" />
            </Button>
          </div>
          
          <div 
            className={`prose dark:prose-invert mx-auto opacity-0 ${isAnimated ? 'animate-slideUp' : ''}`}
            style={{ animationDelay: '500ms' }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          
          <Separator className="my-12" />
          
          {/* Author Bio */}
          <div className={`flex flex-col sm:flex-row gap-6 opacity-0 ${isAnimated ? 'animate-slideUp' : ''}`} style={{ animationDelay: '600ms' }}>
            <Avatar className="h-20 w-20">
              <AvatarImage src={post.author.profileImage} alt={post.author.name} />
              <AvatarFallback className="text-lg">{getInitials(post.author.name)}</AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="text-xl font-medium mb-2">{post.author.name}</h3>
              {post.author.bio && <p className="text-muted-foreground mb-4">{post.author.bio}</p>}
              
              <div className="flex gap-2">
                {post.author.twitter && (
                  <Button variant="ghost" size="icon" aria-label="Twitter" asChild>
                    <a href={post.author.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                
                {post.author.facebook && (
                  <Button variant="ghost" size="icon" aria-label="Facebook" asChild>
                    <a href={post.author.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                
                {post.author.website && (
                  <Button variant="ghost" size="icon" aria-label="Website" asChild>
                    <a href={post.author.website} target="_blank" rel="noopener noreferrer">
                      <Link2 className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostContent;
