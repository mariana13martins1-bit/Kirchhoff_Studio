import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Mail, Linkedin } from 'lucide-react';
import { portfolioItems } from '../data/portfolio.ts';
import { getOptimizedUrl } from '../utils/cloudinary';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Find the specific image from your data file
  const faceCard = portfolioItems.find(item => item.id === 999);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

      // Image reveal: Sliding up and fading in with a slight scale
      gsap.fromTo(imageRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Content reveal: Staggering the text elements
      gsap.fromTo(contentRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!faceCard) return null;

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 lg:py-32 px-8 lg:px-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <div ref={imageRef} className="relative group will-change-transform flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[320px] md:max-w-[450px] lg:max-w-[500px]">
              
              <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden transition-all duration-700">
                <img
                  src={getOptimizedUrl(faceCard.image, 800)}
                  srcSet={`
                    ${getOptimizedUrl(faceCard.image, 600)} 600w,
                    ${getOptimizedUrl(faceCard.image, 1000)} 1000w
                  `}
                  sizes="(max-width: 768px) 320px, 500px"
                  alt="Kirchhoff - Photographer"
                  loading="eager"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                />
              </div>

              {/* Minimalist Architectural Borders - Ajustado para acompanhar o novo tamanho */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-full h-full border border-white/10 -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <div className="max-w-md">
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-6 font-medium">The Perspective</p>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight uppercase leading-[1.1] md:leading-[0.9] mb-8">
              Capturing <br />
              <span className="italic font-light text-white/60 text-3xl md:text-6xl">Authentic</span> <br />
              Moments
            </h2>
            </div>
            
            <div className="space-y-6 max-w-lg">
              <p className="text-sm text-white/60 leading-relaxed font-light tracking-wide">
                Hi, I'm a photographer working across sports, events, and brand storytelling. 
                Rooted in Danish minimalism, my lens documents the raw energy of Aarhus and the sun-drenched alleys of Porto.
              </p>
              <p className="text-sm text-white/60 leading-relaxed font-light tracking-wide">
                I believe the most compelling narratives happen when the camera disappears. 
                Whether documenting a high-speed match or the geometry of Nordic architecture, 
                I chase the intersection of light and humanity.
              </p>
            </div>

            {/* Integrated Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {[
                { href: "https://www.instagram.com/kirchhoffstudio", icon: <Instagram className="w-3.5 h-3.5" />, label: "Instagram" },
                { href: "https://www.linkedin.com/in/mathilde-kirchhoff-1a5aa021a/", icon: <Linkedin className="w-3.5 h-3.5" />, label: "LinkedIn" },
                { href: "mailto:hello@kirchhoff.studio", icon: <Mail className="w-3.5 h-3.5" />, label: "Email" }
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-4 md:p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white hover:scale-110 transition-all duration-500"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

