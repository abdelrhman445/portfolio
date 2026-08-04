"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function AnimatedLines({
  lines,
  className = "",
  delay = 0,
  trigger = false,
  stagger = 0.09,
}: {
  lines: string[];
  className?: string;
  delay?: number;
  trigger?: boolean;
  stagger?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const els = containerRef.current?.querySelectorAll(".split-line > span");
      if (!els) return;
      gsap.from(els, {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",
        stagger,
        delay,
        scrollTrigger: trigger
          ? { trigger: containerRef.current, start: "top 85%" }
          : undefined,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      {lines.map((line, i) => (
        <span className="split-line" key={i}>
          <span className={className}>{line}</span>
        </span>
      ))}
    </div>
  );
}
