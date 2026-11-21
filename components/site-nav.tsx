"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LOGO } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/manage", label: "Instaclean Manage" },
  { href: "/demfi", label: "Demfi" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Our Vision" },
  { href: "/contact", label: "Contact" },
];

const menuLinks = [
  ...links,
  { href: "/join-as-cleaner", label: "Join as Worker" },
  { href: "/book-a-service", label: "Book a Service" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = ["site-header", scrolled ? "is-solid" : "", open ? "is-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <div className="site-header__scrim" />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="site-header__bar">
        <Link href="/" aria-label="Instaclean home" className="site-header__logo">
          <img src={LOGO} alt="Instaclean" width={148} height={32} />
        </Link>
        <nav className="site-header__nav" aria-label="Main">
          <ul className="site-header__list">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="site-header__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__end">
          <div className="site-header__actions">
            <Link href="/join-as-cleaner" className="site-header__link">
              Join as Worker
            </Link>
            <span className="site-header__rule" aria-hidden />
            <Link href="/book-a-service" className="site-header__link site-header__link--strong">
              Book a Service
            </Link>
          </div>
          <Link href="/contact#quote" className="site-header__quote">
            Get a Free Quote
          </Link>
        <button
          type="button"
          className="site-header__menu"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          )}
        </button>
        </div>
      </div>
      {open ? (
        <div className="site-header__drawer">
          <ul className="site-header__drawer-list">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="site-header__drawer-link" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
