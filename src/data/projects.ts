export type Project = {
  index: string;
  title: string;
  role: string;
  year: string;
  description: string;
  stack: string[];
  href: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "FutureAcademy",
    role: "Full-Stack — E-Learning Platform",
    year: "2026",
    description:
      "A comprehensive e-learning platform for selling educational courses. It features complex backend systems, an advanced inspection module, and a robust referral/affiliate program with automated earning tracking.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    href: "https://futureacademy.nullspecteracademy.ninja/ar/",
  },
  {
    index: "02",
    title: "Zameny",
    role: "Full-Stack — SaaS & E-Commerce Builder",
    year: "2026",
    description:
      "A powerful SaaS platform for generating and managing e-commerce stores. It integrates advanced smart tracking, robust security systems, and a Telegram bot that allows store owners to manage operations seamlessly without the web dashboard.",
    stack: ["Next.js", "Node.js", "MongoDB", "Telegram API"],
    href: "https://www.zameny.tech/home",
  },
  {
    index: "03",
    title: "Narvo",
    role: "Full-Stack — E-Commerce",
    year: "2026",
    description:
      "A fully-featured e-commerce clothing store engineered for a seamless shopping experience. It includes highly customized user features and a dedicated, comprehensive admin dashboard for inventory and order management.",
    stack: ["Next.js", "Node.js","Express", "MongoDB"],
    href: "https://www.narvo.online",
  },
  {
    index: "04",
    title: "BlogAI",
    role: "Full-Stack — AI Content Platform",
    year: "2026",
    description:
      "An automated, trend-tracking blogging platform powered by advanced AI. It analyzes the latest trends in real-time and autonomously generates full, engaging articles with zero manual intervention.",
    stack: ["Next.js", "Node.js", "MongoDB", "AI Integration"],
    href: "https://blogai.zameny.tech/",
  },
  {
    index: "05",
    title: "Zahra Store",
    role: "Full-Stack — E-Commerce",
    year: "2025",
    description:
      "A specialized, high-performance e-commerce store dedicated to selling premium honey. Built for speed and reliability, featuring a fully tailored professional dashboard for complete administrative control.",
    stack: ["Vue.js", "Node.js", "PostgreSQL"],
    href: "https://zahra-vue-store-frontend.vercel.app/",
  },
];