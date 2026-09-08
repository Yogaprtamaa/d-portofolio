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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 hidden justify-center transition-all duration-300 md:flex ${
        scrolled ? "px-5 pt-4" : "px-0 pt-0"
      }`}
      role="banner"
    >
      <nav
        aria-label="Primary"
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "h-14 w-full max-w-[700px] rounded-full border border-white/10 bg-[#1D1D1F]/90 px-3 pl-4 shadow-[0_12px_40px_rgba(0,0,0,0.30)] backdrop-blur-[16px]"
            : "h-16 w-full max-w-[1200px] border-b border-[rgba(0,0,0,0.04)] bg-[#F5F5F7]/80 px-10 backdrop-blur-[12px]"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] focus-visible:outline-none"
          aria-label="Go to homepage"
        >
          <span
            className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold tracking-widest transition-colors duration-300 ${
              scrolled ? "bg-white text-[#1D1D1F]" : "bg-[#1D1D1F] text-white"
            }`}
          >
            Y
          </span>
          <span className={`transition-colors duration-300 ${scrolled ? "text-white" : "text-[#1D1D1F]"}`}>
            Yoga&apos;s Portofolio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="flex items-center gap-1">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  scrolled
                    ? active
                      ? "bg-white/[0.12] text-white"
                      : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                    : active
                      ? "bg-white text-[#1D1D1F] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                      : "text-[#6E6E73] hover:bg-white/60 hover:text-[#1D1D1F]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="inline-flex h-9 items-center justify-center rounded-full bg-[#0071E3] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#0077ED] active:bg-[#006EDB] focus-visible:outline-none"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  );
}
