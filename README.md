# A.ELSAYED Portfolio

A portfolio built with Next.js 15 (App Router) + TypeScript + Tailwind CSS v4,
combining animation patterns distilled from the projects sent for reference:

- **Three.js + React Three Fiber + drei** — a floating 3D planet model in the
  Hero (`Float` + cinematic `Environment`/`Lightformer` lighting) plus an
  animated starfield background (`src/components/canvas`).
- **GSAP + ScrollTrigger + @gsap/react** — line-by-line text reveals
  (`AnimatedLines.tsx`), scroll-triggered section reveals (`Reveal.tsx`), and
  the planet's own entrance timeline.
- **Lenis** — smooth scroll synced with GSAP (`SmoothScroll.tsx`).
- **Custom cursor** (reticle) powered by GSAP `quickTo` (`CustomCursor.tsx`).
- **Framer Motion (motion/react)** — micro-interactions (navbar, project
  cards, buttons).
- **Marquee** for the skills strip (`SkillsMarquee.tsx`).

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Things to check before deploying

1. **Name & personal details**: `src/components/Navbar.tsx`,
   `src/components/Hero.tsx`, `src/components/Footer.tsx`.
2. **Projects**: `src/data/projects.ts` — one real project (Awwwards-Style
   Portfolio) is already in there; replace the remaining placeholders with
   your other real projects (you can extend `WorkCard.tsx` later if you want
   to add screenshots).
3. **Favicon**: `src/app/icon.png` and `src/app/apple-icon.png` are already
   branded (referenced from `metadata.icons` in `layout.tsx`) — swap them out
   if you want a different mark.

## Fonts

The code is ready to use `next/font/google` for **Space Grotesk** (display),
**Inter** (body), and **JetBrains Mono** (mono) — but they were disabled here
because the build environment had no internet access to Google Fonts, so a
temporary local font stack was used instead in `src/app/globals.css`. When you
run the project on your machine or deploy it to Vercel (where internet is
available at build time), restore this in `src/app/layout.tsx`:

```tsx
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
```

Then add `${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`
to the `<html>` element's `className`, and in `globals.css` restore:

```css
--font-display: var(--font-space-grotesk);
--font-body: var(--font-inter);
--font-mono: var(--font-jetbrains-mono);
```

## Customizing colors

All colors are defined as CSS variables in `src/app/globals.css` (`--bg`,
`--accent`, `--accent-2`, etc.) — change them in one place and it applies
across the whole project.

## Performance & notes

- The Three.js canvases are loaded with `dynamic(..., { ssr: false })` since
  WebGL needs the browser.
- `prefers-reduced-motion` is respected in the CSS for anyone who prefers less
  motion.
- The custom cursor auto-disables itself on mobile / touch devices.
- The hero planet model (`public/models/Planet.glb`) is ~18MB — noticeably
  heavier than a plain geometric shape, so first load of the hero takes a bit
  longer, especially on slow connections. Let me know if you want it
  Draco-compressed to cut the size down significantly with no visible loss.