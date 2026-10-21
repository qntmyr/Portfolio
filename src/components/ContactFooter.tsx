import { contact } from "@/content/site";
import { SocialLinks } from "./SocialLinks";

export function ContactFooter({ title = "Say hi, or ahoj." }: { title?: string }) {
  return (
    <footer id="contact" className="contact">
      <div className="stack-sm">
        <h2 className="contact__title">{title}</h2>
        <p className="contact__lede">Always up for a coffee, a video call, a run or a climb.</p>
      </div>
      <div className="contact__lines">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.phoneHref}>{contact.phone}</a>
      </div>
      <div className="row-wrap">
        <SocialLinks inverted />
        <a className="btn btn--inverted" href={contact.cv} download>
          Download CV
        </a>
      </div>
      <p className="contact__note">mayerquentin.com · built with Next.js, hosted on Vercel</p>
    </footer>
  );
}
