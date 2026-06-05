"use client";

import React from 'react';

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
  
  // In a real app with next-themes, 'auto' would rely on CSS variables or a theme provider. 
  // We use currentColor for the main text so the parent can control it via text-white or text-black.
  // We use the brand teal for the hyphen and 'Software Labs' in light mode, and muted slate in dark mode.
  const textColor = variant === 'monochrome' ? 'currentColor' : 'currentColor';
  const brandTeal = variant === 'monochrome' ? 'currentColor' : '#328895';
  const subTextColor = variant === 'monochrome' ? 'currentColor' : '#64748B';

  const isAnimated = variant === 'animated';
  const isMonochrome = variant === 'monochrome';

  // Exact Source of Truth Colors
  const textColor = variant === 'monochrome' ? 'currentColor' : '#4597A5';
  const subTextColor = variant === 'monochrome' ? 'currentColor' : '#4597A5';
  const orange = isMonochrome ? 'currentColor' : '#FF8000';
  const blue = isMonochrome ? 'currentColor' : '#14AAF5';
  const green = isMonochrome ? 'currentColor' : '#7AD653';

  // Triangle SVG paths (perfect equilateral pointing UP centered at 0,0)
  // Base length 14, Height 12.12
  const trianglePath = "M 0,-8 L 9,8 L -9,8 Z";

  const Triangles = () => (
    <g className="logo-triangles">
      {/* Blue Triangle (Left) */}
      <path 
        d={trianglePath} 
        fill={blue} 
        transform="translate(132, 18) rotate(30)" 
        className={`origin-[132px_18px] transition-transform duration-500 hover:scale-110 ${isAnimated ? 'animate-pulse' : ''}`}
        style={isAnimated ? { animationDelay: '0ms' } : {}}
      />
      {/* Green Triangle (Right) */}
      <path 
        d={trianglePath} 
        fill={green} 
        transform="translate(148, 24) rotate(-20) scale(1.15)" 
        className={`origin-[148px_24px] transition-transform duration-500 hover:scale-110 ${isAnimated ? 'animate-pulse' : ''}`}
        style={isAnimated ? { animationDelay: '200ms' } : {}}
      />
      {/* Orange Triangle (Top) */}
      <path 
        d={trianglePath} 
        fill={orange} 
        transform="translate(145, 6) rotate(145) scale(1.1)" 
        className={`origin-[145px_6px] transition-transform duration-500 hover:scale-110 ${isAnimated ? 'animate-pulse' : ''}`}
        style={isAnimated ? { animationDelay: '400ms' } : {}}
      />
    </g>
  );

  // If just the icon is requested (Triangles only)
  if (variant === 'icon') {
    return (
      <svg width={width} height={height} viewBox="130 -5 40 45" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Triangles />
      </svg>
    );
  }

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 180 50" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Wordmark */}
        <text 
          x="0" 
          y="34" 
          fontFamily="'Quicksand', 'Nunito', 'Varela Round', sans-serif" 
          fontSize="42" 
          fontWeight="500" 
          fill={textColor} 
          letterSpacing="0.02em"
        >
          i-cronus
        </text>
        
        {/* Sub-brand */}
        {variant !== 'compact' && (
          <text 
            x="36" 
            y="52" 
            fontFamily="'Quicksand', 'Nunito', 'Varela Round', sans-serif" 
            fontSize="14" 
            fontWeight="400" 
            fill={subTextColor} 
            letterSpacing="0.03em" 
          >
            Software Labs
          </text>
        )}

        {/* Triangles Symbol */}
        <Triangles />
      </g>
    </svg>
  );
}
