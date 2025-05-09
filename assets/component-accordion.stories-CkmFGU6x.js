import{j as n,d as u,l as k}from"./styled-components.browser.esm-CyaOpMkv.js";import{r}from"./index-CnY36iC1.js";import{B as o}from"./component-DkPovXgP.js";import{S as a}from"./component-ZyHH9g1r.js";import{T as S}from"./component-D15g8Xja.js";import{I as $}from"./component.styles-BbZ0qEuD.js";import{a as z}from"./style-pCqVTddV.js";import"./component-BejfL9p2.js";import"./component.functions-BGGwQnpg.js";import"./style-C2EjhzEB.js";import"./theme-yMIRbExU.js";import"./theme.global-C6REP-xE.js";import"./proxy-BgqLTuwE.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context.constants-DH1WXOXG.js";const c=e=>{const t=r.useCallback(()=>{e.onClickSummary&&e.onClickSummary()},[e]),s=r.useCallback(i=>{e.onClickIcon&&(i.stopPropagation(),e.onClickIcon())},[e]);return n.jsxDEV(a,{...e.wrapperProps,children:n.jsxDEV(P,{children:[n.jsxDEV(L,{onClick:t,children:[n.jsxDEV(_,{$isAccordionIcon:e.isAccordionIcon,children:e.accordionSummary},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:34,columnNumber:11},void 0),e.isAccordionIcon&&n.jsxDEV(q,{$expanded:e.expanded,onClick:s,name:"Arrow1",primaryColor:"black100",type:"id",size:"large"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:38,columnNumber:13},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:33,columnNumber:9},void 0),n.jsxDEV(W,{$expanded:e.expanded,children:e.accordionDetails},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:48,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:32,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/accordion/component.tsx",lineNumber:31,columnNumber:5},void 0)};try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{wrapperProps:{defaultValue:null,description:"",name:"wrapperProps",required:!0,type:{name:"StackProps"}},accordionSummary:{defaultValue:null,description:"",name:"accordionSummary",required:!0,type:{name:"ReactNode"}},accordionDetails:{defaultValue:null,description:"",name:"accordionDetails",required:!0,type:{name:"ReactNode"}},expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},isAccordionIcon:{defaultValue:null,description:"",name:"isAccordionIcon",required:!1,type:{name:"boolean"}},onClickSummary:{defaultValue:null,description:"",name:"onClickSummary",required:!1,type:{name:"(() => void)"}},onClickIcon:{defaultValue:null,description:"",name:"onClickIcon",required:!1,type:{name:"(() => void)"}},triggerUpdate:{defaultValue:null,description:"",name:"triggerUpdate",required:!1,type:{name:"unknown[]"}}}}}catch{}const P=u.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,L=u.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`,_=u.div`
  width: 100%;

  ${e=>e.$isAccordionIcon&&k`
      width: calc(100% - 26px);
    `}
`,W=u.div`
  max-height: ${e=>e.$expanded?"9999px":"0"};
  height: ${e=>e.$expanded?"100%":"0"};
  opacity: ${e=>e.$expanded?1:0};
  overflow: hidden;
  ${z};
`,q=u($)`
  padding: 4px;
  box-sizing: content-box;
  cursor: pointer;
  ${e=>e.$expanded?k`
          transform: rotate(180deg);
        `:k`
          transform: rotate(0deg);
        `}
`,te={component:c,title:"Component/Accordion"},U=e=>{const[t,s]=r.useState(!1),[i,b]=r.useState(!1),[l,j]=r.useState(!1),m=r.useCallback(()=>{s(d=>!d)},[]),E=r.useCallback(()=>{m()},[m]),V=r.useCallback(()=>{m()},[m]),f=r.useCallback(()=>{b(d=>!d)},[]),T=r.useCallback(()=>{f()},[f]),v=r.useCallback(()=>{f()},[f]),p=r.useCallback(()=>{j(d=>!d)},[]),I=r.useCallback(()=>{p()},[p]),A=r.useCallback(()=>{p()},[p]);return n.jsxDEV(c,{...e,expanded:t,triggerUpdate:[t,i,l],onClickSummary:E,onClickIcon:V,accordionDetails:n.jsxDEV(a,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(c,{accordionSummary:n.jsxDEV(o,{sx:{default:{justifyContent:"space-between"}},genre:"productBorder",size:"medium",width:"100%",icon:{type:"id",name:"Folder",turn:i?180:0},children:"Show more"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:52,columnNumber:40},void 0),accordionDetails:n.jsxDEV(a,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"gray",size:"medium",width:"100%",children:"First"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:69,columnNumber:17},void 0),n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"black",size:"medium",width:"100%",children:"Second"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:76,columnNumber:17},void 0),n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:83,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:62,columnNumber:44},void 0),expanded:i,onClickSummary:T,onClickIcon:v,wrapperProps:{sx:{default:{padding:"0px",width:"100%"}}}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:52,columnNumber:11},void 0),n.jsxDEV(c,{accordionSummary:n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"grayBorder",size:"medium",width:"100%",children:"Show more more"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:98,columnNumber:40},void 0),accordionDetails:n.jsxDEV(a,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"gray",size:"medium",width:"100%",children:"First"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:111,columnNumber:17},void 0),n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"black",size:"medium",width:"100%",children:"Second"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:118,columnNumber:17},void 0),n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:125,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:104,columnNumber:44},void 0),expanded:l,onClickSummary:I,onClickIcon:A,wrapperProps:{sx:{default:{padding:"0px",width:"100%"}}}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:98,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:45,columnNumber:183},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:45,columnNumber:10},void 0)},M=e=>{const[t,s]=r.useState(!1),i=r.useCallback(()=>{s(j=>!j)},[]),b=r.useCallback(()=>{i()},[i]),l=r.useCallback(()=>{i()},[i]);return n.jsxDEV(c,{...e,expanded:t,triggerUpdate:[t],onClickSummary:b,onClickIcon:l,accordionDetails:n.jsxDEV(a,{sx:()=>({default:{gap:"10px",flexDirection:"column",paddingTop:"6px"}}),children:[n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"gray",size:"medium",width:"100%",children:"First"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:160,columnNumber:11},void 0),n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"black",size:"medium",width:"100%",children:"Second"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:167,columnNumber:11},void 0),n.jsxDEV(o,{sx:{default:{justifyContent:"flex-start"}},genre:"greenTransparent",size:"medium",width:"100%",children:"Third"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:174,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:153,columnNumber:155},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:153,columnNumber:10},void 0)},x={render:e=>n.jsxDEV(M,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:184,columnNumber:19},void 0),args:{isAccordionIcon:!0,accordionSummary:n.jsxDEV(a,{sx:{default:{padding:"10px",width:"200px",cursor:"pointer"}},children:n.jsxDEV(S,{isHoverUnderlining:!0,variant:"h4",children:"Show"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:194,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:187,columnNumber:23},void 0),wrapperProps:{sx:{default:{padding:"0px",width:"100%",maxWidth:"300px"}}}}},h={render:e=>n.jsxDEV(U,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:210,columnNumber:19},void 0),args:{isAccordionIcon:!0,accordionSummary:n.jsxDEV(a,{sx:{default:{padding:"10px",width:"200px",cursor:"pointer"}},children:n.jsxDEV(S,{isHoverUnderlining:!0,variant:"h4",children:"MultiLevel"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:220,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-accordion.stories.tsx",lineNumber:213,columnNumber:23},void 0),wrapperProps:{sx:{default:{padding:"0px",width:"100%",maxWidth:"300px"}}}}};var N,y,g;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <OneLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack sx={{
      default: {
        padding: '10px',
        width: '200px',
        cursor: 'pointer'
      }
    }}>
        <Typography isHoverUnderlining variant="h4">
          Show
        </Typography>
      </Stack>,
    wrapperProps: {
      sx: {
        default: {
          padding: '0px',
          width: '100%',
          maxWidth: '300px'
        }
      }
    }
  }
}`,...(g=(y=x.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var w,C,D;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <MultiLevelAccordionWrapper {...args} />,
  args: {
    isAccordionIcon: true,
    accordionSummary: <Stack sx={{
      default: {
        padding: '10px',
        width: '200px',
        cursor: 'pointer'
      }
    }}>
        <Typography isHoverUnderlining variant="h4">
          MultiLevel
        </Typography>
      </Stack>,
    wrapperProps: {
      sx: {
        default: {
          padding: '0px',
          width: '100%',
          maxWidth: '300px'
        }
      }
    }
  }
}`,...(D=(C=h.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const ae=["OneLevel","MultiLevel"];export{h as MultiLevel,x as OneLevel,ae as __namedExportsOrder,te as default};
