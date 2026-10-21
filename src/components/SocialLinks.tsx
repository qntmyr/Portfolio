import { socials } from "@/content/site";
import { SocialIcon } from "./Icons";
import { Magnetic } from "./Magnetic";

export function SocialLinks({ inverted = false }: { inverted?: boolean }) {
  return (
    <>
      {socials.map((s) => (
        <Magnetic
          as="a"
          key={s.key}
          className={inverted ? "btn btn--inverted" : "btn"}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          strength={0.2}
          max={6}
        >
          <SocialIcon name={s.key} />
          {s.label}
        </Magnetic>
      ))}
    </>
  );
}
