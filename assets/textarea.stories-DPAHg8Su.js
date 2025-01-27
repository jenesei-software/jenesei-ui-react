import{n as w,K as u,j as l,d as x,l as t}from"./theme-DVxtux_W.js";import{r as s}from"./index-CnY36iC1.js";import"./typography-BeMVh0jT.js";import{g as m}from"./typography.functions-4q7AKkEp.js";import"./theme.global-wZO4Grut.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./proxy-Dmzr5kG1.js";const f=e=>{const a=w(),h=s.useCallback(n=>{var i,o;if(e.isNoSpaces){const g=n.replace(/\s+/g,"");(i=e.onChange)==null||i.call(e,g)}else(o=e.onChange)==null||o.call(e,n)},[e]),r=s.useRef(null),d=s.useCallback(n=>{if(r.current){const i=u[e.size].height,o=Math.max(u[e.size].height,n);r.current.style.height=`${i}px`;const g=r.current.scrollHeight;let $=n;e.isAutoHeight&&!e.height?$=Math.max(i,Math.min(g,o)):$=Math.max(i,n),r.current.style.height=`${$}px`,r.current.style.minHeight=`${i}px`,r.current.style.maxHeight=`${o}px`,r.current.scrollHeight>o?r.current.style.overflowY="auto":r.current.style.overflowY="hidden"}},[e.height,e.isAutoHeight,e.size]),b=s.useCallback(()=>{if(e.height)d(e.height);else if(e.maxRows){const n=a.font.sizeDefault.default*a.font.lineHeight,i=e.maxRows?n*e.maxRows:n;d(i+u[e.size].padding*2-8)}else d(u[e.size].height)},[d,e.height,e.maxRows,e.size,a.font.lineHeight,a.font.sizeDefault.default]);return s.useEffect(()=>{b()},[b,e.isAutoHeight,e.value]),l.jsxDEV(l.Fragment,{children:[l.jsxDEV(V,{$isTextAreaEffect:e.isTextAreaEffect,className:e.className,$isDisabled:e.isDisabled,$width:e.width,children:l.jsxDEV(B,{ref:r,$isResize:e.isResize,$isError:e.isError,$isTextAreaEffect:e.isTextAreaEffect,$isLoading:e.isLoading,$genre:e.genre,$size:e.size,$isBold:e.isBold,$isDisabled:e.isDisabled,disabled:e.isDisabled,readOnly:e.isReadOnly,required:e.isRequired,defaultValue:e.defaultValue,value:e.value??"",placeholder:e.placeholder,onChange:n=>h(n.target.value),onBlur:e.onBlur,onFocus:e.onFocus,name:e.name,id:e.id},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:79,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:73,columnNumber:7},void 0),e.isError&&e.errorMessage&&l.jsxDEV(q,{$size:e.size,$width:e.width,$isErrorAbsolute:e.isErrorAbsolute,children:e.errorMessage},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:111,columnNumber:9},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.tsx",lineNumber:72,columnNumber:5},void 0)};try{f.displayName="TextArea",f.__docgenInfo={description:"",displayName:"TextArea",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},isErrorAbsolute:{defaultValue:null,description:"",name:"isErrorAbsolute",required:!1,type:{name:"boolean"}},isAllowEmptyFormatting:{defaultValue:null,description:"",name:"isAllowEmptyFormatting",required:!1,type:{name:"boolean"}},genre:{defaultValue:null,description:"",name:"genre",required:!0,type:{name:"enum",value:[{value:'"gray"'},{value:'"grayBorder"'},{value:'"blackBorder"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"",name:"maxRows",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"largeMedium"'},{value:'"mediumSmall"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isResize:{defaultValue:null,description:"",name:"isResize",required:!1,type:{name:"boolean"}},isAutoHeight:{defaultValue:null,description:"",name:"isAutoHeight",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},isReadOnly:{defaultValue:null,description:"",name:"isReadOnly",required:!1,type:{name:"boolean"}},isTextAreaEffect:{defaultValue:null,description:"",name:"isTextAreaEffect",required:!1,type:{name:"boolean"}},isRequired:{defaultValue:null,description:"",name:"isRequired",required:!1,type:{name:"boolean"}},isNoSpaces:{defaultValue:null,description:"",name:"isNoSpaces",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLTextAreaElement>"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"KeyboardEventHandler<HTMLTextAreaElement>"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},isBold:{defaultValue:null,description:"",name:"isBold",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | null"}}}}}catch{}const V=x.div`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: ${e=>e.$width??"100%"};
  ${e=>e.$width&&t`
      max-width: ${e.$width};
    `}
`,v=t`
  ${e=>T({...u[e.$size],$isErrorAbsolute:e.$isErrorAbsolute})};
`,T=e=>t`
  ${e.$isErrorAbsolute?t`
        position: absolute;
        padding-top: 6px;
        padding-left: ${e.padding}px;
        color: ${a=>a.theme.colors.danger};
      `:t`
        position: static;
        padding: 0px ${e.padding}px;
        color: ${a=>a.theme.colors.danger};
      `}
`,q=x.div`
  ${m(12,400,"Inter")};
  width: ${e=>e.$width??"100%"};
  ${v}
`,z=t`
  ${e=>e.$isError&&t`
      border-color: ${a=>a.theme.colors.danger};
      &:focus,
      &:active,
      &:focus-visible {
        border-color: ${a=>a.theme.colors.danger};
      }
    `}
`,H=t`
  &::placeholder,
  &::-webkit-input-placeholder {
    ${e=>m(16,e.$isBold?500:400,"Inter")};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
    line-height: ${e=>e.theme.font.lineHeight};
  }
  &:-ms-input-placeholder {
    ${e=>m(16,e.$isBold?500:400,"Inter")};
    color: ${e=>e.theme.colors.input[e.$genre].color.placeholder};
    opacity: 1;
    line-height: ${e=>e.theme.font.lineHeight};
  }
`,N=t`
  ${e=>t`
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
      outline: 1px solid ${e.theme.colors.focus};
      border-color: ${e.theme.colors.input[e.$genre].border.rest};
      background: ${e.theme.colors.input[e.$genre].background.rest};
      color: ${e.theme.colors.input[e.$genre].color.rest};
    }
  `};
`,D=t`
  ${e=>R(u[e.$size])};
`,R=e=>t`
  padding: ${e.padding-4}px ${e.padding}px ${e.padding-6}px ${e.padding}px;
  border-radius: ${e.radius}px;
`,k=t`
  opacity: ${e=>e.$isDisabled?.5:1};
`,j=t`
  ${e=>e.$isTextAreaEffect&&t`
      box-shadow: ${e.theme.effects.input};
    `}
`,S=t`
  ${e=>!e.$isResize&&t`
      resize: none;
    `}
`,M=t`
  overflow-x: hidden;
  box-sizing: border-box;
  width: 100% !important;
  border: 1px inset;
  transition:
    color,
    border,
    background-color ${e=>e.theme.transition.default},
    outline 0s;
  white-space: nowrap;
  text-overflow: ellipsis;
  outline: none;
  text-wrap: auto;

  ${e=>m(16,e.$isBold?500:400,"Inter")};
  line-height: ${e=>e.theme.font.lineHeight};

  ${S};
  ${D};
  ${N};
  ${z};
  ${H};
  ${k};
  ${j};
`,B=x.textarea`
  ${M};
`,Z={component:f,title:"Component/TextArea"},C={genre:"blackBorder",size:"largeMedium",isError:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,isLoading:!1,isAutoHeight:!0,width:"300px",maxRows:8},_=e=>{const[a,h]=s.useState("");return l.jsxDEV(f,{...e,value:a,onChange:r=>h(r)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.stories.tsx",lineNumber:25,columnNumber:10},void 0)},c={render:e=>l.jsxDEV(_,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/textarea/textarea.stories.tsx",lineNumber:28,columnNumber:19},void 0),args:{...C,errorMessage:"Error",isErrorAbsolute:!0,placeholder:"Default"}};var y,A,E;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <TextAreaStringWrapper {...args} />,
  args: {
    ...defaultArgs,
    errorMessage: 'Error',
    isErrorAbsolute: true,
    placeholder: 'Default'
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const J=["Default"];export{c as Default,J as __namedExportsOrder,Z as default};
