import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { telegramUrl, vkUrl } from "@/config/contacts";

export function Hero() {
  const message = "Здравствуйте! Хочу заказать букет в Линия Букета.";

  return (
    <section id="hero" className="relative overflow-hidden bg-porcelain pt-28">
      <div className="section-shell grid min-h-[760px] items-center gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow mb-5">
            Цветочный магазин в Беляево
          </p>
          <div className="mb-7 flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-rose-dust/20 bg-blush shadow-petal">
              <Image
                src="/images/logo.png"
                alt="Логотип Линия Букета"
                fill
                priority
                sizes="80px"
                className="object-cover object-center"
              />
            </div>
            <p className="font-display text-4xl font-bold leading-none text-rose-dust sm:text-5xl">
              Линия Букета
            </p>
          </div>
          <h1 className="max-w-4xl font-display text-6xl font-bold leading-[0.9] text-graphite sm:text-7xl lg:text-8xl">
            Букеты, которые говорят за вас
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-taupe sm:text-xl">
            Авторские букеты, поштучные цветы и доставка по Беляево, Коньково, Калужской и ЮЗАО
          </p>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm font-semibold text-ink sm:grid-cols-3">
            <span className="rounded-full border border-rose-dust/15 bg-white/70 px-4 py-3">Фото перед отправкой</span>
            <span className="rounded-full border border-rose-dust/15 bg-white/70 px-4 py-3">Сборка от 30 минут</span>
            <span className="rounded-full border border-rose-dust/15 bg-white/70 px-4 py-3">Цветы поштучно</span>
          </div>
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
          <div className="absolute inset-0 rounded-[44px] bg-white shadow-editorial" />
          <div className="relative h-full overflow-hidden rounded-[44px] border border-white/80">
            {/* Замените src на главное фото букета в студийном свете. */}
            <Image
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1400&q=90"
              alt="Авторский букет Линия Букета в светлой студии"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-white/60 bg-milk/90 p-5 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-dust">Сегодня в наличии</p>
              <p className="mt-2 text-lg font-semibold text-ink">Розы, эустома, альстромерия, сезонные акценты</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
