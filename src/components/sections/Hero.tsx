"use client";

import { motion } from "framer-motion";
import { profile, socialProof } from "@/data/portfolio";
import TypingEffect from "@/components/ui/TypingEffect";
import ParticleBackground from "@/components/ui/ParticleBackground";
import TerminalCard from "@/components/ui/TerminalCard";
import { scrollToSection } from "@/lib/hooks";

export default function Hero() {
  const nameParts = profile.name.split(" ");
  const highlight = nameParts.slice(0, 2).join(" ");
  const rest = nameParts.slice(2).join(" ");

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16 sm:pt-20">
      <ParticleBackground />

      <div className="cyber-grid pointer-events-none absolute inset-0 z-0" />
      <div className="pointer-events-none absolute -left-32 top-1/4 hidden h-96 w-96 rounded-full bg-accent/5 blur-3xl md:block" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 hidden h-96 w-96 rounded-full bg-accent-secondary/5 blur-3xl md:block" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-xs text-muted">
                Available for opportunities
              </span>
            </div>

            <p className="gradient-text text-lg font-semibold sm:text-xl md:text-2xl">
              {profile.tagline}
            </p>

            <h1 className="mt-4 max-w-4xl text-[1.65rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              <span className="gradient-text">{highlight}</span>
              {rest && (
                <span className="text-foreground"> {rest}</span>
              )}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted sm:text-base md:text-lg">
              {profile.roles.map((role, i) => (
                <span key={role} className="flex items-center gap-3">
                  {i > 0 && <span className="hidden text-accent/50 sm:inline">|</span>}
                  <span>{role}</span>
                </span>
              ))}
            </div>

            <p className="mt-6 font-mono text-sm sm:text-base">
              <TypingEffect
                texts={[
                  "Maintaining 99%+ server uptime...",
                  "Managing VMware & Hyper-V environments...",
                  "Building DevOps & CI/CD skills...",
                  "Automating infrastructure workflows...",
                ]}
              />
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {profile.intro}
            </p>

            <p className="mt-3 text-sm text-muted">
              {profile.location} · {profile.phone}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-all hover:brightness-110 glow-accent sm:px-6 sm:py-3"
              >
                <DownloadIcon />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground sm:px-6 sm:py-3"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects");
                }}
                className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground sm:px-6 sm:py-3"
              >
                View Projects
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.06] pt-6">
              {socialProof.map((item, i) => (
                <span key={item} className="flex items-center gap-4 text-xs text-muted sm:text-sm">
                  {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-accent/40 sm:inline" />}
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block"
          >
            <TerminalCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 lg:hidden"
        >
          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
