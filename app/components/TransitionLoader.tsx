'use client';

import React from 'react';

interface TransitionLoaderProps {
  isVisible: boolean;
}

export default function TransitionLoader({ isVisible }: TransitionLoaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1c2331] via-[#0500B8] to-[#e0347f] animate-pulse">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full pulse-ring"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#e0347f]/20 rounded-full pulse-ring" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/15 rounded-full pulse-ring" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main loading container */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
          {/* Animated circles */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 animate-ping">
              <div className="w-20 h-20 border-4 border-white/40 rounded-full"></div>
            </div>
            <div className="absolute inset-0 animate-ping" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 border-4 border-[#e0347f]/60 rounded-full"></div>
            </div>
            <div className="absolute inset-0 animate-ping" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 border-4 border-white/30 rounded-full"></div>
            </div>
            
            {/* Center logo with enhanced styling */}
            <div className="relative z-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-lg border-2 border-white/50">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#1c2331] to-[#0500B8] bg-clip-text text-transparent">W</div>
            </div>
          </div>
          
          {/* Loading text with enhanced styling */}
          <div className="text-center">
            <p className="text-white text-xl font-semibold mb-4 animate-pulse">
              Preparing your experience...
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-6 w-48 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#e0347f] to-[#0500B8] rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 