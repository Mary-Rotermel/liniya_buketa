const steps = [
  "Выберите букет, цветы поштучно или пришлите референс",
  "Мы уточним детали и бюджет",
  "Соберём букет и отправим фото перед выдачей",
  "Доставим или подготовим к самовывозу"
];

export function HowToOrder() {
  return (
    <section id="order" className="section-padding bg-milk">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Как заказать</p>
          <h2 className="font-display text-5xl font-bold leading-none text-graphite sm:text-6xl">Путь от идеи до букета</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="surface rounded-[30px] p-7">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="mt-8 text-lg font-semibold leading-7 text-graphite">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
