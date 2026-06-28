import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Play, c as Lightbulb, d as CircleCheck, f as ChevronRight, g as Activity, h as ArrowRight, i as RefreshCw, l as FileSearch, m as Calendar, n as Scaling, o as Network, p as ChevronLeft, r as RotateCcw, s as Moon, t as Sun, u as Compass } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gHzSvP2-.js
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
		label: "Multi-Agent OS",
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
		className: "fixed left-0 right-0 top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "flex shrink-0 items-baseline gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-wide text-xl font-normal uppercase text-ink md:text-2xl",
					children: "AI TF Update"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 md:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden flex-wrap items-center justify-end gap-1.5 md:flex",
					children: links.map((l, idx) => {
						const isActive = active === l.id;
						const { Icon } = l;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${l.id}`,
								onClick: () => handleClick(l.id),
								"aria-label": l.label,
								title: l.label,
								className: `relative flex h-11 w-11 items-center justify-center rounded-lg border transition-all ${isActive ? "border-teal bg-teal text-primary-foreground shadow-sm" : "border-hairline bg-card text-ink hover:border-teal hover:text-teal"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5",
									strokeWidth: 2.25
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-hairline bg-ink px-2.5 py-1 text-xs font-semibold text-paper opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100",
								children: l.label
							})]
						}, l.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggleTheme,
					"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
					className: "flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-sm transition-colors hover:border-teal hover:text-teal",
					children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
				})]
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
		className: "flex h-full flex-col bg-paper/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1 flex-col items-center justify-center px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-center text-4xl font-black uppercase tracking-[0.08em] text-ink md:text-5xl lg:text-6xl",
				children: "AI Taskforce Update"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-4 pb-8 md:px-6 md:pb-12",
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
		className: `mb-10 max-w-5xl ${className}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-teal/60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-lg font-semibold uppercase tracking-[0.18em] text-teal md:text-xl",
					children: eyebrow
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
				children: title
			}),
			lede && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-xl leading-relaxed text-ink md:text-2xl",
				children: lede
			})
		]
	});
}
function LoopSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "loop",
		className: "border-t border-hairline bg-paper pt-6 pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					className: "mb-2",
					title: "Loop Engineering for Self-Evolving Agents"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 grid gap-2 sm:grid-cols-2",
					children: [
						{
							title: "Learn",
							desc: "Capture outcomes from every execution to build experiential knowledge"
						},
						{
							title: "Reflect",
							desc: "Enable agents to analyze their own decisions and identify improvement opportunities"
						},
						{
							title: "Adapt",
							desc: "Close the feedback loop so agents automatically refine strategies and expand capabilities"
						},
						{
							title: "Scale",
							desc: "Turn each iteration into a compounding intelligence upgrade across the organization"
						}
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-base text-ink md:text-lg lg:text-xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-ink",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-ink-soft",
								children: [" — ", item.desc]
							})]
						})]
					}, item.title))
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
					className: "grid h-full gap-2 lg:grid-cols-[1fr_1fr] lg:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopDiagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-full flex-col justify-start pt-6",
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
var agents = [
	{
		name: "Competitive Intelligence",
		role: "Pipeline mapping, deal flow, and rival readouts.",
		icon: "CI"
	},
	{
		name: "Target Research",
		role: "Disease biology, target validation, and mechanism mining.",
		icon: "TR"
	},
	{
		name: "Clinical Data Benchmarking",
		role: "Trial outcomes, endpoint comparisons, cohort analytics.",
		icon: "CB"
	},
	{
		name: "Medical Monitoring",
		role: "Safety signals, adverse events, real-world evidence.",
		icon: "MM"
	}
];
function OSSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "os",
		className: "border-t border-hairline bg-card py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Multi-Agent AI OS",
				title: "An operating system that composes specialist agents.",
				lede: "No single agent solves a drug program. The R&D AI OS routes tasks, shares context, and orchestrates specialized agents — turning fragmented tools into one coherent workflow."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OSDiagram, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline md:grid-cols-4",
						children: agents.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-3 flex h-10 w-10 items-center justify-center rounded-md border border-teal/40 font-mono text-sm text-teal",
									children: a.icon
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-base font-semibold text-ink",
									children: a.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-base text-ink",
									children: a.role
								})
							]
						}, a.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-md border border-dashed border-teal/40 bg-paper px-5 py-4 text-sm uppercase tracking-[0.2em] text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-teal",
								children: "Kernel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shared memory" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tool registry" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Task router" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Audit trail" })
						]
					})
				]
			})]
		})
	});
}
function OSDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative w-full overflow-hidden rounded-lg border border-hairline bg-paper p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 800 380",
			className: "h-auto w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
					id: "arrow-os",
					viewBox: "0 0 10 10",
					refX: "8",
					refY: "5",
					markerWidth: "6",
					markerHeight: "6",
					orient: "auto-start-reverse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0,0 L10,5 L0,10 z",
						fill: "currentColor"
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "320",
						y: "150",
						width: "160",
						height: "80",
						rx: "6",
						className: "fill-ink"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "400",
						y: "188",
						textAnchor: "middle",
						className: "font-serif fill-paper",
						fontSize: "26",
						children: "Drug R&D AI OS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "400",
						y: "215",
						textAnchor: "middle",
						fontSize: "12",
						letterSpacing: "3",
						className: "fill-teal-soft",
						children: "KERNEL"
					})
				] }),
				[
					{
						x: 80,
						y: 50,
						label: "Competitive Intelligence",
						tag: "CI"
					},
					{
						x: 560,
						y: 50,
						label: "Target Research",
						tag: "TR"
					},
					{
						x: 80,
						y: 270,
						label: "Clinical Benchmarking",
						tag: "CB"
					},
					{
						x: 560,
						y: 270,
						label: "Medical Monitoring",
						tag: "MM"
					}
				].map((s) => {
					const cx = s.x + 80;
					const cy = s.y + 30;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: cx < 400 ? s.x + 160 : s.x,
							y1: cy,
							x2: cx < 400 ? 320 : 480,
							y2: 190,
							className: "stroke-teal/50 text-teal",
							strokeWidth: "1",
							markerEnd: "url(#arrow-os)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: s.x,
							y: s.y,
							width: "160",
							height: "60",
							rx: "6",
							className: "fill-card stroke-hairline"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							x: s.x + 12,
							y: s.y + 14,
							width: "28",
							height: "28",
							rx: "4",
							fill: "none",
							className: "stroke-teal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: s.x + 26,
							y: s.y + 35,
							textAnchor: "middle",
							fontSize: "12",
							className: "fill-teal",
							fontFamily: "monospace",
							children: s.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: s.x + 50,
							y: s.y + 38,
							fontSize: "15",
							className: "fill-ink",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: s.x + 50,
							y: s.y + 55,
							fontSize: "11",
							letterSpacing: "2",
							className: "fill-ink-soft",
							children: "AGENT"
						})
					] }, s.tag);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "400",
					y: "354",
					textAnchor: "middle",
					fontSize: "12",
					letterSpacing: "3",
					className: "fill-ink-soft",
					children: "SHARED MEMORY · TOOL REGISTRY · TASK ROUTER"
				})
			]
		})
	});
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
		className: "bg-paper py-4",
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
						className: "rounded-full bg-ink px-5 py-1.5 text-sm font-semibold text-paper shadow-sm transition-transform hover:scale-105 active:scale-95 md:text-base",
						children: "Next"
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
function PlaceholderSection({ id, eyebrow, title, lede, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: "border-t border-hairline bg-paper py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow,
				title,
				lede
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex min-h-[280px] items-center justify-center rounded-2xl border border-dashed border-hairline bg-card/40 p-12 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-sm uppercase tracking-[0.3em] text-teal",
					children: "Placeholder"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xl text-ink/70",
					children: note ?? "Content for this section is coming soon."
				})] })
			})]
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
				value: 20
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
			feasibility: true
		}]
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
function ProgressBar({ value = 50, showLabels = false, animate = false, resetting = false }) {
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
			showLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-1 h-12 text-base font-semibold uppercase tracking-wider text-ink/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute text-right leading-none whitespace-nowrap",
					style: {
						left: "80%",
						transform: "translateX(-100%)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Pilot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-normal leading-none text-ink/60",
						children: "Sep"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute text-left leading-none whitespace-nowrap",
					style: { left: "100%" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "MASSIVE USE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-normal leading-none text-ink/60",
						children: "Nov"
					})]
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
function ProjectItem({ project, showLabels, animate, resetting }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-lg leading-none text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: project.name
					}), project.feasibility && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeasibilityBadge, {})] })]
				})]
			}),
			!project.feasibility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ml-[14px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
					value: project.value ?? 50,
					showLabels,
					animate,
					resetting
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
				}), !s.feasibility && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
					value: s.value ?? 50,
					animate,
					resetting
				})] }, s.name))
			})
		]
	});
}
function ProgressSection() {
	const [animate, setAnimate] = (0, import_react.useState)(false);
	const [resetting, setResetting] = (0, import_react.useState)(false);
	const [hasPlayed, setHasPlayed] = (0, import_react.useState)(false);
	let firstShown = false;
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
		className: "border-t border-hairline bg-paper pt-6 pb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
						children: "Current Project Progress"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handlePlay,
						className: "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2",
						children: [hasPlayed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), hasPlayed ? "Replay" : "Play Progress"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 md:grid-cols-3",
					children: streams$1.map((stream) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl border border-hairline p-4 shadow-sm ${stream.color}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal",
							children: stream.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: stream.projects.map((p) => {
								const needsLabels = !firstShown && !p.feasibility;
								if (needsLabels) firstShown = true;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectItem, {
									project: p,
									showLabels: needsLabels,
									animate,
									resetting
								}, p.name);
							})
						})]
					}, stream.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 rounded-2xl border border-hairline bg-bg-panel p-4 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 text-center text-lg font-bold uppercase tracking-[0.12em] text-teal",
						children: "Competitive Intelligence & Scientific Finding Tracking"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-x-5 gap-y-2 md:grid-cols-2",
						children: ciItems$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "py-1",
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
					className: "mt-5 rounded-2xl border border-hairline bg-bg-panel px-4 py-3 text-center shadow-sm",
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
		className: "border-t border-hairline bg-paper pt-6 pb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
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
var metrics = [{
	label: "PD Category Classification Accuracy",
	before: 94.4,
	after: 97.3
}, {
	label: "IPD Determination Accuracy",
	before: 67.5,
	after: 80.5
}];
function CaseStudySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "case-study",
		className: "border-t border-hairline bg-paper py-3 md:py-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-2 md:px-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl font-black leading-[1.05] text-ink md:text-3xl lg:text-4xl",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-hairline bg-card p-2 md:p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-base",
								children: "Project Timeline"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex w-full items-start",
							children: timeline.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col items-center text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-base font-semibold uppercase tracking-wider text-ink md:text-lg",
										children: m.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative my-1.5 flex h-4 w-full items-center justify-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "z-10 h-3 w-3 rounded-full bg-teal ring-4 ring-teal/20" }),
											i < timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 right-0 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" }),
											i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-1/2 top-1/2 h-0 -translate-y-1/2 border-t border-dashed border-ink/30" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-full break-words px-1 text-base font-medium leading-tight text-ink md:text-lg",
										children: m.label
									})
								]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 rounded-xl border-2 border-dashed border-teal bg-paper p-2 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-base font-black uppercase tracking-wider text-ink md:text-lg",
								children: [
									"Human review-based feedback and manual AI tool tuning",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mx-2 text-teal",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-teal",
										children: "87%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-sm font-semibold normal-case tracking-normal text-ink/70 md:text-base",
										children: "of total time spent"
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 rounded-2xl border border-hairline bg-card p-3 md:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-base",
							children: "PD Analysis Workflow"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-stretch gap-3 md:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-lg border border-hairline bg-paper p-1.5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold uppercase tracking-wider text-ink md:text-base",
											children: "CRA Input"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-90 text-ink/40" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-lg border border-hairline bg-paper p-1.5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold uppercase tracking-wider text-ink md:text-base",
											children: "Physician Review"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-90 text-ink/40" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-lg border border-hairline bg-paper p-1.5 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-bold uppercase tracking-wider text-ink md:text-sm",
												children: "PD Classification"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-lg border border-hairline bg-paper p-1.5 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-bold uppercase tracking-wider text-ink md:text-sm",
												children: "IPD Determination"
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-90 text-ink/40" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-lg border border-hairline bg-paper p-1.5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold uppercase tracking-wider text-ink md:text-base",
											children: "Trend Analysis"
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center justify-center gap-1 px-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-6 w-6 rotate-90 text-teal md:rotate-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-center text-xs font-black uppercase tracking-wider text-teal md:text-sm",
									children: "AI Transformation"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col justify-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-lg border border-hairline bg-paper p-1.5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold uppercase tracking-wider text-ink md:text-base",
											children: "CRA Input"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-90 text-teal" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border border-teal/30 bg-teal/5 p-1.5 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold uppercase tracking-wider text-teal md:text-base",
											children: "AI Agent"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-xs font-semibold uppercase tracking-wider text-teal/80 md:text-sm",
											children: "PD CATEGORY · IPD DETERMINATION · TREND ANALYSIS"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-90 text-teal" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "rounded-lg border border-hairline bg-paper p-1.5 text-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold uppercase tracking-wider text-ink md:text-base",
											children: "Physician Review"
										})
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 rounded-2xl border border-hairline bg-card p-2 md:p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-base",
							children: "After One Round of Optimization"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 md:grid-cols-2",
						children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-hairline bg-paper p-2 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-base font-semibold leading-tight text-ink md:text-lg",
								children: m.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 flex items-center justify-between gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-3xl font-bold text-ink/60 md:text-4xl",
											children: [m.before.toFixed(1), "%"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 text-sm uppercase tracking-wider text-ink/50",
											children: "Before"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 text-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm font-bold text-teal",
											children: [
												"+",
												(m.after - m.before).toFixed(1),
												"pp"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-3xl font-bold text-teal md:text-4xl",
											children: [m.after.toFixed(1), "%"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-0.5 flex items-center justify-center gap-1 text-sm uppercase tracking-wider text-teal",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), "After"]
										})]
									})
								]
							})]
						}, m.label))
					})]
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
				className: "fixed bottom-6 right-24 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-lg transition-colors hover:border-teal hover:text-teal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: next,
				"aria-label": "Next slide",
				className: "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-card text-ink shadow-lg transition-colors hover:border-teal hover:text-teal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
			})
		]
	});
}
function Slide({ id, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"data-slide": true,
		"data-slide-id": id,
		className: `flex h-screen w-full snap-start snap-always flex-col overflow-hidden ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full w-full flex-col justify-center overflow-auto pt-16 md:pt-20",
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceholderSection, {
					id: "opportunities-inner",
					eyebrow: "Opportunities",
					title: "Opportunities across the R&D value chain.",
					lede: "Where agentic systems can compound value next — from discovery through translational, clinical, regulatory, and commercial."
				})
			})
		] })]
	});
}
//#endregion
export { Index as component };
