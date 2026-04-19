import { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioItems, vibes } from '../data/portfolio.ts';
import type { PortfolioItem } from '../data/portfolio.ts';
import { getOptimizedUrl } from '../utils/cloudinary';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../services/firebase';
import { reportBrokenImage } from '../utils/reportBrokenImage';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const [activeVibe, setActiveVibe] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    const allItems = (portfolioItems as PortfolioItem[]).filter(
      (item) => item.category !== 'about'
    );

    if (activeVibe === 'all') {
      return [...allItems]
        .sort(() => 0.5 - Math.random())
        .slice(0, 12);
    }

    return allItems.filter((item: any) => item.category === activeVibe);
  }, [activeVibe]);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    ScrollTrigger.getAll().forEach(st => {
      if (st.trigger && (st.trigger as HTMLElement).classList.contains('portfolio-item')) {
        st.kill();
      }
    });

    gsap.fromTo(".portfolio-item", 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.05, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        }
      }
    );

    ScrollTrigger.refresh();
      }, sectionRef);
      return () => ctx.revert();
    }, [filteredItems]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 lg:py-32 bg-black text-white selection:bg-white selection:text-black">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
        
        {/* Header & Filter Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-md text-left">
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-1">The selected of</p>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight uppercase">Portfolio</h2>
            <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-white/50 font-light leading-relaxed italic">
              Danish eyes, <br /> 
              global perspectives.
            </p>
          </div>

          <nav aria-label="Portfolio filters" className="flex gap-8 overflow-x-auto w-full md:w-auto no-scrollbar scroll-smooth">
            {vibes.map((vibe) => (
              <button
                key={vibe.id}
                onClick={() => { setActiveVibe(vibe.id); logEvent(analytics, 'portfolio_filter', { category: vibe.id }); }}
                aria-pressed={activeVibe === vibe.id}
                className={`text-[9px] whitespace-nowrap uppercase tracking-[0.3em] transition-all duration-500 pb-2 border-b-2 ${
                  activeVibe === vibe.id ? 'text-white border-white' : 'text-white/50 border-transparent hover:text-white/60'
                }`}
              >
                {vibe.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Masonry-style Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              role="figure"
              aria-label={`${item.title} — ${item.category.replace('_', ' ')}`}
              className={`portfolio-item group relative overflow-hidden bg-[#0a0a0a] transition-all duration-700
                ${item.size === 'large' ? 'md:row-span-2 aspect-[4/5] md:aspect-[3/4.5]' : 'aspect-[4/5]'}`}
            >
              <img
                src={getOptimizedUrl(item.image, 800)}
                srcSet={`
                  ${getOptimizedUrl(item.image, 400)} 400w,
                  ${getOptimizedUrl(item.image, 800)} 800w,
                  ${getOptimizedUrl(item.image, 1200)} 1200w
                `}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.visibility = 'hidden';
                  reportBrokenImage(item.image, item.title, item.category);
                }}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 will-change-transform grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 duration-500 flex flex-col justify-end p-8">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/50 mb-2">{item.category.replace('_', ' ')}</p>
                <h3 className="font-serif text-2xl tracking-widest uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}