import React, { useEffect, useState, useRef } from 'react';

export function CursorTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    let targetPosition = { x: 0, y: 0 };

    const updateMousePosition = (e: MouseEvent) => {
      targetPosition = { x: e.clientX, y: e.clientY };
      
      // Cancel previous animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use RAF for smooth updates
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition(targetPosition);
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] will-change-transform ${
          isClicking ? 'scale-75' : isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'scale 0.1s ease-out',
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 transition-colors duration-100 ${
            isHovering 
              ? 'border-primary bg-primary/20' 
              : 'border-primary/50 bg-transparent'
          }`}
        />
      </div>
      
      {/* Trailing dot */}
      <div
        className="fixed pointer-events-none z-[9998] will-change-transform"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="w-2 h-2 rounded-full bg-primary opacity-60" />
      </div>
    </>
  );
}