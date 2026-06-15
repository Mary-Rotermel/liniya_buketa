# Линия Букета

Премиальный адаптивный лендинг цветочного магазина на Next.js, TypeScript и Tailwind CSS.

## Запуск

```bash
npm install
npm run dev
```

После запуска сайт будет доступен по адресу `http://localhost:3000`.

## Где заменить контакты

Все контакты вынесены в `config/contacts.ts`:

- телефон
- VK
- Telegram
- Instagram
- адрес
- часы работы

## Где заменить фото

Фото товаров находятся в `data/products.ts`.

Главное фото hero-блока находится в `components/Hero.tsx`.

Фото блока «Цветочная палитра» находится в `components/FlowerPalette.tsx`.

В коде оставлены комментарии рядом с местами замены.

## Как подключить Telegram-бота

1. Создать API route, например `app/api/request/route.ts`.
2. В route принять данные формы методом `POST`.
3. Отправить сообщение в Telegram через Bot API:
   `https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/sendMessage`.
4. Хранить `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в переменных окружения Vercel.
5. В `components/ContactSection.tsx` заменить локальный `handleSubmit` на `fetch("/api/request", { method: "POST", body: JSON.stringify(data) })`.

## Перед публикацией на Vercel

- Заменить все контакты в `config/contacts.ts`.
- Заменить фото-заглушки на реальные изображения.
- Настроить домен и `metadataBase` в `app/layout.tsx`.
- Проверить тексты, цены и составы букетов.
- Подключить аналитику, пиксели рекламы и цели формы.
- При необходимости подключить Telegram-бота или CRM.
