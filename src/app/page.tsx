import { ContactFooter } from "@/components/ContactFooter";
import { Frame } from "@/components/Frame";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { experience, languages, skills } from "@/content/experience";
import { journey } from "@/content/journey";
import { photos } from "@/content/photos";
import { projects, type Project } from "@/content/projects";

export default function Home() {
  const [featured, ...others] = projects;
  const [second, ...small] = others;

  return (
    <div className="page">
      <Nav />

      <section id="top" className="hero" aria-label="Introduction">
        <Reveal className="stack" style={{ gap: 28 }}>
          <p className="eyebrow eyebrow--accent">50.08°N 14.44°E · Prague</p>
          <h1 className="hero__title">
            Hi, I&apos;m Quentin. I build web and mobile products{" "}
            <em>from the database up.</em>
          </h1>
          <p className="lede" style={{ fontSize: 19 }}>
            Full-stack developer from France, now living in Prague. Before that:
            Nancy, Luxembourg and a year in Seoul. Off screen I run, climb, cook
            food and travel.
          </p>
          <div className="row-wrap">
            <SocialLinks />
          </div>
        </Reveal>
        <Reveal className="collage" delay={0.15}>
          <Frame
            photo={photos.sunset}
            ratio="4 / 5"
            className="collage__a"
            sizes="(max-width: 900px) 56vw, 300px"
            priority
          />
          <Frame
            photo={photos.czechJersey}
            ratio="1"
            className="collage__b"
            sizes="(max-width: 900px) 42vw, 230px"
            priority
          />
          <Frame
            photo={photos.elephant}
            ratio="5 / 4"
            className="collage__c"
            sizes="(max-width: 900px) 48vw, 260px"
          />
        </Reveal>
      </section>

      <section id="journey" className="section">
        <Reveal className="section__head">
          <h2 className="h-section">Four cities, one stack.</h2>
          <p className="muted">
            Every stop shaped a different part of my craft: systems programming
            at Epitech, data architecture at PwC, mobile development in Seoul,
            and production engineering in Prague.
          </p>
        </Reveal>
        <div className="route">
          <ol className="route__stops">
            {journey.map((stop, i) => (
              <Reveal
                as="li"
                key={stop.city}
                className={stop.current ? "stop stop--current" : "stop"}
                delay={i * 0.12}
              >
                <span className="stop__dot" aria-hidden="true" />
                <span
                  className={
                    stop.current ? "eyebrow eyebrow--accent" : "eyebrow"
                  }
                >
                  {stop.coords} · {stop.year}
                </span>
                <strong className="stop__city">{stop.city}</strong>
                <span className="stop__text">{stop.text}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="work" className="section">
        <Reveal>
          <h2 className="h-section">Things I&apos;ve built</h2>
        </Reveal>
        <FeaturedCard project={featured} />
        <div className="work-grid">
          <ProjectCard project={second} withImage />
          <div className="stack">
            {small.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section" style={{ gap: 32 }}>
        <Reveal>
          <h2 className="h-section">Experience</h2>
        </Reveal>
        <ul className="xp">
          {experience.map((xp, i) => (
            <Reveal as="li" key={xp.role} delay={i * 0.06}>
              <span className="xp__date">{xp.dates}</span>
              <span>
                <strong>{xp.role}</strong>
                {xp.company && (
                  <>
                    <br />
                    <span className="muted">{xp.company}</span>
                  </>
                )}
              </span>
              <span className="xp__place">{xp.place}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <section id="life" className="section">
        <Reveal className="section__head">
          <h2 className="h-section">When I&apos;m not coding</h2>
          <p className="muted" style={{ maxWidth: "26em" }}>
            The same habits show up at work: steady pacing, problem solving, and
            a team to play for.
          </p>
        </Reveal>
        <div className="life-grid">
          <Reveal className="life-item">
            <Frame photo={photos.raceMedal} ratio="1" sizes="112px" />
            <div className="life-item__text">
              <span className="life-item__big">1:27:46</span>
              <span className="muted" style={{ fontSize: 15 }}>
                Half-marathon personal best.
              </span>
              <span className="next-up">
                Next up · Frankfurt Marathon · Copenhagen Marathon
              </span>
            </div>
          </Reveal>
          <Reveal className="life-item" delay={0.1}>
            <Frame photo={photos.boulderGym} ratio="1" sizes="112px" />
            <div className="life-item__text">
              <span className="life-item__big">6C</span>
              <span className="muted" style={{ fontSize: 15 }}>
                Climbing grade. Getting back on the wall after injuries.
              </span>
            </div>
          </Reveal>
          <Reveal className="life-item" delay={0.2}>
            <Frame photo={photos.dishStrawberryCake} ratio="1" sizes="112px" />
            <div className="life-item__text">
              <span className="life-item__big">Strawberry cake</span>
              <span className="muted" style={{ fontSize: 15 }}>
                Baking and cooking dishes from around the world.
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal className="languages" delay={0.1}>
          <h3 className="eyebrow" id="languages-label">
            I speak
          </h3>
          <ul className="chips" aria-labelledby="languages-label">
            {languages.map((l) => (
              <li
                key={l.label}
                className={l.learning ? "is-learning" : undefined}
              >
                {l.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section toolbox">
        <Reveal>
          <h2 className="eyebrow">Toolbox</h2>
        </Reveal>
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.06}>
              <strong>{s.group}</strong>
              <span className="muted">{s.items}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactFooter />
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="card card--featured">
      <Frame
        photo={project.screenshot}
        label={project.image}
        ratio="16 / 10"
        sizes="(max-width: 900px) 100vw, 640px"
      />
      <div className="stack-sm" style={{ justifyContent: "center", gap: 16 }}>
        <span className="eyebrow eyebrow--accent">{project.eyebrow}</span>
        <h3 className="card__title">{project.name}</h3>
        <p className="muted">{project.summary}</p>
        {project.bullets && (
          <ul className="bullets">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {project.tags && (
          <ul className="tags" aria-label="Stack">
            {project.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <ProjectLinks project={project} />
      </div>
    </Reveal>
  );
}

function ProjectCard({
  project,
  withImage = false,
  delay = 0,
}: {
  project: Project;
  withImage?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      className="card"
      style={withImage ? undefined : { flex: 1, gap: 10 }}
      delay={delay}
    >
      {withImage && (
        <Frame
          photo={project.screenshot}
          label={project.image}
          ratio="16 / 9"
          sizes="(max-width: 900px) 100vw, 560px"
        />
      )}
      <span className="eyebrow eyebrow--accent">{project.eyebrow}</span>
      <h3
        className="card__title"
        style={withImage ? undefined : { fontSize: 28 }}
      >
        {project.name}
      </h3>
      <p className="muted">{project.summary}</p>
      <ProjectLinks project={project} />
    </Reveal>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  // Single page for now: no case-study pages, only the external link when there is one.
  if (!project.link) return null;
  return (
    <div className="row-wrap" style={{ gap: 24 }}>
      {project.link && (
        <a
          href={project.link.href}
          className="link-strong muted"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.link.label} ↗
        </a>
      )}
    </div>
  );
}
