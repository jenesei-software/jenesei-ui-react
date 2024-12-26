import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{r as s}from"./index-DJO9vBfz.js";import{g as d}from"./index-DjKJqAo0.js";import{o as j}from"./styled-components.browser.esm-CCP31c1y.js";import{P as l}from"./context-permission-Dt18qBgr.js";import{b as P}from"./theme-3X06DcYZ.js";import{J as S}from"./theme.global-3OPldRDj.js";/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let m=typeof window<"u"?s.useLayoutEffect:s.useEffect,p=e=>e&&!Array.isArray(e)&&typeof e=="object",i=[],v={},x=d;const f=(e,r=i)=>{let t=v;p(e)?(t=e,e=null,r="dependencies"in t?t.dependencies:i):p(r)&&(t=r,r="dependencies"in t?t.dependencies:i),e&&typeof e!="function"&&console.warn("First parameter must be a function or config object");const{scope:u,revertOnUpdate:g}=t,a=s.useRef(!1),o=s.useRef(x.context(()=>{},u)),h=s.useRef(y=>o.current.add(null,y)),c=r&&r.length&&!g;return m(()=>{if(e&&o.current.add(e,u),!c||!a.current)return()=>o.current.revert()},r),c&&m(()=>(a.current=!0,()=>o.current.revert()),i),{context:o.current,contextSafe:h.current}};f.register=e=>{x=e};f.headless=!0;d.registerPlugin(f);const L={decorators:[e=>n.jsx(l,{serviceWorkerPath:"/service-worker.js",children:n.jsxs(j,{theme:P,children:[n.jsx(S,{}),n.jsx(e,{})]})})],parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}};export{L as default};
