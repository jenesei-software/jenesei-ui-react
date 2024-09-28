import{l as p,d as b,j as t}from"./styled-components.browser.esm-028b5a71.js";import{B as g}from"./button-a8373048.js";import"./index-ff614419.js";import"./icon.styles-d3024de5.js";import"./theme-8055a2b2.js";import"./theme.global-a81b07d6.js";import"./modal-loading.styles-b2147eb5.js";import"./typography-62fdeef1.js";import"./index-4da86cf0.js";import"./typography.functions-dcbec177.js";const f=p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & #jenesei-button {
    &:not(:only-child) {
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
`,w=p`
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
`,j=b.div`
  & #jenesei-button {
    &:focus-visible {
      z-index: 1;
    }
  }
  ${e=>e.$position==="horizontal"?f:w}
`,i=e=>{var n;return t.jsx(j,{$position:e.position,className:e.className,id:"jenesei-button-group",children:(n=e.value)==null?void 0:n.map((h,y)=>t.jsx(g,{id:"jenesei-button",...h,width:e.width??"auto"},y))})};try{i.displayName="ButtonGroup",i.__docgenInfo={description:"",displayName:"ButtonGroup",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ButtonProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}}}catch{}const O={component:i,title:"ButtonGroup"},m=e=>t.jsx(i,{...e,value:[{customStyles:{justifyContent:"flex-start"},children:"First",iconName:"CallMissed",iconOrder:-1,loadingOrder:-2,width:"auto",type:"button",genre:"black",size:"medium",isLoading:!0},{customStyles:{justifyContent:"space-between"},children:"Third",iconOrder:-1,loadingOrder:1,iconName:"Filter2",width:"auto",type:"button",genre:"gray",size:"medium",isLoading:!0},{customStyles:{justifyContent:"space-between"},children:"Second",iconOrder:2,loadingOrder:1,iconName:"Graph",width:"auto",type:"button",genre:"blackBorder",size:"medium",isLoading:!0,isIconGroup:!0,isOnlyLoadingWithGroup:!1},{customStyles:{justifyContent:"space-between"},children:"Third",iconName:"Heart",width:"auto",type:"button",genre:"greenTransparent",size:"medium"},{customStyles:{justifyContent:"space-between"},children:"Third",iconName:"ArrowDown",width:"auto",type:"button",genre:"grayBorder",size:"medium"},{customStyles:{justifyContent:"space-between"},children:"Third",iconName:"Folder",width:"auto",type:"button",genre:"product",size:"medium"},{customStyles:{justifyContent:"space-between"},children:"Third",iconName:"Folder",width:"auto",type:"button",genre:"white",size:"medium"},{customStyles:{justifyContent:"space-between"},children:"Third",iconName:"Scan",width:"auto",type:"button",genre:"productBorder",size:"medium"},{customStyles:{justifyContent:"space-between"},children:"Third",iconName:"ArrowDownCircle",width:"auto",type:"button",genre:"redTransparent",size:"medium"}]}),r={render:e=>t.jsx(m,{...e}),args:{position:"horizontal"}},o={render:e=>t.jsx(m,{...e}),args:{position:"vertical",width:"200px"}};var a,s,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'horizontal'
  }
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var u,l,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ButtonGroupWrapper {...args} />,
  args: {
    position: 'vertical',
    width: '200px'
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const V=["Horizontal","Vertical"];export{r as Horizontal,o as Vertical,V as __namedExportsOrder,O as default};
