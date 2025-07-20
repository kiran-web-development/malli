import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const checkDevice = () => {
      return window.innerWidth > 768;
    };

    setIsVisible(checkDevice());

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, [role="button"], .cursor-pointer, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    if (checkDevice()) {
      document.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);

      // Hide default cursor only on desktop
      document.body.style.cursor = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{ 
          width: '12px', 
          height: '12px', 
          background: '#ffd1e7', // light-pink
          borderRadius: '50%',
          position: 'fixed'
        }}
      />
      
      {/* Cursor trail/ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] border-2 border-light-pink/60 rounded-full"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
        style={{ 
          width: '40px', 
          height: '40px',
          position: 'fixed'
        }}
      />

      {/* Additional glow effect for interactive elements */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full bg-light-pink/20 blur-md"
          animate={{
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          style={{ 
            width: '60px', 
            height: '60px',
            position: 'fixed'
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;