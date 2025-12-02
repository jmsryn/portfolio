'use client';

export default function OpenToWork() {
  return (
    <div className="hidden md:block">
      <button
        onClick={() =>
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="fixed z-50 right-8 top-8 bg-primary text-primary-foreground text-xs px-4 py-2 rounded-sm border border-primary hover:bg-primary/90 transition-colors"
        aria-label="Scroll to Contact Section"
      >
        Available
      </button>
    </div>
  );
}
