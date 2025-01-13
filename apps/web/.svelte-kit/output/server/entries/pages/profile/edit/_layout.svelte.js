import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { S as Separator } from "../../../../chunks/separator.js";
import { c as cn, B as Button } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
const Sidebar_nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { class: className = void 0 } = $$props;
  let { items } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$unsubscribe_page();
  return `<nav${add_attribute("class", cn("flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className), 0)}>${each(items, (item) => {
    let isActive = $page.url.pathname === item.href;
    return ` ${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: item.href,
        variant: "ghost",
        class: cn(!isActive && "hover:underline", "relative justify-start hover:bg-transparent"),
        "data-sveltekit-noscroll": true
      },
      {},
      {
        default: () => {
          return `${isActive ? `<div class="bg-muted absolute inset-0 rounded-md"></div>` : ``} <div class="relative">${escape(item.title)}</div> `;
        }
      }
    )}`;
  })}</nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const sidebarNavItems = [
    {
      title: "Profile",
      href: "/examples/forms"
    },
    {
      title: "Account",
      href: "/examples/forms/account"
    },
    {
      title: "Appearance",
      href: "/examples/forms/appearance"
    },
    {
      title: "Notifications",
      href: "/examples/forms/notifications"
    },
    {
      title: "Display",
      href: "/examples/forms/display"
    }
  ];
  return `<div class="hidden space-y-6 p-10 pb-16 md:block"><div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 container" data-svelte-h="svelte-1sqoe6o"><div><h2 class="text-2xl font-bold tracking-tight">Edit profile</h2> <p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p></div></div> ${validate_component(Separator, "Separator").$$render($$result, { class: "my-6" }, {}, {})} <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 container"><aside class="-mx-4 lg:w-1/5">${validate_component(Sidebar_nav, "SidebarNav").$$render($$result, { items: sidebarNavItems }, {}, {})}</aside> <div class="flex-1 lg:max-w-2xl">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
export {
  Layout as default
};
