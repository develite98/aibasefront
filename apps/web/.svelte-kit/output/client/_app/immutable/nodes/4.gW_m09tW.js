import{a6 as Ze,s as O,F as ue,i as F,f as _,z as G,r as U,A as J,J as Te,l as Y,e as S,c as A,b as q,v as ce,u as K,m as ee,o as te,a as Z,p as oe,g as C,q as k,h as $,x as Ce,E as je,a7 as Le,n as V,t as W,d as P,a8 as ve,a9 as $e,j as le,H as Ue,M as Ve}from"../chunks/scheduler.isO7ktmj.js";import{S as B,i as X,g as R,b as v,e as H,t as g,c as M,a as N,m as E,d as T,j as We}from"../chunks/index.DNH4qto0.js";import{e as we}from"../chunks/each.6w4Ej4nR.js";import{I as pe,S as Pe,C as ze,N as Qe,F as Oe}from"../chunks/footer._YlMEtjy.js";import{g as ke}from"../chunks/entry.KWHgxGMw.js";import{I as Be}from"../chunks/input.oIvj78uX.js";import{o as Xe,e as Je,i as Re,m as ye,s as xe,g as se,b as me,B as ie,c as fe}from"../chunks/index.7vDbNk0R.js";import{t as He,r as Ge,g as Ye,S as Ke}from"../chunks/separator.f7my2XPD.js";import{o as et}from"../chunks/overridable.vsY668_l.js";import{w as tt}from"../chunks/index.nz4QhWKj.js";import{c as st}from"../chunks/attrs.eMTO7eLH.js";const it={src:"",delayMs:0,onLoadingStatusChange:void 0},lt=n=>{const e={...it,...n},i=He(Xe(e,"loadingStatus","onLoadingStatusChange")),{src:t,delayMs:s}=i,l=e.loadingStatus??tt("loading"),r=et(l,e==null?void 0:e.onLoadingStatusChange);Je([t,s],([u,c])=>{if(Re){const p=new Image;p.src=u,p.onload=()=>{if(s!==void 0){const w=window.setTimeout(()=>{r.set("loaded")},c);return()=>window.clearTimeout(w)}else r.set("loaded")},p.onerror=()=>{r.set("error")}}});const a=ye("avatar-image",{stores:[t,r],returned:([u,c])=>{const p=xe({display:c==="loaded"?"block":"none"});return{src:u,style:p}}}),o=ye("avatar-fallback",{stores:[r],returned:([u])=>({style:u==="loaded"?xe({display:"none"}):void 0,hidden:u==="loaded"?!0:void 0})});return{elements:{image:a,fallback:o},states:{loadingStatus:r},options:i}};function nt(){return{NAME:"avatar",PARTS:["root","image","fallback"]}}function rt(n){const{NAME:e,PARTS:i}=nt(),t=st(e,i),s={...lt(Ge(n)),getAttrs:t};return Ze(e,s),{...s,updateOption:Ye(s.options)}}const at=n=>({}),Ie=n=>({attrs:n[2]}),ot=n=>({}),Se=n=>({attrs:n[2]});function ut(n){let e,i;const t=n[8].default,s=Y(t,n,n[7],Ie);let l=[n[3],n[2]],r={};for(let a=0;a<l.length;a+=1)r=U(r,l[a]);return{c(){e=S("div"),s&&s.c(),this.h()},l(a){e=A(a,"DIV",{});var o=q(e);s&&s.l(o),o.forEach(_),this.h()},h(){ce(e,r)},m(a,o){F(a,e,o),s&&s.m(e,null),n[9](e),i=!0},p(a,o){s&&s.p&&(!i||o&128)&&K(s,t,a,a[7],i?te(t,a[7],o,at):ee(a[7]),Ie),ce(e,r=se(l,[o&8&&a[3],a[2]]))},i(a){i||(g(s,a),i=!0)},o(a){v(s,a),i=!1},d(a){a&&_(e),s&&s.d(a),n[9](null)}}}function ct(n){let e;const i=n[8].default,t=Y(i,n,n[7],Se);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&128)&&K(t,i,s,s[7],e?te(i,s[7],l,ot):ee(s[7]),Se)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function ft(n){let e,i,t,s;const l=[ct,ut],r=[];function a(o,u){return o[1]?0:1}return e=a(n),i=r[e]=l[e](n),{c(){i.c(),t=ue()},l(o){i.l(o),t=ue()},m(o,u){r[e].m(o,u),F(o,t,u),s=!0},p(o,[u]){let c=e;e=a(o),e===c?r[e].p(o,u):(R(),v(r[c],1,1,()=>{r[c]=null}),H(),i=r[e],i?i.p(o,u):(i=r[e]=l[e](o),i.c()),g(i,1),i.m(t.parentNode,t))},i(o){s||(g(i),s=!0)},o(o){v(i),s=!1},d(o){o&&_(t),r[e].d(o)}}}function dt(n,e,i){const t=["delayMs","loadingStatus","onLoadingStatusChange","asChild","el"];let s=G(e,t),{$$slots:l={},$$scope:r}=e,{delayMs:a=void 0}=e,{loadingStatus:o=void 0}=e,{onLoadingStatusChange:u=void 0}=e,{asChild:c=!1}=e,{el:p=void 0}=e;const{states:{loadingStatus:w},updateOption:b,getAttrs:h}=rt({src:"",delayMs:a,onLoadingStatusChange:({next:d})=>(i(4,o=d),u==null||u(d),d)}),D=h("root");function f(d){Te[d?"unshift":"push"](()=>{p=d,i(0,p)})}return n.$$set=d=>{e=U(U({},e),J(d)),i(3,s=G(e,t)),"delayMs"in d&&i(5,a=d.delayMs),"loadingStatus"in d&&i(4,o=d.loadingStatus),"onLoadingStatusChange"in d&&i(6,u=d.onLoadingStatusChange),"asChild"in d&&i(1,c=d.asChild),"el"in d&&i(0,p=d.el),"$$scope"in d&&i(7,r=d.$$scope)},n.$$.update=()=>{n.$$.dirty&16&&o!==void 0&&w.set(o),n.$$.dirty&32&&b("delayMs",a)},[p,c,D,s,o,a,u,r,l,f]}let mt=class extends B{constructor(e){super(),X(this,e,dt,ft,O,{delayMs:5,loadingStatus:4,onLoadingStatusChange:6,asChild:1,el:0})}};function pt(n){let e;const i=n[2].default,t=Y(i,n,n[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&8)&&K(t,i,s,s[3],e?te(i,s[3],l,null):ee(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function ht(n){let e,i;const t=[{name:"bookmark"},n[1],{iconNode:n[0]}];let s={$$slots:{default:[pt]},$$scope:{ctx:n}};for(let l=0;l<t.length;l+=1)s=U(s,t[l]);return e=new pe({props:s}),{c(){M(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,r){E(e,l,r),i=!0},p(l,[r]){const a=r&3?se(t,[t[0],r&2&&me(l[1]),r&1&&{iconNode:l[0]}]):{};r&8&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){i||(g(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){T(e,l)}}}function gt(n,e,i){let{$$slots:t={},$$scope:s}=e;const l=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]];return n.$$set=r=>{i(1,e=U(U({},e),J(r))),"$$scope"in r&&i(3,s=r.$$scope)},e=J(e),[l,e,t,s]}class _t extends B{constructor(e){super(),X(this,e,gt,ht,O,{})}}const bt=_t;function vt(n){let e;const i=n[2].default,t=Y(i,n,n[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&8)&&K(t,i,s,s[3],e?te(i,s[3],l,null):ee(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function $t(n){let e,i;const t=[{name:"heart"},n[1],{iconNode:n[0]}];let s={$$slots:{default:[vt]},$$scope:{ctx:n}};for(let l=0;l<t.length;l+=1)s=U(s,t[l]);return e=new pe({props:s}),{c(){M(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,r){E(e,l,r),i=!0},p(l,[r]){const a=r&3?se(t,[t[0],r&2&&me(l[1]),r&1&&{iconNode:l[0]}]):{};r&8&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){i||(g(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){T(e,l)}}}function wt(n,e,i){let{$$slots:t={},$$scope:s}=e;const l=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];return n.$$set=r=>{i(1,e=U(U({},e),J(r))),"$$scope"in r&&i(3,s=r.$$scope)},e=J(e),[l,e,t,s]}class kt extends B{constructor(e){super(),X(this,e,wt,$t,O,{})}}const De=kt;function yt(n){let e;const i=n[2].default,t=Y(i,n,n[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&8)&&K(t,i,s,s[3],e?te(i,s[3],l,null):ee(s[3]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function xt(n){let e,i;const t=[{name:"list-filter"},n[1],{iconNode:n[0]}];let s={$$slots:{default:[yt]},$$scope:{ctx:n}};for(let l=0;l<t.length;l+=1)s=U(s,t[l]);return e=new pe({props:s}),{c(){M(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,r){E(e,l,r),i=!0},p(l,[r]){const a=r&3?se(t,[t[0],r&2&&me(l[1]),r&1&&{iconNode:l[0]}]):{};r&8&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){i||(g(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){T(e,l)}}}function It(n,e,i){let{$$slots:t={},$$scope:s}=e;const l=[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]];return n.$$set=r=>{i(1,e=U(U({},e),J(r))),"$$scope"in r&&i(3,s=r.$$scope)},e=J(e),[l,e,t,s]}class St extends B{constructor(e){super(),X(this,e,It,xt,O,{})}}const Fe=St;function Ae(n){let e,i,t="Discover the world’s top designers",s,l,r=`Explore work from the most talented and accomplished designers ready to take on your next
			project`,a,o,u,c,p,w,b,h,D,f='<span class="opacity-60 font-thin">Trending searches:</span> <ul class="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap px-[2px]"><li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Web Design</button></li> <li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Discover</button></li> <li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Animation</button></li> <li><button type="button" class="inline-flex h-6 items-center rounded-full bg-[#f8f7f4] px-2 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Branding</button></li></ul>',d,m,y;function L(I){n[3](I)}let Q={placeholder:"What are you looking for...?",class:"ml-4 h-8 border-none bg-transparent pl-0 text-base shadow-none placeholder:text-[#9e9ea7] focus-visible:ring-0"};return n[1]!==void 0&&(Q.value=n[1]),c=new Be({props:Q}),Te.push(()=>We(c,"value",L)),b=new ie({props:{class:"ml-4 mr-2 h-10 min-h-10 w-10 min-w-10 rounded-full !p-0",$$slots:{default:[At]},$$scope:{ctx:n}}}),{c(){e=S("section"),i=S("h1"),i.textContent=t,s=Z(),l=S("h2"),l.textContent=r,a=Z(),o=S("form"),u=S("div"),M(c.$$.fragment),w=Z(),M(b.$$.fragment),h=Z(),D=S("div"),D.innerHTML=f,this.h()},l(I){e=A(I,"SECTION",{class:!0});var x=q(e);i=A(x,"H1",{class:!0,"data-svelte-h":!0}),oe(i)!=="svelte-p3ox4z"&&(i.textContent=t),s=C(x),l=A(x,"H2",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-1lcqsky"&&(l.textContent=r),a=C(x),o=A(x,"FORM",{class:!0});var z=q(o);u=A(z,"DIV",{class:!0});var j=q(u);N(c.$$.fragment,j),w=C(j),N(b.$$.fragment,j),j.forEach(_),z.forEach(_),h=C(x),D=A(x,"DIV",{class:!0,"data-svelte-h":!0}),oe(D)!=="svelte-19v1hcj"&&(D.innerHTML=f),x.forEach(_),this.h()},h(){k(i,"class","shots-search-hero__heading mb-6 mt-6 w-[480px] text-center text-5xl font-medium"),k(l,"class","shots-search-hero__subheading mb-6 w-[800px] text-center text-lg font-thin text-[#6e6d7a]"),k(u,"class","flex h-14 w-full max-w-[628px] items-center justify-between rounded-full border border-gray-100 bg-[#f4f5fb] focus-within:outline-none"),k(o,"class","flex w-full justify-center px-4 text-center"),k(D,"class","mt-6 flex items-center gap-2"),k(e,"class","relative mb-12 flex flex-col items-center")},m(I,x){F(I,e,x),$(e,i),$(e,s),$(e,l),$(e,a),$(e,o),$(o,u),E(c,u,null),$(u,w),E(b,u,null),$(e,h),$(e,D),d=!0,m||(y=Ce(o,"submit",je(n[2])),m=!0)},p(I,x){const z={};!p&&x&2&&(p=!0,z.value=I[1],Le(()=>p=!1)),c.$set(z);const j={};x&32&&(j.$$scope={dirty:x,ctx:I}),b.$set(j)},i(I){d||(g(c.$$.fragment,I),g(b.$$.fragment,I),d=!0)},o(I){v(c.$$.fragment,I),v(b.$$.fragment,I),d=!1},d(I){I&&_(e),T(c),T(b),m=!1,y()}}}function At(n){let e,i;return e=new Pe({props:{strokeWidth:2.5,class:"h-5 w-5 text-[#9e9ea7]"}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){E(e,t,s),i=!0},p:V,i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){v(e.$$.fragment,t),i=!1},d(t){T(e,t)}}}function qt(n){let e,i,t=n[0]!==void 0&&Ae(n);return{c(){t&&t.c(),e=ue()},l(s){t&&t.l(s),e=ue()},m(s,l){t&&t.m(s,l),F(s,e,l),i=!0},p(s,[l]){s[0]!==void 0?t?(t.p(s,l),l&1&&g(t,1)):(t=Ae(s),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(R(),v(t,1,1,()=>{t=null}),H())},i(s){i||(g(t),i=!0)},o(s){v(t),i=!1},d(s){s&&_(e),t&&t.d(s)}}}function Mt(n,e,i){let{search:t=""}=e,s="",l=null;const r=()=>{l===null?ke(`/?search=${s}`):ke(`/?search=${s}&category=${l}`)};function a(o){s=o,i(1,s)}return n.$$set=o=>{"search"in o&&i(0,t=o.search)},l=new URL(window==null?void 0:window.location.href).searchParams.get("category"),[t,s,r,a]}class Nt extends B{constructor(e){super(),X(this,e,Mt,qt,O,{search:0})}}function Et(n){let e,i,t;return i=new ze({props:{class:"ml-2",size:14}}),{c(){e=W(`Following
			`),M(i.$$.fragment)},l(s){e=P(s,`Following
			`),N(i.$$.fragment,s)},m(s,l){F(s,e,l),E(i,s,l),t=!0},p:V,i(s){t||(g(i.$$.fragment,s),t=!0)},o(s){v(i.$$.fragment,s),t=!1},d(s){s&&_(e),T(i,s)}}}function Tt(n){let e,i,t;return e=new Fe({props:{class:"mr-1",size:16}}),{c(){M(e.$$.fragment),i=W(`
			Filters`)},l(s){N(e.$$.fragment,s),i=P(s,`
			Filters`)},m(s,l){E(e,s,l),F(s,i,l),t=!0},p:V,i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){s&&_(i),T(e,s)}}}function zt(n){let e,i,t;return i=new ze({props:{class:"ml-2",size:14}}),{c(){e=W(`Following
			`),M(i.$$.fragment)},l(s){e=P(s,`Following
			`),N(i.$$.fragment,s)},m(s,l){F(s,e,l),E(i,s,l),t=!0},p:V,i(s){t||(g(i.$$.fragment,s),t=!0)},o(s){v(i.$$.fragment,s),t=!1},d(s){s&&_(e),T(i,s)}}}function Dt(n){let e,i,t;return e=new Fe({props:{class:"mr-1",size:16}}),{c(){M(e.$$.fragment),i=W(`
			Filters`)},l(s){N(e.$$.fragment,s),i=P(s,`
			Filters`)},m(s,l){E(e,s,l),F(s,i,l),t=!0},p:V,i(s){t||(g(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){s&&_(i),T(e,s)}}}function Ft(n){let e,i,t,s,l,r,a,o,u,c,p,w,b,h='<ul class="scrollbar-hide flex gap-2 overflow-x-auto overflow-y-hidden scroll-smooth whitespace-nowrap px-[2px]"><li><button type="button" class="inline-flex h-9 items-center rounded-full bg-[#f8f7f4] px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Web Design</button></li> <li><button type="button" class="-ml-4 inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Discover</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Animation</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Branding</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Illustration</button></li> <li><button type="button" class="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold leading-5 hover:cursor-pointer hover:opacity-70">Typography</button></li></ul>',D,f,d;return t=new ie({props:{variant:"outline",class:"mr-10 rounded-[8px] p-[18px] pr-3 shadow-none hover:bg-transparent hover:shadow-sm",$$slots:{default:[Et]},$$scope:{ctx:n}}}),l=new ie({props:{variant:"outline",class:"ml-10 rounded-full p-[18px] shadow-none hover:bg-transparent hover:shadow-sm",$$slots:{default:[Tt]},$$scope:{ctx:n}}}),a=new Ke({props:{class:"my-4"}}),p=new ie({props:{variant:"outline",class:"mr-10 rounded-[8px] p-[18px] pr-3 shadow-none hover:bg-transparent hover:shadow-sm",$$slots:{default:[zt]},$$scope:{ctx:n}}}),f=new ie({props:{variant:"outline",class:`hover:bg
        -transparent ml-10 rounded-full p-[18px] shadow-none hover:shadow-sm`,$$slots:{default:[Dt]},$$scope:{ctx:n}}}),{c(){e=S("div"),i=S("div"),M(t.$$.fragment),s=Z(),M(l.$$.fragment),r=Z(),M(a.$$.fragment),o=Z(),u=S("div"),c=S("div"),M(p.$$.fragment),w=Z(),b=S("div"),b.innerHTML=h,D=Z(),M(f.$$.fragment),this.h()},l(m){e=A(m,"DIV",{class:!0});var y=q(e);i=A(y,"DIV",{class:!0});var L=q(i);N(t.$$.fragment,L),s=C(L),N(l.$$.fragment,L),L.forEach(_),r=C(y),N(a.$$.fragment,y),y.forEach(_),o=C(m),u=A(m,"DIV",{class:!0});var Q=q(u);c=A(Q,"DIV",{class:!0});var I=q(c);N(p.$$.fragment,I),w=C(I),b=A(I,"DIV",{class:!0,"data-svelte-h":!0}),oe(b)!=="svelte-wtud3m"&&(b.innerHTML=h),D=C(I),N(f.$$.fragment,I),I.forEach(_),Q.forEach(_),this.h()},h(){k(i,"class","flex items-center justify-between"),k(e,"class","flex w-full flex-col lg:hidden"),k(b,"class","relative overflow-x-auto overflow-y-hidden"),k(c,"class","flex flex-row items-center justify-between"),k(u,"class","hidden w-full lg:block")},m(m,y){F(m,e,y),$(e,i),E(t,i,null),$(i,s),E(l,i,null),$(e,r),E(a,e,null),F(m,o,y),F(m,u,y),$(u,c),E(p,c,null),$(c,w),$(c,b),$(c,D),E(f,c,null),d=!0},p(m,[y]){const L={};y&1&&(L.$$scope={dirty:y,ctx:m}),t.$set(L);const Q={};y&1&&(Q.$$scope={dirty:y,ctx:m}),l.$set(Q);const I={};y&1&&(I.$$scope={dirty:y,ctx:m}),p.$set(I);const x={};y&1&&(x.$$scope={dirty:y,ctx:m}),f.$set(x)},i(m){d||(g(t.$$.fragment,m),g(l.$$.fragment,m),g(a.$$.fragment,m),g(p.$$.fragment,m),g(f.$$.fragment,m),d=!0)},o(m){v(t.$$.fragment,m),v(l.$$.fragment,m),v(a.$$.fragment,m),v(p.$$.fragment,m),v(f.$$.fragment,m),d=!1},d(m){m&&(_(e),_(o),_(u)),T(t),T(l),T(a),T(p),T(f)}}}class Zt extends B{constructor(e){super(),X(this,e,null,Ft,O,{})}}function Ct(n){let e,i,t=[{class:i=fe("bg-muted animate-pulse rounded-md",n[0])},n[1]],s={};for(let l=0;l<t.length;l+=1)s=U(s,t[l]);return{c(){e=S("div"),this.h()},l(l){e=A(l,"DIV",{class:!0}),q(e).forEach(_),this.h()},h(){ce(e,s)},m(l,r){F(l,e,r)},p(l,[r]){ce(e,s=se(t,[r&1&&i!==(i=fe("bg-muted animate-pulse rounded-md",l[0]))&&{class:i},r&2&&l[1]]))},i:V,o:V,d(l){l&&_(e)}}}function jt(n,e,i){const t=["class"];let s=G(e,t),{class:l=void 0}=e;return n.$$set=r=>{e=U(U({},e),J(r)),i(1,s=G(e,t)),"class"in r&&i(0,l=r.class)},[l,s]}class de extends B{constructor(e){super(),X(this,e,jt,Ct,O,{class:0})}}function Lt(n){let e;const i=n[3].default,t=Y(i,n,n[4],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,l){t&&t.m(s,l),e=!0},p(s,l){t&&t.p&&(!e||l&16)&&K(t,i,s,s[4],e?te(i,s[4],l,null):ee(s[4]),null)},i(s){e||(g(t,s),e=!0)},o(s){v(t,s),e=!1},d(s){t&&t.d(s)}}}function Ut(n){let e,i;const t=[{delayMs:n[1]},{class:fe("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",n[0])},n[2]];let s={$$slots:{default:[Lt]},$$scope:{ctx:n}};for(let l=0;l<t.length;l+=1)s=U(s,t[l]);return e=new mt({props:s}),{c(){M(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,r){E(e,l,r),i=!0},p(l,[r]){const a=r&7?se(t,[r&2&&{delayMs:l[1]},r&1&&{class:fe("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",l[0])},r&4&&me(l[2])]):{};r&16&&(a.$$scope={dirty:r,ctx:l}),e.$set(a)},i(l){i||(g(e.$$.fragment,l),i=!0)},o(l){v(e.$$.fragment,l),i=!1},d(l){T(e,l)}}}function Vt(n,e,i){const t=["class","delayMs"];let s=G(e,t),{$$slots:l={},$$scope:r}=e,{class:a=void 0}=e,{delayMs:o=void 0}=e;return n.$$set=u=>{e=U(U({},e),J(u)),i(2,s=G(e,t)),"class"in u&&i(0,a=u.class),"delayMs"in u&&i(1,o=u.delayMs),"$$scope"in u&&i(4,r=u.$$scope)},[a,o,s,l,r]}class Wt extends B{constructor(e){super(),X(this,e,Vt,Ut,O,{class:0,delayMs:1})}}function qe(n){let e,i,t,s,l;const r=[Qt,Pt],a=[];function o(c,p){return c[5]?0:c[4]?1:-1}~(i=o(n))&&(t=a[i]=r[i](n));let u=!n[3]&&Me(n);return{c(){e=S("div"),t&&t.c(),s=Z(),u&&u.c(),this.h()},l(c){e=A(c,"DIV",{class:!0});var p=q(e);t&&t.l(p),s=C(p),u&&u.l(p),p.forEach(_),this.h()},h(){k(e,"class","flex items-center justify-between")},m(c,p){F(c,e,p),~i&&a[i].m(e,null),$(e,s),u&&u.m(e,null),l=!0},p(c,p){let w=i;i=o(c),i===w?~i&&a[i].p(c,p):(t&&(R(),v(a[w],1,1,()=>{a[w]=null}),H()),~i?(t=a[i],t?t.p(c,p):(t=a[i]=r[i](c),t.c()),g(t,1),t.m(e,s)):t=null),c[3]?u&&(R(),v(u,1,1,()=>{u=null}),H()):u?(u.p(c,p),p&8&&g(u,1)):(u=Me(c),u.c(),g(u,1),u.m(e,null))},i(c){l||(g(t),g(u),l=!0)},o(c){v(t),v(u),l=!1},d(c){c&&_(e),~i&&a[i].d(),u&&u.d()}}}function Pt(n){let e,i,t,s,l=n[4].user.firstName+"",r,a,o=n[4].user.lastName+"",u,c,p;return i=new Wt({props:{class:"h-6 w-6 border",$$slots:{default:[Ot]},$$scope:{ctx:n}}}),{c(){e=S("a"),M(i.$$.fragment),t=Z(),s=S("p"),r=W(l),a=Z(),u=W(o),this.h()},l(w){e=A(w,"A",{href:!0,class:!0});var b=q(e);N(i.$$.fragment,b),t=C(b),s=A(b,"P",{class:!0});var h=q(s);r=P(h,l),a=C(h),u=P(h,o),h.forEach(_),b.forEach(_),this.h()},h(){k(s,"class","w-1/2 truncate text-sm font-medium"),k(e,"href",c=`/${n[4].profile.username}`),k(e,"class","flex w-full items-center justify-start space-x-2")},m(w,b){F(w,e,b),E(i,e,null),$(e,t),$(e,s),$(s,r),$(s,a),$(s,u),p=!0},p(w,b){const h={};b&144&&(h.$$scope={dirty:b,ctx:w}),i.$set(h),(!p||b&16)&&l!==(l=w[4].user.firstName+"")&&le(r,l),(!p||b&16)&&o!==(o=w[4].user.lastName+"")&&le(u,o),(!p||b&16&&c!==(c=`/${w[4].profile.username}`))&&k(e,"href",c)},i(w){p||(g(i.$$.fragment,w),p=!0)},o(w){v(i.$$.fragment,w),p=!1},d(w){w&&_(e),T(i)}}}function Qt(n){let e,i,t,s,l;return i=new de({props:{class:"h-6 w-6 rounded-full"}}),s=new de({props:{class:"h-5 w-1/2"}}),{c(){e=S("div"),M(i.$$.fragment),t=Z(),M(s.$$.fragment),this.h()},l(r){e=A(r,"DIV",{class:!0});var a=q(e);N(i.$$.fragment,a),t=C(a),N(s.$$.fragment,a),a.forEach(_),this.h()},h(){k(e,"class","flex w-full items-center justify-start space-x-2")},m(r,a){F(r,e,a),E(i,e,null),$(e,t),E(s,e,null),l=!0},p:V,i(r){l||(g(i.$$.fragment,r),g(s.$$.fragment,r),l=!0)},o(r){v(i.$$.fragment,r),v(s.$$.fragment,r),l=!1},d(r){r&&_(e),T(i),T(s)}}}function Ot(n){let e=n[4].user.firstName.charAt(0)+"",i,t=n[4].user.lastName.charAt(0)+"",s;return{c(){i=W(e),s=W(t)},l(l){i=P(l,e),s=P(l,t)},m(l,r){F(l,i,r),F(l,s,r)},p(l,r){r&16&&e!==(e=l[4].user.firstName.charAt(0)+"")&&le(i,e),r&16&&t!==(t=l[4].user.lastName.charAt(0)+"")&&le(s,t)},d(l){l&&(_(i),_(s))}}}function Me(n){let e,i,t,s,l,r,a,o,u;const c=[Xt,Bt],p=[];function w(f,d){return f[5]?0:1}t=w(n),s=p[t]=c[t](n);const b=[Rt,Jt],h=[];function D(f,d){return f[5]?0:1}return a=D(n),o=h[a]=b[a](n),{c(){e=S("div"),i=S("div"),s.c(),l=Z(),r=S("div"),o.c(),this.h()},l(f){e=A(f,"DIV",{class:!0});var d=q(e);i=A(d,"DIV",{class:!0});var m=q(i);s.l(m),m.forEach(_),l=C(d),r=A(d,"DIV",{class:!0});var y=q(r);o.l(y),y.forEach(_),d.forEach(_),this.h()},h(){k(i,"class","flex items-center space-x-[2px]"),k(r,"class","flex items-center space-x-[2px]"),k(e,"class","flex items-center gap-2")},m(f,d){F(f,e,d),$(e,i),p[t].m(i,null),$(e,l),$(e,r),h[a].m(r,null),u=!0},p(f,d){let m=t;t=w(f),t===m?p[t].p(f,d):(R(),v(p[m],1,1,()=>{p[m]=null}),H(),s=p[t],s?s.p(f,d):(s=p[t]=c[t](f),s.c()),g(s,1),s.m(i,null));let y=a;a=D(f),a===y?h[a].p(f,d):(R(),v(h[y],1,1,()=>{h[y]=null}),H(),o=h[a],o?o.p(f,d):(o=h[a]=b[a](f),o.c()),g(o,1),o.m(r,null))},i(f){u||(g(s),g(o),u=!0)},o(f){v(s),v(o),u=!1},d(f){f&&_(e),p[t].d(),h[a].d()}}}function Bt(n){let e,i,t,s=n[6](300,50)+"",l,r;return e=new De({props:{class:"h-4 w-4 fill-current text-[#9e9ea7]"}}),{c(){M(e.$$.fragment),i=Z(),t=S("p"),l=W(s),this.h()},l(a){N(e.$$.fragment,a),i=C(a),t=A(a,"P",{class:!0});var o=q(t);l=P(o,s),o.forEach(_),this.h()},h(){k(t,"class","text-xs font-medium text-[#3d3d4e]")},m(a,o){E(e,a,o),F(a,i,o),F(a,t,o),$(t,l),r=!0},p:V,i(a){r||(g(e.$$.fragment,a),r=!0)},o(a){v(e.$$.fragment,a),r=!1},d(a){a&&(_(i),_(t)),T(e,a)}}}function Xt(n){let e,i;return e=new de({props:{class:"h-5 w-10"}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){E(e,t,s),i=!0},p:V,i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){v(e.$$.fragment,t),i=!1},d(t){T(e,t)}}}function Jt(n){let e,i=n[6](10,1)+"",t,s,l=n[6](9,1)+"",r,a;return{c(){e=S("p"),t=W(i),s=W("."),r=W(l),a=W("k"),this.h()},l(o){e=A(o,"P",{class:!0});var u=q(e);t=P(u,i),s=P(u,"."),r=P(u,l),a=P(u,"k"),u.forEach(_),this.h()},h(){k(e,"class","text-xs font-medium text-[#3d3d4e]")},m(o,u){F(o,e,u),$(e,t),$(e,s),$(e,r),$(e,a)},p:V,i:V,o:V,d(o){o&&_(e)}}}function Rt(n){let e,i;return e=new de({props:{class:"h-5 w-10"}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){E(e,t,s),i=!0},p:V,i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){v(e.$$.fragment,t),i=!1},d(t){T(e,t)}}}function Ht(n){let e,i,t,s,l,r,a,o,u,c=n[0].title+"",p,w,b,h,D,f,d,m,y,L,Q,I;D=new bt({props:{size:16}}),m=new De({props:{size:16}});let x=!n[1]&&!n[2]&&qe(n);return{c(){e=S("div"),i=S("a"),t=S("img"),r=Z(),a=S("div"),o=S("div"),u=S("div"),p=W(c),w=Z(),b=S("div"),h=S("div"),M(D.$$.fragment),f=Z(),d=S("div"),M(m.$$.fragment),Q=Z(),x&&x.c(),this.h()},l(z){e=A(z,"DIV",{class:!0});var j=q(e);i=A(j,"A",{href:!0,class:!0});var ne=q(i);t=A(ne,"IMG",{src:!0,alt:!0,class:!0}),r=C(ne),a=A(ne,"DIV",{class:!0});var he=q(a);o=A(he,"DIV",{class:!0});var re=q(o);u=A(re,"DIV",{class:!0});var ge=q(u);p=P(ge,c),ge.forEach(_),w=C(re),b=A(re,"DIV",{class:!0});var ae=q(b);h=A(ae,"DIV",{class:!0});var _e=q(h);N(D.$$.fragment,_e),_e.forEach(_),f=C(ae),d=A(ae,"DIV",{class:!0});var be=q(d);N(m.$$.fragment,be),be.forEach(_),ae.forEach(_),re.forEach(_),he.forEach(_),ne.forEach(_),Q=C(j),x&&x.l(j),j.forEach(_),this.h()},h(){ve(t.src,s=n[0].image)||k(t,"src",s),k(t,"alt",l=n[0].title),k(t,"class","h-full w-full rounded-lg object-cover contrast-[0.95]"),k(u,"class","w-1/2 truncate font-medium text-white"),k(h,"class","ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"),k(d,"class","ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-white"),k(b,"class","flex justify-end"),k(o,"class","flex w-full items-center justify-between"),k(a,"class","bg-card-info absolute bottom-0 left-0 right-0 top-0 z-10 flex items-end rounded-lg p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 svelte-qasmqr"),k(i,"href",y=`/work/${n[0].id}`),k(i,"class",L=$e(`group relative w-full overflow-hidden ${n[1]?"h-[260px] lg:h-[225px] xl:h-[360px]":"h-[260px] lg:h-[225px] xl:h-[260px]"} ${n[2]?"h-[260px] xl:h-[200px]":""}`)+" svelte-qasmqr"),k(e,"class","flex flex-col gap-2")},m(z,j){F(z,e,j),$(e,i),$(i,t),$(i,r),$(i,a),$(a,o),$(o,u),$(u,p),$(o,w),$(o,b),$(b,h),E(D,h,null),$(b,f),$(b,d),E(m,d,null),$(e,Q),x&&x.m(e,null),I=!0},p(z,[j]){(!I||j&1&&!ve(t.src,s=z[0].image))&&k(t,"src",s),(!I||j&1&&l!==(l=z[0].title))&&k(t,"alt",l),(!I||j&1)&&c!==(c=z[0].title+"")&&le(p,c),(!I||j&1&&y!==(y=`/work/${z[0].id}`))&&k(i,"href",y),(!I||j&6&&L!==(L=$e(`group relative w-full overflow-hidden ${z[1]?"h-[260px] lg:h-[225px] xl:h-[360px]":"h-[260px] lg:h-[225px] xl:h-[260px]"} ${z[2]?"h-[260px] xl:h-[200px]":""}`)+" svelte-qasmqr"))&&k(i,"class",L),!z[1]&&!z[2]?x?(x.p(z,j),j&6&&g(x,1)):(x=qe(z),x.c(),g(x,1),x.m(e,null)):x&&(R(),v(x,1,1,()=>{x=null}),H())},i(z){I||(g(D.$$.fragment,z),g(m.$$.fragment,z),g(x),I=!0)},o(z){v(D.$$.fragment,z),v(m.$$.fragment,z),v(x),I=!1},d(z){z&&_(e),T(D),T(m),x&&x.d()}}}function Gt(n,e,i){let{work:t}=e,{isProfile:s=!1}=e,{isMoreWorks:l=!1}=e,{isAlsoLikeWorks:r=!1}=e,a=null,o=!0;const u=(c,p)=>Math.floor(Math.random()*(p-c+1))+c;return Ue(async()=>{i(4,a={user:{imageUrl:"https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18yWXplRkxPcnEwQkZCa1NxckJnYjlZcVdJbEgiLCJyaWQiOiJ1c2VyXzJiTUN6OWZOSFc0VVhEMDRSc2JxbWdOV25TNCJ9",firstName:"John",lastName:"Doe"},profile:{username:"johndoe"}}),i(5,o=!1)}),n.$$set=c=>{"work"in c&&i(0,t=c.work),"isProfile"in c&&i(1,s=c.isProfile),"isMoreWorks"in c&&i(2,l=c.isMoreWorks),"isAlsoLikeWorks"in c&&i(3,r=c.isAlsoLikeWorks)},n.$$.update=()=>{n.$$.dirty&16&&i(4,a),n.$$.dirty&32&&i(5,o)},[t,s,l,r,a,o,u]}class Yt extends B{constructor(e){super(),X(this,e,Gt,Ht,O,{work:0,isProfile:1,isMoreWorks:2,isAlsoLikeWorks:3})}}function Ne(n,e,i){const t=n.slice();return t[1]=e[i],t}function Ee(n){let e,i;return e=new Yt({props:{work:n[1],isProfile:!1}}),{c(){M(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,s){E(e,t,s),i=!0},p:V,i(t){i||(g(e.$$.fragment,t),i=!0)},o(t){v(e.$$.fragment,t),i=!1},d(t){T(e,t)}}}function Kt(n){let e,i,t,s,l,r,a,o,u,c,p,w;e=new Qe({}),s=new Nt({props:{search:""}}),a=new Zt({});let b=we(n[0]),h=[];for(let f=0;f<b.length;f+=1)h[f]=Ee(Ne(n,b,f));const D=f=>v(h[f],1,1,()=>{h[f]=null});return p=new Oe({}),{c(){M(e.$$.fragment),i=Z(),t=S("main"),M(s.$$.fragment),l=Z(),r=S("section"),M(a.$$.fragment),o=Z(),u=S("section");for(let f=0;f<h.length;f+=1)h[f].c();c=Z(),M(p.$$.fragment),this.h()},l(f){N(e.$$.fragment,f),i=C(f),t=A(f,"MAIN",{class:!0});var d=q(t);N(s.$$.fragment,d),l=C(d),r=A(d,"SECTION",{class:!0});var m=q(r);N(a.$$.fragment,m),o=C(m),u=A(m,"SECTION",{class:!0});var y=q(u);for(let L=0;L<h.length;L+=1)h[L].l(y);y.forEach(_),m.forEach(_),d.forEach(_),c=C(f),N(p.$$.fragment,f),this.h()},h(){k(u,"class","grid w-full gap-9 pt-4 md:grid-cols-2 lg:grid-cols-3 lg:pt-8 xl:grid-cols-4 xl:gap-12"),k(r,"class","flex flex-col items-center justify-start px-5 py-6 lg:px-20"),k(t,"class","min-h-[calc(100vh-100px-428.44px)] md:min-h-[calc(100vh-100px-332.44px)] lg:min-h-[calc(100vh-100px-254.44px)]")},m(f,d){E(e,f,d),F(f,i,d),F(f,t,d),E(s,t,null),$(t,l),$(t,r),E(a,r,null),$(r,o),$(r,u);for(let m=0;m<h.length;m+=1)h[m]&&h[m].m(u,null);F(f,c,d),E(p,f,d),w=!0},p(f,[d]){if(d&1){b=we(f[0]);let m;for(m=0;m<b.length;m+=1){const y=Ne(f,b,m);h[m]?(h[m].p(y,d),g(h[m],1)):(h[m]=Ee(y),h[m].c(),g(h[m],1),h[m].m(u,null))}for(R(),m=b.length;m<h.length;m+=1)D(m);H()}},i(f){if(!w){g(e.$$.fragment,f),g(s.$$.fragment,f),g(a.$$.fragment,f);for(let d=0;d<b.length;d+=1)g(h[d]);g(p.$$.fragment,f),w=!0}},o(f){v(e.$$.fragment,f),v(s.$$.fragment,f),v(a.$$.fragment,f),h=h.filter(Boolean);for(let d=0;d<h.length;d+=1)v(h[d]);v(p.$$.fragment,f),w=!1},d(f){f&&(_(i),_(t),_(c)),T(e,f),T(s),T(a),Ve(h,f),T(p,f)}}}function es(n){return[[{id:"66969dfd865df87988ef2304",userId:"user_2jKrWRREPbqBPOX8M6go4wYSIlE",title:"l.",description:"knlk",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/b099d851-88ca-4826-a72f-0d54a601bef1.JPG",liveSiteUrl:"asdkja;sl@gmail.com",githubUrl:"https://github.com/salimi-my/shadcn-ui-sidebar",category:"Web Design",createdAt:"2024-07-16T16:21:17.488Z",updatedAt:"2024-07-16T16:21:17.488Z"},{id:"665e2c0c9b9bfd50222aac6b",userId:"user_2hK87ZhkFyLd8Lzz0E8hdptmOzJ",title:"123",description:"123",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/67228baa-22ac-45c2-bcca-6a0abe15ebaf.jpg",liveSiteUrl:"123",githubUrl:"123",category:"Typography",createdAt:"2024-06-03T20:48:11.248Z",updatedAt:"2024-06-03T20:48:11.248Z"},{id:"664f5df42b61212ab83d96ce",userId:"user_2gsDDB3BwbT5LS34CEmZoaGk14A",title:"test post",description:"dfgdfg",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/1172df19-9cc0-44fe-a7ba-262f5043b9a0.png",liveSiteUrl:"dfggdf",githubUrl:"dfgdfg",category:"Web Design",createdAt:"2024-05-23T15:17:06.828Z",updatedAt:"2024-05-23T15:17:58.037Z"},{id:"65afbcd088ee2ac67d86f6ec",userId:"user_2bMCz9fNHW4UXD04RsbqmgNWnS4",title:"messi",description:"ashkFNI JN AIPAGN=w0ni",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/f2da6bb8-aa93-48bd-a774-a4d77fee5a9e.jpg",liveSiteUrl:"https://temp-mail.org/en/view/65afbc44622db301ca145d08",githubUrl:"https://temp-mail.org/en/view/65afbc44622db301ca145d08",category:"Web Design",createdAt:"2024-01-23T13:19:11.085Z",updatedAt:"2024-01-23T13:19:11.085Z"},{id:"658170c6339a3363aead0ae7",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"Web Design Digital",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/9e4b8533-ad93-4952-9966-71ce0cf61ecf.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Web Design",createdAt:"2023-12-19T10:30:30.813Z",updatedAt:"2023-12-19T10:30:30.813Z"},{id:"658170a7339a3363aead0ae6",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"We Design Modern",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/445fa7ae-0b1c-4d18-9484-3d460536ed49.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Web Design",createdAt:"2023-12-19T10:29:59.055Z",updatedAt:"2023-12-19T13:27:26.534Z"},{id:"65817087339a3363aead0ae5",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"Technology and Art",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/d5e49a0e-8e25-455b-b13d-90cab9ca6057.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Web Design",createdAt:"2023-12-19T10:29:27.300Z",updatedAt:"2023-12-19T10:29:27.300Z"},{id:"65817068339a3363aead0ae4",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"Proven Performance",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/8a3259da-e756-4a6e-9e53-42a9006751e1.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Typography",createdAt:"2023-12-19T10:28:56.167Z",updatedAt:"2023-12-19T10:28:56.167Z"},{id:"6581704d339a3363aead0ae3",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"Problem Solving is Our Choice",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/c49e38d3-a669-4a22-81f6-65b03beefa13.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Product Design",createdAt:"2023-12-19T10:28:29.049Z",updatedAt:"2023-12-19T10:28:29.049Z"},{id:"6581702e339a3363aead0ae2",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"Pizza Burgers and the Rest",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/9a335d7b-4a36-47b7-bbc2-7e0aca66936b.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Print",createdAt:"2023-12-19T10:27:58.346Z",updatedAt:"2023-12-19T10:27:58.346Z"},{id:"65817004339a3363aead0ae1",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"Innovation Technology of Space",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/12ea01da-e4b2-4c71-adc6-b5a499780e84.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Mobile",createdAt:"2023-12-19T10:27:16.893Z",updatedAt:"2023-12-19T10:27:16.893Z"},{id:"65816fd9339a3363aead0ae0",userId:"user_2ZXF3uzS8vxfiQeF5Q5ONMfqF6z",title:"Event Agency",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae blanditiis necessitatibus distinctio animi exped nesciunt deserunt, consequuntur est, sint quaerat quod delectus, quos id porro reiciendis in laudantium officia incidunt!",image:"https://files.edgestore.dev/sahfdy0r017fzrii/publicImages/_public/c94719ac-f72c-4ad6-a8ba-10bf917d5892.jpg",liveSiteUrl:"https://www.salimi.my",githubUrl:"https://github.com/salimi-my",category:"Illustration",createdAt:"2023-12-19T10:26:33.167Z",updatedAt:"2023-12-19T10:26:33.167Z"}]]}class ms extends B{constructor(e){super(),X(this,e,es,Kt,O,{})}}export{ms as component};
