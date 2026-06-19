import { profile, stats } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="section-padding scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            id="about-heading"
            label="About Me"
            title="Infrastructure meets DevOps"
            subtitle={profile.about}
          />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
