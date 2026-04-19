import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Calendar, Send, Loader2, ArrowRight, Instagram, Globe, Linkedin } from 'lucide-react';
// @ts-ignore
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    location: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      
      gsap.fromTo([textRef.current, formRef.current?.children],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.05,
          ease: 'expo.out',
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

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const alphaRegex = /^[a-zA-Z\s,\-]*$/;

  if (!alphaRegex.test(formData.name)) {
    alert("Please enter a valid name (letters only).");
    return;
  }

  if (!formData.projectType) {
    alert("Please select a project type.");
    return;
  }

  if (formData.location && !alphaRegex.test(formData.location)) {
    alert("Shoot location should not contain numbers.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }
    setLoading(true);
  try {
    const clientName = formData.name.trim().replace(/\s+/g, '_');
    
    const uniqueId = `${clientName}_${Date.now()}`;

    await setDoc(doc(db, "inquiries", uniqueId), {
      ...formData,
      createdAt: serverTimestamp(),
    });

    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  
    // 2. SEND EMAIL VIA EMAILJS
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const autoReplyTemplateID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;

    console.log("Auto-Reply Template ID:", import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID);

      await Promise.all([
      emailjs.send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        location: formData.location,
        message: formData.message,
      }, publicKey),
      
      emailjs.send(serviceID, autoReplyTemplateID, {
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
      }, publicKey)
    ]);

  setSubmitted(true);
  setFormData({ name: '', email: '', projectType: '', location: '', message: '' });
  setTimeout(() => setSubmitted(false), 5000);
} catch (error) {
  console.error("Error:", error);
  alert("Something went wrong.");
} finally {
  setLoading(false);
    }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

 return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="pt-24 lg:pt-48 pb-0 px-8 lg:px-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-24 items-start">
  
      {/* COLUNA ESQUERDA: Contact Info */}
      <div ref={textRef} className="space-y-12 w-full">
      <div>
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-8">Contact</p>
        <h2 className="font-serif text-6xl md:text-8xl leading-tight tracking-tight uppercase">
          Let's <br /> 
          <span className="italic font-light text-white/60">Create</span> <br /> 
          Together
        </h2>
      </div>
      
        {/* This div is now HIDDEN on mobile and visible only on Large screens (Desktop) */}
        <div className="hidden lg:block space-y-8 pt-12 border-t border-white/10 max-w-sm">
          <ContactDetails />
        </div>
      </div>

        {/* COLUNA DIREITA: Inquiry Form (Aparece em primeiro no mobile) */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-12 w-full"
        >
          {/* Grid de Inputs com a fonte ajustada (font-light e tracking) */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="group relative">
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="peer w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder-transparent"
              placeholder="Name"
              required
            />
            <label className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-white/30 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px]">
              Full Name
            </label>
          </div>

            <div className="group relative">
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder-transparent"
                placeholder="Email"
                required
              />
              <label className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-white/30 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] transition-all pointer-events-none">
                Email Address
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-y-12">
            <div className="relative">
              <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="" className="bg-black">Project Type</option>
                <option value="fashion" className="bg-black">Street / Fashion</option>
                <option value="events" className="bg-black">Events</option>
                <option value="portrait" className="bg-black">Portraits</option>
                <option value="couples" className="bg-black">Couples</option>
                <option value="sports" className="bg-black">Sports</option>
                <option value="architecture" className="bg-black">Architecture</option>


              </select>
              <div className="absolute right-0 bottom-4 pointer-events-none">
                <ArrowRight className="w-4 h-4 text-white/20 rotate-90" />
              </div>
            </div>

            <div className="group relative">
              <input 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder-transparent"
                placeholder="Location"
              />
              <label className="absolute left-0 top-0 text-[10px] uppercase tracking-widest text-white/30 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] transition-all pointer-events-none">
                Shoot Location
              </label>
            </div>
          </div>

            <div className="group relative pt-6">
          {/* The Textarea acts as the Peer */}
          <textarea 
            name="message"
            value={formData.message}
            onChange={(e) => {
                if (e.target.value.length <= 300) {
                    handleChange(e);
                }
            }}
            rows={1}
            className="peer w-full bg-transparent border-b border-white/10 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder-transparent resize-none overflow-hidden min-h-[40px] max-h-[120px]"
            placeholder="Message"
            required
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = `${target.scrollHeight}px`;
            }}
          />

          {/* The Label: Starts large and shrinks on focus or when text is present */}
          <label className="absolute left-0 top-6 text-sm uppercase tracking-[0.5em] text-white/40 transition-all duration-300 pointer-events-none
            peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-white/60
            peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]">
            The Vision
          </label>

          {/* Character Count: Only shows when the field is active or has text */}
          <span className="absolute right-0 top-0 text-[9px] tracking-widest text-white/20 opacity-0 peer-focus:opacity-100 peer-[:not(:placeholder-shown)]:opacity-100 transition-opacity">
            {formData.message.length} / 300
          </span>
        </div>

        {/* BOTÃO UNIFICADO COM SETA */}
        <div className="pt-10">
        <button 
          type="submit"
          disabled={loading}
          className="group w-full md:w-auto flex items-center justify-center gap-8 px-12 py-5 border border-white/10 text-white/90 text-[11px] uppercase tracking-[0.5em] font-semibold transition-all duration-500 hover:bg-white hover:text-black disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="animate-spin w-4 h-4" />
          ) : submitted ? (
            "Inquiry Sent Successfully"
          ) : (
            <>
              Send Message 
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-3" />
            </>
          )}
        </button>
      </div>
        </form>

        {/* Mobile Only: Shows social info AFTER the form */}
        <div className="lg:hidden w-full pt-12 border-t border-white/10 mt-12">
          <ContactDetails />
        </div>
      </div>
      
          <div className="w-full mt-16">
          <div className="w-full h-[1px] bg-white/10" />

          <div className="pt-10 pb-10 flex justify-center lg:justify-end">
            <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.5em] text-white/40 font-medium">
              © 2026 KIRCHHOFF STUDIO
            </p>
          </div>
        </div>
      </section>
  );
}

function ContactDetails() {
  return (
    <>
      <div className="flex items-center gap-6">
        <Mail className="w-4 h-6 md:h-4 text-white/30" />
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/80">kirchhoffstudio@gmail.com</p>
      </div>
      <div className="flex items-center gap-6">
        <MapPin className="w-4 h-6 md:h-4 text-white/30" />
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/80">Porto - Available Worldwide</p>
      </div>

      <div className="flex items-center gap-6 md:gap-4 pt-4">
        <a 
          href="https://www.instagram.com/kirchhoffstudio"
          target="_blank" 
          rel="noopener noreferrer"
          className="p-4 md:p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white transition-all duration-500" 
          aria-label="Instagram"
        >
          <Instagram className="w-3.5 h-3.5" />
        </a>
        <a 
          href="https://www.linkedin.com/in/mathilde-kirchhoff-1a5aa021a/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white transition-all duration-500" 
          aria-label="LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>
        <a 
          href="mailto:kirchhoffstudio@gmail.com" 
          className="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white transition-all duration-500" 
          aria-label="Email"
        >
          <Mail className="w-3.5 h-3.5" />
        </a>
      </div>
    </>
  );
}