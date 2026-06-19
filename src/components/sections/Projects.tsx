"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="section-padding scroll-mt-24 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            label="Projects"
            title="Featured work"
            subtitle="Selected projects spanning full stack development, DevOps, and client solutions."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              variants={fadeUp}
              transition={defaultTransition}
              className={`glass glass-hover flex flex-col rounded-2xl p-6 md:p-8 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {project.featured && (
                <span className="mb-3 w-fit rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent ring-1 ring-accent/20">
                  Featured
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
              <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-white/[0.04] px-2.5 py-1 text-xs text-muted ring-1 ring-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.features.length > 0 && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
