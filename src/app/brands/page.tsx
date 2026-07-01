import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Compass, TrendingUp, Sparkles, MapPin, AlertCircle } from "lucide-react";
import { founderData } from "@/lib/founderData";
import FloatingCard from "@/components/FloatingCard";

export default function BrandsPage() {
  const { businesses } = founderData;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back link */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-cream/60 hover:text-brand-blush transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="max-w-3xl mb-16 space-y-4 text-left">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">Dual Business Focus</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream leading-tight">
          The Lifestyle Businesses
        </h1>
        <p className="text-brand-cream/70 font-light text-base sm:text-lg">
          Explore the individual concepts, target markets, and locations for each brand within the Shaytee portfolio.
        </p>
      </div>

      {/* Brand 1: Shaytee's Treat */}
      <section className="mb-20 scroll-mt-28" id="treats">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl border border-brand-blush/10 bg-brand-charcoal/30 text-left">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-brand-blush bg-brand-blush/10 border border-brand-blush/20 px-2.5 py-1 rounded-full">
                  <TrendingUp className="h-3 w-3" />
                  Confectionery & Event Catering
                </span>
                <span className="text-xs text-brand-cream/40 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-brand-gold" />
                  Atolagbe Hub, Akure
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-brand-cream">
                {businesses.treat.name}
              </h2>

              <p className="text-brand-cream/80 font-light leading-relaxed text-sm sm:text-base">
                {businesses.treat.longDescription}
              </p>

              {/* Offerings list */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">What We Offer:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businesses.treat.offerings.map((offering, idx) => (
                    <div key={idx} className="flex gap-2 items-center text-xs text-brand-cream/80">
                      <Check className="h-4 w-4 text-brand-blush flex-shrink-0" />
                      <span>{offering}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note and CTA */}
            <div className="mt-8 pt-6 border-t border-brand-cream/10 space-y-4">
              <div className="flex gap-2 items-start p-3 rounded-lg border border-brand-blush/10 bg-brand-blush/5 text-xs text-brand-cream/70 leading-normal">
                <AlertCircle className="h-4 w-4 text-brand-blush flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Owner Confirmation:</strong> Exact offerings, package pricing, and complex location coordinates are pending review.
                </span>
              </div>

              <Link
                href="/contact?intent=treat-order"
                className="group flex w-full items-center justify-between rounded-full bg-brand-blush px-6 py-4 text-xs font-bold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:scale-102 hover:shadow-[0_0_20px_rgba(244,181,193,0.25)]"
              >
                <span>Order Treats / Request Event Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Social and Stats */}
          <div className="lg:col-span-5">
            <FloatingCard glowColor="blush" className="h-full flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider text-brand-cream/50">
                  <span>Social Presence</span>
                  <span>TikTok / Instagram</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-wide text-brand-cream">
                  {businesses.treat.proof.handle}
                </h3>
              </div>

              {/* Huge Metrics */}
              <div className="grid grid-cols-2 gap-6 my-4">
                <div className="space-y-1 p-4 rounded-xl border border-brand-cream/5 bg-brand-charcoal/40">
                  <span className="block text-3xl font-serif font-bold text-brand-blush">
                    {businesses.treat.proof.likes}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-cream/60">Likes</span>
                </div>
                <div className="space-y-1 p-4 rounded-xl border border-brand-cream/5 bg-brand-charcoal/40">
                  <span className="block text-3xl font-serif font-bold text-brand-blush">
                    {businesses.treat.proof.followers}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-cream/60">Followers</span>
                </div>
              </div>

              {/* Event Stats and Proof */}
              <div className="border-t border-brand-cream/10 pt-6 space-y-4 text-xs text-brand-cream/70 text-left">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-gold" />
                  <span>Catering for FUTA students & corporate events</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-gold" />
                  <span>Custom theme colors, branding, and stations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-gold" />
                  <span>Highly rated popcorn setups & ice cream packs</span>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Brand 2: Shaytee Beauty Studio */}
      <section className="scroll-mt-28" id="beauty">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl border border-brand-gold/10 bg-brand-charcoal/30 text-left">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-1 rounded-full">
                  <Compass className="h-3.5 w-3.5" />
                  Beauty Services & Hair Styling
                </span>
                <span className="text-xs text-brand-cream/40 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-brand-blush" />
                  FUTA South Gate Area, Akure
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-brand-cream">
                {businesses.beauty.name}
              </h2>

              <p className="text-brand-cream/80 font-light leading-relaxed text-sm sm:text-base">
                {businesses.beauty.longDescription}
              </p>

              {/* Offerings list */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-widest text-brand-blush font-semibold">Services Rendered:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businesses.beauty.offerings.map((offering, idx) => (
                    <div key={idx} className="flex gap-2 items-center text-xs text-brand-cream/80">
                      <Check className="h-4 w-4 text-brand-gold flex-shrink-0" />
                      <span>{offering}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note and CTA */}
            <div className="mt-8 pt-6 border-t border-brand-cream/10 space-y-4">
              <div className="flex gap-2 items-start p-3 rounded-lg border border-brand-gold/10 bg-brand-gold/5 text-xs text-brand-cream/70 leading-normal">
                <AlertCircle className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Owner Confirmation:</strong> Exact salon service list, pedicure choices, lash lengths, and booking systems are pending review.
                </span>
              </div>

              <Link
                href="/contact?intent=beauty-app"
                className="group flex w-full items-center justify-between rounded-full bg-brand-gold px-6 py-4 text-xs font-bold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:scale-102 hover:shadow-[0_0_20px_rgba(223,186,115,0.25)]"
              >
                <span>Book a Beauty / Styling Slot</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Social and Stats */}
          <div className="lg:col-span-5">
            <FloatingCard glowColor="gold" className="h-full flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs uppercase tracking-wider text-brand-cream/50">
                  <span>Social Presence</span>
                  <span>Instagram / TikTok</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold tracking-wide text-brand-cream">
                  {businesses.beauty.proof.handle}
                </h3>
              </div>

              {/* Huge Metrics */}
              <div className="grid grid-cols-2 gap-6 my-4">
                <div className="space-y-1 p-4 rounded-xl border border-brand-cream/5 bg-brand-charcoal/40">
                  <span className="block text-3xl font-serif font-bold text-brand-gold">
                    {businesses.beauty.proof.likes}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-cream/60">Likes</span>
                </div>
                <div className="space-y-1 p-4 rounded-xl border border-brand-cream/5 bg-brand-charcoal/40">
                  <span className="block text-3xl font-serif font-bold text-brand-gold">
                    {businesses.beauty.proof.followers}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-brand-cream/60">Followers</span>
                </div>
              </div>

              {/* Service details */}
              <div className="border-t border-brand-cream/10 pt-6 space-y-4 text-xs text-brand-cream/70 text-left">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-blush" />
                  <span>Professional wig coloring & customized styling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-blush" />
                  <span>Quality lash materials and long-lasting adhesive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-blush" />
                  <span>Relaxing spa pedicure and high-hygiene piercing treatments</span>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>
    </div>
  );
}
