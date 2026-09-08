type Item = { year: string; role: string; org: string; description: string };

const items: Item[] = [
  { year: "2025, Present", role: "Frontend Developer", org: "PKU Masjid Istiqlal", description: "Building responsive interfaces and improving the digital admission experience for thousands of applicants." },
  { year: "2023, 2025", role: "UI/UX Designer & Frontend", org: "Freelance · Startups & Institutions", description: "Partnered with founders and educators to ship 12+ products, from dashboards to design systems." },
  { year: "2021, 2023", role: "Full Stack Developer", org: "Digital Cooperative Platform", description: "Led member portal development serving 1,200+ members; cut reconciliation from days to hours." },
];

export function Timeline() {
  return (
    <ol className="relative border-l border-black/[0.08] pl-8" aria-label="Work experience">
      {items.map((it) => (
        <li key={it.year} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[#0071E3] shadow-[0_0_0_4px_rgba(0,113,227,0.12)]" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">{it.year}</p>
          <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">{it.role}</h3>
          <p className="text-sm font-medium text-[#0058B0]">{it.org}</p>
          <p className="mt-2 max-w-[65ch] text-[14.5px] leading-6 text-[#6E6E73]">{it.description}</p>
        </li>
      ))}
    </ol>
  );
}
