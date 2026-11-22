"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import AnimatedLines from "./AnimatedLines";
import CopyEmailButton from "./CopyEmailButton";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // تم إضافة الرابط الخاص بك هنا بنجاح
      const response = await fetch("https://formspree.io/f/mrpzzvqr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // تفريغ الخانات بعد الإرسال
        
        // إخفاء رسالة النجاح بعد 5 ثواني
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container-edge py-28 md:py-40">
      <div className="grid lg:grid-cols-2 gap-20 lg:gap-12 items-start">
        
        {/* النصف الأيسر */}
        <div>
          <Reveal>
            <p className="mono-label text-accent mb-6">Contact &mdash; 05</p>
          </Reveal>

          <h2 className="font-display leading-[0.95] tracking-tight text-[11vw] md:text-[6vw]">
            <AnimatedLines trigger lines={["Let's build", "something solid."]} />
          </h2>

          <div className="mt-14 flex flex-col md:flex-row lg:flex-col xl:flex-row md:items-start xl:items-center gap-8 md:gap-12 border-t border-line pt-10">
            <Reveal>
              <CopyEmailButton />
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="flex items-center gap-6 mono-label text-muted flex-wrap">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
        </div>

        {/* النصف الأيمن: نموذج التواصل */}
        <Reveal delay={0.2}>
          <form 
            className="flex flex-col gap-10 w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto mt-4 lg:mt-0"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2 group">
                <label htmlFor="name" className="mono-label text-muted group-focus-within:text-accent transition-colors">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={status === "loading"}
                  className="bg-transparent border-b border-line pb-3 text-fg focus:outline-none focus:border-accent transition-colors w-full disabled:opacity-50"
                  placeholder="your name"
                />
              </div>

              <div className="flex flex-col gap-2 group">
                <label htmlFor="email" className="mono-label text-muted group-focus-within:text-accent transition-colors">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === "loading"}
                  className="bg-transparent border-b border-line pb-3 text-fg focus:outline-none focus:border-accent transition-colors w-full disabled:opacity-50"
                  placeholder="yourgmail@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 group">
              <label htmlFor="subject" className="mono-label text-muted group-focus-within:text-accent transition-colors">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                disabled={status === "loading"}
                className="bg-transparent border-b border-line pb-3 text-fg focus:outline-none focus:border-accent transition-colors w-full disabled:opacity-50"
                placeholder="subject of your message"
              />
            </div>

            <div className="flex flex-col gap-2 group">
              <label htmlFor="message" className="mono-label text-muted group-focus-within:text-accent transition-colors">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={status === "loading"}
                className="bg-transparent border-b border-line pb-3 text-fg focus:outline-none focus:border-accent transition-colors w-full resize-none disabled:opacity-50"
                placeholder="Tell me about your project . . ."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={status === "loading"}
                data-cursor-hover
                className="mono-label flex items-center gap-3 border border-line rounded-full px-8 py-4 hover:border-accent hover:text-accent transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending . . ." : "Send Message"}
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:bg-accent-2 animate-pulse transition-colors" />
              </button>
              
              {/* رسائل النجاح أو الخطأ */}
              {status === "success" && (
                <p className="mt-4 text-accent mono-label">Message sent successfully! I'll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="mt-4 text-red-500 mono-label">Oops! Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  );
}
