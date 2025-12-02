'use client';

export default function SectionDivider({ variant = 'simple' }) {
  if (variant === 'gradient') {
    return (
      <div className="relative h-px my-16">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-border" />
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return null;
  }

  // Default simple divider - minimalist
  return (
    <div className="h-px w-full my-16 bg-border" />
  );
}