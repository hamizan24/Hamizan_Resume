"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="section-padding scroll-mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="experience-heading"
            label="Experience"
            title="Professional journey"
            subtitle="Hands-on experience in enterprise IT infrastructure and technical support."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent md:left-[11px]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="space-y-8"
          >
            {experience.map((job) => (
              <motion.div
                key={job.company}
                variants={fadeUp}
                transition={defaultTransition}
                className="relative pl-8 md:pl-12"
              >
                <span className="absolute left-0 top-6 h-[18px] w-[18px] rounded-full border-2 border-accent bg-background md:h-[22px] md:w-[22px]" />

                <div className="glass glass-hover rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        {job.role}
                      </h3>
                      <p className="text-accent">{job.company}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted md:text-sm">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {job.achievements.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
