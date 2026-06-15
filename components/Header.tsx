"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { vkUrl } from "@/config/contacts";

const navItems = [
  { href: "#catalog", label: "Каталог" },
  { href: "#popular", label: "Готовые букеты" },
  { href: "#palette", label: "Цветы поштучно" },
  { href: "#order", label: "Как заказать" },
  { href: "#delivery", label: "Доставка" },
  { href: "#contacts", label: "Контакты" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-[90] w-full border-b border-rose-dust/10 bg-milk/92 backdrop-blur-2xl">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <Link href="#hero" className="flex shrink-0 items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-rose-dust/20 bg-blush shadow-petal">
              <Image
                src="/images/logo.png"
                alt="Логотип Линия Букета"
                fill
                sizes="48px"
                className="object-cover object-center"
              />
            </span>
            <span className="grid leading-none">
              <span className="font-display text-2xl font-bold text-ink sm:text-3xl">Линия Букета</span>
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-rose-dust sm:block">
                Цветы в Беляево
              </span>
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-sm font-semibold text-taupe xl:flex">
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
      </header>

      <div
        className={`fixed inset-x-0 top-20 z-[80] border-b border-rose-dust/10 bg-[#f7f3ef] px-5 py-7 shadow-soft transition duration-300 xl:hidden ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="mx-auto grid max-w-3xl gap-4 text-lg font-semibold text-graphite sm:grid-cols-2 sm:items-center sm:gap-5 lg:grid-cols-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 transition hover:bg-white hover:text-rose-dust"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={vkUrl()} external className="mt-2 w-full sm:col-span-2 sm:mx-auto sm:mt-3 sm:max-w-sm lg:col-span-3">
            Написать ВКонтакте
          </ButtonLink>
        </nav>
      </div>
    </>
  );
}
