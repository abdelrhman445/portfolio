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
    title: "Project One",
    role: "Full-Stack \u2014 Web App",
    year: "2025",
    description:
      "Placeholder description. Replace with a short summary of the problem, your role, and the outcome \u2014 two sentences is enough.",
    stack: ["Next.js", "Node.js", "MongoDB"],
    href: "#",
  },
  {
    index: "02",
    title: "Project Two",
    role: "Frontend \u2014 Dashboard",
    year: "2024",
    description:
      "Placeholder description. Replace with a short summary of the problem, your role, and the outcome \u2014 two sentences is enough.",
    stack: ["React", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    index: "03",
    title: "Project Three",
    role: "Backend \u2014 API & Integrations",
    year: "2024",
    description:
      "Placeholder description. Replace with a short summary of the problem, your role, and the outcome \u2014 two sentences is enough.",
    stack: ["Express", "Socket.IO", "Redis"],
    href: "#",
  },
];
