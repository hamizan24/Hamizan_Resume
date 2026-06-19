"use client";

import { motion } from "framer-motion";
import { certifications, careerGoals } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding scroll-mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            id="certifications-heading"
            label="Certifications & Goals"
            title="Skills validated & career path"
            subtitle="Continuous learning across infrastructure, security, DevOps, and development."
          />
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
                  className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground ring-1 ring-accent/20 transition-colors hover:ring-accent/40"
                >
                  {goal}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-white/[0.08] md:left-1/2 md:-translate-x-px" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-8"
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                transition={defaultTransition}
                className={`relative flex flex-col gap-4 md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden w-1/2 md:block" />
                <span className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-background md:left-1/2" />

                <div className="w-full pl-10 md:w-1/2 md:pl-0">
                  <div
                    className={`glass glass-hover rounded-2xl p-6 ${
                      i % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-foreground">{cert.title}</h3>
                      <span className="shrink-0 font-mono text-xs text-accent">
                        {cert.year}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg bg-accent/5 px-3 py-1.5 text-xs text-muted ring-1 ring-accent/10"
                        >
                          {item}
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
