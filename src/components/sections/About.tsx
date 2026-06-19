import { profile, stats, education } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-20 sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            id="about-heading"
            label="About Me"
            title="Infrastructure meets DevOps"
            subtitle={profile.about}
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-3">
          <Reveal className="col-span-2 row-span-2 md:col-span-2 md:row-span-2">
            <GlassCard className="flex h-full min-h-[220px] flex-col p-5 sm:min-h-0 sm:p-7" hover={false}>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Professional Summary
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {profile.intro}
              </p>
              <p className="mt-4 border-t border-white/[0.06] pt-4 text-sm text-muted">
                {profile.location}
              </p>
            </GlassCard>
          </Reveal>

          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.05 + i * 0.04}
              className={i === 4 ? "col-span-2 md:col-span-2 md:col-start-3" : ""}
            >
              <AnimatedCounter
                value={stat.value}
                label={stat.label}
                index={i}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mb-4 mt-10 font-mono text-xs uppercase tracking-wider text-muted sm:mt-12">
            Education
          </p>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {education.map((edu) => (
              <GlassCard key={edu.degree} className="p-5 sm:p-6">
                <h3 className="font-semibold leading-snug text-foreground">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-accent">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-muted">{edu.period}</p>
                <ul className="mt-4 space-y-2">
                  {edu.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-xs text-muted sm:text-sm"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
