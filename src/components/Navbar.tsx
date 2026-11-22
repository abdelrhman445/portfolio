"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

// تم تغيير "Work" إلى "Projects"
const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#electrical", label: "Electrical" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // دالة السكرول الناعم بالتعاون مع Lenis
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : ""
      }`}
    >
      <nav className="container-edge flex items-center justify-between h-20">
        <a 
          href="#top" 
          onClick={(e) => handleSmoothScroll(e, "#top")}
          data-cursor-hover 
          className="font-display text-lg tracking-tight uppercase"
        >
          A<span className="text-accent">.</span>ELSAYED
        </a>
        
        <ul className="hidden md:flex items-center gap-9 mono-label text-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a 
                href={l.href} 
                onClick={(e) => handleSmoothScroll(e, l.href)}
                data-cursor-hover 
                className="hover:text-fg transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* تجميع الأزرار في حاوية واحدة لترتيبهم بجانب بعض */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* زرار تحميل السيرة الذاتية (CV) */}
          <a
            href="/cv.pdf" // مسار ملف الـ CV
            download="AbdUlrahman_Elsayed_CV.pdf" // الاسم اللي هينزل بيه الملف
            data-cursor-hover
            className="mono-label flex items-center gap-2 border border-line rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
          >
            Download CV
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

          {/* زرار Available for work الأصلي */}
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            data-cursor-hover
            className="mono-label flex items-center gap-2 border border-line rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
          >
            Available for work
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
          </a>
          
        </div>
      </nav>
    </motion.header>
  );
} 
