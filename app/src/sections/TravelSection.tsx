import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pastLocations = [
  { city: 'Bucarest', country: 'Romania', month: 'Oct 2025' },
  { city: 'Paris', country: 'France', month: 'Jun 2025' },
  { city: 'Aarhus', country: 'Denmark', month: 'May 2025' },
  { city: 'Melbourne', country: 'Australia', month: 'Sep 2024' }
];

export default function TravelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !headerRef.current?.children) return;

      // Header Animation
      gsap.fromTo(headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Map Background Reveal
      gsap.fromTo(mapRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 0.35, 
          x: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );

      // Element reveal for the two columns
      gsap.fromTo(".travel-element",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 90%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
  <section 
    ref={sectionRef} 
    id="travel" 
    className="pt-24 pb-16 lg:pt-32 lg:pb-24 px-8 lg:px-24 bg-black text-[#E5E5E5] relative overflow-hidden"
  >
    {/* Map remains desktop only */}
    <img 
      ref={mapRef}
      src="/worldmap.avif" 
      alt=""
      className="hidden lg:block absolute top-10 right-[12%] w-[38%] h-auto object-contain pointer-events-none grayscale opacity-0 z-0"
    />
      
    <div className="max-w-screen-2xl mx-auto relative z-10">
  
      {/* Header Block: Cleaned up for Mobile */}
      <div ref={headerRef} className="max-w-2xl mb-16 lg:mb-24">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4">Current Journey</p>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight uppercase leading-[0.9] text-white">
          Travel <br />
          <span className="italic font-light text-white/50">Archive</span>
        </h2>
        {/* Hidden on mobile to reduce clutter */}
        <p className="hidden lg:block mt-8 text-[11px] uppercase tracking-[0.3em] text-white/30 font-light leading-relaxed">
          Danish eyes, <br /> 
          global perspectives.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-24 lg:gap-x-40">
        
        {/* Column 1: Current Base - Optimized for Mobile */}
        <div className="travel-element">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/5 w-full">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">Current Base</p>
            <div className="flex items-center gap-2 lg:hidden">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] uppercase tracking-widest text-white/20">Active</span>
            </div>
          </div>

          <div className="group cursor-default">
              <h3 className="font-serif text-4xl lg:text-7xl uppercase text-white">
                Porto
              </h3>
              
              <div className="hidden lg:block mt-6">
                <p className="text-[12px] uppercase tracking-widest text-white/30 mb-8">Portugal</p>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Available for local booking</span>
                </div>
              </div>
          </div>
        </div>

        {/* Column 2: History */}
        <div className="travel-element">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mb-10 pb-4 border-b border-white/5 w-full">
            Recently Visited
          </p>
          
          {/* MOBILE: Single column list | DESKTOP: Grid (grid-cols-2) */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-8 lg:gap-y-12 lg:gap-x-12">
            {pastLocations.map((loc, i) => (
              <div 
                key={i} 
                className="group flex justify-between items-end lg:block border-b border-white/[0.03] lg:border-0 pb-2 lg:pb-0"
              >
                <div>
                  <h5 className="font-serif text-xl md:text-2xl uppercase text-white">{loc.city}</h5>
                </div>
                <p className="text-[9px] uppercase tracking-widest text-white/20 mb-1 lg:mt-2">
                  {loc.month}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA Button Block - Adapted for Mobile */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-white/5">
              <a 
              href="#contact" 
              className="inline-block w-full lg:w-auto text-center px-6 lg:px-10 py-4 border border-white/10 text-white/50 text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.5em] font-medium transition-all duration-500 hover:bg-white hover:text-black"
            >
              Invite me to your city - Worldwide
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);
}