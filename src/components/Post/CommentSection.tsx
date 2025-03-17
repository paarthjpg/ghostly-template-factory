
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare } from 'lucide-react';

interface Comment {
  id: string;
  author: {
    name: string;
    image?: string;
  };
  content: string;
  date: string;
  replies?: Comment[];
}

interface CommentSectionProps {
  comments?: Comment[];
}

const CommentSection = ({ comments = [] }: CommentSectionProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission - this would be implemented with Ghost API
    console.log({ name, email, comment });
    // Reset form
    setName('');
    setEmail('');
    setComment('');
  };
  
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
  
  return (
    <section className="container px-4 py-16 border-t">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center scroll-reveal">
          <MessageSquare className="h-10 w-10 mx-auto mb-4 text-primary/70" />
          <h2 className="text-3xl font-serif font-bold mb-4">Join the conversation</h2>
          <p className="text-muted-foreground">Share your thoughts and insights with our community</p>
        </div>
        
        {/* Comment form */}
        <div className="mb-16 scroll-reveal">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comment">Comment</Label>
              <Textarea
                id="comment"
                rows={5}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit">Post Comment</Button>
          </form>
        </div>
        
        {/* Comments list */}
        {comments.length > 0 && (
          <div className="space-y-8">
            {comments.map((comment, index) => (
              <div key={comment.id} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={comment.author.image} alt={comment.author.name} />
                    <AvatarFallback>{getInitials(comment.author.name)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="font-medium">{comment.author.name}</h4>
                      <span className="text-xs text-muted-foreground">{formatDate(comment.date)}</span>
                    </div>
                    <p className="text-sm md:text-base">{comment.content}</p>
                    
                    <Button variant="ghost" size="sm" className="mt-2 text-xs">
                      Reply
                    </Button>
                    
                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-6 ml-6 space-y-6">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex gap-4">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={reply.author.image} alt={reply.author.name} />
                              <AvatarFallback>{getInitials(reply.author.name)}</AvatarFallback>
                            </Avatar>
                            
                            <div>
                              <div className="flex items-baseline justify-between mb-1">
                                <h4 className="font-medium text-sm">{reply.author.name}</h4>
                                <span className="text-xs text-muted-foreground">{formatDate(reply.date)}</span>
                              </div>
                              <p className="text-sm">{reply.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
