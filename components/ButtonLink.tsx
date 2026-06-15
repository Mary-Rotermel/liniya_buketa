import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-ink text-white shadow-editorial hover:bg-graphite",
  secondary: "border border-rose-dust/25 bg-white/85 text-ink hover:border-rose-dust/45 hover:bg-white",
  ghost: "border border-white/70 bg-white/20 text-white backdrop-blur hover:bg-white/30"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = ""
}: ButtonLinkProps) {
  const classes = `focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
