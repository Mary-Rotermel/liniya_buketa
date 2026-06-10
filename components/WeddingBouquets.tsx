import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { whatsappUrl } from "@/config/contacts";

export function WeddingBouquets() {
  return (
    <section id="wedding" className="bg-porcelain">
      <div className="section-shell grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div className="relative min-h-[460px] overflow-hidden rounded-[34px] shadow-soft">
          {/* Замените src на фото свадебного букета или невесты с букетом. */}
          <Image
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=90"
            alt="Свадебный букет в молочно-белой гамме"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center rounded-[34px] border border-white/80 bg-white/75 p-8 shadow-soft sm:p-12 lg:p-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rose-dust">
              Свадебные букеты
            </p>
            <h2 className="font-display text-5xl font-bold leading-none text-graphite sm:text-6xl">
              Букет под образ, платье и настроение дня
            </h2>
            <div className="mt-8 grid gap-4 text-taupe">
              <p>Индивидуально подбираем форму, оттенки и состав под образ невесты.</p>
              <p>Проводим консультацию флориста, помогаем с букетом, бутоньеркой и оформлением зоны.</p>
              <p>Собираем бережно, делаем фото перед выдачей и согласуем детали заранее.</p>
            </div>
            <ButtonLink
              href={whatsappUrl("Здравствуйте! Хочу обсудить свадебный букет.")}
              external
              className="mt-9"
            >
              Обсудить свадебный букет
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
