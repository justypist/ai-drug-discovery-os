import { SectionHeader } from "./SectionHeader";

type Project = { name: string; progress?: number; sub?: string[] };

const applications: { title: string; projects: Project[] }[] = [
  {
    title: "Search & Evaluation",
    projects: [
      { name: "Target Research" },
      { name: "Animal Model Translatability Evaluation" },
      { name: "ADMET Prediction" },
      { name: "Molecule Differentiation Analysis" },
    ],
  },
  {
    title: "Clinical Development",
    projects: [
      { name: "Clinical Study QC & QA", sub: ["Protocol Deviation Analysis"] },
      { name: "Project Risk & Issue Identification & Management" },
    ],
  },
  {
    title: "Frontier Technology",
    projects: [{ name: "Virtual Cell" }, { name: "Digital Pathology" }],
  },
];

const ciItems = [
  "Scientific Finding Checking",
  "Disease Deep Dive",
  "Clinical Data Benchmarking",
  "Competitive Intelligence Monitoring",
];

function ProgressBar({ value = 50, showLabels = false }: { value?: number; showLabels?: boolean }) {
  return (
    <div className="mt-2">
      <div className="relative h-2 w-full rounded-full bg-hairline/60">
        <div
          className="h-2 rounded-full bg-teal"
          style={{ width: `${value}%` }}
        />
        {/* Pilot marker @ 80% */}
        <div className="absolute -bottom-1 -translate-x-1/2" style={{ left: "80%" }}>
          <div className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-ink" />
        </div>
        {/* Massive reuse marker @ 100% */}
        <div className="absolute -bottom-1 -translate-x-1/2" style={{ left: "100%" }}>
          <div className="h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-ink" />
        </div>
      </div>
      {showLabels && (
        <div className="relative mt-2 h-8 text-[11px] font-semibold uppercase tracking-wider text-ink/80">
          <div className="absolute -translate-x-1/2 text-center leading-tight" style={{ left: "80%" }}>
            <div>Pilot</div>
            <div className="font-normal text-ink/60">September</div>
          </div>
          <div className="absolute -translate-x-1/2 text-center leading-tight" style={{ left: "100%" }}>
            <div>Massive Reuse</div>
            <div className="font-normal text-ink/60">November</div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, showLabels }: { project: Project; showLabels?: boolean }) {
  return (
    <div className="rounded-lg border border-hairline bg-card/50 p-3">
      <div className="text-sm font-semibold text-ink">{project.name}</div>
      <ProgressBar value={50} showLabels={showLabels} />
      {project.sub && (
        <div className="mt-3 space-y-2 border-l-2 border-teal/40 pl-3">
          {project.sub.map((s) => (
            <div key={s}>
              <div className="text-xs font-medium text-ink/80">{s}</div>
              <ProgressBar value={50} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Arrows({ count }: { count: number }) {
  return (
    <div
      className="grid items-center justify-items-center py-2"
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="20" height="28" viewBox="0 0 20 28" className="text-teal">
          <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="2" />
          <polygon points="10,28 4,18 16,18" fill="currentColor" />
        </svg>
      ))}
    </div>
  );
}

export function ProgressSection() {
  let firstShown = false;
  return (
    <section id="progress" className="border-t border-hairline bg-paper py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Current Project Progress"
          title="Five streams, three tiers."
          lede=""
        />

        {/* Tier 3: Applications */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {applications.map((app) => (
            <div
              key={app.title}
              className="rounded-2xl border border-hairline bg-card/30 p-4"
            >
              <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-teal">
                {app.title}
              </div>
              <div className="space-y-3">
                {app.projects.map((p) => {
                  const showLabels = !firstShown;
                  firstShown = true;
                  return <ProjectCard key={p.name} project={p} showLabels={showLabels} />;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows up from CI to applications */}
        <Arrows count={3} />

        {/* Tier 2: CI & Scientific Finding Checking — flat */}
        <div className="rounded-2xl border border-hairline bg-card/30 p-4">
          <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-teal">
            Competitive Intelligence & Scientific Finding Checking
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {ciItems.map((item) => (
              <div
                key={item}
                className="rounded-md border border-hairline bg-paper/70 px-3 py-2 text-sm font-medium text-ink"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows up from infra to CI */}
        <Arrows count={3} />

        {/* Tier 1: IT Infrastructure — flat */}
        <div className="rounded-2xl border border-hairline bg-card/30 p-4 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
            IT Infrastructure Excellence Enablement
          </div>
        </div>
      </div>
    </section>
  );
}
