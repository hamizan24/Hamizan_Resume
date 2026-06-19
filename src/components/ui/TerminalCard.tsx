"use client";

import { useEffect, useState } from "react";
import { stats } from "@/data/portfolio";
import { useReducedMotion } from "@/lib/hooks";

const lines = [
  { prompt: "Status", output: "Open to opportunities" },
  { prompt: "Experience", output: "3+ years IT & infrastructure" },
  { prompt: "Uptime", output: "99%+ server availability" },
  { prompt: "Focus", output: "DevOps, automation & web development" },
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
    }, 350);

    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md ring-1 ring-slate-100">
      <div className="flex items-center justify-between border-b border-border bg-slate-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
          Professional Overview
        </p>
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-medium text-emerald-700">
          Active
        </span>
      </div>

      <div className="space-y-3 p-4 sm:p-5">
        {lines.slice(0, visibleLines).map((line) => (
          <div key={line.prompt} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
            <span className="text-xs font-medium text-muted">{line.prompt}</span>
            <span className="text-right text-xs font-semibold text-foreground">{line.output}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-border bg-slate-50/80 p-3">
        {stats.slice(0, 3).map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border bg-white px-2 py-2 text-center">
            <p className="text-sm font-bold text-accent">{stat.value}</p>
            <p className="text-[10px] leading-tight text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
