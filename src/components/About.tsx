import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";

// إحصائيات بتعكس مجالك المزدوج (الكهرباء والبرمجة)
const STATS = [
  { value: "2", label: "Fields: Power Eng & Full Stack" },
  { value: "12", label: "Engineering & Web Projects" },
  { value: "20", label: "Tech Stack & Tools" },
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
            {/* عنوان بيعكس هندسة الكهرباء وتطوير الويب الشامل */}
            <AnimatedLines
              trigger
              lines={[
                "I engineer electrical power systems,",
                "and build robust full-stack web apps,",
                "from complex logic to seamless UIs.",
              ]}
            />
          </h2>

          <Reveal delay={0.15} className="mt-8 max-w-xl">
            {/* نبذة بتوضح إنك مهندس كهرباء ومطور بيبني كل حاجة، والـ E-commerce مجرد مثال */}
            <p className="text-muted text-lg leading-relaxed">
              I am an Electrical Power Engineer and a versatile Full Stack Developer. 
              I bring the rigorous, analytical problem-solving of engineering directly into 
              software development. Whether I am working on power systems or building 
              complex full-stack web applications—ranging from custom business tools to 
              high-performance e-commerce platforms—I engineer scalable, efficient, 
              and reliable solutions across the entire stack.
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
