
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children?: React.ReactNode;
  isHome?: boolean;
}

const MainLayout = ({ children, isHome = false }: MainLayoutProps) => {
  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Setup intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  // Image loading animation
  useEffect(() => {
    const images = document.querySelectorAll('.image-fade-in');
    
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        if (img.complete) {
          img.classList.add('loaded');
        } else {
          img.onload = () => {
            img.classList.add('loaded');
          };
        }
      }
    });
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header isHome={isHome} />
      <main className="flex-1 pt-16">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
