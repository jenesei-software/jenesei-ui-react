import{l,d as y,S as n,j as r,r as h}from"./iframe-NXvRQG3e.js";import{B as x}from"./component-DaaONhq_.js";import{T as s}from"./component-uNoer6cp.js";import"./component.styles-BphGMU0u.js";import"./index-CpXWg0wM.js";const i=y(n)`
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
`;try{i.displayName="StyledScroll",i.__docgenInfo={description:"",displayName:"StyledScroll",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const t=e=>r.jsxDEV(i,{...e,$horizontal:e.horizontal,$vertical:e.vertical,$isAlwaysHorizontal:e.isAlwaysHorizontal,$isAlwaysVertical:e.isAlwaysVertical,children:e.children},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/areas/scroll/area.tsx",lineNumber:7,columnNumber:5},void 0);try{t.displayName="Scroll",t.__docgenInfo={description:"",displayName:"Scroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isHover:{defaultValue:null,description:"",name:"isHover",required:!1,type:{name:"boolean"}},isRipple:{defaultValue:null,description:"",name:"isRipple",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},onDrop:{defaultValue:null,description:"",name:"onDrop",required:!1,type:{name:"((e: DragEvent<HTMLDivElement>) => void)"}},onDragOver:{defaultValue:null,description:"",name:"onDragOver",required:!1,type:{name:"DragEventHandler<HTMLDivElement>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement | null>"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},vertical:{defaultValue:null,description:"",name:"vertical",required:!1,type:{name:"boolean"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}},isAlwaysVertical:{defaultValue:null,description:"",name:"isAlwaysVertical",required:!1,type:{name:"boolean"}},isAlwaysHorizontal:{defaultValue:null,description:"",name:"isAlwaysHorizontal",required:!1,type:{name:"boolean"}}}}}catch{}const j={component:t,title:"Area/Scroll"},b=e=>{const[m,f]=h.useState(!1),p=()=>{f(a=>!a)};return r.jsxDEV(t,{...e,sx:a=>({default:{width:"300px",padding:"12px",boxSizing:"content-box",backgroundColor:a.palette.black40}}),children:[r.jsxDEV(x,{onClick:p,size:"small",genre:"gray",children:"Toggle Content"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/area-scroll.stories.tsx",lineNumber:27,columnNumber:7},void 0),r.jsxDEV(n,{sx:a=>({default:{width:"100px",height:"100px",backgroundColor:a.palette.whiteStandard}}),children:r.jsxDEV(s,{sx:{default:{variant:"h7"}},children:"One"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/area-scroll.stories.tsx",lineNumber:37,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/area-scroll.stories.tsx",lineNumber:30,columnNumber:7},void 0),m&&r.jsxDEV(n,{sx:a=>({default:{width:"1000px",minWidth:"1000px",height:"100px",backgroundColor:a.palette.whiteStandard}}),children:r.jsxDEV(s,{sx:{default:{variant:"h7"}},children:"Two"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/area-scroll.stories.tsx",lineNumber:53,columnNumber:11},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/area-scroll.stories.tsx",lineNumber:45,columnNumber:19},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/area-scroll.stories.tsx",lineNumber:19,columnNumber:10},void 0)},o={render:e=>r.jsxDEV(b,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/area-scroll.stories.tsx",lineNumber:64,columnNumber:19},void 0),args:{horizontal:!0}};var u,d,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ScrollWrapper {...args} />,
  args: {
    horizontal: true
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const k=["Scroll"];export{o as Scroll,k as __namedExportsOrder,j as default};
