"use client";

import { motion } from "framer-motion";
import { devopsReadiness, careerGoals, education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding section-divider scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="certifications-heading"
            label="Education & DevOps Readiness"
            title="Learning path & career goals"
            subtitle="Formal network technology education plus active self-development toward DevOps and automation."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:hidden">
            {education.map((edu) => (
              <GlassCard key={edu.degree} className="p-4">
                <h3 className="text-sm font-semibold text-foreground">{edu.degree}</h3>
                <p className="mt-1 text-xs text-accent">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-muted">{edu.period}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              Career Goals
            </p>
            <div className="flex flex-wrap gap-3">
              {careerGoals.map((goal) => (
                <span
                  key={goal}
                  className="glass rounded-full px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border sm:px-5 sm:py-2.5"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
            DevOps Readiness — Self-Development
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-8"
          >
            {devopsReadiness.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={defaultTransition}
                className={`relative flex flex-col gap-4 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <span className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-white md:left-1/2" />

                <div className="w-full pl-10 md:w-1/2 md:pl-0">
                  <div
                    className={`glass glass-hover rounded-2xl p-5 sm:p-6 ${
                      i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-accent">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-muted ring-1 ring-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
