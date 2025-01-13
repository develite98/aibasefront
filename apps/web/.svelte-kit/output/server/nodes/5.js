

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.rDlu_RNi.js","_app/immutable/chunks/scheduler.isO7ktmj.js","_app/immutable/chunks/index.DNH4qto0.js"];
export const stylesheets = [];
export const fonts = [];
