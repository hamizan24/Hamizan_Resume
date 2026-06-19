"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  label: string;
  index: number;
};

function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export default function AnimatedCounter({ value, label, index }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * num);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, num]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass glass-hover rounded-xl p-4 text-center sm:rounded-2xl sm:p-6"
    >
      <p className="text-2xl font-bold text-accent sm:text-3xl md:text-4xl">
        {isInView ? count : 0}
        {suffix}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug text-muted sm:mt-2 sm:text-sm">{label}</p>
    </motion.div>
  );
}
