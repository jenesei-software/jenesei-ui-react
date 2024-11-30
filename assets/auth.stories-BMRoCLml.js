import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r as a}from"./index-DJO9vBfz.js";import{g as d}from"./index-DjKJqAo0.js";import{b as w}from"./typography--gcTkdSy.js";import{d as c}from"./styled-components.browser.esm-CCP31c1y.js";import"./index-rCr475hU.js";import"./theme-DVhjlqOZ.js";/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/let j=typeof window<"u"?a.useLayoutEffect:a.useEffect,b=e=>e&&!Array.isArray(e)&&typeof e=="object",f=[],A={},L=d;const y=(e,r=f)=>{let i=A;b(e)?(i=e,e=null,r="dependencies"in i?i.dependencies:f):b(r)&&(i=r,r="dependencies"in i?i.dependencies:f),e&&typeof e!="function"&&console.warn("First parameter must be a function or config object");const{scope:n,revertOnUpdate:s}=i,l=a.useRef(!1),o=a.useRef(L.context(()=>{},n)),u=a.useRef(C=>o.current.add(null,C)),p=r&&r.length&&!s;return j(()=>{if(e&&o.current.add(e,n),!p||!l.current)return()=>o.current.revert()},r),p&&j(()=>(l.current=!0,()=>o.current.revert()),f),{context:o.current,contextSafe:u.current}};y.register=e=>{L=e};y.headless=!0;const x=e=>{const r=a.useRef(null),i=a.useRef(null);return y(()=>{const n=r.current,s=i.current;if(n&&s){const l=getComputedStyle(n),o=l.width,u=l.height;d.set(s,{opacity:0,pointerEvents:"none"}),d.fromTo(n,{width:"100dvw",height:"100dvh",position:"absolute"},{width:o,height:u,duration:2,delay:1,ease:"power2.out",onComplete:()=>{d.to(n,{position:"relative"}),d.to(s,{opacity:1,pointerEvents:"auto",duration:.5,ease:"power2.out",onComplete:()=>{d.set(n,{clearProps:"all"})}})}})}},{scope:r}),t.jsxs(E,{style:e.style,children:[t.jsxs(I,{ref:r,children:[t.jsx(P,{src:e.backUrl,webp:e.backUrlWebp}),t.jsxs(F,{width:"283",height:"62",viewBox:"0 0 283 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsxs("g",{filter:"url(#filter0_d_2171_4468)",children:[t.jsx("path",{d:"M30.6727 25.6721C34.3962 29.2565 34.735 32.5572 31.5996 34.6994C28.8582 36.5722 15.3325 38.6694 11.1094 39.3242C10.5806 39.4061 10.1977 39.4655 10 39.499C10.3242 40.0713 10.6703 40.6296 11.0372 41.1726C14.6829 46.5691 20.3804 50.4655 27.0102 51.7428C27.0102 51.6063 29.7637 50.9302 30.9347 50.6795C40.2451 48.6862 47.4571 44.2447 50.0364 38.916C50.7696 37.4006 50.8584 36.9705 50.8654 34.893C50.8726 32.7965 50.7908 32.3918 50.0359 30.796C49.4647 29.5879 48.6031 28.4103 47.3257 27.0908C43.6315 23.275 39.462 21.2913 29.0281 18.384C22.9182 16.6817 19.7514 15.1133 20.1776 14.0011C20.3874 13.4534 22.6002 12.5612 24.7621 12.1523C28.239 11.4945 32.2515 11.243 39.7552 11.212C46.8356 11.183 47.1433 11.1624 45.1951 10.8478C41.6753 10.2797 33.5715 9.87492 28.9344 10.0354C19.9737 10.3459 14.3513 12.1567 14.3513 14.7323C14.3513 16.2366 16.7825 17.9927 22.6108 20.6976C27.125 22.7927 28.6755 23.7493 30.6727 25.6721Z",fill:"white"}),t.jsx("path",{d:"M87.7495 13.9215V37.7565C87.7495 40.5606 86.7146 42.8974 84.6449 44.7668C82.5752 46.6363 79.8712 47.571 76.533 47.571C73.3283 47.571 70.691 46.6363 68.6213 44.7668C66.5516 42.8974 65.2998 40.5106 64.8658 37.6063L70.7244 36.1041C70.8913 37.84 71.4755 39.2587 72.477 40.3604C73.5119 41.462 74.8305 42.0128 76.4328 42.0128C78.0018 42.0128 79.2536 41.5788 80.1883 40.7109C81.1564 39.8095 81.6405 38.6412 81.6405 37.2057V13.9215H87.7495Z",fill:"white"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M97.3354 36.7551C97.469 38.5911 98.0365 39.9931 99.0379 40.9612C100.039 41.9293 101.408 42.4134 103.144 42.4134C104.446 42.4134 105.531 42.0962 106.399 41.462C107.3 40.7943 107.868 39.893 108.101 38.758L114.01 39.6593C113.442 42.163 112.174 44.1326 110.204 45.568C108.268 47.0035 105.915 47.7212 103.144 47.7212C99.4051 47.7212 96.4675 46.6029 94.331 44.3662C92.2279 42.0962 91.1764 38.9917 91.1764 35.0525C91.1764 31.1802 92.1945 28.1257 94.2309 25.8891C96.2672 23.6191 99.0546 22.4841 102.593 22.4841C106.132 22.4841 108.919 23.6191 110.955 25.8891C112.992 28.1257 114.01 31.08 114.01 34.7521V36.7551H97.3354ZM107.851 32.649H97.4356C97.6359 31.08 98.17 29.8783 99.0379 29.0437C99.9393 28.1758 101.124 27.7418 102.593 27.7418C104.095 27.7418 105.347 28.2092 106.349 29.1439C107.35 30.0452 107.851 31.2136 107.851 32.649Z",fill:"white"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M148.094 36.7551C148.227 38.5911 148.795 39.9931 149.796 40.9612C150.798 41.9293 152.166 42.4134 153.902 42.4134C155.204 42.4134 156.289 42.0962 157.157 41.462C158.058 40.7943 158.626 39.893 158.859 38.758L164.768 39.6593C164.201 42.163 162.932 44.1326 160.963 45.568C159.026 47.0035 156.673 47.7212 153.902 47.7212C150.163 47.7212 147.226 46.6029 145.089 44.3662C142.986 42.0962 141.935 38.9917 141.935 35.0525C141.935 31.1802 142.953 28.1257 144.989 25.8891C147.025 23.6191 149.813 22.4841 153.351 22.4841C156.89 22.4841 159.677 23.6191 161.714 25.8891C163.75 28.1257 164.768 31.08 164.768 34.7521V36.7551H148.094ZM158.609 32.649H148.194C148.394 31.08 148.928 29.8783 149.796 29.0437C150.697 28.1758 151.883 27.7418 153.351 27.7418C154.854 27.7418 156.105 28.2092 157.107 29.1439C158.108 30.0452 158.609 31.2136 158.609 32.649Z",fill:"white"}),t.jsx("path",{d:"M186.741 40.6608C186.741 42.7973 185.923 44.5332 184.288 45.8685C182.685 47.2038 180.582 47.8714 177.978 47.8714C175.274 47.8714 172.971 47.1537 171.068 45.7182C169.165 44.2828 167.93 42.1797 167.363 39.409L173.171 38.6078C173.805 41.512 175.274 42.9642 177.578 42.9642C178.512 42.9642 179.247 42.7305 179.781 42.2632C180.348 41.7958 180.632 41.1782 180.632 40.4104C180.632 39.9765 180.532 39.6092 180.332 39.3088C180.131 38.975 179.798 38.6912 179.33 38.4576C178.863 38.1905 178.446 37.9902 178.078 37.8567C177.745 37.7231 177.21 37.5562 176.476 37.3559C176.309 37.2892 176.176 37.2391 176.075 37.2057C175.074 36.9387 174.256 36.6883 173.622 36.4546C172.988 36.2209 172.253 35.8871 171.419 35.4531C170.584 34.9858 169.916 34.5184 169.416 34.0511C168.948 33.5503 168.531 32.8994 168.164 32.0982C167.83 31.297 167.663 30.4124 167.663 29.4443C167.663 27.3078 168.431 25.622 169.966 24.3869C171.535 23.1183 173.639 22.4841 176.276 22.4841C181.717 22.4841 185.122 25.0044 186.491 30.0452L180.632 31.1969C180.065 28.6598 178.763 27.3913 176.726 27.3913C175.792 27.3913 175.057 27.5916 174.523 27.9922C173.989 28.3928 173.722 28.9269 173.722 29.5945C173.722 30.3623 174.039 30.9465 174.673 31.3471C175.341 31.7477 176.342 32.1483 177.678 32.5489C177.778 32.5822 177.945 32.6323 178.179 32.6991C178.946 32.9328 179.531 33.1164 179.931 33.2499C180.332 33.3834 180.883 33.6004 181.584 33.9009C182.318 34.1679 182.869 34.435 183.236 34.702C183.637 34.9357 184.087 35.2528 184.588 35.6534C185.122 36.054 185.523 36.488 185.79 36.9553C186.057 37.4227 186.274 37.9735 186.441 38.6078C186.641 39.242 186.741 39.9264 186.741 40.6608Z",fill:"white"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M195.527 36.7551C195.66 38.5911 196.228 39.9931 197.229 40.9612C198.231 41.9293 199.599 42.4134 201.335 42.4134C202.637 42.4134 203.722 42.0962 204.59 41.462C205.491 40.7943 206.059 39.893 206.293 38.758L212.201 39.6593C211.634 42.163 210.365 44.1326 208.396 45.568C206.459 47.0035 204.106 47.7212 201.335 47.7212C197.596 47.7212 194.659 46.6029 192.522 44.3662C190.419 42.0962 189.368 38.9917 189.368 35.0525C189.368 31.1802 190.386 28.1257 192.422 25.8891C194.458 23.6191 197.246 22.4841 200.784 22.4841C204.323 22.4841 207.11 23.6191 209.147 25.8891C211.183 28.1257 212.201 31.08 212.201 34.7521V36.7551H195.527ZM206.042 32.649H195.627C195.827 31.08 196.361 29.8783 197.229 29.0437C198.131 28.1758 199.316 27.7418 200.784 27.7418C202.287 27.7418 203.538 28.2092 204.54 29.1439C205.541 30.0452 206.042 31.2136 206.042 32.649Z",fill:"white"}),t.jsx("path",{d:"M215.597 23.6358H221.656V46.6696H215.597V23.6358Z",fill:"white"}),t.jsx("path",{d:"M215.046 17.3766C215.046 16.4418 215.397 15.624 216.098 14.9229C216.799 14.2219 217.616 13.8714 218.551 13.8714C219.519 13.8714 220.337 14.2219 221.005 14.9229C221.706 15.624 222.056 16.4418 222.056 17.3766C222.056 18.3446 221.706 19.1792 221.005 19.8802C220.337 20.5813 219.519 20.9318 218.551 20.9318C217.616 20.9318 216.799 20.5813 216.098 19.8802C215.397 19.1792 215.046 18.3446 215.046 17.3766Z",fill:"white"}),t.jsx("path",{d:"M236.428 13.8714H242.487V46.6696H236.428V13.8714Z",fill:"white"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M246.697 46.6696V13.9215H258.364C262.404 13.9215 265.692 15.4571 268.229 18.5282C270.766 21.5994 272.035 25.5719 272.035 30.4458C272.035 35.2862 270.766 39.2087 268.229 42.2131C265.725 45.1841 262.437 46.6696 258.364 46.6696H246.697ZM257.814 40.9112H252.756V19.5798H257.814C260.451 19.5798 262.47 20.4978 263.873 22.3338C265.275 24.1699 265.976 26.7904 265.976 30.1954C265.976 33.6338 265.258 36.2877 263.822 38.1571C262.42 39.9931 260.417 40.9112 257.814 40.9112Z",fill:"white"}),t.jsx("path",{d:"M132.478 32.2985C132.478 30.9298 132.06 29.8449 131.226 29.0437C130.425 28.2092 129.373 27.7919 128.071 27.7919C126.736 27.7919 125.634 28.2258 124.766 29.0938C123.898 29.9283 123.464 31.03 123.464 32.3986V46.6696H117.406V23.6358H123.464L121.912 29.5945L122.797 29.9086C123.125 28.2513 123.799 26.7779 124.816 25.4885C126.352 23.5523 128.322 22.5842 130.725 22.5842C132.928 22.5842 134.781 23.4688 136.283 25.2381C137.786 27.0074 138.537 29.1772 138.537 31.7477V46.6696H132.478V32.2985Z",fill:"white"})]}),t.jsx("defs",{children:t.jsxs("filter",{id:"filter0_d_2171_4468",x:"0",y:"0",width:"282.034",height:"61.7427",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[t.jsx("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),t.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.jsx("feOffset",{}),t.jsx("feGaussianBlur",{stdDeviation:"5"}),t.jsx("feComposite",{in2:"hardAlpha",operator:"out"}),t.jsx("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"}),t.jsx("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_2171_4468"}),t.jsx("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_2171_4468",result:"shape"})]})})]}),t.jsxs(G,{children:[t.jsx(w,{variant:"h2",weight:700,color:"whiteStandard",children:"Universal account"}),t.jsx(w,{variant:"h5",weight:400,color:"whiteStandard",children:"Safety is our advantage"})]})]}),t.jsx($,{ref:i,children:e.children})]})};try{x.displayName="AuthLayout",x.__docgenInfo={description:"",displayName:"AuthLayout",props:{backUrl:{defaultValue:null,description:"",name:"backUrl",required:!0,type:{name:"string"}},backUrlWebp:{defaultValue:null,description:"",name:"backUrlWebp",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}var M={},g={};Object.defineProperty(g,"__esModule",{value:!0});var H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=void 0;g.isWebpSupported=function(){if(typeof h<"u")return h;var e=(typeof document>"u"?"undefined":H(document))==="object"?document.createElement("canvas"):{};return h=e.toDataURL("image/webp").indexOf("data:image/webp")===0,h};Object.defineProperty(M,"__esModule",{value:!0});var R=Object.assign||function(e){for(var r,i=1;i<arguments.length;i++)for(var n in r=arguments[i],r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},V=a,k=W(V),U=g;function W(e){return e&&e.__esModule?e:{default:e}}function Z(e,r){var i={};for(var n in e)0<=r.indexOf(n)||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}var O=function(e){var r=e.src,i=e.webp,n=e.alt,s=e.title,l=e.style,o=e.className,u=Z(e,["src","webp","alt","title","style","className"]),p=(0,U.isWebpSupported)(),C=r;return p===!0&&(C=i),k.default.createElement("img",R({},u,{src:C,alt:n,title:s,style:l,className:o}))},B=M.default=O;const E=c.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  flex-direction: row;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    flex-direction: column;
  }
`,P=c(B)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
  left: 0;
  top: 0;
  background-color: ${e=>e.theme.palette.black100};
  z-index: 0;
`,I=c.div`
  position: relative;
  flex-grow: 1;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 100px;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    height: 170px;
    width: 100%;
    justify-content: center;
    padding: 0px 100px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    align-items: center;
    justify-content: center;
  }
`,$=c.div`
  flex-grow: 1;
  width: 50%;
  height: 100%;
  padding: 80px;
  display: flex;
  align-items: center;
  overflow-y: auto;
  justify-content: flex-start;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: calc(100% - 170px);
    padding: 100px;
  }
  @media (max-width: ${e=>e.theme.screens.mobile.width}) {
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
  }
`,F=c.svg`
  z-index: 1;
`,G=c.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${e=>e.theme.screens.tablet.width}) {
    display: none;
  }
`,Q={component:x,title:"Layout/Auth"},m={args:{backUrl:"https://id.jenesei.ru/pictures/auth-back.gif",backUrlWebp:"https://id.jenesei.ru/pictures/auth-back.webp",children:t.jsx(t.Fragment,{})}};var v,_,S;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    backUrl: 'https://id.jenesei.ru/pictures/auth-back.gif',
    backUrlWebp: 'https://id.jenesei.ru/pictures/auth-back.webp',
    children: <></>
  }
}`,...(S=(_=m.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const X=["Auth"];export{m as Auth,X as __namedExportsOrder,Q as default};
