"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { contacts, phoneHref, telegramUrl, vkUrl } from "@/config/contacts";

export function ContactSection() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Здесь можно подключить отправку в Telegram-бота, CRM или API route Next.js.
    setMessage("Спасибо! Мы скоро свяжемся с вами");
    event.currentTarget.reset();
  }

  return (
    <section id="contacts" className="section-padding bg-porcelain">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface min-w-0 rounded-[40px] p-8 sm:p-10">
          <div className="flex items-start gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-rose-dust/20 bg-blush shadow-petal">
              <Image
                src="/images/logo.png"
                alt="Логотип Линия Букета"
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </div>
            <div>
              <p className="eyebrow mb-4">Контакты</p>
              <h2 className="font-display text-5xl font-bold leading-none text-graphite sm:text-6xl">Напишите нам</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-3 text-taupe">
            {/* Замените контакты в файле config/contacts.ts. */}
            <a className="w-fit font-semibold text-ink" href={phoneHref()}>
              {contacts.phone}
            </a>
            <a className="w-fit font-semibold text-rose-dust" href={vkUrl()} target="_blank" rel="noreferrer">
              ВКонтакте
            </a>
            <a className="w-fit font-semibold text-rose-dust" href={telegramUrl()} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="w-fit font-semibold text-rose-dust" href={contacts.instagramUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <p>{contacts.address}</p>
            <p>{contacts.workingHours}</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-[28px] border border-rose-dust/10 bg-milk shadow-soft">
            {/* Замените ссылки на карту в файле config/contacts.ts. */}
            <iframe
              src={contacts.mapEmbedUrl}
              title="Линия Букета на Яндекс.Картах"
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              className="block px-6 py-4 text-sm font-semibold text-rose-dust transition hover:bg-white"
              href={contacts.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Открыть маршрут в Яндекс.Картах
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="min-w-0 rounded-[40px] bg-white p-8 shadow-editorial sm:p-10">
          <p className="eyebrow mb-4">Заявка</p>
          <h3 className="font-display text-5xl font-bold leading-none text-graphite">Расскажите, какой букет нужен</h3>
          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-taupe">
              Имя
              <input
                required
                name="name"
                placeholder="Ваше имя"
                className="focus-ring rounded-2xl border border-rose-dust/15 bg-milk px-5 py-4 text-graphite outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-taupe">
              Телефон
              <input
                required
                type="tel"
                name="phone"
                placeholder="+7 ___ ___-__-__"
                className="focus-ring rounded-2xl border border-rose-dust/15 bg-milk px-5 py-4 text-graphite outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-taupe">
              Желаемый бюджет
              <input
                name="budget"
                placeholder="Например, до 7 000 ₽"
                className="focus-ring rounded-2xl border border-rose-dust/15 bg-milk px-5 py-4 text-graphite outline-none"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-taupe">
              Комментарий
              <textarea
                name="comment"
                rows={5}
                placeholder="Повод, дата, адрес, пожелания"
                className="focus-ring resize-y rounded-2xl border border-rose-dust/15 bg-milk px-5 py-4 text-graphite outline-none"
              />
            </label>
            <button
              type="submit"
              className="focus-ring min-h-12 rounded-full bg-ink px-6 text-sm font-semibold text-white shadow-editorial transition hover:-translate-y-0.5 hover:bg-graphite"
            >
              Отправить заявку
            </button>
            <p className="min-h-6 font-semibold text-rose-dust" role="status" aria-live="polite">
              {message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
