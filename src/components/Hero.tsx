"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { profileImg } from "@/data/profile-img";
import { motion } from "motion/react";
import AnimatedLines from "./AnimatedLines";

const HeroPlanet = dynamic(() => import("./canvas/HeroPlanet"), { ssr: false });
const StarField = dynamic(() => import("./canvas/StarField"), { ssr: false });

// WebGL 3D only on devices that can afford it: desktop-width viewports with
// enough CPU cores, not saving data, and no reduced-motion preference.
// Mobile/weak devices get a static styled fallback instead of the heavy scene.
function useCanRender3D() {
  const [can, setCan] = useState(false);
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    const saveData = conn?.saveData === true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCan(wide && !saveData && !reduced);
  }, []);
  return can;
}

export default function Hero() {
  const canRender3D = useCanRender3D();

  // دالة السكرول الناعم لزرار Scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden flex flex-col justify-end">
      {canRender3D ? (
        <>
          <div className="absolute inset-0 -z-20">
            <StarField />
          </div>
          <div className="absolute inset-0 -z-10 opacity-90 [mask-image:radial-gradient(circle_at_65%_45%,black,transparent_70%)]">
            <HeroPlanet />
          </div>
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-70 [background:radial-gradient(circle_at_65%_45%,rgba(255,122,51,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(120,140,255,0.12),transparent_50%)]"
        />
      )}

      <div className="container-edge pt-40 pb-16 md:pb-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row justify-between lg:items-center gap-12 lg:gap-8">
          
          {/* الجزء الأيسر: النصوص الأصلية */}
          <div className="flex-1 w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mono-label text-accent mb-6"
            >
              {/* هنا حطينا اسمك والمسمى الوظيفي المزدوج بوضوح */}
              /// AbdUlrahman Elsayed &mdash; Power Eng & Full-Stack Dev
            </motion.p>

            <h1 className="font-display font-medium leading-[0.92] text-[13vw] md:text-[7vw] lg:text-[5.5vw] tracking-tight max-w-3xl">
              {/* عنوان قوي بيجمع بين هندسة الطاقة وبناء أنظمة الويب */}
              <AnimatedLines
                lines={["Engineering Power,", "Architecting", "Web Systems."]}
                delay={0.55}
              />
            </h1>
          </div>

          {/* الجزء الأيمن: الصورة الشخصية */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-56 h-72 md:w-72 md:h-96 lg:w-[340px] lg:h-[440px] flex-shrink-0 group mx-auto lg:mx-0"
          >
            {/* الإطار الخلفي: بيلف للناحية التانية ويكبر شوية لما تعمل Hover */}
            <div className="absolute inset-0 border border-line rounded-2xl -rotate-6 scale-105 bg-surface-2/30 backdrop-blur-sm -z-10 transition-all duration-500 ease-out group-hover:rotate-3 group-hover:scale-110 group-hover:border-accent/40" />
            
            {/* الصورة: ملونة دايماً، ولما تلمسها بتترفع لفوق، بتكبر سنة، وتنور، وتاخد Glow */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profileImg}
              alt="AbdUlrahman Elsayed"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500 ease-out border border-line group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:border-accent/50 group-hover:shadow-[0_20px_40px_-15px_rgba(255,122,51,0.25)] group-hover:brightness-110"
            />
          </motion.div>
        </div>

        {/* الجزء السفلي: الوصف وزرار السكرول */}
        <div className="mt-16 lg:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-line pt-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="text-muted max-w-md text-base md:text-lg"
          >
            {/* وصف بيبين إنك بتستخدم العقلية الهندسية في بناء أي نظام ويب من الصفر */}
            I apply the analytical rigor of an Electrical Power Engineer to design and ship versatile, end-to-end full-stack web applications &mdash; from database architecture to the final pixel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.7 }}
            className="flex items-center gap-6 mono-label text-muted"
          >
            <span className="text-fg">Based in Egypt</span>
            <span className="w-8 line-hair" />
            {/* تم تحويل Scroll إلى زرار تفاعلي */}
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, "#about")}
              data-cursor-hover
              className="hover:text-accent transition-colors"
            >
              Scroll
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
