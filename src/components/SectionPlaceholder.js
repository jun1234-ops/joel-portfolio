export default function SectionPlaceholder({ id, label, title, note }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20">
      <p className="text-sm">
        <span className="mr-2 text-brand-amber">—</span>
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-bold">{title}</h2>

      <div className="mt-8 flex h-48 items-center justify-center rounded-2xl border-2 border-dashed border-foreground/20 bg-surface px-6 text-center text-foreground/60">
        {note} (coming soon)
      </div>
    </section>
  );
}