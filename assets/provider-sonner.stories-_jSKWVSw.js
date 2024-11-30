import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{B as N}from"./button-DS29UrEA.js";import{S as P}from"./stack-Db-lxqry.js";import{r as l}from"./index-DJO9vBfz.js";import{d as m}from"./styled-components.browser.esm-CCP31c1y.js";import"./typography--gcTkdSy.js";import{g as A}from"./typography.functions-_Xr-RK7k.js";import"./icon.styles-ke4R2kUL.js";import"./theme-DVhjlqOZ.js";import"./base.styles-lMUunFc3.js";import"./theme.global-B2IBlToM.js";import"./loading.styles-C9X5Vsl2.js";import"./index-rCr475hU.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function O(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let _;const R=new Uint8Array(16);function L(){if(!_){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");_=crypto.getRandomValues.bind(crypto)}return _(R)}const $=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),k={randomUUID:$};function U(e,t,y){if(k.randomUUID&&!t&&!e)return k.randomUUID();e=e||{};const i=e.random||(e.rng||L)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,O(i)}const H=l.createContext(null),h=e=>{const t=l.useMemo(()=>"clickOnButton",[]),y=l.useMemo(()=>({text:"Undo",onClick:()=>{}}),[]),i=l.useMemo(()=>e.defaultHidingTime,[e.defaultHidingTime]),[V,D]=l.useState([]),p=l.useCallback(n=>{D(o=>{const s=o.filter(u=>u.id!==n);return s.forEach((u,f)=>{u.index=f}),s})},[]),B=l.useCallback(n=>{const o=n.id??U(),s=n.hidingTime??i,u={...n,id:o};D(f=>{const c=[...f];if(n.index!==void 0){const x=c.findIndex(d=>d.index===n.index);if(x!==-1)for(let d=c.length-1;d>=x;d--)c[d].index=(c[d].index??d)+1}const E=n.index??0;return c.splice(E,0,u),c.forEach((x,d)=>{x.index=d}),c}),s!==void 0&&setTimeout(()=>{p(o)},s)},[i,p]),q=l.useCallback((n,o)=>{o?o===t&&p(n):p(n)},[t,p]);return a.jsxs(H.Provider,{value:{toast:B,removeToast:p,contentHistory:V},children:[a.jsx(v,{children:V.map(n=>{const o=n.title||e.defaultTitle,s=n.description||e.defaultDescription,u=n.button||e.defaultButton||y,f=u.text;return a.jsxs(T,{onClick:()=>q(n.id,"clickOnSonner"),children:[a.jsxs(S,{children:[o&&a.jsx(b,{children:o}),s&&a.jsx(w,{children:s})]}),u&&a.jsx(C,{children:a.jsx(N,{genre:"black",size:"small",onClick:()=>q(n.id,"clickOnButton"),children:f})})]},n.id)})}),e.children]})};try{h.displayName="ProviderSonner",h.__docgenInfo={description:"",displayName:"ProviderSonner",props:{defaultHidingMode:{defaultValue:null,description:"",name:"defaultHidingMode",required:!1,type:{name:"enum",value:[{value:'"clickOnSonner"'},{value:'"clickOnButton"'}]}},defaultHidingTime:{defaultValue:null,description:"",name:"defaultHidingTime",required:!1,type:{name:"number"}},defaultDescription:{defaultValue:null,description:"",name:"defaultDescription",required:!1,type:{name:"ReactNode"}},defaultTitle:{defaultValue:null,description:"",name:"defaultTitle",required:!1,type:{name:"ReactNode"}},defaultButton:{defaultValue:null,description:"",name:"defaultButton",required:!1,type:{name:"false | { text?: ReactNode; onClick?: (() => void); }"}}}}}catch{}const M=()=>{const e=l.useContext(H);if(!e)throw new Error("useSonnerContext must be used within an ProviderSonner");return e},v=m.div`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 20px;
`,T=m.div`
  background: ${e=>e.theme.palette.whiteStandard};
  border-radius: 12px;
  border-style: solid;
  border-color: ${e=>e.theme.palette.grayKaren};
  border-width: 1px;
  padding: 16px 20px 16px 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  min-width: 320px;
  position: relative;
  box-shadow: ${e=>e.theme.effects.sonner.background};
  overflow: hidden;
`,S=m.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  width: 233px;
  position: relative;
  overflow: hidden;
`,b=m.div`
  ${A(12,700,"Inter")}
  color: ${e=>e.theme.palette.black100};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,w=m.div`
  ${A(8,400,"Inter")}
  color: ${e=>e.theme.palette.grayPatricia};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,C=m.div``;try{v.displayName="SonnerLayout",v.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="SonnerWrapper",T.__docgenInfo={description:"",displayName:"SonnerWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="SonnerContent",S.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="SonnerContentTitle",b.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="SonnerContentDescription",w.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="SonnerButtonWrapper",C.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const oe={component:h,title:"Provider/Sonner",tags:["autodocs"]},F=e=>a.jsx(h,{...e,children:a.jsx(z,{})}),z=e=>{const{toast:t}=M(),y=()=>{const i=U();t({title:"Чебурашка",description:i})};return a.jsxs(P,{p:"12px",gap:"8px",children:["Test",a.jsx(N,{onClick:y,genre:"product",size:"medium",children:"Check"})]})},g={render:e=>a.jsx(F,{...e}),args:{}};var I,W,j;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {}
}`,...(j=(W=g.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const de=["Default"];export{g as Default,de as __namedExportsOrder,oe as default};
