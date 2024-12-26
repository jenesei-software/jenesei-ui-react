import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";import{B as t}from"./button-DS91_tax.js";import{S as n}from"./stack-C1_CtTyx.js";import{T}from"./typography-DY6CFA4c.js";import{A as i}from"./accordion.styles-n_yslHx_.js";import"./styled-components.browser.esm-CCP31c1y.js";import"./icon.styles-Cg4ODpap.js";import"./theme-3X06DcYZ.js";import"./base.styles-62mSIwMs.js";import"./theme.global-3OPldRDj.js";import"./loading.styles-_WGkLspa.js";import"./typography.functions-CeSMEUjp.js";import"./index-rCr475hU.js";const K={component:i,title:"Component/Accordion"},L=s=>{const[a,h]=r.useState(!1),[o,y]=r.useState(!1),[p,g]=r.useState(!1),l=r.useCallback(()=>{h(c=>!c)},[]),v=r.useCallback(()=>{l()},[l]),b=r.useCallback(()=>{l()},[l]),d=r.useCallback(()=>{y(c=>!c)},[]),z=r.useCallback(()=>{d()},[d]),A=r.useCallback(()=>{d()},[d]),m=r.useCallback(()=>{g(c=>!c)},[]),E=r.useCallback(()=>{m()},[m]),I=r.useCallback(()=>{m()},[m]);return e.jsx(i,{...s,expanded:a,triggerUpdate:[a,o,p],onClickSummary:v,onClickIcon:b,accordionDetails:e.jsxs(n,{gap:"10px",flexDirection:"column",pt:"6px",children:[e.jsx(i,{accordionSummary:e.jsx(t,{customStyles:{justifyContent:"space-between"},iconTurn:o?180:0,genre:"productBorder",size:"medium",width:"100%",iconName:"Folder",children:"Show more"}),accordionDetails:e.jsxs(n,{gap:"10px",flexDirection:"column",pt:"6px",children:[e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]}),expanded:o,onClickSummary:z,onClickIcon:A,wrapperProps:{p:"0px",w:"100%"}}),e.jsx(i,{accordionSummary:e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"grayBorder",size:"medium",width:"100%",children:"Show more more"}),accordionDetails:e.jsxs(n,{gap:"10px",flexDirection:"column",pt:"6px",children:[e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]}),expanded:p,onClickSummary:E,onClickIcon:I,wrapperProps:{p:"0px",w:"100%"}})]})})},D=s=>{const[a,h]=r.useState(!1),o=r.useCallback(()=>{h(g=>!g)},[]),y=r.useCallback(()=>{o()},[o]),p=r.useCallback(()=>{o()},[o]);return e.jsx(i,{...s,expanded:a,triggerUpdate:[a],onClickSummary:y,onClickIcon:p,accordionDetails:e.jsxs(n,{gap:"10px",flexDirection:"column",pt:"6px",children:[e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"gray",size:"medium",width:"100%",children:"First"}),e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"black",size:"medium",width:"100%",children:"Second"}),e.jsx(t,{customStyles:{justifyContent:"flex-start"},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"})]})})},u={render:s=>e.jsx(D,{...s}),args:{isAccordionIcon:!0,accordionSummary:e.jsx(n,{p:"10px",w:"200px",style:{cursor:"pointer"},children:e.jsx(T,{isHoverUnderlining:!0,variant:"h4",children:"Show"})}),wrapperProps:{p:"10px",w:"200px"}}},x={render:s=>e.jsx(L,{...s}),args:{isAccordionIcon:!0,accordionSummary:e.jsx(n,{p:"10px",w:"200px",style:{cursor:"pointer"},children:e.jsx(T,{isHoverUnderlining:!0,variant:"h4",children:"MultiLevel"})}),wrapperProps:{p:"10px",w:"200px"}}};var S,j,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var f,C,k;x.parameters={...x.parameters,docs:{...(f=x.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(C=x.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const Q=["OneLevel","MultiLevel"];export{x as MultiLevel,u as OneLevel,Q as __namedExportsOrder,K as default};
