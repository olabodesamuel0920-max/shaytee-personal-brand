"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Brands", href: "/brands" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className="glass-panel mx-auto max-w-7xl border-x-0 border-t-0 bg-opacity-70 px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex flex-col justify-start">
              <span className="font-serif text-2xl font-bold tracking-[0.25em] text-foreground transition-all duration-300 group-hover:text-brand-blush">
                SHAYTEE
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold">
                Founder Portfolio
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-brand-blush font-semibold"
                    : "text-brand-cream/80 hover:text-brand-blush"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/owner-review"
              className="group flex items-center gap-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-2 text-xs tracking-widest uppercase text-brand-gold transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/15"
            >
              Owner Review
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-brand-cream hover:bg-brand-charcoal hover:text-brand-blush focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
        id="mobile-menu"
      >
        <div className="glass-panel border-x-0 border-t-0 space-y-1 px-4 pb-6 pt-3 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-3 text-base font-medium tracking-widest uppercase transition-colors duration-300 ${
                isActive(link.href)
                  ? "bg-brand-charcoal text-brand-blush"
                  : "text-brand-cream hover:bg-brand-charcoal/55 hover:text-brand-blush"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-brand-blush/10 px-3">
            <Link
              href="/owner-review"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-between rounded-full border border-brand-gold/30 bg-brand-gold/5 px-5 py-3 text-sm tracking-widest uppercase text-brand-gold transition-all duration-300 hover:bg-brand-gold/10"
            >
              <span>Owner Review Portal</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
