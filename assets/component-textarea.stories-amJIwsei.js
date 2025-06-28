import{n as V,r as o,K as s,j as i,c as E,d as A,k as w,h as T,l as n}from"./iframe-NXvRQG3e.js";import{E as q,a as z}from"./style-Fk9c2Kpi.js";import{g as x}from"./component-uNoer6cp.js";import"./motion-Cx9e5g0b.js";import"./index-CpXWg0wM.js";const m=e=>{const r=V(),f=o.useCallback(t=>{var l,u;if(e.isNoSpaces){const h=t.replace(/\s+/g,"");(l=e.onChange)==null||l.call(e,h)}else(u=e.onChange)==null||u.call(e,t)},[e]),a=o.useRef(null),d=o.useCallback(t=>{if(a.current){const l=s[e.size].height,u=Math.max(s[e.size].height,t);a.current.style.height=`${l}px`;const h=a.current.scrollHeight;let g=t;e.isAutoHeight&&!e.height?g=Math.max(l,Math.min(h,u)):g=Math.max(l,t),a.current.style.height=`${g}px`,a.current.style.minHeight=`${l}px`,a.current.style.maxHeight=`${u}px`,a.current.scrollHeight>u?a.current.style.overflowY="auto":a.current.style.overflowY="hidden"}},[e.height,e.isAutoHeight,e.size]),$=o.useCallback(()=>{if(e.height)d(e.height);else if(e.maxRows){const t=r.font.sizeDefault.default*r.font.lineHeight,l=e.maxRows?t*e.maxRows:t;d(l+s[e.size].padding*2-8)}else d(s[e.size].height)},[d,e.height,e.maxRows,e.size,r.font.lineHeight,r.font.sizeDefault.default]);return o.useEffect(()=>{$()},[$,e.isAutoHeight,e.value]),i.jsxDEV(i.Fragment,{children:[i.jsxDEV(H,{$isTextAreaEffect:e.isTextAreaEffect,className:e.className,$isDisabled:e.isDisabled,$sx:e.sx,children:i.jsxDEV(M,{ref:a,$isResize:e.isResize,$error:e.error,$isTextAreaEffect:e.isTextAreaEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue,value:e.value??"",placeholder:e.placeholder,onChange:t=>f(t.target.value),onBlur:e.onBlur,onFocus:e.onFocus,name:e.name,id:e.id},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:80,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:74,columnNumber:7},void 0),e!=null&&e.error?i.jsxDEV(q,{...e.error,size:(e==null?void 0:e.error.size)??e.size},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:111,columnNumber:23},void 0):null]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/component.tsx",lineNumber:73,columnNumber:5},void 0)};try{m.displayName="TextArea",m.__docgenInfo={description:"",displayName:"TextArea",props:{error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"ErrorMessageProps"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},isAllowEmptyFormatting:{defaultValue:null,description:"",name:"isAllowEmptyFormatting",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'},{value:'"realebail-white"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isTextAreaEffect:{defaultValue:null,description:"",name:"isTextAreaEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}}}}}catch{}const H=A.div`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  ${E};
`,N=n`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${e=>x(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    ${e=>x(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
  }
`,D=n`
  ${e=>n`
    background: ${e.theme.colors.input[e.$genre].background.rest};
    border-color: ${e.theme.colors.input[e.$genre].border.rest};
    color: ${e.theme.colors.input[e.$genre].color.rest};

    &:active {
      background: ${e.theme.colors.input[e.$genre].background.rest};
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
    &:hover {
      background: ${e.theme.colors.input[e.$genre].background.hover};
      border-color: ${e.theme.colors.input[e.$genre].border.hover};
      color: ${e.theme.colors.input[e.$genre].color.hover};
    }
    &:focus-visible {
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      background: ${e.theme.colors.input[e.$genre].background.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
  `};
`,k=n`
  ${e=>R(s[e.$size])};
`,R=e=>n`
  padding: ${e.padding-4}px ${e.padding}px ${e.padding-6}px ${e.padding}px;
  border-radius: ${e.radius}px;
`,S=n`
  opacity: ${e=>e.$isDisabled?.5:1};
`,j=n`
  ${e=>e.$isTextAreaEffect&&n`
      box-shadow: ${e.theme.effects.input};
    `}
`,B=n`
  ${e=>!e.$isResize&&n`
      resize: none;
    `}
`,C=n`
  overflow-x: hidden;
  width: 100% !important;
  border: 1px solid;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-wrap: auto;

  ${e=>x(16,e.$isBold?500:400,e.theme.font.family,e.theme.font.lineHeight)};

  ${B};
  ${k};
  ${D};
  ${N};
  ${S};
  ${j};
  ${w};
  ${T};
  ${z};
`,M=A.textarea`
  ${C};
`,P={component:m,title:"Component/TextArea"},_={genre:"blackBorder",size:"largeMedium",error:{errorMessage:"Error",isError:!1,isErrorAbsolute:!1},isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,isAutoHeight:!0,sx:{default:{width:"300px"}},maxRows:8},F=e=>{const[r,f]=o.useState("");return i.jsxDEV(m,{...e,value:r,onChange:a=>f(a)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-textarea.stories.tsx",lineNumber:33,columnNumber:10},void 0)},c={render:e=>i.jsxDEV(F,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/component-textarea.stories.tsx",lineNumber:36,columnNumber:19},void 0),args:{..._,placeholder:"Default"}};var b,y,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    placeholder: 'Default'
  }
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Y=["Default"];export{c as Default,Y as __namedExportsOrder,P as default};
