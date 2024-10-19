import{j as r,d as l,l as S}from"./styled-components.browser.esm-028b5a71.js";import{r as n}from"./index-ff614419.js";import{B as t}from"./button-b8e4e48f.js";import{S as c,I as P}from"./icon.styles-0c25b35e.js";import{b as A}from"./typography-193d1fd6.js";import"./modal-loading.styles-b2147eb5.js";import"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./typography.functions-dcbec177.js";import"./index-4da86cf0.js";const i=e=>{const a=n.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),s=n.useCallback(o=>{e.onClickIcon&&(o.stopPropagation(),e.onClickIcon())},[e]);return r.jsx(c,{...e.wrapperProps,children:r.jsxs(L,{children:[r.jsxs(_,{onClick:a,children:[r.jsx(q,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary}),e.isAccordionIcon&&r.jsx(M,{$expanded:e.expanded,onClick:s,name:"ArrowDown",primaryColor:"black100",type:"curved",size:"large"})]}),r.jsx(V,{$expanded:e.expanded,children:e.accordionDetails})]})})};try{i.displayName="Accordion",i.__docgenInfo={description:"",displayName:"Accordion",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"FlexShortStylesProps"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const L=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,_=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,q=l.div`
  width: 100%;

  ${e=>e.$isAccordionIcon&&S`
      width: calc(100% - 26px);
    `}
`,V=l.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  transition-property: max-height, opacity, height;
  transition-duration: 0.3s;
  transition-timing-function: easy;
`,M=l(P)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?S`
          transform: rotate(180deg);
        `:S`
          transform: rotate(0deg);
        `}
`,Q={component:i,title:"Accordion"},F=e=>{const[a,s]=n.useState(!1),[o,g]=n.useState(!1),[p,f]=n.useState(!1),u=n.useCallback(()=>{s(d=>!d)},[]),v=n.useCallback(()=>{u()},[u]),T=n.useCallback(()=>{u()},[u]),m=n.useCallback(()=>{g(d=>!d)},[]),E=n.useCallback(()=>{m()},[m]),z=n.useCallback(()=>{m()},[m]),x=n.useCallback(()=>{f(d=>!d)},[]),D=n.useCallback(()=>{x()},[x]),$=n.useCallback(()=>{x()},[x]);return r.jsx(i,{...e,expanded:a,triggerUpdate:[a,o,p],onClickSummary:v,onClickIcon:T,accordionDetails:r.jsxs(c,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(i,{accordionSummary:r.jsx(t,{customStyles:{justifyContent:"space-between"},iconTurn:o?180:0,genre:"productBorder",size:"medium",width:"100%",iconName:"Folder",children:"Show more"}),accordionDetails:r.jsxs(c,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]}),expanded:o,onClickSummary:E,onClickIcon:z,wrapperProps:{p:"0px",w:"100%"}}),r.jsx(i,{accordionSummary:r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"grayBorder",size:"medium",width:"100%",children:"Show more more"}),accordionDetails:r.jsxs(c,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]}),expanded:p,onClickSummary:D,onClickIcon:$,wrapperProps:{p:"0px",w:"100%"}})]})})},O=e=>{const[a,s]=n.useState(!1),o=n.useCallback(()=>{s(f=>!f)},[]),g=n.useCallback(()=>{o()},[o]),p=n.useCallback(()=>{o()},[o]);return r.jsx(i,{...e,expanded:a,triggerUpdate:[a],onClickSummary:g,onClickIcon:p,accordionDetails:r.jsxs(c,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),r.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]})})},y={render:e=>r.jsx(O,{...e}),args:{isAccordionIcon:!0,accordionSummary:r.jsx(c,{p:"10px",w:"200px",style:{cursor:"pointer"},children:r.jsx(A,{variant:"h4",children:"Show"})}),wrapperProps:{p:"10px",w:"200px"}}},h={render:e=>r.jsx(F,{...e}),args:{isAccordionIcon:!0,accordionSummary:r.jsx(c,{p:"10px",w:"200px",style:{cursor:"pointer"},children:r.jsx(A,{variant:"h4",children:"MultiLevel"})}),wrapperProps:{p:"10px",w:"200px"}}};var C,k,w;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <OneLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack p="10px" w="200px" style={{
      cursor: 'pointer'
    }}>
        <Typography variant="h4">Show</Typography>
      </Stack>,
    wrapperProps: {
      p: '10px',
      w: '200px'
    }
  }
}`,...(w=(k=y.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,b,I;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <MultiLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack p="10px" w="200px" style={{
      cursor: 'pointer'
    }}>
        <Typography variant="h4">MultiLevel</Typography>
      </Stack>,
    wrapperProps: {
      p: '10px',
      w: '200px'
    }
  }
}`,...(I=(b=h.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const Y=["OneLevel","MultiLevel"];export{h as MultiLevel,y as OneLevel,Y as __namedExportsOrder,Q as default};
