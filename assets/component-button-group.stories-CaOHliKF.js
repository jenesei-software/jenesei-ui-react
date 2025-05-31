import{l as c,d as h,j as t}from"./styled-components.browser.esm-CyaOpMkv.js";import{a as x}from"./style-CHwZntvm.js";import{B as j}from"./component-DVjaNw_-.js";import"./index-CnY36iC1.js";import"./component.styles-Xz0ZKPYU.js";import"./theme.global-CKNmeFpz.js";import"./style-IM99yq-C.js";import"./component-kqn1VMYM.js";import"./component.functions-BGGwQnpg.js";import"./component-Dh-bcLtB.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context-DdocyObD.js";import"./proxy-BS1eh56F.js";import"./index-DgedcAJ4.js";const g=c`
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
`,y=c`
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
  ${e=>e.$position==="horizontal"?g:y};
  ${x};
`,n=e=>{var i;return t.jsxDEV(N,{$sx:e.sx,$position:e.position,className:e.className,id:"jenesei-button-group",children:(i=e.value)==null?void 0:i.map((f,b)=>t.jsxDEV(j,{id:"jenesei-button",...f},b,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:10,columnNumber:41},void 0))},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/button-group/component.tsx",lineNumber:9,columnNumber:5},void 0)};try{n.displayName="ButtonGroup",n.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"({ default: CSSObject; } & { default?: CSSObject; tablet?: CSSObject; mobile?: CSSObject | undefined; }) | ((theme: DefaultTheme) => { ...; } & { ...; }) | undefined"}}}}}catch{}const H={component:n,title:"Component/ButtonGroup"},m=e=>t.jsxDEV(n,{...e,value:[{sx:{default:{justifyContent:"flex-start"}},children:"First",icons:[{type:"id",name:"CallMissed",order:-1}],type:"button",genre:"black",size:"medium"},{sx:{default:{justifyContent:"space-between"}},children:"Third",icons:[{type:"id",name:"Filter2",order:-1}],type:"button",genre:"gray",size:"medium"},{sx:{default:{justifyContent:"space-between"}},children:"Second",icons:[{type:"id",name:"Graph",order:1}],type:"button",genre:"blackBorder",size:"medium"}]},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-button-group.stories.tsx",lineNumber:12,columnNumber:10},void 0),r={render:e=>t.jsxDEV(m,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-button-group.stories.tsx",lineNumber:60,columnNumber:19},void 0),args:{position:"horizontal"}},o={render:e=>t.jsxDEV(m,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/component-button-group.stories.tsx",lineNumber:66,columnNumber:19},void 0),args:{position:"vertical"}};var s,a,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal'
  }
}`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const P=["Horizontal","Vertical"];export{r as Horizontal,o as Vertical,P as __namedExportsOrder,H as default};
