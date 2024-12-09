import{r as o}from"./index-DJO9vBfz.js";import{g as x}from"./index-DjKJqAo0.js";/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let c=typeof window<"u"?o.useLayoutEffect:o.useEffect,p=e=>e&&!Array.isArray(e)&&typeof e=="object",u=[],S={},a=x;const g=(e,t=u)=>{let r=S;p(e)?(r=e,e=null,t="dependencies"in r?r.dependencies:u):p(t)&&(r=t,t="dependencies"in r?r.dependencies:u),e&&typeof e!="function"&&console.warn("First parameter must be a function or config object");const{scope:f,revertOnUpdate:m}=r,s=o.useRef(!1),n=o.useRef(a.context(()=>{},f)),y=o.useRef(d=>n.current.add(null,d)),i=t&&t.length&&!m;return c(()=>{if(e&&n.current.add(e,f),!i||!s.current)return()=>n.current.revert()},t),i&&c(()=>(s.current=!0,()=>n.current.revert()),u),{context:n.current,contextSafe:y.current}};g.register=e=>{a=e};g.headless=!0;export{g as u};
