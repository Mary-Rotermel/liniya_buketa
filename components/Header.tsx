"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { vkUrl } from "@/config/contacts";

const navItems = [
  { href: "#catalog", label: "Каталог" },
  { href: "#popular", label: "Букеты" },
  { href: "#palette", label: "Палитра" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contacts", label: "Контакты" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed left-0 top-0 z-[80] w-full border-b border-white/70 bg-milk/95 backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="#hero" className="shrink-0 font-display text-2xl font-bold text-graphite sm:text-3xl">
          Линия Букета
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-sm font-medium text-taupe xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-rose-dust">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <ButtonLink href={vkUrl()} external>
            Написать в VK
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-rose-dust/20 bg-white xl:hidden"
        >
          <span className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-graphite transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-graphite transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 top-20 z-[70] overflow-y-auto bg-milk px-5 py-10 shadow-soft transition duration-300 xl:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="mx-auto grid max-w-xl gap-7 text-3xl font-semibold text-graphite">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-rose-dust/10 pb-4 transition hover:text-rose-dust"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={vkUrl()}
            external
            className="mt-4 w-full max-w-sm"
          >
            Написать ВКонтакте
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
