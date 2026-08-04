import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";
import CopyEmailButton from "./CopyEmailButton";

const SOCIALS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="container-edge py-28 md:py-40">
      <Reveal>
        <p className="mono-label text-accent mb-6">Contact &mdash; 03</p>
      </Reveal>

      <h2 className="font-display leading-[0.95] tracking-tight text-[11vw] md:text-[6vw]">
        <AnimatedLines trigger lines={["Let's build", "something solid."]} />
      </h2>

      <div className="mt-14 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 border-t border-line pt-10">
        <Reveal>
          <CopyEmailButton />
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="flex items-center gap-6 mono-label text-muted">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  data-cursor-hover
                  className="hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
