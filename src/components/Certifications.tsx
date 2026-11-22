import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";

const CERTS = [
  {
    index: "01",
    title: "The Complete C Programming Course: Basic to Expert",
    issuer: "Udemy",
    date: "Nov 2025",
  },
  {
    index: "02",
    title: "Executive Diploma in Engineering Management",
    issuer: "Udemy",
    date: "Jun 2025",
  },
  {
    index: "03",
    title: "Cybersecurity Solution Architecture 301 (2025 Edition)",
    issuer: "Udemy",
    date: "Jun 2025",
  },
  {
    index: "04",
    title: "Web Hacking For Beginners",
    issuer: "Udemy",
    date: "Jun 2025",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="container-edge py-28 md:py-40 border-t border-line">
      <div className="mb-14 md:mb-20">
        <Reveal>
          <p className="mono-label text-accent mb-4">Certifications &mdash; 05</p>
        </Reveal>
        <h2 className="font-display text-3xl md:text-5xl tracking-tight">
          <AnimatedLines trigger lines={["Continuous learning,", "certified."]} />
        </h2>
        <Reveal>
          <p className="text-muted max-w-2xl mt-6 leading-relaxed">
            Structured coursework that backs the engineering and security side of
            my work, from low-level programming to engineering management.
          </p>
        </Reveal>
      </div>

      <div className="border-t border-line">
        {CERTS.map((c, i) => (
          <Reveal key={c.index} y={22} delay={i * 0.07} start="top 94%">
          <article
            className="border-b border-line py-8 md:py-10 pl-2 md:pl-6 grid md:grid-cols-12 gap-3 md:gap-6 items-start"
          >
            <span className="md:col-span-1 mono-label text-muted">{c.index}</span>
            <h3 className="md:col-span-7 font-display text-xl md:text-2xl tracking-tight">
              {c.title}
            </h3>
            <p className="md:col-span-2 mono-label text-muted">{c.issuer}</p>
            <p className="md:col-span-2 mono-label text-accent md:text-right">{c.date}</p>
          </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
