import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";

const STATS = [
  { value: "5+", label: "Years shipping products" },
  { value: "20+", label: "Projects launched" },
  { value: "2", label: "Roles: frontend & backend" },
];

export default function About() {
  return (
    <section id="about" className="container-edge py-28 md:py-40">
      <div className="grid md:grid-cols-12 gap-10 md:gap-6">
        <div className="md:col-span-3">
          <Reveal>
            <p className="mono-label text-accent">About &mdash; 01</p>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <h2 className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
            <AnimatedLines
              trigger
              lines={[
                "I work across the whole stack",
                "so the product feels considered",
                "at every layer, not just the UI.",
              ]}
            />
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-xl">
            <p className="text-muted text-lg leading-relaxed">
              My focus is turning ambiguous product ideas into reliable,
              maintainable software &mdash; API design, data modelling,
              real-time features, and the interface layer that ties it
              together. I care as much about how a dashboard feels to use
              as I do about how the database is indexed.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <p className="font-display text-3xl md:text-4xl text-fg">
                  {s.value}
                </p>
                <p className="mono-label text-muted mt-2">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
