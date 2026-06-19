"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillLevelLabel } from "@/lib/hooks";

type SkillLevelBarProps = {
  name: string;
  level: number;
  index: number;
};

export default function SkillLevelBar({ name, level, index }: SkillLevelBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const label = skillLevelLabel(level);

  return (
    <li ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="text-muted">{name}</span>
        <span className="shrink-0 font-mono text-[10px] text-accent">{label}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.7, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </li>
  );
}
