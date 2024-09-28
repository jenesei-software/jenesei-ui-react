import{j as e,d as s,l as y}from"./styled-components.browser.esm-028b5a71.js";import{r}from"./index-ff614419.js";import{B as o}from"./button-a8373048.js";import{S as i,I as $}from"./icon.styles-d3024de5.js";import{b as D}from"./typography-62fdeef1.js";import"./modal-loading.styles-b2147eb5.js";import"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./typography.functions-dcbec177.js";import"./index-4da86cf0.js";const t=n=>{const d=r.useCallback(()=>{n.onClickSummary&&n.onClickSummary()},[n.onClickSummary]),x=r.useCallback(a=>{n.onClickIcon&&(a.stopPropagation(),n.onClickIcon())},[n.onClickIcon]);return e.jsx(i,{...n.wrapperProps,children:e.jsxs(E,{children:[e.jsxs(z,{onClick:d,children:[e.jsx(v,{$isAccordionIcon:n.isAccordionIcon,children:n.accordionSummary}),n.isAccordionIcon&&e.jsx(P,{$expanded:n.expanded,onClick:x,name:"ArrowDown",primaryColor:"black100",type:"curved",size:"large"})]}),e.jsx(_,{$expanded:n.expanded,children:n.accordionDetails})]})})};try{t.displayName="Accordion",t.__docgenInfo={description:"",displayName:"Accordion",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"FlexShortStylesNormalizedPropsNormalized"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const E=s.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,z=s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,v=s.div`
  width: 100%;

  ${n=>n.$isAccordionIcon&&y`
      width: calc(100% - 26px);
    `}
`,_=s.div`
  max-height: ${n=>n.$expanded?"9999px":"0"};
  height: ${n=>n.$expanded?"100%":"0"};
  opacity: ${n=>n.$expanded?1:0};
  overflow: hidden;
  transition-property: max-height, opacity, height;
  transition-duration: 0.3s;
  transition-timing-function: easy;
`,P=s($)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${n=>n.$expanded?y`
          transform: rotate(180deg);
        `:y`
          transform: rotate(0deg);
        `}
`,G={component:t,title:"Accordion"},q=n=>{const[d,x]=r.useState(!1),[a,S]=r.useState(!1),[h,k]=r.useState(!1),l=r.useCallback(()=>{x(c=>!c)},[]),w=r.useCallback(()=>{l()},[l]),j=r.useCallback(()=>{l()},[l]),m=r.useCallback(()=>{S(c=>!c)},[]),I=r.useCallback(()=>{m()},[m]),b=r.useCallback(()=>{m()},[m]),p=r.useCallback(()=>{k(c=>!c)},[]),A=r.useCallback(()=>{p()},[p]),T=r.useCallback(()=>{p()},[p]);return e.jsx(t,{...n,expanded:d,triggerUpdate:[d,a,h],onClickSummary:w,onClickIcon:j,accordionDetails:e.jsx(i,{gap:"10px",flexDirection:"column",pt:"6px",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{accordionSummary:e.jsx(o,{customStyles:{justifyContent:"space-between"},iconTurn:a?180:0,genre:"productBorder",size:"medium",width:"100%",iconName:"Folder",children:"Show more"}),accordionDetails:e.jsx(i,{gap:"10px",flexDirection:"column",pt:"6px",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),e.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),e.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]})}),expanded:a,onClickSummary:I,onClickIcon:b,wrapperProps:{p:"0px",w:"100%"}}),e.jsx(t,{accordionSummary:e.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"grayBorder",size:"medium",width:"100%",children:"Show more more"}),accordionDetails:e.jsx(i,{gap:"10px",flexDirection:"column",pt:"6px",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),e.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),e.jsx(o,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]})}),expanded:h,onClickSummary:A,onClickIcon:T,wrapperProps:{p:"0px",w:"100%"}})]})})})},u={render:n=>e.jsx(q,{...n}),args:{isAccordionIcon:!0,accordionSummary:e.jsx(i,{p:"10px",w:"200px",style:{cursor:"pointer"},children:e.jsx(D,{variant:"h4",children:"Show"})}),wrapperProps:{p:"10px",w:"200px"}}};var f,g,C;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <AccordionWrapper {...args} />,
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
}`,...(C=(g=u.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const H=["Default"];export{u as Default,H as __namedExportsOrder,G as default};
