import { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { portfolioItems, vibes, subVibes, subSubVibes, highlights } from '../data/portfolio.ts';
import type { PortfolioItem } from '../data/portfolio.ts';
import { getOptimizedUrl } from '../utils/cloudinary';
import { logAnalyticsEvent } from '../services/firebase';
import { reportBrokenImage } from '../utils/reportBrokenImage';

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const [activeVibe, setActiveVibe] = useState('all');
  const [activeSubVibe, setActiveSubVibe] = useState('all');
  const [activeSubSubVibe, setActiveSubSubVibe] = useState('all');
  const [subMenuOpen, setSubMenuOpen] = useState(true);
  const [subSubMenuOpen, setSubSubMenuOpen] = useState(true);
  const [brokenImageIds, setBrokenImageIds] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const handleVibeClick = (vibeId: string) => {
    if (vibeId === activeVibe) {
      setSubMenuOpen((open) => !open);
      return;
    }
    setActiveVibe(vibeId);
    setActiveSubVibe('all');
    setActiveSubSubVibe('all');
    setSubMenuOpen(true);
    setSubSubMenuOpen(true);
    logAnalyticsEvent('portfolio_filter', { category: vibeId });
  };

  const handleSubVibeClick = (subVibeId: string) => {
    if (subVibeId === activeSubVibe) {
      setSubSubMenuOpen((open) => !open);
      return;
    }
    setActiveSubVibe(subVibeId);
    setActiveSubSubVibe('all');
    setSubSubMenuOpen(true);
    logAnalyticsEvent('portfolio_filter', { category: activeVibe, subcategory: subVibeId });
  };

  const handleSubSubVibeClick = (subSubVibeId: string) => {
    setActiveSubSubVibe(subSubVibeId);
    setSubSubMenuOpen(false);
    logAnalyticsEvent('portfolio_filter', { category: activeVibe, subcategory: activeSubVibe, subsubcategory: subSubVibeId });
  };

  // Highlights: the homepage mix, or a category tab with no subcategory
  // picked yet (only meaningful for categories that actually have
  // subcategories to drill into — a flat category like Portraits goes
  // straight to its full gallery). Clicking a highlight photo navigates
  // into its own category/subcategory/sub-subcategory as an entry point.
  const isHighlightsView = activeSubVibe === 'all' && (activeVibe === 'all' || Boolean(subVibes[activeVibe]));

  const handleHighlightNavigate = (item: PortfolioItem) => {
    setActiveVibe(item.category);
    setActiveSubVibe(item.subcategory ?? 'all');
    setActiveSubSubVibe(item.subsubcategory ?? 'all');
    setSubMenuOpen(true);
    setSubSubMenuOpen(true);
    logAnalyticsEvent('portfolio_highlight_click', {
      category: item.category,
      subcategory: item.subcategory,
      subsubcategory: item.subsubcategory,
    });
  };

  const getHighlightLabel = (item: PortfolioItem) => {
    if (item.subsubcategory) {
      const label = subSubVibes[item.subcategory ?? '']?.find((s) => s.id === item.subsubcategory)?.label;
      if (label) return label;
    }
    if (item.subcategory) {
      const label = subVibes[item.category]?.find((s) => s.id === item.subcategory)?.label;
      if (label) return label;
    }
    return vibes.find((v) => v.id === item.category)?.label ?? item.category;
  };

  // When an item goes three levels deep (e.g. Jungle Mate > Vol 1), show the
  // parent subcategory as a small eyebrow above the main label so the label
  // reads "Jungle Mate / Vol 1" instead of just "Vol 1" with no context.
  const getHighlightParentLabel = (item: PortfolioItem) => {
    if (!item.subsubcategory || !item.subcategory) return undefined;
    return subVibes[item.category]?.find((s) => s.id === item.subcategory)?.label;
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

    if (activeSubVibe === 'all') {
      const curatedIds = highlights[activeVibe];
      if (curatedIds) {
        const byId = new Map(allItems.map((item) => [item.id, item]));
        return curatedIds
          .map((id) => byId.get(id))
          .filter((item): item is PortfolioItem => Boolean(item));
      }
    }

    const byCategory = allItems.filter((item) => item.category === activeVibe);

    if (activeSubVibe === 'all') {
      return byCategory;
    }

    const bySubCategory = byCategory.filter((item) => item.subcategory === activeSubVibe);

    if (activeSubSubVibe === 'all') {
      return bySubCategory;
    }

    return bySubCategory.filter((item) => item.subsubcategory === activeSubSubVibe);
  }, [activeVibe, activeSubVibe, activeSubSubVibe]);

  // Cloudinary URLs are a point-in-time snapshot (see scripts/fetch-cloudinary-urls.js) —
  // if an asset is later renamed/deleted, its <img> 404s. Rather than leaving a black hole
  // in the grid, drop that tile once it's confirmed broken so the layout just reflows.
  const visibleItems = useMemo(
    () => filteredItems.filter((item) => !brokenImageIds.has(item.id)),
    [filteredItems, brokenImageIds]
  );

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
        // Filtering can shrink the grid a lot (e.g. an empty subcategory),
        // which can leave the scroll position pointing past the section into
        // whatever comes after it. Only correct for that exact overshoot —
        // scrollIntoView's "nearest" isn't safe here since the grid is
        // usually taller than the viewport, so it would "correct" on every
        // filter change instead of just the ones that actually overshoot.
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect && rect.bottom < 0) {
          gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [visibleItems]);

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

          {/* Filter Nav: flat wrapping rows on mobile, sticky nested sidebar on lg+ */}
          <nav
            aria-label="Portfolio filters"
            className="mb-4 lg:mb-0 lg:w-48 lg:shrink-0 lg:sticky lg:top-32 lg:self-start"
          >
            {/* Mobile: category row scrolls horizontally; any expanded sub-level
                renders as its own full-width wrapping row below it, so it has
                real width to wrap against instead of fighting the scroll row. */}
            <div className="flex flex-col gap-4 lg:hidden">
              <div className="flex flex-row gap-6 overflow-x-auto no-scrollbar scroll-smooth">
                {vibes.map((vibe) => {
                  const vibeSubVibes = subVibes[vibe.id];
                  const isActive = activeVibe === vibe.id;
                  const isExpanded = isActive && subMenuOpen;
                  return (
                    <button
                      key={vibe.id}
                      onClick={() => handleVibeClick(vibe.id)}
                      aria-pressed={isActive}
                      aria-expanded={vibeSubVibes ? isExpanded : undefined}
                      className={`flex items-center gap-1.5 shrink-0 text-left whitespace-nowrap text-[11px] uppercase tracking-[0.3em] transition-colors duration-500 pb-2 border-b-2 ${
                        isActive ? 'text-white border-white' : 'text-white/40 border-transparent hover:text-white/70'
                      }`}
                    >
                      {vibe.label}
                      {vibeSubVibes && (
                        <ChevronDown
                          size={10}
                          strokeWidth={1.5}
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {subVibes[activeVibe] && subMenuOpen && (
                <div aria-label="Portfolio subcategory filters" className="flex flex-row flex-wrap gap-x-6 gap-y-3">
                  {subVibes[activeVibe].map((subVibe) => {
                    const subSubs = subSubVibes[subVibe.id];
                    const isSubActive = activeSubVibe === subVibe.id;
                    const isSubExpanded = isSubActive && subSubMenuOpen;
                    return (
                      <button
                        key={subVibe.id}
                        onClick={() => handleSubVibeClick(subVibe.id)}
                        aria-pressed={isSubActive}
                        aria-expanded={subSubs ? isSubExpanded : undefined}
                        className={`flex items-center gap-1.5 text-left whitespace-nowrap text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${
                          isSubActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                        }`}
                      >
                        {subVibe.label}
                        {subSubs && (
                          <ChevronDown
                            size={9}
                            strokeWidth={1.5}
                            className={`transition-transform duration-300 ${isSubExpanded ? 'rotate-180' : ''}`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {subSubVibes[activeSubVibe] && subSubMenuOpen && (
                <div aria-label="Portfolio sub-subcategory filters" className="flex flex-col gap-2.5">
                  {subSubVibes[activeSubVibe].map((subSubVibe) => {
                    const isSubSubActive = activeSubSubVibe === subSubVibe.id;
                    return (
                      <button
                        key={subSubVibe.id}
                        onClick={() => handleSubSubVibeClick(subSubVibe.id)}
                        aria-pressed={isSubSubActive}
                        className={`flex items-center gap-2 text-left whitespace-nowrap text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                          isSubSubActive ? 'text-white' : 'text-white/35 hover:text-white/60'
                        }`}
                      >
                        <span className={`h-px w-3 transition-colors duration-500 ${isSubSubActive ? 'bg-white/60' : 'bg-white/20'}`} />
                        {subSubVibe.label}
                      </button>
                    );
                  })}
                </div>
              )}

              {subSubVibes[activeSubVibe] && !subSubMenuOpen && activeSubSubVibe !== 'all' && (
                <button
                  onClick={() => setSubSubMenuOpen(true)}
                  className="flex items-center justify-center gap-3"
                >
                  <span className="h-px w-6 bg-white/20" />
                  <span className="font-serif italic text-sm text-white">
                    {subSubVibes[activeSubVibe].find((s) => s.id === activeSubSubVibe)?.label}
                  </span>
                  <span className="h-px w-6 bg-white/20" />
                </button>
              )}
            </div>

            {/* Desktop: nested sticky sidebar */}
            <div className="hidden lg:flex lg:flex-col lg:gap-6">
              {vibes.map((vibe) => {
                const vibeSubVibes = subVibes[vibe.id];
                const isActive = activeVibe === vibe.id;
                const isExpanded = isActive && subMenuOpen;
                return (
                  <div key={vibe.id} className="flex flex-col items-start gap-3">
                    <button
                      onClick={() => handleVibeClick(vibe.id)}
                      aria-pressed={isActive}
                      aria-expanded={vibeSubVibes ? isExpanded : undefined}
                      className={`flex items-center gap-1.5 text-left whitespace-nowrap text-[12px] uppercase tracking-[0.3em] transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {vibe.label}
                      {vibeSubVibes && (
                        <ChevronDown
                          size={10}
                          strokeWidth={1.5}
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      )}
                    </button>

                    {vibeSubVibes && isExpanded && (
                      <div aria-label={`${vibe.label} subcategory filters`} className="flex flex-col gap-3 pl-4 border-l border-white/10">
                        {vibeSubVibes.map((subVibe) => {
                          const subSubs = subSubVibes[subVibe.id];
                          const isSubActive = activeSubVibe === subVibe.id;
                          // Desktop has room to keep the sub-subcategory list open at all
                          // times rather than collapsing it on selection like mobile does
                          // to save space — subSubMenuOpen only governs the mobile view.
                          const isSubExpanded = isSubActive;
                          return (
                            <div key={subVibe.id} className="flex flex-col items-start gap-2">
                              <button
                                onClick={() => handleSubVibeClick(subVibe.id)}
                                aria-pressed={isSubActive}
                                aria-expanded={subSubs ? isSubExpanded : undefined}
                                className={`flex items-center gap-1.5 text-left whitespace-nowrap text-[11px] uppercase tracking-[0.25em] transition-colors duration-500 ${
                                  isSubActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                                }`}
                              >
                                {subVibe.label}
                                {subSubs && (
                                  <ChevronDown
                                    size={9}
                                    strokeWidth={1.5}
                                    className={`transition-transform duration-300 ${isSubExpanded ? 'rotate-180' : ''}`}
                                  />
                                )}
                              </button>

                              {subSubs && isSubExpanded && (
                                <div aria-label={`${subVibe.label} subcategory filters`} className="flex flex-col gap-2 pl-3 border-l border-white/10">
                                  {subSubs.map((subSubVibe) => (
                                    <button
                                      key={subSubVibe.id}
                                      onClick={() => handleSubSubVibeClick(subSubVibe.id)}
                                      aria-pressed={activeSubSubVibe === subSubVibe.id}
                                      className={`text-left whitespace-nowrap text-[12px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                                        activeSubSubVibe === subSubVibe.id ? 'text-white' : 'text-white/35 hover:text-white/60'
                                      }`}
                                    >
                                      {subSubVibe.label}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Grid */}
          <div ref={gridRef} className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-2 md:gap-3 items-start">
            {visibleItems.map((item) => {
              const displayLabel = item.subcategory ?? item.category;
              return (
              <div
                key={item.id}
                role={isHighlightsView ? 'button' : 'figure'}
                tabIndex={isHighlightsView ? 0 : undefined}
                onClick={isHighlightsView ? () => handleHighlightNavigate(item) : undefined}
                onKeyDown={isHighlightsView ? (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleHighlightNavigate(item);
                  }
                } : undefined}
                aria-label={`${item.title} — ${displayLabel.replace('_', ' ')}`}
                className={`portfolio-item group relative overflow-hidden bg-[#0a0a0a] transition-all duration-700 ${isHighlightsView ? 'cursor-pointer' : ''}
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
                  onError={() => {
                    reportBrokenImage(item.image, item.title, item.category);
                    setBrokenImageIds((prev) => (
                      prev.has(item.id) ? prev : new Set(prev).add(item.id)
                    ));
                  }}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 will-change-transform"
                />
                {isHighlightsView && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent px-3 pb-2.5 pt-10 lg:px-4 lg:pb-3">
                    {getHighlightParentLabel(item) && (
                      <p className="text-[7px] lg:text-[8px] uppercase tracking-[0.35em] text-white/50 mb-1">
                        {getHighlightParentLabel(item)}
                      </p>
                    )}
                    <p className="flex items-center gap-1 text-[9px] lg:text-[10px] uppercase tracking-[0.25em] text-white">
                      {getHighlightLabel(item)}
                      <ArrowUpRight
                        size={11}
                        strokeWidth={1.75}
                        className="text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      />
                    </p>
                  </div>
                )}
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
