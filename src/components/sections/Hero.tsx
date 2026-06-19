"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import TypingEffect from "@/components/ui/TypingEffect";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16 sm:pt-20">
      <ParticleBackground />

      <div className="cyber-grid pointer-events-none absolute inset-0 z-0" />
      <div className="pointer-events-none absolute -left-32 top-1/4 hidden h-96 w-96 rounded-full bg-accent/5 blur-3xl md:block" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 hidden h-96 w-96 rounded-full bg-accent-secondary/5 blur-3xl md:block" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
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

          <h1 className="max-w-4xl text-[1.65rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-muted sm:text-lg">
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
                "Automating infrastructure workflows...",
                "Building DevOps pipelines...",
                "Securing enterprise systems...",
                "Developing full stack applications...",
              ]}
            />
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
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
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground sm:px-6 sm:py-3"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="glass glass-hover inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-foreground sm:px-6 sm:py-3"
            >
              View Projects
            </a>
          </div>
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
