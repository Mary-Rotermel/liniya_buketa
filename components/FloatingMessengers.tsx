import { telegramUrl, whatsappUrl } from "@/config/contacts";

export function FloatingMessengers() {
  const text = "Здравствуйте! Хочу заказать букет в Линия Букета.";

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={whatsappUrl(text)}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в WhatsApp"
        className="focus-ring grid h-14 w-14 place-items-center rounded-full bg-rose-dust text-sm font-bold text-white shadow-petal transition hover:-translate-y-1"
      >
        WA
      </a>
      <a
        href={telegramUrl(text)}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в Telegram"
        className="focus-ring grid h-14 w-14 place-items-center rounded-full border border-rose-dust/20 bg-white text-sm font-bold text-rose-dust shadow-soft transition hover:-translate-y-1"
      >
        TG
      </a>
    </div>
  );
}
