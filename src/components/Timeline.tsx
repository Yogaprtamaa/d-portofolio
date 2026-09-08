type Item = { year: string; role: string; org: string; description: string };

const items: Item[] = [
  { year: "Apr 2026 – Present", role: "Solana Smart Contract Developer", org: "Z4 Foundation · Remote", description: "Building Solana programs with Rust and Anchor: secure instructions, PDA structures, on-chain transaction workflows, and client integration via Anchor IDL." },
  { year: "Dec 2025 – Feb 2026", role: "Frontend Developer", org: "PKUMI · Jakarta Pusat", description: "Engineered frontend interfaces for an admission management platform with Next.js, React, and REST APIs — registration workflows and user-facing features." },
  { year: "Jan 2026 – Feb 2026", role: "Mentor UI/UX Design", org: "Google Developer Group on Campus · UIN Jakarta", description: "Mentored students in design thinking, wireframing, prototyping, and usability testing; ran design reviews and workshops on modern UI/UX practice." },
  { year: "Mar 2025 – Oct 2025", role: "UI/UX Designer", org: "CV Miftah Digital Solusi · Hybrid", description: "Designed user-centered interfaces for education and logistics products — Smart System Education and a logistics suite with tracking, warehouse, and analytics dashboards." },
  { year: "Mar 2024 – Jul 2025", role: "UI Designer", org: "Lap.On · Remote", description: "Designed mobile booking flows for a sports field platform on Android and iOS — real-time availability, cleaner navigation, and reduced friction across key workflows." },
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
