import{n as ae,j as t,d as m,l as u}from"./styled-components.browser.esm-CyaOpMkv.js";import{B as c}from"./component-DkPovXgP.js";import{S as se}from"./component-ZyHH9g1r.js";import{r as i}from"./index-CnY36iC1.js";import{I as U}from"./component.styles-BbZ0qEuD.js";import{g as J}from"./component.functions-BGGwQnpg.js";import"./component-D15g8Xja.js";import{d as le,a as de}from"./style-pCqVTddV.js";import{v as F}from"./v4-C6aID195.js";import{A as ce}from"./context.constants-DH1WXOXG.js";import{m as ue}from"./proxy-BgqLTuwE.js";import"./component-BejfL9p2.js";import"./style-C2EjhzEB.js";import"./theme-yMIRbExU.js";import"./theme.global-C6REP-xE.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";const _=i.createContext(null),j=e=>{var q,A,P,z,B,H;const d=i.useMemo(()=>e.visibleToasts,[e.visibleToasts]),T=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.description},[(q=e==null?void 0:e.default)==null?void 0:q.description]),k=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.title},[(A=e==null?void 0:e.default)==null?void 0:A.title]),w=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.button},[(P=e==null?void 0:e.default)==null?void 0:P.button]),b=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.hidingTime},[(z=e==null?void 0:e.default)==null?void 0:z.hidingTime]),v=i.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.hidingMode)??"clickOnButton"},[(B=e==null?void 0:e.default)==null?void 0:B.hidingMode]),V=i.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.genre)??ye},[(H=e==null?void 0:e.default)==null?void 0:H.genre]),E=i.useMemo(()=>e.position.includes("top"),[e.position]),[g,R]=i.useState([]),[K,L]=i.useState(!1),Q=i.useCallback(()=>{L(!0)},[]),D=i.useCallback(()=>{L(!1)},[]),f=i.useCallback(n=>{R(o=>{const l=o.find(r=>r.id===n);if(!l)return o;const a=l.index,s=o.filter(r=>r.id!==n).map(r=>({...r,index:r.index>a?r.index-1:r.index}));return s.length===0&&D(),s})},[D]),x=i.useCallback(n=>{const o=n.id??F(),l=n.hidingTime??b;R(a=>{const s=a.findIndex(h=>h.id===o);let r;if(s!==-1)r=[...a],r[s]={...n,id:o,index:a[s].index};else{r=a.map(y=>({...y,index:y.index+1}));const h={...n,id:o,index:0};r.unshift(h)}return r}),l!==void 0&&setTimeout(()=>{f(o)},l)},[b,f]),ee=i.useCallback((n,o,l)=>{const a=F();return x({...o,id:a,isLoading:!0}),n.then(s=>{x({...l(s,void 0),id:a})}).catch(s=>{x({...l(void 0,s),id:a})})},[x]),ne=i.useCallback(n=>{f(n)},[f]),te=ae();return t.jsxDEV(_.Provider,{value:{toast:x,promise:ee,remove:f,contentHistory:g},children:[t.jsxDEV(p,{$zIndex:e.zIndex??he,$position:e.position,$gap:e.gap,onMouseEnter:Q,onMouseLeave:D,children:t.jsxDEV(ce,{children:g.map(n=>{const o=n.index,l=d?o>d:!1,a=d?o>d-1:!1,s=d?o==d-1:!1,r=n.genre??V,h=te.colors.sonner[r].button.genre,y=n.hidingMode??v,ie="content"in n?n.content:!1,re="title"in n?n.title:!1,oe="description"in n?n.description:!1;return t.jsxDEV(fe,{isMoreThanLastViewIndexPlusOne:l,isMoreThanLastViewIndex:a,isLastViewIndex:s,isTop:E,id:n.id,icon:n.icon,isLoading:n.isLoading,index:o,buttonGenre:h,hidingMode:y,isHovered:K,genre:r,content:ie,title:re||k,description:oe||T,button:n.button??w??Ne,handleOnClick:ne},n.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:185,columnNumber:15},void 0)})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:171,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:164,columnNumber:7},void 0),e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:163,columnNumber:5},void 0)},me=e=>t.jsxDEV(ue.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?S:-100:e.isTop?-100:S},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*be,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${G}px`:"0px",marginBottom:e.isTop||e.isHovered||e.index===0?"0px":`-${G}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-100:S},transition:{type:"spring",duration:ge},children:t.jsxDEV(I,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&t.jsxDEV($,{children:e.isLoading?t.jsxDEV(U,{size:"medium",type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:261,columnNumber:15},void 0):e.icon&&t.jsxDEV(U,{name:e.icon,type:"id",size:"medium"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:263,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:259,columnNumber:11},void 0),t.jsxDEV(C,{children:e.content?e.content:t.jsxDEV(t.Fragment,{children:[e.title&&t.jsxDEV(O,{$genre:e.genre,children:e.title},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:272,columnNumber:31},void 0),e.description&&t.jsxDEV(M,{$genre:e.genre,children:e.description},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:274,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:271,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:267,columnNumber:9},void 0),e.button&&e.button.content&&t.jsxDEV(W,{children:t.jsxDEV(c,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:282,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:281,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:254,columnNumber:7},void 0)},e.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:216,columnNumber:5},void 0),fe=i.memo(me);try{_.displayName="SonnerContext",_.__docgenInfo={description:"",displayName:"SonnerContext",props:{}}}catch{}try{j.displayName="ProviderSonner",j.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const xe=()=>{const e=i.useContext(_);if(!e)throw new Error("useSonner must be used within an ProviderSonner");return e},p=m.div`
  position: fixed;
  z-index: ${e=>e.$zIndex};
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  margin: 10px;
  gap: ${e=>e.$gap}px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  ${le}
  ${e=>e.$position==="bottom-center"?u`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: flex-start;
          flex-direction: column-reverse;
        `:e.$position==="bottom-left"?u`
            left: 0;
            bottom: 0;
            justify-content: flex-start;
            flex-direction: column-reverse;
          `:e.$position==="bottom-right"?u`
              right: 0;
              bottom: 0;
              justify-content: flex-start;
              flex-direction: column-reverse;
            `:e.$position==="top-right"?u`
                top: 0;
                right: 0;
                justify-content: flex-end;
                flex-direction: column;
              `:e.$position==="top-left"?u`
                  top: 0;
                  left: 0;
                  justify-content: flex-end;
                  flex-direction: column;
                `:e.$position==="top-center"?u`
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    justify-content: flex-end;
                    flex-direction: column;
                  `:u``}
`,I=m.div`
  background: ${e=>e.theme.colors.sonner[e.$genre].wrapper.background};
  color: ${e=>e.theme.colors.sonner[e.$genre].icon.color};
  border-radius: 12px;
  border-style: solid;
  border-color: ${e=>e.theme.colors.sonner[e.$genre].wrapper.borderColor};
  border-width: 1px;
  padding: 16px 20px 16px 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex-shrink: 1;
  min-width: 320px;
  min-height: 64px;
  transform-origin: center center;
  box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadow};
  overflow: visible;
  &:hover {
    box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadowHover};
  }
  ${de};
`,C=m.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex: 1;
  position: relative;
  overflow: hidden;
`,$=m.div`
  display: contents;
`,O=m.div`
  ${e=>J(12,700,e.theme.font.family)}
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,M=m.div`
  ${e=>J(8,400,e.theme.font.family)}
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,W=m.div``;try{p.displayName="SonnerLayout",p.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{I.displayName="SonnerElementWrapper",I.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="SonnerContent",C.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="SonnerIcon",$.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="SonnerContentTitle",O.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="SonnerContentDescription",M.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="SonnerButtonWrapper",W.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const he=100,be=.04,S=100,ge=.3,ye="black",G=60,Ne={content:"Undo",onClick:()=>{}},Ae={component:j,title:"Context/Sonner"},_e=e=>t.jsxDEV(j,{...e,children:t.jsxDEV(je,{},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:15,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:14,columnNumber:10},void 0),je=()=>{const{toast:e,promise:d}=xe(),T=()=>{d(new Promise(g=>setTimeout(()=>g("Data loaded successfully!"),3e3)),{title:"ЗАГРУЗКА",description:"Подождите, данные загружаются...",genre:"black",button:!1},()=>({title:"Офигенчик!",description:"Данные загрузились!",genre:"greenTransparent",icon:"Heart"}))},k=()=>{e({title:"Обычный тост",description:"Или чебурашка?",genre:"black"})},w=()=>{e({title:"Не обычный тост",description:"Да оно же без кнопки!",genre:"black",button:!1,hidingMode:"clickOnSonner"})},b=()=>{e({title:"Предупреждение!",description:"Или чебурашка?",genre:"yellowTransparent"})},v=()=>{e({title:"Ошибка!",description:"Или чебурашка?",genre:"redTransparent"})},V=()=>{e({title:"Успех!",description:"Или чебурашка?",genre:"greenTransparent"})},E=()=>{e({title:"Обычный тост?",description:"Да оно ж само исчезнет!",genre:"black",hidingTime:3e3})};return t.jsxDEV(se,{sx:{default:{padding:"12px",gap:"8px"}},children:[t.jsxDEV(c,{onClick:T,genre:"black",size:"medium",children:"Promise Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:87,columnNumber:7},void 0),t.jsxDEV(c,{onClick:k,genre:"black",size:"medium",children:"Black Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:90,columnNumber:7},void 0),t.jsxDEV(c,{onClick:w,genre:"black",size:"medium",children:"Without Button Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:93,columnNumber:7},void 0),t.jsxDEV(c,{onClick:E,genre:"black",size:"medium",children:"With Hiding Time Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:96,columnNumber:7},void 0),t.jsxDEV(c,{onClick:v,genre:"redTransparent",size:"medium",children:"Error Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:99,columnNumber:7},void 0),t.jsxDEV(c,{onClick:b,genre:"yellowTransparent",size:"medium",children:"Warning Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:102,columnNumber:7},void 0),t.jsxDEV(c,{onClick:V,genre:"greenTransparent",size:"medium",children:"Success Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:105,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:81,columnNumber:10},void 0)},N={render:e=>t.jsxDEV(_e,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/storybook-default/context-sonner.stories.tsx",lineNumber:111,columnNumber:19},void 0),args:{visibleToasts:3,position:"bottom-left",gap:12}};var X,Y,Z;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {
    visibleToasts: 3,
    position: 'bottom-left',
    gap: 12
  }
}`,...(Z=(Y=N.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Pe=["Sonner"];export{N as Sonner,Pe as __namedExportsOrder,Ae as default};
