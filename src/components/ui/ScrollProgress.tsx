"use client";

import { useScrollProgress } from "@/lib/hooks";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-white/[0.04]">
      <div
        className="h-full bg-gradient-to-r from-accent to-accent-secondary transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden
      />
    </div>
  );
}
