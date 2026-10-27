import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pt-16 pb-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Text side */}
        <div>
          <span className="inline-block border border-dashed border-brand-amber px-3 py-1 text-sm">
            {profile.greeting}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            I&apos;m{" "}
            <span className="italic text-brand-amber">{profile.name}</span>
            <br />
            {profile.title}
          </h1>

          <p className="mt-6 max-w-md text-foreground/70">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.primaryButton.href}
              className="rounded-full bg-brand-green px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {profile.primaryButton.label}
            </a>
            <a
              href={profile.secondaryButton.href}
              className="rounded-full border border-foreground/30 px-6 py-3 text-sm font-medium transition hover:bg-foreground hover:text-background"
            >
              {profile.secondaryButton.label}
            </a>
          </div>
        </div>

                {/* Photo placeholder side */}
        <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96">
          {/* The circle clips the photo only */}
          <div className="flex h-full w-full items-end justify-center overflow-hidden rounded-full bg-brand-amber">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full text-brand-green/80"
              fill="currentColor"
              aria-label="Photo placeholder"
            >
              <circle cx="50" cy="38" r="16" />
              <path d="M18 100c0-20 14-34 32-34s32 14 32 34z" />
            </svg>
          </div>

          {/* Tags sit outside the clip, so they can overhang the edge */}
          <span className="absolute -left-4 bottom-12 rounded-full bg-brand-green px-4 py-2 text-xs font-medium text-white shadow-lg">
            {profile.floatingTags[0]}
          </span>
          <span className="absolute -right-4 top-1/2 rounded-full bg-white px-4 py-2 text-xs font-medium text-brand-green shadow-lg">
            {profile.floatingTags[1]}
          </span>
        </div>
      </div>
    </section>
  );
}