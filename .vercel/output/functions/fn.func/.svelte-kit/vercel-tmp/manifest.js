export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["asserts/particlesjs.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.3GmoS5Lk.js","app":"_app/immutable/entry/app.DOCED2Xw.js","imports":["_app/immutable/entry/start.3GmoS5Lk.js","_app/immutable/chunks/entry.BZ4J-sBx.js","_app/immutable/chunks/scheduler.B2F6oQEs.js","_app/immutable/entry/app.DOCED2Xw.js","_app/immutable/chunks/scheduler.B2F6oQEs.js","_app/immutable/chunks/index.BCD-owaQ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
