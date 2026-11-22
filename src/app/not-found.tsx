import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100svh] flex flex-col justify-center container-edge relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_70%_30%,rgba(255,122,51,0.12),transparent_55%)]"
      />
      <p className="mono-label text-accent mb-6">/// ERROR 404 &mdash; SIGNAL LOST</p>
      <h1 className="font-display font-medium leading-[0.95] text-[18vw] md:text-[9vw] tracking-tight">
        Lost in
        <br />
        the grid.
      </h1>
      <p className="text-muted max-w-xl mt-8 leading-relaxed">
        The page you are looking for was moved, renamed, or never existed.
        Either way, there is nothing to debug here.
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-6">
        <Link
          href="/"
          className="mono-label border border-accent text-accent rounded-full px-6 py-3 transition-colors duration-300 hover:bg-accent hover:text-bg"
        >
          Back to home &rarr;
        </Link>
        <span className="mono-label text-muted">portfolio.nullspecteracademy.ninja</span>
      </div>
    </main>
  );
}
