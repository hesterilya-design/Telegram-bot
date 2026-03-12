import TelegramBot from "node-telegram-bot-api";
import { CATEGORIES, CatalogItem, getCategoryById } from "./catalog.js";
import { generateTimeSlots } from "./config.js";

type Keyboard = TelegramBot.InlineKeyboardMarkup;

function btn(text: string, data: string): TelegramBot.InlineKeyboardButton {
  return { text, callback_data: data };
}

function keyboard(rows: TelegramBot.InlineKeyboardButton[][]): Keyboard {
  return { inline_keyboard: rows };
}

export function mainMenuKeyboard(): Keyboard {
  return keyboard(CATEGORIES.map((cat) => [btn(`${cat.emoji} ${cat.label}`, `cat:${cat.id}`)]));
}

export function categoryKeyboard(catId: string): Keyboard {
  const cat = getCategoryById(catId);
  if (!cat) return keyboard([]);

  const rows: TelegramBot.InlineKeyboardButton[][] = [];

  for (const item of cat.items) {
    if (catId === "l" && !item.available) continue;

    if (item.available) {
      rows.push([btn(`${item.name} — ${item.price}.00 грн`, `item:${catId}:${item.id}`)]);
    } else {
      rows.push([btn(`🔴 ${item.name} — немає в наявності`, `item:${catId}:${item.id}`)]);
    }
  }

  rows.push([btn("◀️ До категорій", "bk:m")]);
  return keyboard(rows);
}

export function variantsKeyboard(catId: string, item: CatalogItem): Keyboard {
  const rows: TelegramBot.InlineKeyboardButton[][] = [];

  for (let i = 0; i < item.variants.length; i++) {
    const v = item.variants[i];
    rows.push([btn(`${v.available ? "✅" : "❌"} ${v.name}`, `var:${catId}:${item.id}:${i}`)]);
  }

  rows.push([btn("◀️ До каталогу", `cat:${catId}`)]);
  return keyboard(rows);
}

export function variantDetailKeyboard(
  catId: string,
  itemId: string,
  varIdx: number,
  available: boolean
): Keyboard {
  const rows: TelegramBot.InlineKeyboardButton[][] = [];

  if (available) {
    rows.push([btn("🛒 Замовити", `ord:${catId}:${itemId}:${varIdx}`)]);
  }

  rows.push([btn("◀️ Назад", `item:${catId}:${itemId}`)]);
  return keyboard(rows);
}

export function quantityKeyboard(catId: string, itemId: string, varIdx: number): Keyboard {
  const qtyRow = [1, 2, 3, 4, 5].map((q) =>
    btn(`${q}`, `qty:${catId}:${itemId}:${varIdx}:${q}`)
  );
  return keyboard([qtyRow, [btn("◀️ Назад", `var:${catId}:${itemId}:${varIdx}`)]]);
}

export function timeSlotsKeyboard(
  catId: string,
  itemId: string,
  varIdx: number,
  qty: number
): Keyboard {
  const slots = generateTimeSlots();

  const rows: TelegramBot.InlineKeyboardButton[][] = slots.map((slot) => [
    btn(
      `⏰${slot}`,
      `tm:${catId}:${itemId}:${varIdx}:${qty}:${slot.replace(":", "").replace("-", "_").replace(":", "")}`
    ),
  ]);

  rows.push([btn("◀️ Назад", `qty:${catId}:${itemId}:${varIdx}:${qty}`)]);
  return keyboard(rows);
}
