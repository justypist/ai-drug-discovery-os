import { motion } from "framer-motion";

const appItems = [
  "Target Research",
  "ADMET Prediction",
  "Molecule Diff. Analysis",
  "Animal Model Eval.",
  "Unmet Medical Needs",
  "Clinical Study QC/QA",
  "Protocol Deviation",
  "Project Risk & Issue Mgmt",
  "Medical Monitoring",
  "Protocol Review",
  "GCTO Operation Platform",
  "Guidance QA",
  "Virtual Cell",
  "Digital Pathology",
  "Genomics Platform",
  "PBPK Prediction",
  "Scientific Finding Tracking",
  "PV Literature Search",
  "Disease Deep Dive",
  "Clinical Data Benchmark",
  "Competitive Intelligence",
];

const TOP_COUNT = 5;
const BOTTOM_COUNT = 5;
const LEFT_COUNT = 5;
const RIGHT_COUNT = 6;

const topItems = appItems.slice(0, TOP_COUNT);
const bottomItems = appItems.slice(TOP_COUNT, TOP_COUNT + BOTTOM_COUNT);
const leftItems = appItems.slice(
  TOP_COUNT + BOTTOM_COUNT,
  TOP_COUNT + BOTTOM_COUNT + LEFT_COUNT
);
const rightItems = appItems.slice(
  TOP_COUNT + BOTTOM_COUNT + LEFT_COUNT,
  TOP_COUNT + BOTTOM_COUNT + LEFT_COUNT + RIGHT_COUNT
);

const OS = { x: 420, y: 220, w: 160, h: 80 };
const LABEL_W = 180;
const LABEL_H = 32;
const TOP_Y = 50;
const BOTTOM_Y = 420;
const LEFT_X = 40;
const RIGHT_X = 780;
const LEFT_START_Y = 100;
const RIGHT_START_Y = 100;

function distribute(count: number, start: number, max: number) {
  const gap = (max - start - LABEL_H * count) / (count - 1);
  return Array.from({ length: count }, (_, i) => start + i * (LABEL_H + gap));
}

const leftYs = distribute(LEFT_COUNT, LEFT_START_Y, 390);
const rightYs = distribute(RIGHT_COUNT, RIGHT_START_Y, 410);
const topXs = distribute(TOP_COUNT, 40, 1000 - LABEL_W - 40);
const bottomXs = topXs;

export function OSSection() {
  return (
    <section
      id="os"
      className="border-t border-hairline bg-card py-4 md:py-5"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-4 max-w-5xl">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-12 bg-teal/60" />
            <span className="text-base font-semibold uppercase tracking-[0.18em] text-teal md:text-lg">
              Multi-Agent Platform
            </span>
          </div>
          <h2 className="font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl">
            Multi-agent Platform for Drug R&D AI OS
          </h2>
          <p className="mt-2 max-w-3xl text-lg leading-relaxed text-ink md:text-xl">
            No single agent solves a drug program. The R&D AI OS routes tasks, shares context, and orchestrates specialized agents — turning fragmented tools into one coherent workflow.
          </p>
        </div>

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
    <div className="relative w-full max-h-[62vh] overflow-hidden rounded-lg border border-hairline bg-paper p-2">
      <svg viewBox="0 0 1000 480" className="h-auto w-full">
        <defs>
          <marker
            id="arrow-os"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>

        {/* connection lines */}
        {topItems.map((_, i) => {
          const x = topXs[i] + LABEL_W / 2;
          const y = TOP_Y + LABEL_H;
          return (
            <line
              key={`top-line-${i}`}
              x1={x}
              y1={y}
              x2={OS.x + OS.w / 2}
              y2={OS.y}
              className="stroke-teal/40 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}
        {bottomItems.map((_, i) => {
          const x = bottomXs[i] + LABEL_W / 2;
          const y = BOTTOM_Y;
          return (
            <line
              key={`bottom-line-${i}`}
              x1={x}
              y1={y}
              x2={OS.x + OS.w / 2}
              y2={OS.y + OS.h}
              className="stroke-teal/40 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}
        {leftItems.map((_, i) => {
          const x = LEFT_X + LABEL_W;
          const y = leftYs[i] + LABEL_H / 2;
          return (
            <line
              key={`left-line-${i}`}
              x1={x}
              y1={y}
              x2={OS.x}
              y2={OS.y + OS.h / 2}
              className="stroke-teal/40 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}
        {rightItems.map((_, i) => {
          const x = RIGHT_X;
          const y = rightYs[i] + LABEL_H / 2;
          return (
            <line
              key={`right-line-${i}`}
              x1={x}
              y1={y}
              x2={OS.x + OS.w}
              y2={OS.y + OS.h / 2}
              className="stroke-teal/40 text-teal"
              strokeWidth="1.5"
              markerEnd="url(#arrow-os)"
            />
          );
        })}

        {/* application labels */}
        {topItems.map((name, i) => renderLabel(name, topXs[i], TOP_Y, "top"))}
        {bottomItems.map((name, i) =>
          renderLabel(name, bottomXs[i], BOTTOM_Y, "bottom")
        )}
        {leftItems.map((name, i) =>
          renderLabel(name, LEFT_X, leftYs[i], "left")
        )}
        {rightItems.map((name, i) =>
          renderLabel(name, RIGHT_X, rightYs[i], "right")
        )}

        {/* central OS kernel */}
        <g>
          <rect
            x={OS.x}
            y={OS.y}
            width={OS.w}
            height={OS.h}
            rx="8"
            className="fill-ink"
          />
          <text
            x={OS.x + OS.w / 2}
            y={OS.y + OS.h / 2 - 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-serif fill-paper"
            fontSize="22"
          >
            Drug R&amp;D AI OS
          </text>
          <text
            x={OS.x + OS.w / 2}
            y={OS.y + OS.h - 12}
            textAnchor="middle"
            fontSize="11"
            letterSpacing="3"
            className="fill-teal-soft"
          >
            KERNEL
          </text>
        </g>

        <text
          x="500"
          y="472"
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

function renderLabel(
  name: string,
  x: number,
  y: number,
  position: "top" | "bottom" | "left" | "right"
) {
  const isSide = position === "left" || position === "right";
  const textAlign =
    position === "left" ? "text-right" : position === "right" ? "text-left" : "text-center";

  return (
    <foreignObject key={name} x={x} y={y} width={LABEL_W} height={LABEL_H}>
      <div className="flex h-full w-full items-center">
        <div
          className={`w-full rounded-md border border-hairline bg-card px-2 py-0.5 shadow-sm ${textAlign}`}
        >
          <span
            className={`inline-block text-[10px] font-semibold leading-tight text-ink md:text-xs ${
              isSide ? "text-left" : "text-center"
            }`}
          >
            {name}
          </span>
        </div>
      </div>
    </foreignObject>
  );
}
