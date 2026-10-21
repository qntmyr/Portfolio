import Link from "next/link";
import { Logo } from "./Logo";

type Section = "work" | "journey" | "life" | "contact";

export function Nav({ active }: { active?: Section }) {
  const links: { id: Section; label: string; href: string }[] = [
    { id: "work", label: "Work", href: "/#work" },
    { id: "journey", label: "Journey", href: "/#journey" },
    { id: "life", label: "Life", href: "/#life" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];
  return (
    <header className="nav">
      <Link href="/" className="nav__name">
        <Logo />
        Quentin Mayer
      </Link>
      <nav aria-label="Main">
        <ul className="nav__links">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                href={l.href}
                aria-current={active === l.id ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
