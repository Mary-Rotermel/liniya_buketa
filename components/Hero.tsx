import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { telegramUrl, vkUrl } from "@/config/contacts";

export function Hero() {
  const message = "Здравствуйте! Хочу заказать букет в Линия Букета.";

  return (
    <section id="hero" className="relative overflow-hidden bg-porcelain pt-28">
      <div className="section-shell grid min-h-[760px] items-center gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-rose-dust">
            Цветочный магазин в Беляево
          </p>
          <p className="mb-3 font-display text-4xl font-bold text-rose-dust sm:text-5xl">
            Линия Букета
          </p>
          <h1 className="font-display text-6xl font-bold leading-[0.95] text-graphite sm:text-7xl lg:text-8xl">
            Букеты, которые говорят за вас
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-taupe sm:text-xl">
            Авторские букеты, поштучные цветы и доставка цветов по Москве
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#popular">Выбрать букет</ButtonLink>
            <ButtonLink href={vkUrl()} external variant="secondary">
              Написать ВКонтакте
            </ButtonLink>
            <ButtonLink href={telegramUrl(message)} external variant="secondary">
              Написать в Telegram
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[620px]">
          <div className="absolute inset-0 rounded-[36px] bg-white shadow-soft" />
          <div className="absolute -left-5 top-9 h-36 w-36 rounded-full bg-rose/20 blur-3xl" />
          <div className="absolute -bottom-8 right-10 h-48 w-48 rounded-full bg-white blur-2xl" />
          <div className="relative h-full overflow-hidden rounded-[36px] border border-white/80">
            {/* Замените src на главное фото букета в студийном свете. */}
            <Image
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1400&q=90"
              alt="Авторский букет Линия Букета в светлой студии"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
