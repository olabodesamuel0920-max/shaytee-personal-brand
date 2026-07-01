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
} from "lucide-react";
import { founderData } from "@/lib/founderData";
import FloatingCard from "@/components/FloatingCard";

export default function HomePage() {
  const { founder, businesses, experienceConcept, socialProof, timeline, gallery } =
    founderData;

  return (
    <div className="relative w-full">
      {/* Background visual accents */}
      <div className="absolute top-[10%] left-[5%] -z-10 h-72 w-72 rounded-full bg-brand-blush/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[30%] right-[10%] -z-10 h-96 w-96 rounded-full bg-brand-gold/5 blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-[20%] left-[15%] -z-10 h-80 w-80 rounded-full bg-brand-blush/5 blur-[130px] animate-pulse-slow" />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero text content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blush/25 bg-brand-blush/5 px-4 py-1.5 text-xs tracking-widest uppercase text-brand-blush">
              <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Premium Founder Brand Concept</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-wide leading-tight">
              Meet <span className="font-semibold block text-transparent bg-clip-text bg-gradient-to-r from-brand-blush via-brand-cream to-brand-gold">{founder.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-brand-cream/80 font-light leading-relaxed max-w-xl">
              {founder.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/brands"
                className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blush to-brand-blush-dark px-8 py-4 text-sm font-semibold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:shadow-[0_0_24px_rgba(244,181,193,0.35)] hover:scale-102"
              >
                <span>Explore Her Brands</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full border border-brand-cream/20 bg-white/5 px-8 py-4 text-sm font-semibold tracking-widest uppercase text-brand-cream transition-all duration-300 hover:border-brand-blush/40 hover:bg-white/10"
              >
                <span>Contact / Collaborate</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Quick Location Proof */}
            <div className="flex items-center gap-3 text-xs text-brand-cream/50 tracking-wider uppercase pt-6">
              <MapPin className="h-4 w-4 text-brand-gold" />
              <span>FUTA South Gate & Atolagbe Complex, Akure</span>
            </div>
          </div>

          {/* Hero visual: Floating 3D Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px]">
            {/* Visual Center Glow */}
            <div className="absolute h-64 w-64 rounded-full bg-brand-blush/20 blur-[80px]" />

            {/* Main Founder Card */}
            <div className="w-[85%] sm:w-[75%] glass-panel rounded-3xl p-8 border-brand-gold/15 bg-gradient-to-tr from-brand-charcoal to-[#181515] relative z-20 shadow-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-cream">
                    {founder.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold mt-1">
                    {founder.title}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full border border-brand-blush/20 flex items-center justify-center bg-brand-blush/5 text-brand-blush text-xs tracking-widest uppercase font-serif">
                  SE
                </div>
              </div>

              {/* Founder Taglines */}
              <div className="space-y-4 border-t border-brand-cream/10 pt-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-cream/50 uppercase">Vibe</span>
                  <span className="text-brand-blush font-semibold tracking-wider uppercase">Feminine Luxury</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-brand-cream/50 uppercase">Locations</span>
                  <span className="text-brand-cream font-medium">Akure, NG</span>
                </div>
                <p className="text-xs text-brand-cream/70 italic leading-relaxed pt-2">
                  &ldquo;Curating premium lifestyle intersections through custom event treats and bespoke hair, lash, and beauty treatments.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating Brand Card 1: Treats */}
            <FloatingCard
              animateDirection="up"
              glowColor="blush"
              className="absolute -top-6 right-2 sm:right-6 w-[200px] sm:w-[220px] z-30 scale-95"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-brand-blush">Treats</span>
                  <TrendingUp className="h-3.5 w-3.5 text-brand-blush" />
                </div>
                <h4 className="font-serif text-lg font-semibold tracking-wide text-brand-cream">
                  {businesses.treat.name}
                </h4>
                <div className="text-[10px] text-brand-cream/60 space-y-1">
                  <div>199.5K+ Likes</div>
                  <div>2.6K+ Followers</div>
                </div>
                <Link
                  href="/brands#treats"
                  className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-blush font-bold group"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </FloatingCard>

            {/* Floating Brand Card 2: Beauty */}
            <FloatingCard
              animateDirection="down"
              glowColor="gold"
              className="absolute -bottom-8 left-2 sm:left-6 w-[200px] sm:w-[220px] z-30 scale-95"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold">Beauty</span>
                  <Compass className="h-3.5 w-3.5 text-brand-gold" />
                </div>
                <h4 className="font-serif text-lg font-semibold tracking-wide text-brand-cream">
                  {businesses.beauty.name}
                </h4>
                <div className="text-[10px] text-brand-cream/60 space-y-1">
                  <div>36.9K+ Likes</div>
                  <div>1K+ Followers</div>
                </div>
                <Link
                  href="/brands#beauty"
                  className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-brand-gold font-bold group"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="border-t border-brand-blush/10 bg-brand-charcoal/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blush/10 to-brand-gold/10 blur-xl opacity-40" />
              {/* Editorial styled quote layout */}
              <div className="glass-panel border-brand-blush/20 rounded-3xl p-10 relative overflow-hidden">
                <Star className="h-8 w-8 text-brand-gold absolute top-6 right-6 opacity-40" />
                <span className="font-serif text-6xl text-brand-blush/20 absolute -top-4 -left-2">&ldquo;</span>
                <p className="font-serif text-2xl font-light italic leading-relaxed text-brand-cream/90 relative z-10 pt-4">
                  I believe in crafting premium moments. Whether it is an event catered with sweet, rich treats, or a beauty transformations that leaves a client glowing, it is about giving Akure unforgettable lifestyle experiences.
                </p>
                <div className="mt-8 border-t border-brand-cream/10 pt-6 relative z-10">
                  <h4 className="font-serif text-lg font-bold tracking-wide text-brand-cream">{founder.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-brand-gold mt-1">{founder.title}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">The Creative Behind the Brands</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
                Building More Than Just Businesses
              </h2>
              <p className="text-brand-cream/80 font-light leading-relaxed text-base sm:text-lg">
                Shaytee is building a lifestyle brand around sweet moments, beauty, confidence, and client experiences in Akure. From sweet treats and custom event orders to beauty appointments, lash sets, customized wigs, and hair styling, her work coordinates luxury and personal style.
              </p>
              <p className="text-brand-cream/70 font-light leading-relaxed text-sm sm:text-base">
                Rather than treating these spaces as isolated ventures, Shaytee aligns them under a unified focus on high-end client experiences. Her goal is to bring sophistication, celebration, and confidence to customers in FUTA Southgate, Atolagbe, and the wider Akure community.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-brand-blush font-bold transition-all"
                >
                  <span>Read The Full Founder Story</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Her Brands Section */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="brands">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-blush font-bold">The Brand Portfolio</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
            One Founder. Two Worlds.
          </h2>
          <p className="text-brand-cream/70 font-light">
            Bringing custom delicacies and high-end aesthetics together under a single standard of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand 1: Treats */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-blush/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FloatingCard
              glowColor="blush"
              className="h-full flex flex-col justify-between border-brand-blush/20 relative"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-brand-blush font-semibold">Confectionery & Events</span>
                  <span className="text-xs text-brand-cream/50">Akure, NG</span>
                </div>
                
                <h3 className="font-serif text-3xl font-bold tracking-wide text-brand-cream">
                  {businesses.treat.name}
                </h3>
                
                <p className="text-brand-cream/70 font-light leading-relaxed">
                  {businesses.treat.description}
                </p>

                {/* Proof Section */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-brand-cream/10 py-4 my-2">
                  <div>
                    <span className="block text-2xl font-bold text-brand-blush">{businesses.treat.proof.likes}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-cream/60">TikTok Likes</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-brand-blush">{businesses.treat.proof.followers}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-cream/60">Followers</span>
                  </div>
                </div>

                <div className="text-xs text-brand-cream/60 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>Instagram / TikTok: <strong className="text-brand-cream">{businesses.treat.proof.handle}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>Location: <strong className="text-brand-cream">Atolagbe Shopping Complex, Southgate</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/brands#treats"
                  className="w-full flex items-center justify-between rounded-full border border-brand-blush/30 bg-brand-blush/5 py-4 px-6 text-sm uppercase tracking-widest text-brand-blush font-semibold transition-all duration-300 hover:bg-brand-blush hover:text-brand-charcoal"
                >
                  <span>{businesses.treat.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FloatingCard>
          </div>

          {/* Brand 2: Beauty */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <FloatingCard
              glowColor="gold"
              className="h-full flex flex-col justify-between border-brand-gold/20 relative"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">Salon & Cosmetics</span>
                  <span className="text-xs text-brand-cream/50">Akure, NG</span>
                </div>
                
                <h3 className="font-serif text-3xl font-bold tracking-wide text-brand-cream">
                  {businesses.beauty.name}
                </h3>
                
                <p className="text-brand-cream/70 font-light leading-relaxed">
                  {businesses.beauty.description}
                </p>

                {/* Proof Section */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-brand-cream/10 py-4 my-2">
                  <div>
                    <span className="block text-2xl font-bold text-brand-gold">{businesses.beauty.proof.likes}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-cream/60">Likes</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-brand-gold">{businesses.beauty.proof.followers}</span>
                    <span className="text-[10px] uppercase tracking-widest text-brand-cream/60">Followers</span>
                  </div>
                </div>

                <div className="text-xs text-brand-cream/60 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blush" />
                    <span>Instagram / TikTok: <strong className="text-brand-cream">{businesses.beauty.proof.handle}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blush" />
                    <span>Location: <strong className="text-brand-cream">FUTA South Gate Area, Akure</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="/brands#beauty"
                  className="w-full flex items-center justify-between rounded-full border border-brand-gold/30 bg-brand-gold/5 py-4 px-6 text-sm uppercase tracking-widest text-brand-gold font-semibold transition-all duration-300 hover:bg-brand-gold hover:text-brand-charcoal"
                >
                  <span>{businesses.beauty.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* The Shaytee Experience Section */}
      <section className="border-t border-brand-blush/10 bg-brand-charcoal/20 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-blush font-bold">The Big Vision</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
                {experienceConcept.title}
              </h2>
              <div className="inline-block rounded-full bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 text-[11px] text-brand-gold uppercase tracking-wider">
                Demo Concept — Pending Owner Confirmation
              </div>
              <p className="text-brand-cream/80 font-light leading-relaxed text-base sm:text-lg">
                {experienceConcept.description}
              </p>
              <p className="text-brand-cream/70 font-light leading-relaxed text-sm">
                The core concept centers on merging these two worlds. In a thriving regional city like Akure, customers look for trusted plugs. By building one lifestyle brand, Shaytee coordinates sweet moments for parties and beauty transformations for confidence.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-brand-cream/5 bg-brand-charcoal/40">
                  <h4 className="text-brand-blush text-sm font-semibold tracking-wide uppercase mb-1">Sweet Moments</h4>
                  <p className="text-xs text-brand-cream/60">Gourmet ice cream, events, custom treat stations.</p>
                </div>
                <div className="p-4 rounded-xl border border-brand-cream/5 bg-brand-charcoal/40">
                  <h4 className="text-brand-gold text-sm font-semibold tracking-wide uppercase mb-1">Beauty Looks</h4>
                  <p className="text-xs text-brand-cream/60">Wig installs, lash tech, pedicures, piercings.</p>
                </div>
              </div>
            </div>

            {/* Synergies showcase list */}
            <div className="lg:col-span-6 space-y-4">
              {experienceConcept.crossPromotions.map((promo, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-brand-blush/10 bg-brand-charcoal/50 hover:border-brand-blush/35 transition-all duration-300 group flex items-start gap-4"
                >
                  <div className="h-8 w-8 rounded-full border border-brand-blush/20 bg-brand-blush/5 flex items-center justify-center text-brand-blush font-serif text-sm font-bold flex-shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold tracking-wide text-brand-cream group-hover:text-brand-blush transition-colors">
                      {promo.title}
                    </h4>
                    <p className="text-xs text-brand-cream/70 leading-relaxed mt-1">
                      {promo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-brand-blush/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {socialProof.map((stat, index) => (
            <div key={index} className="space-y-2 p-4 glass-panel border-brand-blush/5 rounded-2xl bg-gradient-to-b from-[#181515] to-[#0A0909]">
              <span className="block text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-blush to-brand-gold">
                {stat.value}
              </span>
              <span className="block text-xs uppercase tracking-widest text-brand-cream/80">
                {stat.label}
              </span>
              <span className="block text-[10px] text-brand-cream/40 uppercase tracking-widest">
                {stat.platform}
              </span>
            </div>
          ))}
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
                {/* Timeline node */}
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

      {/* Gallery preview Section */}
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

        {/* Dynamic editorial placeholders */}
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

      {/* Contact Section */}
      <section className="py-24 border-t border-brand-blush/10 bg-gradient-to-b from-brand-charcoal/20 to-brand-charcoal/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex h-12 w-12 rounded-full border border-brand-blush/30 bg-brand-blush/5 items-center justify-center text-brand-blush mx-auto">
            <MessageSquare className="h-6 w-6" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
            Collaborate With Shaytee
          </h2>

          <p className="text-brand-cream/80 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            For event bookings, custom treat catering, salon styling appointments, lash tech slots, or personal brand collaborations, reach out directly to Shaytee’s team on WhatsApp.
          </p>

          {/* Pending Owner Disclaimer */}
          <div className="inline-block rounded-xl border border-brand-blush/20 bg-brand-blush/5 p-4 max-w-md text-xs text-brand-cream/70 leading-relaxed text-left mx-auto">
            <strong className="text-brand-blush block mb-1 uppercase tracking-wider">Note:</strong>
            Using temporary contact path: <strong className="text-brand-cream">+{founderData.contact.phone}</strong>. Officially routing is pending owner approval.
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark px-10 py-5 text-sm font-semibold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:shadow-[0_0_24px_rgba(223,186,115,0.35)] hover:scale-102"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
