export const site = {
  name: "Quentin Mayer",
  title: "Quentin Mayer · Full-stack developer in Prague",
  description:
    "Full-stack developer from France, now living in Prague. I build web and mobile products from the database up.",
  url: "https://mayerquentin.com",
  accent: "#C42430",
};

export const contact = {
  email: "quentin.mayer@epitech.eu",
  phone: "+33 7 83 85 30 41",
  phoneHref: "tel:+33783853041",
  cv: "/Quentin_Mayer_CV.pdf",
};

export type SocialKey = "github" | "linkedin" | "instagram" | "whatsapp";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/qntmyr" },
  { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/quentinmayer" },
  { key: "instagram", label: "Instagram", href: "https://instagram.com/qnt_myr" },
  { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/33783853041" },
];
