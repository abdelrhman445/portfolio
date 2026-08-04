"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
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
        <a href="#top" data-cursor-hover className="font-display text-lg tracking-tight">
          N<span className="text-accent">.</span>DEV
        </a>
        <ul className="hidden md:flex items-center gap-9 mono-label text-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} data-cursor-hover className="hover:text-fg transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          data-cursor-hover
          className="mono-label hidden md:inline-flex items-center gap-2 border border-line rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
        >
          Available for work
          <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
        </a>
      </nav>
    </motion.header>
  );
}
