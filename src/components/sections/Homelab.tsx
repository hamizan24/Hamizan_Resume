"use client";

import { motion } from "framer-motion";
import { homelab } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

export default function Homelab() {
  return (
    <section id="homelab" className="section-padding scroll-mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            id="homelab-heading"
            label="Homelab"
            title={homelab.title}
            subtitle="Self-hosted environment for learning, testing, and building production-grade workflows."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <GlassCard className="p-6 md:p-8" hover={false}>
              <p className="mb-6 font-mono text-xs uppercase tracking-wider text-accent">
                Architecture Overview
              </p>
              <ArchitectureDiagram />
            </GlassCard>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              {homelab.categories.map((cat) => (
                <GlassCard key={cat.title} className="p-4">
                  <h4 className="mb-2 text-sm font-semibold text-accent">{cat.title}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {homelab.projects.map((project) => (
            <motion.div
              key={project}
              variants={fadeUp}
              transition={defaultTransition}
              className="glass glass-hover flex items-center gap-3 rounded-xl p-4"
            >
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-accent" />
              <span className="text-sm text-muted">{project}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { id: "esxi", label: "VMware ESXi", x: 50, y: 12, color: "#607078" },
    { id: "hyperv", label: "Hyper-V", x: 85, y: 12, color: "#0078D4" },
    { id: "docker", label: "Docker", x: 15, y: 45, color: "#2496ED" },
    { id: "jenkins", label: "Jenkins", x: 50, y: 45, color: "#D24939" },
    { id: "gitlab", label: "GitLab CI", x: 85, y: 45, color: "#FC6D26" },
    { id: "grafana", label: "Grafana", x: 25, y: 78, color: "#F46800" },
    { id: "prom", label: "Prometheus", x: 60, y: 78, color: "#E6522C" },
    { id: "github", label: "GitHub", x: 90, y: 78, color: "#ffffff" },
  ];

  const connections = [
    ["esxi", "docker"],
    ["hyperv", "docker"],
    ["docker", "jenkins"],
    ["jenkins", "gitlab"],
    ["docker", "grafana"],
    ["grafana", "prom"],
    ["jenkins", "github"],
  ];

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-white/[0.02] ring-1 ring-white/[0.06]">
      <svg viewBox="0 0 100 90" className="h-full w-full" aria-hidden>
        {connections.map(([from, to]) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y + 4}
              x2={b.x}
              y2={b.y + 4}
              stroke="rgba(0,212,170,0.2)"
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
              fill="rgba(255,255,255,0.04)"
              stroke={node.color}
              strokeWidth="0.3"
              strokeOpacity="0.6"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="#8b9cb3"
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
