"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Image as ImageIcon, Camera, Sparkles, Filter } from "lucide-react";
import { founderData } from "@/lib/founderData";

export default function GalleryPage() {
  const { gallery } = founderData;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "treats", label: "Treat Moments" },
    { value: "beauty", label: "Beauty Looks" },
    { value: "studio", label: "Studio Days" },
    { value: "events", label: "Event Orders" },
    { value: "founder", label: "Founder Portrait" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-cream/60 hover:text-brand-blush transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Headline */}
      <div className="max-w-3xl mb-16 text-left space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-blush font-bold">Visual Concept Portfolio</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
          Brand Moments & Gallery
        </h1>
        <p className="text-brand-cream/70 font-light text-base sm:text-lg">
          A placeholder grid outlining the visual aesthetic of the brand. Once confirmed, these cards will contain high-resolution photos and videos showing the treats and client transformations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 items-center mb-12 pb-6 border-b border-brand-blush/10">
        <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold mr-4">
          <Filter className="h-4 w-4" />
          <span>Filter Gallery:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`rounded-full px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-300 ${
              activeCategory === cat.value
                ? "bg-brand-blush text-brand-charcoal font-semibold"
                : "border border-brand-cream/15 text-brand-cream/80 bg-brand-charcoal/20 hover:border-brand-blush/40 hover:text-brand-blush"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group glass-panel border-brand-blush/10 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:border-brand-blush/35 relative overflow-hidden"
          >
            {/* Visual corner badge */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-radial from-brand-blush/5 to-transparent group-hover:from-brand-blush/10 pointer-events-none transition-all" />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/25 px-2.5 py-1 rounded">
                  {item.category}
                </span>
                <span className="text-[10px] text-brand-cream/30 uppercase tracking-widest">
                  Placeholder
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold tracking-wide text-brand-cream group-hover:text-brand-blush transition-colors">
                {item.placeholderText}
              </h3>
              <p className="text-xs text-brand-cream/70 font-light leading-relaxed">
                Conceptual shot showing: <strong className="text-brand-cream">{item.title}</strong>
              </p>
            </div>

            {/* Media details */}
            <div className="mt-8 pt-6 border-t border-brand-cream/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-brand-cream/50">
                <ImageIcon className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span>Dimensions: {item.aspectRatio === "portrait" ? "Portait Aspect (9:16)" : item.aspectRatio === "landscape" ? "Landscape Aspect (16:9)" : "Square Aspect (1:1)"}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-brand-cream/40 italic">
                <Camera className="h-4 w-4 text-brand-blush flex-shrink-0" />
                <span>Notes: {item.notes}</span>
              </div>
            </div>

            {/* Hover overlay text */}
            <div className="absolute bottom-4 right-6 text-[10px] text-brand-blush opacity-0 group-hover:opacity-100 transition-opacity font-serif italic">
              Pending photo upload...
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Call to Action disclaimer */}
      <div className="mt-16 p-8 rounded-3xl border border-brand-gold/10 bg-brand-gold/5 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-between text-left">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold tracking-wide text-brand-gold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-blush" />
            Media Upload Portal
          </h3>
          <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
            Are you ready to replace these grids with live images/videos? Prepare high-quality PNGs or MP4s representing your wig installations, pedicure packages, event popcorn bars, and founder photo-shoots.
          </p>
        </div>
        <Link
          href="/owner-review"
          className="group rounded-full border border-brand-gold/30 bg-brand-gold/10 py-3.5 px-6 text-xs uppercase tracking-widest font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-charcoal"
        >
          Check Asset Status
        </Link>
      </div>
    </div>
  );
}
