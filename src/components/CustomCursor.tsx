"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // إيقاف الكود بالكامل لو الجهاز شاشة تاتش (موبايل/تابلت)
    if (window.matchMedia("(pointer: coarse)").matches) {
      if (dotRef.current) dotRef.current.style.display = "none";
      if (ringRef.current) ringRef.current.style.display = "none";
      if (glowRef.current) glowRef.current.style.display = "none";
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring) return;

    let ctx = gsap.context(() => {
      const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
      const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
      const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
      const glowX = glow ? gsap.quickTo(glow, "x", { duration: 0.9, ease: "power3.out" }) : null;
      const glowY = glow ? gsap.quickTo(glow, "y", { duration: 0.9, ease: "power3.out" }) : null;

      const onMove = (e: MouseEvent) => {
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
        if (glowX && glowY) { glowX(e.clientX); glowY(e.clientY); }
      };

      const interactiveSelector = "a, button, [data-cursor-hover]";

      const onOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest(interactiveSelector)) {
          // تكبير الحلقة الخارجية وتخفيف لونها شوية، وإخفاء النقطة الداخلية
          gsap.to(ring, { scale: 1.8, opacity: 0.5, duration: 0.3, ease: "power2.out" });
          gsap.to(dot, { scale: 0, duration: 0.3, ease: "power2.out" });
          
          // ممكن نسيب الكلاس ده لو فيه ألوان بتتغير من الـ CSS
          document.body.classList.add("cursor-hover");
        }
      };
      
      const onOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest(interactiveSelector)) {
          // إرجاع الحلقة والنقطة لحجمهم الطبيعي بنعومة
          gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
          
          document.body.classList.remove("cursor-hover");
        }
      };

      window.addEventListener("mousemove", onMove);
      document.addEventListener("mouseover", onOver);
      document.addEventListener("mouseout", onOut);

      return () => {
        window.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseover", onOver);
        document.removeEventListener("mouseout", onOut);
      };
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
