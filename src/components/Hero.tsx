"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import AnimatedLines from "./AnimatedLines";

const FloatingKnot = dynamic(() => import("./canvas/FloatingKnot"), { ssr: false });
const StarField = dynamic(() => import("./canvas/StarField"), { ssr: false });

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 -z-20">
        <StarField />
      </div>
      <div className="absolute inset-0 -z-10 opacity-90 [mask-image:radial-gradient(circle_at_65%_45%,black,transparent_70%)]">
        <FloatingKnot />
      </div>

      <div className="container-edge pt-40 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mono-label text-accent mb-6"
        >
          /// Full-Stack Engineer &mdash; Product-minded
        </motion.p>

        <h1 className="font-display font-medium leading-[0.92] text-[13vw] md:text-[7.2vw] tracking-tight max-w-5xl">
          <AnimatedLines
            lines={["Building systems", "people actually", "rely on."]}
            delay={0.55}
          />
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-line pt-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className="text-muted max-w-md text-base md:text-lg"
          >
            I design and ship end-to-end web products &mdash; from database
            schema to the pixel that ships. Currently building multi-tenant
            SaaS platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.7 }}
            className="flex items-center gap-6 mono-label text-muted"
          >
            <span className="text-fg">Based in Egypt</span>
            <span className="w-8 line-hair" />
            <span>Scroll</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
