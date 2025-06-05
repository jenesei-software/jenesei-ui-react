import{m as Oe,l as c,d as J,j as O}from"./styled-components.browser.esm-CyaOpMkv.js";import{j as ve}from"./jsx-runtime-uV6E1Fxi.js";import{r as l}from"./index-CnY36iC1.js";import{r as De,M as Re}from"./index-Dyxk8dpP.js";import{i as Ne}from"./tiny-invariant-DKC21gSL.js";import{S as ke}from"./context-DdocyObD.js";import{J as Le,K as He}from"./theme.global-CNBZeL1_.js";import{m as Ce}from"./proxy-BS1eh56F.js";import{A as je}from"./index-DgedcAJ4.js";const Ve=Oe`
  0% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
  100% {
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
`;function C(e){return c`
    ${e.shadow&&e.shadow==="shadowPulse"&&c`
      animation: ${Ve} 2s infinite;
    `};
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
      color: ${Le[e.color]};
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
  `}const Ae=c`
  ${e=>{const t=e.$sx;return t?C(t.default):null}}

  ${e=>{const t=e.$sx;return t?Object.entries(t).filter(([n])=>n!=="default").map(([n,i])=>{var u;const a=(u=e.theme.screens[n])==null?void 0:u.width;return a?c`
          @media (max-width: ${a}px) {
            ${C(i)}
          }
        `:null}):null}}
`,Pe=c`
  font-style: normal;
  position: relative;
  overflow: visible;
  text-overflow: ellipsis;
  overflow-wrap: anywhere;
  line-height: ${e=>e.theme.font.lineHeight};
  ${Ae};
`,U=J.span`
  ${Pe}
`,Rt=c`
  ${e=>{const t=e.$sxTypography;return t?C(t.default):null}}

  ${e=>{const t=e.$sxTypography;return t?Object.entries(t).filter(([n])=>n!=="default").map(([n,i])=>{var u;const a=(u=e.theme.screens[n])==null?void 0:u.width;return a?c`
          @media (max-width: ${a}px) {
            ${C(i)}
          }
        `:null}):null}}
`;function Ie(e,t){{if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}const Me="Error preloading route! ☝️";function We(e){return typeof e=="function"}function re(e,t){return We(e)?e(t):e}function ue(e,t){if(e===t)return e;const n=t,i=ae(e)&&ae(n);if(i||j(e)&&j(n)){const a=i?e:Object.keys(e),u=a.length,p=i?n:Object.keys(n),h=p.length,v=i?[]:{};let f=0;for(let y=0;y<h;y++){const m=i?y:p[y];(!i&&a.includes(m)||i)&&e[m]===void 0&&n[m]===void 0?(v[m]=void 0,f++):(v[m]=ue(e[m],n[m]),v[m]===e[m]&&e[m]!==void 0&&f++)}return u===h&&f===u?e:v}return n}function j(e){if(!oe(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!oe(n)||!n.hasOwnProperty("isPrototypeOf"))}function oe(e){return Object.prototype.toString.call(e)==="[object Object]"}function ae(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function se(e,t){let n=Object.keys(e);return t&&(n=n.filter(i=>e[i]!==void 0)),n}function X(e,t,n){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(j(e)&&j(t)){const i=(n==null?void 0:n.ignoreUndefined)??!0,a=se(e,i),u=se(t,i);return!(n!=null&&n.partial)&&a.length!==u.length?!1:u.every(p=>X(e[p],t[p],n))}return Array.isArray(e)&&Array.isArray(t)?e.length!==t.length?!1:!e.some((i,a)=>!X(i,t[a],n)):!1}function V(e,t){return e.endsWith("/")&&e!=="/"&&e!==`${t}/`?e.slice(0,-1):e}function Ke(e,t,n){return V(e,n)===V(t,n)}var ce={exports:{}},fe={},de={exports:{}},he={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(o,r){return o===r&&(o!==0||1/o===1/r)||o!==o&&r!==r}function t(o,r){y||a.startTransition===void 0||(y=!0,console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var x=r();if(!m){var b=r();u(x,b)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),m=!0)}b=p({inst:{value:x,getSnapshot:r}});var _=b[0].inst,E=b[1];return v(function(){_.value=x,_.getSnapshot=r,n(_)&&E({inst:_})},[o,x,r]),h(function(){return n(_)&&E({inst:_}),o(function(){n(_)&&E({inst:_})})},[o]),f(x),x}function n(o){var r=o.getSnapshot;o=o.value;try{var x=r();return!u(o,x)}catch{return!0}}function i(o,r){return r()}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var a=l,u=typeof Object.is=="function"?Object.is:e,p=a.useState,h=a.useEffect,v=a.useLayoutEffect,f=a.useDebugValue,y=!1,m=!1,T=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?i:t;he.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:T,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();de.exports=he;var qe=de.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){function e(f,y){return f===y&&(f!==0||1/f===1/y)||f!==f&&y!==y}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var t=l,n=qe,i=typeof Object.is=="function"?Object.is:e,a=n.useSyncExternalStore,u=t.useRef,p=t.useEffect,h=t.useMemo,v=t.useDebugValue;fe.useSyncExternalStoreWithSelector=function(f,y,m,T,o){var r=u(null);if(r.current===null){var x={hasValue:!1,value:null};r.current=x}else x=r.current;r=h(function(){function _($){if(!E){if(E=!0,z=$,$=T($),o!==void 0&&x.hasValue){var d=x.value;if(o(d,$))return w=d}return w=$}if(d=w,i(z,$))return d;var s=T($);return o!==void 0&&o(d,s)?(z=$,d):(z=$,w=s)}var E=!1,z,w,D=m===void 0?null:m;return[function(){return _(y())},D===null?void 0:function(){return _(D())}]},[y,m,T,o]);var b=a(f,r[0],r[1]);return p(function(){x.hasValue=!0,x.value=b},[b]),v(b),b},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})();ce.exports=fe;var Ge=ce.exports;function Ue(e,t=n=>n){return Ge.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,t,Fe)}function Fe(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[i,a]of e)if(!t.has(i)||!Object.is(a,t.get(i)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const i of e)if(!t.has(i))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(t,n[i])||!Object.is(e[n[i]],t[n[i]]))return!1;return!0}const F=l.createContext(null);function Xe(){return typeof document>"u"?F:window.__TSR_ROUTER_CONTEXT__?window.__TSR_ROUTER_CONTEXT__:(window.__TSR_ROUTER_CONTEXT__=F,F)}function me(e){const t=l.useContext(Xe());return Ie(!(((e==null?void 0:e.warn)??!0)&&!t),"useRouter must be used inside a <RouterProvider> component!"),t}function B(e){const t=me({warn:(e==null?void 0:e.router)===void 0}),n=(e==null?void 0:e.router)||t,i=l.useRef(void 0);return Ue(n.__store,a=>{if(e!=null&&e.select){if(e.structuralSharing??n.options.defaultStructuralSharing){const u=ue(i.current,e.select(a));return i.current=u,u}return e.select(a)}return a})}const Be=l.createContext(void 0),Ye=l.createContext(void 0);function Je(e){const t=l.useContext(e.from?Ye:Be);return B({select:i=>{const a=i.matches.find(u=>e.from?e.from===u.routeId:u.id===t);if(Ne(!((e.shouldThrow??!0)&&!a),`Could not find ${e.from?`an active match from "${e.from}"`:"a nearest match!"}`),a!==void 0)return e.select?e.select(a):a},structuralSharing:e.structuralSharing})}const Ze=typeof window<"u"?l.useLayoutEffect:l.useEffect;function Qe(e,t,n={},i={}){const a=l.useRef(typeof IntersectionObserver=="function"),u=l.useRef(null);return l.useEffect(()=>{if(!(!e.current||!a.current||i.disabled))return u.current=new IntersectionObserver(([p])=>{t(p)},n),u.current.observe(e.current),()=>{var p;(p=u.current)==null||p.disconnect()}},[t,n,i.disabled,e]),u.current}function et(e){const t=l.useRef(null);return l.useEffect(()=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)}),t}function tt(e,t){const n=me(),[i,a]=l.useState(!1),u=l.useRef(!1),p=et(t),{activeProps:h=()=>({className:"active"}),inactiveProps:v=()=>({}),activeOptions:f,to:y,preload:m,preloadDelay:T,hashScrollIntoView:o,replace:r,startTransition:x,resetScroll:b,viewTransition:_,children:E,target:z,disabled:w,style:D,className:$,onClick:d,onFocus:s,onMouseEnter:N,onMouseLeave:I,onTouchStart:M,ignoreBlocker:ge,...xe}=e,{params:mt,search:pt,hash:gt,state:xt,mask:yt,reloadDocument:wt,...Z}=xe,Q=l.useMemo(()=>{try{return new URL(`${y}`),"external"}catch{}return"internal"},[y]),ye=B({select:g=>g.location.search,structuralSharing:!0});e={from:Je({strict:!1,select:g=>g.pathname}),...e};const R=l.useMemo(()=>n.buildLocation(e),[n,e,ye]),L=l.useMemo(()=>e.reloadDocument?!1:m??n.options.defaultPreload,[n.options.defaultPreload,m,e.reloadDocument]),we=T??n.options.defaultPreloadDelay??0,W=B({select:g=>{if(f!=null&&f.exact){if(!Ke(g.location.pathname,R.pathname,n.basepath))return!1}else{const S=V(g.location.pathname,n.basepath).split("/");if(!V(R.pathname,n.basepath).split("/").every((ze,Ee)=>ze===S[Ee]))return!1}return((f==null?void 0:f.includeSearch)??!0)&&!X(g.location.search,R.search,{partial:!(f!=null&&f.exact),ignoreUndefined:!(f!=null&&f.explicitUndefined)})?!1:f!=null&&f.includeHash?g.location.hash===R.hash:!0}}),k=l.useCallback(()=>{n.preloadRoute(e).catch(g=>{console.warn(g),console.warn(Me)})},[e,n]),be=l.useCallback(g=>{g!=null&&g.isIntersecting&&k()},[k]);if(Qe(p,be,{rootMargin:"100px"},{disabled:!!w||L!=="viewport"}),Ze(()=>{u.current||!w&&L==="render"&&(k(),u.current=!0)},[w,k,L]),Q==="external")return{...Z,ref:p,type:Q,href:y,...E&&{children:E},...z&&{target:z},...w&&{disabled:w},...D&&{style:D},...$&&{className:$},...d&&{onClick:d},...s&&{onFocus:s},...N&&{onMouseEnter:N},...I&&{onMouseLeave:I},...M&&{onTouchStart:M}};const _e=g=>{if(!w&&!rt(g)&&!g.defaultPrevented&&(!z||z==="_self")&&g.button===0){g.preventDefault(),De.flushSync(()=>{a(!0)});const S=n.subscribe("onResolved",()=>{S(),a(!1)});return n.navigate({...e,replace:r,resetScroll:b,hashScrollIntoView:o,startTransition:x,viewTransition:_,ignoreBlocker:ge})}},ee=g=>{w||L&&k()},$e=ee,Se=g=>{if(w)return;const S=g.target||{};if(L){if(S.preloadTimeout)return;S.preloadTimeout=setTimeout(()=>{S.preloadTimeout=null,k()},we)}},Te=g=>{if(w)return;const S=g.target||{};S.preloadTimeout&&(clearTimeout(S.preloadTimeout),S.preloadTimeout=null)},H=g=>S=>{var G;(G=S.persist)==null||G.call(S),g.filter(Boolean).forEach(ie=>{S.defaultPrevented||ie(S)})},K=W?re(h,{})??{}:{},q=W?{}:re(v,{}),te=[$,K.className,q.className].filter(Boolean).join(" "),ne={...D,...K.style,...q.style};return{...Z,...K,...q,href:w?void 0:R.maskedLocation?n.history.createHref(R.maskedLocation.href):n.history.createHref(R.href),ref:p,onClick:H([d,_e]),onFocus:H([s,ee]),onMouseEnter:H([N,Se]),onMouseLeave:H([I,Te]),onTouchStart:H([M,$e]),disabled:!!w,target:z,...Object.keys(ne).length&&{style:ne},...te&&{className:te},...w&&{role:"link","aria-disabled":!0},...W&&{"data-status":"active","aria-current":"page"},...i&&{"data-transitioning":"transitioning"}}}function nt(e){return l.forwardRef(function(n,i){return ve.jsx(it,{...n,_asChild:e,ref:i})})}const it=l.forwardRef((e,t)=>{const{_asChild:n,...i}=e,{type:a,ref:u,...p}=tt(i,t),h=typeof i.children=="function"?i.children({isActive:p["data-status"]==="active"}):i.children;return typeof n>"u"&&delete p.disabled,l.createElement(n||"a",{...p,ref:u},h)});function rt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ot=()=>{const e=l.useContext(ke);if(!e)throw new Error("useScreenWidth must be used within an ProviderScreenWidth");return e},at=J.div`
  display: contents;
`,st=c`
  ${e=>lt({...He[e.$size??"medium"]})};
`,lt=e=>c`
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
`,ut=J(Ce.div)`
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
  ${st};
`,A=l.memo(e=>e.isDisabled?O.jsxDEV(O.Fragment,{children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:17,columnNumber:32},void 0):O.jsxDEV(ct,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:19,columnNumber:10},void 0)),ct=e=>{const[t,n]=l.useState(!1),[i,a]=l.useState(null),[u,p]=l.useState(!1),h=l.useMemo(()=>e.padding??ft,[e.padding]),v=l.useRef(null),f=l.useRef(null),y=l.useCallback(()=>{n(!0)},[]);return l.useEffect(()=>{if(!t)return;const m=(T,o)=>{var $;const r=v.current,x=($=f.current)==null?void 0:$.children[0];if(!r||!x)return;const b=r.getBoundingClientRect(),_=x.getBoundingClientRect(),E=T.clientX,z=T.clientY,w=E>=b.left-o&&E<=b.right+o&&z>=b.top-o&&z<=b.bottom+o,D=E>=_.left-o&&E<=_.right+o&&z>=_.top-o&&z<=_.bottom+o;!w&&!D&&n(!1)};return document.addEventListener("mousemove",T=>m(T,h)),()=>{document.removeEventListener("mousemove",T=>m(T,h))}},[h,t]),l.useLayoutEffect(()=>{var $;if(!t||!u){a(null);return}const m=v.current,T=($=f.current)==null?void 0:$.children[0];if(!m||!T)return;const o=m.getBoundingClientRect(),r=T.getBoundingClientRect(),x=[e.placement??le,"top","right","left","bottom-start","bottom-end","top-start","top-end","right-start","right-end","left-start","left-end"],b=d=>{const s={};switch(d){case"top":s.left=r.left+r.width/2-o.width/2,s.top=r.top-o.height-h;break;case"top-start":s.left=r.left,s.top=r.top-o.height-h;break;case"top-end":s.left=r.right-o.width,s.top=r.top-o.height-h;break;case"right":s.left=r.right+h,s.top=r.top+r.height/2-o.height/2;break;case"right-start":s.left=r.right+h,s.top=r.top;break;case"right-end":s.left=r.right+h,s.top=r.bottom-o.height;break;case"bottom":s.left=r.left+r.width/2-o.width/2,s.top=r.bottom+h;break;case"bottom-start":s.left=r.left,s.top=r.bottom+h;break;case"bottom-end":s.left=r.right-o.width,s.top=r.bottom+h;break;case"left":s.left=r.left-o.width-h,s.top=r.top+r.height/2-o.height/2;break;case"left-start":s.left=r.left-o.width-h,s.top=r.top;break;case"left-end":s.left=r.left-o.width-h,s.top=r.bottom-o.height;break}return{left:Math.round(Number(s.left)||0),top:Math.round(Number(s.top)||0),placement:d}},_=d=>{const{left:s,top:N}=d;return s>=0&&N>=0&&s+o.width<=window.innerWidth&&N+o.height<=window.innerHeight},E=(d,s)=>!(d.right<=s.left||d.left>=s.right||d.bottom<=s.top||d.top>=s.bottom),z=d=>{const s={left:d.left,top:d.top,right:d.left+o.width,bottom:d.top+o.height,width:o.width,height:o.height};return!E(s,r)},w=d=>_(d)&&z(d),D=x.map(b).find(w)||b(le);a({top:D.top,left:D.left})},[t,h,e.placement,u]),l.useEffect(()=>{t&&p(!0)},[t]),O.jsxDEV(O.Fragment,{children:[O.jsxDEV(at,{ref:f,onMouseEnter:y,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:207,columnNumber:7},void 0),u&&Re.createPortal(O.jsxDEV(je,{onExitComplete:()=>{t||p(!1)},children:t&&O.jsxDEV(ut,{ref:v,$size:e.size,$maxHeight:e.maxHeight,$maxWidth:e.maxWidth,$whiteSpace:e.whiteSpace,$placement:e.placement??"bottom",$visible:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{top:i?i.top:"auto",left:i?i.left:"auto",visibility:i?"visible":"hidden",pointerEvents:i?"auto":"none"},transition:{type:"spring",duration:dt},children:O.jsxDEV(ht,{sx:e.sxTypography??{default:{size:14}},children:e.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:239,columnNumber:17},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:220,columnNumber:15},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:212,columnNumber:11},void 0),document.body)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/tooltip/component.tsx",lineNumber:206,columnNumber:5},void 0)};A.displayName="Tooltip";try{A.displayName="Tooltip",A.__docgenInfo={description:"",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"number"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"WhiteSpace"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},sxTypography:{defaultValue:null,description:"",name:"sxTypography",required:!1,type:{name:"TypographySXProps"}}}}}catch{}const ft=10,dt=.3,le="bottom-start",P=e=>{const{screenActual:t}=ot(),n=l.useMemo(()=>({$sx:e.sx,className:e.className,style:e.style,onClick:e.onClick?e.onClick:()=>{}}),[e.sx,e.className,e.style,e.onClick]),i=l.useMemo(()=>{var a,u;return((a=e.sx)==null?void 0:a[t])??((u=e.sx)==null?void 0:u.default)},[e.sx,t]);return i&&"variant"in i?i.variant==="h7"||i.variant==="h8"||i.variant==="h9"?O.jsxDEV(U,{ref:e.ref,as:e.isAnchor?"a":e.isParagraph?"p":"span",href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:26,columnNumber:9},void 0):O.jsxDEV(U,{ref:e.ref,as:e.isAnchor?"a":e.isParagraph?"p":i.variant,href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:38,columnNumber:9},void 0):O.jsxDEV(U,{ref:e.ref,as:e.isAnchor?"a":e.isParagraph?"p":"span",href:e.href,...n,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:52,columnNumber:5},void 0)},ht=e=>O.jsxDEV(P,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:65,columnNumber:10},void 0),pe=e=>O.jsxDEV(P,{isAnchor:!0,...e,ref:e.ref,href:e.href},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:69,columnNumber:10},void 0);nt(pe);const Y=l.memo(e=>{const[t,n]=l.useState(!1),i=l.useRef(null);return l.useEffect(()=>{const a=()=>{i.current&&n(i.current.scrollWidth>i.current.clientWidth)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[e.children]),O.jsxDEV(A,{isDisabled:!t,content:e.children,...e.tooltip,children:O.jsxDEV(P,{ref:i,...e.typography,style:{position:"relative"},children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:90,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/typography/component.tsx",lineNumber:89,columnNumber:5},void 0)});Y.displayName="TypographyTooltip";P.displayName="TypographyWithRef";pe.displayName="TypographySizeIsAnchor";try{Y.displayName="TypographyTooltip",Y.__docgenInfo={description:"",displayName:"TypographyTooltip",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},isParagraph:{defaultValue:null,description:"",name:"isParagraph",required:!1,type:{name:"boolean"}},isAnchor:{defaultValue:null,description:"",name:"isAnchor",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement | HTMLAnchorElement | HTMLHeadingElement | null>"}},sx:{defaultValue:null,description:"",name:"sx",required:!0,type:{name:"TypographySXProps"}}}}}catch{}export{ht as T,A as a,Rt as b,ot as u};
