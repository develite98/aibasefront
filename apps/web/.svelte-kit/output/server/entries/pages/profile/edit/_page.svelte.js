import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { S as Separator } from "../../../../chunks/separator.js";
import { P as Profile_form } from "../../../../chunks/profile-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="space-y-6"><div data-svelte-h="svelte-ex3oz5"><h3 class="text-lg font-medium">Profile</h3> <p class="text-muted-foreground text-sm">This is how others will see you on the site.</p></div> ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} ${validate_component(Profile_form, "ProfileForm").$$render($$result, { data: data.form }, {}, {})}</div>`;
});
export {
  Page as default
};
