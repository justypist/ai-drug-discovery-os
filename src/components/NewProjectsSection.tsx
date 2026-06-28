import React from "react";

type Item = { name: string; sub?: string[] };

const topColumns: {
  id: string;
  title: string;
  color: string;
  existing: Item[];
  candidates: Item[];
}[] = [
  {
    id: "search",
    title: "Search & Evaluation",
    color: "bg-bg-search",
    existing: [
      { name: "Target Research" },
      { name: "Animal Model Translatability Evaluation" },
      { name: "ADMET Prediction" },
      { name: "Molecule Differentiation Analysis" },
    ],
    candidates: [{ name: "Unmet Medical Needs Identification" }],
  },
  {
    id: "clinical",
    title: "Clinical Development",
    color: "bg-bg-clinical",
    existing: [
      { name: "Clinical Study QC & QA", sub: ["Protocol Deviation Analysis"] },
      { name: "Project Risk & Issue Identification & Management" },
    ],
    candidates: [
      { name: "Medical Monitoring" },
      { name: "Protocol Review" },
      { name: "GCTO Operation Platform" },
      { name: "Guidance QA" },
    ],
  },
  {
    id: "frontier",
    title: "Frontier Technology",
    color: "bg-bg-frontier",
    existing: [{ name: "Virtual Cell" }, { name: "Digital Pathology" }],
    candidates: [{ name: "Genomics Platform" }, { name: "PBPK Prediction" }],
  },
];

const ciExisting: Item[] = [
  { name: "Scientific Finding Tracking" },
  { name: "Disease Deep Dive" },
  { name: "Clinical Data Benchmarking" },
  { name: "Competitive Intelligence Monitoring" },
];
const ciCandidates: Item[] = [];

function ExistingItem({ item }: { item: Item }) {
  return (
    <div>
      <div className="text-base font-semibold leading-tight text-ink">
        {item.name}
      </div>
      {item.sub && (
        <div className="ml-3 border-l border-ink/15 pl-2">
          {item.sub.map((s) => (
            <div key={s} className="text-sm text-ink/80">
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CandidateItem({ item }: { item: Item }) {
  return (
    <div>
      <div className="text-base font-medium leading-tight text-ink/40">
        {item.name}
      </div>
    </div>
  );
}

function Arrows({ count }: { count: number }) {
  return (
    <div
      className="grid items-center justify-items-center py-0.5"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="16" viewBox="0 0 18 16" className="text-ink/60">
          <line x1="9" y1="16" x2="9" y2="5" stroke="currentColor" strokeWidth="2.5" />
          <polygon points="9,0 2,8 16,8" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

export function NewProjectsSection() {
  return (
    <section id="new-projects" className="border-t border-hairline bg-paper pt-6 pb-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-12 bg-teal/60" />
          <span className="eyebrow text-base">Potential New Projects · Candidates</span>
        </div>

        {/* Tier 3: Applications */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {topColumns.map((col) => (
            <div
              key={col.id}
              className={`rounded-2xl border border-hairline p-3 shadow-sm ${col.color}`}
            >
              <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
                {col.title}
              </div>
              <div className="space-y-1.5">
                {col.existing.map((p) => (
                  <ExistingItem key={p.name} item={p} />
                ))}
              </div>
              {col.candidates.length > 0 && (
                <>
                  <div className="my-2 border-t border-dashed border-ink/20" />
                  <div className="space-y-1">
                    {col.candidates.map((p) => (
                      <CandidateItem key={p.name} item={p} />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Arrows up from CI to applications */}
        <Arrows count={3} />

        {/* Tier 2: CI & Scientific Finding Tracking */}
        <div className="rounded-2xl border border-hairline bg-bg-ci p-3 shadow-sm">
          <div className="mb-2 text-center text-xl font-bold uppercase tracking-[0.12em] text-ink">
            Competitive Intelligence & Scientific Finding Tracking
          </div>
          <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 md:pl-8 md:pr-4">
            {ciExisting.map((p) => (
              <ExistingItem key={p.name} item={p} />
            ))}
          </div>
          {ciCandidates.length > 0 && (
            <>
              <div className="my-2 border-t border-dashed border-ink/20" />
              <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:pl-8 md:pr-4">
                {ciCandidates.map((p) => (
                  <CandidateItem key={p.name} item={p} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Arrows up from infra to CI */}
        <Arrows count={3} />

        {/* Tier 1: IT Infrastructure */}
        <div className="rounded-2xl border border-hairline bg-bg-infra px-3 py-2.5 text-center shadow-sm">
          <div className="text-xl font-bold uppercase tracking-[0.12em] text-ink">
            IT Infrastructure Excellence Enablement
          </div>
        </div>
      </div>
    </section>
  );
}
