import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'monochrome';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const isDark = variant === 'dark';

  const heights = {
    sm: 'h-10',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={isDark ? '/assets/logo_light.png' : '/assets/logo_transparente.png'}
        alt="Jacilma Carneiro — Psicóloga"
        className={`${heights[size]} w-auto object-contain transition-transform duration-300 hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
};
