import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactFooter } from "@/components/ContactFooter";
import { Frame } from "@/components/Frame";
import { Nav } from "@/components/Nav";
import { caseStudies } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.name, description: project.caseStudy.intro };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const cs = project.caseStudy;

  return (
    <div className="page" style={{ gap: "clamp(64px, 9vw, 96px)" }}>
      <Nav active="work" />

      <section className="stack" style={{ gap: 28, marginTop: -32 }}>
        <Link href="/#work" className="back-link">
          ← All work
        </Link>
        <span className="eyebrow eyebrow--accent">{project.eyebrow}</span>
        <h1 className="h-display">{project.name}</h1>
        <p className="lede">{cs.intro}</p>
        <dl className="facts">
          {cs.facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow">{f.label}</dt>
              <dd style={{ margin: 0 }}>
                {f.href ? (
                  <a href={f.href} target="_blank" rel="noopener noreferrer">
                    {f.value}
                  </a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Frame label={cs.heroImage} ratio="16 / 8" />

      <section className="section" style={{ gap: 32 }}>
        <h2 className="h-section">{cs.productsTitle}</h2>
        <div className="products">
          {cs.products.map((p) => (
            <article key={p.title} className="card" style={{ gap: 12 }}>
              <Frame label={p.image} ratio="16 / 10" />
              <h3>{p.title}</h3>
              <p className="muted">{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ gap: 32 }}>
        <h2 className="h-section">{cs.timelineTitle}</h2>
        <div className="missions-wrap">
          <ol className="missions">
            {cs.timeline.map((m) => (
              <li key={m.title} className={m.current ? "mission stop--current" : "mission"}>
                <span className="stop__dot" aria-hidden="true" />
                <span className={m.current ? "eyebrow eyebrow--accent" : "eyebrow"}>{m.dates}</span>
                <strong className="mission__title">{m.title}</strong>
                <ul>
                  {m.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="split">
        <div className="stack-sm" style={{ gap: 16 }}>
          <h2 className="h-section">{cs.decisionsTitle}</h2>
          <p className="muted">{cs.decisionsIntro}</p>
        </div>
        <ul className="rules">
          {cs.decisions.map((d) => (
            <li key={d.title}>
              <strong>{d.title}</strong>
              <span className="muted">{d.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {next.slug !== project.slug && (
        <Link href={`/work/${next.slug}`} className="next-project">
          <span className="stack-sm" style={{ gap: 8 }}>
            <span className="eyebrow" style={{ color: "#a39890" }}>
              Next project
            </span>
            <span className="next-project__name">{next.name} →</span>
          </span>
          <span style={{ color: "var(--on-ink-muted)", maxWidth: "22em" }}>{next.summary}</span>
        </Link>
      )}

      <ContactFooter />
    </div>
  );
}
