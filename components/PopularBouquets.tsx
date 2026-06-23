import Image from "next/image";
import { products } from "@/data/products";
import { telegramUrl, vkUrl } from "@/config/contacts";

export function PopularBouquets() {
  return (
    <section id="popular" className="section-padding bg-white">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Популярные букеты</p>
            <h2 className="font-display text-5xl font-bold text-graphite sm:text-6xl">
              Витрина любимых сочетаний
            </h2>
          </div>
          <p className="max-w-md text-taupe">
            Каждую композицию можно адаптировать по цвету, размеру и бюджету.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => {
            const orderText = `Здравствуйте! Хочу заказать букет «${product.name}» (${product.price}).`;

            return (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[30px] border border-rose-dust/10 bg-milk shadow-soft transition duration-200 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#e6e4e1]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute left-5 top-5 h-20 w-20 overflow-hidden rounded-full border border-white/50 bg-blush/35 opacity-45 shadow-sm mix-blend-multiply sm:h-24 sm:w-24"
                  >
                    <Image
                      src="/images/logo.png"
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 flex-1 font-display text-[2rem] font-bold leading-none text-ink sm:text-3xl">
                      {product.name}
                    </h3>
                    <p className="max-w-full shrink-0 whitespace-nowrap rounded-full bg-white px-3 py-1 text-sm font-bold text-rose-dust">
                      {product.price}
                    </p>
                  </div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-taupe">{product.composition}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={vkUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring rounded-full bg-rose-dust px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#9a6f77]"
                    >
                      VK
                    </a>
                    <a
                      href={telegramUrl(orderText)}
                      target="_blank"
                      rel="noreferrer"
                      className="focus-ring rounded-full border border-rose-dust/25 bg-white px-4 py-3 text-center text-sm font-semibold text-rose-dust transition hover:border-rose-dust/50"
                    >
                      Telegram
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
