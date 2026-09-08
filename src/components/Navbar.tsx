"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`hidden md:block sticky top-0 z-50 border-b transition-all duration-250 ${
        scrolled
          ? "bg-[rgba(245,245,247,0.85)] backdrop-blur-[16px] border-[rgba(0,0,0,0.06)] supports-[backdrop-filter]:bg-[rgba(245,245,247,0.78)]"
          : "bg-[#F5F5F7]/80 backdrop-blur-[12px] border-[rgba(0,0,0,0.04)]"
      }`}
      role="banner"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-5 md:px-10 lg:px-10"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-[#1D1D1F] focus-visible:outline-none"
          aria-label="Go to homepage"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1D1D1F] text-[11px] font-bold tracking-widest text-white">Y</span>
          <span>Yoga's Portofolio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  active ? "bg-white text-[#1D1D1F] shadow-[0_1px_2px_rgba(0,0,0,0.06)]" : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-white/60"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-full bg-[#0071E3] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#0077ED] active:bg-[#006EDB] focus-visible:outline-none"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
