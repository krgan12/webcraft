'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface NavigationContextType {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const startTransition = (href: string) => {
    setIsTransitioning(true);
    
    // Simulate a brief loading time for the transition effect
    setTimeout(() => {
      router.push(href);
      // Reset transition state after navigation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 800); // Show loader for 800ms
  };

  return (
    <NavigationContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
} 