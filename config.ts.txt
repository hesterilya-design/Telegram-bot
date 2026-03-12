export const ADMIN_ID = 5649941139;

interface WorkHours {
  start: number;
  end: number;
}

function getWorkHours(): WorkHours {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // З 12 березня 2026 і далі: 9:00–20:00
  if (year > 2026 || (year === 2026 && month > 3) || (year === 2026 && month === 3 && day >= 12)) {
    return { start: 9, end: 20 };
  }

  // За замовчуванням: 12:00–21:00
  return { start: 12, end: 21 };
}

export function generateTimeSlots(): string[] {
  const now = new Date();
  const currentHour = now.getHours();
  const { start, end } = getWorkHours();

  const slots: string[] = [];
  for (let h = start; h < end; h++) {
    // Показуємо тільки майбутні слоти (поточна година включно)
    if (h < currentHour) continue;

    const from = `${String(h).padStart(2, "0")}:00`;
    const to = `${String(h + 1).padStart(2, "0")}:00`;
    slots.push(`${from}-${to}`);
  }

  return slots;
}
