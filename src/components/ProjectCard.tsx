import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-[24px] bg-white hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-2"
      aria-label={`View project ${project.title}`}
    >
      <div className={`relative bg-[#F2F2F2] rounded-t-[24px] ${featured ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold tracking-widest uppercase text-[#1D1D1F]">
          {project.category} · {project.year}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h2 className="text-[20px] font-semibold tracking-[-0.02em] text-[#1D1D1F] leading-tight">{project.title}</h2>
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
        <div className="mt-6 flex items-center gap-2 text-[13px] font-medium text-[#0058B0]">
          <span>View Project</span>
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
