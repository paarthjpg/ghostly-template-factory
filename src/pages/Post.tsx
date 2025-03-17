
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import PostContent from '@/components/Post/PostContent';
import RelatedPosts from '@/components/Post/RelatedPosts';
import CommentSection from '@/components/Post/CommentSection';

// Mock data for a single post - in a real Ghost theme this would use the Ghost Content API
const mockPostData = {
  title: "The Art of Crafting the Perfect Blog Post",
  html: `
    <p>Creating a blog post that resonates with your audience requires more than just good writing—it's about crafting an experience that captivates readers from the first sentence to the last. In this comprehensive guide, we'll explore the elements that make up the perfect blog post.</p>
    
    <h2>Start with a Compelling Headline</h2>
    <p>Your headline is the first thing readers see, and it determines whether they'll click through to read your content. A great headline should:</p>
    <ul>
      <li>Be specific and clear about what the reader will gain</li>
      <li>Create curiosity or promise a benefit</li>
      <li>Include keywords for SEO without feeling forced</li>
      <li>Ideally be between 50-60 characters for optimal display in search results</li>
    </ul>
    
    <p>Research shows that headlines with numbers, "how-to" phrases, and questions tend to perform better than generic statements.</p>
    
    <h2>Craft an Engaging Introduction</h2>
    <p>You have mere seconds to convince a reader to continue past your opening paragraph. Effective introductions often:</p>
    <ul>
      <li>Address a pain point or common challenge your reader faces</li>
      <li>Tell a relevant story that hooks the reader emotionally</li>
      <li>Present a surprising statistic or fact that challenges assumptions</li>
      <li>Clearly state what the reader will learn or gain from the article</li>
    </ul>
    
    <p>Remember that your introduction should set expectations for what follows and make a promise to the reader about the value they'll receive.</p>
    
    <h2>Structure for Scannability</h2>
    <p>Most online readers scan content before deciding to read in depth. Make your content scanner-friendly with:</p>
    <ul>
      <li>Clear, descriptive subheadings that break up the text</li>
      <li>Short paragraphs (2-3 sentences maximum)</li>
      <li>Bulleted or numbered lists for key points</li>
      <li>Bold text for important concepts or takeaways</li>
      <li>Relevant images, charts, or infographics that support your points</li>
    </ul>
    
    <blockquote>
      <p>"A well-structured article isn't just easier to read—it's easier to remember. When readers can quickly grasp your organization, they retain more information."</p>
    </blockquote>
    
    <h2>Provide Actionable Value</h2>
    <p>The body of your post should deliver on the promises made in your headline and introduction. Each section should:</p>
    <ul>
      <li>Focus on one clear idea or concept</li>
      <li>Include specific examples, case studies, or data points</li>
      <li>Provide actionable advice that readers can implement</li>
      <li>Address potential questions or objections</li>
    </ul>
    
    <p>The most successful blog posts aren't just informative—they're transformative, giving readers the tools to make real changes.</p>
    
    <h2>Add Multimedia Elements</h2>
    <p>Enhance your written content with visual and interactive elements:</p>
    <ul>
      <li>Custom images that illustrate concepts</li>
      <li>Screenshots for tutorials</li>
      <li>Embedded videos for complex explanations</li>
      <li>Interactive elements like polls or quizzes when appropriate</li>
    </ul>
    
    <p>Studies show that articles with images get 94% more views than those without visual elements.</p>
    
    <h2>Craft a Memorable Conclusion</h2>
    <p>Your conclusion should do more than just summarize—it should inspire action:</p>
    <ul>
      <li>Briefly recap the main points and the transformation you've promised</li>
      <li>Include a specific call-to-action that tells readers what to do next</li>
      <li>Consider ending with a thought-provoking question or challenge</li>
      <li>When appropriate, tease future content to keep readers coming back</li>
    </ul>
    
    <p>The best conclusions leave readers feeling equipped and motivated to take the next step.</p>
    
    <h2>Final Thoughts</h2>
    <p>Creating the perfect blog post is both an art and a science. While these elements provide a framework, don't forget to infuse your authentic voice and perspective. Your unique insights are what will ultimately set your content apart in a sea of similar articles.</p>
    
    <p>Remember that great blog posts aren't created in a single draft—editing, refining, and sometimes completely restructuring are part of the process. Take the time to polish your work, and you'll reap the rewards of engaged readers who keep coming back for more.</p>
  `,
  featureImage: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop",
  publishedAt: "2023-10-08T12:00:00Z",
  readingTime: "6 min read",
  tags: [
    {
      id: "tag-1",
      name: "Writing",
      slug: "writing"
    },
    {
      id: "tag-2",
      name: "Content",
      slug: "content"
    },
    {
      id: "tag-3",
      name: "Blogging",
      slug: "blogging"
    }
  ],
  author: {
    name: "Mark Johnson",
    bio: "Mark is a content strategist and writing coach with over 10 years of experience. He helps creators and businesses craft compelling narratives that drive engagement and conversion.",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1470&auto=format&fit=crop",
    website: "https://example.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  }
};

// Mock related posts
const mockRelatedPosts = [
  {
    id: '1',
    slug: 'seo-optimization-guide',
    title: 'Ultimate SEO Optimization Guide for Your Ghost Blog',
    excerpt: 'Learn how to boost your blog's search engine visibility with these proven optimization techniques for Ghost.',
    featureImage: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1470&auto=format&fit=crop',
    publishedAt: '2023-10-05T12:00:00Z',
    readingTime: '10 min read',
    primaryTag: {
      name: 'SEO',
      slug: 'seo'
    },
    author: {
      name: 'Sarah Williams',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1470&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    slug: 'content-strategy-guide',
    title: 'Developing a Winning Content Strategy',
    excerpt: 'Create a content plan that engages readers, builds loyalty, and helps you achieve your publishing goals.',
    featureImage: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1470&auto=format&fit=crop',
    publishedAt: '2023-09-25T12:00:00Z',
    readingTime: '8 min read',
    primaryTag: {
      name: 'Strategy',
      slug: 'strategy'
    },
    author: {
      name: 'Jane Smith',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    slug: 'email-newsletter-best-practices',
    title: 'Email Newsletter Best Practices for Publishers',
    excerpt: 'Learn how to create engaging newsletters that keep your subscribers coming back for more of your content.',
    featureImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1470&auto=format&fit=crop',
    publishedAt: '2023-09-19T12:00:00Z',
    readingTime: '7 min read',
    primaryTag: {
      name: 'Marketing',
      slug: 'marketing'
    },
    author: {
      name: 'Sarah Williams',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1470&auto=format&fit=crop'
    }
  }
];

// Mock comments
const mockComments = [
  {
    id: 'comment-1',
    author: {
      name: 'Alex Thompson',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop'
    },
    content: 'This is exactly what I needed! I've been struggling with structuring my blog posts effectively. The tip about making content scanner-friendly was particularly helpful.',
    date: '2023-10-10T14:32:00Z',
    replies: [
      {
        id: 'reply-1',
        author: {
          name: 'Mark Johnson',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1470&auto=format&fit=crop'
        },
        content: 'Thanks for your feedback, Alex! Glad to hear you found the structure tips helpful. Scannable content is becoming increasingly important as reading habits evolve.',
        date: '2023-10-10T15:45:00Z'
      }
    ]
  },
  {
    id: 'comment-2',
    author: {
      name: 'Jessica Wu',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop'
    },
    content: 'Great article! I would love to see a follow-up piece about how to effectively promote blog posts once they're published. That's an area where I think many of us struggle.',
    date: '2023-10-09T09:17:00Z'
  }
];

const Post = () => {
  const { slug } = useParams();
  
  // In a real Ghost theme, you would fetch the specific post by slug
  console.log(`Fetching post with slug: ${slug}`);
  
  return (
    <MainLayout>
      <PostContent post={mockPostData} />
      <RelatedPosts posts={mockRelatedPosts} />
      <CommentSection comments={mockComments} />
    </MainLayout>
  );
};

export default Post;
