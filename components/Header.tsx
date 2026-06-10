"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { whatsappUrl } from "@/config/contacts";

const navItems = [
  { href: "#catalog", label: "Каталог" },
  { href: "#popular", label: "Букеты" },
  { href: "#wedding", label: "Свадьба" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contacts", label: "Контакты" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/70 bg-milk/85 backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link href="#hero" className="font-display text-3xl font-bold text-graphite">
          Линия Букета
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-taupe lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-rose-dust">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappUrl("Здравствуйте! Хочу заказать букет в Линия Букета.")} external>
            Заказать
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-rose-dust/20 bg-white lg:hidden"
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
        className={`fixed inset-x-0 top-20 z-40 border-b border-rose-dust/10 bg-milk/98 px-5 py-6 shadow-soft backdrop-blur-2xl transition lg:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="grid gap-4 text-lg font-medium text-graphite">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={whatsappUrl("Здравствуйте! Хочу заказать букет в Линия Букета.")}
            external
            className="mt-2"
          >
            Написать в WhatsApp
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
