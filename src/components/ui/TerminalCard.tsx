"use client";

import { useEffect, useState } from "react";
import { stats } from "@/data/portfolio";
import { useReducedMotion } from "@/lib/hooks";

const lines = [
  { prompt: "$ whoami", output: "hamizan@infrastructure" },
  { prompt: "$ uptime", output: "99%+ server availability" },
  { prompt: "$ experience", output: "3+ years IT & infrastructure" },
  { prompt: "$ role", output: "DevOps transition in progress" },
  { prompt: "$ status", output: "Open to opportunities" },
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setVisibleLines(lines.length);
      return;
    }

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleLines(count);
      if (count >= lines.length) clearInterval(interval);
    }, 400);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="glass overflow-hidden rounded-2xl ring-1 ring-white/[0.08]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-[10px] text-muted">hamizan@homelab ~</span>
      </div>

      <div className="space-y-2 p-4 font-mono text-xs sm:p-5 sm:text-sm">
        {lines.slice(0, visibleLines).map((line) => (
          <div key={line.prompt}>
            <p className="text-accent-secondary">{line.prompt}</p>
            <p className="text-muted">&gt; {line.output}</p>
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-accent" />
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 border-t border-white/[0.06] bg-white/[0.02] p-3 sm:grid-cols-3">
        {stats.slice(0, 3).map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white/[0.03] px-2 py-2 text-center">
            <p className="text-sm font-bold text-accent">{stat.value}</p>
            <p className="text-[10px] leading-tight text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
