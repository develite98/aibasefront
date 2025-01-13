import { c as create_ssr_component, f as compute_rest_props, g as spread, i as escape_attribute_value, h as escape_object, v as validate_component } from "../../../chunks/ssr.js";
import { c as cn, B as Button } from "../../../chunks/index2.js";
import { I as Input } from "../../../chunks/input.js";
import { L as Label } from "../../../chunks/label.js";
const User_auth_form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  let isLoading = false;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("grid gap-6", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><form><div class="grid gap-2"><div class="grid gap-1">${validate_component(Label, "Label").$$render($$result, { class: "sr-only", for: "email" }, {}, {
    default: () => {
      return `Email`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "email",
      placeholder: "name@example.com",
      type: "email",
      autocapitalize: "none",
      autocomplete: "email",
      autocorrect: "off",
      disabled: isLoading
    },
    {},
    {}
  )}</div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", disabled: isLoading }, {}, {
    default: () => {
      return `Sign In with Email`;
    }
  })}</div></form> <div class="relative" data-svelte-h="svelte-13l0kea"><div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div> <div class="relative flex justify-center text-xs uppercase"><span class="bg-background text-muted-foreground px-2">Or continue with</span></div></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      type: "button",
      disabled: isLoading
    },
    {},
    {
      default: () => {
        return `Google`;
      }
    }
  )}</div>`;
});
const css = {
  code: ".page.svelte-1xnlaf{height:100vh}.left-container.svelte-1xnlaf{width:400px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex items-stretch page overflow-hidden svelte-1xnlaf"><section class="relative hidden left-container h-full grow-0 text-white lg:flex svelte-1xnlaf" data-svelte-h="svelte-2a8iwf"><div class="flex h-full flex-col justify-between"><video playsinline class="h-full w-full object-cover" autoplay loop muted src="sign-in.mp4"></video></div></section> <section class="flex w-full flex-1 flex-col justify-center overflow-auto"><main class="flex h-full w-full grow items-center justify-center xl:justify-start"><div class="xl:ml-28 w-[380px]"><div class="flex flex-col space-y-2 text-center mb-8" data-svelte-h="svelte-13e3b6d"><h1 class="text-2xl font-semibold tracking-tight">Sign-in</h1> <p class="text-muted-foreground text-sm">Enter your email below</p></div> ${validate_component(User_auth_form, "UserAuthForm").$$render($$result, {}, {}, {})}</div></main></section> </div>`;
});
export {
  Page as default
};
