"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.href}
      data-cursor-hover
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative block border-b border-line py-10 md:py-12"
    >
      <motion.div
        variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
      />

      <div className="grid md:grid-cols-12 items-center gap-4 md:gap-6 pl-6">
        <span className="md:col-span-1 mono-label text-muted">
          {project.index}
        </span>

        <motion.h3
          variants={{ rest: { x: 0 }, hover: { x: 12 } }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 font-display text-3xl md:text-4xl tracking-tight"
        >
          {project.title}
        </motion.h3>

        <p className="md:col-span-3 text-muted mono-label">{project.role}</p>

        <div className="md:col-span-3 flex md:justify-end flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="mono-label text-muted border border-line rounded-full px-3 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <motion.p
        variants={{
          rest: { opacity: 0, height: 0, marginTop: 0 },
          hover: { opacity: 1, height: "auto", marginTop: 16 },
        }}
        transition={{ duration: 0.3 }}
        className="pl-6 md:pl-[8.4%] max-w-xl text-muted overflow-hidden"
      >
        {project.description}
      </motion.p>
    </motion.a>
  );
}
