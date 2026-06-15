const benefits = [
  { title: "Свежие поставки", text: "Подбираем цветы по сезону и собираем заказ только после согласования." },
  { title: "Авторская сборка", text: "Собираем не по шаблону, а под настроение, повод и бюджет." },
  { title: "Рядом с вами", text: "Беляево, Коньково, Калужская и доставка по Москве." },
  { title: "Фото перед отправкой", text: "Покажем готовый букет до доставки или самовывоза." }
];

const categories = [
  { title: "Авторские букеты", text: "Готовые композиции с возможностью адаптации." },
  { title: "Монобукеты", text: "Один цветок, один оттенок, выразительный объём." },
  { title: "Цветочная палитра", text: "Поштучные цветы для самостоятельной сборки." },
  { title: "Цветочные композиции", text: "Настольные и интерьерные варианты." },
  { title: "Цветы в коробке", text: "Подарок, который удобно вручать и перевозить." },
  { title: "Открытки и дополнения", text: "Небольшие детали для личного сообщения." }
];

export function Catalog() {
  return (
    <section id="catalog" className="section-padding bg-milk">
      <div className="section-shell">
        <div className="grid gap-4 md:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="surface rounded-[28px] p-6">
              <p className="font-display text-3xl font-bold leading-none text-ink">{benefit.title}</p>
              <p className="mt-4 text-sm leading-6 text-taupe">{benefit.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Каталог</p>
            <h2 className="font-display text-5xl font-bold text-graphite sm:text-6xl">
              Выберите формат заказа
            </h2>
          </div>
          <p className="max-w-md text-taupe">
            Логика простая: готовый букет, монобукет, цветы поштучно или индивидуальный запрос. Всё можно обсудить в VK или Telegram.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href={category.title.includes("палитра") || category.title.includes("Палитра") ? "#palette" : "#popular"}
              className="group rounded-[30px] border border-rose-dust/10 bg-white p-7 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-rose-dust/35"
            >
              <span className="text-sm font-semibold text-rose-dust">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 font-display text-4xl font-bold leading-none text-ink">{category.title}</h3>
              <p className="mt-4 min-h-12 text-sm leading-6 text-taupe">{category.text}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-taupe transition group-hover:text-rose-dust">
                Смотреть
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
