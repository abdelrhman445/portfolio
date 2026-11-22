import { softwareProjects } from "@/data/software";
import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";

export default function SoftwareProjects() {
  return (
    <section id="software" className="container-edge py-28 md:py-40">
      <div className="mb-14 md:mb-20">
        <Reveal>
          <p className="mono-label text-accent mb-4">Software Projects &mdash; 04</p>
        </Reveal>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">
          <AnimatedLines trigger lines={["Software & automation", "projects."]} />
        </h2>
        <Reveal>
          <p className="text-muted max-w-2xl mt-6 leading-relaxed">
            Beyond client work, I build tools that mix software with my electrical
            background: simulators, automation pipelines and AI backends. The code
            for these is public on my GitHub.
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line">
        {softwareProjects.map((p) => (
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
                {p.image && (
                  <figure className="max-w-2xl mt-8">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-line bg-surface">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image.src} alt={p.image.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105" />
                    </div>
                    <figcaption className="mono-label text-muted mt-2">{p.image.caption}</figcaption>
                  </figure>
                )}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="mono-label inline-block mt-6 text-accent hover:text-fg transition-colors"
                >
                  {p.href.includes("github.com") ? "View on GitHub ↗" : "Visit live app ↗"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
