import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20">
      <p className="text-sm">
        <span className="mr-2 text-brand-amber">—</span>
        Projects
      </p>
      <h2 className="mt-2 text-3xl font-bold">
        Things I&apos;ve <span className="italic text-brand-amber">Built</span>
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Screenshot area */}
            <div className="relative h-44 overflow-hidden bg-brand-green/10">
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-foreground/40">
                  Screenshot placeholder
                </div>
              )}
              <span className="absolute left-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-medium text-white">
                {project.type}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-foreground/80">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-foreground/20 px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links: only shown when they have a real address */}
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
                {project.links
                  .filter((link) => link.href)
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-green transition hover:text-brand-amber dark:text-brand-amber dark:hover:text-white"
                    >
                      {link.label} →
                    </a>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}