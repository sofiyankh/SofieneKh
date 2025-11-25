import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function Dynamic3DBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollY = () => {
      setScrollY(window.pageYOffset);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create 3D floating icons with different depths distributed across the entire page
  const floatingIcons = [
    // Hero Section (0-100vh)
    { 
      id: 'react-1', 
      type: 'react', 
      x: '15%', 
      y: '20%', 
      depth: 0.3,
      scale: 1.2,
      rotateSpeed: 0.5
    },
    { 
      id: 'ts-1', 
      type: 'typescript', 
      x: '80%', 
      y: '25%', 
      depth: 0.6,
      scale: 1,
      rotateSpeed: 0.4
    },
    { 
      id: 'js-1', 
      type: 'javascript', 
      x: '60%', 
      y: '15%', 
      depth: 0.5,
      scale: 0.9,
      rotateSpeed: 0.7
    },
    { 
      id: 'cloud-1', 
      type: 'cloud', 
      x: '45%', 
      y: '30%', 
      depth: 0.8,
      scale: 1.1,
      rotateSpeed: -0.2
    },
    
    // About Section (100-200vh)
    { 
      id: 'node-1', 
      type: 'nodejs', 
      x: '25%', 
      y: '40%', 
      depth: 0.7,
      scale: 1.1,
      rotateSpeed: 0.3
    },
    { 
      id: 'docker-1', 
      type: 'docker', 
      x: '90%', 
      y: '45%', 
      depth: 0.3,
      scale: 0.8,
      rotateSpeed: 0.6
    },
    { 
      id: 'js-2', 
      type: 'javascript', 
      x: '5%', 
      y: '50%', 
      depth: 0.9,
      scale: 1,
      rotateSpeed: -0.5
    },
    { 
      id: 'db-1', 
      type: 'database', 
      x: '70%', 
      y: '55%', 
      depth: 0.4,
      scale: 0.9,
      rotateSpeed: 0.4
    },
    
    // Skills Section (200-300vh)
    { 
      id: 'react-2', 
      type: 'react', 
      x: '85%', 
      y: '70%', 
      depth: 0.8,
      scale: 0.8,
      rotateSpeed: -0.3
    },
    { 
      id: 'python-1', 
      type: 'python', 
      x: '35%', 
      y: '75%', 
      depth: 0.6,
      scale: 1,
      rotateSpeed: -0.3
    },
    { 
      id: 'ts-2', 
      type: 'typescript', 
      x: '10%', 
      y: '80%', 
      depth: 0.2,
      scale: 0.9,
      rotateSpeed: -0.6
    },
    { 
      id: 'node-2', 
      type: 'nodejs', 
      x: '75%', 
      y: '85%', 
      depth: 0.4,
      scale: 0.7,
      rotateSpeed: -0.4
    },
    
    // Experience Section (300-400vh)
    { 
      id: 'react-3', 
      type: 'react', 
      x: '20%', 
      y: '95%', 
      depth: 0.5,
      scale: 1.0,
      rotateSpeed: 0.6
    },
    { 
      id: 'docker-2', 
      type: 'docker', 
      x: '88%', 
      y: '100%', 
      depth: 0.7,
      scale: 0.9,
      rotateSpeed: -0.4
    },
    { 
      id: 'cloud-2', 
      type: 'cloud', 
      x: '50%', 
      y: '110%', 
      depth: 0.3,
      scale: 1.1,
      rotateSpeed: 0.3
    },
    
    // Projects Section (400-500vh)
    { 
      id: 'js-3', 
      type: 'javascript', 
      x: '12%', 
      y: '120%', 
      depth: 0.6,
      scale: 0.8,
      rotateSpeed: -0.5
    },
    { 
      id: 'ts-3', 
      type: 'typescript', 
      x: '78%', 
      y: '130%', 
      depth: 0.4,
      scale: 1.0,
      rotateSpeed: 0.7
    },
    { 
      id: 'db-2', 
      type: 'database', 
      x: '40%', 
      y: '140%', 
      depth: 0.8,
      scale: 0.9,
      rotateSpeed: -0.3
    },
    
    // Education Section (500-600vh)
    { 
      id: 'python-2', 
      type: 'python', 
      x: '22%', 
      y: '150%', 
      depth: 0.5,
      scale: 1.1,
      rotateSpeed: 0.4
    },
    { 
      id: 'node-3', 
      type: 'nodejs', 
      x: '82%', 
      y: '160%', 
      depth: 0.7,
      scale: 0.8,
      rotateSpeed: -0.6
    },
    
    // Contact Section (600-700vh)
    { 
      id: 'react-4', 
      type: 'react', 
      x: '15%', 
      y: '170%', 
      depth: 0.4,
      scale: 1.0,
      rotateSpeed: 0.5
    },
    { 
      id: 'cloud-3', 
      type: 'cloud', 
      x: '75%', 
      y: '180%', 
      depth: 0.6,
      scale: 0.9,
      rotateSpeed: -0.4
    },
    
    // Footer Section (700vh+)
    { 
      id: 'docker-3', 
      type: 'docker', 
      x: '45%', 
      y: '190%', 
      depth: 0.5,
      scale: 0.8,
      rotateSpeed: 0.3
    },
    { 
      id: 'js-4', 
      type: 'javascript', 
      x: '85%', 
      y: '195%', 
      depth: 0.3,
      scale: 1.0,
      rotateSpeed: -0.5
    }
  ];

  const Icon3D = ({ type, className }: { type: string; className?: string }) => {
    const baseClass = `w-16 h-16 ${className}`;
    
    switch (type) {
      case 'react':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400/30">
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
              <ellipse cx="12" cy="12" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
              <ellipse cx="12" cy="12" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="9" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
            </svg>
          </div>
        );
      case 'typescript':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-600/30">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor"/>
              <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">TS</text>
            </svg>
          </div>
        );
      case 'nodejs':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-green-500/30">
              <path d="M12 2L22 8v8l-10 6-10-6V8l10-6z" fill="currentColor"/>
              <path d="M12 8v8M8 10l8 4M16 10l-8 4" stroke="white" strokeWidth="0.5" fill="none"/>
            </svg>
          </div>
        );
      case 'javascript':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400/30">
              <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor"/>
              <text x="12" y="16" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold">JS</text>
            </svg>
          </div>
        );
      case 'docker':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500/30">
              <rect x="3" y="8" width="3" height="3" fill="currentColor"/>
              <rect x="7" y="8" width="3" height="3" fill="currentColor"/>
              <rect x="11" y="8" width="3" height="3" fill="currentColor"/>
              <rect x="15" y="8" width="3" height="3" fill="currentColor"/>
              <rect x="7" y="5" width="3" height="3" fill="currentColor"/>
              <rect x="11" y="5" width="3" height="3" fill="currentColor"/>
            </svg>
          </div>
        );
      case 'python':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-green-400/30">
              <path d="M8 3c-2.2 0-4 1.8-4 4v2h8V7H8c-0.6 0-1-0.4-1-1s0.4-1 1-1h8c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4v-2h8v2h4c0.6 0 1 0.4 1 1s-0.4 1-1 1H8c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h8z" fill="currentColor"/>
            </svg>
          </div>
        );
      case 'database':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-purple-500/30">
              <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor"/>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="none" stroke="currentColor" strokeWidth="1"/>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        );
      case 'cloud':
        return (
          <div className={`${baseClass} relative`}>
            <svg viewBox="0 0 24 24" className="w-full h-full text-gray-400/30">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="currentColor"/>
            </svg>
          </div>
        );
      default:
        return (
          <div className={`${baseClass} rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30`} />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* 3D Glass Panels in Background */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`glass-panel-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 2) * 40}%`,
            width: `${120 + i * 20}px`,
            height: `${80 + i * 15}px`,
            transform: `translateZ(${i * 50}px)`,
          }}
          animate={{
            rotateX: scrollY * (0.02 + i * 0.01),
            rotateY: scrollY * (0.01 + i * 0.005),
            translateX: scrollY * (0.1 + i * 0.05) * (i % 2 === 0 ? 1 : -1),
            translateY: scrollY * (i % 2 === 0 ? 0.02 : -0.02),
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          <div className="w-full h-full rounded-lg glass-panel opacity-20" />
        </motion.div>
      ))}

      {/* Floating Tech Icons with 3D Movement */}
      {floatingIcons.map((icon) => {
        const parallaxX = scrollY * icon.depth * 0.8 * (icon.x.includes('8') ? -1 : 1);
        const parallaxY = scrollY * icon.depth * 0.2;
        const rotation = scrollY * icon.rotateSpeed;
        const scale = icon.scale + Math.sin(scrollY * 0.01 + parseFloat(icon.x)) * 0.1;

        return (
          <motion.div
            key={icon.id}
            className="absolute"
            style={{
              left: icon.x,
              top: icon.y,
            }}
            animate={{
              x: parallaxX,
              y: parallaxY,
              rotateX: rotation,
              rotateY: rotation * 1.5,
              rotateZ: rotation * 0.5,
              scale: scale,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
          >
            <div 
              className="relative"
              style={{
                transform: `perspective(1000px) translateZ(${icon.depth * 100}px)`,
                filter: `blur(${Math.max(0, icon.depth * 2 - 1)}px)`,
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 scale-150 opacity-30">
                <Icon3D type={icon.type} className="blur-lg" />
              </div>
              
              {/* Main icon */}
              <Icon3D type={icon.type} />
              
              {/* Glass overlay */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.1) 100%)',
                  backdropFilter: 'blur(2px)',
                }}
              />
            </div>
          </motion.div>
        );
      })}

      {/* Floating Particles */}
      {Array.from({ length: 25 }).map((_, i) => {
        const particleX = scrollY * (0.5 + i * 0.1) * (i % 2 === 0 ? 1 : -1);
        const particleY = Math.sin(scrollY * 0.01 + i) * 10;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${(i * 13) % 200}%`,
            }}
            animate={{
              x: particleX,
              y: particleY,
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              x: { type: "spring", stiffness: 30, damping: 20 },
              y: { type: "spring", stiffness: 30, damping: 20 },
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        );
      })}

      {/* Gradient Overlay for Depth */}
<div 
  className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent"
  style={{
    transform: `translateX(${scrollY * 0.1}px)`,
  }}
/>
    </div>
  );
}