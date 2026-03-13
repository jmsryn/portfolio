'use client';

export default function OpenToWork() {
  return (
    <div className="hidden lg:block">
      <div className="fixed z-50 right-8 bottom-8 flex flex-col items-end gap-4 pointer-events-none">

        {/* Availability Badge */}
        <button
          onClick={() =>
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="pointer-events-auto bg-primary text-primary-foreground text-xs px-4 py-2 font-mono font-bold uppercase tracking-wider border-2 border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transform transition-transform hover:shadow-none flex items-center gap-2 group"
          aria-label="Scroll to Contact Section"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          System Online: Available
        </button>
      </div>
    </div>
  );
}
