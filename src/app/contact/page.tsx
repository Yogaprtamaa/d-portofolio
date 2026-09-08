import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have an idea? Let's build something great, contact Yoga Pratama via email, WhatsApp, LinkedIn, or the form.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-start">
        <Reveal>
          <h1 className="text-[40px] font-semibold leading-[0.9] tracking-[-0.04em] text-[#1D1D1F] md:text-[56px] text-balance">
            Have an idea?<br />
            Let&apos;s build <span className="text-[#6E6E73]">something great.</span>
          </h1>
          <p className="mt-4 max-w-[65ch] text-[16px] leading-7 text-[#6E6E73]">
            I&apos;m always open to discussing new projects, creative ideas, and opportunities. The best way to reach me is
            email, I reply within 24 hours.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href="mailto:prtmyog17@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-black/5 hover:shadow-sm transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7]" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 6h16v12H4z"/><path d="M4 7l8 7 8-7"/></svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1D1D1F]">Email</span>
                <span className="block text-xs text-[#6E6E73]">prtmyog17@gmail.com</span>
              </span>
            </a>
            <a href="https://wa.me/6281386969362" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-black/5 hover:shadow-sm transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7]" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="1.6" aria-hidden><path d="M21 11.5a9 9 0 0 1-13 7.9L3 21l1.6-5A9 9 0 1 1 21 11.5Z"/><path d="M8 14s1.5 2 6 2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1D1D1F]">WhatsApp</span>
                <span className="block text-xs text-[#6E6E73]">0813 8696 9362</span>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/yoga-pratama-770a1b2b8/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-black/5 hover:shadow-sm transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7]" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="1.6" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6h-4v-12h4v2"/><rect x="2" y="9" width="4" height="11"/><circle cx="4" cy="4" r="2"/></svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1D1D1F]">LinkedIn</span>
                <span className="block text-xs text-[#6E6E73]">Connect professionally</span>
              </span>
            </a>
            <a href="https://github.com/Yogaprtamaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-black/5 hover:shadow-sm transition-shadow">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F5F7]" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D1D1F" strokeWidth="1.6" aria-hidden><path d="M15 22v-4a4 4 0 0 0-4-4H7"/><path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M22 22v-4a3 3 0 0 0-3-3h-1"/><path d="M16 3a3 3 0 0 1 0 6"/></svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-[#1D1D1F]">GitHub</span>
                <span className="block text-xs text-[#6E6E73]">github.com/Yogaprtamaa</span>
              </span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl bg-[#1D1D1F] p-6 text-white">
            <p className="text-sm font-medium">Prefer a quick call?</p>
            <p className="mt-1 text-sm text-white/60">I&apos;m available Mon to Fri, 9am–6pm WIB (Jakarta).</p>
            <a href="mailto:prtmyog17@gmail.com?subject=Quick%20call%20request" className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-[#1D1D1F]">Request a call</a>
          </div>

          <div className="mt-6 flex gap-3 text-xs text-[#6E6E73]">
            <a href="https://www.instagram.com/rvyoug/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1D1D1F]">Instagram — @rvyoug</a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
