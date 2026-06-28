globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@1.21.7_vite@8.1.0_@types+node@22.20.0_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/archivo-black-latin-400-normal-BTVu2TQR.woff2": {
		"type": "font/woff2",
		"etag": "\"48ac-H5ZXCWBriIMIJsRe8OvP40hKpnQ\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 18604,
		"path": "../public/assets/archivo-black-latin-400-normal-BTVu2TQR.woff2"
	},
	"/assets/archivo-black-latin-ext-400-normal--j5WRK12.woff": {
		"type": "font/woff",
		"etag": "\"2250-gnbc1SpzV3QFubFWT8WLAjxfVx0\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 8784,
		"path": "../public/assets/archivo-black-latin-ext-400-normal--j5WRK12.woff"
	},
	"/assets/archivo-black-latin-ext-400-normal-DQAASfvW.woff2": {
		"type": "font/woff2",
		"etag": "\"37fc-5h0NR4J91hisutwRUtFkfIRFp+E\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 14332,
		"path": "../public/assets/archivo-black-latin-ext-400-normal-DQAASfvW.woff2"
	},
	"/assets/instrument-serif-latin-400-normal-BVbkICAY.woff": {
		"type": "font/woff",
		"etag": "\"47a0-gcJEnb/LGDx7nrn1aTtY+BOLQ1g\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 18336,
		"path": "../public/assets/instrument-serif-latin-400-normal-BVbkICAY.woff"
	},
	"/assets/archivo-black-latin-400-normal-HW9MwEcM.woff": {
		"type": "font/woff",
		"etag": "\"32cc-mZZnG6uOfowDpOpSccuVodViKDY\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 13004,
		"path": "../public/assets/archivo-black-latin-400-normal-HW9MwEcM.woff"
	},
	"/assets/instrument-serif-latin-ext-400-normal-C2je3j2s.woff2": {
		"type": "font/woff2",
		"etag": "\"2d54-Xxeo3XdJ6FXAXKOtGGF7XZRcIkc\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 11604,
		"path": "../public/assets/instrument-serif-latin-ext-400-normal-C2je3j2s.woff2"
	},
	"/assets/instrument-serif-latin-400-normal-DnYpCC2O.woff2": {
		"type": "font/woff2",
		"etag": "\"5228-N930ZbvMJSd2o33PKBeaPKWQNjs\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 21032,
		"path": "../public/assets/instrument-serif-latin-400-normal-DnYpCC2O.woff2"
	},
	"/assets/instrument-serif-latin-ext-400-normal-CFCUzsTy.woff": {
		"type": "font/woff",
		"etag": "\"2684-nZJW+YO/vzj1q9uH0WKXTf424gc\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 9860,
		"path": "../public/assets/instrument-serif-latin-ext-400-normal-CFCUzsTy.woff"
	},
	"/assets/index-Z23oZgUn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"540cc-w4AZXdrnH+aW1sk17p2pnLDrlnE\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 344268,
		"path": "../public/assets/index-Z23oZgUn.js"
	},
	"/assets/routes-BiNZXRKI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29d37-XkXyWk5yG3hjS0WlZFz3YRc+pho\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 171319,
		"path": "../public/assets/routes-BiNZXRKI.js"
	},
	"/assets/work-sans-latin-300-normal-BaDF4XPg.woff": {
		"type": "font/woff",
		"etag": "\"65dc-TsbTI8FQZ+rETw7LqxRrlLvolas\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 26076,
		"path": "../public/assets/work-sans-latin-300-normal-BaDF4XPg.woff"
	},
	"/assets/styles-5l6WSfGs.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16cfa-2N9FwFQw/MfKCEvLSTgQoAMe8MU\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 93434,
		"path": "../public/assets/styles-5l6WSfGs.css"
	},
	"/assets/work-sans-latin-300-normal-DD7pq2q9.woff2": {
		"type": "font/woff2",
		"etag": "\"5088-fFrRGchqnD0TdiTEUaAUQmR4U1M\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 20616,
		"path": "../public/assets/work-sans-latin-300-normal-DD7pq2q9.woff2"
	},
	"/assets/work-sans-latin-400-normal-DE1_0GuN.woff": {
		"type": "font/woff",
		"etag": "\"6298-wPQtMuxIVfetbKvDdqbo4T8ExkQ\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 25240,
		"path": "../public/assets/work-sans-latin-400-normal-DE1_0GuN.woff"
	},
	"/assets/work-sans-latin-400-normal-jUejSri3.woff2": {
		"type": "font/woff2",
		"etag": "\"4dbc-oGYNFLbIEy14UKJz7VGUFdlGZhc\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 19900,
		"path": "../public/assets/work-sans-latin-400-normal-jUejSri3.woff2"
	},
	"/assets/work-sans-latin-500-normal-BKGnScDy.woff2": {
		"type": "font/woff2",
		"etag": "\"5168-MCwyxcgFvsMy/i1YM06/heZKHVU\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 20840,
		"path": "../public/assets/work-sans-latin-500-normal-BKGnScDy.woff2"
	},
	"/assets/work-sans-latin-500-normal-BmdXWF6_.woff": {
		"type": "font/woff",
		"etag": "\"663c-lyMPBIN9I+0cz/0FRwBpP+jL2DM\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 26172,
		"path": "../public/assets/work-sans-latin-500-normal-BmdXWF6_.woff"
	},
	"/assets/work-sans-latin-600-normal-Cg-NlmS7.woff": {
		"type": "font/woff",
		"etag": "\"66c8-iznrafXJtxyfZJhSKZPQ8I9LDFg\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 26312,
		"path": "../public/assets/work-sans-latin-600-normal-Cg-NlmS7.woff"
	},
	"/assets/work-sans-latin-ext-300-normal-BQO3H0qq.woff": {
		"type": "font/woff",
		"etag": "\"5418-RYA1uZAkkm+HEskyPVNbWh4DzSI\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 21528,
		"path": "../public/assets/work-sans-latin-ext-300-normal-BQO3H0qq.woff"
	},
	"/assets/work-sans-latin-600-normal-DB-2V89X.woff2": {
		"type": "font/woff2",
		"etag": "\"51f8-9InARfoMMLFkKwlgn9tcX2tlu1U\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 20984,
		"path": "../public/assets/work-sans-latin-600-normal-DB-2V89X.woff2"
	},
	"/assets/work-sans-latin-ext-300-normal-CVclhcFk.woff2": {
		"type": "font/woff2",
		"etag": "\"3d28-Bqi6xYg9tgIlVHvc/FaG/vDimfU\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 15656,
		"path": "../public/assets/work-sans-latin-ext-300-normal-CVclhcFk.woff2"
	},
	"/assets/work-sans-latin-ext-400-normal-j7TZlk-s.woff": {
		"type": "font/woff",
		"etag": "\"527c-dSCYROuMNQCbjwVrOF20UIunDgA\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 21116,
		"path": "../public/assets/work-sans-latin-ext-400-normal-j7TZlk-s.woff"
	},
	"/assets/work-sans-latin-ext-400-normal-zfQnhXzv.woff2": {
		"type": "font/woff2",
		"etag": "\"3bc0-FLgeGaDvS7jz8YM7NkdXN5nY1bg\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 15296,
		"path": "../public/assets/work-sans-latin-ext-400-normal-zfQnhXzv.woff2"
	},
	"/assets/work-sans-latin-ext-500-normal-CAKEIVkc.woff2": {
		"type": "font/woff2",
		"etag": "\"3e84-vTQtbjAGW/+YJHix34+8RGOrBpQ\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 16004,
		"path": "../public/assets/work-sans-latin-ext-500-normal-CAKEIVkc.woff2"
	},
	"/assets/work-sans-latin-ext-500-normal-CW9ss9Cz.woff": {
		"type": "font/woff",
		"etag": "\"5550-p4KyEVFGsGUdrc2Tc7ugtUiq8Pw\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 21840,
		"path": "../public/assets/work-sans-latin-ext-500-normal-CW9ss9Cz.woff"
	},
	"/assets/work-sans-latin-ext-600-normal-B1NFRnx8.woff": {
		"type": "font/woff",
		"etag": "\"55ec-Dxa4YPjbzJ6/ebeZ1qVKLPAC5dA\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 21996,
		"path": "../public/assets/work-sans-latin-ext-600-normal-B1NFRnx8.woff"
	},
	"/assets/work-sans-latin-ext-600-normal-DNiHHggD.woff2": {
		"type": "font/woff2",
		"etag": "\"3f34-Am7/gTtZrJMJKcDoXVwq4c3rkLo\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 16180,
		"path": "../public/assets/work-sans-latin-ext-600-normal-DNiHHggD.woff2"
	},
	"/assets/work-sans-vietnamese-300-normal-DQHlWx2s.woff2": {
		"type": "font/woff2",
		"etag": "\"1438-eSxdlUj9UXiEllfEwM0Ov2neOXY\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 5176,
		"path": "../public/assets/work-sans-vietnamese-300-normal-DQHlWx2s.woff2"
	},
	"/assets/work-sans-vietnamese-300-normal-NLNV1oy7.woff": {
		"type": "font/woff",
		"etag": "\"1c38-/jBXYb0LzuqZWVL4OoZZB7KLoxc\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 7224,
		"path": "../public/assets/work-sans-vietnamese-300-normal-NLNV1oy7.woff"
	},
	"/assets/work-sans-vietnamese-400-normal-BxGuknnG.woff2": {
		"type": "font/woff2",
		"etag": "\"139c-ewULrwnTIJ7fvn0vIrJoJr1qm7s\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 5020,
		"path": "../public/assets/work-sans-vietnamese-400-normal-BxGuknnG.woff2"
	},
	"/assets/work-sans-vietnamese-400-normal-DFZk_KN_.woff": {
		"type": "font/woff",
		"etag": "\"1bb0-BKO4CC6CovUVu/SH2gep0iduceA\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 7088,
		"path": "../public/assets/work-sans-vietnamese-400-normal-DFZk_KN_.woff"
	},
	"/assets/work-sans-vietnamese-500-normal-90nhZfxs.woff": {
		"type": "font/woff",
		"etag": "\"1d80-E8fGtAB/aaiGZ3VUjfVCUcTOXQ4\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 7552,
		"path": "../public/assets/work-sans-vietnamese-500-normal-90nhZfxs.woff"
	},
	"/assets/work-sans-vietnamese-500-normal-Czn2Xkog.woff2": {
		"type": "font/woff2",
		"etag": "\"1500-mWgHkRFvbOZIr3x/eBeGLMeBVGo\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 5376,
		"path": "../public/assets/work-sans-vietnamese-500-normal-Czn2Xkog.woff2"
	},
	"/assets/work-sans-vietnamese-600-normal-DizFELYt.woff2": {
		"type": "font/woff2",
		"etag": "\"14f0-v4KCMbq6bPGIBShELOioztmRnYw\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 5360,
		"path": "../public/assets/work-sans-vietnamese-600-normal-DizFELYt.woff2"
	},
	"/assets/work-sans-vietnamese-600-normal-ue5fzGW6.woff": {
		"type": "font/woff",
		"etag": "\"1d70-oY0AeC7+fxH0EWNAOEk2v4suJQc\"",
		"mtime": "2026-06-28T16:19:47.781Z",
		"size": 7536,
		"path": "../public/assets/work-sans-vietnamese-600-normal-ue5fzGW6.woff"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@1.21.7_vite@8.1.0_@types+node@22.20.0_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_83Z3jw = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_83Z3jw
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@1.21.7_vite@8.1.0_@types+node@22.20.0_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@1.21.7_vite@8.1.0_@types+node@22.20.0_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@1.21.7_vite@8.1.0_@types+node@22.20.0_jiti@1.21.7_/node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/.pnpm/nitro@3.0.260603-beta_chokidar@5.0.0_jiti@1.21.7_vite@8.1.0_@types+node@22.20.0_jiti@1.21.7_/node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
