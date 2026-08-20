import { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioItems, vibes, subVibes } from '../data/portfolio.ts';
import type { PortfolioItem } from '../data/portfolio.ts';
import { getOptimizedUrl } from '../utils/cloudinary';
import { logAnalyticsEvent } from '../services/firebase';
import { reportBrokenImage } from '../utils/reportBrokenImage';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const [activeVibe, setActiveVibe] = useState('all');
  const [activeSubVibe, setActiveSubVibe] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const activeSubVibes = activeVibe !== 'all' ? subVibes[activeVibe] : undefined;

  const handleVibeClick = (vibeId: string) => {
    setActiveVibe(vibeId);
    setActiveSubVibe('all');
    logAnalyticsEvent('portfolio_filter', { category: vibeId });
  };

  const handleSubVibeClick = (subVibeId: string) => {
    setActiveSubVibe(subVibeId);
    logAnalyticsEvent('portfolio_filter', { category: activeVibe, subcategory: subVibeId });
  };

  const filteredItems = useMemo(() => {
    const allItems = (portfolioItems as PortfolioItem[]).filter(
      (item) => item.category !== 'about'
    );

    if (activeVibe === 'all') {
      return [...allItems]
        .sort(() => 0.5 - Math.random())
        .slice(0, 12);
    }

    const byCategory = allItems.filter((item) => item.category === activeVibe);

    if (activeSubVibe === 'all') {
      return byCategory;
    }

    return byCategory.filter((item) => item.subcategory === activeSubVibe);
  }, [activeVibe, activeSubVibe]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger && (st.trigger as HTMLElement).classList.contains('portfolio-item')) {
          st.kill();
        }
      });

      if (isFirstRender.current) {
        isFirstRender.current = false;
        gsap.fromTo('.portfolio-item',
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
      } else {
        gsap.fromTo('.portfolio-item',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [filteredItems]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 lg:py-32 bg-black text-white selection:bg-white selection:text-black">
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="max-w-md text-left mb-16 lg:mb-24">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-1">The selected of</p>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight uppercase">Portfolio</h2>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-white/50 font-light leading-relaxed italic">
            Danish eyes, <br />
            global perspectives.
          </p>
        </div>

        {/* Filter Nav + Grid */}
        <div className="lg:flex lg:items-start lg:gap-16">

          {/* Filter Nav: horizontal scroll row on mobile, sticky vertical sidebar on lg+ */}
          <nav
            aria-label="Portfolio filters"
            className="flex flex-col gap-8 mb-12
              lg:mb-0 lg:w-48 lg:shrink-0 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex flex-row gap-8 overflow-x-auto no-scrollbar scroll-smooth lg:flex-col lg:gap-6 lg:overflow-visible">
              {vibes.map((vibe) => (
                <button
                  key={vibe.id}
                  onClick={() => handleVibeClick(vibe.id)}
                  aria-pressed={activeVibe === vibe.id}
                  className={`text-left whitespace-nowrap text-[9px] lg:text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 pb-2 lg:pb-0 border-b-2 lg:border-b-0 ${
                    activeVibe === vibe.id ? 'text-white border-white' : 'text-white/40 border-transparent hover:text-white/70'
                  }`}
                >
                  {vibe.label}
                </button>
              ))}
            </div>

            {/* Subcategory filters for the active main category */}
            {activeSubVibes && activeSubVibes.length > 0 && (
              <div aria-label="Portfolio subcategory filters" className="flex flex-row flex-wrap gap-3 lg:flex-col lg:gap-3 lg:pl-4 lg:border-l lg:border-white/10">
                {activeSubVibes.map((subVibe) => (
                  <button
                    key={subVibe.id}
                    onClick={() => handleSubVibeClick(subVibe.id)}
                    aria-pressed={activeSubVibe === subVibe.id}
                    className={`text-left whitespace-nowrap text-[8px] lg:text-[9px] uppercase tracking-[0.25em] transition-colors duration-500 ${
                      activeSubVibe === subVibe.id ? 'text-white' : 'text-white/40 hover:text-white/70'
                    }`}
                  >
                    {subVibe.label}
                  </button>
                ))}
              </div>
            )}
          </nav>

          {/* Grid */}
          <div ref={gridRef} className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-2 md:gap-3 items-start">
            {filteredItems.map((item) => {
              const displayLabel = item.subcategory ?? item.category;
              return (
              <div
                key={item.id}
                role="figure"
                aria-label={`${item.title} — ${displayLabel.replace('_', ' ')}`}
                className={`portfolio-item group relative overflow-hidden bg-[#0a0a0a] transition-all duration-700
                  ${item.size === 'large' ? 'sm:row-span-2 aspect-[4/5] sm:aspect-[3/4.5]' : item.size === 'wide' ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'}`}
              >
                <img
                  src={getOptimizedUrl(item.image, item.size === 'wide' ? 1600 : 800)}
                  srcSet={item.size === 'wide' ? `
                    ${getOptimizedUrl(item.image, 800)} 800w,
                    ${getOptimizedUrl(item.image, 1200)} 1200w,
                    ${getOptimizedUrl(item.image, 1600)} 1600w,
                    ${getOptimizedUrl(item.image, 2400)} 2400w
                  ` : `
                    ${getOptimizedUrl(item.image, 400)} 400w,
                    ${getOptimizedUrl(item.image, 800)} 800w,
                    ${getOptimizedUrl(item.image, 1200)} 1200w
                  `}
                  sizes={item.size === 'wide' ? '(max-width: 640px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.visibility = 'hidden';
                    reportBrokenImage(item.image, item.title, item.category);
                  }}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 will-change-transform"
                />
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
