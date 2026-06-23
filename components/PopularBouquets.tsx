import Image from "next/image";
import Link from "next/link";
import { productCategories, products } from "@/data/products";
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

        <div className="mt-10 space-y-14">
          {productCategories.map((category) => {
            const categoryProducts = products.filter((product) => product.category === category);

            return (
              <section key={category} id={category === "Композиции" ? "compositions" : undefined}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <h3 className="font-display text-4xl font-bold leading-none text-ink sm:text-5xl">{category}</h3>
                  <p className="text-sm font-semibold text-taupe">{categoryProducts.length ? `${categoryProducts.length} позиций` : "Скоро добавим"}</p>
                </div>

                {categoryProducts.length ? (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {categoryProducts.map((product) => {
                      const orderText = `Здравствуйте! Хочу заказать «${product.name}» (${product.price}).`;

                      return (
                        <article
                          key={product.name}
                          className="group overflow-hidden rounded-[30px] border border-rose-dust/10 bg-milk shadow-soft transition duration-200 hover:-translate-y-1"
                        >
                          <Link
                            href={`/catalog/${product.slug}`}
                            className="relative block aspect-[4/5] overflow-hidden bg-[#e6e4e1]"
                            aria-label={`Открыть страницу товара ${product.name}`}
                          >
                            <Image
                              src={product.image}
                              alt={product.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                          </Link>
                          <div className="p-6">
                            <div className="flex items-start justify-between gap-3">
                              <Link
                                href={`/catalog/${product.slug}`}
                                className="min-w-0 flex-1 font-display text-[2rem] font-bold leading-none text-ink transition hover:text-rose-dust sm:text-3xl"
                              >
                                {product.name}
                              </Link>
                              <p className="max-w-full shrink-0 whitespace-nowrap rounded-full bg-white px-3 py-1 text-sm font-bold text-rose-dust">
                                {product.price}
                              </p>
                            </div>
                            <p className="mt-3 min-h-12 text-sm leading-6 text-taupe">{product.composition}</p>
                            <Link
                              href={`/catalog/${product.slug}`}
                              className="focus-ring mt-5 flex min-h-12 items-center justify-center rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-graphite"
                            >
                              Подробнее
                            </Link>
                            <div className="mt-3 grid grid-cols-2 gap-3">
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
                ) : (
                  <div className="rounded-[28px] border border-rose-dust/10 bg-milk p-8 text-taupe">
                    Раздел уже подготовлен. Добавим товары, когда появятся фото, составы и цены.
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
