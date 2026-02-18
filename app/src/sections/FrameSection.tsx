import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FrameSectionProps {
  id: string;
  headline: string;
  body: string;
  imageSrc: string;
  index: string;
  headlinePosition: 'left' | 'center';
  zIndex: number;
}

export default function FrameSection({ 
  id, 
  headline, 
  body, 
  imageSrc, 
  index, 
  headlinePosition,
  zIndex 
}: FrameSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const uiRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const headlineEl = headlineRef.current;
    const bodyEl = bodyRef.current;
    const ui = uiRef.current;

    if (!section || !image || !headlineEl || !bodyEl || !ui) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // Phase 1: ENTRANCE (0-30%)
      // Image entrance
      scrollTl.fromTo(image, 
        { scale: 1.10, y: '8vh', opacity: 0.25 },
        { scale: 1.00, y: 0, opacity: 1, ease: 'none' },
        0
      );

      // Headline entrance
      const headlineX = headlinePosition === 'left' ? '-12vw' : '0';
      const headlineY = headlinePosition === 'center' ? '-10vh' : '0';
      
      scrollTl.fromTo(headlineEl, 
        { x: headlineX, y: headlineY, opacity: 0 },
        { x: 0, y: 0, opacity: 1, ease: 'power2.out' },
        0.06
      );

      // Body entrance
      scrollTl.fromTo(bodyEl, 
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'power2.out' },
        0.12
      );

      // UI entrance
      scrollTl.fromTo(ui, 
        { opacity: 0 },
        { opacity: 1, ease: 'none' },
        0
      );

      // Phase 3: EXIT (70-100%)
      const exitX = headlinePosition === 'left' ? '-18vw' : '0';
      const exitY = headlinePosition === 'center' ? '-10vh' : '0';
      
      scrollTl.fromTo(headlineEl, 
        { x: 0, y: 0, opacity: 1 },
        { x: exitX, y: exitY, opacity: 0, ease: 'power2.in' },
        0.70
      );

      scrollTl.fromTo(bodyEl, 
        { y: 0, opacity: 1 },
        { y: '-4vh', opacity: 0, ease: 'power2.in' },
        0.74
      );

      scrollTl.fromTo(image, 
        { scale: 1, opacity: 1 },
        { scale: 1.08, opacity: 0.35, ease: 'power2.in' },
        0.78
      );

      scrollTl.fromTo(ui, 
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.92
      );

    }, section);

    return () => ctx.revert();
  }, [headlinePosition]);

  const headlineClasses = headlinePosition === 'left' 
    ? 'left-[6vw] top-[18vh] text-left'
    : 'left-1/2 top-[26vh] -translate-x-1/2 text-center';

  const bodyClasses = headlinePosition === 'left'
    ? 'left-[6vw] top-[40vh] text-left w-[34vw]'
    : 'left-1/2 top-[42vh] -translate-x-1/2 text-center w-[44vw]';

  return (
    <section 
      ref={sectionRef}
      id={id}
      className="section-pinned z-10"
      style={{ zIndex }}
    >
      {/* Background Image */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={imageSrc} 
          alt={headline}
          className="w-full h-full object-cover mono-image"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Vignette */}
      <div className="vignette" />

      {/* UI Layer */}
      <div ref={uiRef} className="absolute inset-0 pointer-events-none">
        {/* Wordmark */}
        <span className="absolute left-[6vw] top-[5vh] mono-label text-[#F4F4F5] z-20">
          KIRCHHOFF
        </span>

        {/* Menu */}
        <button className="absolute right-[6vw] top-[5vh] mono-label text-[#F4F4F5] z-20 pointer-events-auto hover:text-[#B9B9B9] transition-colors">
          MENU
        </button>

        {/* Headline */}
        <h2 
          ref={headlineRef}
          className={`absolute headline-lg text-[#F4F4F5] z-20 ${headlineClasses}`}
        >
          {headline}
        </h2>

        {/* Body */}
        <p 
          ref={bodyRef}
          className={`absolute body-text text-[#A7A7AD] z-20 ${bodyClasses}`}
        >
          {body}
        </p>

        {/* Index */}
        <span className="absolute left-[6vw] bottom-[6vh] mono-label text-[#A7A7AD] z-20">
          {index}
        </span>

        {/* CTA Pill */}
        <button 
          className="cta-pill absolute left-1/2 bottom-[7vh] -translate-x-1/2 z-20 pointer-events-auto"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            contactSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Request availability
        </button>
      </div>
    </section>
  );
}
