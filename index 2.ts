import TelegramBot from "node-telegram-bot-api";
import { registerHandlers } from "./handlers.js";

export function startBot(): void {
  const token = process.env["TELEGRAM_BOT_TOKEN"];
  if (!token) {
    console.error("❌ TELEGRAM_BOT_TOKEN не вказано. Бот не запущено.");
    return;
  }

  const bot = new TelegramBot(token, { polling: true });

  bot.setMyCommands([
    { command: "start", description: "🛍 Відкрити каталог" },
  ]);

  registerHandlers(bot);

  console.log("✅ Telegram-бот запущено (polling)");
}
