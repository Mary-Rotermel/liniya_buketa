export const contacts = {
  // Замените телефон на актуальный номер магазина.
  phone: "+7 925 230-12-22",
  // Замените номер в международном формате без плюса.
  whatsappPhone: "79252301222",
  // Замените username Telegram на актуальный, без символа @.
  telegramUsername: "liniyabuketa",
  // Замените ссылку Instagram на актуальную.
  instagramUrl: "https://www.instagram.com/liniya_buketa?igsh=MXhraWxzMjhpdnltdw==",
  // Замените адрес на фактический адрес студии или пункта самовывоза.
  address: "Москва, ЮЗАО, Профсоюзная ул. 104",
  // Замените время работы на актуальное.
  workingHours: "Ежедневно, 09:00-22:00"
};

export function whatsappUrl(text: string) {
  return `https://wa.me/${contacts.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

export function telegramUrl(text?: string) {
  const baseUrl = `https://t.me/${contacts.telegramUsername}`;
  return text ? `${baseUrl}?text=${encodeURIComponent(text)}` : baseUrl;
}

export function phoneHref() {
  return `tel:${contacts.phone.replace(/[^\d+]/g, "")}`;
}
