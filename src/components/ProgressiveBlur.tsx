import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface ProgressiveBlurProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  gradient?: boolean;
  animated?: boolean;
}

export function ProgressiveBlur({ 
  children, 
  className = '', 
  intensity = 'medium',
  gradient = false,
  animated = false 
}: ProgressiveBlurProps) {
  const intensityClasses = {
    light: 'backdrop-blur-sm',
    medium: 'backdrop-blur-md',
    heavy: 'backdrop-blur-lg'
  };

  const baseClasses = `
    relative
    ${intensityClasses[intensity]}
    bg-white/5 dark:bg-black/5
    border border-white/10 dark:border-white/5
    rounded-lg
    overflow-hidden
    ${className}
  `;

  const Component = animated ? motion.div : 'div';
  const animationProps = animated ? {
    initial: { backdropFilter: 'blur(0px)' },
    animate: { backdropFilter: 'blur(12px)' },
    transition: { duration: 0.3 }
  } : {};

  return (
    <Component
      className={baseClasses}
      {...animationProps}
    >
      {/* Progressive gradient overlay */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      )}
      
      {/* Noise texture overlay for glass effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <filter id="noiseFilter">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.9" 
                numOctaves="1" 
                stitchTiles="stitch"
              />
              <feComponentTransfer>
                <feFuncA type="discrete" tableValues="0 .5"/>
              </feComponentTransfer>
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] animate-shimmer" />
      </div>
    </Component>
  );
}

export function ProgressiveBlurCard({ 
  children, 
  className = '', 
  intensity = 'medium' 
}: ProgressiveBlurProps) {
  return (
    <ProgressiveBlur 
      className={`p-6 shadow-xl ${className}`} 
      intensity={intensity}
      gradient
      animated
    >
      {children}
    </ProgressiveBlur>
  );
}

export function ProgressiveBlurSection({ 
  children, 
  className = '', 
  intensity = 'light' 
}: ProgressiveBlurProps) {
  return (
    <ProgressiveBlur 
      className={`${className}`} 
      intensity={intensity}
    >
      {children}
    </ProgressiveBlur>
  );
}