import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const appClusters = [
  {
    id: "search",
    label: "Search & Evaluation",
    x: 60,
    y: 60,
    width: 280,
    height: 180,
    items: [
      "Target Research",
      "ADMET Prediction",
      "Molecule Differentiation Analysis",
      "Animal Model Translatability Evaluation",
      "Unmet Medical Needs Identification",
    ],
  },
  {
    id: "clinical",
    label: "Clinical Development",
    x: 660,
    y: 60,
    width: 280,
    height: 240,
    items: [
      "Clinical Study QC & QA",
      "Protocol Deviation Analysis",
      "Project Risk & Issue Management",
      "Medical Monitoring",
      "Protocol Review",
      "GCTO Operation Platform",
      "Guidance QA",
    ],
  },
  {
    id: "frontier",
    label: "Frontier Technology",
    x: 60,
    y: 380,
    width: 280,
    height: 160,
    items: ["Virtual Cell", "Digital Pathology", "Genomics Platform", "PBPK Prediction"],
  },
  {
    id: "ci",
    label: "Competitive Intelligence & Scientific Finding Tracking",
    x: 660,
    y: 380,
    width: 280,
    height: 180,
    items: [
      "Scientific Finding Tracking",
      "PV Literature Search",
      "Disease Deep Dive",
      "Clinical Data Benchmarking",
      "Competitive Intelligence Monitoring",
    ],
  },
];

export function OSSection() {
  return (
    <section
      id="os"
      className="border-t border-hairline bg-card py-6 md:py-8"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Multi-Agent Platform"
          title="Multi-agent Platform for Drug R&D AI OS"
          lede="No single agent solves a drug program. The R&D AI OS routes tasks, shares context, and orchestrates specialized agents — turning fragmented tools into one coherent workflow."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <OSDiagram />
        </motion.div>
      </div>
    </section>
  );
}

function OSDiagram() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-hairline bg-paper p-4">
      <svg viewBox="0 0 1000 620" className="h-auto w-full">
        <defs>
          <marker
            id="arrow-os"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* central OS kernel */}
        <g>
          <rect
            x="420"
            y="270"
            width="160"
            height="80"
            rx="6"
            className="fill-ink"
          />
          <text
            x="500"
            y="308"
            textAnchor="middle"
            className="font-serif fill-paper"
            fontSize="26"
          >
            Drug R&amp;D AI OS
          </text>
          <text
            x="500"
            y="335"
            textAnchor="middle"
            fontSize="12"
            letterSpacing="3"
            className="fill-teal-soft"
          >
            KERNEL
          </text>
        </g>

        {/* application clusters */}
        {appClusters.map((c) => {
          const cx = c.x + c.width / 2;
          const cy = c.y + c.height / 2;
          const isLeft = cx < 500;
          const targetX = isLeft ? 420 : 580;
          const targetY = 310;
          return (
            <g key={c.id}>
              <line
                x1={cx}
                y1={cy}
                x2={targetX}
                y2={targetY}
                className="stroke-teal/50 text-teal"
                strokeWidth="2"
                markerEnd="url(#arrow-os)"
              />
              <rect
                x={c.x}
                y={c.y}
                width={c.width}
                height={c.height}
                rx="8"
                className="fill-card stroke-hairline"
              />
              <foreignObject
                x={c.x}
                y={c.y}
                width={c.width}
                height={c.height}
              >
                <div className="flex h-full flex-col p-3">
                  <div className="mb-2 text-sm font-bold uppercase tracking-wider text-teal md:text-base">
                    {c.label}
                  </div>
                  <ul className="flex-1 space-y-1 overflow-hidden text-sm leading-tight text-ink md:text-base">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </foreignObject>
            </g>
          );
        })}

        <text
          x="500"
          y="590"
          textAnchor="middle"
          fontSize="12"
          letterSpacing="3"
          className="fill-ink-soft"
        >
          SHARED MEMORY · TOOL REGISTRY · TASK ROUTER
        </text>
      </svg>
    </div>
  );
}
