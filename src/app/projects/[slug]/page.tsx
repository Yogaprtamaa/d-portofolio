import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description, images: [{ url: project.image }] },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="overflow-x-clip">
      {/* Header */}
      <div className="mx-auto max-w-[1200px] px-5 pt-10 md:px-10 md:pt-14">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F]">
          ← Back to projects
        </Link>

        <Reveal>
          <h1 className="mt-6 max-w-3xl text-[36px] font-semibold leading-[0.95] tracking-[-0.04em] text-[#1D1D1F] md:text-[56px] text-balance">
            {project.title}
          </h1>
          <p className="mt-3 text-sm font-medium text-[#6E6E73]">
            {project.category} · {project.year}
          </p>
          <p className="mt-4 max-w-[65ch] text-[17px] leading-7 text-[#6E6E73]">{project.longDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-white border border-black/5 px-3 py-1.5 text-xs font-medium text-[#1D1D1F]">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-6 border-y border-black/5 bg-white/60 px-6 py-6 md:grid-cols-3 rounded-[20px] border">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#6E6E73]">Role</p>
              <p className="mt-1 text-sm font-medium text-[#1D1D1F]">{project.role}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#6E6E73]">Year</p>
              <p className="mt-1 text-sm font-medium text-[#1D1D1F]">{project.year}</p>
            </div>
            <div className="flex items-center">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#0071E3] px-6 text-sm font-medium text-white transition-colors hover:bg-[#0077ED] active:bg-[#006EDB]"
                >
                  {project.link.includes("figma.com") ? "See Figma" : "See Website"} <span aria-hidden className="text-xs">↗</span>
                </a>
              ) : (
                <p className="text-xs leading-5 text-[#6E6E73]">
                  Private deployment —{" "}
                  <Link href="/contact" className="font-medium text-[#0058B0] hover:underline">
                    ask me for access →
                  </Link>
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* Large visual */}
        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.images[0]} alt={`${project.title}, hero image`} className="aspect-[16/9] w-full object-cover" />
          </div>
        </Reveal>

        {/* Media gallery */}
        {project.images.length > 1 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {project.images.slice(1).map((src, i) => (
              <div key={i} className="overflow-hidden rounded-[20px] bg-white border border-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`${project.title} screenshot ${i + 2}`} className="aspect-[16/10] w-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Story */}
      <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_0.9fr]">
          <div className="space-y-10">
            <section className="rounded-[24px] bg-white p-8 border border-black/5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">The Challenge</h2>
              <p className="mt-3 max-w-[65ch] text-[16px] leading-7 text-[#1D1D1F]">{project.challenge}</p>
            </section>

            <section className="rounded-[24px] bg-white p-8 border border-black/5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">The Goal</h2>
              <p className="mt-3 max-w-[65ch] text-[16px] leading-7 text-[#1D1D1F]">{project.goal}</p>
            </section>

            <section className="rounded-[24px] bg-white p-8 border border-black/5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">My Role</h2>
              <p className="mt-3 max-w-[65ch] text-[15px] leading-7 text-[#1D1D1F]">{project.role}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#6E6E73]">
                {project.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0071E3]" aria-hidden /> {r}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[24px] bg-white p-8 border border-black/5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">The Process</h2>
              <ol className="mt-4 space-y-0">
                {project.process.map((step, i) => (
                  <li key={step} className="flex gap-4 py-3 border-b border-black/[0.06] last:border-0">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5F5F7] text-xs font-semibold text-[#1D1D1F]">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-sm font-medium text-[#1D1D1F]">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-[24px] bg-white p-8 border border-black/5">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">The Solution</h2>
              <p className="mt-3 max-w-[65ch] text-[16px] leading-7 text-[#1D1D1F]">{project.solution}</p>
            </section>

            <section className="rounded-[24px] bg-[#0071E3] p-8 text-white">
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">The Result</h2>
              <p className="mt-3 max-w-[65ch] text-[16px] leading-7">{project.result}</p>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] bg-white p-6 border border-black/5 sticky top-[80px]">
              <h3 className="text-sm font-semibold text-[#1D1D1F]">Project Info</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between border-b border-black/5 py-2">
                  <dt className="text-[#6E6E73]">Category</dt>
                  <dd className="font-medium text-[#1D1D1F]">{project.category}</dd>
                </div>
                <div className="flex justify-between border-b border-black/5 py-2">
                  <dt className="text-[#6E6E73]">Year</dt>
                  <dd className="font-medium text-[#1D1D1F]">{project.year}</dd>
                </div>
                <div className="flex justify-between py-2">
                  <dt className="text-[#6E6E73]">Stack</dt>
                  <dd className="font-medium text-[#1D1D1F] text-right">{project.tech.slice(0, 2).join(" · ")}</dd>
                </div>
              </dl>
              <div className="mt-6">
                <Button href="/contact" className="w-full justify-center">Start a similar project</Button>
                <Link href="/projects" className="mt-3 flex h-11 items-center justify-center rounded-full border border-black/10 text-sm font-medium text-[#1D1D1F] hover:bg-[#F5F5F7]">
                  Browse more work
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
