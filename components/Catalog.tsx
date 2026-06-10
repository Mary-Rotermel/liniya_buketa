const benefits = [
  "Свежие цветы",
  "Авторская сборка",
  "Доставка по Москве",
  "Индивидуальный подход",
  "Свадебные букеты",
  "Фото букета перед отправкой"
];

const categories = [
  "Авторские букеты",
  "Монобукеты",
  "Свадебные букеты",
  "Цветочные композиции",
  "Цветы в коробке",
  "Открытки и дополнения"
];

export function Catalog() {
  return (
    <section id="catalog" className="section-padding bg-milk">
      <div className="section-shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-3xl border border-rose-dust/10 bg-white/70 p-6 shadow-soft">
              <p className="font-display text-3xl font-bold text-graphite">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rose-dust">Каталог</p>
            <h2 className="font-display text-5xl font-bold text-graphite sm:text-6xl">
              Цветы для любого повода
            </h2>
          </div>
          <p className="max-w-md text-taupe">
            Собираем букеты под настроение, бюджет и повод. Можно выбрать готовый вариант или отправить референс.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={category}
              href={category.includes("Свадебные") ? "#wedding" : "#popular"}
              className="group rounded-[28px] border border-rose-dust/10 bg-white p-7 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-rose-dust/30"
            >
              <span className="text-sm font-semibold text-rose-dust">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 font-display text-4xl font-bold leading-none text-graphite">{category}</h3>
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
