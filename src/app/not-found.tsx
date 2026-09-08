import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-24 md:px-10 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#6E6E73]">404</p>
      <h1 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] text-[#1D1D1F]">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#6E6E73]">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the work.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/projects" variant="secondary">View projects</Button>
      </div>
    </div>
  );
}
