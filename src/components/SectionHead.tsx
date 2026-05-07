export function SectionHead({
  en,
  jp,
  eyebrow,
  align = "left",
  light = false,
}: {
  en: string;
  jp: string;
  eyebrow: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p
        className={`eyebrow inline-flex rotate-[-2deg] px-3 py-2 ${
          light ? "bg-accent text-ink" : "bg-brand text-white"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`section-title mt-6 text-balance text-5xl leading-[0.88] md:text-7xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {en}
      </h2>
      <p
        className={`mt-3 text-2xl font-black md:text-3xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {jp}
      </p>
    </div>
  );
}

export function PageHero({
  eyebrow,
  en,
  jp,
  lead,
}: {
  eyebrow: string;
  en: string;
  jp: string;
  lead?: string;
}) {
  return (
    <section className="bg-aomaru relative overflow-hidden border-b-2 border-ink pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[-4vw] top-32 hidden h-[24vh] w-[22vw] rotate-6 border-2 border-ink bg-accent lg:block" />
      </div>
      <div className="container-aonavi relative">
        <p className="inline-flex rotate-[-2deg] border-2 border-ink bg-accent px-4 py-2 font-latin text-sm font-extrabold uppercase tracking-[0.12em] text-ink shadow-[5px_5px_0_var(--color-ink)]">
          {eyebrow}
        </p>
        <h1 className="mt-6 text-balance font-latin text-[56px] font-extrabold uppercase leading-[0.85] text-ink sm:text-[80px] md:text-[112px]">
          <span className="block">{en.split(" ").slice(0, -1).join(" ") || en}</span>
          {en.split(" ").length > 1 && (
            <span className="block text-brand-deep">{en.split(" ").slice(-1)}</span>
          )}
        </h1>
        <p className="mt-6 text-2xl font-black text-ink md:text-3xl">{jp}</p>
        {lead && (
          <p className="mt-6 max-w-2xl border-l-8 border-brand bg-white/90 p-5 text-sm font-bold leading-loose text-ink shadow-[6px_6px_0_var(--color-ink)] md:text-[15px]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}

export function Crumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="font-latin text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink-mute">
      {items.map((it, i) => (
        <span key={i}>
          {it.href ? (
            <a href={it.href} className="hover:text-brand-deep">
              {it.label}
            </a>
          ) : (
            <span className="text-ink">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="mx-2 opacity-40">/</span>}
        </span>
      ))}
    </nav>
  );
}
