"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, MessageSquare, Phone, AlertCircle, Compass, HelpCircle } from "lucide-react";
import { founderData } from "@/lib/founderData";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    reason: "General Enquiry",
    interest: "Both Brands",
    message: "",
  });

  // Pre-fill fields if search query parameters are present
  useEffect(() => {
    const intent = searchParams.get("intent");
    if (intent === "treat-order") {
      setFormData((prev) => ({
        ...prev,
        reason: "Treat Order (Ice cream, popcorn, event treats)",
        interest: "Shaytee's Treat",
      }));
    } else if (intent === "beauty-app") {
      setFormData((prev) => ({
        ...prev,
        reason: "Beauty Appointment (Hair, lashes, pedicure, piercings)",
        interest: "Shaytee Beauty Studio",
      }));
    }
  }, [searchParams]);

  const reasons = [
    "Treat Order (Ice cream, popcorn, event treats)",
    "Beauty Appointment (Hair, lashes, pedicure, piercings)",
    "Brand Collaboration & Sponsorship",
    "General Enquiry",
  ];

  const brandOptions = [
    "Shaytee's Treat",
    "Shaytee Beauty Studio",
    "Both Brands",
    "Founder Personal Brand",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppUrl = () => {
    // Exact format required by specifications
    const text = `HELLO SHAYTEE TEAM

Name: ${formData.name || "Not provided"}
Reason for Contact: ${formData.reason}
Brand Interest: ${formData.interest}
Message: ${formData.message || "Not provided"}

Please get back to me.`;

    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${founderData.contact.phone}?text=${encodedText}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppUrl();
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Form panel */}
      <div className="lg:col-span-7 p-8 rounded-3xl border border-brand-blush/10 bg-brand-charcoal/30 text-left">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-brand-cream/80 font-semibold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-brand-cream/10 bg-brand-charcoal/60 px-4 py-3 text-brand-cream placeholder-brand-cream/30 focus:border-brand-blush/40 focus:outline-none text-sm transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="reason" className="text-xs uppercase tracking-widest text-brand-cream/80 font-semibold">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-brand-cream/10 bg-brand-charcoal/60 px-4 py-3 text-brand-cream focus:border-brand-blush/40 focus:outline-none text-sm transition-colors"
            >
              {reasons.map((r, idx) => (
                <option key={idx} value={r} className="bg-brand-charcoal text-brand-cream">
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="interest" className="text-xs uppercase tracking-widest text-brand-cream/80 font-semibold">
              Brand Interest
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-brand-cream/10 bg-brand-charcoal/60 px-4 py-3 text-brand-cream focus:border-brand-blush/40 focus:outline-none text-sm transition-colors"
            >
              {brandOptions.map((o, idx) => (
                <option key={idx} value={o} className="bg-brand-charcoal text-brand-cream">
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-brand-cream/80 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Detail your request..."
              className="w-full rounded-xl border border-brand-cream/10 bg-brand-charcoal/60 px-4 py-3 text-brand-cream placeholder-brand-cream/30 focus:border-brand-blush/40 focus:outline-none text-sm transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blush to-brand-blush-dark py-4 text-xs font-bold tracking-widest uppercase text-brand-charcoal transition-all duration-300 hover:scale-102 hover:shadow-[0_0_20px_rgba(244,181,193,0.3)] cursor-pointer"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Generate WhatsApp Message</span>
          </button>
        </form>
      </div>

      {/* Info panel */}
      <div className="lg:col-span-5 space-y-6 text-left">
        <div className="p-6 rounded-3xl border border-brand-gold/15 bg-brand-gold/5 space-y-4">
          <h3 className="font-serif text-lg font-bold text-brand-gold flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Direct Route
          </h3>
          <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
            Clicking the submit button will compile your form responses into a clean, plain text draft template and redirect you directly to WhatsApp.
          </p>
          <div className="text-xs border-t border-brand-gold/10 pt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-brand-cream/50">Recipient Phone:</span>
              <span className="text-brand-cream font-mono font-medium">+{founderData.contact.phone}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-brand-cream/50">Status:</span>
              <span className="text-brand-gold font-serif italic text-[11px] text-right">
                Temporary routing — pending owner confirmation
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-3xl border border-brand-cream/5 bg-brand-charcoal/40 space-y-4 text-xs text-brand-cream/70 leading-relaxed">
          <div className="flex gap-2.5 items-start">
            <Compass className="h-4 w-4 text-brand-blush mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-brand-cream block mb-0.5 uppercase tracking-wider">Treat Inquiries</strong>
              Popcorn carts, ice cream catering, custom sweet packaging packages for birthdays and weddings.
            </div>
          </div>
          <div className="flex gap-2.5 items-start">
            <HelpCircle className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-brand-cream block mb-0.5 uppercase tracking-wider">Beauty Bookings</strong>
              Wig installs, lash sets, spa pedicures, and piercings around FUTA South Gate.
            </div>
          </div>
        </div>

        {/* Text template display preview */}
        <div className="p-6 rounded-3xl border border-brand-cream/10 bg-[#0E0B0B] space-y-3">
          <span className="text-[10px] uppercase tracking-widest text-brand-cream/40 font-bold block">
            Draft Text Format Preview (No Emojis)
          </span>
          <pre className="text-[10px] font-mono text-brand-cream/60 leading-relaxed overflow-x-auto p-4 bg-brand-charcoal/60 rounded-xl">
            {`HELLO SHAYTEE TEAM

Name: [Your Name]
Reason for Contact: ${formData.reason}
Brand Interest: ${formData.interest}
Message: [Your Message]

Please get back to me.`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
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

      {/* Title */}
      <div className="max-w-3xl mb-16 text-left space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-blush font-bold flex items-center gap-1.5">
          <AlertCircle className="h-4 w-4 text-brand-blush" />
          Pending Official Confirmation
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
          Connect / Collaborate
        </h1>
        <p className="text-brand-cream/70 font-light text-base sm:text-lg">
          Connect with Shaytee’s team for reservations, bookings, custom event pricing, or strategic brand collaborations.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-brand-cream/60 uppercase text-xs tracking-widest">Loading Form Data...</div>}>
        <ContactFormContent />
      </Suspense>
    </div>
  );
}
