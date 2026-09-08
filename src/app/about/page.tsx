import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Mobile Developer Flutter, Fullstack & UI UX Designer — Yoga Pratama. Introduction and capabilities.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-14">
      {/* Profile header */}
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12 items-start">
          <div className="overflow-hidden rounded-[28px] bg-white border border-black/5 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/porto/yogaporto-800.png"
              alt="Portrait of Yoga Pratama, Developer — Mobile, Fullstack & UI/UX"
              className="aspect-[4/4.6] w-full rounded-[20px] object-cover"
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-[#1D1D1F]">Yoga Pratama</p>
              <p className="text-sm text-[#6E6E73]">Mobile Developer : Flutter — Fullstack & UI UX</p>
              <p className="mt-2 text-xs text-[#6E6E73]">Banten · Available worldwide</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="mailto:prtmyog17@gmail.com" className="inline-flex h-9 items-center justify-center rounded-full bg-[#1D1D1F] px-4 text-xs font-medium text-white">Email me</a>
                <a href="https://github.com/Yogaprtamaa" target="_blank" className="inline-flex h-9 items-center justify-center rounded-full border border-black/10 px-4 text-xs font-medium">GitHub</a>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-[36px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#1D1D1F] md:text-[48px] text-balance font-display">
              Mobile Developer with a strong focus on <span className="text-[#6E6E73]">cross-platform</span> Flutter.
            </h1>
            <p className="mt-4 max-w-[65ch] text-[16px] leading-7 text-[#6E6E73]">
              Skilled in designing and developing responsive, functional, and user-centered mobile applications — integrating APIs and clean, efficient code.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[20px] bg-white p-6 border border-black/5">
                <h2 className="text-sm font-semibold text-[#1D1D1F]">Approach</h2>
                <p className="mt-2 max-w-[65ch] text-sm leading-6 text-[#6E6E73]">
                  Detail-oriented, solution-driven. Start from user needs, then structure, then visual, then efficient code.
                </p>
              </div>
              <div className="rounded-[20px] bg-white p-6 border border-black/5">
                <h2 className="text-sm font-semibold text-[#1D1D1F]">Direction</h2>
                <p className="mt-2 max-w-[65ch] text-sm leading-6 text-[#6E6E73]">
                  Continuously learning new technologies and improving development skills — from slicing to production.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[20px] bg-[#F5F5F7] p-6 border border-black/5">
              <div className="space-y-3 text-[15px] leading-7 text-[#1D1D1F]">
                <p>
                  Introduction — Mobile Developer with a strong focus on cross-platform application development using Flutter. Skilled in designing and developing responsive, functional, and user-centered mobile applications.
                </p>
                <p className="text-[#6E6E73]">
                  Experienced in implementing intuitive user interfaces, integrating APIs, and developing applications with clean, structured, and efficient code. Highly interested in mobile technology and software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Skills, editorial list, not uniform card grid */}
      <Reveal delay={0.1}>
        <section className="mt-16">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#1D1D1F] text-balance font-display">Capabilities</h2>
          <div className="mt-6 rounded-[24px] bg-white border border-black/5 divide-y divide-black/5">
            <div className="grid gap-6 p-7 md:grid-cols-[160px_1fr] md:items-start">
              <h3 className="text-sm font-semibold text-[#1D1D1F]">Mobile</h3>
              <p className="text-sm leading-6 text-[#6E6E73]">Flutter · Dart · Responsive UI · State Management · Camera · TFLite · REST API · Clean Architecture</p>
            </div>
            <div className="grid gap-6 p-7 md:grid-cols-[160px_1fr] md:items-start">
              <h3 className="text-sm font-semibold text-[#1D1D1F]">Frontend</h3>
              <p className="text-sm leading-6 text-[#6E6E73]">Next.js · React · TypeScript · Tailwind CSS · HTML · Bootstrap · JavaScript · Supabase</p>
            </div>
            <div className="grid gap-6 p-7 md:grid-cols-[160px_1fr] md:items-start">
              <h3 className="text-sm font-semibold text-[#1D1D1F]">UI/UX & Fullstack</h3>
              <p className="text-sm leading-6 text-[#6E6E73]">Figma · UI Design · Prototyping · Laravel Sanctum · PostgreSQL · MySQL · Solana · Rust Anchor</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Experience */}
      <Reveal delay={0.15}>
        <section className="mt-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-[#1D1D1F]">Experience</h2>
              <p className="mt-3 max-w-[65ch] text-sm leading-6 text-[#6E6E73]">
                Timeline of roles, each focused on shipping work that lasts, not just looks good in a deck.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">Work together →</Button>
              </div>
            </div>
            <Timeline />
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.2}>
        <section className="mt-16 rounded-[28px] bg-[#1D1D1F] px-8 py-10 text-white md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[17px] font-medium leading-7">
              Want the full story? <span className="text-white/60">Download my CV or explore projects.</span>
            </p>
            <div className="flex gap-3">
              <Link href="/projects" className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#1D1D1F]">
                View Projects
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white hover:bg-white/10">
                Contact
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
