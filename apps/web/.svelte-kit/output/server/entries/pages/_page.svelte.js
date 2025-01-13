import { s as setContext, c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_object, b as add_attribute, v as validate_component, i as escape_attribute_value, e as escape, n as null_to_empty, d as each } from "../../chunks/ssr.js";
import { I as Icon, S as Search, C as ChevronDown, N as Navbar, F as Footer } from "../../chunks/footer.js";
import "../../chunks/client.js";
import { I as Input } from "../../chunks/input.js";
import { o as omit, e as effect, m as makeElement, s as styleToString, i as isBrowser, B as Button, c as cn } from "../../chunks/index2.js";
import { S as Separator } from "../../chunks/separator.js";
import "clsx";
import { o as overridable } from "../../chunks/overridable.js";
import { w as writable } from "../../chunks/index.js";
import { t as toWritableStores, r as removeUndefined, g as getOptionUpdater } from "../../chunks/updater.js";
import { c as createBitAttrs } from "../../chunks/attrs.js";
const defaults = {
  src: "",
  delayMs: 0,
  onLoadingStatusChange: void 0
};
const createAvatar = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "loadingStatus", "onLoadingStatusChange"));
  const { src, delayMs } = options;
  const loadingStatusWritable = withDefaults.loadingStatus ?? writable("loading");
  const loadingStatus = overridable(loadingStatusWritable, withDefaults?.onLoadingStatusChange);
  effect([src, delayMs], ([$src, $delayMs]) => {
    if (isBrowser) {
      const image2 = new Image();
      image2.src = $src;
      image2.onload = () => {
        if (delayMs !== void 0) {
          const timerId = window.setTimeout(() => {
            loadingStatus.set("loaded");
          }, $delayMs);
          return () => window.clearTimeout(timerId);
        } else {
          loadingStatus.set("loaded");
        }
      };
      image2.onerror = () => {
        loadingStatus.set("error");
      };
    }
  });
  const image = makeElement("avatar-image", {
    stores: [src, loadingStatus],
    returned: ([$src, $loadingStatus]) => {
      const imageStyles = styleToString({
        display: $loadingStatus === "loaded" ? "block" : "none"
      });
      return {
        src: $src,
        style: imageStyles
      };
    }
  });
  const fallback = makeElement("avatar-fallback", {
    stores: [loadingStatus],
    returned: ([$loadingStatus]) => {
      return {
        style: $loadingStatus === "loaded" ? styleToString({
          display: "none"
        }) : void 0,
        hidden: $loadingStatus === "loaded" ? true : void 0
      };
    }
  });
  return {
    elements: {
      image,
      fallback
    },
    states: {
      loadingStatus
    },
    options
  };
};
function getAvatarData() {
  const NAME = "avatar";
  const PARTS = ["root", "image", "fallback"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getAvatarData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const avatar = { ...createAvatar(removeUndefined(props)), getAttrs };
  setContext(NAME, avatar);
  return {
    ...avatar,
    updateOption: getOptionUpdater(avatar.options)
  };
}
const Avatar$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["delayMs", "loadingStatus", "onLoadingStatusChange", "asChild", "el"]);
  let { delayMs = void 0 } = $$props;
  let { loadingStatus = void 0 } = $$props;
  let { onLoadingStatusChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { states: { loadingStatus: localLoadingStatus }, updateOption, getAttrs } = setCtx({
    src: "",
    delayMs,
    onLoadingStatusChange: ({ next }) => {
      loadingStatus = next;
      onLoadingStatusChange?.(next);
      return next;
    }
  });
  const attrs = getAttrs("root");
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0)
    $$bindings.delayMs(delayMs);
  if ($$props.loadingStatus === void 0 && $$bindings.loadingStatus && loadingStatus !== void 0)
    $$bindings.loadingStatus(loadingStatus);
  if ($$props.onLoadingStatusChange === void 0 && $$bindings.onLoadingStatusChange && onLoadingStatusChange !== void 0)
    $$bindings.onLoadingStatusChange(onLoadingStatusChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  loadingStatus !== void 0 && localLoadingStatus.set(loadingStatus);
  {
    updateOption("delayMs", delayMs);
  }
  return `${asChild ? `${slots.default ? slots.default({ attrs }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ attrs }) : ``}</div>`}`;
});
const Bookmark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bookmark" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Bookmark$1 = Bookmark;
const Heart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "heart" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Heart$1 = Heart;
const List_filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M7 12h10" }],
    ["path", { "d": "M10 18h4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "list-filter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ListFilter = List_filter;
const Search_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { search = "" } = $$props;
  let searchVal = "";
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${search !== void 0 ? `<section class="relative mb-12 flex flex-col items-center"> <h1 class="shots-search-hero__heading mb-6 mt-6 w-[480px] text-center text-5xl font-medium" data-svelte-h="svelte-p3ox4z">Discover the world’s top designers</h1> <h2 class="shots-search-hero__subheading mb-6 w-[800px] text-center text-lg font-thin text-[#6e6d7a]" data-svelte-h="svelte-1lcqsky">Explore work from the most talented and accomplished designers ready to take on your next
			project</h2> <form class="flex w-full justify-center px-4 text-center"><div class="flex h-14 w-full max-w-[628px] items-center justify-between rounded-full border border-gray-100 bg-[#f4f5fb] focus-within:outline-none">${validate_component(Input, "Input").$$render(
      $$result,
      {
        placeholder: "What are you looking for...?",
        class: "ml-4 h-8 border-none bg-transparent pl-0 text-base shadow-none placeholder:text-[#9e9ea7] focus-visible:ring-0",
        value: searchVal
      },
      {
        value: ($$value) => {
          searchVal = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "ml-4 mr-2 h-10 min-h-10 w-10 min-w-10 rounded-full !p-0"
      },
      {},
      {
        default: () => {
          return `${validate_component(Search, "Search").$$render(
            $$result,
            {
              strokeWidth: 2.5,
              class: "h-5 w-5 text-[#9e9ea7]"
            },
            {},
            {}
          )}`;
        }
      }
    )}</div></form>  <div class="mt-6 flex items-center gap-2" data-svelte-h="svelte-19v1hcj"><span class="opacity-60 font-thin">Trending searches:</span> <ul class="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap px-[2px]"><li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Web Design</button></li> <li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Discover</button></li> <li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Animation</button></li> <li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Branding</button></li></ul></div></section>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const Filter_nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full flex-col lg:hidden"><div class="flex items-center justify-between">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "mr-10 rounded-[8px] p-[18px] pr-3 shadow-none hover:bg-transparent hover:shadow-sm"
    },
    {},
    {
      default: () => {
        return `Following
			${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "ml-2", size: 14 }, {}, {})}`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "ml-10 rounded-full p-[18px] shadow-none hover:bg-transparent hover:shadow-sm"
    },
    {},
    {
      default: () => {
        return `${validate_component(ListFilter, "ListFilter").$$render($$result, { class: "mr-1", size: 16 }, {}, {})}
			Filters`;
      }
    }
  )}</div> ${validate_component(Separator, "Separator").$$render($$result, { class: "my-4" }, {}, {})}</div> <div class="hidden w-full lg:block"><div class="flex flex-row items-center justify-between">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "mr-10 rounded-[8px] p-[18px] pr-3 shadow-none hover:bg-transparent hover:shadow-sm"
    },
    {},
    {
      default: () => {
        return `Following
			${validate_component(ChevronDown, "ChevronDown").$$render($$result, { class: "ml-2", size: 14 }, {}, {})}`;
      }
    }
  )} <div class="relative overflow-x-auto overflow-y-hidden" data-svelte-h="svelte-wtud3m"> <ul class="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap px-[2px]"><li><button type="button" class="inline-flex h-9 items-center rounded-full bg-[#f8f7f4] px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Web Design</button></li> <li><button type="button" class="-ml-4 inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Discover</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Animation</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Branding</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Illustration</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Typography</button></li></ul></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "hover:bg\n        -transparent ml-10 rounded-full p-[18px] shadow-none hover:shadow-sm"
    },
    {},
    {
      default: () => {
        return `${validate_component(ListFilter, "ListFilter").$$render($$result, { class: "mr-1", size: 16 }, {}, {})}
			Filters`;
      }
    }
  )}</div></div>`;
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("bg-muted animate-pulse rounded-md", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}></div>`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "delayMs"]);
  let { class: className = void 0 } = $$props;
  let { delayMs = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0)
    $$bindings.delayMs(delayMs);
  return `${validate_component(Avatar$1, "AvatarPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { delayMs },
      {
        class: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const css = {
  code: ".bg-card-info.svelte-qasmqr{background:linear-gradient(\n			180deg,\n			transparent 62%,\n			rgba(0, 0, 0, 0.003) 63.94%,\n			rgba(0, 0, 0, 0.014) 65.89%,\n			rgba(0, 0, 0, 0.033) 67.83%,\n			rgba(0, 0, 0, 0.059) 69.78%,\n			rgba(0, 0, 0, 0.093) 71.72%,\n			rgba(0, 0, 0, 0.133) 73.67%,\n			rgba(0, 0, 0, 0.177) 75.61%,\n			rgba(0, 0, 0, 0.223) 77.56%,\n			rgba(0, 0, 0, 0.267) 79.5%,\n			rgba(0, 0, 0, 0.307) 81.44%,\n			rgba(0, 0, 0, 0.341) 83.39%,\n			rgba(0, 0, 0, 0.367) 85.33%,\n			rgba(0, 0, 0, 0.386) 87.28%,\n			rgba(0, 0, 0, 0.397) 89.22%,\n			rgba(0, 0, 0, 0.4) 91.17%\n		)}",
  map: null
};
const Work_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { work } = $$props;
  let { isProfile = false } = $$props;
  let { isMoreWorks = false } = $$props;
  let { isAlsoLikeWorks = false } = $$props;
  let profileData = null;
  let isLoading = true;
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  if ($$props.work === void 0 && $$bindings.work && work !== void 0)
    $$bindings.work(work);
  if ($$props.isProfile === void 0 && $$bindings.isProfile && isProfile !== void 0)
    $$bindings.isProfile(isProfile);
  if ($$props.isMoreWorks === void 0 && $$bindings.isMoreWorks && isMoreWorks !== void 0)
    $$bindings.isMoreWorks(isMoreWorks);
  if ($$props.isAlsoLikeWorks === void 0 && $$bindings.isAlsoLikeWorks && isAlsoLikeWorks !== void 0)
    $$bindings.isAlsoLikeWorks(isAlsoLikeWorks);
  $$result.css.add(css);
  profileData = profileData;
  isLoading = isLoading;
  return `<div class="flex flex-col gap-2"><a${add_attribute("href", `/work/${work.id}`, 0)} class="${escape(
    null_to_empty(`group relative w-full overflow-hidden ${isProfile ? "h-[260px] lg:h-[225px] xl:h-[360px]" : "h-[260px] lg:h-[225px] xl:h-[260px]"} ${isMoreWorks ? "h-[260px] xl:h-[200px]" : ""}`),
    true
  ) + " svelte-qasmqr"}"><img${add_attribute("src", work.image, 0)}${add_attribute("alt", work.title, 0)} class="h-full w-full rounded-lg object-cover contrast-[0.95]"> <div class="bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 svelte-qasmqr"><div class="flex w-full items-center justify-between"><div class="w-1/2 truncate font-medium text-white">${escape(work.title)}</div> <div class="flex justify-end"><div class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white">${validate_component(Bookmark$1, "Bookmark").$$render($$result, { size: 16 }, {}, {})}</div> <div class="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white">${validate_component(Heart$1, "Heart").$$render($$result, { size: 16 }, {}, {})}</div></div></div></div></a> ${!isProfile && !isMoreWorks ? `<div class="flex items-center justify-between">${isLoading ? `<div class="flex w-full items-center justify-start space-x-2">${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "h-6 w-6 rounded-full" }, {}, {})} ${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "h-5 w-1/2" }, {}, {})}</div>` : `${profileData ? `<a${add_attribute("href", `/${profileData.profile.username}`, 0)} class="flex w-full items-center justify-start space-x-2">${validate_component(Avatar, "Avatar").$$render($$result, { class: "h-6 w-6 border" }, {}, {
    default: () => {
      return `${escape(profileData.user.firstName.charAt(0))}${escape(profileData.user.lastName.charAt(0))}`;
    }
  })} <p class="w-1/2 truncate text-sm font-medium">${escape(profileData.user.firstName)} ${escape(profileData.user.lastName)}</p></a>` : ``}`} ${!isAlsoLikeWorks ? `<div class="flex items-center gap-2"><div class="flex items-center space-x-[2px]">${isLoading ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "h-5 w-10" }, {}, {})}` : `${validate_component(Heart$1, "Heart").$$render(
    $$result,
    {
      class: "h-4 w-4 fill-current text-[#9e9ea7]"
    },
    {},
    {}
  )} <p class="text-xs font-medium text-[#3d3d4e]">${escape(randomNumber(300, 50))}</p>`}</div> <div class="flex items-center space-x-[2px]">${isLoading ? `${validate_component(Skeleton, "Skeleton").$$render($$result, { class: "h-5 w-10" }, {}, {})}` : ` <p class="text-xs font-medium text-[#3d3d4e]">${escape(randomNumber(10, 1))}.${escape(randomNumber(9, 1))}k</p>`}</div></div>` : ``}</div>` : ``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      id: "66969dfd865df87988ef2304",
      userId: "user_2jKrWRREPbqBPOX8M6go4wYSIlE",
      title: "l.",
      description: "knlk",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/b099d851-88ca-4826-a72f-0d54a601bef1.JPG",
      liveSiteUrl: "asdkja;sl@gmail.com",
      githubUrl: "https://github.com/salimi-my/shadcn-ui-sidebar",
      category: "Web Design",
      createdAt: "2024-07-16T16:21:17.488Z",
      updatedAt: "2024-07-16T16:21:17.488Z"
    },
    {
      id: "665e2c0c9b9bfd50222aac6b",
      userId: "user_2hK87ZhkFyLd8Lzz0E8hdptmOzJ",
      title: "123",
      description: "123",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/67228baa-22ac-45c2-bcca-6a0abe15ebaf.jpg",
      liveSiteUrl: "123",
      githubUrl: "123",
      category: "Typography",
      createdAt: "2024-06-03T20:48:11.248Z",
      updatedAt: "2024-06-03T20:48:11.248Z"
    },
    {
      id: "664f5df42b61212ab83d96ce",
      userId: "user_2gsDDB3BwbT5LS34CEmZoaGk14A",
      title: "test post",
      description: "dfgdfg",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/1172df19-9cc0-44fe-a7ba-262f5043b9a0.png",
      liveSiteUrl: "dfggdf",
      githubUrl: "dfgdfg",
      category: "Web Design",
      createdAt: "2024-05-23T15:17:06.828Z",
      updatedAt: "2024-05-23T15:17:58.037Z"
    },
    {
      id: "65afbcd088ee2ac67d86f6ec",
      userId: "user_2bMCz9fNHW4UXD04RsbqmgNWnS4",
      title: "messi",
      description: "ashkFNI JN AIPAGN=w0ni",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/f2da6bb8-aa93-48bd-a774-a4d77fee5a9e.jpg",
      liveSiteUrl: "https://temp-mail.org/en/view/65afbc44622db301ca145d08",
      githubUrl: "https://temp-mail.org/en/view/65afbc44622db301ca145d08",
      category: "Web Design",
      createdAt: "2024-01-23T13:19:11.085Z",
      updatedAt: "2024-01-23T13:19:11.085Z"
    },
    {
      id: "658170c6339a3363aead0ae7",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "Web Design Digital",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/9e4b8533-ad93-4952-9966-71ce0cf61ecf.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Web Design",
      createdAt: "2023-12-19T10:30:30.813Z",
      updatedAt: "2023-12-19T10:30:30.813Z"
    },
    {
      id: "658170a7339a3363aead0ae6",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "We Design Modern",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/445fa7ae-0b1c-4d18-9484-3d460536ed49.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Web Design",
      createdAt: "2023-12-19T10:29:59.055Z",
      updatedAt: "2023-12-19T13:27:26.534Z"
    },
    {
      id: "65817087339a3363aead0ae5",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "Technology and Art",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/d5e49a0e-8e25-455b-b13d-90cab9ca6057.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Web Design",
      createdAt: "2023-12-19T10:29:27.300Z",
      updatedAt: "2023-12-19T10:29:27.300Z"
    },
    {
      id: "65817068339a3363aead0ae4",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "Proven Performance",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/8a3259da-e756-4a6e-9e53-42a9006751e1.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Typography",
      createdAt: "2023-12-19T10:28:56.167Z",
      updatedAt: "2023-12-19T10:28:56.167Z"
    },
    {
      id: "6581704d339a3363aead0ae3",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "Problem Solving is Our Choice",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/c49e38d3-a669-4a22-81f6-65b03beefa13.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Product Design",
      createdAt: "2023-12-19T10:28:29.049Z",
      updatedAt: "2023-12-19T10:28:29.049Z"
    },
    {
      id: "6581702e339a3363aead0ae2",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "Pizza Burgers and the Rest",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/9a335d7b-4a36-47b7-bbc2-7e0aca66936b.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Print",
      createdAt: "2023-12-19T10:27:58.346Z",
      updatedAt: "2023-12-19T10:27:58.346Z"
    },
    {
      id: "65817004339a3363aead0ae1",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "Innovation Technology of Space",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/12ea01da-e4b2-4c71-adc6-b5a499780e84.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Mobile",
      createdAt: "2023-12-19T10:27:16.893Z",
      updatedAt: "2023-12-19T10:27:16.893Z"
    },
    {
      id: "65816fd9339a3363aead0ae0",
      userId: "user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",
      title: "Event Agency",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",
      image: "https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/c94719ac-f72c-4ad6-a8ba-10bf917d5892.jpg",
      liveSiteUrl: "https://www.salimi.my",
      githubUrl: "https://github.com/salimi-my",
      category: "Illustration",
      createdAt: "2023-12-19T10:26:33.167Z",
      updatedAt: "2023-12-19T10:26:33.167Z"
    }
  ];
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="min-h-[calc(100vh-100px-428.44px)] md:min-h-[calc(100vh-100px-332.44px)] lg:min-h-[calc(100vh-100px-254.44px)]">${validate_component(Search_header, "SearchHeader").$$render($$result, { search: "" }, {}, {})} <section class="flex flex-col items-center justify-start px-5 py-6 lg:px-20">${validate_component(Filter_nav, "FilterNav").$$render($$result, {}, {}, {})} <section${add_attribute("class", "grid w-full gap-9 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:pt-8 xl:grid-cols-4 xl:gap-12", 0)}>${each(data, (work) => {
    return `${validate_component(Work_card, "WorkCard").$$render($$result, { work, isProfile: false }, {}, {})}`;
  })}</section></section></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
