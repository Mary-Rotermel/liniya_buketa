import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { telegramUrl, vkUrl } from "@/config/contacts";

const flowers = [
  "Розы и кустовые розы",
  "Эустома",
  "Альстромерия",
  "Хризантема",
  "Гвоздика",
  "Сезонные акценты"
];

export function FlowerPalette() {
  const message = "Здравствуйте! Хочу собрать букет из цветов поштучно.";

  return (
    <section id="palette" className="bg-porcelain">
      <div className="section-shell grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div className="relative min-h-[460px] overflow-hidden rounded-[34px] shadow-soft">
          {/* Замените src на фото витрины или поштучных цветов. */}
          <Image
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=90"
            alt="Свежие цветы поштучно для самостоятельной сборки букета"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center rounded-[34px] border border-white/80 bg-white/75 p-8 shadow-soft sm:p-12 lg:p-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rose-dust">
              Цветочная палитра
            </p>
            <h2 className="font-display text-5xl font-bold leading-none text-graphite sm:text-6xl">
              Соберите букет из любимых цветов
            </h2>
            <div className="mt-8 grid gap-4 text-taupe">
              <p>
                Можно выбрать цветы поштучно и собрать букет самостоятельно: по оттенкам, аромату, форме и настроению.
              </p>
              <p>
                Флорист подскажет, какие стебли хорошо сочетаются между собой, сколько цветов нужно для желаемого объёма и как уложиться в бюджет.
              </p>
              <p>
                Перед сборкой уточним наличие, предложим свежие сезонные варианты и отправим фото готовой композиции.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {flowers.map((flower) => (
                <span key={flower} className="rounded-full border border-rose-dust/15 bg-milk px-4 py-2 text-sm font-semibold text-rose-dust">
                  {flower}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={vkUrl()} external>
                Написать ВКонтакте
              </ButtonLink>
              <ButtonLink href={telegramUrl(message)} external variant="secondary">
                Написать в Telegram
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
