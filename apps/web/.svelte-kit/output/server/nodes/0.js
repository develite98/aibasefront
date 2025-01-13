

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.OdM5VQ-W.js","_app/immutable/chunks/scheduler.isO7ktmj.js","_app/immutable/chunks/index.DNH4qto0.js"];
export const stylesheets = ["_app/immutable/assets/0.fDk_jiKK.css"];
export const fonts = [];
