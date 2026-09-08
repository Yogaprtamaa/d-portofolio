import Link from "next/link";
import * as React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary: "bg-[#0071E3] text-white hover:bg-[#0077ED] active:bg-[#006EDB] shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
  secondary: "bg-white text-[#1D1D1F] border border-black/[0.08] hover:bg-[#F5F5F7] active:bg-[#E8E8ED]",
  ghost: "bg-transparent text-[#1D1D1F] hover:bg-black/[0.04]",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-[14px]",
  lg: "h-12 px-7 text-[15px]",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & { type?: "button" | "submit" };

export function Button({ variant = "primary", size = "md", href, children, className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const cls = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} aria-label={typeof children === "string" ? children : undefined}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
