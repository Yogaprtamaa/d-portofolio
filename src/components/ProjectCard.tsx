import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <div className="group flex flex-col rounded-[24px] bg-white border border-black/[0.06] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-black/[0.08] transition-all duration-250 focus-within:ring-2 focus-within:ring-[#0071E3] focus-within:ring-offset-2">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-none"
        aria-label={`View details for ${project.title}`}
      >
        <div className={`relative bg-[#F2F2F2] rounded-t-[24px] overflow-hidden ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-[#1D1D1F] shadow-sm">
            {project.category} · {project.year}
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <Link href={`/projects/${project.slug}`} className="focus-visible:outline-none">
          <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1D1D1F] leading-tight hover:text-[#0058B0] transition-colors">{project.title}</h2>
        </Link>
        <p className="mt-2 line-clamp-2 text-[14.5px] leading-6 text-[#6E6E73]">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#6E6E73] border border-black/[0.04]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="rounded-full bg-transparent px-2 py-1 text-xs text-[#6E6E73]">+{project.tech.length - 3}</span>
          )}
        </div>
        <div className="mt-6 flex items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1D1D1F] hover:text-[#0058B0] transition-colors"
          >
            View details <span aria-hidden>→</span>
          </Link>
          {project.link && (
            <>
              <span className="text-black/10">·</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] hover:border-black/15 transition-colors"
              >
                {project.link.includes("figma.com") ? "See Figma" : "See Website"} <span aria-hidden className="text-[10px]">↗</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
