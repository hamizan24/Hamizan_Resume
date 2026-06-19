"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { skillCategories, techStack } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import SkillLevelBar from "@/components/ui/SkillLevelBar";
import TechLogo from "@/components/ui/TechLogo";
import { staggerContainer, fadeUp, defaultTransition, viewportOnce } from "@/lib/motion";

const skillTabs = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    categories: [
      "Infrastructure & Systems",
      "Networking & Security",
      "Tools & Platforms",
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    categories: ["DevOps & Automation"],
  },
  {
    id: "development",
    label: "Development",
    categories: ["Development", "Database"],
  },
] as const;

type SkillTabId = (typeof skillTabs)[number]["id"];

const icons: Record<string, ReactNode> = {
  server: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  network: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  ),
  devops: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
    </svg>
  ),
  monitor: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14a9 3 0 0 0 18 0V5" /><path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTabId>("infrastructure");
  const activeTabData = skillTabs.find((tab) => tab.id === activeTab) ?? skillTabs[0];
  const visibleCategories = skillCategories.filter((category) =>
    (activeTabData.categories as readonly string[]).includes(category.title),
  );

  return (
    <section id="skills" className="section-padding section-divider scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            label="Skills"
            title="Technical expertise"
            subtitle="Proficiency levels based on professional experience and ongoing self-development."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div
            role="tablist"
            aria-label="Skill categories"
            className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            {skillTabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`skills-tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`skills-panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 sm:px-5 sm:py-3.5 sm:text-base ${
                    isActive
                      ? "glass text-foreground shadow-md ring-1 ring-accent/20"
                      : "border border-border bg-slate-50 text-muted hover:border-accent/20 hover:bg-white hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skills-tab-indicator"
                      className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          key={activeTab}
          role="tabpanel"
          id={`skills-panel-${activeTab}`}
          aria-labelledby={`skills-tab-${activeTab}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {visibleCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              transition={defaultTransition}
              className="glass glass-hover group rounded-2xl p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                  {icons[category.icon]}
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <SkillLevelBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-14 sm:mt-16">
            <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
              Tools & Technologies
            </p>
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
        </Reveal>
      </div>
    </section>
  );
}
