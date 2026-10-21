import { socials } from "@/content/site";
import { SocialIcon } from "./Icons";

export function SocialLinks({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      {socials.map((s) => (
        <a
          key={s.key}
          className={inverted ? "btn btn--inverted" : "btn"}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon name={s.key} />
          {s.label}
        </a>
      ))}
    </>
  );
}
