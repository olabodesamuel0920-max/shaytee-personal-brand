"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Copy,
  MessageSquare,
  HelpCircle,
  TrendingUp,
  MapPin,
  Heart,
  ExternalLink,
} from "lucide-react";
import { founderData, ChecklistItem } from "@/lib/founderData";

export default function OwnerReviewPage() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(founderData.ownerChecklist);
  const [feedbackNotes, setFeedbackNotes] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

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

  // Compile all feedback details into a clean plain text block
  const compileFeedbackText = () => {
    let text = `SHAYTEE OWNER REVIEW REPORT\n\n`;

    checklist.forEach((item, idx) => {
      const statusSymbol = item.status === "approved" ? "[APPROVED]" : "[PENDING / NEEDS WORK]";
      text += `${idx + 1}. ${item.label}\n   Status: ${statusSymbol}\n`;
      if (feedbackNotes[item.id]) {
        text += `   Owner Note: "${feedbackNotes[item.id]}"\n`;
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

  const approvedCount = checklist.filter((item) => item.status === "approved").length;

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

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-8 text-left space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4 text-brand-gold" />
            Admin Review Panel
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-brand-cream">
            Owner Review Portal
          </h1>
          <p className="text-brand-cream/70 font-light text-base max-w-xl">
            Please use this checklist to review the current demo content, note approvals, and leave structural feedback for the site launch.
          </p>
        </div>

        {/* Progress Counter */}
        <div className="lg:col-span-4 p-6 rounded-3xl border border-brand-blush/10 bg-brand-charcoal/40 text-center space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-brand-cream/50 block">Checklist Progress</span>
          <span className="block text-4xl font-serif font-bold text-brand-blush">
            {approvedCount} / {checklist.length}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-brand-gold block font-semibold">
            {approvedCount === checklist.length ? "All Approved!" : "Reviewing Details"}
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Checklist details */}
        <div className="lg:col-span-8 space-y-6 text-left">
          {checklist.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                item.status === "approved"
                  ? "border-brand-gold/30 bg-brand-gold/5"
                  : "border-brand-blush/15 bg-brand-charcoal/30"
              }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-brand-gold bg-brand-gold/10 border border-brand-gold/25 px-2 py-0.5 rounded mr-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-cream mt-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-brand-cream/60 mt-1 leading-relaxed">
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
                  {item.status === "approved" ? "Approved" : "Pending Approval"}
                </button>
              </div>

              {/* Feedback note text field */}
              <div className="mt-4 border-t border-brand-cream/10 pt-4">
                <label className="text-[10px] uppercase tracking-widest text-brand-cream/40 block mb-1">
                  Add custom corrections or feedback notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Please update our handles to @shaytee.treats.studio..."
                  value={feedbackNotes[item.id] || ""}
                  onChange={(e) => handleFeedbackChange(item.id, e.target.value)}
                  className="w-full rounded-lg border border-brand-cream/5 bg-brand-charcoal/50 px-3 py-2 text-xs text-brand-cream placeholder-brand-cream/30 focus:border-brand-blush/30 focus:outline-none transition-colors"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-4 space-y-6">
          {/* Summary / Report Compiler */}
          <div className="p-6 rounded-3xl border border-brand-blush/15 bg-brand-charcoal/40 text-left space-y-6">
            <h3 className="font-serif text-xl font-bold text-brand-cream">
              Feedback Report
            </h3>
            <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
              Your approvals and feedback notes are automatically compiled here. You can copy the raw text report or send it directly to our development team on WhatsApp.
            </p>

            {/* Compiled text box */}
            <div className="relative">
              <pre className="text-[9px] font-mono text-brand-cream/60 leading-relaxed overflow-y-auto max-h-[220px] p-4 bg-[#0E0B0B] border border-brand-cream/10 rounded-xl">
                {compileFeedbackText()}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 h-7 w-7 rounded bg-brand-charcoal/80 flex items-center justify-center text-brand-cream hover:text-brand-blush border border-brand-cream/10 transition-colors"
                title="Copy report"
              >
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCopy}
                className="w-full py-3.5 rounded-full border border-brand-cream/20 bg-brand-charcoal hover:bg-brand-charcoal-light text-xs font-semibold uppercase tracking-widest text-brand-cream transition-colors cursor-pointer"
              >
                {copied ? "Copied to Clipboard!" : "Copy Raw Report"}
              </button>
              
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 rounded-full bg-brand-gold text-brand-charcoal text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-dark transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Quick links to review pages */}
          <div className="p-6 rounded-3xl border border-brand-cream/5 bg-brand-charcoal/50 text-left space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-brand-gold font-bold">Review Specific Pages:</h4>
            <div className="space-y-3 text-xs">
              <Link href="/" className="flex items-center justify-between text-brand-cream/80 hover:text-brand-blush transition-colors">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-brand-gold" />
                  <span>Home Portfolio (`/`)</span>
                </span>
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link href="/about" className="flex items-center justify-between text-brand-cream/80 hover:text-brand-blush transition-colors">
                <span className="flex items-center gap-1.5">
                  <Heart className="h-4 w-4 text-brand-gold" />
                  <span>About page (`/about`)</span>
                </span>
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link href="/brands" className="flex items-center justify-between text-brand-cream/80 hover:text-brand-blush transition-colors">
                <span className="flex items-center gap-1.5">
                  <TrendingUp className="h-4 w-4 text-brand-gold" />
                  <span>Brands Details (`/brands`)</span>
                </span>
                <ExternalLink className="h-3 w-3" />
              </Link>
              <Link href="/gallery" className="flex items-center justify-between text-brand-cream/80 hover:text-brand-blush transition-colors">
                <span className="flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4 text-brand-gold" />
                  <span>Gallery placeholders (`/gallery`)</span>
                </span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
