import Link from "next/link";
import { ArrowUpRight, Phone, Compass } from "lucide-react";
import { founderData } from "@/lib/founderData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-brand-blush/10 bg-brand-charcoal/40 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col mb-4">
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-foreground">
                SHAYTEE
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold">
                Founder Portfolio
              </span>
            </Link>
            <p className="text-sm text-brand-cream/70 max-w-md mb-6 leading-relaxed">
              Entrepreneur building a curated lifestyle ecosystem in Akure. Bringing
              joy through gourmet event catering and confidence through precision beauty and styling services.
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex h-2 w-2 animate-ping rounded-full bg-brand-gold" />
              <span className="text-xs uppercase tracking-widest text-brand-gold">
                Demo Concept — Pending Review
              </span>
            </div>
          </div>

          {/* Brands Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blush mb-4">
              Our Brands
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/brands#treats"
                  className="group inline-flex items-center gap-1 text-sm text-brand-cream/80 hover:text-brand-blush transition-colors"
                >
                  Shaytee’s Treat
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/brands#beauty"
                  className="group inline-flex items-center gap-1 text-sm text-brand-cream/80 hover:text-brand-blush transition-colors"
                >
                  Shaytee Beauty Studio
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-brand-cream/80 hover:text-brand-blush transition-colors"
                >
                  Brand Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-blush mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${founderData.contact.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-brand-cream/80 hover:text-brand-blush transition-colors"
                >
                  <Phone className="h-4 w-4 text-brand-gold" />
                  <span>WhatsApp Team</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/hairbyshaytee"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-brand-cream/80 hover:text-brand-blush transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-brand-gold"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>@hairbyshaytee</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/shaytee.s.treat"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-brand-cream/80 hover:text-brand-blush transition-colors"
                >
                  <Compass className="h-4 w-4 text-brand-gold" />
                  <span>@shaytee.s.treat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-blush/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-cream/50">
            &copy; {currentYear} Shaytee Experience. All rights reserved. Designed for presentation purposes.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/owner-review"
              className="text-xs tracking-wider uppercase text-brand-gold hover:text-brand-blush transition-colors"
            >
              Owner Review Checklist
            </Link>
            <span className="text-brand-cream/30 text-xs">|</span>
            <span className="text-xs text-brand-cream/40">Akure, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
