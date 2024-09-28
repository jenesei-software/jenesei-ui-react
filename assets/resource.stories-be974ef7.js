import{j as e,d as t}from"./styled-components.browser.esm-028b5a71.js";import{b as m}from"./jenesei-web-id-api.es-d76e2ebe.js";import{D as c}from"./divider.styles-a21ee683.js";import{b as a}from"./typography-62fdeef1.js";import"./index-ff614419.js";import"./index-4da86cf0.js";import"./theme-8055a2b2.js";const o=()=>{const{data:r}=m({retry:!1});return e.jsxs(x,{children:[e.jsx(a,{weight:700,variant:"h6",color:"graySarah",children:"Jenesei Resources"}),e.jsx(c,{height:"2px",color:"graySarah"}),e.jsx(u,{children:r==null?void 0:r.map((i,l)=>e.jsxs(h,{children:[e.jsx(a,{weight:700,variant:"h6",color:"graySarah",children:i.resourceName}),i.isActive&&e.jsx(g,{children:e.jsx(a,{weight:400,variant:"h6",color:"graySarah",children:"Status: Active"})}),e.jsx(c,{height:"1px",color:"graySarah"})]},l))})]})};try{o.displayName="ModuleResource",o.__docgenInfo={description:"",displayName:"ModuleResource",props:{}}}catch{}const x=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,u=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 48px 72px;

  @media (max-width: ${r=>r.theme.screens.tablet.width}) {
    padding: 30px 54px;
  }

  @media (max-width: ${r=>r.theme.screens.mobile.width}) {
    padding: 16px 22px;
  }
`,h=t.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  justify-content: flex-start;
  flex-direction: column;
`,g=t.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,S={component:o,title:"Module/Resource"},s={args:{}};var p,d,n;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(n=(d=s.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const w=["Resource"];export{s as Resource,w as __namedExportsOrder,S as default};
