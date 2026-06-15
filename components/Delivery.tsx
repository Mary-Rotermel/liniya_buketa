const deliveryItems = [
  {
    title: "Москва и ЮЗАО",
    text: "Доставляем цветы по Москве, особенно Беляево, Коньково, Калужская и ближайшие районы ЮЗАО."
  },
  {
    title: "Самовывоз",
    text: "Самовывоз возможен по договорённости после подтверждения времени готовности заказа."
  },
  {
    title: "Срочные заказы",
    text: "Срочные букеты и поштучные цветы собираем при наличии подходящих цветов и свободного интервала доставки."
  },
  {
    title: "Стоимость",
    text: "Стоимость доставки рассчитывается индивидуально по адресу, времени и объёму заказа."
  }
];

export function Delivery() {
  return (
    <section id="delivery" className="section-padding bg-white">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Доставка</p>
          <h2 className="font-display text-5xl font-bold text-graphite sm:text-6xl">
            Бережно привезём цветы по Москве
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryItems.map((item) => (
            <div key={item.title} className="rounded-[30px] border border-rose-dust/10 bg-milk p-7 shadow-soft">
              <h3 className="font-display text-3xl font-bold text-ink">{item.title}</h3>
              <p className="mt-5 text-sm leading-6 text-taupe">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
