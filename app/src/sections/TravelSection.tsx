import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pastLocations = [
  { city: 'Porto', country: 'Portugal', month: 'Jan 2026' },
  { city: 'Aarhus', country: 'Denmark', month: 'May 2025' },
  { city: 'Melbourne', country: 'Australia', month: 'Sep 2024' },
  { city: 'Bucarest', country: 'Romania', month: 'Oct 2025' },
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
      className="pt-24 pb-16 lg:pt-24 lg:pb-12 px-8 lg:px-24 bg-black text-[#E5E5E5] relative overflow-hidden"
    >
      {/* Background Image: Positioned top-right with no shade/gradient */}
      <img 
      ref={mapRef}
      src="/worldmap.avif" 
      alt=""
      // Change right-[12%] to right-0 on mobile for better alignment
      className="absolute top-0 right-0 lg:right-[12%] w-[50%] lg:w-[40%] h-auto object-contain pointer-events-none grayscale opacity-0 z-0"
    />
       
      <div className="max-w-screen-2xl mx-auto relative z-10">
        
        {/* Header Block: Negative margin pulls the title up to "link" with the Portfolio */}
        <div ref={headerRef} className="max-w-2xl mb-16 -mt-6 lg:-mt-12">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4 ">Current Journey</p>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight uppercase leading-[0.9] lg:leading-[0.8] mb-8 text-white">
          Travel <br />
          <span className="italic font-light text-white/50">Archive</span>
        </h2>

          {/* Middle Phrase: Maintains the established hierarchy */}
          <p className="mt-10 text-[11px] uppercase tracking-[0.3em] text-white/30 font-light leading-relaxed">
            Danish eyes, <br /> 
            global perspectives.
          </p>
        </div>

        {/* Two Column Grid: Wide gap for a spacious, editorial feel */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-24 lg:gap-x-40">
          
          {/* Column 1: Current Status */}
          <div className="travel-element">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/45 mb-10 pb-4 border-b border-white/5 w-full">Current Base</p>
            <div className="group cursor-default">
               <h3 className="font-serif text-5xl md:text-7xl uppercase mb-4 group-hover:italic transition-all duration-500 text-white">Porto</h3>
               <p className="text-[12px] uppercase tracking-widest text-white/30 mb-12">Portugal</p>
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Available for local booking & projects</span>
               </div>
            </div>
          </div>

          {/* Column 2: History & CTA */}
          <div className="travel-element">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/45 mb-10 pb-4 border-b border-white/5 w-full">Recently Visited</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-16">
              {pastLocations.map((loc, i) => (
                <div key={i} className="group">
                  <h5 className="font-serif text-2xl uppercase text-white group-hover:text-white transition-colors">{loc.city}</h5>
                  <p className="text-[10px] uppercase tracking-widest text-white/20 mt-2">{loc.month}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Button Block */}
            <div className="mt-16 pt-8 border-t border-white/5">
                <a 
                href="#contact" 
                className="inline-block w-full sm:w-auto text-center px-6 lg:px-10 py-4 border border-white/10 text-white/50 text-[9px] lg:text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.5em] font-medium transition-all duration-500 hover:bg-white hover:text-black"
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