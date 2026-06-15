const reviews = [
  {
    name: "Анна",
    text: "Букет получился очень нежным и свежим. Отдельно понравилось, что прислали фото перед доставкой."
  },
  {
    name: "Мария",
    text: "Заказывала маме в Беляево. Быстро ответили, помогли выбрать оттенки и доставили точно по времени."
  },
  {
    name: "Екатерина",
    text: "Помогли собрать букет из любимых цветов поштучно. Получилось естественно, свежо и ровно под мой бюджет."
  },
  {
    name: "Ольга",
    text: "Нужен был срочный букет. Всё собрали аккуратно, красиво упаковали и отправили фото перед курьером."
  }
];

export function Reviews() {
  return (
    <section className="section-padding bg-milk">
      <div className="section-shell">
        <p className="eyebrow mb-4">Отзывы</p>
        <h2 className="font-display text-5xl font-bold text-graphite sm:text-6xl">Тёплые слова клиентов</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <blockquote key={review.name} className="surface rounded-[30px] p-7">
              <p className="min-h-32 text-taupe">{review.text}</p>
              <cite className="mt-8 block not-italic font-semibold text-ink">{review.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
