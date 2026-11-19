import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1344px] px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function YellowButton({
  href,
  children,
  className = "",
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}) {
  const classNames = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[radial-gradient(80%_70%,#f9d543,#f8ce25)] px-7 text-base font-semibold text-black no-underline transition-[transform,opacity] duration-200 hover:opacity-90 active:scale-[0.98] ${className}`;
  if (href) {
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`font-semibold underline decoration-yellow decoration-2 underline-offset-4 ${
        light ? "text-white hover:decoration-white" : "text-ink hover:decoration-ink"
      }`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-paper pt-32 text-ink md:pt-40">
      <Container className="pb-8 md:pb-12">
        <h1 className="max-w-[16ch] text-balance text-[2.75rem] font-bold leading-[1.05] tracking-[-0.025em] md:text-7xl md:leading-none">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">{lede}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
