import { swGreen } from "./sw-img";

export type SoftwareProject = {
  index: string;
  title: string;
  tag: string;
  description: string;
  tools: string[];
  href: string;
  image?: { src: string; alt: string; caption: string };
};

export const softwareProjects: SoftwareProject[] = [
  {
    index: "01",
    title: "PhasorX",
    tag: "Electrical Software — Classic Control Simulator",
    description:
      "A web platform for designing and simulating classic control circuits. You build relay-logic panels on a canvas from electrical components like contactors, relays, timers, motors, push buttons and pilot lamps, save circuits to your account, and run them through the simulation API. Full-stack app with JWT authentication and per-user circuit storage.",
    tools: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    href: "https://phasor-x.vercel.app/",
  },
  {
    index: "02",
    title: "Vidzora",
    tag: "Automation — YouTube Shorts Pipeline",
    description:
      "A semi-automated YouTube Shorts generator controlled entirely from a Telegram bot. Send a topic and Gemini writes the script, then a Celery worker pipeline creates per-scene voiceover with edge-tts, pulls AI or stock visuals per scene, and renders the final video with MoviePy and FFmpeg. Every resource-intensive step waits for a human approval in the chat first, and the bot and worker stay decoupled through MongoDB as the single source of truth.",
    tools: ["Python", "aiogram", "Celery", "MongoDB", "Gemini API", "FFmpeg"],
    href: "https://github.com/abdelrhman445/Vidzora",
  },
  {
    index: "03",
    title: "GreenBuild Audit AI",
    tag: "AI Backend — Energy Audit Reports",
    description:
      "A FastAPI service for green-building and energy audits. It runs the audit as a conversation with Gemini, extracts a structured report from it, and generates a professional PDF. Built with support for multiple API keys and a lightweight HTML frontend.",
    tools: ["Python", "FastAPI", "Gemini API", "PDF Reports"],
    href: "https://greenaudit.nullspecteracademy.ninja/",
    image: { src: swGreen, alt: "GreenAudit energy audit wizard interface", caption: "Live app" },
  },
];
