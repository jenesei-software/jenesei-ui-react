import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{B as o}from"./button-DS29UrEA.js";import{S as i}from"./stack-Db-lxqry.js";import{b as I}from"./typography--gcTkdSy.js";import{d as l,l as S}from"./styled-components.browser.esm-CCP31c1y.js";import{I as P}from"./icon.styles-ke4R2kUL.js";import"./loading.styles-C9X5Vsl2.js";import"./theme-DVhjlqOZ.js";import"./theme.global-B2IBlToM.js";import"./base.styles-lMUunFc3.js";import"./typography.functions-_Xr-RK7k.js";import"./index-rCr475hU.js";const c=e=>{const a=n.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),s=n.useCallback(t=>{e.onClickIcon&&(t.stopPropagation(),e.onClickIcon())},[e]);return r.jsx(i,{...e.wrapperProps,children:r.jsxs(L,{children:[r.jsxs(_,{onClick:a,children:[r.jsx(q,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary}),e.isAccordionIcon&&r.jsx(V,{$expanded:e.expanded,onClick:s,name:"ArrowDown",primaryColor:"black100",type:"curved",size:"large"})]}),r.jsx(U,{$expanded:e.expanded,children:e.accordionDetails})]})})};try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"FlexShortStylesProps"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const L=l.div`
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
`,U=l.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  transition-property: max-height, opacity, height;
  transition-duration: 0.3s;
  transition-timing-function: easy;
`,V=l(P)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?S`
          transform: rotate(180deg);
        `:S`
          transform: rotate(0deg);
        `}
`,ee={component:c,title:"Component/Accordion",tags:["autodocs"]},M=e=>{const[a,s]=n.useState(!1),[t,g]=n.useState(!1),[p,f]=n.useState(!1),u=n.useCallback(()=>{s(d=>!d)},[]),A=n.useCallback(()=>{u()},[u]),T=n.useCallback(()=>{u()},[u]),m=n.useCallback(()=>{g(d=>!d)},[]),E=n.useCallback(()=>{m()},[m]),z=n.useCallback(()=>{m()},[m]),x=n.useCallback(()=>{f(d=>!d)},[]),D=n.useCallback(()=>{x()},[x]),$=n.useCallback(()=>{x()},[x]);return r.jsx(c,{...e,expanded:a,triggerUpdate:[a,t,p],onClickSummary:A,onClickIcon:T,accordionDetails:r.jsxs(i,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(c,{accordionSummary:r.jsx(o,{customStyles:{justifyContent:"space-between"},iconTurn:t?180:0,genre:"productBorder",size:"medium",width:"100%",iconName:"Folder",children:"Show more"}),accordionDetails:r.jsxs(i,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]}),expanded:t,onClickSummary:E,onClickIcon:z,wrapperProps:{p:"0px",w:"100%"}}),r.jsx(c,{accordionSummary:r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"grayBorder",size:"medium",width:"100%",children:"Show more more"}),accordionDetails:r.jsxs(i,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]}),expanded:p,onClickSummary:D,onClickIcon:$,wrapperProps:{p:"0px",w:"100%"}})]})})},F=e=>{const[a,s]=n.useState(!1),t=n.useCallback(()=>{s(f=>!f)},[]),g=n.useCallback(()=>{t()},[t]),p=n.useCallback(()=>{t()},[t]);return r.jsx(c,{...e,expanded:a,triggerUpdate:[a],onClickSummary:g,onClickIcon:p,accordionDetails:r.jsxs(i,{gap:"10px",flexDirection:"column",pt:"6px",children:[r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),r.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]})})},y={render:e=>r.jsx(F,{...e}),args:{isAccordionIcon:!0,accordionSummary:r.jsx(i,{p:"10px",w:"200px",style:{cursor:"pointer"},children:r.jsx(I,{isHoverUnderlining:!0,variant:"h4",children:"Show"})}),wrapperProps:{p:"10px",w:"200px"}}},h={render:e=>r.jsx(M,{...e}),args:{isAccordionIcon:!0,accordionSummary:r.jsx(i,{p:"10px",w:"200px",style:{cursor:"pointer"},children:r.jsx(I,{isHoverUnderlining:!0,variant:"h4",children:"MultiLevel"})}),wrapperProps:{p:"10px",w:"200px"}}};var C,k,w;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <OneLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack p="10px" w="200px" style={{
      cursor: 'pointer'
    }}>
        <Typography isHoverUnderlining variant="h4">
          Show
        </Typography>
      </Stack>,
    wrapperProps: {
      p: '10px',
      w: '200px'
    }
  }
}`,...(w=(k=y.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var j,v,b;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <MultiLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack p="10px" w="200px" style={{
      cursor: 'pointer'
    }}>
        <Typography isHoverUnderlining variant="h4">
          MultiLevel
        </Typography>
      </Stack>,
    wrapperProps: {
      p: '10px',
      w: '200px'
    }
  }
}`,...(b=(v=h.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const re=["OneLevel","MultiLevel"];export{h as MultiLevel,y as OneLevel,re as __namedExportsOrder,ee as default};
