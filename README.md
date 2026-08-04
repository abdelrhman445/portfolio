# N.DEV Portfolio

بورتفوليو مبني بـ Next.js 15 (App Router) + TypeScript + Tailwind CSS v4،
بيجمع كل أنماط الأنيميشن اللي اتحللت من الـ 6 مشاريع اللي بعتها:

- **Three.js + React Three Fiber + drei** — كائن 3D سلكي عائم (torus knot) في
  الـ Hero + خلفية نجوم متحركة (`src/components/canvas`).
- **GSAP + ScrollTrigger + @gsap/react** — تحريك النصوص سطر سطر
  (`AnimatedLines.tsx`) وscroll reveal للسكاشن (`Reveal.tsx`).
- **Lenis** — سكرول سلس متزامن مع GSAP (`SmoothScroll.tsx`).
- **Custom cursor** (reticle) بـ GSAP quickTo (`CustomCursor.tsx`).
- **Framer Motion (motion/react)** — micro-interactions (الناف بار، كروت
  المشاريع، الأزرار).
- **Marquee** لشريط المهارات (`SkillsMarquee.tsx`).

## تشغيل المشروع محليًا

```bash
npm install
npm run dev
```

افتح `http://localhost:3000`.

## حاجات لازم تغيرها قبل النشر

1. **الاسم والبيانات الشخصية**: `src/components/Navbar.tsx`،
   `src/components/Hero.tsx`، `src/components/Footer.tsx`.
2. **الإيميل الحقيقي**: `src/components/CopyEmailButton.tsx` (المتغير `EMAIL`).
3. **لينكات السوشيال ميديا**: `src/components/Contact.tsx` (مصفوفة `SOCIALS`).
4. **المشاريع**: `src/data/projects.ts` — استبدل الـ placeholder بمشاريعك
   الحقيقية (تقدر تضيف صور/سكرين شوتس لو عايز تطور `WorkCard.tsx` بعدين).

## الخطوط (Fonts)

الكود جاهز يشتغل بـ `next/font/google` لخطوط **Space Grotesk** (display)،
**Inter** (body)، و**JetBrains Mono** (mono) — لكنها كانت متعطلة هنا لأن بيئة
البناء ماكنش عندها اتصال بالإنترنت لـ Google Fonts، فحطيت بدلها font-stack
محلي مؤقت في `src/app/globals.css`. لما تشغل المشروع على جهازك أو تنشره على
Vercel (فين الإنترنت متاح وقت البيلد)، رجّع الكود ده في
`src/app/layout.tsx`:

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

وضيف `${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`
لـ `className` بتاعة `<html>`، وفي `globals.css` رجّع:

```css
--font-display: var(--font-space-grotesk);
--font-body: var(--font-inter);
--font-mono: var(--font-jetbrains-mono);
```

## تخصيص الألوان

كل الألوان معرفة كـ CSS variables في `src/app/globals.css` (`--bg`,
`--accent`, `--accent-2`, إلخ) — غيّرها من مكان واحد وهتتطبق على المشروع كله.

## أداء وملاحظات

- الكانفس بتوع Three.js متحملة بـ `dynamic(..., { ssr: false })` عشان
  WebGL محتاج المتصفح.
- فيه `prefers-reduced-motion` مفعّل في الـ CSS لأي مستخدم بيفضل تقليل
  الحركة.
- الكيرسر المخصص بيتقفل تلقائيًا على الموبايل / أجهزة اللمس.
