<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&size=32&duration=3000&pause=1000&color=49D9C2&center=true&vCenter=true&width=700&lines=Engineering+Power%2C;Architecting+Web+Systems.;Full-Stack+Portfolio+%E2%80%94+Next.js+16" alt="Typing SVG" />

### AbdUlrahman Elsayed — Power Engineer &amp; Full‑Stack Developer

<p>
  <img src="https://img.shields.io/badge/Next.js-16.3-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19.2-149ECA?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-R3F-black?style=for-the-badge&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-EF3390?style=for-the-badge&logo=framer&logoColor=white" />
</p>

<p>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Lenis-Smooth_Scroll-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square" />
</p>

<br/>

<img src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" width="500">

</div>

<br/>

## ⟶ Overview

A cinematic, motion-driven **developer portfolio** built with the Next.js App Router. It blends a real-time **3D planet scene** rendered with Three.js / React Three Fiber, GSAP-choreographed text reveals, Framer Motion micro-interactions, a custom magnetic cursor, and buttery Lenis smooth-scrolling — all wrapped in a minimal, editorial dark UI.

The site introduces AbdUlrahman as both an **Electrical Power Engineer** and a **Full-Stack Web Developer**, showcasing production-grade projects spanning e-learning platforms, multi-tenant SaaS builders, and AI-powered content systems.

<br/>

## ⟶ Feature Highlights

<table>
<tr>
<td width="50%" valign="top">

### 🪐 Interactive 3D Hero
A floating, physically-lit planet model rendered with `@react-three/fiber` and `@react-three/drei`, set against a procedural star field — fully responsive with mobile-optimized scaling.

### ✍️ Line-by-Line Text Reveals
Custom `AnimatedLines` + `Reveal` components stagger headline text into view using GSAP timelines, triggered on scroll via `ScrollTrigger`.

### 🖱️ Custom Magnetic Cursor
A dual dot-and-ring cursor built with GSAP `quickTo` for buttery interpolation — auto-disables on touch devices.

</td>
<td width="50%" valign="top">

### 🌊 Lenis Smooth Scroll
Physics-based inertial scrolling wraps the entire app for a native, high-end feel across sections.

### 🎠 Infinite Skills Marquee
A seamless, pausable CSS-keyframe marquee cycling through the tech stack.

### 📇 Dynamic Project Showcase
Data-driven work cards (`projects.ts`) rendering live case studies — FutureAcademy, Zameny, Narvo, BlogAI, Zahra Store — each with role, stack, and live links.

</td>
</tr>
</table>

<br/>

<div align="center">
<img src="https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-b0d9-a6e9200f6cca.gif" width="500">
</div>

<br/>

## ⟶ Tech Stack

<div align="center">

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router) · React 19 · TypeScript |
| **3D / WebGL** | Three.js · React Three Fiber · @react-three/drei · maath |
| **Animation** | GSAP + `@gsap/react` (ScrollTrigger) · Framer Motion / Motion |
| **Scrolling** | Lenis (inertial smooth scroll) |
| **Styling** | Tailwind CSS v4 · Custom design tokens |
| **Tooling** | ESLint 9 · TypeScript strict mode |

</div>

<br/>

## ⟶ Project Architecture

```text
portfolio-main/
├── public/
│   ├── models/Planet.glb        # 3D hero model
│   └── project*.png             # Case study covers
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout — cursor + smooth scroll wrapper
│   │   ├── page.tsx             # Section composition
│   │   └── globals.css
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── HeroPlanet.tsx   # R3F scene, lighting, environment
│   │   │   ├── Planet.tsx       # GLTF model loader
│   │   │   ├── StarField.tsx    # Procedural starfield
│   │   │   └── FloatingKnot.tsx
│   │   ├── Hero.tsx             # Landing section
│   │   ├── About.tsx            # Bio + stats
│   │   ├── SkillsMarquee.tsx    # Infinite tech marquee
│   │   ├── Works.tsx / WorkCard.tsx
│   │   ├── Contact.tsx          # Socials + email copy
│   │   ├── AnimatedLines.tsx    # GSAP staggered text reveal
│   │   ├── Reveal.tsx           # Scroll-triggered fade/slide
│   │   ├── CustomCursor.tsx     # Magnetic dot/ring cursor
│   │   ├── SmoothScroll.tsx     # Lenis provider
│   │   └── Navbar.tsx / Footer.tsx
│   ├── data/projects.ts         # Case study content
│   └── lib/
│       ├── gsap.ts              # GSAP plugin registration
│       └── useMediaQuery.ts
└── tsconfig.json
```

<br/>

## ⟶ Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000
```

**Build for production**

```bash
npm run build
npm run start
```

<br/>

## ⟶ Featured Work

| # | Project | Role | Stack |
|---|---------|------|-------|
| 01 | **FutureAcademy** | Full-Stack — E-Learning Platform | Next.js · Node.js · PostgreSQL · Tailwind |
| 02 | **Zameny** | Full-Stack — SaaS & E-Commerce Builder | Next.js · Node.js · MongoDB · Telegram API |
| 03 | **Narvo** | Full-Stack — E-Commerce | Next.js · Node.js · Express · MongoDB |
| 04 | **BlogAI** | Full-Stack — AI Content Platform | Next.js · Node.js · MongoDB · AI Integration |
| 05 | **Zahra Store** | Full-Stack — E-Commerce | Vue.js · Node.js · PostgreSQL |

<br/>

## ⟶ Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abdelrhman445)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdelrahmanelsayed445)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@abdulrahman_albat)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/albati445/)
[![Twitter](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/GamoTek)

</div>

<br/>

<div align="center">

<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="500">

**Built with care — where engineering precision meets front-end craft.**

</div>

<!-- deploy-check: 2026-11-22 -->
