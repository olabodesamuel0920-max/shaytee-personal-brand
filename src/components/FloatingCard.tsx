import React from "react";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blush" | "gold";
  animationDelay?: string;
  animateDirection?: "up" | "down" | "none";
}

export default function FloatingCard({
  children,
  className = "",
  glowColor = "blush",
  animationDelay = "0s",
  animateDirection = "none",
}: FloatingCardProps) {
  // Determine animation classes
  let animationClass = "";
  if (animateDirection === "up") {
    animationClass = "animate-float";
  } else if (animateDirection === "down") {
    animationClass = "animate-float-reverse";
  }

  // Determine glow classes
  const glowStyle =
    glowColor === "blush"
      ? "glass-card-blush shadow-[0_8px_32px_rgba(244,181,193,0.08)]"
      : "glass-card-gold shadow-[0_8px_32px_rgba(223,186,115,0.08)]";

  return (
    <div
      className={`glass-panel-hover glass-panel rounded-2xl p-6 ${glowStyle} ${animationClass} ${className}`}
      style={{ animationDelay }}
    >
      {/* Visual Accent Corner Glow */}
      <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-radial from-brand-blush/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
