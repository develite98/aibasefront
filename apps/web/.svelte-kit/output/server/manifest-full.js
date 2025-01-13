export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["facebook.svg","favicon.png","img1.webp","instagram.svg","logo.svg","pinterest.svg","sign-in.mp4","sign-up.mp4","twitter.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".webp":"image/webp",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.-JDVOqCI.js","app":"_app/immutable/entry/app.yyofUigR.js","imports":["_app/immutable/entry/start.-JDVOqCI.js","_app/immutable/chunks/entry.KWHgxGMw.js","_app/immutable/chunks/scheduler.isO7ktmj.js","_app/immutable/chunks/index.nz4QhWKj.js","_app/immutable/entry/app.yyofUigR.js","_app/immutable/chunks/scheduler.isO7ktmj.js","_app/immutable/chunks/index.DNH4qto0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/profile/edit",
				pattern: /^\/profile\/edit\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/sign-in",
				pattern: /^\/sign-in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sign-up",
				pattern: /^\/sign-up\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/work/[id]",
				pattern: /^\/work\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
