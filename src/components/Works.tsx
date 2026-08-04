import { projects } from "@/data/projects";
import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";
import WorkCard from "./WorkCard";

export default function Works() {
  return (
    <section id="work" className="container-edge py-28 md:py-40">
      <div className="flex items-end justify-between mb-14 md:mb-20 gap-6 flex-wrap">
        <div>
          <Reveal>
            <p className="mono-label text-accent mb-4">Selected Work &mdash; 02</p>
          </Reveal>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">
            <AnimatedLines trigger lines={["A few things I've", "built recently."]} />
          </h2>
        </div>
        <Reveal>
          <p className="text-muted max-w-xs mono-label leading-relaxed">
            Replace this list with your own case studies &mdash; add links,
            screenshots, and outcomes for each.
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line">
        {projects.map((p) => (
          <WorkCard key={p.index} project={p} />
        ))}
      </div>
    </section>
  );
}
