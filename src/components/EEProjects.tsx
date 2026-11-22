"use client";

import { eeProjects } from "@/data/ee";
import { motion } from "motion/react";
import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";

export default function EEProjects() {
  return (
    <section id="electrical" className="container-edge py-28 md:py-40">
      <div className="mb-14 md:mb-20">
        <Reveal>
          <p className="mono-label text-accent mb-4">Electrical Engineering &mdash; 03</p>
        </Reveal>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">
          <AnimatedLines trigger lines={["Electrical Engineering", "Projects."]} />
        </h2>
        <Reveal>
          <p className="text-muted max-w-2xl mt-6 leading-relaxed">
            I&apos;m a third-year Electrical Power student at Zagazig University. These are
            lab and simulation projects from my coursework, mostly power electronics in
            MATLAB/Simulink.
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line">
        {eeProjects.map((p, i) => (
          <Reveal key={p.index} y={30} delay={i * 0.06} start="top 92%">
          <motion.article
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

            <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start pl-6">
              <span className="md:col-span-1 mono-label text-muted">{p.index}</span>
              <div className="md:col-span-11">
                <motion.h3
                  variants={{ rest: { x: 0 }, hover: { x: 12 } }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl md:text-3xl tracking-tight"
                >
                  {p.title}
                </motion.h3>
                <p className="mono-label text-muted mt-2">{p.tag}</p>
                <p className="text-muted leading-relaxed max-w-3xl mt-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tools.map((t) => (
                    <span key={t} className="mono-label text-muted border border-line rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="mono-label inline-block mt-6 text-accent hover:text-fg transition-colors"
                  >
                    Open lab files on Drive ↗
                  </a>
                )}
                {p.images && (
                  <div className="grid sm:grid-cols-3 gap-4 mt-8">
                    {p.images.map((im) => (
                      <figure key={im.src}>
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-line bg-surface">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={im.src} alt={im.alt} loading="lazy" className="absolute inset-0 w-full h-full object-contain bg-white transition-transform duration-700 ease-out group-hover:scale-105" />
                        </div>
                        <figcaption className="mono-label text-muted mt-2">{im.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
            }
