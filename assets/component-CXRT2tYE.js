import{l as u,d as A,j as w}from"./styled-components.browser.esm-CyaOpMkv.js";import{j as Ee}from"./jsx-runtime-uV6E1Fxi.js";import{r as s}from"./index-CnY36iC1.js";import{r as ve,M as De}from"./index-Dyxk8dpP.js";import{i as Re}from"./tiny-invariant-DKC21gSL.js";import{S as ke,A as Ne,b as Le}from"./context.constants-_uES7CTn.js";import{J as He}from"./theme-D8gwu-FP.js";import{a as le}from"./style-KtjdfyVq.js";import{m as Ce}from"./proxy-BgqLTuwE.js";function H(e){return u`
    ${e.letterSpacing&&u`
      letter-spacing: ${e.letterSpacing};
    `};
    ${e.flex&&u`
      flex: ${e.flex};
    `};
    ${e.cursor&&u`
      cursor: ${e.cursor};
    `};
    ${e.overflow&&u`
      overflow: ${e.overflow};
    `};
    ${e.clamp&&u`
      display: -webkit-box;
      -webkit-line-clamp: ${e.clamp};
    `};
    ${e.clampOrient&&u`
      -webkit-box-orient: ${e.clampOrient};
    `};
    ${e.family&&u`
      font-family: ${e.family};
    `};
    ${e.weight&&u`
      font-weight: ${e.weight};
    `};
    ${e.height&&u`
      line-height: ${e.height}px;
    `};
    ${e.color&&u`
      color: ${He[e.color]};
    `};
    ${e.align&&u`
      text-align: ${e.align};
    `};
    ${e.wrap&&u`
      text-wrap: ${e.wrap};
    `};
    ${e.decoration&&u`
      text-decoration: ${e.decoration};
    `};
    ${e.transform&&u`
      text-transform: ${e.transform};
    `};
    ${e.isHoverUnderlining&&u`
      &:hover {
        text-decoration: underline;
      }
    `};
    ${"size"in e&&e.size&&u`
      font-size: ${e.size}px;
    `};
    ${"variant"in e&&e.variant?e.variant==="h1"?u`
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.default}px;
            line-height: ${t=>t.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${t=>t.theme.screens.tablet.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${t=>t.theme.screens.mobile.width}) {
              font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.mobile}px;
            }
          `:e.variant==="h2"?u`
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.default}px;
              line-height: ${t=>t.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.mobile}px;
              }
            `:e.variant==="h3"?u`
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.default}px;
                line-height: ${t=>t.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                  font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.mobile}px;
                }
              `:e.variant==="h4"?u`
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.default}px;
                  line-height: ${t=>t.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                    font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.mobile}px;
                  }
                `:e.variant==="h5"?u`
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.default}px;
                    line-height: ${t=>t.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                      font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.mobile}px;
                    }
                  `:e.variant==="h6"?u`
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.default}px;
                      line-height: ${t=>t.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                        font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.mobile}px;
                      }
                    `:e.variant==="h7"?u`
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.default}px;
                        line-height: ${t=>t.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                          font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.mobile}px;
                        }
                      `:e.variant==="h8"?u`
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.default}px;
                          line-height: ${t=>t.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                            font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.mobile}px;
                          }
                        `:e.variant==="h9"?u`
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.default}px;
                            line-height: ${t=>t.theme.font.lineHeight};
                            margin: 0;
                            @media (max-width: ${t=>t.theme.screens.tablet.width}) {
                              font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.tablet}px;
                            }

                            @media (max-width: ${t=>t.theme.screens.mobile.width}) {
                              font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.mobile}px;
                            }
                          `:null:null};
  `}const je=u`
  ${e=>{const t=e.$sx;return t?H(t.default):null}}

  ${e=>{const t=e.$sx;return t?Object.entries(t).filter(([n])=>n!=="default").map(([n,r])=>{var l;const i=(l=e.theme.screens[n])==null?void 0:l.width;return i?u`
          @media (max-width: ${i}) {
            ${H(r)}
          }
        `:null}):null}}
`,Ve=u`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  line-height: ${e=>e.theme.font.lineHeight};
  ${je};
`,F=A.span`
  ${Ve}
`,St=u`
  ${e=>{const t=e.$sxTypography;return t?H(t.default):null}}

  ${e=>{const t=e.$sxTypography;return t?Object.entries(t).filter(([n])=>n!=="default").map(([n,r])=>{var l;const i=(l=e.theme.screens[n])==null?void 0:l.width;return i?u`
          @media (max-width: ${i}) {
            ${H(r)}
          }
        `:null}):null}}
`;function Ae(e,t){{if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}const Pe="Error preloading route! ☝️";function Ie(e){return typeof e=="function"}function ie(e,t){return Ie(e)?e(t):e}function ue(e,t){if(e===t)return e;const n=t,r=oe(e)&&oe(n);if(r||C(e)&&C(n)){const i=r?e:Object.keys(e),l=i.length,c=r?n:Object.keys(n),z=c.length,$=r?[]:{};let d=0;for(let p=0;p<z;p++){const f=r?p:c[p];(!r&&i.includes(f)||r)&&e[f]===void 0&&n[f]===void 0?($[f]=void 0,d++):($[f]=ue(e[f],n[f]),$[f]===e[f]&&e[f]!==void 0&&d++)}return l===z&&d===l?e:$}return n}function C(e){if(!ae(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!ae(n)||!n.hasOwnProperty("isPrototypeOf"))}function ae(e){return Object.prototype.toString.call(e)==="[object Object]"}function oe(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function se(e,t){let n=Object.keys(e);return t&&(n=n.filter(r=>e[r]!==void 0)),n}function B(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(C(e)&&C(t)){const r=(n==null?void 0:n.ignoreUndefined)??!0,i=se(e,r),l=se(t,r);return!(n!=null&&n.partial)&&i.length!==l.length?!1:l.every(c=>B(e[c],t[c],n))}return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:!e.some((r,i)=>!B(r,t[i],n)):!1}function j(e,t){return e.endsWith("/")&&e!=="/"&&e!==`${t}/`?e.slice(0,-1):e}function Me(e,t,n){return j(e,n)===j(t,n)}var ce={exports:{}},fe={},de={exports:{}},he={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(a,o){return a===o&&(a!==0||1/a===1/o)||a!==a&&o!==o}function t(a,o){p||i.startTransition===void 0||(p=!0,console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var x=o();if(!f){var S=o();l(x,S)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),f=!0)}S=c({inst:{value:x,getSnapshot:o}});var b=S[0].inst,E=S[1];return $(function(){b.value=x,b.getSnapshot=o,n(b)&&E({inst:b})},[a,x,o]),z(function(){return n(b)&&E({inst:b}),a(function(){n(b)&&E({inst:b})})},[a]),d(x),x}function n(a){var o=a.getSnapshot;a=a.value;try{var x=o();return!l(a,x)}catch{return!0}}function r(a,o){return o()}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var i=s,l=typeof Object.is=="function"?Object.is:e,c=i.useState,z=i.useEffect,$=i.useLayoutEffect,d=i.useDebugValue,p=!1,f=!1,h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?r:t;he.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:h,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();de.exports=he;var We=de.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(d,p){return d===p&&(d!==0||1/d===1/p)||d!==d&&p!==p}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var t=s,n=We,r=typeof Object.is=="function"?Object.is:e,i=n.useSyncExternalStore,l=t.useRef,c=t.useEffect,z=t.useMemo,$=t.useDebugValue;fe.useSyncExternalStoreWithSelector=function(d,p,f,h,a){var o=l(null);if(o.current===null){var x={hasValue:!1,value:null};o.current=x}else x=o.current;o=z(function(){function b(_){if(!E){if(E=!0,O=_,_=h(_),a!==void 0&&x.hasValue){var T=x.value;if(a(T,_))return y=T}return y=_}if(T=y,r(O,_))return T;var R=h(_);return a!==void 0&&a(T,R)?(O=_,T):(O=_,y=R)}var E=!1,O,y,D=f===void 0?null:f;return[function(){return b(p())},D===null?void 0:function(){return b(D())}]},[p,f,h,a]);var S=i(d,o[0],o[1]);return c(function(){x.hasValue=!0,x.value=S},[S]),$(S),S},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();ce.exports=fe;var Ke=ce.exports;function Ge(e,t=n=>n){return Ke.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,t,Ue)}function Ue(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,i]of e)if(!t.has(r)||!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}const X=s.createContext(null);function qe(){return typeof document>"u"?X:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=X,X)}function me(e){const t=s.useContext(qe());return Ae(!(((e==null?void 0:e.warn)??!0)&&!t),"useRouter must be used inside a <RouterProvider> component!"),t}function J(e){const t=me({warn:(e==null?void 0:e.router)===void 0}),n=(e==null?void 0:e.router)||t,r=s.useRef(void 0);return Ge(n.__store,i=>{if(e!=null&&e.select){if(e.structuralSharing??n.options.defaultStructuralSharing){const l=ue(r.current,e.select(i));return r.current=l,l}return e.select(i)}return i})}const Fe=s.createContext(void 0),Xe=s.createContext(void 0);function Be(e){const t=s.useContext(e.from?Xe:Fe);return J({select:r=>{const i=r.matches.find(l=>e.from?e.from===l.routeId:l.id===t);if(Re(!((e.shouldThrow??!0)&&!i),`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),i!==void 0)return e.select?e.select(i):i},structuralSharing:e.structuralSharing})}const Je=typeof window<"u"?s.useLayoutEffect:s.useEffect;function Ye(e,t,n={},r={}){const i=s.useRef(typeof IntersectionObserver=="function"),l=s.useRef(null);return s.useEffect(()=>{if(!(!e.current||!i.current||r.disabled))return l.current=new IntersectionObserver(([c])=>{t(c)},n),l.current.observe(e.current),()=>{var c;(c=l.current)==null||c.disconnect()}},[t,n,r.disabled,e]),l.current}function Qe(e){const t=s.useRef(null);return s.useEffect(()=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)}),t}function Ze(e,t){const n=me(),[r,i]=s.useState(!1),l=s.useRef(!1),c=Qe(t),{activeProps:z=()=>({className:"active"}),inactiveProps:$=()=>({}),activeOptions:d,to:p,preload:f,preloadDelay:h,hashScrollIntoView:a,replace:o,startTransition:x,resetScroll:S,viewTransition:b,children:E,target:O,disabled:y,style:D,className:_,onClick:T,onFocus:R,onMouseEnter:I,onMouseLeave:M,onTouchStart:W,ignoreBlocker:ge,...xe}=e,{params:lt,search:ut,hash:ct,state:ft,mask:dt,reloadDocument:ht,...Q}=xe,Z=s.useMemo(()=>{try{return new URL(`${p}`),"external"}catch{}return"internal"},[p]),ye=J({select:m=>m.location.search,structuralSharing:!0});e={from:Be({strict:!1,select:m=>m.pathname}),...e};const v=s.useMemo(()=>n.buildLocation(e),[n,e,ye]),N=s.useMemo(()=>e.reloadDocument?!1:f??n.options.defaultPreload,[n.options.defaultPreload,f,e.reloadDocument]),we=h??n.options.defaultPreloadDelay??0,K=J({select:m=>{if(d!=null&&d.exact){if(!Me(m.location.pathname,v.pathname,n.basepath))return!1}else{const g=j(m.location.pathname,n.basepath).split("/");if(!j(v.pathname,n.basepath).split("/").every((Oe,Te)=>Oe===g[Te]))return!1}return((d==null?void 0:d.includeSearch)??!0)&&!B(m.location.search,v.search,{partial:!(d!=null&&d.exact),ignoreUndefined:!(d!=null&&d.explicitUndefined)})?!1:d!=null&&d.includeHash?m.location.hash===v.hash:!0}}),k=s.useCallback(()=>{n.preloadRoute(e).catch(m=>{console.warn(m),console.warn(Pe)})},[e,n]),$e=s.useCallback(m=>{m!=null&&m.isIntersecting&&k()},[k]);if(Ye(c,$e,{rootMargin:"100px"},{disabled:!!y||N!=="viewport"}),Je(()=>{l.current||!y&&N==="render"&&(k(),l.current=!0)},[y,k,N]),Z==="external")return{...Q,ref:c,type:Z,href:p,...E&&{children:E},...O&&{target:O},...y&&{disabled:y},...D&&{style:D},..._&&{className:_},...T&&{onClick:T},...R&&{onFocus:R},...I&&{onMouseEnter:I},...M&&{onMouseLeave:M},...W&&{onTouchStart:W}};const be=m=>{if(!y&&!nt(m)&&!m.defaultPrevented&&(!O||O==="_self")&&m.button===0){m.preventDefault(),ve.flushSync(()=>{i(!0)});const g=n.subscribe("onResolved",()=>{g(),i(!1)});return n.navigate({...e,replace:o,resetScroll:S,hashScrollIntoView:a,startTransition:x,viewTransition:b,ignoreBlocker:ge})}},ee=m=>{y||N&&k()},_e=ee,ze=m=>{if(y)return;const g=m.target||{};if(N){if(g.preloadTimeout)return;g.preloadTimeout=setTimeout(()=>{g.preloadTimeout=null,k()},we)}},Se=m=>{if(y)return;const g=m.target||{};g.preloadTimeout&&(clearTimeout(g.preloadTimeout),g.preloadTimeout=null)},L=m=>g=>{var q;(q=g.persist)==null||q.call(g),m.filter(Boolean).forEach(re=>{g.defaultPrevented||re(g)})},G=K?ie(z,{})??{}:{},U=K?{}:ie($,{}),te=[_,G.className,U.className].filter(Boolean).join(" "),ne={...D,...G.style,...U.style};return{...Q,...G,...U,href:y?void 0:v.maskedLocation?n.history.createHref(v.maskedLocation.href):n.history.createHref(v.href),ref:c,onClick:L([T,be]),onFocus:L([R,ee]),onMouseEnter:L([I,ze]),onMouseLeave:L([M,Se]),onTouchStart:L([W,_e]),disabled:!!y,target:O,...Object.keys(ne).length&&{style:ne},...te&&{className:te},...y&&{role:"link","aria-disabled":!0},...K&&{"data-status":"active","aria-current":"page"},...r&&{"data-transitioning":"transitioning"}}}function et(e){return s.forwardRef(function(n,r){return Ee.jsx(tt,{...n,_asChild:e,ref:r})})}const tt=s.forwardRef((e,t)=>{const{_asChild:n,...r}=e,{type:i,ref:l,...c}=Ze(r,t),z=typeof r.children=="function"?r.children({isActive:c["data-status"]==="active"}):r.children;return typeof n>"u"&&delete c.disabled,s.createElement(n||"a",{...c,ref:l},z)});function nt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const rt=()=>{const e=s.useContext(ke);if(!e)throw new Error("useScreenWidth must be used within an ProviderScreenWidth");return e},it=A.div`
  display: contents;
`,at=A(Ce.div)`
  position: absolute;
  pointer-events: none;
  z-index: 9999;
  width: auto;
  min-width: 0;

  padding: 8px;
  border-radius: 6px;

  background-color: ${e=>e.theme.palette.grayPatricia};
  color: ${e=>e.theme.palette.whiteStandard};

  white-space: ${e=>e.$whiteSpace??"normal"};
  max-width: ${e=>e.$maxWidth??"300px"};
  max-height: ${e=>e.$maxHeight??"200px"};

  opacity: ${e=>e.$visible?"1":"0"};
  ${le};
`;A.div`
  position: absolute;
  z-index: 9999;
  width: 0;
  height: 0;
  border-style: solid;
  padding: 0.1px;

  opacity: ${e=>e.$visible?"1":"0"};
  ${le};
`;const V=s.memo(e=>e.isDisabled?w.jsxDEV(w.Fragment,{children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:12,columnNumber:32},void 0):w.jsxDEV(ot,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:14,columnNumber:10},void 0)),ot=e=>{const[t,n]=s.useState(!1),r=s.useMemo(()=>10,[]),i=s.useMemo(()=>r,[r]),l=s.useRef(null),c=s.useRef(null),z=s.useCallback(()=>{n(!0)},[]),$=s.useCallback(p=>{var h,a;const f=p.relatedTarget;(!(f instanceof Node)||!((h=l.current)!=null&&h.contains(f))&&!((a=c.current)!=null&&a.contains(f)))&&n(!1)},[]),d=s.useMemo(()=>{if(!l.current||!c.current&&!t)return{};const p=l.current,f=c.current;if(!p||!f)return{};const h=p.getBoundingClientRect(),a=f.children[0].getBoundingClientRect(),o={};switch(e.placement){case"top":o.left=`${a.left+a.width/2-h.width/2}px`,o.top=`${a.top-h.height-i}px`;break;case"top-start":o.left=`${a.left}px`,o.top=`${a.top-h.height-i}px`;break;case"top-end":o.left=`${a.right-h.width}px`,o.top=`${a.top-h.height-i}px`;break;case"right":o.left=`${a.right+i}px`,o.top=`${a.top+a.height/2-h.height/2}px`;break;case"right-start":o.left=`${a.right+i}px`,o.top=`${a.top}px`;break;case"right-end":o.left=`${a.right+i}px`,o.top=`${a.bottom-h.height}px`;break;case"bottom":o.left=`${a.left+a.width/2-h.width/2}px`,o.top=`${a.bottom+i}px`;break;case"bottom-start":o.left=`${a.left}px`,o.top=`${a.bottom+i}px`;break;case"bottom-end":o.left=`${a.right-h.width}px`,o.top=`${a.bottom+i}px`;break;case"left":o.left=`${a.left-h.width-i}px`,o.top=`${a.top+a.height/2-h.height/2}px`;break;case"left-start":o.left=`${a.left-h.width-i}px`,o.top=`${a.top}px`;break;case"left-end":o.left=`${a.left-h.width-i}px`,o.top=`${a.bottom-h.height}px`;break}return o},[i,e.placement,t]);return w.jsxDEV(w.Fragment,{children:[w.jsxDEV(it,{ref:c,onMouseEnter:z,onMouseLeave:$,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:224,columnNumber:7},void 0),De.createPortal(w.jsxDEV(Ne,{children:w.jsxDEV(at,{ref:l,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:t,onMouseLeave:$,style:d,transition:{type:"spring",duration:Le},children:w.jsxDEV(st,{sx:{default:{size:e.size??14}},children:e.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:242,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:230,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:228,columnNumber:9},void 0),document.body)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:223,columnNumber:5},void 0)};V.displayName="Tooltip";try{V.displayName="Tooltip",V.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}const P=s.forwardRef((e,t)=>{const{screenActual:n}=rt(),r=s.useMemo(()=>({$sx:e.sx,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}}),[e.sx,e.className,e.style,e.onClick]),i=s.useMemo(()=>{var l,c;return((l=e.sx)==null?void 0:l[n.value])??((c=e.sx)==null?void 0:c.default)},[e.sx,n.value]);return"variant"in i?i.variant==="h7"||i.variant==="h8"||i.variant==="h9"?w.jsxDEV(F,{ref:t,as:e.isAnchor?"a":e.isParagraph?"p":"span",href:e.href,...r,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:27,columnNumber:11},void 0):w.jsxDEV(F,{ref:t,as:e.isAnchor?"a":e.isParagraph?"p":i.variant,href:e.href,...r,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:39,columnNumber:11},void 0):w.jsxDEV(F,{ref:t,as:e.isAnchor?"a":e.isParagraph?"p":"span",href:e.href,...r,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:53,columnNumber:7},void 0)}),st=e=>w.jsxDEV(P,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:67,columnNumber:10},void 0),pe=s.forwardRef((e,t)=>w.jsxDEV(P,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:71,columnNumber:10},void 0));et(pe);const Y=s.memo(e=>{const[t,n]=s.useState(!1),r=s.useRef(null);return s.useEffect(()=>{const i=()=>{r.current&&n(r.current.scrollWidth>r.current.clientWidth)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e.children]),w.jsxDEV(V,{isDisabled:!t,content:e.children,...e.tooltip,children:w.jsxDEV(P,{ref:r,...e.typography,style:{position:"relative"},children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:92,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:91,columnNumber:5},void 0)});Y.displayName="TypographyTooltip";P.displayName="TypographyWithRef";pe.displayName="TypographySizeIsAnchor";try{Y.displayName="TypographyTooltip",Y.__docgenInfo={description:"",displayName:"TypographyTooltip",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},isParagraph:{defaultValue:null,description:"",name:"isParagraph",required:!1,type:{name:"boolean"}},isAnchor:{defaultValue:null,description:"",name:"isAnchor",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!0,type:{name:"TypographySXProps"}}}}}catch{}export{st as T,V as a,St as b,rt as u};
