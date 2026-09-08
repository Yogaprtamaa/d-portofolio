"use client";
import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Reveal } from "@/components/Reveal";
import { projects, type CategoryFilter } from "@/lib/projects";

export default function ProjectsClient() {
  const [active, setActive] = useState<CategoryFilter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-10 md:py-12">
      <Reveal>
        <h1 className="text-[40px] font-semibold tracking-[-0.04em] leading-[0.9] text-[#1D1D1F] md:text-[56px] text-balance">Selected work</h1>
        <p className="mt-4 max-w-[65ch] text-[16px] leading-7 text-[#6E6E73]">
          From admission platforms to design systems, work that balances clarity, craft, and performance.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ProjectFilter active={active} onChange={setActive} />
          <span className="text-sm text-[#6E6E73]">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </Reveal>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-[24px] bg-white p-12 text-center border border-black/5">
          <p className="text-sm text-[#6E6E73]">No projects in this category yet.</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
