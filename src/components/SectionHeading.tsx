export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-[65ch]"}`}>
      <h2 className="text-[32px] font-semibold tracking-[-0.03em] text-[#1D1D1F] md:text-[44px] leading-[0.95] md:leading-[0.95] text-balance">{title}</h2>
      {description && (
        <p className="mt-4 max-w-[65ch] text-[16px] leading-7 text-[#6E6E73] md:text-[17px] text-pretty">{description}</p>
      )}
    </div>
  );
}
