import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#F5F5F7]">
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-10 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1D1D1F] text-[11px] font-bold tracking-widest text-white">Y</span>
              Yoga's Portofolio
            </div>
            <p className="mt-3 max-w-[65ch] text-sm leading-6 text-[#6E6E73]">
              Mobile Developer Flutter, Fullstack & UI/UX Designer crafting responsive, functional, and user-centered applications.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73]">Navigate</p>
              <ul className="mt-3 space-y-2">
                <li><Link href="/" className="text-[#1D1D1F] hover:text-[#0058B0]">Home</Link></li>
                <li><Link href="/projects" className="text-[#1D1D1F] hover:text-[#0058B0]">Projects</Link></li>
                <li><Link href="/about" className="text-[#1D1D1F] hover:text-[#0058B0]">About</Link></li>
                <li><Link href="/contact" className="text-[#1D1D1F] hover:text-[#0058B0]">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6E6E73]">Connect</p>
              <ul className="mt-3 space-y-2">
                <li><a href="mailto:prtmyog17@gmail.com" className="text-[#1D1D1F] hover:text-[#0058B0]">prtmyog17@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/yoga-pratama-770a1b2b8/" target="_blank" rel="noopener noreferrer" className="text-[#1D1D1F] hover:text-[#0058B0]">LinkedIn</a></li>
                <li><a href="https://github.com/Yogaprtamaa" target="_blank" rel="noopener noreferrer" className="text-[#1D1D1F] hover:text-[#0058B0]">GitHub</a></li>
                <li><a href="https://www.instagram.com/rvyoug/" target="_blank" rel="noopener noreferrer" className="text-[#1D1D1F] hover:text-[#0058B0]">Instagram — @rvyoug</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-black/[0.06] pt-6 text-xs text-[#6E6E73] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Yoga's Portofolio — Yoga Pratama. Crafted with care in Jakarta.</p>
          <p>Apple-inspired · Minimal · Premium</p>
        </div>
      </div>
    </footer>
  );
}
