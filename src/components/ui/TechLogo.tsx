"use client";

import { useState } from "react";

type TechLogoProps = {
  name: string;
  slug: string;
  color: string;
};

const MUTED = "#94a3b8";

function withAlpha(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function TechLogo({ name, slug, color }: TechLogoProps) {
  const [hovered, setHovered] = useState(false);
  const iconUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;

  return (
    <div
      className="flex flex-col items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-white p-3 shadow-sm transition-all duration-300 md:h-20 md:w-20"
        style={{
          borderColor: hovered ? withAlpha(color, 0.45) : undefined,
          boxShadow: hovered ? `0 8px 24px ${withAlpha(color, 0.15)}` : undefined,
        }}
      >
        <div
          aria-label={name}
          role="img"
          className="h-8 w-8 transition-all duration-300 md:h-10 md:w-10"
          style={{
            backgroundColor: hovered ? color : MUTED,
            WebkitMask: `url(${iconUrl}) no-repeat center / contain`,
            mask: `url(${iconUrl}) no-repeat center / contain`,
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        />
      </div>
      <span
        className={`text-xs transition-colors duration-300 ${hovered ? "" : "text-muted"}`}
        style={hovered ? { color } : undefined}
      >
        {name}
      </span>
    </div>
  );
}
