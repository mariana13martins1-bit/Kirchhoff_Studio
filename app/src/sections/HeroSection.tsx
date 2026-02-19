import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const heroSets = [
  {
    category: 'Sports',
    images: [
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351195/DF02DEA6-E76B-4E86-BE17-BD39E0887687_1_105_c_gfkpnc.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351190/BDFBE6FC-B733-44D7-BE16-2F5301956D8B_1_105_c_hvwbka.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351186/B2043612-A40C-4DCC-832F-7AF2127E69D6_1_105_c_wbptsj.jpg'
    ]
  },
  {
    category: 'Proposal',
    images: [
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351317/Facetune_25-10-2025-17-14-49_lsiov7.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351321/Facetune_25-10-2025-17-48-03_aiihql.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351319/Facetune_25-10-2025-17-18-51_aj5b2y.jpg'
    ]
  },
  {
    category: 'Portraits',
    images: [
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3264_zsepyf.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350796/DSC_3180_wsovxm.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771350797/DSC_3276_jqgvn7.jpg'
    ]
  },
  {
    category: 'Vet_Clinic',
    images: [
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351048/9EFA01F3-7329-4210-840A-3C915380DC02_1_105_c_lfd0yc.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351053/DSC_2743_lpidcw.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351052/DSC_2734_ba3nwm.jpg'
    ]
  },
  {
    category: 'Architecture',
    images: [
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351357/DSC_6743_qhxkbx.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351365/DSC_6752_dfvfeg.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351352/DSC_6724_pkbopc.jpg'
    ]
  },
  {
    category: 'Event_Ida',
    images: [
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351288/DSC_1143_eunbqu.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351289/DSC_1150_mgi4zd.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351284/DSC_1112_ko2xs9.jpg'
    ]
  },
  {
    category: 'Travel_Nature',
    images: [
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351253/DSC_5691_p0yesa.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351251/DSC_5579_t80arw.jpg',
      'https://res.cloudinary.com/djaacn6yd/image/upload/v1771351255/DSC_5696_lcl6tf.jpg'
    ]
  }
];

export default function HeroSection() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextSet = useCallback(() => {
    setCurrentSetIndex((prev) => (prev + 1) % heroSets.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSet, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSet]);

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}, [isMenuOpen]);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      
      {/* BACKGROUND SPLIT SYSTEM */}
      <div className="absolute inset-0 flex w-full h-full">
      {[0, 1, 2].map((columnIndex) => (
        <div 
          key={columnIndex} 
          className={`relative flex-1 h-full overflow-hidden border-r border-white/5 last:border-r-0 
              ${columnIndex > 1 ? 'hidden md:block' : 'block'}`}
        >
            <div 
              className="absolute inset-0 w-full h-full transition-transform"
              style={{ 
                transform: `translateY(-${currentSetIndex * 100}%)`,
                transitionDuration: '2500ms',
                transitionTimingFunction: 'cubic-bezier(0.85, 0, 0.15, 1)',
                transitionDelay: `${columnIndex * 300}ms` 
              }}
            >
              {heroSets.map((set, setIndex) => (
                <div key={setIndex} className="w-full h-full flex-shrink-0 overflow-hidden">
                  <img
                    src={set.images[columnIndex].replace('/upload/', '/upload/f_auto,q_auto,w_1000/')}
                    alt={`${set.category} ${columnIndex}`}
                    className={`w-full h-full object-cover grayscale-[30%] brightness-[0.4] transition-transform duration-[5000ms] ease-out ${
                      currentSetIndex === setIndex ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* NAVIGATION */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6 md:px-16 md:py-10">
        <span className="font-serif text-[16px] text-white tracking-[0.2em] uppercase">Kirchhoff Studio</span>
        <div className="hidden md:flex items-center gap-10">
          <a href="#portfolio" className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.3em]">Portfolio</a>
          <a href="#about" className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.3em]">About me</a>
          <a href="#travel" className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.3em]">Travel</a>
          <a href="#contact" className="text-white/60 hover:text-white text-[10px] uppercase tracking-[0.3em]">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-transform duration-700 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          {['Portfolio', 'About me', 'Travel', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl font-serif tracking-[0.2em] uppercase opacity-80 hover:opacity-100"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center select-none pointer-events-none">
        <span className="absolute font-light text-white/[0.02] md:text-white/[0.03] text-[70vw] md:text-[50vw] leading-none">
          K
        </span>

        <div className="relative z-10 text-center space-y-4">
        <h1 className="font-serif text-[10vw] sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-[0.1em] sm:tracking-[0.4em] uppercase font-light">
            Kirchhoff
        </h1>
          <div className="flex items-center justify-center gap-4 text-white/40">
            <span className="h-[1px] w-8 bg-white/20"></span>
            <p className="text-[10px] uppercase tracking-[0.5em] font-light">
              Photography
            </p>
            <span className="h-[1px] w-8 bg-white/20"></span>
          </div>
        </div>

        <div className="absolute bottom-16 z-30 pointer-events-auto">
          <a href="#contact" className="px-8 py-3 border border-white/20 text-white/80 hover:bg-white hover:text-black transition-all duration-500 text-[10px] uppercase tracking-[0.4em] font-medium">
            Request Availability
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 z-30 text-white/30 text-[10px] tracking-[0.3em] uppercase">
        0{currentSetIndex + 1} / 0{heroSets.length}
      </div>
    </section>
  );
}