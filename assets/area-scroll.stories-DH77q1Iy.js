import{d as y,l,j as r}from"./styled-components.browser.esm-CyaOpMkv.js";import{r as h}from"./index-CnY36iC1.js";import{B as b}from"./component-DkPovXgP.js";import{S as o}from"./component-ZyHH9g1r.js";import{T as s}from"./component-D15g8Xja.js";import"./component.styles-BbZ0qEuD.js";import"./theme-yMIRbExU.js";import"./style-pCqVTddV.js";import"./style-C2EjhzEB.js";import"./theme.global-C6REP-xE.js";import"./component-BejfL9p2.js";import"./component.functions-BGGwQnpg.js";import"./proxy-BgqLTuwE.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context.constants-DH1WXOXG.js";const i=y(o)`
  overflow-x: hidden;
  overflow-y: hidden;

  ${e=>l`
    ${e.$horizontal&&l`
      overflow-x: auto;
    `}

    ${e.$vertical&&l`
      overflow-y: auto;
    `}

    ${e.$isAlwaysHorizontal&&l`
      overflow-x: scroll;
    `}

    ${e.$isAlwaysVertical&&l`
      overflow-y: scroll;
    `}
  `}
`;try{i.displayName="StyledScroll",i.__docgenInfo={description:"",displayName:"StyledScroll",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const t=e=>r.jsxDEV(i,{...e,$horizontal:e.horizontal,$vertical:e.vertical,$isAlwaysHorizontal:e.isAlwaysHorizontal,$isAlwaysVertical:e.isAlwaysVertical,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/scroll/area.tsx",lineNumber:7,columnNumber:5},void 0);try{t.displayName="Scroll",t.__docgenInfo={description:"",displayName:"Scroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHover:{defaultValue:null,description:"",name:"isHover",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((e: DragEvent<HTMLDivElement>) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; mobile?: CSSObject; tablet?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},isAlwaysVertical:{defaultValue:null,description:"",name:"isAlwaysVertical",required:!1,type:{name:"boolean"}},isAlwaysHorizontal:{defaultValue:null,description:"",name:"isAlwaysHorizontal",required:!1,type:{name:"boolean"}}}}}catch{}const T={component:t,title:"Area/Scroll"},x=e=>{const[m,f]=h.useState(!1),p=()=>{f(a=>!a)};return r.jsxDEV(t,{...e,sx:a=>({default:{width:"300px",padding:"12px",boxSizing:"content-box",backgroundColor:a.palette.black40}}),children:[r.jsxDEV(b,{onClick:p,size:"small",genre:"gray",children:"Toggle Content"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/area-scroll.stories.tsx",lineNumber:27,columnNumber:7},void 0),r.jsxDEV(o,{sx:a=>({default:{width:"100px",height:"100px",backgroundColor:a.palette.whiteStandard}}),children:r.jsxDEV(s,{variant:"h7",children:"One"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/area-scroll.stories.tsx",lineNumber:37,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/area-scroll.stories.tsx",lineNumber:30,columnNumber:7},void 0),m&&r.jsxDEV(o,{sx:a=>({default:{width:"1000px",minWidth:"1000px",height:"100px",backgroundColor:a.palette.whiteStandard}}),children:r.jsxDEV(s,{variant:"h7",children:"Two"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/area-scroll.stories.tsx",lineNumber:47,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/area-scroll.stories.tsx",lineNumber:39,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/area-scroll.stories.tsx",lineNumber:19,columnNumber:10},void 0)},n={render:e=>r.jsxDEV(x,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/area-scroll.stories.tsx",lineNumber:52,columnNumber:19},void 0),args:{horizontal:!0}};var u,d,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ScrollWrapper {...args} />,
  args: {
    horizontal: true
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const O=["Scroll"];export{n as Scroll,O as __namedExportsOrder,T as default};
