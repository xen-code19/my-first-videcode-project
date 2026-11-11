const projects = [
  {
    number: "01",
    title: "Field Notes",
    category: "Editorial platform",
    year: "2026",
    description:
      "A calm reading experience for independent stories, essays, and ideas.",
    tags: ["Strategy", "Design", "Development"],
    preview: (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#242422] p-8 sm:p-10">
        <div className="absolute left-8 top-8 text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
          Field / 01
        </div>
        <div className="w-[72%] bg-[#f5f3ee] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] sm:p-7">
          <div className="mb-12 flex items-center justify-between border-b border-black/15 pb-3 text-[8px] uppercase tracking-[0.2em] text-black/50 sm:mb-16">
            <span>Journal</span>
            <span>Issue 04</span>
          </div>
          <p className="max-w-[11rem] text-xl font-medium leading-[1.05] tracking-[-0.04em] text-[#20201e] sm:text-2xl">
            Observations on living with less.
          </p>
          <div className="mt-8 h-px w-10 bg-black/30" />
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "North Studio",
    category: "Creative identity",
    year: "2026",
    description:
      "A focused digital identity for a small architecture and interiors practice.",
    tags: ["Identity", "Art Direction", "Web Design"],
    preview: (
      <div className="relative flex aspect-[4/3] items-end overflow-hidden bg-[#d9d4ca] p-8 sm:p-10">
        <div className="absolute right-8 top-8 h-10 w-10 rounded-full border border-black/35" />
        <div>
          <p className="text-[clamp(2.5rem,8vw,5.75rem)] font-semibold leading-[0.76] tracking-[-0.085em] text-[#262622]">
            NORTH
          </p>
          <div className="mt-5 flex items-end justify-between gap-10 border-t border-black/30 pt-4 text-[9px] font-medium uppercase tracking-[0.22em] text-black/55">
            <span>Spaces for living</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Still",
    category: "Wellbeing app",
    year: "2025",
    description:
      "A distraction-free daily companion designed to make reflection feel natural.",
    tags: ["Product", "Interface", "Prototype"],
    preview: (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#c8c9c4] p-8 sm:p-10">
        <div className="absolute left-8 top-8 text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">
          Still / Daily
        </div>
        <div className="flex h-[78%] w-[44%] min-w-32 flex-col justify-between rounded-[1.75rem] border border-black/20 bg-[#efeee9] p-4 shadow-[0_18px_45px_rgba(34,34,30,0.14)] sm:p-5">
          <div className="flex items-center justify-between text-[7px] font-medium uppercase tracking-[0.12em] text-black/45">
            <span>9:41</span>
            <span>•••</span>
          </div>
          <div>
            <div className="mb-4 h-8 w-8 rounded-full border border-black/20" />
            <p className="text-sm font-medium leading-tight tracking-[-0.025em] text-[#242421] sm:text-base">
              What feels important today?
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-black/15 pt-3 text-[7px] uppercase tracking-[0.12em] text-black/40">
            <span>Reflect</span>
            <span>→</span>
          </div>
        </div>
      </div>
    ),
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
    >
      {diagonal ? (
        <path
          d="M5 15 15 5m0 0H7m8 0v8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ) : (
        <path
          d="M3 10h14m0 0-5-5m5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-50 -translate-y-24 bg-foreground px-4 py-3 text-sm font-medium text-background transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
        <a
          href="#top"
          className="text-sm font-semibold tracking-[-0.02em] transition-opacity hover:opacity-55"
          aria-label="Alex Morgan, back to top"
        >
          Alex Morgan<span className="text-black/35">.</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 text-[13px] font-medium text-black/60 sm:gap-8 sm:text-sm">
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section
          id="top"
          className="mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1200px] flex-col justify-between px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10 lg:pt-32"
        >
          <div>
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45 sm:mb-10">
              Designer &amp; developer
            </p>
            <h1 className="max-w-[1050px] text-[clamp(3.25rem,8.4vw,7.6rem)] font-medium leading-[0.89] tracking-[-0.07em] text-[#1d1d1b]">
              I create quiet, considered digital experiences.
            </h1>
          </div>

          <div className="mt-16 grid gap-10 border-t border-black/15 pt-8 sm:mt-24 sm:grid-cols-2 sm:items-end lg:grid-cols-12">
            <p className="max-w-xl text-base leading-7 text-black/58 sm:text-lg sm:leading-8 lg:col-span-6 lg:col-start-5">
              I&apos;m Alex, a multidisciplinary designer and developer creating
              clear, useful work for thoughtful people and teams.
            </p>
            <div className="sm:justify-self-end lg:col-span-2">
              <a
                href="#projects"
                className="group inline-flex h-12 items-center justify-center gap-4 bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-black/75"
              >
                View My Work
                <span className="transition-transform group-hover:translate-x-1">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-8 border-t border-black/15 bg-[#ebe9e3]"
        >
          <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-10 lg:py-40">
            <div className="lg:col-span-3">
              <p className="section-label">
                <span>01</span>
                <span>About</span>
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-3xl font-medium leading-[1.13] tracking-[-0.045em] sm:text-5xl sm:leading-[1.08] lg:text-[3.5rem]">
                I care about the small decisions that make digital experiences
                feel simple, honest, and built to last.
              </h2>

              <div className="mt-12 grid gap-10 border-t border-black/15 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-16">
                <p className="text-base leading-7 text-black/58">
                  I&apos;m a multidisciplinary creative with a focus on digital
                  products and visual systems. This is placeholder copy—replace
                  it with your story, experience, and the kind of work you love
                  doing.
                </p>
                <div>
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/40">
                    Areas of focus
                  </p>
                  <ul className="space-y-2 text-base leading-7 text-black/65">
                    <li>Creative direction</li>
                    <li>Interface design</li>
                    <li>Front-end development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="scroll-mt-8 mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
        >
          <div className="grid gap-8 border-b border-black/15 pb-10 sm:grid-cols-2 sm:items-end sm:pb-14 lg:grid-cols-12">
            <p className="section-label lg:col-span-3">
              <span>02</span>
              <span>Selected projects</span>
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.055em] sm:text-5xl lg:col-span-6 lg:col-start-7 lg:text-6xl">
              A few things I&apos;ve made.
            </h2>
          </div>

          <div className="grid gap-x-6 gap-y-16 pt-10 sm:pt-14 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className="group">
                <div className="overflow-hidden">{project.preview}</div>

                <div className="flex items-start justify-between border-b border-black/15 py-5">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.035em]">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-black/45">
                      {project.category}
                    </p>
                  </div>
                  <span className="mt-1 text-sm text-black/40">
                    {project.year}
                  </span>
                </div>

                <p className="min-h-20 py-5 text-sm leading-6 text-black/58">
                  {project.description}
                </p>

                <ul
                  aria-label={`${project.title} services`}
                  className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40"
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-8 bg-[#20201e] text-[#f3f1eb]"
        >
          <div className="mx-auto grid min-h-[70svh] w-full max-w-[1200px] gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:px-10 lg:py-40">
            <p className="section-label self-start text-white/45 lg:col-span-3">
              <span>03</span>
              <span>Contact</span>
            </p>

            <div className="flex flex-col justify-between lg:col-span-8 lg:col-start-5">
              <div>
                <h2 className="max-w-3xl text-[clamp(3.1rem,7vw,6.5rem)] font-medium leading-[0.93] tracking-[-0.065em]">
                  Have a project in mind?
                </h2>
                <p className="mt-8 max-w-lg text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                  I&apos;m always open to thoughtful conversations, interesting
                  collaborations, and new opportunities.
                </p>
              </div>

              <a
                href="mailto:hello@alexmorgan.design"
                className="group mt-20 flex items-center justify-between border-b border-white/30 pb-4 text-xl font-medium tracking-[-0.03em] transition-colors hover:border-white sm:text-3xl"
              >
                hello@alexmorgan.design
                <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  <Arrow diagonal />
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#20201e] text-[#f3f1eb]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 border-t border-white/15 px-5 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Alex Morgan</p>
          <p>Designed with clarity and care.</p>
        </div>
      </footer>
    </div>
  );
}
