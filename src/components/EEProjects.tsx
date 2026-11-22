import { eeProjects } from "@/data/ee";
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
        {eeProjects.map((p) => (
          <article key={p.index} className="border-b border-line py-10 md:py-12 pl-2 md:pl-6">
            <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
              <span className="md:col-span-1 mono-label text-muted">{p.index}</span>
              <div className="md:col-span-11">
                <h3 className="font-display text-2xl md:text-3xl tracking-tight">{p.title}</h3>
                <p className="mono-label text-muted mt-2">{p.tag}</p>
                <p className="text-muted leading-relaxed max-w-3xl mt-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tools.map((t) => (
                    <span key={t} className="mono-label text-muted border border-line rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                {p.images && (
                  <div className="grid sm:grid-cols-3 gap-4 mt-8">
                    {p.images.map((im) => (
                      <figure key={im.src}>
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-line bg-surface">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={im.src} alt={im.alt} loading="lazy" className="absolute inset-0 w-full h-full object-contain bg-white" />
                        </div>
                        <figcaption className="mono-label text-muted mt-2">{im.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
