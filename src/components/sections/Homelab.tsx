"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homelab } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { useReducedMotion } from "@/lib/hooks";

type DiagramNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
};

export default function Homelab() {
  const [activeId, setActiveId] = useState<(typeof homelab.studyTracks)[number]["id"]>(
    homelab.studyTracks[0].id,
  );
  const reducedMotion = useReducedMotion();
  const activeTrack =
    homelab.studyTracks.find((t) => t.id === activeId) ?? homelab.studyTracks[0];

  return (
    <section id="homelab" className="section-padding section-divider scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="homelab-heading"
            label="Homelab Study"
            title={homelab.title}
            subtitle={homelab.subtitle}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div
            role="tablist"
            aria-label="Homelab study tracks"
            className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            {homelab.studyTracks.map((track) => {
              const isActive = track.id === activeId;
              return (
                <button
                  key={track.id}
                  type="button"
                  role="tab"
                  id={`homelab-tab-${track.id}`}
                  aria-selected={isActive}
                  aria-controls={`homelab-panel-${track.id}`}
                  onClick={() => setActiveId(track.id)}
                  className={`relative rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 sm:px-5 sm:py-3.5 sm:text-base ${
                    isActive
                      ? "glass text-foreground shadow-md ring-1 ring-accent/20"
                      : "border border-border bg-slate-50 text-muted hover:border-accent/20 hover:bg-white hover:text-foreground"
                  }`}
                  style={
                    isActive
                      ? {
                          borderColor: `${track.accent}40`,
                          boxShadow: `0 4px 20px ${track.accent}18`,
                        }
                      : undefined
                  }
                >
                  {isActive && (
                    <motion.span
                      layoutId="homelab-tab-indicator"
                      className="absolute inset-x-0 bottom-0 h-0.5 rounded-full"
                      style={{ backgroundColor: track.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {track.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTrack.id}
            role="tabpanel"
            id={`homelab-panel-${activeTrack.id}`}
            aria-labelledby={`homelab-tab-${activeTrack.id}`}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reducedMotion ? 0 : 0.35 }}
          >
            <p
              className="mb-8 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
              style={{ borderLeftColor: activeTrack.accent, borderLeftWidth: 3, paddingLeft: 12 }}
            >
              {activeTrack.description}
            </p>

            <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
              <div className="lg:col-span-3">
                <GlassCard className="p-4 sm:p-6 md:p-8" hover={false}>
                  <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent sm:mb-6">
                    Architecture Overview
                  </p>
                  <ArchitectureDiagram
                    nodes={[...activeTrack.nodes]}
                    connections={activeTrack.connections.map(([a, b]) => [a, b])}
                    accent={activeTrack.accent}
                  />
                </GlassCard>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:col-span-2">
                {activeTrack.categories.map((cat, i) => (
                  <motion.div
                    key={cat.title}
                    initial={reducedMotion ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reducedMotion ? 0 : i * 0.06, duration: 0.35 }}
                  >
                    <GlassCard className="p-3 sm:p-4">
                      <h4
                        className="mb-2 text-sm font-semibold"
                        style={{ color: activeTrack.accent }}
                      >
                        {cat.title}
                      </h4>
                      <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-md bg-slate-50 px-2 py-1 text-xs text-muted ring-1 ring-border"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
              {activeTrack.projects.map((project, i) => (
                <div
                  key={project}
                  className="glass glass-hover flex items-center gap-3 rounded-xl p-3 sm:p-4"
                  style={{
                    animationDelay: reducedMotion ? undefined : `${i * 50}ms`,
                  }}
                >
                  <span
                    className="flex h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: activeTrack.accent }}
                  />
                  <span className="text-xs text-muted sm:text-sm">{project}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function ArchitectureDiagram({
  nodes,
  connections,
  accent,
}: {
  nodes: DiagramNode[];
  connections: string[][];
  accent: string;
}) {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative min-h-[200px] w-full overflow-x-auto overflow-y-hidden rounded-xl border border-border bg-slate-50 sm:min-h-0 sm:aspect-[16/10]">
      <svg
        viewBox="0 0 100 90"
        className="h-full min-w-[280px] w-full sm:min-w-0"
        aria-hidden
      >
        {connections.map(([from, to]) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          if (!a || !b) return null;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y + 4}
              x2={b.x}
              y2={b.y + 4}
              stroke={accent}
              strokeOpacity="0.25"
              strokeWidth="0.3"
              strokeDasharray="1 1"
            />
          );
        })}
        {nodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x - 8}
              y={node.y}
              width="16"
              height="8"
              rx="1.5"
              fill="rgba(255,255,255,0.95)"
              stroke={node.color}
              strokeWidth="0.4"
              strokeOpacity="0.8"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="#475569"
              fontSize="2.2"
              fontFamily="monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
