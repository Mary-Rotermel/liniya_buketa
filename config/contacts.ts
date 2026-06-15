export const contacts = {
  // Замените телефон на актуальный номер магазина.
  phone: "+7 925 230-12-22",
  // Замените ссылку VK на актуальную страницу или сообщения сообщества.
  vkUrl: "https://vk.ru/club239310791",
  // Замените username Telegram на актуальный, без символа @.
  telegramUsername: "liniyabuketa",
  // Замените ссылку Instagram на актуальную.
  instagramUrl: "https://www.instagram.com/liniya_buketa?igsh=MXhraWxzMjhpdnltdw==",
  // Замените адрес на фактический адрес студии или пункта самовывоза.
  address: "Москва, ЮЗАО, Профсоюзная ул. 104",
  // Замените время работы на актуальное.
  workingHours: "Ежедневно, 09:00-22:00",
  // Замените ссылку на карточку организации в Яндекс.Картах.
  mapUrl: "https://yandex.ru/maps/org/101703110083?si=9g2v0ev05n92mau706f4mpzp2r",
  // Замените embed-ссылку, если будете использовать другой виджет Яндекс.Карт.
  mapEmbedUrl: "https://yandex.ru/map-widget/v1/?oid=101703110083"
};

export function vkUrl() {
  return contacts.vkUrl;
}

export function telegramUrl(text?: string) {
  const baseUrl = `https://t.me/${contacts.telegramUsername}`;
  return text ? `${baseUrl}?text=${encodeURIComponent(text)}` : baseUrl;
}

export function phoneHref() {
  return `tel:${contacts.phone.replace(/[^\d+]/g, "")}`;
}
