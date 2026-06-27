export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  composition: string;
  price: string;
  image?: string;
  alt: string;
  details: string;
};

export type ProductCategory =
  | "Авторские букеты"
  | "Монобукеты"
  | "Искусственные цветы"
  | "Мягкие игрушки"
  | "Композиции"
  | "Цветочная палитра";

export const productCategories: ProductCategory[] = [
  "Авторские букеты",
  "Монобукеты",
  "Искусственные цветы",
  "Мягкие игрушки",
  "Композиции",
  "Цветочная палитра"
];

export const productCategoryAnchors: Record<ProductCategory, string> = {
  "Авторские букеты": "author-bouquets",
  "Монобукеты": "mono-bouquets",
  "Искусственные цветы": "artificial-flowers",
  "Мягкие игрушки": "soft-toys",
  "Композиции": "compositions",
  "Цветочная палитра": "palette-products"
};

export const products: Product[] = [
  {
    slug: "nebesnoe-prikosnovenie",
    name: "Небесное прикосновение",
    category: "Авторские букеты",
    composition: "Розы, альстромерии, оксипеталум, эвкалипт, писташ",
    price: "от 6 500 ₽",
    // Замените ссылку на реальное фото букета.
    image: "/images/baskets/nebo_v_ladonyax.PNG",
    alt: "Нежный авторский букет в пастельных оттенках",
    details: "Светлый авторский букет в холодной пастельной гамме. Подойдёт для нежного поздравления, дня рождения или спокойного комплимента без лишней яркости."
  },
  {
    slug: "rozovaya-freziya",
    name: "Розовая фрезия",
    category: "Авторские букеты",
    composition: "Пионовидные кустовые розы, белая эустома, фрезия, эвкалипт",
    price: "от 6 700 ₽",
    // Замените ссылку на реальное фото букета.
    image: "/images/bouquets/pink-rose-eustoma.PNG",
    alt: "Розовый букет с пионовидными розами, белой эустомой и фрезией",
    details: "Романтичный розовый букет с воздушной белой эустомой и фактурной зеленью. Можно адаптировать по размеру и оттенку упаковки."
  },
  {
    slug: "lavandovaya-korzina",
    name: "Утро в саду",
    category: "Композиции",
    composition: "Хризантемы, гвоздики, статица, лилия, декоративная зелень",
    price: "от 2 500 ₽",
    // Замените ссылку на реальное фото букета.
    image: "/images/bouquets/lavender-basket.PNG",
    alt: "Композиция Утро в саду с хризантемами, гвоздиками, статицей и лилией",
    details: "Корзина с мягким лавандовым акцентом. Удобный формат для доставки: композицию не нужно ставить в вазу."
  },
  {
    slug: "rozovyj-sad",
    name: "Розовый сад",
    category: "Авторские букеты",
    composition: "Гортензия, роза, гвоздики, кустовые хризантемы, сантини, декоративная зелень",
    price: "от 8 900 ₽",
    // Замените ссылку на реальное фото букета.
    image: "/images/bouquets/pink-garden.PNG",
    alt: "Пышный розовый букет с гортензией, розой, гвоздиками и хризантемами",
    details: "Пышный букет в розовой гамме для заметного, праздничного подарка. Состав можно скорректировать по наличию цветов."
  },
  {
    slug: "rozy-medzhik-tajm",
    name: "Розы Меджик Тайм",
    category: "Цветочная палитра",
    composition: "Роза Меджик Тайм, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-medzhik-tajm.PNG",
    alt: "Роза Меджик Тайм поштучно",
    details: "Поштучная роза Меджик Тайм для самостоятельной сборки букета. Количество можно выбрать под нужный объём."
  },
  {
    slug: "rozy-kandelajt",
    name: "Розы Канделайт",
    category: "Цветочная палитра",
    composition: "Роза Канделайт, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-kandelajt.PNG",
    alt: "Роза Канделайт поштучно",
    details: "Поштучная роза Канделайт в светлом оттенке. Подойдёт для нежных монобукетов и смешанных композиций."
  },
  {
    slug: "rozy-gocha",
    name: "Розы Гоча",
    category: "Цветочная палитра",
    composition: "Роза Гоча, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-gocha.PNG",
    alt: "Роза Гоча поштучно",
    details: "Поштучная роза Гоча насыщенного оттенка. Хорошо смотрится в ярких и контрастных букетах."
  },
  {
    slug: "rozy-esperansa",
    name: "Розы Эсперанса",
    category: "Цветочная палитра",
    composition: "Роза Эсперанса, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-esperansa.PNG",
    alt: "Роза Эсперанса поштучно",
    details: "Поштучная роза Эсперанса с мягким переходом оттенков. Подходит для романтичных букетов."
  },
  {
    slug: "rozy-kabaret",
    name: "Розы Кабарет",
    category: "Цветочная палитра",
    composition: "Роза Кабарет, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-kabaret.PNG",
    alt: "Роза Кабарет поштучно",
    details: "Поштучная роза Кабарет с выразительной окраской. Можно использовать как акцент в сборном букете."
  },
  {
    slug: "rozy-limonad",
    name: "Розы Лимонад",
    category: "Цветочная палитра",
    composition: "Роза Лимонад, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-limonad.PNG",
    alt: "Роза Лимонад поштучно",
    details: "Поштучная роза Лимонад в свежем зелёно-жёлтом оттенке. Хороша для необычных современных сочетаний."
  },
  {
    slug: "rozy-bi-svit",
    name: "Розы Би свит",
    category: "Цветочная палитра",
    composition: "Роза Би свит, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-bi-svit.PNG",
    alt: "Роза Би свит поштучно",
    details: "Поштучная роза Би свит в нежной розовой гамме. Подходит для мягких пастельных букетов."
  },
  {
    slug: "roza-eksplorer",
    name: "Роза Эксплорер",
    category: "Цветочная палитра",
    composition: "Роза Эксплорер, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/roza-eksplorer.PNG",
    alt: "Роза Эксплорер поштучно",
    details: "Поштучная роза Эксплорер глубокого красного оттенка. Классический вариант для выразительного букета."
  },
  {
    slug: "roza-svitnes",
    name: "Роза Свитнес",
    category: "Цветочная палитра",
    composition: "Роза Свитнес, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/roza-svitnes.JPG",
    alt: "Роза Свитнес поштучно",
    details: "Поштучная роза Свитнес с нежной двухцветной окраской. Хорошо дополняет светлые и розовые композиции."
  },
  {
    slug: "rozy-mandarin",
    name: "Розы мандарин",
    category: "Цветочная палитра",
    composition: "Роза мандарин, 1 шт",
    price: "300 ₽",
    image: "/images/bouquets/rozy-mandarin.PNG",
    alt: "Роза мандарин поштучно",
    details: "Поштучная роза мандарин в тёплой розово-коралловой гамме. Подойдёт для ярких сезонных букетов."
  },
  {
    slug: "iskusstvennye-tyulpany-5-shtuk",
    name: "Тюльпаны: букет из 5 штук",
    category: "Искусственные цветы",
    composition: "Искусственные тюльпаны 5 шт",
    price: "700 ₽",
    image: "/images/bouquets/iskusstvennye-tyulpany-5-shtuk.PNG",
    alt: "Искусственные тюльпаны букет из 5 штук",
    details: "Декоративный букет из искусственных тюльпанов. Подойдёт для интерьера, витрины или долговечного подарка."
  },
  {
    slug: "iskusstvennyj-ranunkulyus",
    name: "Ранункулюс",
    category: "Искусственные цветы",
    composition: "Искусственный ранункулюс, 1 шт",
    price: "700 ₽",
    image: "/images/bouquets/iskusstvennyj-ranunkulyus.PNG",
    alt: "Искусственный ранункулюс",
    details: "Искусственный ранункулюс для декора и сборных композиций. Можно заказать нужное количество стеблей."
  },
  {
    slug: "iskusstvennaya-orhideya",
    name: "Орхидея",
    category: "Искусственные цветы",
    composition: "Искусственная орхидея, 1 шт",
    price: "600 ₽",
    image: "/images/bouquets/iskusstvennaya-orhideya.PNG",
    alt: "Искусственная орхидея",
    details: "Искусственная орхидея для интерьерных композиций. Смотрится аккуратно и не требует ухода."
  },
  {
    slug: "iskusstvennyj-delfinium",
    name: "Дельфиниум",
    category: "Искусственные цветы",
    composition: "Искусственный дельфиниум, 1 шт",
    price: "1 000 ₽",
    image: "/images/bouquets/iskusstvennyj-delfinium.PNG",
    alt: "Искусственный дельфиниум",
    details: "Высокий искусственный дельфиниум для воздушных интерьерных букетов и декоративных акцентов."
  },
  {
    slug: "iskusstvennaya-gortenziya",
    name: "Гортензия",
    category: "Искусственные цветы",
    composition: "Искусственная гортензия, 1 шт",
    price: "900 ₽",
    image: "/images/bouquets/iskusstvennaya-gortenziya.PNG",
    alt: "Искусственная гортензия",
    details: "Объёмная искусственная гортензия для композиций, витрин и домашнего декора."
  },
  {
    slug: "iskusstvennaya-proteya",
    name: "Протея",
    category: "Искусственные цветы",
    composition: "Искусственная протея, 1 шт",
    price: "1 000 ₽",
    image: "/images/bouquets/iskusstvennaya-proteya.PNG",
    alt: "Искусственная протея",
    details: "Искусственная протея с выразительной формой. Подходит для необычных декоративных букетов."
  },
  {
    slug: "iskusstvennyj-mak",
    name: "Мак",
    category: "Искусственные цветы",
    composition: "Искусственный мак, 1 шт",
    price: "800 ₽",
    image: "/images/bouquets/iskusstvennyj-mak.PNG",
    alt: "Искусственный мак",
    details: "Искусственный мак в яркой гамме для декоративных композиций и интерьерных акцентов."
  },
  {
    slug: "iskusstvennaya-magnoliya",
    name: "Магнолия",
    category: "Искусственные цветы",
    composition: "Искусственная магнолия, 1 шт",
    price: "800 ₽",
    image: "/images/bouquets/iskusstvennaya-magnoliya.PNG",
    alt: "Искусственная магнолия",
    details: "Искусственная магнолия для элегантных интерьерных композиций и долговечного декора."
  },
  {
    slug: "iskusstvennaya-roza-kustovaya",
    name: "Роза кустовая",
    category: "Искусственные цветы",
    composition: "Искусственная кустовая роза, 1 шт",
    price: "400 ₽",
    image: "/images/bouquets/iskusstvennaya-roza-kustovaya.PNG",
    alt: "Искусственная кустовая роза",
    details: "Искусственная кустовая роза для сборки декоративных букетов. Можно заказать поштучно."
  },
  {
    slug: "iskusstvennaya-mimoza",
    name: "Мимоза",
    category: "Искусственные цветы",
    composition: "Искусственная мимоза, 1 шт",
    price: "460 ₽",
    image: "/images/bouquets/iskusstvennaya-mimoza.PNG",
    alt: "Искусственная мимоза",
    details: "Искусственная мимоза для лёгких весенних композиций и яркого интерьерного декора."
  },
  {
    slug: "myagkaya-igrushka-obezyana-belaya",
    name: "Мягкая игрушка обезьяна белая",
    category: "Мягкие игрушки",
    composition: "Мягкая игрушка, 1 шт",
    price: "1 150 ₽",
    image: "/images/bouquets/myagkaya-igrushka-obezyana-belaya.PNG",
    alt: "Мягкая игрушка белая обезьяна",
    details: "Мягкая игрушка белая обезьяна как самостоятельный подарок или дополнение к букету."
  },
  {
    slug: "myagkaya-igrushka-enot",
    name: "Мягкая игрушка енот",
    category: "Мягкие игрушки",
    composition: "Мягкая игрушка, 1 шт",
    price: "2 600 ₽",
    image: "/images/bouquets/myagkaya-igrushka-enot.PNG",
    alt: "Мягкая игрушка енот",
    details: "Мягкая игрушка енот в подарочной упаковке. Можно добавить к букету или заказать отдельно."
  },
  {
    slug: "myagkaya-igrushka-sobachka-v-krasnom-plate",
    name: "Мягкая игрушка собачка в красном платье",
    category: "Мягкие игрушки",
    composition: "Мягкая игрушка, 1 шт",
    price: "2 600 ₽",
    image: "/images/bouquets/myagkaya-igrushka-sobachka-v-krasnom-plate.PNG",
    alt: "Мягкая игрушка собачка в красном платье",
    details: "Подарочная мягкая игрушка собачка в красном платье. Подходит как милое дополнение к цветам."
  },
  {
    slug: "myagkaya-igrushka-chernaya-koshka",
    name: "Мягкая игрушка черная кошка",
    category: "Мягкие игрушки",
    composition: "Мягкая игрушка, 1 шт",
    price: "1 300 ₽",
    image: "/images/bouquets/myagkaya-igrushka-chernaya-koshka.PNG",
    alt: "Мягкая игрушка черная кошка",
    details: "Мягкая игрушка черная кошка с сердцем. Можно добавить к заказу букета для более личного подарка."
  },
  {
    slug: "myagkaya-igrushka-begemotik",
    name: "Мягкая игрушка бегемотик",
    category: "Мягкие игрушки",
    composition: "Мягкая игрушка, 1 шт",
    price: "1 250 ₽",
    image: "/images/bouquets/myagkaya-igrushka-begemotik.PNG",
    alt: "Мягкая игрушка бегемотик",
    details: "Мягкая игрушка бегемотик для детского или нежного поздравления вместе с букетом."
  },
  {
    slug: "myagkaya-igrushka-pudel",
    name: "Мягкая игрушка пудель",
    category: "Мягкие игрушки",
    composition: "Мягкая игрушка, 1 шт",
    price: "2 780 ₽",
    image: "/images/bouquets/myagkaya-igrushka-pudel.PNG",
    alt: "Мягкая игрушка пудель",
    details: "Мягкая игрушка пудель в подарочной коробке. Деликатное дополнение к цветочной композиции."
  },
  {
    slug: "myagkaya-igrushka-sobachka-v-plate",
    name: "Мягкая игрушка собачка в платье",
    category: "Мягкие игрушки",
    composition: "Мягкая игрушка, 1 шт",
    price: "2 740 ₽",
    image: "/images/bouquets/myagkaya-igrushka-sobachka-v-plate.PNG",
    alt: "Мягкая игрушка собачка в платье",
    details: "Мягкая игрушка собачка в платье в подарочной коробке. Подойдёт для романтичного или детского подарка."
  },
  {
    slug: "buket-iz-lilij",
    name: "Букет из лилий",
    category: "Монобукеты",
    composition: "Лилии, упаковка, лента",
    price: "3 100 ₽",
    image: "/images/bouquets/buket-iz-lilij.PNG",
    alt: "Букет из лилий",
    details: "Монобукет из лилий в лаконичной упаковке. Подойдёт для выразительного и нежного поздравления."
  },
  {
    slug: "miks-buket-iz-hrizantem",
    name: "Микс букет из хризантем",
    category: "Монобукеты",
    composition: "Хризантемы нескольких оттенков, упаковка, лента",
    price: "5 100 ₽",
    image: "/images/bouquets/miks-buket-iz-hrizantem.PNG",
    alt: "Микс букет из хризантем",
    details: "Пышный микс из хризантем разных оттенков. Хороший вариант для яркого, стойкого подарка."
  },
  {
    slug: "buket-iz-hrizantem",
    name: "Букет из хризантем",
    category: "Монобукеты",
    composition: "Хризантемы, упаковка, лента",
    price: "3 200 ₽",
    image: "/images/bouquets/buket-iz-hrizantem.PNG",
    alt: "Букет из хризантем",
    details: "Классический букет из хризантем с аккуратной упаковкой. Состав и оттенок можно уточнить перед заказом."
  },
  {
    slug: "buket-iz-odnogolovyh-hrizantem",
    name: "Букет из одноголовых хризантем",
    category: "Монобукеты",
    composition: "Одноголовые хризантемы, упаковка, лента",
    price: "3 100 ₽",
    image: "/images/bouquets/buket-iz-odnogolovyh-hrizantem.PNG",
    alt: "Букет из одноголовых хризантем",
    details: "Объёмный букет из одноголовых хризантем. Подходит для дня рождения, благодарности и повседневного комплимента."
  },
  {
    slug: "miks-buket-iz-roz-mestnyh",
    name: "Микс букет из роз местных",
    category: "Монобукеты",
    composition: "Местные розы микс, упаковка, лента",
    price: "9 150 ₽",
    image: "/images/bouquets/miks-buket-iz-roz-mestnyh.PNG",
    alt: "Микс букет из местных роз",
    details: "Пышный микс из местных роз в мягкой цветовой гамме. Оттенки можно согласовать по наличию."
  },
  {
    slug: "buket-iz-kustovyh-hrizantem",
    name: "Букет из кустовых хризантем",
    category: "Монобукеты",
    composition: "Кустовые хризантемы, упаковка, лента",
    price: "2 100 ₽",
    image: "/images/bouquets/buket-iz-kustovyh-hrizantem.PNG",
    alt: "Букет из кустовых хризантем",
    details: "Нежный и стойкий букет из кустовых хризантем. Лёгкий вариант для приятного знака внимания."
  },
  {
    slug: "buket-iz-fioletovyh-hrizantem",
    name: "Букет из фиолетовых хризантем",
    category: "Монобукеты",
    composition: "Фиолетовые хризантемы, упаковка, лента",
    price: "2 100 ₽",
    image: "/images/bouquets/buket-iz-fioletovyh-hrizantem.PNG",
    alt: "Букет из фиолетовых хризантем",
    details: "Монобукет из фиолетовых хризантем для спокойного, но заметного цветового акцента."
  },
  {
    slug: "buket-iz-tanacetuma",
    name: "Букет из танацетума",
    category: "Монобукеты",
    composition: "Танацетум 15 шт, упаковка, лента",
    price: "3 000 ₽",
    image: "/images/bouquets/buket-iz-tanacetuma.PNG",
    alt: "Букет из танацетума",
    details: "Лёгкий полевой букет из 15 веточек танацетума. Смотрится естественно и свежо."
  },
  {
    slug: "buket-iz-ekvadorskih-roz-39",
    name: "Букет из эквадорских роз",
    category: "Монобукеты",
    composition: "Эквадорские розы 39 шт, упаковка, лента",
    price: "13 700 ₽",
    image: "/images/bouquets/buket-iz-ekvadorskih-roz-39.PNG",
    alt: "Букет из 39 эквадорских роз",
    details: "Большой букет из 39 эквадорских роз. Выразительный подарок для особого случая."
  },
  {
    slug: "buket-iz-15-gvozdik",
    name: "Букет из 15 гвоздик",
    category: "Монобукеты",
    composition: "Гвоздики 15 шт, упаковка, лента",
    price: "3 500 ₽",
    image: "/images/bouquets/buket-iz-15-gvozdik.PNG",
    alt: "Букет из 15 гвоздик",
    details: "Нежный букет из 15 гвоздик в аккуратной упаковке. Оттенок можно уточнить при заказе."
  },
  {
    slug: "buket-iz-alstromerij",
    name: "Букет из альстромерий",
    category: "Монобукеты",
    composition: "Альстромерии 11 шт, упаковка, лента",
    price: "2 650 ₽",
    image: "/images/bouquets/buket-iz-alstromerij.PNG",
    alt: "Букет из 11 альстромерий",
    details: "Букет из 11 альстромерий в естественной упаковке. Стойкий и лёгкий вариант для подарка."
  },
  {
    slug: "51-roza-mestnaya",
    name: "51 роза местная",
    category: "Монобукеты",
    composition: "Местные розы 51 шт, упаковка, лента",
    price: "9 900 ₽",
    image: "/images/bouquets/51-roza-mestnaya.PNG",
    alt: "Букет из 51 местной розы",
    details: "Крупный букет из 51 местной розы. Цвет роз можно согласовать по наличию."
  },
  {
    slug: "11-ekvadorskih-roz",
    name: "11 эквадорских роз",
    category: "Монобукеты",
    composition: "Эквадорские розы 11 шт, упаковка, лента",
    price: "3 700 ₽",
    image: "/images/bouquets/11-ekvadorskih-roz.PNG",
    alt: "Букет из 11 эквадорских роз",
    details: "Лаконичный букет из 11 эквадорских роз. Подходит для романтичного комплимента."
  },
  {
    slug: "buket-iz-eustom",
    name: "Букет из эустом",
    category: "Монобукеты",
    composition: "Эустомы, упаковка, лента",
    price: "5 150 ₽",
    image: "/images/bouquets/buket-iz-eustom.PNG",
    alt: "Букет из эустом",
    details: "Нежный букет из эустом с воздушной фактурой. Оттенок и объём можно уточнить перед сборкой."
  },
  {
    slug: "rozy-mestnye",
    name: "Розы местные",
    category: "Монобукеты",
    composition: "Местные розы, упаковка, лента",
    price: "4 000 ₽",
    image: "/images/bouquets/rozy-mestnye.PNG",
    alt: "Букет из местных роз",
    details: "Букет из местных роз в спокойной упаковке. Хороший вариант для классического цветочного подарка."
  },
  {
    slug: "buket-iz-hrizantem-odnogolovyh",
    name: "Букет из хризантем одноголовых",
    category: "Монобукеты",
    composition: "Одноголовые хризантемы, упаковка, лента",
    price: "3 850 ₽",
    image: "/images/bouquets/buket-iz-hrizantem-odnogolovyh.PNG",
    alt: "Букет из одноголовых хризантем",
    details: "Стойкий букет из одноголовых хризантем с плотной формой и свежей подачей."
  },
  {
    slug: "buket-iz-gortenzij",
    name: "Букет из гортензий",
    category: "Монобукеты",
    composition: "Гортензии, упаковка, лента",
    price: "4 200 ₽",
    image: "/images/bouquets/buket-iz-gortenzij.PNG",
    alt: "Букет из гортензий",
    details: "Нежный объёмный букет из гортензий. Цветовую гамму можно подобрать по наличию."
  },
  {
    slug: "buket-iz-hrizantem-santini",
    name: "Букет из хризантем сантини",
    category: "Монобукеты",
    composition: "Хризантемы сантини, упаковка, лента",
    price: "2 200 ₽",
    image: "/images/bouquets/buket-iz-hrizantem-santini.PNG",
    alt: "Букет из хризантем сантини",
    details: "Компактный букет из хризантем сантини. Стойкий, лёгкий и аккуратный подарок."
  },
  {
    slug: "buket-iz-rozovyh-hrizantem-santini",
    name: "Букет из розовых хризантем сантини",
    category: "Монобукеты",
    composition: "Розовые хризантемы сантини, упаковка, лента",
    price: "2 200 ₽",
    image: "/images/bouquets/buket-iz-rozovyh-hrizantem-santini.PNG",
    alt: "Букет из розовых хризантем сантини",
    details: "Нежный монобукет из розовых хризантем сантини. Подходит для мягкого комплимента."
  },
  {
    slug: "miks-kustovyh-roz",
    name: "Микс кустовых роз",
    category: "Монобукеты",
    composition: "Кустовые розы микс, упаковка, лента",
    price: "4 000 ₽",
    image: "/images/bouquets/miks-kustovyh-roz.PNG",
    alt: "Микс кустовых роз",
    details: "Букет из кустовых роз разных оттенков. Смотрится объёмно и нежно даже в компактном размере."
  },
  {
    slug: "nezhnaya-akvarel",
    name: "Нежная акварель",
    category: "Авторские букеты",
    composition: "Гортензия, розы, гвоздики, хризантемы, статица, декоративная зелень",
    price: "от 8 500 ₽",
    // Замените ссылку на реальное фото букета.
    image: "/images/bouquets/soft-watercolor.PNG",
    alt: "Нежный розовый букет с гортензией, розами, гвоздиками и хризантемами",
    details: "Воздушный букет с крупными розовыми акцентами. Подходит для поздравления, свидания и нежного семейного повода."
  },
  {
    slug: "rozovyj-shelk",
    name: "Розовый шелк",
    category: "Композиции",
    composition: "Лилии, орхидеи, розы, гвоздики, эустома, маттиола, лагурус, эвкалипт",
    price: "6 200 ₽",
    image: "/images/bouquets/rozovyj-shelk.PNG",
    alt: "Композиция Розовый шелк с лилиями, орхидеями, розами и гвоздиками",
    details: "Нежная композиция в розовой гамме с лилией, орхидеей и розами. Подойдёт для элегантного поздравления и доставки."
  },
  {
    slug: "rozovyj-hit",
    name: "Розовый хит",
    category: "Композиции",
    composition: "Роза, хризантема, гвоздика, альстромерия, статица, солидаго, декоративная зелень",
    price: "3 800 ₽",
    // Замените фото на оригинал композиции из Яндекс Карт.
    image: "/images/bouquets/bright-compliment.PNG",
    alt: "Яркая композиция Розовый хит с розой, хризантемой и гвоздикой",
    details: "Яркая цветочная композиция в сумочке для компактного, но заметного подарка. Состав можно уточнить по наличию цветов."
  },
  {
    slug: "melodiya-nezhnosti",
    name: "Мелодия нежности",
    category: "Композиции",
    composition: "Пион, роза, гвоздика, гербера, альстромерия, декоративная зелень",
    price: "3 800 ₽",
    // Замените фото на оригинал композиции из Яндекс Карт.
    image: "/images/bouquets/melodiya-nezhnosti.PNG",
    alt: "Композиция Мелодия нежности с пионом, розой, гвоздикой и герберой",
    details: "Мягкая композиция в пастельных оттенках для нежного поздравления. Хорошо подходит как подарок без необходимости вазы."
  },
  {
    slug: "tsvetnoj-lug",
    name: "Цветной луг",
    category: "Композиции",
    composition: "Розы, тюльпаны, альстромерия, статица, солидаго, декоративная зелень",
    price: "4 500 ₽",
    image: "/images/bouquets/tsvetnoj-lug.PNG",
    alt: "Яркая композиция Цветной луг с розами, тюльпанами, альстромерией и статицей",
    details: "Сочная композиция с контрастными акцентами и живой полевой фактурой. Подойдёт для радостного повода и быстрого комплимента."
  },
  {
    slug: "belaya-simfoniya",
    name: "Белая симфония",
    category: "Композиции",
    composition: "135 белых тюльпанов, плетёная корзина",
    price: "24 000 ₽",
    image: "/images/bouquets/belaya-simfoniya.PNG",
    alt: "Корзина Белая симфония из 135 белых тюльпанов",
    details: "Большая корзина из 135 белых тюльпанов. Эффектный сезонный подарок для важного события."
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
