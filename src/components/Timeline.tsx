const milestones = [
  { date: "Feb 5", label: "Kickoff" },
  { date: "Feb 14", label: "Project proposal finalized" },
  { date: "Mar 17", label: "Overall system design confirmed" },
  { date: "Mar 18", label: "8 project teams established" },
  { date: "…", label: "", ellipsis: true },
  { date: "Jul 27", label: "Deliver ≥ 2 project pilots", highlight: true },
  { date: "Sep", label: "Deliver ≥ 5 project MVPs" },
  { date: "Later", label: "Launch ≥ 5 projects into production" },
];

export function Timeline() {
  return (
    <section className="border-b border-hairline bg-paper/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-teal" />
          <span className="eyebrow">Program Timeline · 2026</span>
        </div>
        <div className="relative overflow-x-auto pb-2">
          <div className="relative min-w-[900px]">
            {/* axis line */}
            <div className="absolute left-0 right-0 top-[34px] h-px bg-hairline" />
            <ol className="relative flex items-start justify-between gap-4">
              {milestones.map((m, i) => (
                <li
                  key={i}
                  className="flex w-[12%] min-w-[110px] flex-col items-center text-center"
                >
                  {m.ellipsis ? (
                    <div className="flex h-[68px] items-center text-2xl tracking-widest text-ink-soft/60">
                      · · ·
                    </div>
                  ) : (
                    <>
                      <div className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                        {m.date}
                      </div>
                      <div className="relative mt-2 flex h-4 items-center justify-center">
                        {m.highlight ? (
                          <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-teal ring-4 ring-teal/20" />
                          </span>
                        ) : (
                          <span className="h-2 w-2 rounded-full bg-ink/40" />
                        )}
                      </div>
                      <div
                        className={`mt-3 text-xs leading-snug ${
                          m.highlight
                            ? "font-medium text-teal"
                            : "text-ink-soft"
                        }`}
                      >
                        {m.label}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
