"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function Reveal({
  children,
  className = "",
  y = 40,
  delay = 0,
  start = "top 82%",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(ref.current, { opacity: 1, y: 0 });
        return;
      }
      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
