import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './sections/HeroSection';
import PortfolioSection from './sections/PortfolioSection';
import AboutSection from './sections/AboutSection';
import TravelSection from './sections/TravelSection';
import ContactSection from './sections/ContactSection';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <main className="relative bg-[#FAF8F5]">
      {/* Section 1: Hero with Image Slider */}
      <HeroSection />
      
      {/* Section 2: Portfolio with Vibe Categories */}
      <PortfolioSection />
      
      {/* Section 3: About Me */}
      <AboutSection />
      
      {/* Section 4: Travel Map */}
      <TravelSection />
      
      {/* Section 5: Contact Form */}
      <ContactSection />
    </main>
  );
}

export default App;
