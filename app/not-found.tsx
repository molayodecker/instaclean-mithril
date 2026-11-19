import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="grid min-h-[70vh] place-items-center bg-paper px-6 pt-24 text-center text-ink">
      <div>
        <p className="text-7xl font-bold tracking-tight md:text-8xl">404</p>
        <p className="mt-4 text-lg text-muted">This page doesn&apos;t exist.</p>
        <Link href="/" className="mt-8 inline-flex h-12 items-center rounded-full bg-yellow-btn px-7 font-semibold text-black no-underline">
          Go home
        </Link>
      </div>
    </main>
  );
}
