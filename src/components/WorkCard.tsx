"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

export default function WorkCard({ project }: { project: Project }) {
  // استخراج رقم المشروع (1, 2, 3...) من الـ index ("01", "02", "03"...)
  // عشان نقدر نربطه باسم الصورة project1.png وهكذا
  const projectNum = Number(project.index);

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative block border-b border-line py-10 md:py-12"
    >
      {/* الخط الجانبي الملون اللي بيظهر عند الـ Hover */}
      <motion.div
        variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ originY: 0 }}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
      />

      {/* الجزء العلوي للكارت (العنوان، الدور، التقنيات) */}
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

        <div className="md:col-span-3">
          <p className="text-muted mono-label">{project.role}</p>
          <p className="mono-label text-accent mt-3 inline-flex items-center gap-1.5 underline-offset-4 group-hover:underline">
            Visit live site <span aria-hidden="true">&#8599;</span>
          </p>
        </div>

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

      {/* الجزء المخفي اللي بيظهر عند الـ Hover (الوصف + الصورة) */}
      <motion.div
        variants={{
          rest: { opacity: 0, height: 0, marginTop: 0 },
          hover: { opacity: 1, height: "auto", marginTop: 24 },
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pl-6 md:pl-[8.4%] overflow-hidden flex flex-col md:flex-row gap-6 md:gap-10 items-start w-full"
      >
        <p className="max-w-xl text-muted leading-relaxed flex-1">
          {project.description}
        </p>
        
        {/* الصورة بتأثير زووم خفيف */}
        <div className="relative w-full md:w-72 lg:w-96 aspect-video rounded-xl overflow-hidden border border-line flex-shrink-0">
          <Image
            src={`/project${projectNum}.png`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </motion.div>
    </motion.a>
  );
        }
