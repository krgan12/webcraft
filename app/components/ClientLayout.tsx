'use client';

import React from 'react';
import { useNavigation } from './NavigationContext';
import TransitionLoader from './TransitionLoader';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isTransitioning } = useNavigation();

  return (
    <>
      <TransitionLoader isVisible={isTransitioning} />
      {children}
    </>
  );
} 