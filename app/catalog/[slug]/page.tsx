import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Header } from "@/components/Header";
import { FloatingMessengers } from "@/components/FloatingMessengers";
import { getProductBySlug, products } from "@/data/products";
import { telegramUrl, vkUrl } from "@/config/contacts";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Товар не найден"
    };
  }

  return {
    title: product.name,
    description: `${product.name}: ${product.composition}. ${product.price}. Линия Букета, Беляево.`
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const orderText = `Здравствуйте! Хочу заказать «${product.name}» (${product.price}).`;

  return (
    <>
      <Header />
      <main className="bg-porcelain pt-28">
        <section className="section-padding">
          <div className="section-shell">
            <Link href="/#popular" className="text-sm font-semibold text-taupe transition hover:text-rose-dust">
              Назад к витрине
            </Link>

            <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="overflow-hidden rounded-[36px] border border-rose-dust/10 bg-[#e6e4e1] shadow-editorial">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[36px] border border-rose-dust/10 bg-white p-7 shadow-soft sm:p-10">
                <p className="eyebrow mb-5">{product.category}</p>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <h1 className="font-display text-5xl font-bold leading-none text-ink sm:text-6xl">
                    {product.name}
                  </h1>
                  <p className="w-fit shrink-0 rounded-full bg-milk px-4 py-2 text-base font-bold text-rose-dust">
                    {product.price}
                  </p>
                </div>

                <div className="mt-8 space-y-6 text-taupe">
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-dust">Состав</h2>
                    <p className="mt-3 text-lg leading-8">{product.composition}</p>
                  </div>
                  <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-rose-dust">Описание</h2>
                    <p className="mt-3 text-lg leading-8">{product.details}</p>
                  </div>
                </div>

                <div className="mt-9 grid gap-3 sm:grid-cols-2">
                  <ButtonLink href={vkUrl()} external className="w-full">
                    Заказать в VK
                  </ButtonLink>
                  <ButtonLink href={telegramUrl(orderText)} external variant="secondary" className="w-full">
                    Заказать в Telegram
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingMessengers />
    </>
  );
}
