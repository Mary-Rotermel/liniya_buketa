const steps = [
  "Выберите букет, цветы поштучно или пришлите референс",
  "Мы уточним детали и бюджет",
  "Соберём букет и отправим фото перед выдачей",
  "Доставим или подготовим к самовывозу"
];

export function HowToOrder() {
  return (
    <section className="section-padding bg-milk">
      <div className="section-shell">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-rose-dust">Как заказать</p>
        <h2 className="font-display text-5xl font-bold text-graphite sm:text-6xl">Просто и спокойно</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-[28px] border border-rose-dust/10 bg-white p-7 shadow-soft">
              <span className="text-sm font-bold text-rose-dust">{index + 1}</span>
              <p className="mt-8 text-lg font-semibold leading-7 text-graphite">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
