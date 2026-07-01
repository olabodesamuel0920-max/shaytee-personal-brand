import Link from "next/link";
import { ArrowLeft, Sparkles, MapPin, CheckCircle, Heart, Award } from "lucide-react";
import { founderData } from "@/lib/founderData";
import FloatingCard from "@/components/FloatingCard";

export default function AboutPage() {
  const { founder } = founderData;

  const coreValues = [
    {
      icon: <Heart className="h-5 w-5 text-brand-blush" />,
      title: "Client-Centricity",
      description: "Putting the customer's comfort, experience, and feedback at the core of both sweet services and styling.",
    },
    {
      icon: <Award className="h-5 w-5 text-brand-gold" />,
      title: "Premium Execution",
      description: "Rejecting compromises. Every hair install, pedicure, popcorn setup, or custom cupcake is crafted to look and feel high-end.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-brand-blush" />,
      title: "Ecosystem Synergies",
      description: "Believing that luxury lifestyle experiences are connected—beauty builds confidence, and sweet moments build celebrations.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back to Home Link */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-cream/60 hover:text-brand-blush transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Visual Portrait Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <FloatingCard glowColor="blush" className="text-center space-y-6">
            {/* Portrait Placeholder Circle */}
            <div className="h-32 w-32 rounded-full border border-brand-blush/30 bg-brand-charcoal flex items-center justify-center mx-auto text-brand-cream text-3xl font-serif">
              S
            </div>
            <div>
              <h1 className="font-serif text-3xl font-bold tracking-wide text-brand-cream">
                {founder.name}
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-gold mt-1">
                {founder.title}
              </p>
            </div>
            
            <p className="text-xs text-brand-cream/50 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-gold" />
              <span>Akure, Nigeria</span>
            </p>

            <div className="border-t border-brand-cream/10 pt-6 text-left space-y-4">
              <div className="flex items-center gap-2 text-xs text-brand-cream/80">
                <CheckCircle className="h-4 w-4 text-brand-blush flex-shrink-0" />
                <span>Founder, Shaytee’s Treat (Est. 2.6K+ followers)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-cream/80">
                <CheckCircle className="h-4 w-4 text-brand-blush flex-shrink-0" />
                <span>Founder, Shaytee Beauty Studio (Hair by Shaytee)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-brand-cream/80">
                <CheckCircle className="h-4 w-4 text-brand-blush flex-shrink-0" />
                <span>FUTA South Gate & Atolagbe Hub Presence</span>
              </div>
            </div>

            <div className="pt-2 text-[10px] text-brand-cream/40 uppercase tracking-wide">
              {founder.statusDisclaimer}
            </div>
          </FloatingCard>
        </div>

        {/* Right Column: Narrative Copy */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">Biography</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream leading-tight">
              Crafting a Lifestyle Vision in Akure
            </h2>
          </div>

          <div className="space-y-6 text-brand-cream/80 font-light leading-relaxed text-base sm:text-lg">
            <p>
              Shaytee is the founder and creative force driving two of Akure’s most recognizable student and resident brands: <strong className="text-brand-cream">Shaytee’s Treat</strong> and <strong className="text-brand-cream">Shaytee Beauty Studio</strong>.
            </p>
            <p>
              Her journey began with a simple passion for bringing joy to people’s celebrations. Recognising a gap for high-quality, artisanal confectionery catering around FUTA Southgate, she launched Shaytee’s Treat. The brand quickly grew into the go-to provider for gourmet ice cream, custom candy boards, popcorn setups, and party treat hampers, accumulating over 199.5K TikTok likes.
            </p>
            <p>
              As the confectionery business thrived, Shaytee expanded her creative outlets into beauty styling. What started as personal installations and customized lash tech styling under <strong className="text-brand-cream">Hair by Shaytee</strong> quickly gathered over 1K Instagram/TikTok followers.
            </p>
            <p>
              To keep up with demand, she established the physical <strong className="text-brand-cream">Shaytee Beauty Studio</strong> near FUTA South Gate. Today, the studio provides a full spectrum of styling—from professional wigs and lash sets to piercings and relaxing pedicures.
            </p>
          </div>

          {/* The Vision Callout */}
          <div className="p-8 rounded-2xl border border-brand-gold/15 bg-brand-charcoal/40 space-y-3">
            <h3 className="font-serif text-xl font-bold tracking-wide text-brand-gold">
              The Concept: One Unified Experience
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed font-light">
              Rather than viewing confectionery and cosmetics as separate industries, Shaytee sees them as two pillars of a singular lifestyle standard. One side creates sweet moments of celebration, and the other cultivates the confidence to shine during those celebrations.
            </p>
          </div>

          {/* Core Values */}
          <div className="space-y-6 pt-4">
            <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-cream">
              Philosophy & Standards
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full border border-brand-cream/10 bg-brand-charcoal flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold tracking-wide text-brand-cream">
                      {value.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-cream/70 mt-1 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-8 border-t border-brand-blush/10 flex flex-wrap gap-4 items-center justify-between">
            <p className="text-xs text-brand-cream/50 max-w-sm">
              Note: This is a founder brand presentation demo. Details are subject to confirmation by Shaytee.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-blush px-6 py-3 text-xs font-bold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:scale-102 hover:shadow-[0_0_16px_rgba(244,181,193,0.2)]"
            >
              <span>Get in Touch</span>
              <ArrowLeft className="h-4.5 w-4.5 rotate-180 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
