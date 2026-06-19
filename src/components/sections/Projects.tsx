"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectThumbnail from "@/components/ui/ProjectThumbnail";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-divider scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            label="Projects"
            title="Personal & homelab projects"
            subtitle="Self-initiated projects for learning and skill development — available to demonstrate upon request."
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
              className={`group glass glass-hover flex flex-col overflow-hidden rounded-2xl ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <ProjectThumbnail
                name={project.name}
                image={project.image}
                accent={project.accent}
                icon={project.icon}
              />

              <div className="flex flex-1 flex-col p-6 md:p-8">
                {project.personal && (
                  <span className="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent ring-1 ring-blue-100">
                    Personal Project
                  </span>
                )}
                {project.featured && !project.personal && (
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
                      className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs text-muted ring-1 ring-border"
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

                {(project.github || project.demo) && (
                  <div className="mt-5 flex gap-4 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent hover:underline"
                      >
                        View on GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-accent hover:underline"
                      >
                        Live demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
