const SKILLS = [
  "Next.js",
  "Node.js",
  "TypeScript",
  "MongoDB",
  "React",
  "Express",
  "Socket.IO",
  "Tailwind CSS",
  "GSAP",
  "Three.js",
  "REST APIs",
  "Payment Gateways",
];

export default function SkillsMarquee() {
  const track = [...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="py-10 border-y border-line overflow-hidden">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {track.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 font-display text-3xl md:text-5xl text-muted/70 whitespace-nowrap"
          >
            {skill}
            <span className="text-accent text-2xl">&#9670;</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
