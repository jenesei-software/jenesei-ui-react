import{c as x,d as h,l as p,j as r}from"./iframe-NXvRQG3e.js";import{B as g}from"./component-DaaONhq_.js";import"./component.styles-BphGMU0u.js";import"./component-uNoer6cp.js";import"./index-CpXWg0wM.js";const j=p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  & #jenesei-button {
    &:not(:only-child) {
      flex-grow: 1;
      &:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
      &:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,y=p`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & #jenesei-button {
    &:not(:only-child) {
      &:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      &:not(:first-child):not(:last-child) {
        border-radius: 0;
      }
    }
  }
`,N=h.div`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${e=>e.$position==="horizontal"?j:y};
  ${x};
`,n=e=>{var i;return r.jsxDEV(N,{$sx:e.sx,$position:e.position,className:e.className,id:"jenesei-button-group",children:(i=e.value)==null?void 0:i.map((f,b)=>r.jsxDEV(g,{id:"jenesei-button",...f},b,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:10,columnNumber:41},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:9,columnNumber:5},void 0)};try{n.displayName="ButtonGroup",n.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}const G={component:n,title:"Component/ButtonGroup"},m=e=>r.jsxDEV(n,{...e,value:[{sx:{default:{justifyContent:"flex-start"}},children:"First",icons:[{type:"id",name:"CallMissed",order:-1}],type:"button",genre:"black",size:"medium"},{sx:{default:{justifyContent:"space-between"}},children:"Third",icons:[{type:"id",name:"Filter2",order:-1}],type:"button",genre:"gray",size:"medium"},{sx:{default:{justifyContent:"space-between"}},children:"Second",icons:[{type:"id",name:"Graph",order:1}],type:"button",genre:"blackBorder",size:"medium"}]},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-button-group.stories.tsx",lineNumber:12,columnNumber:10},void 0),t={render:e=>r.jsxDEV(m,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-button-group.stories.tsx",lineNumber:60,columnNumber:19},void 0),args:{position:"horizontal"}},o={render:e=>r.jsxDEV(m,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-button-group.stories.tsx",lineNumber:66,columnNumber:19},void 0),args:{position:"vertical"}};var s,a,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal'
  }
}`,...(u=(a=t.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical'
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const k=["Horizontal","Vertical"];export{t as Horizontal,o as Vertical,k as __namedExportsOrder,G as default};
