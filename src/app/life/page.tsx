import type { Metadata } from "next";
import { ContactFooter } from "@/components/ContactFooter";
import { Frame } from "@/components/Frame";
import { Nav } from "@/components/Nav";
import { dishes, races } from "@/content/life";
import { photos, type Photo } from "@/content/photos";
import { socials } from "@/content/site";

export const metadata: Metadata = {
  title: "Life",
  description: "Running, climbing, ball sports, travel, and a kitchen that borrows from every city I've lived in.",
};

const postcards: { photo?: Photo; label: string; caption: string; current?: boolean }[] = [
  { photo: photos.kyotoJump, label: "Kyoto", caption: "Kyoto · 34.97°N" },
  // TODO(Quentin): where were these taken?
  { photo: photos.elephant, label: "Elephant", caption: "[Place]" },
  { photo: photos.sunset, label: "Sunset", caption: "[Place]" },
  { label: "Photo · Prague", caption: "Prague · 50.08°N", current: true },
];

export default function LifePage() {
  const instagram = socials.find((s) => s.key === "instagram")!;

  return (
    <div className="page" style={{ gap: "clamp(72px, 10vw, 104px)" }}>
      <Nav active="life" />

      <section className="stack" style={{ marginTop: -40 }}>
        <span className="eyebrow eyebrow--accent">Off the clock</span>
        <h1 className="h-display">
          Life outside <em style={{ color: "var(--accent)" }}>the editor.</em>
        </h1>
        <p className="lede">Running, climbing, ball sports, travel, and a kitchen that borrows from every city I&apos;ve lived in.</p>
        <div className="life-hero-photos">
          <Frame photo={photos.juggling} sizes="(max-width: 700px) 100vw, 580px" priority />
          <Frame photo={photos.seoulCertificate} sizes="(max-width: 700px) 50vw, 290px" priority />
          <Frame photo={photos.czechJersey} sizes="(max-width: 700px) 50vw, 290px" priority />
        </div>
      </section>

      <section className="split">
        <div className="stack-sm" style={{ gap: 16 }}>
          <span className="eyebrow">Running</span>
          <span className="big-number">1:27:00</span>
          <p className="muted">My half-marathon personal best. Next up: two full marathons.</p>
        </div>
        <div className="stack-sm" style={{ gap: 16 }}>
          <div className="pair">
            <Frame photo={photos.raceRun} ratio="3 / 4" sizes="(max-width: 900px) 50vw, 300px" />
            <Frame photo={photos.raceMedal} ratio="3 / 4" sizes="(max-width: 900px) 50vw, 300px" />
          </div>
          <ul className="races">
            {races.map((r) => (
              <li key={r.name} className={r.upcoming ? "race race--upcoming" : "race"}>
                <span className={r.upcoming ? "eyebrow eyebrow--accent" : "eyebrow"} style={{ fontSize: 11 }}>
                  {r.status}
                </span>
                <strong className="race__name">{r.name}</strong>
                <span className="muted" style={{ fontSize: 15 }}>
                  {r.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="split">
        <div className="stack-sm" style={{ gap: 16 }}>
          <span className="eyebrow">Climbing</span>
          <span className="big-number">6C</span>
          <p className="muted">Getting back on the wall after injuries, one route at a time.</p>
        </div>
        <div className="pair">
          <Frame photo={photos.climbRock} ratio="3 / 4" sizes="(max-width: 900px) 50vw, 300px" />
          <Frame photo={photos.climbMountain} ratio="3 / 4" sizes="(max-width: 900px) 50vw, 300px" />
        </div>
      </section>

      <section className="split">
        <div className="stack-sm" style={{ gap: 16 }}>
          <span className="eyebrow">Team sports</span>
          <h2 className="h-section">Basketball and football</h2>
          <p className="muted">Where I learned to play for the team before I worked in one.</p>
        </div>
        <Frame label="Photo · on the court or pitch" ratio="16 / 9" />
      </section>

      <section className="section" style={{ gap: 32 }}>
        <div className="section__head">
          <div className="stack-sm" style={{ gap: 12 }}>
            <span className="eyebrow">Baking and cooking</span>
            <h2 className="h-section">Cooking the places I&apos;ve been</h2>
          </div>
          <p className="muted">Baking and cooking dishes from around the world, at home.</p>
        </div>
        <ul className="dishes">
          {dishes.map((d, i) => (
            <li key={i}>
              <Frame photo={d.photo} ratio="1" sizes="(max-width: 900px) 100vw, 370px" />
              <strong className="race__name">{d.name}</strong>
              <span className="eyebrow">{d.country}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" style={{ gap: 32 }}>
        <div className="stack-sm" style={{ gap: 12 }}>
          <span className="eyebrow">Places</span>
          <h2 className="h-section">Postcards</h2>
        </div>
        <ul className="postcards">
          {postcards.map((p) => (
            <li key={p.caption + p.label}>
              <Frame photo={p.photo} label={p.label} ratio="4 / 5" sizes="(max-width: 900px) 50vw, 280px" />
              <span className={p.current ? "eyebrow eyebrow--accent" : "eyebrow"}>{p.caption}</span>
            </li>
          ))}
        </ul>
        <a href={instagram.href} className="link-strong" target="_blank" rel="noopener noreferrer">
          More on Instagram · @qnt_myr ↗
        </a>
      </section>

      <ContactFooter title="Run, climb, or coffee?" />
    </div>
  );
}
