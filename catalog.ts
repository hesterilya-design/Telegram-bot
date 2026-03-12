// catalog.ts
export interface Variant {
  name: string;
  available: boolean;
}

export interface CatalogItem {
  id: string;
  name: string;
  price: number;
  available: boolean;
  variants: Variant[];
}

export interface Category {
  id: string;
  label: string;
  emoji: string;
  items: CatalogItem[];
}

export const CATEGORIES: Category[] = [
  {
    id: "l",
    label: "Рідини",
    emoji: "📁",
    items: [
      {
        id: "c10",
        name: "CHASER 10ML 50-65MG",
        price: 150,
        available: true,
        variants: [
          { name: "МЯТА", available: true },
          { name: "ЯБЛУКО МЯТА", available: true },
          { name: "ЯГОДИ", available: true },
          { name: "ВИНОГРАД", available: true },
          { name: "ВИШНЯ МЕНТОЛ", available: true },
          { name: "ПЕРСИК", available: true },
          { name: "КАВУН МЕНТОЛ", available: true },
          { name: "СМОРОДИНА МЕНТОЛ", available: true },
          { name: "ЧОРНИЦЯ МЕНТОЛ", available: true },
          { name: "КАВУН", available: true },
          { name: "ПОРІЧКА", available: true },
          { name: "ЖОВТИЙ ДРАГОНФРУТ", available: true },
        ],
      },
      {
        id: "c15",
        name: "CHASER 15ML",
        price: 0,
        available: false,
        variants: [],
      },
      {
        id: "c30",
        name: "CHASER 30ML",
        price: 280,
        available: true,
        variants: [
          { name: "МЯТА", available: true },
          { name: "ВИНОГРАД", available: true },
          { name: "СМОРОДИНА МЕНТОЛ", available: true },
          { name: "ВИШНЯ", available: true },
          { name: "КАВУН", available: true },
          { name: "КАВУН МЕНТОЛ", available: true },
          { name: "СМОРОДИНА ПЕРСИК ЯБЛУКО", available: true },
          { name: "ЕНЕРГЕТИК ВИНОГРАД", available: true },
          { name: "ЕНЕРГЕТИК МАЛИНА", available: true },
          { name: "ПОЛУНИЦЯ ЧОРНИЦЯ", available: true },
          { name: "КАВУН ЛИМОН", available: true },
          { name: "ФЛІРТ", available: true },
          { name: "ЩЕРБЕТ", available: true },
          { name: "КОЛА ПОМЕЛО", available: true },
          { name: "ЖАСМИНОВИЙ ЧАЙ", available: true },
          { name: "ОЖИНОВИЙ ДЖЕМ", available: true },
          { name: "МЕНТОЛ (MY MINT)", available: true },
          { name: "ПЕРЦЕВА М'ЯТА (MY MINT)", available: true },
          { name: "БАБЛ М'ЯТА (MY MINT)", available: true },
        ],
      },
      {
        id: "clx",
        name: "CHASER LUX 30ML 50-65MG",
        price: 300,
        available: true,
        variants: [
          { name: "КИСЛІ КАВУНОВІ ЦУКЕРКИ", available: true },
          { name: "ЯГІДНИЙ ЛИМОНАД", available: true },
          { name: "ПЕРСИКОВИЙ ЧАЙ", available: true },
          { name: "КІВІ МАРАКУЯ ГУАВА", available: true },
          { name: "ВИНОГРАД М'ЯТА", available: true },
        ],
      },
      {
        id: "min",
        name: "MINOA 30ML 5%",
        price: 220,
        available: true,
        variants: [
          { name: "ЯБЛУЧНІ ЦУКЕРКИ", available: true },
          { name: "ЯБЛУКО ПЕРСИК", available: true },
          { name: "ЧОРНИЦЯ МАЛИНА ЛИМОН", available: true },
          { name: "БЛЮ РАЗ ЛИМОНАД", available: true },
          { name: "ЧОРНИЦЯ КИСЛА МАЛИНА ICE", available: true },
          { name: "ВИШНЯ ЧОРНИЦЯ", available: true },
          { name: "ВИШНЯ ЛИМОН", available: true },
          { name: "ВИШНЯ ICE", available: true },
          { name: "ЦИТРУС М'ЯТА", available: true },
          { name: "ЛИМОН ЛАЙМ", available: true },
          { name: "АПЕЛЬСИН ЛАЙМ", available: true },
          { name: "АПЕЛЬСИНОВА СОДА", available: true },
          { name: "РОЖЕВИЙ ЛИМОНАД", available: true },
          { name: "МАЛИНА КАВУН ICE", available: true },
          { name: "КИСЛЕ ЯБЛУКО", available: true },
          { name: "М'ЯТА", available: true },
          { name: "ПОЛУНИЦЯ МОРОЗИВО", available: true },
          { name: "ПОЛУНИЦЯ КІВІ ICE", available: true },
          { name: "ПОЛУНИЦЯ МАЛИНА", available: true },
          { name: "ПОЛУНИЦЯ КАВУН БАБЛ", available: true },
          { name: "КАВУН", available: true },
          { name: "КАВУН ЛИМОН", available: true },
          { name: "ПОЛУНИЦЯ ICE", available: true },
          { name: "ВИШНЯ ГРАНАТ", available: true },
        ],
      },
      {
        id: "nov",
        name: "NOVA 30ML 50MG",
        price: 250,
        available: true,
        variants: [
          { name: "М'ЯТА", available: true },
          { name: "КОЛА ЛИМОН", available: true },
          { name: "ЧОРНИЦЯ СМОРОДИНА", available: true },
        ],
      },
      {
        id: "sol",
        name: "SOLANA 30ML",
        price: 0,
        available: false,
        variants: [],
      },
      {
        id: "el10",
        name: "ELFLIQ 10ML",
        price: 0,
        available: false,
        variants: [],
      },
      {
        id: "el30",
        name: "ELFLIQ 30ML",
        price: 0,
        available: false,
        variants: [],
      },
      {
        id: "lck",
        name: "LUCKY 15ML 65MG",
        price: 150,
        available: true,
        variants: [
          { name: "КАКТУС ГУАВА КІВІ", available: true },
          { name: "ЗОЛОТЕ КІВІ ПОЛУНИЦЯ", available: true },
          { name: "ЛИМОН ЛАЙМ ЛИМОНАД", available: true },
        ],
      },
    ],
  },
  {
    id: "c",
    label: "Картриджі",
    emoji: "📁",
    items: [
      {
        id: "xros",
        name: "КАРТРИДЖІ XROS",
        price: 150,
        available: true,
        variants: [
          { name: "0.4Ω — 3ML", available: true },
          { name: "0.6Ω — 3ML", available: true },
          { name: "0.6Ω — 2ML", available: true },
          { name: "0.8Ω — 3ML", available: true },
        ],
      },
      {
        id: "oxva",
        name: "КАРТРИДЖ OXVA XLIM V3 0.6ΩM 3ML",
        price: 150,
        available: true,
        variants: [{ name: "OXVA XLIM V3 0.6ΩM 3ML", available: true }],
      },
    ],
  },
  {
    id: "p",
    label: "Поди",
    emoji: "📁",
    items: [
      {
        id: "x5m",
        name: "XROS 5 MINI",
        price: 800,
        available: true,
        variants: [{ name: "XROS 5 MINI", available: true }],
      },
      {
        id: "vx5m",
        name: "VAPORESSO XROS 5 MINI",
        price: 800,
        available: true,
        variants: [
          { name: "VAPORESSO XROS 5 MINI (0.6Ω 2ML)", available: true },
        ],
      },
      {
        id: "x4m",
        name: "XROS 4 MINI",
        price: 0,
        available: false,
        variants: [],
      },
      {
        id: "x3m",
        name: "XROS 3 MINI",
        price: 0,
        available: false,
        variants: [],
      },
      {
        id: "xm",
        name: "XROS MINI",
        price: 0,
        available: false,
        variants: [],
      },
    ],
  },
  {
    id: "s",
    label: "Снюс",
    emoji: "📁",
    items: [
      {
        id: "str",
        name: "СНЮС STREET 300MG",
        price: 0,
        available: false,
        variants: [],
      },
      {
        id: "cuba",
        name: "СНЮС CUBA 150MG",
        price: 0,
        available: true,
        variants: [{ name: "ORANGE", available: true }],
      },
    ],
  },
];

export function getCategoryById(catId: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === catId);
}

export function getItemById(
  catId: string,
  itemId: string
): CatalogItem | undefined {
  const cat = getCategoryById(catId);
  return cat?.items.find((i) => i.id === itemId);
}