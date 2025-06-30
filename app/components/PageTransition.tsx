'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    if (displayChildren !== children) {
      setIsTransitioning(true);
      
      // Start exit animation
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 300); // Half of the total transition time

      return () => clearTimeout(timer);
    }
  }, [children, displayChildren]);

  return (
    <div
      className={`transition-all duration-600 ease-in-out ${
        isTransitioning
          ? 'opacity-0 scale-95 translate-y-4 blur-sm'
          : 'opacity-100 scale-100 translate-y-0 blur-none'
      }`}
    >
      {displayChildren}
    </div>
  );
} 