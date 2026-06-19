"use client";

import { motion } from "framer-motion";
import { profile, socialProof } from "@/data/portfolio";
import TypingEffect from "@/components/ui/TypingEffect";
import TerminalCard from "@/components/ui/TerminalCard";
import ProfileAvatar from "@/components/ui/ProfileAvatar";
import { scrollToSection } from "@/lib/hooks";

export default function Hero() {
  const nameParts = profile.name.split(" ");
  const highlight = nameParts.slice(0, 2).join(" ");
  const rest = nameParts.slice(2).join(" ");

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-gradient-to-b from-white to-background pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 hero-grid-pattern opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(13,148,136,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-muted">
                Available for opportunities
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5">
              <ProfileAvatar />
              <h1 className="min-w-0 text-[1.65rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                <span className="gradient-text">{highlight}</span>
                {rest && <span> {rest}</span>}
              </h1>
            </div>

            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-accent sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-4 flex max-w-xl flex-wrap gap-2">
              {profile.roles.map((role) => (
                <span key={role} className="role-pill">
                  {role}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-accent sm:text-base">
              <TypingEffect
                texts={[
                  "Maintaining 99%+ server uptime...",
                  "Managing VMware & Hyper-V environments...",
                  "Building DevOps & CI/CD skills...",
                  "Developing React & Next.js applications...",
                ]}
              />
            </p>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {profile.heroSummary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a href={profile.resumeUrl} download className="btn-primary gap-2 sm:px-6 sm:py-3">
                <DownloadIcon />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="btn-secondary sm:px-6 sm:py-3"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects");
                }}
                className="btn-secondary sm:px-6 sm:py-3"
              >
                View Projects
              </a>
            </div>

            <div className="mt-10 lg:hidden">
              <TerminalCard />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6">
              {socialProof.map((item, i) => (
                <span key={item} className="flex items-center gap-4 text-xs text-muted sm:text-sm">
                  {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-border sm:inline" />}
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="hidden lg:sticky lg:top-24 lg:block"
          >
            <TerminalCard />
          </motion.div>
        </div>
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
