"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Copy,
  MessageSquare,
  Compass,
  TrendingUp,
  MapPin,
  Heart,
  ExternalLink,
  Lock,
  Check,
  Zap,
} from "lucide-react";
import { founderData, ChecklistItem } from "@/lib/founderData";
import FloatingCard from "@/components/FloatingCard";

export default function OwnerReviewPage() {
  // Passcode state
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcodeError, setPasscodeError] = useState("");

  // Approval state
  const [directionApproved, setDirectionApproved] = useState(false);
  const [showApprovalSuccess, setShowApprovalSuccess] = useState(false);

  // Review states
  const [checklist, setChecklist] = useState<ChecklistItem[]>(founderData.ownerChecklist);
  const [feedbackNotes, setFeedbackNotes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const correctPasscode = "SHAYTEE-FOUNDER";

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toUpperCase() === correctPasscode) {
      setIsUnlocked(true);
      setPasscodeError("");
    } else {
      setPasscodeError("Invalid strategy passcode. Please try again.");
    }
  };

  const toggleStatus = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === "approved" ? "pending" : "approved" }
          : item
      )
    );
  };

  const handleFeedbackChange = (id: string, note: string) => {
    setFeedbackNotes((prev) => ({ ...prev, [id]: note }));
  };

  // Compile checklist and feedback text block
  const compileFeedbackText = () => {
    let text = `SHAYTEE FOUNDER SUITE REVIEW REPORT\n\n`;

    checklist.forEach((item, idx) => {
      const statusSymbol = item.status === "approved" ? "[APPROVED]" : "[PENDING / REVISION REQUIRED]";
      text += `${idx + 1}. ${item.label}\n   Status: ${statusSymbol}\n`;
      if (feedbackNotes[item.id]) {
        text += `   Owner Comment: "${feedbackNotes[item.id]}"\n`;
      }
      text += `\n`;
    });

    text += `Compiled on: ${new Date().toLocaleDateString()}`;
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(compileFeedbackText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendToWhatsApp = () => {
    const encoded = encodeURIComponent(compileFeedbackText());
    window.open(`https://wa.me/${founderData.contact.phone}?text=${encoded}`, "_blank");
  };

  const handleApproveDirection = () => {
    setDirectionApproved(true);
    setShowApprovalSuccess(true);
  };

  const handleSendApprovalWhatsApp = () => {
    const approvalMessage = `HELLO SHAYTEE TEAM\n\nI have reviewed the portfolio mockup in the Shaytee Founder Suite and hereby APPROVE the current design direction.\n\nSigned off on: ${new Date().toLocaleDateString()}`;
    const encoded = encodeURIComponent(approvalMessage);
    window.open(`https://wa.me/${founderData.contact.phone}?text=${encoded}`, "_blank");
  };

  const approvedCount = checklist.filter((item) => item.status === "approved").length;

  // 1. Password Lock Screen Layout
  if (!isUnlocked) {
    return (
      <div className="mx-auto max-w-md px-4 py-32 text-center min-h-[70vh] flex flex-col justify-center">
        <FloatingCard glowColor="gold" className="p-8 space-y-6 text-left border-brand-gold/20">
          <div className="text-center space-y-2">
            <div className="mx-auto h-12 w-12 rounded-full border border-brand-gold/30 bg-brand-gold/5 flex items-center justify-center text-brand-gold mb-3">
              <Lock className="h-5 w-5" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-brand-cream tracking-wide">
              Shaytee Founder Suite
            </h1>
            <p className="text-xs text-brand-cream/60">
              Private strategy and brand approval room. Enter the demo passcode below to review current assets.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="passcode" className="text-[10px] uppercase tracking-widest text-brand-cream/80 font-bold">
                Enter Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Hint: SHAYTEE-FOUNDER"
                className="w-full rounded-xl border border-brand-cream/15 bg-brand-charcoal/60 px-4 py-3 text-brand-cream text-sm placeholder-brand-cream/20 focus:border-brand-gold/50 focus:outline-none"
              />
              {passcodeError && (
                <p className="text-xs text-brand-blush mt-1 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  <span>{passcodeError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark py-3.5 text-xs font-bold tracking-widest uppercase text-brand-charcoal hover:scale-[1.01] transition-transform cursor-pointer"
            >
              Access Board
            </button>
          </form>

          <div className="pt-2 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-brand-cream/40 hover:text-brand-blush transition-colors"
            >
              <ArrowLeft className="h-3 w-3" />
              <span>Return to Portfolio</span>
            </Link>
          </div>
        </FloatingCard>
      </div>
    );
  }

  // 2. Main Strategy Suite Layout
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-cream/60 hover:text-brand-blush transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>

      {/* Suite Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-8 text-left space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-brand-gold" />
            Private Strategy & Approval Room
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream leading-tight">
            Shaytee Founder Suite
          </h1>
          <p className="text-brand-cream/70 font-light text-sm sm:text-base max-w-2xl">
            This dashboard serves as the review portal for the brand experience. Check status notes, toggle approvals, leave feedback notes, and compile final sign-offs.
          </p>
        </div>

        {/* Progress Counter */}
        <div className="lg:col-span-4 p-6 rounded-3xl border border-brand-blush/10 bg-brand-charcoal/40 text-center space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-brand-cream/50 block">Approval Progress</span>
          <span className="block text-4xl font-serif font-bold text-brand-blush">
            {approvedCount} / {checklist.length}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-brand-gold block font-semibold">
            {approvedCount === checklist.length ? "Ecosystem Complete!" : "Awaiting Final Details"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Checklist & Status Modules */}
        <div className="lg:col-span-8 space-y-8 text-left">
          
          {/* Brand Ecosystem Overview */}
          <div className="p-6 rounded-2xl border border-brand-blush/10 bg-brand-charcoal/30 space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-cream flex items-center gap-2">
              <Compass className="h-5 w-5 text-brand-blush" />
              Brand Ecosystem Overview
            </h3>
            <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
              We are framing the brand under a unified luxury lifestyle concept: <strong>"The Shaytee Experience"</strong>. Rather than positioning these as separate independent shops, this portfolio shows you as the founder directing event treats and beauty transformations in Akure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3 rounded-lg border border-white/5 bg-brand-charcoal/50 space-y-1">
                <span className="text-brand-blush font-semibold block uppercase text-[10px]">Shaytee’s Treat</span>
                <span className="text-brand-cream/70">Status: <strong>Live & Verified</strong></span>
                <a
                  href="https://shaytee-s-treat.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-gold hover:underline flex items-center gap-1 mt-1 text-[11px]"
                >
                  <span>Visit Treat Site</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="p-3 rounded-lg border border-white/5 bg-brand-charcoal/50 space-y-1">
                <span className="text-brand-gold font-semibold block uppercase text-[10px]">Shaytee Beauty Studio</span>
                <span className="text-brand-cream/70">Status: <strong>Preview Coming Soon</strong></span>
                <span className="text-brand-cream/40 block mt-1 text-[11px]">
                  (Placeholder configured in local codebase)
                </span>
              </div>
            </div>
          </div>

          {/* Social metrics overview */}
          <div className="p-6 rounded-2xl border border-white/5 bg-brand-charcoal/30 space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-cream flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand-gold" />
              Ecosystem Social Proof
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-brand-charcoal/50 border border-brand-blush/5 rounded-xl">
                <span className="block text-2xl font-bold text-brand-blush">199.5K+</span>
                <span className="text-[9px] uppercase tracking-wider text-brand-cream/60">Treat Likes</span>
              </div>
              <div className="p-3 bg-brand-charcoal/50 border border-brand-blush/5 rounded-xl">
                <span className="block text-2xl font-bold text-brand-blush">36.9K+</span>
                <span className="text-[9px] uppercase tracking-wider text-brand-cream/60">Beauty Likes</span>
              </div>
              <div className="p-3 bg-brand-charcoal/50 border border-brand-blush/5 rounded-xl">
                <span className="block text-2xl font-bold text-brand-gold">2.6K+</span>
                <span className="text-[9px] uppercase tracking-wider text-brand-cream/60">Treat Followers</span>
              </div>
              <div className="p-3 bg-brand-charcoal/50 border border-brand-blush/5 rounded-xl">
                <span className="block text-2xl font-bold text-brand-gold">1K+</span>
                <span className="text-[9px] uppercase tracking-wider text-brand-cream/60">Beauty Followers</span>
              </div>
            </div>
          </div>

          {/* Checklist items */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-cream">
              Strategy & Review Checklist
            </h3>
            {checklist.map((item) => (
              <div
                key={item.id}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  item.status === "approved"
                    ? "border-brand-gold/30 bg-brand-gold/5"
                    : "border-brand-blush/15 bg-brand-charcoal/30"
                }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/25 px-2.5 py-0.5 rounded mr-2">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-brand-cream mt-1">
                      {item.label}
                    </h4>
                    <p className="text-xs text-brand-cream/70 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleStatus(item.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0 ${
                      item.status === "approved"
                        ? "bg-brand-gold text-brand-charcoal"
                        : "border border-brand-blush/40 text-brand-blush hover:bg-brand-blush/10"
                    }`}
                  >
                    {item.status === "approved" ? "Approved" : "Awaiting Review"}
                  </button>
                </div>

                <div className="mt-3 border-t border-white/5 pt-3">
                  <label className="text-[9px] uppercase tracking-widest text-brand-cream/40 block mb-1">
                    Corrections or Custom Comment
                  </label>
                  <input
                    type="text"
                    placeholder="Enter structural corrections..."
                    value={feedbackNotes[item.id] || ""}
                    onChange={(e) => handleFeedbackChange(item.id, e.target.value)}
                    className="w-full rounded-lg border border-brand-cream/5 bg-brand-charcoal/50 px-3 py-2 text-xs text-brand-cream placeholder-brand-cream/30 focus:border-brand-blush/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Future expansion opportunities suggestion */}
          <div className="p-6 rounded-2xl border border-white/5 bg-brand-charcoal/30 space-y-4">
            <h3 className="font-serif text-xl font-bold text-brand-cream">
              Suggested Future Opportunities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-brand-cream/70">
              <div className="p-4 rounded-xl bg-brand-charcoal/50 border border-white/5 space-y-1">
                <span className="font-bold text-brand-blush block">Ecosystem Loyalty Card</span>
                <p className="text-[11px] leading-relaxed">
                  Implement a unified digital stamp card: beauty appointments reward popcorn vouchers, and event catering rewards lashes upgrades.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-brand-charcoal/50 border border-white/5 space-y-1">
                <span className="font-bold text-brand-gold block">Unified Schedule App</span>
                <p className="text-[11px] leading-relaxed">
                  Offer a single portal where event planners book popcorn stalls and schedule bridal hairstyle pamper sessions on the same calendar.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-brand-charcoal/50 border border-white/5 space-y-1">
                <span className="font-bold text-brand-blush block">Cross-Promotion Vlogs</span>
                <p className="text-[11px] leading-relaxed">
                  Showcase the behind-the-scenes founder journey on TikTok: prep work for a wig customization followed immediately by packing a sweet treat event hamper.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Approval actions & report compiler */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Approval Sign Off card */}
          <div className="p-6 rounded-3xl border border-brand-gold/30 bg-brand-charcoal/40 text-left space-y-6">
            <h3 className="font-serif text-xl font-bold text-brand-cream flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              Direction Approval
            </h3>
            
            <p className="text-xs text-brand-cream/80 leading-relaxed font-light">
              Are you satisfied with the upgraded editorial design direction, preloader flow, interactive worlds, and stats mockup? Sign off here.
            </p>

            {showApprovalSuccess ? (
              <div className="p-4 rounded-xl border border-brand-gold bg-brand-gold/10 text-center space-y-4">
                <div className="mx-auto h-9 w-9 rounded-full bg-brand-gold flex items-center justify-center text-brand-charcoal">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-brand-gold">Direction Signed Off!</h4>
                  <p className="text-[11px] text-brand-cream/70 mt-1">
                    Thank you! The current portfolio layout is approved for presentation deployment.
                  </p>
                </div>
                <button
                  onClick={handleSendApprovalWhatsApp}
                  className="w-full py-2.5 rounded-full bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-dark transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>Send Confirmation on WhatsApp</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleApproveDirection}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-charcoal text-xs font-bold uppercase tracking-widest hover:scale-[1.01] transition-transform cursor-pointer"
              >
                Approve This Direction
              </button>
            )}
          </div>

          {/* Feedback Report compiler */}
          <div className="p-6 rounded-3xl border border-brand-blush/20 bg-brand-charcoal/40 text-left space-y-6">
            <h3 className="font-serif text-xl font-bold text-brand-cream">
              Feedback Report
            </h3>
            <p className="text-xs text-brand-cream/80 leading-relaxed font-light">
              Approvals and revision notes are automatically compiled. Copy the raw report or send it directly via WhatsApp.
            </p>

            {/* Compiled text screen preview */}
            <div className="relative">
              <pre className="text-[9px] font-mono text-brand-cream/60 leading-relaxed overflow-y-auto max-h-[220px] p-4 bg-[#0E0B0B] border border-brand-cream/10 rounded-xl">
                {compileFeedbackText()}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 h-7 w-7 rounded bg-brand-charcoal/80 flex items-center justify-center text-brand-cream hover:text-brand-blush border border-brand-cream/10 transition-colors"
                title="Copy report text"
              >
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopy}
                className="w-full py-3.5 rounded-full border border-brand-cream/15 bg-brand-charcoal hover:bg-brand-charcoal-light text-xs font-semibold uppercase tracking-widest text-brand-cream transition-colors cursor-pointer"
              >
                {copied ? "Report Copied!" : "Copy Information Checklist"}
              </button>
              
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 rounded-full bg-brand-blush text-brand-charcoal text-xs font-bold uppercase tracking-widest hover:bg-brand-blush-dark transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Send Corrections on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
