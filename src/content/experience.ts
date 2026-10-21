export type Experience = {
  dates: string;
  role: string;
  company?: string;
  place: string;
};

export const experience: Experience[] = [
  {
    dates: "Sep 2026 → Feb 2027",
    role: "Full-stack developer intern, DevOps and database",
    company: "Family Innovation · La Salle du Temps",
    place: "Remote",
  },
  {
    dates: "Mar → Jun 2026",
    role: "Freelance back-end and mobile developer",
    company: "Family Innovation · La Salle du Temps",
    place: "Seoul",
  },
  {
    dates: "2025 → 2026",
    role: "International student ambassador",
    company: "Epitech",
    place: "Seoul",
  },
  {
    dates: "Apr → Jul 2025",
    role: "Front-end developer intern",
    company: "Family Innovation · La Salle du Temps",
    place: "Nancy",
  },
  {
    dates: "Feb → Jul 2025",
    role: "Parachute packer",
    place: "Nancy",
  },
  {
    dates: "Jul → Dec 2023",
    role: "Full-stack developer intern",
    company: "PwC · Data Architecture team",
    place: "Luxembourg",
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Languages", items: "TypeScript, JavaScript, Python, C, C++, C#, Kotlin, PHP, SQL, Haskell" },
  { group: "Front-end and mobile", items: "React, Next.js, React Native, WordPress, Figma" },
  { group: "Back-end", items: "Express, .NET, Flask, REST APIs, Stripe" },
  { group: "Databases", items: "PostgreSQL, SQL Server, Supabase" },
  { group: "Tools", items: "Git, GitHub, Vercel, Jira, Scrum" },
];

export const languages: { label: string; learning?: boolean }[] = [
  { label: "Français · native" },
  { label: "English · C1" },
  { label: "Deutsch · A2" },
  { label: "한국어 · beginner" },
  { label: "Čeština · učím se (beginner)", learning: true },
];
