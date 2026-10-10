// Texts in [brackets] are placeholders waiting for Quentin's own words.

export const races: { status: string; name: string; detail: string; upcoming?: boolean }[] = [
  { status: "Done", name: "Half-marathon", detail: "1:27:00 · [race name]" },
  { status: "Next", name: "Frankfurt Marathon", detail: "[date] · goal [time]", upcoming: true },
  { status: "Then", name: "Copenhagen Marathon", detail: "[date] · goal [time]", upcoming: true },
];

export const dishes: { name: string; country: string }[] = [
  { name: "[Dish name]", country: "[Country]" },
  { name: "[Dish name]", country: "[Country]" },
  { name: "[Dish name]", country: "[Country]" },
];
