export type Product = {
  name: string;
  composition: string;
  price: string;
  image: string;
  alt: string;
};

export const products: Product[] = [
  {
    name: "Небесное прикосновение",
    composition: "Розы, альстромерии, оксипеталум, эвкалипт, писташ",
    price: "от 6 500 ₽",
    // Замените ссылку на реальное фото букета.
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=85",
    alt: "Нежный авторский букет в пастельных оттенках"
  },
  {
    name: "Пыльная роза",
    composition: "Пионовидные розы, диантус, эвкалипт",
    price: "от 6 700 ₽",
    // Замените ссылку на реальное фото букета.
    image: "/images/baskets/nebo_v_ladonyax.PNG",
    alt: "Букет в оттенке пыльной розы"
  },
  {
    name: "Для неё",
    composition: "Розы, ранункулюсы, хамелациум",
    price: "от 7 200 ₽",
    // Замените ссылку на реальное фото букета.
    image: "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=900&q=85",
    alt: "Элегантный букет для подарка"
  },
  {
    name: "Лёгкое признание",
    composition: "Тюльпаны, кустовые розы, нежная зелень",
    price: "от 4 900 ₽",
    // Замените ссылку на реальное фото букета.
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=85",
    alt: "Светлый букет для романтичного повода"
  },
  {
    name: "Белый сад",
    composition: "Белые розы, гортензия, орхидея",
    price: "от 8 900 ₽",
    // Замените ссылку на реальное фото букета.
    image: "https://images.unsplash.com/photo-1509719662283-4e93fb8c62ca?auto=format&fit=crop&w=900&q=85",
    alt: "Белый премиальный букет"
  },
  {
    name: "Тёплый вечер",
    composition: "Розы cappuccino, гвоздика, сухоцветы",
    price: "от 6 300 ₽",
    // Замените ссылку на реальное фото букета.
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=85",
    alt: "Тёплый букет в натуральных оттенках"
  },
  {
    name: "Свадебная классика",
    composition: "Пионовидные розы, фрезия, эустома",
    price: "от 12 000 ₽",
    // Замените ссылку на реальное фото свадебного букета.
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
    alt: "Свадебный букет в бело-молочных оттенках"
  },
  {
    name: "Воздушный комплимент",
    composition: "Гортензия, кустовая роза, сезонные акценты",
    price: "от 5 500 ₽",
    // Замените ссылку на реальное фото букета.
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=85",
    alt: "Воздушный букет в светлой студийной стилистике"
  }
];
