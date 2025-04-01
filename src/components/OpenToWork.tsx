'use client';

export default function OpenToWork() {
  return (
    <div className="hidden md:block">
        <button
            onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="fixed z-50 right-4 top-20 md:top-6 bg-green-500 text-white text-xs md:text-sm px-4 py-2 rounded-full shadow-md
                        hover:bg-green-600 transition animate-pulse"
            aria-label="Scroll to Contact Section"
            >
            Open to Work
        </button>
    </div>


  );
}
