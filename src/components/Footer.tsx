export default function Footer() {
  return (
    <footer className="container-edge py-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-3 mono-label text-muted">
      <p>&copy; {new Date().getFullYear()} AbdUlrahman Elsayed &mdash; All rights reserved.</p>
      <p>Built with Next.js, GSAP &amp; Three.js</p>
    </footer>
  );
}