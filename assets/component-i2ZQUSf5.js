import{l as c,d as J,j as O}from"./styled-components.browser.esm-CyaOpMkv.js";import{j as Oe}from"./jsx-runtime-uV6E1Fxi.js";import{r as s}from"./index-CnY36iC1.js";import{r as ve,M as De}from"./index-Dyxk8dpP.js";import{i as Re}from"./tiny-invariant-DKC21gSL.js";import{S as Ne}from"./context-DdocyObD.js";import{J as ke,K as Le}from"./theme.global-CglKeZg3.js";import{m as Ce}from"./proxy-BS1eh56F.js";import{A as He}from"./index-DgedcAJ4.js";function H(e){return c`
    ${e.letterSpacing&&c`
      letter-spacing: ${e.letterSpacing};
    `};
    ${e.flex&&c`
      flex: ${e.flex};
    `};
    ${e.cursor&&c`
      cursor: ${e.cursor};
    `};
    ${e.overflow&&c`
      overflow: ${e.overflow};
    `};
    ${e.line!==void 0?e.line===1?c`
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: -webkit-fill-available;
            max-width: fit-content;
          `:c`
            word-break: break-word;
            white-space: normal;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e.line};
            width: fit-content;
            overflow-wrap: anywhere;
          `:c``};
    ${e.family&&c`
      font-family: ${e.family};
    `};
    ${e.weight&&c`
      font-weight: ${e.weight};
    `};
    ${e.height&&c`
      line-height: ${e.height}px;
    `};
    ${e.color&&c`
      color: ${ke[e.color]};
    `};
    ${e.align&&c`
      text-align: ${e.align};
    `};
    ${e.wrap&&c`
      text-wrap: ${e.wrap};
    `};
    ${e.decoration&&c`
      text-decoration: ${e.decoration};
    `};
    ${e.transform&&c`
      text-transform: ${e.transform};
    `};
    ${e.isHoverUnderlining&&c`
      &:hover {
        text-decoration: underline;
      }
    `};
    ${"size"in e&&e.size&&c`
      font-size: ${e.size}px;
    `};
    ${"variant"in e&&e.variant?e.variant==="h1"?c`
            font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.default}px;
            line-height: ${t=>t.theme.font.lineHeight};
            margin: 0;
            @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
              font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.tablet}px;
            }

            @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
              font-size: ${t=>t.theme.font.sizeHeading.h1*t.theme.font.sizeDefault.mobile}px;
            }
          `:e.variant==="h2"?c`
              font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.default}px;
              line-height: ${t=>t.theme.font.lineHeight};
              margin: 0;
              @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.tablet}px;
              }

              @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                font-size: ${t=>t.theme.font.sizeHeading.h2*t.theme.font.sizeDefault.mobile}px;
              }
            `:e.variant==="h3"?c`
                font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.default}px;
                line-height: ${t=>t.theme.font.lineHeight};
                margin: 0;
                @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                  font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.tablet}px;
                }

                @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                  font-size: ${t=>t.theme.font.sizeHeading.h3*t.theme.font.sizeDefault.mobile}px;
                }
              `:e.variant==="h4"?c`
                  font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.default}px;
                  line-height: ${t=>t.theme.font.lineHeight};
                  margin: 0;
                  @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                    font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.tablet}px;
                  }

                  @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                    font-size: ${t=>t.theme.font.sizeHeading.h4*t.theme.font.sizeDefault.mobile}px;
                  }
                `:e.variant==="h5"?c`
                    font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.default}px;
                    line-height: ${t=>t.theme.font.lineHeight};
                    margin: 0;
                    @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                      font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.tablet}px;
                    }

                    @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                      font-size: ${t=>t.theme.font.sizeHeading.h5*t.theme.font.sizeDefault.mobile}px;
                    }
                  `:e.variant==="h6"?c`
                      font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.default}px;
                      line-height: ${t=>t.theme.font.lineHeight};
                      margin: 0;
                      @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                        font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.tablet}px;
                      }

                      @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                        font-size: ${t=>t.theme.font.sizeHeading.h6*t.theme.font.sizeDefault.mobile}px;
                      }
                    `:e.variant==="h7"?c`
                        font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.default}px;
                        line-height: ${t=>t.theme.font.lineHeight};
                        margin: 0;
                        @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                          font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.tablet}px;
                        }

                        @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                          font-size: ${t=>t.theme.font.sizeHeading.h7*t.theme.font.sizeDefault.mobile}px;
                        }
                      `:e.variant==="h8"?c`
                          font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.default}px;
                          line-height: ${t=>t.theme.font.lineHeight};
                          margin: 0;
                          @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                            font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.tablet}px;
                          }

                          @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                            font-size: ${t=>t.theme.font.sizeHeading.h8*t.theme.font.sizeDefault.mobile}px;
                          }
                        `:e.variant==="h9"?c`
                            font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.default}px;
                            line-height: ${t=>t.theme.font.lineHeight};
                            margin: 0;
                            @media (max-width: ${t=>t.theme.screens.tablet.width}px) {
                              font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.tablet}px;
                            }

                            @media (max-width: ${t=>t.theme.screens.mobile.width}px) {
                              font-size: ${t=>t.theme.font.sizeHeading.h9*t.theme.font.sizeDefault.mobile}px;
                            }
                          `:null:null};
  `}const je=c`
  ${e=>{const t=e.$sx;return t?H(t.default):null}}

  ${e=>{const t=e.$sx;return t?Object.entries(t).filter(([n])=>n!=="default").map(([n,i])=>{var u;const o=(u=e.theme.screens[n])==null?void 0:u.width;return o?c`
          @media (max-width: ${o}px) {
            ${H(i)}
          }
        `:null}):null}}
`,Ve=c`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  line-height: ${e=>e.theme.font.lineHeight};
  ${je};
`,U=J.span`
  ${Ve}
`,vt=c`
  ${e=>{const t=e.$sxTypography;return t?H(t.default):null}}

  ${e=>{const t=e.$sxTypography;return t?Object.entries(t).filter(([n])=>n!=="default").map(([n,i])=>{var u;const o=(u=e.theme.screens[n])==null?void 0:u.width;return o?c`
          @media (max-width: ${o}px) {
            ${H(i)}
          }
        `:null}):null}}
`;function Ae(e,t){{if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}const Pe="Error preloading route! ☝️";function Ie(e){return typeof e=="function"}function re(e,t){return Ie(e)?e(t):e}function ue(e,t){if(e===t)return e;const n=t,i=ae(e)&&ae(n);if(i||j(e)&&j(n)){const o=i?e:Object.keys(e),u=o.length,f=i?n:Object.keys(n),m=f.length,v=i?[]:{};let d=0;for(let y=0;y<m;y++){const p=i?y:f[y];(!i&&o.includes(p)||i)&&e[p]===void 0&&n[p]===void 0?(v[p]=void 0,d++):(v[p]=ue(e[p],n[p]),v[p]===e[p]&&e[p]!==void 0&&d++)}return u===m&&d===u?e:v}return n}function j(e){if(!oe(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!oe(n)||!n.hasOwnProperty("isPrototypeOf"))}function oe(e){return Object.prototype.toString.call(e)==="[object Object]"}function ae(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function se(e,t){let n=Object.keys(e);return t&&(n=n.filter(i=>e[i]!==void 0)),n}function X(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(j(e)&&j(t)){const i=(n==null?void 0:n.ignoreUndefined)??!0,o=se(e,i),u=se(t,i);return!(n!=null&&n.partial)&&o.length!==u.length?!1:u.every(f=>X(e[f],t[f],n))}return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:!e.some((i,o)=>!X(i,t[o],n)):!1}function V(e,t){return e.endsWith("/")&&e!=="/"&&e!==`${t}/`?e.slice(0,-1):e}function Me(e,t,n){return V(e,n)===V(t,n)}var ce={exports:{}},fe={},de={exports:{}},he={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(a,r){return a===r&&(a!==0||1/a===1/r)||a!==a&&r!==r}function t(a,r){y||o.startTransition===void 0||(y=!0,console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var x=r();if(!p){var b=r();u(x,b)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),p=!0)}b=f({inst:{value:x,getSnapshot:r}});var _=b[0].inst,E=b[1];return v(function(){_.value=x,_.getSnapshot=r,n(_)&&E({inst:_})},[a,x,r]),m(function(){return n(_)&&E({inst:_}),a(function(){n(_)&&E({inst:_})})},[a]),d(x),x}function n(a){var r=a.getSnapshot;a=a.value;try{var x=r();return!u(a,x)}catch{return!0}}function i(a,r){return r()}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var o=s,u=typeof Object.is=="function"?Object.is:e,f=o.useState,m=o.useEffect,v=o.useLayoutEffect,d=o.useDebugValue,y=!1,p=!1,z=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?i:t;he.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:z,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();de.exports=he;var We=de.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(d,y){return d===y&&(d!==0||1/d===1/y)||d!==d&&y!==y}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var t=s,n=We,i=typeof Object.is=="function"?Object.is:e,o=n.useSyncExternalStore,u=t.useRef,f=t.useEffect,m=t.useMemo,v=t.useDebugValue;fe.useSyncExternalStoreWithSelector=function(d,y,p,z,a){var r=u(null);if(r.current===null){var x={hasValue:!1,value:null};r.current=x}else x=r.current;r=m(function(){function _($){if(!E){if(E=!0,T=$,$=z($),a!==void 0&&x.hasValue){var h=x.value;if(a(h,$))return w=h}return w=$}if(h=w,i(T,$))return h;var l=z($);return a!==void 0&&a(h,l)?(T=$,h):(T=$,w=l)}var E=!1,T,w,D=p===void 0?null:p;return[function(){return _(y())},D===null?void 0:function(){return _(D())}]},[y,p,z,a]);var b=o(d,r[0],r[1]);return f(function(){x.hasValue=!0,x.value=b},[b]),v(b),b},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();ce.exports=fe;var Ke=ce.exports;function qe(e,t=n=>n){return Ke.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,t,Ge)}function Ge(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[i,o]of e)if(!t.has(i)||!Object.is(o,t.get(i)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const i of e)if(!t.has(i))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(t,n[i])||!Object.is(e[n[i]],t[n[i]]))return!1;return!0}const F=s.createContext(null);function Ue(){return typeof document>"u"?F:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=F,F)}function me(e){const t=s.useContext(Ue());return Ae(!(((e==null?void 0:e.warn)??!0)&&!t),"useRouter must be used inside a <RouterProvider> component!"),t}function B(e){const t=me({warn:(e==null?void 0:e.router)===void 0}),n=(e==null?void 0:e.router)||t,i=s.useRef(void 0);return qe(n.__store,o=>{if(e!=null&&e.select){if(e.structuralSharing??n.options.defaultStructuralSharing){const u=ue(i.current,e.select(o));return i.current=u,u}return e.select(o)}return o})}const Fe=s.createContext(void 0),Xe=s.createContext(void 0);function Be(e){const t=s.useContext(e.from?Xe:Fe);return B({select:i=>{const o=i.matches.find(u=>e.from?e.from===u.routeId:u.id===t);if(Re(!((e.shouldThrow??!0)&&!o),`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),o!==void 0)return e.select?e.select(o):o},structuralSharing:e.structuralSharing})}const Ye=typeof window<"u"?s.useLayoutEffect:s.useEffect;function Je(e,t,n={},i={}){const o=s.useRef(typeof IntersectionObserver=="function"),u=s.useRef(null);return s.useEffect(()=>{if(!(!e.current||!o.current||i.disabled))return u.current=new IntersectionObserver(([f])=>{t(f)},n),u.current.observe(e.current),()=>{var f;(f=u.current)==null||f.disconnect()}},[t,n,i.disabled,e]),u.current}function Ze(e){const t=s.useRef(null);return s.useEffect(()=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)}),t}function Qe(e,t){const n=me(),[i,o]=s.useState(!1),u=s.useRef(!1),f=Ze(t),{activeProps:m=()=>({className:"active"}),inactiveProps:v=()=>({}),activeOptions:d,to:y,preload:p,preloadDelay:z,hashScrollIntoView:a,replace:r,startTransition:x,resetScroll:b,viewTransition:_,children:E,target:T,disabled:w,style:D,className:$,onClick:h,onFocus:l,onMouseEnter:N,onMouseLeave:I,onTouchStart:M,ignoreBlocker:ge,...xe}=e,{params:dt,search:ht,hash:mt,state:pt,mask:gt,reloadDocument:xt,...Z}=xe,Q=s.useMemo(()=>{try{return new URL(`${y}`),"external"}catch{}return"internal"},[y]),ye=B({select:g=>g.location.search,structuralSharing:!0});e={from:Be({strict:!1,select:g=>g.pathname}),...e};const R=s.useMemo(()=>n.buildLocation(e),[n,e,ye]),L=s.useMemo(()=>e.reloadDocument?!1:p??n.options.defaultPreload,[n.options.defaultPreload,p,e.reloadDocument]),we=z??n.options.defaultPreloadDelay??0,W=B({select:g=>{if(d!=null&&d.exact){if(!Me(g.location.pathname,R.pathname,n.basepath))return!1}else{const S=V(g.location.pathname,n.basepath).split("/");if(!V(R.pathname,n.basepath).split("/").every((Te,Ee)=>Te===S[Ee]))return!1}return((d==null?void 0:d.includeSearch)??!0)&&!X(g.location.search,R.search,{partial:!(d!=null&&d.exact),ignoreUndefined:!(d!=null&&d.explicitUndefined)})?!1:d!=null&&d.includeHash?g.location.hash===R.hash:!0}}),k=s.useCallback(()=>{n.preloadRoute(e).catch(g=>{console.warn(g),console.warn(Pe)})},[e,n]),be=s.useCallback(g=>{g!=null&&g.isIntersecting&&k()},[k]);if(Je(f,be,{rootMargin:"100px"},{disabled:!!w||L!=="viewport"}),Ye(()=>{u.current||!w&&L==="render"&&(k(),u.current=!0)},[w,k,L]),Q==="external")return{...Z,ref:f,type:Q,href:y,...E&&{children:E},...T&&{target:T},...w&&{disabled:w},...D&&{style:D},...$&&{className:$},...h&&{onClick:h},...l&&{onFocus:l},...N&&{onMouseEnter:N},...I&&{onMouseLeave:I},...M&&{onTouchStart:M}};const _e=g=>{if(!w&&!nt(g)&&!g.defaultPrevented&&(!T||T==="_self")&&g.button===0){g.preventDefault(),ve.flushSync(()=>{o(!0)});const S=n.subscribe("onResolved",()=>{S(),o(!1)});return n.navigate({...e,replace:r,resetScroll:b,hashScrollIntoView:a,startTransition:x,viewTransition:_,ignoreBlocker:ge})}},ee=g=>{w||L&&k()},$e=ee,Se=g=>{if(w)return;const S=g.target||{};if(L){if(S.preloadTimeout)return;S.preloadTimeout=setTimeout(()=>{S.preloadTimeout=null,k()},we)}},ze=g=>{if(w)return;const S=g.target||{};S.preloadTimeout&&(clearTimeout(S.preloadTimeout),S.preloadTimeout=null)},C=g=>S=>{var G;(G=S.persist)==null||G.call(S),g.filter(Boolean).forEach(ie=>{S.defaultPrevented||ie(S)})},K=W?re(m,{})??{}:{},q=W?{}:re(v,{}),te=[$,K.className,q.className].filter(Boolean).join(" "),ne={...D,...K.style,...q.style};return{...Z,...K,...q,href:w?void 0:R.maskedLocation?n.history.createHref(R.maskedLocation.href):n.history.createHref(R.href),ref:f,onClick:C([h,_e]),onFocus:C([l,ee]),onMouseEnter:C([N,Se]),onMouseLeave:C([I,ze]),onTouchStart:C([M,$e]),disabled:!!w,target:T,...Object.keys(ne).length&&{style:ne},...te&&{className:te},...w&&{role:"link","aria-disabled":!0},...W&&{"data-status":"active","aria-current":"page"},...i&&{"data-transitioning":"transitioning"}}}function et(e){return s.forwardRef(function(n,i){return Oe.jsx(tt,{...n,_asChild:e,ref:i})})}const tt=s.forwardRef((e,t)=>{const{_asChild:n,...i}=e,{type:o,ref:u,...f}=Qe(i,t),m=typeof i.children=="function"?i.children({isActive:f["data-status"]==="active"}):i.children;return typeof n>"u"&&delete f.disabled,s.createElement(n||"a",{...f,ref:u},m)});function nt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const it=()=>{const e=s.useContext(Ne);if(!e)throw new Error("useScreenWidth must be used within an ProviderScreenWidth");return e},rt=J.div`
  display: contents;
`,ot=c`
  ${e=>at({...Le[e.$size??"medium"]})};
`,at=e=>c`
  display: flex;
  border-radius: ${e.radius}px;
  padding: ${e.padding}px ${e.padding}px 0px ${e.padding}px;
  gap: ${e.padding-2}px;
  :after {
    content: '';
    display: block;
    height: ${e.padding}px;
    width: 100%;
  }
`,st=J(Ce.div)`
  position: absolute;
  z-index: 9999;
  width: auto;
  min-width: 0;

  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${e=>e.theme.palette.grayPatricia};
  color: ${e=>e.theme.palette.whiteStandard};
  box-shadow: ${e=>e.theme.effects.button};
  white-space: ${e=>e.$whiteSpace??"normal"};
  max-width: ${e=>e.$maxWidth??"300px"};
  max-height: ${e=>e.$maxHeight??"200px"};
  ${ot};
`,A=s.memo(e=>e.isDisabled?O.jsxDEV(O.Fragment,{children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:17,columnNumber:32},void 0):O.jsxDEV(lt,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:19,columnNumber:10},void 0)),lt=e=>{const[t,n]=s.useState(!1),[i,o]=s.useState(null),[u,f]=s.useState(!1),m=s.useMemo(()=>e.padding??ut,[e.padding]),v=s.useRef(null),d=s.useRef(null),y=s.useCallback(()=>{n(!0)},[]);return s.useEffect(()=>{if(!t)return;const p=(z,a)=>{var $;const r=v.current,x=($=d.current)==null?void 0:$.children[0];if(!r||!x)return;const b=r.getBoundingClientRect(),_=x.getBoundingClientRect(),E=z.clientX,T=z.clientY,w=E>=b.left-a&&E<=b.right+a&&T>=b.top-a&&T<=b.bottom+a,D=E>=_.left-a&&E<=_.right+a&&T>=_.top-a&&T<=_.bottom+a;!w&&!D&&n(!1)};return document.addEventListener("mousemove",z=>p(z,m)),()=>{document.removeEventListener("mousemove",z=>p(z,m))}},[m,t]),s.useLayoutEffect(()=>{var $;if(!t||!u){o(null);return}const p=v.current,z=($=d.current)==null?void 0:$.children[0];if(!p||!z)return;const a=p.getBoundingClientRect(),r=z.getBoundingClientRect(),x=[e.placement??le,"top","right","left","bottom-start","bottom-end","top-start","top-end","right-start","right-end","left-start","left-end"],b=h=>{const l={};switch(h){case"top":l.left=r.left+r.width/2-a.width/2,l.top=r.top-a.height-m;break;case"top-start":l.left=r.left,l.top=r.top-a.height-m;break;case"top-end":l.left=r.right-a.width,l.top=r.top-a.height-m;break;case"right":l.left=r.right+m,l.top=r.top+r.height/2-a.height/2;break;case"right-start":l.left=r.right+m,l.top=r.top;break;case"right-end":l.left=r.right+m,l.top=r.bottom-a.height;break;case"bottom":l.left=r.left+r.width/2-a.width/2,l.top=r.bottom+m;break;case"bottom-start":l.left=r.left,l.top=r.bottom+m;break;case"bottom-end":l.left=r.right-a.width,l.top=r.bottom+m;break;case"left":l.left=r.left-a.width-m,l.top=r.top+r.height/2-a.height/2;break;case"left-start":l.left=r.left-a.width-m,l.top=r.top;break;case"left-end":l.left=r.left-a.width-m,l.top=r.bottom-a.height;break}return{left:Math.round(Number(l.left)||0),top:Math.round(Number(l.top)||0),placement:h}},_=h=>{const{left:l,top:N}=h;return l>=0&&N>=0&&l+a.width<=window.innerWidth&&N+a.height<=window.innerHeight},E=(h,l)=>!(h.right<=l.left||h.left>=l.right||h.bottom<=l.top||h.top>=l.bottom),T=h=>{const l={left:h.left,top:h.top,right:h.left+a.width,bottom:h.top+a.height,width:a.width,height:a.height};return!E(l,r)},w=h=>_(h)&&T(h),D=x.map(b).find(w)||b(le);o({top:D.top,left:D.left})},[t,m,e.placement,u]),s.useEffect(()=>{t&&f(!0)},[t]),O.jsxDEV(O.Fragment,{children:[O.jsxDEV(rt,{ref:d,onMouseEnter:y,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:207,columnNumber:7},void 0),u&&De.createPortal(O.jsxDEV(He,{onExitComplete:()=>{t||f(!1)},children:t&&O.jsxDEV(st,{ref:v,$size:e.size,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{top:i?i.top:"auto",left:i?i.left:"auto",visibility:i?"visible":"hidden",pointerEvents:i?"auto":"none"},transition:{type:"spring",duration:ct},children:O.jsxDEV(ft,{sx:e.sxTypography??{default:{size:14}},children:e.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:239,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:220,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:212,columnNumber:11},void 0),document.body)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:206,columnNumber:5},void 0)};A.displayName="Tooltip";try{A.displayName="Tooltip",A.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}}}}}catch{}const ut=10,ct=.3,le="bottom-start",P=s.forwardRef((e,t)=>{const{screenActual:n}=it(),i=s.useMemo(()=>({$sx:e.sx,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}}),[e.sx,e.className,e.style,e.onClick]),o=s.useMemo(()=>{var u,f;return((u=e.sx)==null?void 0:u[n])??((f=e.sx)==null?void 0:f.default)},[e.sx,n]);return o&&"variant"in o?o.variant==="h7"||o.variant==="h8"||o.variant==="h9"?O.jsxDEV(U,{ref:t,as:e.isAnchor?"a":e.isParagraph?"p":"span",href:e.href,...i,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:27,columnNumber:11},void 0):O.jsxDEV(U,{ref:t,as:e.isAnchor?"a":e.isParagraph?"p":o.variant,href:e.href,...i,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:39,columnNumber:11},void 0):O.jsxDEV(U,{ref:t,as:e.isAnchor?"a":e.isParagraph?"p":"span",href:e.href,...i,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:53,columnNumber:7},void 0)}),ft=e=>O.jsxDEV(P,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:67,columnNumber:10},void 0),pe=s.forwardRef((e,t)=>O.jsxDEV(P,{isAnchor:!0,...e,ref:t,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:71,columnNumber:10},void 0));et(pe);const Y=s.memo(e=>{const[t,n]=s.useState(!1),i=s.useRef(null);return s.useEffect(()=>{const o=()=>{i.current&&n(i.current.scrollWidth>i.current.clientWidth)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e.children]),O.jsxDEV(A,{isDisabled:!t,content:e.children,...e.tooltip,children:O.jsxDEV(P,{ref:i,...e.typography,style:{position:"relative"},children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:92,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:91,columnNumber:5},void 0)});Y.displayName="TypographyTooltip";P.displayName="TypographyWithRef";pe.displayName="TypographySizeIsAnchor";try{Y.displayName="TypographyTooltip",Y.__docgenInfo={description:"",displayName:"TypographyTooltip",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},isParagraph:{defaultValue:null,description:"",name:"isParagraph",required:!1,type:{name:"boolean"}},isAnchor:{defaultValue:null,description:"",name:"isAnchor",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!0,type:{name:"TypographySXProps"}}}}}catch{}export{ft as T,A as a,vt as b,it as u};
