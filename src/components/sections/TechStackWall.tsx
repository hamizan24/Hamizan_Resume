"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TechLogo from "@/components/ui/TechLogo";
import { fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

export default function TechStackWall() {
  return (
    <section className="section-padding section-divider">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="tech-stack-heading"
            label="Tech Stack"
            title="Tools & technologies"
            subtitle="Platforms and tools used across infrastructure, DevOps, and development."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-7"
        >
          {techStack.map((tech) => (
            <motion.div key={tech.name} variants={fadeUp} transition={defaultTransition}>
              <TechLogo name={tech.name} slug={tech.slug} color={tech.color} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
