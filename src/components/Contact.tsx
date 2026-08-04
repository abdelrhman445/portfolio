import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";
import CopyEmailButton from "./CopyEmailButton";

// قمنا بوضع الروابط الحقيقية الخاصة بك هنا
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/abdelrhman445" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdelrahmanelsayed445" },
  { label: "YouTube", href: "https://www.youtube.com/@abdulrahman_albat" },
  { label: "TikTok", href: "https://www.tiktok.com/@abdulrhmanelbaty" },
  { label: "Instagram", href: "https://www.instagram.com/albati445/" },
  { label: "Facebook", href: "https://www.facebook.com/share/18NpWwA9Hv/" },
  { label: "Twitter", href: "https://x.com/GamoTek" },
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
          <ul className="flex items-center gap-6 mono-label text-muted flex-wrap">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank" // فتح الرابط في نافذة جديدة
                  rel="noopener noreferrer" // حماية إضافية للأمان
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