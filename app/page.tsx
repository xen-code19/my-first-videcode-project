import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Field Notes",
    type: "Editorial concept",
    description:
      "A quiet reading platform shaped around strong typography, generous pacing, and stories worth slowing down for.",
    services: ["Art direction", "UI design", "Front-end"],
    artwork: "field",
  },
  {
    number: "02",
    title: "North Studio",
    type: "Identity concept",
    description:
      "A precise digital identity for an architecture practice, balancing raw materials with a clean editorial system.",
    services: ["Identity", "Web design", "Creative code"],
    artwork: "north",
  },
  {
    number: "03",
    title: "Still",
    type: "Product concept",
    description:
      "A low-noise reflection app that turns a small daily pause into a simple and thoughtful ritual.",
    services: ["Product design", "Prototype", "Interaction"],
    artwork: "still",
  },
];

const process = [
  {
    number: "01",
    title: "Find the signal",
    description:
      "We clarify the real goal, the audience, and the one idea the experience needs to communicate.",
  },
  {
    number: "02",
    title: "Shape the system",
    description:
      "I turn that idea into a flexible visual direction, clear hierarchy, and a purposeful interaction model.",
  },
  {
    number: "03",
    title: "Build the feeling",
    description:
      "Design and code come together with responsive layouts, expressive details, and performance in mind.",
  },
  {
    number: "04",
    title: "Refine the edges",
    description:
      "The final pass removes friction, tests the experience, and makes every detail feel intentional.",
  },
];

const disciplines = [
  "Software Engineer",
  "Video Editor",
  "Web Developer",
  "Data Analyst",
  "Content Creator",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
    >
      {diagonal ? (
        <path
          d="M6 18 18 6m0 0H9m9 0v9"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      ) : (
        <path
          d="M4 12h16m0 0-6-6m6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      )}
    </svg>
  );
}

function ProjectArtwork({ artwork }: { artwork: string }) {
  if (artwork === "field") {
    return (
      <div className="artwork artwork-field">
        <span className="artwork-kicker">Independent stories / Vol. 04</span>
        <div className="field-paper">
          <span>FIELD</span>
          <span>NOTES</span>
          <p>Observations on living with less.</p>
        </div>
        <div className="field-index">04—26</div>
      </div>
    );
  }

  if (artwork === "north") {
    return (
      <div className="artwork artwork-north">
        <span className="artwork-kicker">Architecture / Interiors</span>
        <div className="north-orbit" />
        <div className="north-word">NORTH</div>
        <div className="north-caption">
          <span>Spaces for living</span>
          <span>Est. 2024</span>
        </div>
      </div>
    );
  }

  return (
    <div className="artwork artwork-still">
      <span className="artwork-kicker">A daily space to pause</span>
      <div className="still-phone">
        <div className="still-status">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="still-orb" />
        <p>What feels important today?</p>
        <div className="still-action">
          <span>Reflect</span>
          <span>→</span>
        </div>
      </div>
      <div className="still-ring" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell min-h-screen">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a href="#top" className="brand" aria-label="Eniel Abacan, back to top">
          <span className="brand-mark">E</span>
          <span className="brand-name">Eniel Abacan</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="header-nav">
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#process">Process</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a className="availability" href="#contact">
          <span className="availability-dot" aria-hidden="true" />
          Open to ideas
        </a>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span>Multidisciplinary creative</span>
              <span>Portfolio / 2026</span>
            </p>

            <h1 className="hero-title display-type">
              <span className="hero-line">Eniel</span>
              <span className="hero-line hero-line-signal">Abacan.</span>
            </h1>

            <div className="hero-skills">
              <p className="eyebrow">Selected disciplines</p>
              <ul>
                {disciplines.map((discipline, index) => (
                  <li key={discipline}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {discipline}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-bottom">
              <p>
                I combine engineering, visual storytelling, and data-informed
                thinking to build digital work with both clarity and character.
              </p>
              <a className="button button-light" href="#work">
                Explore the work
                <Arrow />
              </a>
            </div>
          </div>

          <div className="portrait-stage">
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-frame">
              <Image
                src="/xen-cutout.png"
                alt="Portrait of Eniel Abacan"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 43vw"
                className="portrait-image"
              />
              <div className="portrait-shade" aria-hidden="true" />
            </div>
            <div className="portrait-label">
              <span>Eniel Abacan</span>
              <span>Portrait / 2026</span>
            </div>
            <div className="portrait-badge" aria-hidden="true">
              EA / 26
            </div>
          </div>

          <div className="hero-index" aria-hidden="true">
            01
          </div>
        </section>

        <div
          className="marquee"
          aria-label="Eniel Abacan's professional disciplines"
        >
          <div className="marquee-track">
            <span>SOFTWARE ENGINEER</span><i>✦</i><span>VIDEO EDITOR</span><i>✦</i>
            <span>WEB DEVELOPER</span><i>✦</i><span>DATA ANALYST</span><i>✦</i>
            <span>CONTENT CREATOR</span><i>✦</i>
            <span aria-hidden="true">SOFTWARE ENGINEER</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">VIDEO EDITOR</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">WEB DEVELOPER</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">DATA ANALYST</span><i aria-hidden="true">✦</i>
            <span aria-hidden="true">CONTENT CREATOR</span><i aria-hidden="true">✦</i>
          </div>
        </div>

        <section className="manifesto-section">
          <div className="section-index section-index-dark">02 / Intent</div>
          <div className="manifesto-copy">
            <p className="eyebrow">What I care about</p>
            <h2>
              Good digital work should be <em>clear enough to use</em> and bold
              enough to remember.
            </h2>
          </div>
          <div className="manifesto-note">
            <span>Design with purpose.</span>
            <span>Build with care.</span>
            <span>Leave a signal.</span>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Selected playground</p>
              <p className="section-caption">
                Three self-initiated concepts exploring editorial, identity,
                and product design.
              </p>
            </div>
            <h2 className="display-type">WORK</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>
                <ProjectArtwork artwork={project.artwork} />
                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <ul aria-label={`${project.title} disciplines`}>
                    {project.services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="process-section">
          <div className="process-heading">
            <p className="eyebrow eyebrow-spaced">04 / The approach</p>
            <h2 className="display-type">
              FROM NOISE
              <br />
              TO <span>SIGNAL.</span>
            </h2>
            <p className="process-intro">
              A flexible four-part process for moving from a rough idea to a
              focused digital experience.
            </p>
          </div>

          <ol className="process-grid">
            {process.map((step) => (
              <li key={step.number}>
                <span className="process-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="focus-section">
          <div className="focus-copy">
            <p className="eyebrow">05 / Focus</p>
            <h2>
              Five disciplines.
              <br />
              One point of view.
            </h2>
            <p>
              My work moves between engineering, visual storytelling, web
              craft, data, and content—different tools working toward one clear
              idea.
            </p>
          </div>

          <div className="focus-list">
            {disciplines.map((discipline, index) => (
              <div className="focus-row" key={discipline}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{discipline}</strong>
                <Arrow diagonal />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow eyebrow-spaced">06 / Start a conversation</p>
          <h2 className="display-type">
            HAVE AN IDEA?
            <br />
            <span>LET&apos;S MAKE IT MOVE.</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Bring the rough thought, the ambitious brief, or the thing you
              cannot quite describe yet.
            </p>
            <a
              className="button button-dark"
              href="https://github.com/xen-code19"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub
              <Arrow diagonal />
            </a>
          </div>
          <div className="contact-orbit" aria-hidden="true">
            <span>X</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="brand-mark">E</span>
          <span className="brand-name">Eniel Abacan</span>
        </a>
        <p>Engineer · Editor · Developer · Analyst · Creator</p>
        <a href="#top" className="back-to-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}
