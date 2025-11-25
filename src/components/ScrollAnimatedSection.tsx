import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  blur?: boolean;
}

export function ScrollAnimatedSection({ 
  children, 
  className = '', 
  id,
  blur = false 
}: ScrollAnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-animate ${isVisible ? 'visible' : ''} ${
        blur ? 'section-blur' : ''
      } ${className}`}
    >
      {children}
    </section>
  );
}