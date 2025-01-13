import { c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_object, i as escape_attribute_value, d as each, v as validate_component, b as add_attribute, e as escape } from "./ssr.js";
import { C as is_void, B as Button } from "./index2.js";
import { I as Input } from "./input.js";
/**
 * @license lucide-svelte v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const defaultAttributes$1 = defaultAttributes;
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0)
    $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0)
    $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes$1),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Icon$1 = Icon;
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ChevronDown = Chevron_down;
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  return `${validate_component(Icon$1, "Icon").$$render($$result, Object.assign({}, { name: "search" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Search$1 = Search;
const Search_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form><div class="hidden h-12 items-center justify-between rounded-full bg-[#f4f5fb] focus-within:outline-none focus-within:ring-0 xl:flex px-4">${validate_component(Search$1, "Search").$$render(
    $$result,
    {
      className: "h-5 w-5 ms-5 me-2 text-muted-foreground"
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      placeholder: "Search...",
      class: "ms-4 !outline-none h-8 !bg-transparent border-none pl-0 shadow-none"
    },
    {},
    {}
  )}</div></form> ${validate_component(Search$1, "Search").$$render($$result, { className: "h-[22px] w-[22px] xl:hidden" }, {}, {})}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const NavLinks = [
    {
      href: "/",
      key: "Find talent",
      text: "Find talent"
    },
    {
      href: "/",
      key: "Inspiration",
      text: "Inspiration"
    },
    {
      href: "/",
      key: "Learn design",
      text: "Learn design"
    },
    { href: "/", key: "Jobs", text: "Jobs" },
    { href: "/", key: "Go Pro", text: "Go Pro" }
  ];
  return `<nav class="flex justify-between items-center mid-xl:grid mid-xl:grid-cols-[1fr_96px_1fr] h-[100px] border-nav-border px-6 lg:px-10"><div class="flex-1 flex justify-start items-center gap-1 xl:gap-10"> <a href="/" class="mid-xl:hidden mr-8" data-svelte-h="svelte-kxd9ft"><img src="/logo.svg" alt="logo" class="w-24 h-[38px]" width="96" height="38"></a> <ul class="hidden lg:flex text-sm font-semibold gap-8">${each(NavLinks, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="flex items-center hover:opacity-80">${escape(link.text)} ${link.text === "Learn design" ? `${validate_component(ChevronDown, "ChevronDownIcon").$$render($$result, { class: "ml-1" }, {}, {})}` : ``}</a> </li>`;
  })}</ul></div>  <div class="flex justify-end items-center"> <div class="flex justify-end items-center gap-6">${validate_component(Search_input, "SearchInput").$$render($$result, {}, {}, {})} <a href="/sign-in" class="hidden lg:flex font-semibold text-sm hover:opacity-80" data-svelte-h="svelte-5845ob">Log in</a> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "rounded-full h-12 px-6 font-semibold hover:opacity-80",
      href: "/sign-up"
    },
    {},
    {
      default: () => {
        return `Sign up`;
      }
    }
  )}</div> </div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const footerLinks = [
    {
      href: "/",
      key: "For designers",
      text: "For designers"
    },
    {
      href: "/",
      key: "Hire talent",
      text: "Hire talent"
    },
    {
      href: "/",
      key: "Inspiration",
      text: "Inspiration"
    },
    {
      href: "/",
      key: "Advertising",
      text: "Advertising"
    },
    { href: "/", key: "Blog", text: "Blog" },
    { href: "/", key: "About", text: "About" },
    {
      href: "/",
      key: "Careers",
      text: "Careers"
    },
    {
      href: "/",
      key: "Support",
      text: "Support"
    }
  ];
  return `<footer class="max-w-[1200px] mx-auto box-content px-8"><div class="flex flex-col lg:flex-row justify-between items-center pt-[72px] pb-11 gap-5 lg:gap-0"><a href="/" data-svelte-h="svelte-pas67h"><img src="logo.svg" alt="logo" class="w-[104px] h-[30px]" width="104" height="30"></a> <ul class="flex flex-wrap justify-center text-sm font-semibold gap-x-3 gap-y-4 xl:gap-8">${each(footerLinks, (link) => {
    return `<li><a${add_attribute("href", link.href, 0)} class="flex items-center hover:opacity-80">${escape(link.text)}</a> </li>`;
  })}</ul> <div class="grid grid-flow-col gap-4" data-svelte-h="svelte-1haqu4q"><a href="/"><img src="/twitter.svg" alt="twitter logo" width="18" height="18"></a> <a href="/"><img src="/facebook.svg" alt="facebook logo" width="18" height="18"></a> <a href="/"><img src="/instagram.svg" alt="instagram logo" width="18" height="18"></a> <a href="/"><img src="/pinterest.svg" alt="pinterest logo" width="18" height="18"></a></div></div> <div class="flex flex-col md:flex-row py-11 items-center justify-between text-sm leading-5 text-muted-foreground gap-y-4"><ul class="flex flex-wrap justify-center text-sm gap-x-4 gap-y-1 xl:gap-8"><li>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Bribbble. Created by${escape(" ")} <a href="/" target="_blank" rel="noopener noreferrer" class="font-medium hover:underline underline-offset-4" data-svelte-h="svelte-1rznhpa">Salimi</a>
          .</li></ul> <ul class="flex flex-wrap justify-center text-sm gap-x-4 gap-y-1 xl:gap-8" data-svelte-h="svelte-1k9yoc8"><li><a href="/">Jobs</a></li> <li><a href="/">Designer</a></li> <li><a href="/">Freelancers</a></li> <li><a href="/">Tags</a></li> <li><a href="/">Places</a></li> <li><a href="/">Resources</a></li></ul></div></footer>`;
});
export {
  ChevronDown as C,
  Footer as F,
  Icon$1 as I,
  Navbar as N,
  Search$1 as S
};
