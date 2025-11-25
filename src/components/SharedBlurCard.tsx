import React, { ReactNode } from 'react';
import { Card } from './ui/card';

interface SharedBlurCardProps {
  children: ReactNode;
  className?: string;
}

export function SharedBlurCard({ children, className = '' }: SharedBlurCardProps) {
  return (
    <Card className={`
      glass-panel 
      border-primary/20 
      shadow-2xl 
      bg-white/5 
      dark:bg-black/20 
      backdrop-blur-md 
      border 
      border-white/10 
      dark:border-white/5
      ${className}
    `}>
      {/* Noise texture overlay for glass effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none rounded-lg overflow-hidden">
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

      {/* Progressive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none rounded-lg" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Card>
  );
}