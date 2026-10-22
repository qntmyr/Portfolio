export type Stop = {
  city: string;
  coords: string;
  year: string;
  text: string;
  current?: boolean;
};

export const journey: Stop[] = [
  {
    city: "Nancy",
    coords: "48.69°N 6.18°E",
    year: "2022",
    text: "Epitech, Programme Grande École. Learning to code close to the metal in C and C++.",
  },
  {
    city: "Luxembourg",
    coords: "49.61°N 6.13°E",
    year: "2023",
    text: "PwC, Data Architecture team. First Scrum team, first real metadata tool.",
  },
  {
    city: "Seoul",
    coords: "37.57°N 126.98°E",
    year: "2025",
    text: "Exchange year at Chung-Ang University, ambassador for 30 Epitech students, and my first freelance job.",
  },
  {
    city: "Prague",
    coords: "50.08°N 14.44°E",
    year: "Now",
    text: "Now based in Prague, I'm working remotely across the La Salle du Temps stack and looking for my next opportunity in software engineering.",
    current: true,
  },
];
