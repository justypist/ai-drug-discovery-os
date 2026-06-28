type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export function SectionHeader({ eyebrow, title, lede }: Props) {
  return (
    <div className="mb-4 max-w-4xl">
      <div className="mb-2 flex items-center gap-3">
        <span className="h-px w-12 bg-teal/60" />
        <span className="eyebrow text-base">{eyebrow}</span>
      </div>
      <h2
        className="text-3xl font-black uppercase tracking-[0.12em] text-ink md:text-4xl"
        style={{ fontStretch: "expanded" }}
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-ink">{lede}</p>
      )}
    </div>
  );
}


