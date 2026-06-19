"use client";

import { useEffect, useState } from "react";

type TypingEffectProps = {
  texts: string[];
  speed?: number;
  pause?: number;
};

export default function TypingEffect({
  texts,
  speed = 60,
  pause = 2000,
}: TypingEffectProps) {
  const [display, setDisplay] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setDisplay(current.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          if (charIndex > 0) {
            setDisplay(current.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, pause, speed, textIndex, texts]);

  return (
    <span className="font-mono text-accent">
      {display}
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-accent align-middle" />
    </span>
  );
}
