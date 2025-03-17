
import React from 'react';
import MainLayout from '@/components/Layout/MainLayout';
import HeroSection from '@/components/Home/HeroSection';
import LatestPostsSection from '@/components/Home/LatestPostsSection';
import FeaturedTagsSection from '@/components/Home/FeaturedTagsSection';
import NewsletterSection from '@/components/Home/NewsletterSection';

// Mock data - in a real Ghost theme this would come from the Ghost Content API
const mockFeaturedPosts = [
  {
    id: '1',
    slug: 'getting-started-with-luminous',
    title: 'Getting Started with Luminous Theme',
    excerpt: 'Learn how to set up and customize your new Luminous Ghost theme to create a stunning blog or publication.',
    featureImage: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1470&auto=format&fit=crop',
    publishedAt: '2023-10-15T12:00:00Z',
    readingTime: '5 min read',
    primaryTag: {
      name: 'Tutorials',
      slug: 'tutorials'
    },
    author: {
      name: 'John Doe',
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    slug: 'maximizing-membership-revenue',
    title: 'How to Maximize Your Membership Revenue',
    excerpt: 'Expert strategies to grow your Ghost membership base and increase revenue for your digital publication.',
    featureImage: 'https://images.unsplash.com/photo-1553484771-047a44eee27f?q=80&w=1470&auto=format&fit=crop',
    publishedAt: '2023-10-12T12:00:00Z',
    readingTime: '8 min read',
    primaryTag: {
      name: 'Business',
      slug: 'business'
    },
    author: {
      name: 'Jane Smith',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    slug: 'crafting-perfect-blog-post',
    title: 'The Art of Crafting the Perfect Blog Post',
    excerpt: 'Master the essential elements of creating engaging, high-quality blog posts that captivate your audience.',
    featureImage: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop',
    publishedAt: '2023-10-08T12:00:00Z',
    readingTime: '6 min read',
    primaryTag: {
      name: 'Writing',
      slug: 'writing'
    },
    author: {
      name: 'Mark Johnson',
      profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1470&auto=format&fit=crop'
    }
  }
];

const mockLatestPosts = [
  {
    id: '4',
    slug: 'seo-optimization-guide',
    title: 'Ultimate SEO Optimization Guide for Your Ghost Blog',
    excerpt: "Learn how to boost your blog's search engine visibility with these proven optimization techniques for Ghost.",
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
    id: '5',
    slug: 'photography-tips',
    title: 'Essential Photography Tips for Stunning Blog Images',
    excerpt: "Elevate your blog's visual appeal with these professional photography techniques that anyone can master.",
    featureImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1464&auto=format&fit=crop',
    publishedAt: '2023-10-01T12:00:00Z',
    readingTime: '7 min read',
    primaryTag: {
      name: 'Photography',
      slug: 'photography'
    },
    author: {
      name: 'Michael Brown',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1470&auto=format&fit=crop'
    }
  },
  {
    id: '6',
    slug: 'ghost-themes-comparison',
    title: 'Top 10 Premium Ghost Themes Compared',
    excerpt: 'An in-depth analysis of the best Ghost themes on the market to help you choose the perfect design for your publication.',
    featureImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop',
    publishedAt: '2023-09-28T12:00:00Z',
    readingTime: '9 min read',
    primaryTag: {
      name: 'Themes',
      slug: 'themes'
    },
    author: {
      name: 'John Doe',
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop'
    }
  },
  {
    id: '7',
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
    id: '8',
    slug: 'monetization-strategies',
    title: '5 Proven Monetization Strategies for Your Ghost Publication',
    excerpt: 'Explore different revenue models to effectively monetize your content and build a sustainable publishing business.',
    featureImage: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1470&auto=format&fit=crop',
    publishedAt: '2023-09-22T12:00:00Z',
    readingTime: '11 min read',
    primaryTag: {
      name: 'Business',
      slug: 'business'
    },
    author: {
      name: 'Mark Johnson',
      profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1470&auto=format&fit=crop'
    }
  },
  {
    id: '9',
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

const mockTags = [
  {
    id: '1',
    name: 'Business',
    slug: 'business',
    description: 'Articles about the business of publishing',
    featureImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop',
    postCount: 12
  },
  {
    id: '2',
    name: 'Writing',
    slug: 'writing',
    description: 'Improve your writing skills',
    featureImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1473&auto=format&fit=crop',
    postCount: 8
  },
  {
    id: '3',
    name: 'Design',
    slug: 'design',
    description: 'Articles about design principles',
    featureImage: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1374&auto=format&fit=crop',
    postCount: 15
  },
  {
    id: '4',
    name: 'Marketing',
    slug: 'marketing',
    description: 'Grow your audience with these marketing strategies',
    featureImage: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1506&auto=format&fit=crop',
    postCount: 10
  }
];

const Index = () => {
  return (
    <MainLayout isHome={true}>
      <HeroSection featuredPosts={mockFeaturedPosts} />
      <LatestPostsSection posts={mockLatestPosts} />
      <FeaturedTagsSection tags={mockTags} />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Index;
