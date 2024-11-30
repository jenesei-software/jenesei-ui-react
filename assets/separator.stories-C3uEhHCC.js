import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{S as f}from"./stack-Db-lxqry.js";import{d as S}from"./styled-components.browser.esm-CCP31c1y.js";import"./index-DJO9vBfz.js";import"./base.styles-lMUunFc3.js";import"./theme-DVhjlqOZ.js";import"./theme.global-B2IBlToM.js";const n="1px",l=e=>{const v=e.height?e.height:e.type=="horizontal"?n:"100%",h=e.width?e.width:e.type=="vertical"?n:"100%",y=e.color||"grayMonica";return a.jsx(o,{$radius:e.radius,$color:y,$height:v,$width:h})};try{l.displayName="Separator",l.__docgenInfo={description:"",displayName:"Separator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"transparent"'},{value:'"black100"'},{value:'"black80"'},{value:'"black60"'},{value:'"black50"'},{value:'"black40"'},{value:'"black10"'},{value:'"black05"'},{value:'"grayJanice"'},{value:'"grayKaren"'},{value:'"grayMonica"'},{value:'"graySandra"'},{value:'"grayPatricia"'},{value:'"graySarah"'},{value:'"grayStassie"'},{value:'"greenGoogle"'},{value:'"green100"'},{value:'"green25"'},{value:'"green10"'},{value:'"whiteStandard"'},{value:'"yellowGoogle"'},{value:'"redGoogle"'},{value:'"red100"'},{value:'"red25"'},{value:'"red10"'},{value:'"blueGoogle"'},{value:'"blueRest"'},{value:'"blueActive"'},{value:'"blueHover"'},{value:'"blueFocus"'},{value:'"blueBr"'},{value:'"amnezia"'}]}}}}}catch{}const o=S.div`
  height: ${e=>e.$height};
  width: ${e=>e.$width||"100%"};
  background: ${e=>e.$color&&e.theme.palette[e.$color]};
  border-radius: ${e=>e.$radius||"0px"};
`;try{o.displayName="SeparatorWrapper",o.__docgenInfo={description:"",displayName:"SeparatorWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const A={component:l,title:"Component/Separator",tags:["autodocs"]},m={},g=e=>a.jsx(f,{h:"100px",w:"100px",p:"10px",children:a.jsx(l,{...e})}),r={render:e=>a.jsx(g,{...e}),args:{...m,type:"horizontal"}},t={render:e=>a.jsx(g,{...e}),args:{...m,type:"vertical"}};var u,i,s;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SeparatorWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'horizontal'
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <SeparatorWrapper {...args} />,
  args: {
    ...defaultArgs,
    type: 'vertical'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const q=["Horizontal","Vertical"];export{r as Horizontal,t as Vertical,q as __namedExportsOrder,A as default};
