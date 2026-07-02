"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Star,
  MapPin,
  TrendingUp,
  Compass,
  MessageSquare,
  BookmarkCheck,
  Smartphone,
  Sun,
  Sunset,
  Moon,
  Calendar,
  Check,
} from "lucide-react";
import { founderData } from "@/lib/founderData";
import FloatingCard from "@/components/FloatingCard";

export default function HomePage() {
  const { founder, businesses, experienceConcept, socialProof, timeline, gallery } =
    founderData;

  // 1. Brief Session-Based Preloader
  const [showPreloader, setShowPreloader] = useState(false);
  const [isPreloaderMounted, setIsPreloaderMounted] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setShowPreloader(false);
      return;
    }

    // Check first visit in current session
    const hasVisited = sessionStorage.getItem("shaytee_portfolio_visited");
    if (!hasVisited) {
      setShowPreloader(true);
      setIsPreloaderMounted(true);
      sessionStorage.setItem("shaytee_portfolio_visited", "true");
      
      const timer = setTimeout(() => {
        setShowPreloader(false);
        // Unmount preloader after fade out animation
        setTimeout(() => setIsPreloaderMounted(false), 300);
      }, 800); // 700ms - 900ms duration
      return () => clearTimeout(timer);
    }
  }, []);

  // 2. 3D Tilt Effect State
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const heroVisualRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroVisualRef.current) return;
    
    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const rect = heroVisualRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Subtle rotation angles
    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  };

  // 3. Choose Her World Component States
  const [activeWorld, setActiveWorld] = useState<"treats" | "beauty" | null>(null);

  // Beauty Studio live config
  const isBeautyStudioLive = false;
  const beautyStudioPlaceholderUrl = "#";

  // 4. Social Phone Showcase Tab State
  const [activePhoneTab, setActivePhoneTab] = useState<"treat" | "beauty">("treat");

  return (
    <div className="relative w-full bg-[#080707] bg-grain-texture min-h-screen">
      
      {/* Premium Brief Preloader */}
      {isPreloaderMounted && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#080707] transition-opacity duration-300 ${
            showPreloader ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute animate-ping inline-flex h-full w-full rounded-full bg-brand-blush/20 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-gradient-to-r from-brand-blush to-brand-gold"></span>
            </div>
            <span className="font-serif text-lg tracking-[0.3em] text-brand-cream uppercase animate-pulse">
              SHAYTEE
            </span>
          </div>
        </div>
      )}

      {/* Background Visual Lighting Accents */}
      <div className="absolute top-[8%] left-[2%] -z-10 h-[400px] w-[400px] rounded-full bg-brand-blush/10 blur-[130px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[25%] right-[2%] -z-10 h-[500px] w-[500px] rounded-full bg-brand-gold/5 blur-[160px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[15%] left-[8%] -z-10 h-[450px] w-[450px] rounded-full bg-brand-blush/5 blur-[140px] animate-pulse-slow pointer-events-none" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blush/25 bg-brand-blush/5 px-4 py-1.5 text-xs tracking-widest uppercase text-brand-blush">
              <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "6s" }} />
              <span>Founder • Beauty • Treats • Akure</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-light tracking-wide leading-[1.1] text-brand-cream">
              One Woman.<br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-blush via-brand-cream to-brand-gold">
                Two Growing Brands.
              </span><br />
              One Experience.
            </h1>

            <p className="text-base sm:text-lg text-brand-cream/80 font-light leading-relaxed max-w-xl">
              From beauty transformations to unforgettable sweet moments, Shaytee is building a lifestyle brand rooted in confidence, celebration and customer experience in Akure.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#choose-world"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blush to-brand-blush-dark px-8 py-4 text-xs font-bold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,181,193,0.3)] hover:scale-[1.02]"
              >
                <span>Explore Her Brands</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#day-experience"
                className="group flex items-center gap-2 rounded-full border border-brand-cream/20 bg-white/5 px-8 py-4 text-xs font-bold tracking-widest uppercase text-brand-cream transition-all duration-300 hover:border-brand-blush/40 hover:bg-white/10"
              >
                <span>Enter The Shaytee Experience</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2.5 text-xs text-brand-cream/50 tracking-wider uppercase pt-4">
              <MapPin className="h-4 w-4 text-brand-gold" />
              <span>FUTA South Gate & Atolagbe Shopping Complex, Akure</span>
            </div>
          </div>

          {/* Upgraded 3D Founder Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[500px]">
            {/* Visual ambient glows */}
            <div className="absolute h-80 w-80 rounded-full bg-brand-blush/10 blur-[90px]" />
            <div className="absolute h-60 w-60 rounded-full bg-brand-gold/5 blur-[80px] -bottom-10" />

            <div
              ref={heroVisualRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={tiltStyle}
              className="relative w-[85%] sm:w-[75%] aspect-[4/5] max-w-[380px] rounded-3xl p-1 bg-gradient-to-b from-brand-blush/25 to-brand-gold/10 shadow-2xl transition-transform duration-150 ease-out"
            >
              {/* Internal Glass Card container */}
              <div className="w-full h-full rounded-[22px] bg-gradient-to-tr from-[#121010] via-[#1A1818] to-[#141212] overflow-hidden p-8 flex flex-col justify-between relative border border-white/5">
                
                {/* Visual grid texture overlay */}
                <div className="absolute inset-0 bg-grain-texture opacity-30 pointer-events-none" />

                {/* Card Header */}
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-cream">
                      {founder.name}
                    </h3>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-brand-gold mt-1">
                      Lifestyle Entrepreneur
                    </p>
                  </div>
                  <div className="h-9 w-9 rounded-full border border-brand-blush/20 flex items-center justify-center bg-brand-blush/5 text-brand-blush text-xs tracking-widest font-serif">
                    S
                  </div>
                </div>

                {/* Monogram placeholder frame instead of fake portrait */}
                <div className="my-auto py-10 flex flex-col items-center justify-center relative z-10">
                  <div className="relative h-36 w-36 rounded-full border border-brand-gold/20 bg-brand-charcoal/80 flex items-center justify-center shadow-inner group">
                    {/* Glowing outer aura */}
                    <div className="absolute inset-0 rounded-full bg-radial from-brand-blush/10 to-transparent scale-125 animate-pulse-slow" />
                    
                    {/* Monogram Monicker */}
                    <span className="font-serif text-6xl font-light text-brand-cream/90 group-hover:text-brand-blush transition-colors tracking-widest pl-2">
                      S
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold mt-4 font-medium opacity-60">
                    Founder Portrait Reserved
                  </span>
                </div>

                {/* Card Footer details */}
                <div className="space-y-3 border-t border-brand-cream/10 pt-4 relative z-10">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-brand-cream/40 uppercase">HQ Coordinate</span>
                    <span className="text-brand-cream/80 font-medium">Akure, Nigeria</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-brand-cream/40 uppercase">Ecosystem</span>
                    <span className="text-brand-blush font-semibold tracking-wider">Beauty & Confectionery</span>
                  </div>
                </div>
              </div>

              {/* Floating Shaytee's Treat Card */}
              <div className="absolute -top-6 -right-6 sm:-right-8 w-[190px] sm:w-[210px] z-30 pointer-events-auto transform translate-y-[-5px]">
                <FloatingCard
                  animateDirection="none"
                  glowColor="blush"
                  className="p-4 rounded-2xl bg-brand-charcoal/90 border-brand-blush/20 bevel-blush shadow-3d hover:scale-105 transition-all duration-300"
                >
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-blush font-bold">Treats Plug</span>
                      <TrendingUp className="h-3 w-3 text-brand-blush" />
                    </div>
                    <h4 className="font-serif text-sm font-semibold tracking-wide text-brand-cream">
                      {businesses.treat.name}
                    </h4>
                    <div className="text-[9px] text-brand-cream/60 leading-tight">
                      Gourmet event snacks, ice cream & popcorn station.
                    </div>
                  </div>
                </FloatingCard>
              </div>

              {/* Floating Shaytee Beauty Studio Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 w-[190px] sm:w-[210px] z-30 pointer-events-auto transform translate-y-[5px]">
                <FloatingCard
                  animateDirection="none"
                  glowColor="gold"
                  className="p-4 rounded-2xl bg-brand-charcoal/90 border-brand-gold/20 bevel-gold shadow-3d hover:scale-105 transition-all duration-300"
                >
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold">Beauty Hub</span>
                      <Compass className="h-3 w-3 text-brand-gold" />
                    </div>
                    <h4 className="font-serif text-sm font-semibold tracking-wide text-brand-cream">
                      {businesses.beauty.name}
                    </h4>
                    <div className="text-[9px] text-brand-cream/60 leading-tight">
                      Wig styling, lash extensions, pedicures & piercings.
                    </div>
                  </div>
                </FloatingCard>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Choose Her World Section */}
      <section className="py-24 border-t border-brand-blush/10 bg-brand-charcoal/30 scroll-mt-20" id="choose-world">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-blush font-bold">Interactive Discovery</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
              Choose Her World
            </h2>
            <p className="text-brand-cream/70 font-light text-sm sm:text-base">
              Shaytee connects flavor and style. Hover a world on desktop or tap to explore details and visit official sites.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center min-h-[420px]">
            
            {/* World 1: Treats */}
            <div
              onMouseEnter={() => setActiveWorld("treats")}
              onMouseLeave={() => setActiveWorld(null)}
              onClick={() => setActiveWorld(activeWorld === "treats" ? null : "treats")}
              className={`flex-1 rounded-3xl p-8 border transition-all duration-500 text-left flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                activeWorld === "treats"
                  ? "border-brand-blush bg-brand-charcoal/80 shadow-[0_0_30px_rgba(244,181,193,0.15)] scale-[1.01]"
                  : "border-brand-blush/10 bg-brand-charcoal/40 hover:border-brand-blush/40"
              }`}
            >
              {/* Radial blush backdrop flare */}
              <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-radial from-brand-blush/5 to-transparent pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-brand-blush font-bold">
                    Confectionery & Events
                  </span>
                  <span className="text-xs text-brand-cream/40 font-mono">World 01</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-brand-cream group-hover:text-brand-blush transition-colors">
                    Shaytee’s Treat
                  </h3>
                  <p className="text-sm text-brand-cream/80 font-light leading-relaxed">
                    Akure’s premium confectionery destination providing handcrafted ice cream, events catering, and gourmet snack packs for birthdays, event orders, and celebrations.
                  </p>
                </div>

                {/* Offerings Tag List */}
                <div className="space-y-3">
                  <span className="block text-xs uppercase tracking-widest text-brand-gold font-semibold">Offerings:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Ice Cream", "Popcorn Station", "Sweet Treats", "Birthdays Glam Add-ons", "Events & Parties"].map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-3 py-1 rounded-full border border-brand-blush/10 bg-brand-blush/5 text-brand-cream/95 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-8 relative z-10">
                <a
                  href="https://shaytee-s-treat.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full flex items-center justify-between rounded-full bg-brand-blush px-6 py-4 text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:bg-brand-blush-dark transition-all"
                >
                  <span>Visit Shaytee’s Treat Site</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* World 2: Beauty Studio */}
            <div
              onMouseEnter={() => setActiveWorld("beauty")}
              onMouseLeave={() => setActiveWorld(null)}
              onClick={() => setActiveWorld(activeWorld === "beauty" ? null : "beauty")}
              className={`flex-1 rounded-3xl p-8 border transition-all duration-500 text-left flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                activeWorld === "beauty"
                  ? "border-brand-gold bg-brand-charcoal/80 shadow-[0_0_30px_rgba(223,186,115,0.15)] scale-[1.01]"
                  : "border-brand-gold/10 bg-brand-charcoal/40 hover:border-brand-gold/40"
              }`}
            >
              {/* Radial gold backdrop flare */}
              <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-radial from-brand-gold/5 to-transparent pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                    Aesthetics & Cosmetics
                  </span>
                  <span className="text-xs text-brand-cream/40 font-mono">World 02</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                    Shaytee Beauty Studio
                  </h3>
                  <p className="text-sm text-brand-cream/80 font-light leading-relaxed">
                    High-end beauty service hub catering to custom wig stylings, lash installs, luxury pedicure procedures, and piercing operations around FUTA South Gate.
                  </p>
                </div>

                {/* Offerings Tag List */}
                <div className="space-y-3">
                  <span className="block text-xs uppercase tracking-widest text-brand-blush font-semibold">Services:</span>
                  <div className="flex flex-wrap gap-2">
                    {["Hair Styling", "Wig Installations", "Lashes Tech", "Pedicures", "Piercing appointments"].map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-3 py-1 rounded-full border border-brand-gold/10 bg-brand-gold/5 text-brand-cream/95 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-8 relative z-10">
                {isBeautyStudioLive ? (
                  <a
                    href={beautyStudioPlaceholderUrl}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full flex items-center justify-between rounded-full bg-brand-gold px-6 py-4 text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:bg-brand-gold-dark transition-all"
                  >
                    <span>Explore Beauty Studio</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="w-full rounded-full border border-brand-gold/30 bg-brand-gold/5 py-4 px-6 text-center text-xs font-bold tracking-widest uppercase text-brand-gold">
                    Beauty Studio Preview Coming Soon
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upgraded Social Proof Device Showcase */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-brand-blush/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">Social Footprint</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream leading-tight">
              3D Social Proof Showcase
            </h2>
            <p className="text-brand-cream/80 font-light leading-relaxed">
              Explore the growing communities backing Shaytee’s creative outlets. Built on actual brand statistics, this device mockup previews active channels on TikTok and Instagram.
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={() => setActivePhoneTab("treat")}
                className={`flex-1 py-3 px-5 rounded-xl border text-xs tracking-wider uppercase font-semibold transition-all ${
                  activePhoneTab === "treat"
                    ? "border-brand-blush bg-brand-blush/5 text-brand-blush"
                    : "border-brand-cream/15 text-brand-cream/50 hover:text-brand-cream"
                }`}
              >
                Treat Brand Metrics
              </button>
              <button
                onClick={() => setActivePhoneTab("beauty")}
                className={`flex-1 py-3 px-5 rounded-xl border text-xs tracking-wider uppercase font-semibold transition-all ${
                  activePhoneTab === "beauty"
                    ? "border-brand-gold bg-brand-gold/5 text-brand-gold"
                    : "border-brand-cream/15 text-brand-cream/50 hover:text-brand-cream"
                }`}
              >
                Beauty Brand Metrics
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 flex justify-center">
            {/* 3D Phone Mockup Container */}
            <div className="w-[310px] sm:w-[330px] aspect-[9/18] rounded-[48px] border-[12px] border-brand-charcoal-light bg-[#080707] relative shadow-2xl ring-1 ring-white/10 flex flex-col overflow-hidden">
              {/* Phone Camera Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 h-5 w-24 bg-brand-charcoal-light rounded-full z-30 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white/10" />
              </div>

              {/* Dynamic screen content */}
              <div className="w-full h-full p-6 pt-10 flex flex-col justify-between bg-gradient-to-b from-[#131111] to-[#0A0909] relative z-10">
                
                {/* Phone screen header */}
                <div className="flex justify-between items-center text-[10px] text-brand-cream/40 uppercase tracking-widest border-b border-white/5 pb-3">
                  <span className="font-mono">9:41 AM</span>
                  <span className="flex items-center gap-1">
                    <Smartphone className="h-3 w-3" />
                    Live Stats
                  </span>
                </div>

                {activePhoneTab === "treat" ? (
                  <div className="flex-grow flex flex-col justify-between py-6 text-left space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-brand-blush bg-brand-blush/10 border border-brand-blush/20 px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider">
                        {businesses.treat.name}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-brand-cream">
                        {businesses.treat.proof.handle}
                      </h4>
                      <p className="text-xs text-brand-cream/70 font-light">
                        Akure ice cream and popcorn brand catering premium setups.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl border border-brand-blush/10 bg-brand-charcoal/50 flex justify-between items-center">
                        <span className="text-xs text-brand-cream/60 uppercase">TikTok Likes</span>
                        <span className="text-xl font-bold font-serif text-brand-blush">{businesses.treat.proof.likes}</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-brand-blush/10 bg-brand-charcoal/50 flex justify-between items-center">
                        <span className="text-xs text-brand-cream/60 uppercase">Followers</span>
                        <span className="text-xl font-bold font-serif text-brand-blush">{businesses.treat.proof.followers}</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-brand-cream/40 text-center uppercase tracking-widest pt-2">
                      TikTok Activity Hub
                    </div>
                  </div>
                ) : (
                  <div className="flex-grow flex flex-col justify-between py-6 text-left space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider">
                        {businesses.beauty.name}
                      </span>
                      <h4 className="font-serif text-2xl font-bold text-brand-cream">
                        {businesses.beauty.proof.handle}
                      </h4>
                      <p className="text-xs text-brand-cream/70 font-light">
                        Akure Hairstylist & Lash Tech based near FUTA South Gate.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl border border-brand-gold/10 bg-brand-charcoal/50 flex justify-between items-center">
                        <span className="text-xs text-brand-cream/60 uppercase">Likes Logged</span>
                        <span className="text-xl font-bold font-serif text-brand-gold">{businesses.beauty.proof.likes}</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-brand-gold/10 bg-brand-charcoal/50 flex justify-between items-center">
                        <span className="text-xs text-brand-cream/60 uppercase">Followers</span>
                        <span className="text-xl font-bold font-serif text-brand-gold">{businesses.beauty.proof.followers}</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-brand-cream/40 text-center uppercase tracking-widest pt-2">
                      Instagram Activity Hub
                    </div>
                  </div>
                )}

                {/* Simulated Swipe up indicator */}
                <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-2" />

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Cinematic A Day in The Shaytee Experience */}
      <section className="py-24 bg-brand-charcoal/10" id="day-experience">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">Lifestyle Flow</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
              A Day in The Shaytee Experience
            </h2>
            <p className="text-brand-cream/70 font-light text-sm sm:text-base">
              Future cross-brand experience concept — pending owner approval. How a client intersects treats and beauty services.
            </p>
          </div>

          {/* Cinematic Timeline Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch mb-16">
            
            {/* Block 1: Morning */}
            <div className="p-6 rounded-2xl border border-brand-blush/10 bg-brand-charcoal/40 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Sun className="h-5 w-5 text-brand-blush" />
                  <span className="text-[10px] font-mono text-brand-cream/40 uppercase">09:00 AM</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-cream">Morning Glam Start</h3>
                <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
                  Book a lash installation or pedicure appointment at Shaytee Beauty Studio near FUTA South Gate.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-brand-blush/60 uppercase tracking-widest">Phase A: Prep</span>
            </div>

            {/* Block 2: Afternoon */}
            <div className="p-6 rounded-2xl border border-brand-gold/10 bg-brand-charcoal/40 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Sparkles className="h-5 w-5 text-brand-gold" />
                  <span className="text-[10px] font-mono text-brand-cream/40 uppercase">01:00 PM</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-cream">Lace Installation</h3>
                <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
                  Complete your wig coloring styling transformation. Step out looking flawless and confident.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-brand-gold/60 uppercase tracking-widest">Phase B: Transform</span>
            </div>

            {/* Block 3: Evening */}
            <div className="p-6 rounded-2xl border border-brand-blush/10 bg-brand-charcoal/40 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Sunset className="h-5 w-5 text-brand-blush" />
                  <span className="text-[10px] font-mono text-brand-cream/40 uppercase">05:00 PM</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-cream">Sweet Refreshment</h3>
                <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
                  Pick up custom popcorn and ice cream cups from Shaytee’s Treat Atolagbe Hub to share at a evening hangout.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-brand-blush/60 uppercase tracking-widest">Phase C: Indulge</span>
            </div>

            {/* Block 4: Weekend */}
            <div className="p-6 rounded-2xl border border-brand-gold/10 bg-brand-charcoal/40 text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Moon className="h-5 w-5 text-brand-gold" />
                  <span className="text-[10px] font-mono text-brand-cream/40 uppercase">Weekend</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-cream">Celebration Catering</h3>
                <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
                  Coordinate full dessert stations and sweet treat buffets for your birthday parties and hangout events.
                </p>
              </div>
              <span className="text-[10px] font-semibold text-brand-gold/60 uppercase tracking-widest">Phase D: Celebrate</span>
            </div>

          </div>

          {/* Future Concept Packages */}
          <div className="p-8 rounded-3xl border border-brand-blush/10 bg-brand-charcoal/50 text-left space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-cream">
                Conceptual Unified Packages
              </h3>
              <p className="text-xs text-brand-cream/50 mt-1 uppercase tracking-wider font-semibold">
                Designed for unified customer loyalty (Not presently available, pending owner approval)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Birthday Glam + Treat Package", desc: "Get studio styling and event candy hampers combined in one package." },
                { title: "Bridal Beauty + Event Treats", desc: "Premium bridal hairdo installations paired with sweet dessert setups." },
                { title: "Photoshoot Styling + Refreshments", desc: "Glam session plus signature ice cream cups served on set." },
                { title: "Beauty Appointment + Sweet Treat Add-on", desc: "Order a dessert snack box to enjoy during salon treatments." }
              ].map((pkg, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-brand-cream/5 bg-brand-charcoal/60 hover:border-brand-blush/30 transition-colors">
                  <h4 className="font-serif text-sm font-bold text-brand-gold mb-1">{pkg.title}</h4>
                  <p className="text-[11px] text-brand-cream/70 font-light leading-relaxed">{pkg.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Upgraded Founder Story Section */}
      <section className="py-24 border-t border-brand-blush/10 bg-brand-charcoal/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story quotes */}
            <div className="lg:col-span-5 relative text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blush/10 to-brand-gold/10 blur-xl opacity-40" />
              <div className="glass-panel border-brand-blush/25 rounded-3xl p-10 relative overflow-hidden">
                <Star className="h-8 w-8 text-brand-gold absolute top-6 right-6 opacity-40" />
                <span className="font-serif text-6xl text-brand-blush/20 absolute -top-4 -left-2">“</span>
                <p className="font-serif text-xl font-light italic leading-relaxed text-brand-cream/90 relative z-10 pt-4">
                  By linking a premium treat bar with flawless hair and lash installations, we create a unified brand aesthetic built around celebration and style.
                </p>
                <div className="mt-8 border-t border-brand-cream/10 pt-6 relative z-10">
                  <h4 className="font-serif text-lg font-bold text-brand-cream">{founder.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-gold mt-1">{founder.title}</p>
                </div>
              </div>
            </div>

            {/* UPGRADED Editorial description */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">Personal Vision</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream leading-tight">
                Built with beauty. Served with sweetness. Led by Shaytee.
              </h2>
              <p className="text-brand-cream/80 font-light leading-relaxed text-base sm:text-lg">
                Shaytee is building a lifestyle brand that brings together how people look, feel and celebrate. Through Shaytee Beauty Studio and Shaytee’s Treat, her work connects confidence, creativity, customer care and memorable moments in Akure.
              </p>
              <p className="text-brand-cream/70 font-light leading-relaxed text-sm">
                Focusing on high standards, Shaytee coordinates services for students and event coordinators alike. Whether creating a custom popcorn setup for a wedding party or installing a custom colored wig, her attention is fixed on bringing premium aesthetics to the local community.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase text-brand-blush font-bold transition-all"
                >
                  <span>Read Her Founder Biography</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Timeline Section */}
      <section className="py-24 bg-brand-charcoal/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">Our Journey</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
              The Growth Timeline
            </h2>
            <p className="text-brand-cream/70 font-light">
              Building a prominent lifestyle brand step by step in Akure.
            </p>
          </div>

          <div className="relative border-l border-brand-blush/20 max-w-3xl mx-auto pl-6 sm:pl-8 space-y-12">
            {timeline.map((event, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 ${
                  event.status === "completed" 
                    ? "bg-brand-blush border-brand-blush" 
                    : "bg-brand-charcoal border-brand-gold animate-pulse"
                }`} />

                <div className="glass-panel border-brand-blush/10 rounded-2xl p-6 hover:border-brand-blush/30 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold tracking-widest text-brand-gold uppercase">
                      {event.year}
                    </span>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full uppercase tracking-widest font-semibold border ${
                      event.status === "completed" 
                        ? "border-brand-blush/20 bg-brand-blush/5 text-brand-blush" 
                        : "border-brand-gold/20 bg-brand-gold/5 text-brand-gold"
                    }`}>
                      {event.status === "completed" ? "Launched" : "Strategic Concept"}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-cream mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-brand-blush/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-blush font-bold">Visual Moments</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
              Brand Gallery Preview
            </h2>
            <p className="text-brand-cream/70 font-light">
              Glimpses of treats, styling sessions, and studio days in Akure.
            </p>
          </div>
          <div>
            <Link
              href="/gallery"
              className="group flex items-center gap-2 rounded-full border border-brand-blush/30 bg-brand-blush/5 px-6 py-3 text-xs tracking-widest uppercase text-brand-blush transition-all duration-300 hover:bg-brand-blush hover:text-brand-charcoal"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="glass-panel border-brand-cream/10 rounded-2xl p-6 min-h-[220px] flex flex-col justify-between hover:border-brand-blush/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent z-0 opacity-40" />
              <div className="flex justify-between items-start z-10">
                <span className="text-[9px] uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <span className="text-[10px] text-brand-cream/40">Placeholder</span>
              </div>

              <div className="z-10 mt-12">
                <h3 className="font-serif text-lg font-bold text-brand-cream group-hover:text-brand-blush transition-colors">
                  {item.placeholderText}
                </h3>
                <p className="text-[11px] text-brand-cream/50 mt-1 uppercase tracking-wide">
                  {item.title}
                </p>
                <p className="text-[9px] text-brand-blush italic mt-2">
                  Image placeholder — approval pending
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upgraded Final Homepage CTA */}
      <section className="py-24 border-t border-brand-blush/10 bg-gradient-to-b from-brand-charcoal/20 to-brand-charcoal/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex h-12 w-12 rounded-full border border-brand-blush/30 bg-brand-blush/5 items-center justify-center text-brand-blush mx-auto">
            <Calendar className="h-6 w-6" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
            Explore the World Shaytee Is Building
          </h2>

          <p className="text-brand-cream/80 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Discover her brands, book a beauty appointment, order a treat or connect with her team.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#choose-world"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blush to-brand-blush-dark px-8 py-4 text-xs font-bold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Explore Her Brands</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full border border-brand-cream/20 bg-white/5 px-8 py-4 text-xs font-bold tracking-widest uppercase text-brand-cream transition-all duration-300 hover:bg-white/10"
            >
              <span>Contact Shaytee’s Team</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
