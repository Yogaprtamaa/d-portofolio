import Link from "next/link";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="">
      {/* HERO — Yoga Pratama cover */}
      <section className="mx-auto max-w-[1200px] px-5 pb-10 pt-6 md:px-10 md:pt-10">
        <div className="flex items-center justify-between border-b border-black/10 py-3 text-[11px] tracking-wide text-[#1D1D1F] uppercase">
          <span className="flex items-center gap-2 font-semibold"><span className="h-6 w-6 rounded-full bg-[#1D1D1F] text-white grid place-items-center text-[10px]">◈</span> Developer — Mobile · Fullstack · UI/UX</span>
          <span className="hidden md:block text-[#6E6E73] normal-case">Presented by : <span className="font-semibold text-[#1D1D1F]">Yoga Pratama</span></span>
        </div>
        <div className="grid items-start gap-10 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <h1 className="text-[56px] font-black leading-[0.85] tracking-[-0.05em] text-[#1D1D1F] md:text-[84px] lg:text-[110px] font-display">portofolio.</h1>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-7 text-[#6E6E73] md:text-[17px] text-pretty">
              Developer — Mobile, Fullstack & UI/UX — crafting responsive, functional, and user-centered applications. From Flutter slicing to Next.js and Laravel, with clean, efficient code and thoughtful design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects" size="lg">View My Work</Button>
              <Button href="/about" variant="secondary" size="lg">About Me</Button>
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-black/[0.06] pt-6">
              <div className="flex -space-x-2" aria-hidden>
                <span className="h-8 w-8 rounded-full border-2 border-white bg-[#E8E8ED] inline-flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden><path d="M6 1L6.9 4.1L10 6L6.9 7.9L6 11L5.1 7.9L2 6L5.1 4.1L6 1Z" fill="#1D1D1F"/></svg>
                </span>
                <span className="h-8 w-8 rounded-full border-2 border-white bg-[#1D1D1F] text-white inline-flex items-center justify-center text-[10px] font-bold">Y</span>
                <span className="h-8 w-8 rounded-full border-2 border-white bg-[#0071E3] inline-flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden><rect x="2" y="2" width="6" height="6" rx="1" fill="white" transform="rotate(45 5 5)"/></svg>
                </span>
              </div>
              <p className="text-sm text-[#6E6E73] max-w-[65ch]">
                Building with <span className="font-medium text-[#1D1D1F]">Flutter</span>, <span className="font-medium text-[#1D1D1F]">Next.js</span> & <span className="font-medium text-[#1D1D1F]">Laravel</span> — detail-oriented & solution-driven
              </p>
            </div>
          </div>

          {/* Hero Visual — phone stack for Gelora / BISINDO / School */}
          <Reveal delay={0.12}>
            <div className="mx-auto w-full max-w-[560px] lg:ml-auto">
              <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] border border-black/[0.06]">
                <div className="flex items-center gap-1.5 border-b border-black/[0.06] bg-white px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#28CA42]" />
                  <span className="ml-3 hidden text-xs text-[#6E6E73] md:inline">Mobile Bengkelin — Service App</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/porto/lap-on.png"
                  alt="Mobile Bengkelin service app preview — booking & history"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
                <div className="flex items-center justify-between border-t border-black/[0.06] px-4 py-3">
                  <p className="text-xs font-medium text-[#1D1D1F]">Figma · UI/UX · Mobile</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6E6E73]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0071E3]" aria-hidden></span> Featured project
                  </span>
                </div>
              </div>
              <div className="mt-3 hidden items-center gap-2 text-sm text-[#6E6E73] md:flex">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
                <span>Available for new projects</span>
                <span className="text-black/20">·</span>
                <span className="text-xs">Jakarta · Remote friendly</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS — polished */}
      <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-10 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Featured work"
            description="A curated selection — mobile apps, e-commerce, dashboards, and Web3. Each built with care, from slicing to production."
          />
          <Link href="/projects" className="hidden shrink-0 items-center gap-1.5 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors md:inline-flex">
            View all projects <span aria-hidden>→</span>
          </Link>
        </div>

        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <StaggerItem key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} featured={i === 0} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex justify-center md:hidden">
          <Button href="/projects" variant="secondary">View all projects</Button>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-10">
        <div className="grid gap-8 rounded-[28px] bg-white p-8 md:p-10 lg:grid-cols-[1fr_420px] lg:gap-10 border border-black/[0.06]">
          <div>
            <h2 className="text-[28px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[36px] text-balance font-display">
              Developer — Mobile, Fullstack & UI/UX — responsive, functional, and user-centered.
            </h2>
            <p className="mt-4 max-w-[65ch] text-[15px] leading-7 text-[#6E6E73]">
              Experienced in intuitive UI, API integration, and clean, structured code — from mobile to web. Continuously learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#F5F5F7] border border-black/5 px-3 py-1.5 text-xs font-medium text-[#1D1D1F]">Flutter</span>
              <span className="rounded-full bg-[#F5F5F7] border border-black/5 px-3 py-1.5 text-xs font-medium text-[#1D1D1F]">Next.js</span>
              <span className="rounded-full bg-[#F5F5F7] border border-black/5 px-3 py-1.5 text-xs font-medium text-[#1D1D1F]">Laravel</span>
              <span className="rounded-full bg-[#F5F5F7] border border-black/5 px-3 py-1.5 text-xs font-medium text-[#1D1D1F]">Figma</span>
            </div>
            <div className="mt-8">
              <Link href="/about" className="text-sm font-medium text-[#0058B0] hover:underline">
                Learn more about me →
              </Link>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/porto/yogaporto-800.png"
                alt="Portrait of Yoga Pratama"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#1D1D1F]">Yoga Pratama — Jakarta</p>
                <p className="text-xs text-[#6E6E73]">Mobile & Fullstack Developer</p>
              </div>
              <span className="ml-auto h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden />
            </div>
            <blockquote className="mt-6 text-[14.5px] leading-7 text-[#1D1D1F] max-w-[65ch]">
              “Detail-oriented, solution-driven, and focused on delivering high-quality mobile applications.”
            </blockquote>
            <div className="mt-6 flex divide-x divide-black/10 border-t border-black/10 pt-4 text-center">
              <div className="flex-1 px-2">
                <p className="text-lg font-semibold tabular-nums">25+</p>
                <p className="text-[11px] uppercase tracking-widest text-[#6E6E73]">Projects</p>
              </div>
              <div className="flex-1 px-2">
                <p className="text-lg font-semibold tabular-nums">3</p>
                <p className="text-[11px] uppercase tracking-widest text-[#6E6E73]">Mobile Apps</p>
              </div>
              <div className="flex-1 px-2">
                <p className="text-lg font-semibold tabular-nums">Flutter</p>
                <p className="text-[11px] uppercase tracking-widest text-[#6E6E73]">Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-6 md:px-10 md:pb-24">
        <div className="rounded-[28px] bg-[#1D1D1F] px-8 py-10 text-white md:px-12 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-[28px] font-semibold tracking-[-0.03em] leading-[1.05] md:text-[40px]">Have an idea? Let&apos;s build something great.</h2>
              <p className="mt-3 max-w-[65ch] text-[15px] leading-7 text-white/60">
                I&apos;m always open to discussing new projects, creative ideas, and opportunities.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 w-full md:w-auto">
              <Button href="/contact" size="lg" variant="secondary" className="w-full md:w-auto justify-center border-0">Start a Conversation</Button>
              <p className="text-center text-xs text-white/50">
                Or email <a href="mailto:prtmyog17@gmail.com" className="underline decoration-white/20 hover:decoration-white">prtmyog17@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
