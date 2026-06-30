import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as Activity, _ as ChevronRight, a as Scaling, b as BrainCircuit, c as Play, d as Lightbulb, f as FileSearch, g as CircleAlert, h as CircleCheck, i as Stethoscope, l as Network, m as Compass, n as TrendingUp, o as RotateCcw, p as FileInput, r as Sun, s as RefreshCw, t as Users, u as Moon, v as ChevronLeft, x as ArrowRight, y as Calendar } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFBlWg4x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		id: "timeline",
		label: "Timeline",
		Icon: Calendar
	},
	{
		id: "new-projects",
		label: "Project Overview",
		Icon: Lightbulb
	},
	{
		id: "progress",
		label: "Current Project Progress",
		Icon: Activity
	},
	{
		id: "case-study",
		label: "Case Study",
		Icon: FileSearch
	},
	{
		id: "loop",
		label: "Self-Evolving Agent",
		Icon: RefreshCw
	},
	{
		id: "os",
		label: "Multi-agent Platform",
		Icon: Network
	},
	{
		id: "scaling",
		label: "Two-way Scaling",
		Icon: Scaling
	},
	{
		id: "opportunities",
		label: "Opportunities",
		Icon: Compass
	}
];
function SiteNav() {
	const [active, setActive] = (0, import_react.useState)("timeline");
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initial = saved || (prefersDark ? "dark" : "light");
		setTheme(initial);
		document.documentElement.classList.toggle("dark", initial === "dark");
	}, []);
	(0, import_react.useEffect)(() => {
		const onSlideChange = (e) => {
			const id = e.detail;
			if (id) setActive(id);
		};
		window.addEventListener("slidechange", onSlideChange);
		return () => window.removeEventListener("slidechange", onSlideChange);
	}, []);
	const toggleTheme = () => {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		localStorage.setItem("theme", next);
		document.documentElement.classList.toggle("dark", next === "dark");
	};
	const handleClick = (id) => {
		setActive(id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed left-0 right-0 top-0 z-50 bg-paper/85 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-3 py-2 md:px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-1 md:gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden flex-wrap items-center justify-start gap-1 md:flex",
					children: links.map((l) => {
						const isActive = active === l.id;
						const { Icon } = l;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${l.id}`,
								onClick: () => handleClick(l.id),
								"aria-label": l.label,
								title: l.label,
								className: `relative flex h-6 w-6 items-center justify-center rounded-md border transition-all ${isActive ? "border-teal bg-teal text-primary-foreground shadow-sm" : "border-hairline bg-card text-ink hover:border-teal hover:text-teal"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-3 w-3",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pointer-events-none absolute left-1/2 top-full z-50 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md border border-hairline bg-ink px-2 py-0.5 text-[10px] font-semibold text-paper opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100",
								children: l.label
							})]
						}, l.id);
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggleTheme,
				"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
				className: "flex h-6 w-6 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-sm transition-colors hover:border-teal hover:text-teal",
				children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-3 w-3" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3 w-3" })
			})]
		})
	});
}
var milestones = [
	{
		date: "Feb 5",
		label: "Kickoff"
	},
	{
		date: "Feb 14",
		label: "Project proposal finalized"
	},
	{
		date: "Mar 17",
		label: "Overall system design confirmed"
	},
	{
		date: "Mar 18",
		label: "8 project teams established"
	},
	{
		date: "Jul 27",
		label: "Deliver ≥ 2 project pilots",
		highlight: true
	},
	{
		date: "Sep",
		label: "Deliver ≥ 5 project pilots"
	},
	{
		date: "Nov",
		label: "Launch ≥ 5 projects into production"
	}
];
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-full flex-col items-center bg-paper/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-[40%] left-0 right-0 -translate-y-1/2 px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-sans text-center text-4xl font-black uppercase tracking-[0.08em] text-ink md:text-5xl lg:text-6xl",
				children: "AI Taskforce Update"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-[70%] left-1/2 w-full max-w-7xl -translate-x-1/2 px-4 md:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-full items-start gap-1 md:gap-2",
					children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-[8px] flex-1 items-start pt-[40px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-0 w-full ${i >= 4 ? "border-t border-dashed border-ink/30" : "border-t border-hairline"}` })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-[50px] flex-1 flex-col items-center text-center sm:min-w-[70px] md:min-w-[110px] lg:min-w-[120px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-sm uppercase tracking-wider text-ink md:text-base lg:text-lg",
								children: m.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-2 flex h-4 items-center justify-center md:mt-3",
								children: m.highlight ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-4 w-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-4 w-4 rounded-full bg-teal ring-4 ring-teal/20" })]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-ink-soft" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `mt-3 w-full break-words text-sm leading-snug md:mt-4 md:text-base ${m.highlight ? "font-semibold text-teal" : "text-ink"}`,
								children: m.label
							})
						]
					})] }, i))
				})
			})
		})]
	});
}
function SectionHeader({ eyebrow, title, lede, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `mb-8 max-w-5xl ${className}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm font-semibold uppercase tracking-[0.18em] text-teal md:text-base",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
				children: title
			}),
			lede && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-lg leading-snug text-ink md:text-xl",
				children: lede
			})
		]
	});
}
function LoopSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "loop",
		className: "bg-paper pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, { title: "Loop Engineering for Self-Evolving Agents" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-4xl text-left text-base font-medium text-ink md:text-lg lg:text-xl",
					children: "Systematic design of closed feedback loops that enable AI agents to continuously learn, self-correct, and evolve through autonomous iteration."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-100px"
					},
					transition: { duration: .6 },
					className: "grid h-full items-center gap-2 lg:grid-cols-[1fr_1fr] lg:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopDiagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-hairline bg-card p-3 md:p-4 ml-3.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eyebrow text-base mb-2 md:text-lg",
								children: "Enhancing Agentic Capability"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: [
									{
										title: "Prompt Engineering",
										desc: "Shape how the agent reasons through instructions, templates, and chain-of-thought triggers."
									},
									{
										title: "Context Engineering",
										desc: "Curate the right evidence, memory, and retrieval context so the agent decides from the best inputs."
									},
									{
										title: "Harness Engineering",
										desc: "Add tools, validators, guardrails, and feedback channels that keep the agent aligned and on-task."
									},
									{
										title: "Loop Engineering",
										desc: "Close the execution-evaluation-update loop so every task outcome becomes a training signal for the agent."
									}
								].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-base font-semibold text-ink md:text-lg",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-ink-soft md:text-base",
										children: item.desc
									})] })]
								}, item.title))
							})]
						})
					})]
				})
			]
		})
	});
}
function LoopDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative aspect-square w-full max-w-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 500 440",
			className: "h-full w-full text-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
					id: "arrow-loop",
					viewBox: "0 0 10 10",
					refX: "8",
					refY: "5",
					markerWidth: "8",
					markerHeight: "8",
					orient: "auto-start-reverse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0,0 L10,5 L0,10 z",
						fill: "currentColor"
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "250",
					cy: "220",
					r: "180",
					fill: "none",
					stroke: "currentColor",
					strokeOpacity: "0.5",
					strokeWidth: "2",
					strokeDasharray: "4 8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "250",
					y: "20",
					textAnchor: "middle",
					className: "fill-current text-xs uppercase tracking-[0.3em]",
					fill: "currentColor",
					opacity: "0.7",
					children: "Loop Engineering · RL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "120",
						cy: "220",
						r: "70",
						className: "fill-paper stroke-teal",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "120",
						y: "210",
						textAnchor: "middle",
						className: "font-serif fill-ink",
						fontSize: "26",
						children: "AI Agent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "120",
						y: "236",
						textAnchor: "middle",
						fontSize: "12",
						letterSpacing: "2",
						className: "fill-ink-soft",
						children: "POLICY · π"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "300",
						y: "150",
						width: "150",
						height: "150",
						rx: "8",
						className: "fill-card stroke-ink",
						strokeWidth: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "375",
						y: "210",
						textAnchor: "middle",
						className: "font-serif fill-ink",
						fontSize: "26",
						children: "Task"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "375",
						y: "236",
						textAnchor: "middle",
						fontSize: "12",
						letterSpacing: "2",
						className: "fill-ink-soft",
						children: "ENVIRONMENT"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "text-teal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 180 175 Q 235 115 290 175",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							markerEnd: "url(#arrow-loop)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "235",
							y: "115",
							textAnchor: "middle",
							fontSize: "14",
							className: "fill-ink",
							children: "Inference / Action"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "235",
							y: "125",
							textAnchor: "middle",
							fontSize: "11",
							letterSpacing: "2",
							className: "fill-ink-soft",
							children: "TRAJECTORY · τ"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					className: "text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 290 265 Q 235 325 180 265",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							markerEnd: "url(#arrow-loop)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "235",
							y: "340",
							textAnchor: "middle",
							fontSize: "14",
							className: "fill-ink",
							children: "Reward / Feedback"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "235",
							y: "357",
							textAnchor: "middle",
							fontSize: "11",
							letterSpacing: "2",
							className: "fill-ink-soft",
							children: "POLICY UPDATE"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "48",
					y: "398",
					fontSize: "11",
					letterSpacing: "2",
					className: "fill-ink-soft",
					children: "OUTCOME EVAL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "330",
					y: "398",
					fontSize: "11",
					letterSpacing: "2",
					className: "fill-ink-soft",
					children: "REWARD MODEL"
				})
			]
		})
	});
}
var appItems = [
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
	"Competitive Intelligence"
];
var TOP_COUNT = 5;
var LEFT_COUNT = 5;
var RIGHT_COUNT = 6;
var topItems = appItems.slice(0, TOP_COUNT);
var bottomItems = appItems.slice(TOP_COUNT, 10);
var leftItems = appItems.slice(10, 15);
var rightItems = appItems.slice(15, 21);
var OS = {
	x: 400,
	y: 210,
	w: 200,
	h: 60
};
var TOP_W = 180;
var TOP_H = 45;
var SIDE_W = 190;
var SIDE_H = 45;
var RIGHT_H = 40;
var TOP_Y = 40;
var BOTTOM_Y = 410;
var LEFT_X = 10;
var RIGHT_X = 800;
var LEFT_START_Y = 95;
var RIGHT_START_Y = 95;
var TOP_TRUNK_Y = 130;
var BOTTOM_TRUNK_Y = 350;
var LEFT_TRUNK_X = 210;
var RIGHT_TRUNK_X = 790;
function distribute(count, start, itemSize, max) {
	const gap = (max - start - itemSize * count) / (count - 1);
	return Array.from({ length: count }, (_, i) => start + i * (itemSize + gap));
}
var topXs = distribute(TOP_COUNT, 20, TOP_W, 980);
var bottomXs = topXs;
var leftYs = distribute(LEFT_COUNT, LEFT_START_Y, SIDE_H, 395);
var rightYs = distribute(RIGHT_COUNT, RIGHT_START_Y, RIGHT_H, 405);
function OSSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "os",
		className: "bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
					children: "Multi-agent Platform for Drug R&D AI OS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-5xl text-lg leading-snug text-ink md:text-xl",
					children: "Complex problems are rarely solved by a single agent—they require coordinated multi-agent orchestration - turning fragmented into one coherent workflow."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: { duration: .6 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OSDiagram, {})
			})]
		})
	});
}
function OSDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative w-full max-h-[72vh] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 1000 480",
			className: "h-auto w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
					id: "arrow-os",
					viewBox: "0 0 10 10",
					refX: "8",
					refY: "5",
					markerWidth: "5",
					markerHeight: "5",
					orient: "auto-start-reverse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0,0 L10,5 L0,10 z",
						fill: "currentColor"
					})
				}) }),
				topItems.map((_, i) => {
					const x = topXs[i] + TOP_W / 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						points: `${x},85 ${x},${TOP_TRUNK_Y} ${OS.x + OS.w / 2},${TOP_TRUNK_Y} ${OS.x + OS.w / 2},${OS.y}`,
						fill: "none",
						className: "stroke-teal/50 text-teal",
						strokeWidth: "1.5",
						markerEnd: "url(#arrow-os)"
					}, `top-line-${i}`);
				}),
				bottomItems.map((_, i) => {
					const x = bottomXs[i] + TOP_W / 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						points: `${x},${BOTTOM_Y} ${x},${BOTTOM_TRUNK_Y} ${OS.x + OS.w / 2},${BOTTOM_TRUNK_Y} ${OS.x + OS.w / 2},${OS.y + OS.h}`,
						fill: "none",
						className: "stroke-teal/50 text-teal",
						strokeWidth: "1.5",
						markerEnd: "url(#arrow-os)"
					}, `bottom-line-${i}`);
				}),
				leftItems.map((_, i) => {
					const x = 200;
					const y = leftYs[i] + SIDE_H / 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						points: `${x},${y} ${LEFT_TRUNK_X},${y} ${LEFT_TRUNK_X},${OS.y + OS.h / 2} ${OS.x},${OS.y + OS.h / 2}`,
						fill: "none",
						className: "stroke-teal/50 text-teal",
						strokeWidth: "1.5",
						markerEnd: "url(#arrow-os)"
					}, `left-line-${i}`);
				}),
				rightItems.map((_, i) => {
					const x = RIGHT_X;
					const y = rightYs[i] + RIGHT_H / 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
						points: `${x},${y} ${RIGHT_TRUNK_X},${y} ${RIGHT_TRUNK_X},${OS.y + OS.h / 2} ${OS.x + OS.w},${OS.y + OS.h / 2}`,
						fill: "none",
						className: "stroke-teal/50 text-teal",
						strokeWidth: "1.5",
						markerEnd: "url(#arrow-os)"
					}, `right-line-${i}`);
				}),
				topItems.map((name, i) => renderLabel(name, topXs[i], TOP_Y, TOP_W, TOP_H, "center")),
				bottomItems.map((name, i) => renderLabel(name, bottomXs[i], BOTTOM_Y, TOP_W, TOP_H, "center")),
				leftItems.map((name, i) => renderLabel(name, LEFT_X, leftYs[i], SIDE_W, SIDE_H, "right")),
				rightItems.map((name, i) => renderLabel(name, RIGHT_X, rightYs[i], SIDE_W, RIGHT_H, "left")),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: OS.x,
						y: OS.y,
						width: OS.w,
						height: OS.h,
						rx: "8",
						className: "fill-ink"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: OS.x + OS.w / 2,
						y: OS.y + OS.h / 2 - 2,
						textAnchor: "middle",
						dominantBaseline: "middle",
						className: "font-serif fill-paper",
						fontSize: "22",
						children: "Drug R&D AI OS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: OS.x + OS.w / 2,
						y: OS.y + OS.h - 10,
						textAnchor: "middle",
						fontSize: "11",
						letterSpacing: "3",
						className: "fill-teal-soft",
						children: "KERNEL"
					})
				] })
			]
		})
	});
}
function renderLabel(name, x, y, w, h, align) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("foreignObject", {
		x,
		y,
		width: w,
		height: h,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full w-full items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `w-full rounded-md border border-hairline bg-card px-2 py-1 shadow-sm ${align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-block text-xs font-semibold leading-tight text-ink md:text-sm",
					children: name
				})
			})
		})
	}, name);
}
var xItems = [
	"Target Research",
	"ADMET Prediction",
	"Molecule Differentiation",
	"Animal Model Translatability",
	"Unmet Medical Needs",
	"Protocol Deviation Analysis",
	"Medical Monitoring",
	"Protocol Review",
	"GCTO Operation Platform",
	"Guidance QA",
	"Virtual Cell",
	"Digital Pathology",
	"Genomics Platform",
	"PBPK Prediction",
	"Clinical Data Benchmarking",
	"Competitive Intelligence",
	"Disease Deep Dive"
];
var yItems = [
	"Prompt Engineering",
	"Chain of Thoughts",
	"Context Engineering",
	"Harness Engineering",
	"Loop Engineering",
	"Multi-Agent Framework"
];
var COLS = xItems.length;
var ROWS = yItems.length;
var STEP1_END = COLS;
var xLabels = [...xItems];
function upHeight(c) {
	return Math.max(1, ROWS - Math.floor(c / 2));
}
function tileState(r, c, step) {
	if (step === 0) return {
		filled: false,
		delay: 0
	};
	if (step === 1) {
		if (r === 0 && c < STEP1_END) return {
			filled: true,
			delay: c * .12
		};
		return {
			filled: false,
			delay: 0
		};
	}
	const height = upHeight(c);
	if (step === 2) {
		if (r < height) return {
			filled: true,
			delay: c * .18 + r * .12
		};
		return {
			filled: false,
			delay: 0
		};
	}
	if (r < height) return {
		filled: true,
		delay: 0
	};
	return {
		filled: true,
		delay: .025 * (r + c) + .5
	};
}
function colRevealed(c, step) {
	return step >= 1;
}
function rowRevealed(r, step) {
	if (step >= 3) return true;
	if (step >= 2) return true;
	return false;
}
function tileOpacity(r) {
	return .35 + r / (ROWS - 1) * .65;
}
function ScalingSection() {
	const [step, setStep] = (0, import_react.useState)(0);
	const next = () => setStep((s) => (s + 1) % 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "scaling",
		className: "bg-paper pb-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-2 md:px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					title: "Drug R&D AI OS",
					lede: "Scaling Through Applications × Agentic Capabilities"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid gap-2 md:grid-cols-3",
					children: [
						"Expand the Application Layer by building specialized tools and scaling trusted data assets",
						"Upgrade Agentic Intelligence by embedding advanced reasoning and planning capabilities",
						"Accelerate Organizational AI Maturity by developing talent while shipping solutions faster"
					].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-start gap-2 text-base text-ink transition-opacity duration-500 md:text-lg ${step > i ? "opacity-100" : "opacity-0"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "leading-snug",
							children: text
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex items-start justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							next();
						},
						"aria-label": "Next step",
						className: "inline-flex items-center justify-center rounded-full bg-ink p-3 text-paper shadow-sm transition-transform hover:scale-105 active:scale-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					onClick: next,
					className: "mt-1 cursor-pointer overflow-hidden p-1 md:p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "whitespace-nowrap text-sm font-bold tracking-[0.2em] text-ink md:text-base",
									style: {
										writingMode: "vertical-rl",
										transform: "rotate(180deg)"
									},
									children: "AI AGENTIC CAPABILITY SCALING-UP"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-1",
									style: { gridTemplateColumns: `minmax(200px, 220px) repeat(${COLS}, minmax(0, 1fr))` },
									children: [
										Array.from({ length: ROWS }).map((_, idxFromTop) => {
											const r = ROWS - 1 - idxFromTop;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowFragment, {
												r,
												step,
												labelOn: rowRevealed(r, step),
												label: yItems[r]
											}, r);
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
										xLabels.map((label, c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative h-16",
											children: label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `absolute top-0 left-1/2 origin-top-left rotate-45 whitespace-nowrap text-xs font-medium leading-tight transition-opacity duration-500 md:text-sm ${colRevealed(c, step) ? "text-teal opacity-100" : "text-ink-soft opacity-30"}`,
												children: label
											})
										}, c))
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-center text-sm font-bold tracking-[0.2em] text-ink md:text-base",
									children: "APPLICATION SCALING-UP (TOOL & DATA)"
								})]
							})]
						})
					})
				})
			]
		})
	});
}
function RowFragment({ r, step, labelOn, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center justify-end pr-3 text-right text-sm font-medium leading-tight whitespace-normal transition-opacity duration-500 md:text-base ${labelOn ? "text-teal opacity-100" : "opacity-30 text-ink-soft"}`,
		children: label
	}), Array.from({ length: COLS }).map((_, c) => {
		const { filled, delay } = tileState(r, c, step);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-square rounded-sm border border-hairline bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: false,
				animate: {
					opacity: filled ? tileOpacity(r) : 0,
					scale: filled ? 1 : .6
				},
				transition: {
					duration: .3,
					delay: filled ? delay : 0
				},
				className: "absolute inset-0 rounded-sm bg-teal"
			})
		}, c);
	})] });
}
var ownership = {
	"External Environment Monitoring": "China",
	"Disease Deep-dive": "China",
	"Target Research & Novel Target Alerts": "China",
	"Asset Benchmarking": "China",
	"Animal Model Translatability Eval.": "China",
	"Molecular Differentiation Analysis": "China",
	"Project Risk & Issue Management": "China",
	"Clinical Data Benchmarking": "China",
	"ADMET Prediction": "China & HQ",
	"Binding Affinity Prediction": "China & HQ",
	"Competitive Intelligence Monitoring": "China & HQ",
	"Scientific Finding Tracking": "China & HQ",
	"Virtual Cell": "China & HQ",
	"Site Selection": "China & HQ",
	"Clinical Study QC/QA": "China & HQ",
	"Protocol Deviation": "China & HQ",
	"CSR Drafting": "China & HQ",
	"Medical Monitoring": "China & HQ",
	"Protocol Drafting": "HQ",
	"ICF Drafting": "HQ",
	"IB Updates": "HQ",
	"Digital Pathology": "HQ",
	"AI-assisted Drafting": "HQ",
	"Unmet Medical Needs Identification": "Unexplored",
	"Protocol Review": "Unexplored",
	"IB Drafting": "Unexplored",
	"Patient Recruitment": "Unexplored",
	"Operation Management Platform": "Unexplored",
	"AI for RWE": "Unexplored",
	"AI-based Virtual Review": "Unexplored",
	"AE/SAE Detection": "Unexplored",
	"Audit Report": "Unexplored"
};
var groups = [
	{
		name: "Search & Evaluation",
		phases: [
			{
				name: "Innovation Focus & Ideation",
				apps: [
					"External Environment Monitoring",
					"Disease Deep-dive",
					"Target Research & Novel Target Alerts",
					"Competitive Intelligence Monitoring",
					"Scientific Finding Tracking",
					"Virtual Cell",
					"Unmet Medical Needs Identification"
				]
			},
			{
				name: "Search & Evaluation",
				apps: [
					"Asset Benchmarking",
					"Animal Model Translatability Eval.",
					"Molecular Differentiation Analysis"
				]
			},
			{
				name: "Data Generation & Validation",
				apps: ["ADMET Prediction", "Binding Affinity Prediction"]
			}
		]
	},
	{
		name: "Clinical Development",
		phases: [
			{
				name: "Study Planning",
				apps: [
					"Site Selection",
					"Protocol Drafting",
					"ICF Drafting",
					"Protocol Review",
					"IB Drafting"
				]
			},
			{
				name: "Execution",
				apps: [
					"Clinical Study QC/QA",
					"Protocol Deviation",
					"Project Risk & Issue Management",
					"CSR Drafting",
					"IB Updates",
					"Medical Monitoring",
					"Patient Recruitment",
					"Operation Management Platform",
					"AE/SAE Detection",
					"Digital Pathology",
					"Audit Report",
					"AI for RWE"
				]
			},
			{
				name: "Analysis & Reporting",
				apps: ["Clinical Data Benchmarking"]
			}
		]
	},
	{
		name: "Regulatory Affairs",
		phases: [{
			name: "Regulatory Affairs",
			apps: ["AI-assisted Drafting", "AI-based Virtual Review"]
		}]
	}
];
var order = {
	"China": 0,
	"China & HQ": 1,
	"HQ": 2,
	"Unexplored": 3
};
var chipClass = {
	"China": "bg-emerald-500/15 border-emerald-600/50 text-emerald-900 dark:text-emerald-200",
	"China & HQ": "bg-sky-500/15 border-sky-600/50 text-sky-900 dark:text-sky-200",
	"HQ": "bg-amber-500/20 border-amber-600/50 text-amber-900 dark:text-amber-200",
	"Unexplored": "bg-zinc-400/15 border-zinc-500/60 border-dashed text-ink/70"
};
var dotClass = {
	"China": "bg-emerald-500",
	"China & HQ": "bg-sky-500",
	"HQ": "bg-amber-500",
	"Unexplored": "bg-zinc-400"
};
var groupBg = {
	"Search & Evaluation": "bg-bg-search/40",
	"Clinical Development": "bg-bg-clinical/40",
	"Regulatory Affairs": "bg-bg-frontier/40"
};
var totalPhases = groups.reduce((n, g) => n + g.phases.length, 0);
function OpportunitiesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "opportunities",
		className: "h-full bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-full w-full max-w-[1600px] flex-col px-4 pt-0 pb-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
						children: "Opportunities Across R&D Value Chain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-base text-ink/70 md:text-lg",
						children: "\n"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-end gap-5 md:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold text-ink/70 md:text-sm",
							children: "Data from the MRL GenAI Functional Taskforce"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap items-center gap-3 text-base",
							children: Object.keys(chipClass).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-4 w-4 rounded-sm ${dotClass[k]}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-ink",
									children: k
								})]
							}, k))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 grid gap-1",
					style: { gridTemplateColumns: groups.map((g) => `${g.phases.length}fr`).join(" ") },
					children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `rounded-md border border-hairline px-3 py-1.5 text-center text-base font-bold uppercase tracking-wider text-ink ${groupBg[g.name]}`,
						children: g.name
					}, g.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid items-stretch gap-1",
					style: { gridTemplateColumns: `repeat(${totalPhases}, minmax(0,1fr))` },
					children: groups.flatMap((g) => g.phases.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-center justify-center rounded-md bg-ink px-2 py-2 text-center text-sm font-bold leading-tight text-paper md:text-base",
						children: [p.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
							className: "pointer-events-none absolute -right-3 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-ink",
							strokeWidth: 3,
							"aria-hidden": true,
							style: { display: g.name === groups[groups.length - 1].name && i === g.phases.length - 1 ? "none" : void 0 }
						})]
					}, `${g.name}-${p.name}`)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 grid min-h-0 flex-1 gap-1",
					style: { gridTemplateColumns: `repeat(${totalPhases}, minmax(0,1fr))` },
					children: groups.flatMap((g) => g.phases.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex flex-col gap-1.5 overflow-y-auto rounded-md border border-hairline p-1.5 ${groupBg[g.name]}`,
						children: [...p.apps].sort((a, b) => order[ownership[a] ?? "Unexplored"] - order[ownership[b] ?? "Unexplored"]).map((app) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `rounded-md border px-2 py-1.5 text-[13px] font-semibold leading-tight md:text-sm ${chipClass[ownership[app] ?? "Unexplored"]}`,
								children: app
							}, app);
						})
					}, `col-${g.name}-${p.name}`)))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-ink bg-paper py-3 shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-lg font-black text-ink md:text-xl lg:text-2xl",
						children: "Where are the valuable AI applications in different functions or project process?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-lg font-black text-ink md:text-xl lg:text-2xl",
						children: "Where are the opportunities we believe we are more advanced so that we can talk broadly with HQ?"
					})]
				})
			]
		})
	});
}
var streams$1 = [
	{
		id: "search",
		title: "Search & Evaluation",
		color: "bg-bg-panel",
		projects: [
			{
				name: "Target Research",
				value: 80
			},
			{
				name: "ADMET Prediction",
				value: 70
			},
			{
				name: "Molecule Differentiation Analysis",
				value: 50
			},
			{
				name: "Animal Model Translatability Evaluation",
				value: 20,
				greenLabel: "Q1 2027",
				blackLabel: "Q2 2027"
			}
		]
	},
	{
		id: "clinical",
		title: "Clinical Development",
		color: "bg-bg-panel",
		projects: [{
			name: "Clinical Study QC & QA",
			feasibility: true,
			sub: [{
				name: "Protocol Deviation Analysis",
				value: 70
			}]
		}, {
			name: "Project Risk & Issue Identification & Management",
			value: 15,
			greenLabel: "NOV",
			blackLabel: "Q1 2027"
		}]
	},
	{
		id: "frontier",
		title: "Frontier Technology",
		color: "bg-bg-panel",
		projects: [{
			name: "Virtual Cell",
			value: 20,
			greenLabel: "Q1 2027",
			blackLabel: "Q2 2027"
		}, {
			name: "Digital Pathology",
			value: 15,
			greenLabel: "Q1 2027",
			blackLabel: "TBD"
		}]
	}
];
var ciItems$1 = [
	{
		name: "Scientific Finding Tracking",
		value: 50
	},
	{
		name: "Disease Deep Dive",
		value: 30
	},
	{
		name: "Clinical Data Benchmarking",
		value: 30
	},
	{
		name: "Competitive Intelligence Monitoring",
		value: 50
	}
];
function ProgressLegend() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-5 text-base font-semibold uppercase tracking-wider text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-teal drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PILOT" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-ink drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MASSIVE USE" })]
		})]
	});
}
function ProgressBar({ value = 50, animate = false, resetting = false, greenLabel = "SEP", blackLabel = "NOV" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 w-[65%]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-3 w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -translate-x-1/2",
					style: { left: "80%" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-teal drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -translate-x-1/2",
					style: { left: "100%" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-ink drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-3 w-full overflow-hidden rounded-full bg-progress-track",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `h-full rounded-full ${resetting ? "transition-none" : "transition-[width] duration-1000 ease-out"}`,
					style: {
						width: animate ? `${value}%` : "0%",
						backgroundImage: "repeating-linear-gradient(45deg, var(--success) 0 5px, var(--success-dim) 5px 10px)"
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-1 h-6 text-base font-semibold uppercase tracking-wider text-ink/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute text-right leading-none whitespace-nowrap",
					style: {
						left: "80%",
						transform: "translateX(-100%)"
					},
					children: greenLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute text-left leading-none whitespace-nowrap",
					style: { left: "100%" },
					children: blackLabel
				})]
			})
		]
	});
}
function FeasibilityBadge() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 align-middle rounded-full bg-teal/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-teal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "10",
			height: "10",
			viewBox: "0 0 12 12",
			fill: "none",
			className: "shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "6",
				cy: "6",
				r: "6",
				fill: "currentColor"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3.5 6.2L5.2 7.8L8.5 4.5",
				stroke: "white",
				strokeWidth: "1.5",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})]
		}), "Feasibility"]
	});
}
function ProjectItem({ project, animate, resetting }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-0.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-lg leading-snug text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: project.name
					}), project.feasibility && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeasibilityBadge, {})] })]
				})]
			}),
			(!project.feasibility || project.greenLabel || project.blackLabel) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ml-[14px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
					value: project.feasibility ? 0 : project.value ?? 50,
					animate,
					resetting,
					greenLabel: project.greenLabel,
					blackLabel: project.blackLabel
				})
			}),
			project.sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 space-y-2 border-l-2 border-ink/20 pl-4",
				children: project.sub.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-base leading-none text-ink/90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: s.name
					}), s.feasibility && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeasibilityBadge, {})] })]
				}), (!s.feasibility || s.greenLabel || s.blackLabel) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
					value: s.feasibility ? 0 : s.value ?? 50,
					animate,
					resetting,
					greenLabel: s.greenLabel,
					blackLabel: s.blackLabel
				})] }, s.name))
			})
		]
	});
}
function ProgressSection() {
	const [animate, setAnimate] = (0, import_react.useState)(false);
	const [resetting, setResetting] = (0, import_react.useState)(false);
	const [hasPlayed, setHasPlayed] = (0, import_react.useState)(false);
	const handlePlay = () => {
		if (hasPlayed) {
			setResetting(true);
			setAnimate(false);
			setTimeout(() => {
				setResetting(false);
				setAnimate(true);
			}, 60);
		} else {
			setHasPlayed(true);
			setAnimate(true);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "progress",
		className: "bg-paper pb-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
						children: "Current Project Progress"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressLegend, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handlePlay,
							"aria-label": hasPlayed ? "Replay progress" : "Play progress",
							className: "inline-flex items-center justify-center rounded-full bg-ink p-3 text-paper shadow-sm transition-colors hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2",
							children: hasPlayed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-6 w-6" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-3 md:grid-cols-3",
					children: streams$1.map((stream) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl border border-hairline p-3 shadow-sm ${stream.color}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal",
							children: stream.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1",
							children: stream.projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectItem, {
								project: p,
								animate,
								resetting
							}, p.name))
						})]
					}, stream.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 rounded-2xl border border-hairline bg-bg-panel p-2.5 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal",
						children: "Competitive Intelligence & Scientific Finding Tracking"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-x-5 gap-y-0.5 md:grid-cols-2",
						children: ciItems$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-lg font-semibold leading-none text-ink",
									children: item.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ml-[14px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
									value: item.value,
									animate,
									resetting
								})
							})]
						}, item.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 rounded-2xl border border-hairline bg-bg-panel px-4 py-2 text-center shadow-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-lg font-bold uppercase tracking-[0.12em] text-teal",
						children: "IT Infrastructure Excellence Enablement"
					})
				})
			]
		})
	});
}
var streams = [
	{
		id: "search",
		title: "Search & Evaluation",
		color: "bg-bg-panel",
		projects: [
			{
				name: "Target Research",
				value: 80
			},
			{
				name: "ADMET Prediction",
				value: 70
			},
			{
				name: "Molecule Differentiation Analysis",
				value: 50
			},
			{
				name: "Animal Model Translatability Evaluation",
				value: 20
			}
		],
		candidates: [{ name: "Unmet Medical Needs Identification" }]
	},
	{
		id: "clinical",
		title: "Clinical Development",
		color: "bg-bg-panel",
		projects: [{
			name: "Clinical Study QC & QA",
			feasibility: true,
			sub: [{
				name: "Protocol Deviation Analysis",
				value: 70
			}]
		}, {
			name: "Project Risk & Issue Identification & Management",
			feasibility: true
		}],
		candidates: [
			{ name: "Medical Monitoring" },
			{ name: "Protocol Review" },
			{ name: "GCTO Operation Platform" },
			{ name: "Guidance QA" }
		]
	},
	{
		id: "frontier",
		title: "Frontier Technology",
		color: "bg-bg-panel",
		projects: [{
			name: "Virtual Cell",
			value: 20
		}, {
			name: "Digital Pathology",
			feasibility: true
		}],
		candidates: [{ name: "Genomics Platform" }, { name: "PBPK Prediction" }]
	}
];
var ciItems = [
	{
		name: "Scientific Finding Tracking",
		value: 50,
		candidates: ["PV Literature Search"]
	},
	{
		name: "Disease Deep Dive",
		value: 30
	},
	{
		name: "Clinical Data Benchmarking",
		value: 30
	},
	{
		name: "Competitive Intelligence Monitoring",
		value: 50
	}
];
function NameOnlyItem({ name, gray, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${gray ? "bg-ink/60" : "bg-ink"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-lg leading-none ${gray ? "font-medium text-ink/60" : "font-semibold text-ink"}`,
				children: name
			})]
		}), sub && sub.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 space-y-2 border-l-2 border-ink/20 pl-4",
			children: sub.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameOnlyItem, {
				name: s.name,
				gray: gray || !!s.feasibility
			}, s.name))
		})]
	});
}
function CandidateItem({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-1",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-lg font-medium leading-none text-ink/60",
				children: name
			})]
		})
	});
}
function NewProjectsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "new-projects",
		className: "bg-paper pb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
						children: "Project Overview"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 md:grid-cols-3",
					children: streams.map((stream) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl border border-hairline p-4 shadow-sm ${stream.color}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal",
								children: stream.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: stream.projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameOnlyItem, {
									name: p.name,
									sub: p.sub
								}, p.name))
							}),
							stream.candidates.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 border-t border-dashed border-ink/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: stream.candidates.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandidateItem, { name: p.name }, p.name))
							})] })
						]
					}, stream.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-2xl border border-hairline bg-bg-panel p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal",
						children: "Competitive Intelligence & Scientific Finding Tracking"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-2",
						children: ciItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameOnlyItem, { name: item.name }), item.candidates && item.candidates.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 space-y-2 border-l-2 border-ink/20 pl-4",
								children: item.candidates.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameOnlyItem, {
									name: c,
									gray: true
								}, c))
							})]
						}, item.name))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-2xl border border-hairline bg-bg-panel p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal",
						children: "IT Infrastructure Excellence Enablement"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-x-5 gap-y-1 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameOnlyItem, {
							name: "GPU Resource for AI Model Training and Inference",
							gray: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NameOnlyItem, {
							name: "Data Lake",
							gray: true
						})]
					})]
				})
			]
		})
	});
}
var timeline = [
	{
		date: "May 8",
		label: "Brainstorm"
	},
	{
		date: "May 11",
		label: "Prototype completed"
	},
	{
		date: "May 14",
		label: "First prototype communication"
	},
	{
		date: "Jun 12",
		label: "First round feedback"
	},
	{
		date: "Jun 26",
		label: "First round optimization completed"
	}
];
function CaseStudySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "case-study",
		className: "bg-paper pb-2 md:pb-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-2 md:px-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-sans text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
						children: [
							"Case Study ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink/40",
								children: "·"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal",
								children: "AI-Assisted Protocol Deviation"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1.5 rounded-2xl border border-hairline bg-card p-2 md:p-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 items-center justify-center rounded-lg border border-hairline bg-paper text-ink/60",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-sans text-base font-bold text-ink md:text-lg",
										children: "Status Quo"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex flex-col gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2.5 rounded-xl border-2 border-hairline bg-paper p-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileInput, { className: "h-3.5 w-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-bold text-ink md:text-base",
												children: "CRA Input"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center py-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 rotate-90 text-ink/30" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2.5 rounded-xl border-2 border-hairline bg-paper p-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-bold text-ink md:text-base",
												children: "Physician Review"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center py-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 rotate-90 text-ink/30" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-center gap-1 rounded-xl border-2 border-hairline bg-paper p-2 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold",
														children: "PD"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-xs font-bold uppercase tracking-wider text-ink md:text-sm",
													children: "PD Classification"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-center gap-1 rounded-xl border-2 border-hairline bg-paper p-2 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] font-bold",
														children: "IPD"
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-xs font-bold uppercase tracking-wider text-ink md:text-sm",
													children: "IPD Determination"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center py-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 rotate-90 text-ink/30" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2.5 rounded-xl border-2 border-hairline bg-paper p-2 opacity-80",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ink/5 text-ink/60",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3.5 w-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-bold text-ink md:text-base",
												children: "Trend Analysis"
											})]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden md:flex flex-col items-center justify-center py-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-px bg-gradient-to-b from-transparent via-teal to-transparent" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1 flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-7 w-7 items-center justify-center rounded-lg bg-teal text-primary-foreground shadow-md shadow-teal/20",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-sans text-base font-bold text-ink md:text-lg",
										children: "AI-Assisted"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex flex-col gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2.5 rounded-xl border border-teal/30 bg-paper p-2 shadow-sm ring-1 ring-teal/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileInput, { className: "h-3.5 w-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-bold text-ink md:text-base",
												children: "CRA Input"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center py-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 rotate-90 text-teal" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center justify-center gap-1.5 rounded-xl border border-teal/30 bg-gradient-to-br from-teal/10 to-teal/5 p-1.5 shadow-md ring-1 ring-teal/20",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-center gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal text-primary-foreground",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "h-3.5 w-3.5" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-sm font-bold text-ink md:text-base",
													children: "AI Agent"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap items-center justify-center gap-1",
												children: [
													"PD Category",
													"IPD Determination",
													"Trend Analysis"
												].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-md border border-teal/20 bg-paper px-1.5 py-0.5 text-xs font-bold uppercase tracking-wider text-teal md:text-sm",
													children: tag
												}, tag))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex justify-center py-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 rotate-90 text-teal" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-center gap-2.5 rounded-xl border border-teal/30 bg-paper p-2 shadow-sm ring-1 ring-teal/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-teal/10 text-teal",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, { className: "h-3.5 w-3.5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-bold text-ink md:text-base",
												children: "Physician Review"
											})]
										})
									]
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-2xl bg-card p-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex w-full items-start",
						children: timeline.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-base font-semibold uppercase tracking-wider text-ink md:text-lg",
									children: m.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative my-1 flex h-4 w-full items-center justify-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "z-10 h-3 w-3 rounded-full bg-teal ring-4 ring-teal/20" }),
										i < timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 right-0 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" }),
										i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-1/2 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full break-words px-1 text-sm font-medium leading-tight text-ink md:text-base",
									children: m.label
								})
							]
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-2xl border border-hairline bg-card p-3 md:p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-2",
						children: [
							"After one round of optimization, IPD determination accuracy increased from 67.5% to 80.5%, and PD category classification accuracy increased from 94.4% to 97.3%.",
							"AI enhances consistency across different Physicians.",
							"AI pre-screening not only improves Physician review efficiency, but also generates more comprehensive trend analysis and insights, further improving clinical study quality.",
							"Human review-based feedback and manual AI tool tuning during development still consume significant time (87% of total time spent), becoming a bottleneck for AI application development. How can AI learn to improve accuracy by itself?"
						].map((text, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium leading-snug text-ink md:text-base",
								children: text
							})]
						}, i))
					})
				})
			]
		})
	});
}
function SlideDeck({ children }) {
	const scrollerRef = (0, import_react.useRef)(null);
	const getSlides = () => {
		const root = scrollerRef.current;
		if (!root) return [];
		return Array.from(root.querySelectorAll("[data-slide]"));
	};
	const currentIndex = () => {
		const root = scrollerRef.current;
		if (!root) return 0;
		const slides = getSlides();
		const top = root.scrollTop;
		let best = 0;
		let bestDist = Infinity;
		slides.forEach((s, i) => {
			const d = Math.abs(s.offsetTop - top);
			if (d < bestDist) {
				bestDist = d;
				best = i;
			}
		});
		return best;
	};
	const goTo = (i) => {
		if (!scrollerRef.current) return;
		const slides = getSlides();
		slides[Math.max(0, Math.min(slides.length - 1, i))]?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const next = () => goTo(currentIndex() + 1);
	const prev = () => goTo(currentIndex() - 1);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const tag = e.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA") return;
			if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
				e.preventDefault();
				next();
			} else if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") {
				e.preventDefault();
				prev();
			} else if (e.key === "Home") {
				e.preventDefault();
				goTo(0);
			} else if (e.key === "End") {
				e.preventDefault();
				goTo(getSlides().length - 1);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			const a = e.target?.closest("a[href^='#']");
			if (!a) return;
			const id = a.getAttribute("href")?.slice(1);
			if (!id) return;
			const root = scrollerRef.current;
			if (!root) return;
			const slide = root.querySelector(`[data-slide-id="${id}"]`);
			if (slide) {
				e.preventDefault();
				slide.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, []);
	(0, import_react.useEffect)(() => {
		const root = scrollerRef.current;
		if (!root) return;
		let last = "";
		const onScroll = () => {
			const slides = getSlides();
			const top = root.scrollTop + root.clientHeight * .3;
			let currentId = slides[0]?.dataset.slideId ?? "";
			for (const s of slides) if (s.offsetTop <= top) currentId = s.dataset.slideId ?? currentId;
			if (currentId && currentId !== last) {
				last = currentId;
				window.dispatchEvent(new CustomEvent("slidechange", { detail: currentId }));
			}
		};
		onScroll();
		root.addEventListener("scroll", onScroll, { passive: true });
		return () => root.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-screen overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				className: "h-full snap-y snap-mandatory overflow-y-scroll scroll-smooth",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: prev,
				"aria-label": "Previous slide",
				className: "fixed bottom-12 right-24 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-lg transition-colors hover:border-teal hover:text-teal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: next,
				"aria-label": "Next slide",
				className: "fixed bottom-12 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-lg transition-colors hover:border-teal hover:text-teal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
			})
		]
	});
}
function Slide({ id, children, className = "", contentClassName = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-slide": true,
		"data-slide-id": id,
		className: `flex h-screen w-full snap-start snap-always flex-col overflow-hidden ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `flex h-full w-full flex-col justify-start overflow-auto pt-20 ${contentClassName}`,
			children
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen overflow-hidden bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SlideDeck, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "timeline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "new-projects",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewProjectsSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "progress",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "case-study",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudySection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "loop",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "os",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OSSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "scaling",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScalingSection, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slide, {
				id: "opportunities",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpportunitiesSection, {})
			})
		] })]
	});
}
//#endregion
export { Index as component };
