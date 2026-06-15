"use client";

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
        <div className="rounded-[34px] border border-white/80 bg-white/75 p-8 shadow-soft sm:p-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rose-dust">Контакты</p>
          <h2 className="font-display text-5xl font-bold text-graphite sm:text-6xl">Напишите нам</h2>
          <div className="mt-8 grid gap-4 text-taupe">
            {/* Замените контакты в файле config/contacts.ts. */}
            <a className="w-fit text-rose-dust" href={phoneHref()}>
              {contacts.phone}
            </a>
            <a className="w-fit text-rose-dust" href={vkUrl()} target="_blank" rel="noreferrer">
              ВКонтакте
            </a>
            <a className="w-fit text-rose-dust" href={telegramUrl()} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="w-fit text-rose-dust" href={contacts.instagramUrl} target="_blank" rel="noreferrer">
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

        <form onSubmit={handleSubmit} className="rounded-[34px] bg-white p-8 shadow-soft sm:p-10">
          <h3 className="font-display text-4xl font-bold text-graphite">Форма заявки</h3>
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
              className="focus-ring min-h-12 rounded-full bg-rose-dust px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#9a6f77]"
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
