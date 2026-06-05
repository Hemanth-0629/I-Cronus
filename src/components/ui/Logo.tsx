"use client";

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'primary' | 'horizontal' | 'compact' | 'icon' | 'monochrome' | 'animated';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({ 
  variant = 'primary', 
  className = '', 
  width = 240, 
  height = 'auto' 
}: LogoProps) {
  
  // Since we are using the exact image provided by the user, we just render it directly.
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className} ${variant === 'animated' ? 'hover:scale-105 transition-transform duration-500' : ''}`}
      style={{ width, height: height === 'auto' ? 'auto' : height }}
    >
      <Image
        src="/logo.png"
        alt="i-Cronus Software Labs"
        width={typeof width === 'number' ? width : 240}
        height={typeof height === 'number' ? height : 60}
        className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] scale-90 translate-y-1.5"
        priority
      />
    </div>
  );
}
