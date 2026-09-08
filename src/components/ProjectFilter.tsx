"use client";
import { categories, type CategoryFilter } from "@/lib/projects";

export function ProjectFilter({
  active,
  onChange,
}: {
  active: CategoryFilter;
  onChange: (c: CategoryFilter) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-white p-1 shadow-[0_1px_3px_rgba(0,0,0,0.06)] border border-black/[0.04] [scrollbar-width:thin] md:inline-flex md:overflow-visible"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
              isActive
                ? "bg-[#1D1D1F] text-white shadow-sm"
                : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
