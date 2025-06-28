import{r as i,n as ae,j as t,A as se,m as le,g as de,l as u,d as m,b as ce,S as ue}from"./iframe-NXvRQG3e.js";import{B as c}from"./component-DaaONhq_.js";import{I as U}from"./component.styles-BphGMU0u.js";import{g as J}from"./component-uNoer6cp.js";import{v as F}from"./v4-C6aID195.js";import"./index-CpXWg0wM.js";const _=i.createContext(null),j=e=>{var L,q,P,z,B,H;const d=i.useMemo(()=>e.visibleToasts,[e.visibleToasts]),T=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.description},[(L=e==null?void 0:e.default)==null?void 0:L.description]),k=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.title},[(q=e==null?void 0:e.default)==null?void 0:q.title]),w=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.button},[(P=e==null?void 0:e.default)==null?void 0:P.button]),g=i.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.hidingTime},[(z=e==null?void 0:e.default)==null?void 0:z.hidingTime]),V=i.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.hidingMode)??"clickOnButton"},[(B=e==null?void 0:e.default)==null?void 0:B.hidingMode]),E=i.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.genre)??ye},[(H=e==null?void 0:e.default)==null?void 0:H.genre]),D=i.useMemo(()=>e.position.includes("top"),[e.position]),[y,R]=i.useState([]),[K,A]=i.useState(!1),Q=i.useCallback(()=>{A(!0)},[]),S=i.useCallback(()=>{A(!1)},[]),x=i.useCallback(n=>{R(r=>{const l=r.find(o=>o.id===n);if(!l)return r;const a=l.index,s=r.filter(o=>o.id!==n).map(o=>({...o,index:o.index>a?o.index-1:o.index}));return s.length===0&&S(),s})},[S]),h=i.useCallback(n=>{const r=n.id??F(),l=n.hidingTime??g;R(a=>{const s=a.findIndex(b=>b.id===r);let o;if(s!==-1)o=[...a],o[s]={...n,id:r,index:a[s].index};else{o=a.map(N=>({...N,index:N.index+1}));const b={...n,id:r,index:0};o.unshift(b)}return o}),l!==void 0&&setTimeout(()=>{x(r)},l)},[g,x]),ee=i.useCallback((n,r,l)=>{const a=F();return h({...r,id:a,isLoading:!0}),n.then(s=>{h({...l(s,void 0),id:a})}).catch(s=>{h({...l(void 0,s),id:a})})},[h]),ne=i.useCallback(n=>{x(n)},[x]),te=ae();return t.jsxDEV(_.Provider,{value:{toast:h,promise:ee,remove:x,contentHistory:y},children:[t.jsxDEV(I,{$zIndex:e.zIndex??he,$position:e.position,$gap:e.gap,onMouseEnter:Q,onMouseLeave:S,children:t.jsxDEV(se,{children:y.map(n=>{const r=n.index,l=d?r>d:!1,a=d?r>d-1:!1,s=d?r==d-1:!1,o=n.genre??E,b=te.colors.sonner[o].button.genre,N=n.hidingMode??V,ie="content"in n?n.content:!1,oe="title"in n?n.title:!1,re="description"in n?n.description:!1;return t.jsxDEV(fe,{isMoreThanLastViewIndexPlusOne:l,isMoreThanLastViewIndex:a,isLastViewIndex:s,isTop:D,id:n.id,icon:n.icon,isLoading:n.isLoading,index:r,buttonGenre:b,hidingMode:N,isHovered:K,genre:o,content:ie,title:oe||k,description:re||T,button:n.button??w??Ne,handleOnClick:ne},n.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:185,columnNumber:15},void 0)})},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:171,columnNumber:9},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:164,columnNumber:7},void 0),e.children]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:163,columnNumber:5},void 0)},me=e=>t.jsxDEV(le.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?f:-f:e.isTop?-f:f},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*be,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${G}px`:"0px",marginBottom:e.isTop||e.isHovered||e.index===0?"0px":`-${G}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-f:f},transition:{type:"spring",duration:ge},children:t.jsxDEV(C,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&t.jsxDEV(p,{children:e.isLoading?t.jsxDEV(U,{size:"medium",type:"loading",name:"Line"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:261,columnNumber:15},void 0):e.icon&&t.jsxDEV(U,{name:e.icon,type:"id",size:"medium"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:263,columnNumber:29},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:259,columnNumber:11},void 0),t.jsxDEV($,{children:e.content?e.content:t.jsxDEV(t.Fragment,{children:[e.title&&t.jsxDEV(O,{$genre:e.genre,children:e.title},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:272,columnNumber:31},void 0),e.description&&t.jsxDEV(M,{$genre:e.genre,children:e.description},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:274,columnNumber:17},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:271,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:267,columnNumber:9},void 0),e.button&&e.button.content&&t.jsxDEV(W,{children:t.jsxDEV(c,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:282,columnNumber:13},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:281,columnNumber:11},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:254,columnNumber:7},void 0)},e.id,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/contexts/context-sonner/context.tsx",lineNumber:216,columnNumber:5},void 0),fe=i.memo(me);try{_.displayName="SonnerContext",_.__docgenInfo={description:"",displayName:"SonnerContext",props:{}}}catch{}try{j.displayName="ProviderSonner",j.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const xe=()=>{const e=i.useContext(_);if(!e)throw new Error("useSonner must be used within an ProviderSonner");return e},I=m.div`
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
  ${de}
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
`,C=m.div`
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
  ${ce};
`,$=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  flex: 1;
  position: relative;
  overflow: hidden;
`,p=m.div`
  display: contents;
`,O=m.div`
  ${e=>J(14,700,e.theme.font.family)}
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,M=m.div`
  ${e=>J(12,400,e.theme.font.family)}
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,W=m.div``;try{I.displayName="SonnerLayout",I.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{C.displayName="SonnerElementWrapper",C.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="SonnerContent",$.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{p.displayName="SonnerIcon",p.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="SonnerContentTitle",O.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="SonnerContentDescription",M.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="SonnerButtonWrapper",W.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const he=100,be=.04,f=100,ge=.3,ye="black",G=60,Ne={content:"Undo",onClick:()=>{}},De={component:j,title:"Context/Sonner"},ve=e=>t.jsxDEV(j,{...e,children:t.jsxDEV(_e,{},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:15,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:14,columnNumber:10},void 0),_e=()=>{const{toast:e,promise:d}=xe(),T=()=>{d(new Promise(y=>setTimeout(()=>y("Data loaded successfully!"),3e3)),{title:"ЗАГРУЗКА",description:"Подождите, данные загружаются...",genre:"black",button:!1},()=>({title:"Офигенчик! Офигенчик! Офигенчик!",description:"Данные загрузились! Данные загрузились! Данные загрузились! Данные загрузились!",genre:"greenTransparent",icon:"Activity"}))},k=()=>{e({title:"Обычный тост",description:"Или чебурашка?",genre:"black"})},w=()=>{e({title:"Не обычный тост",description:"Да оно же без кнопки!",genre:"black",button:!1,hidingMode:"clickOnSonner"})},g=()=>{e({title:"Предупреждение!",description:"Или чебурашка?",genre:"yellowTransparent"})},V=()=>{e({title:"Ошибка!",description:"Или чебурашка?",genre:"redTransparent"})},E=()=>{e({title:"Успех!",description:"Или чебурашка?",genre:"greenTransparent"})},D=()=>{e({title:"Обычный тост?",description:"Да оно ж само исчезнет!",genre:"black",hidingTime:3e3})};return t.jsxDEV(ue,{sx:{default:{padding:"12px",gap:"8px"}},children:[t.jsxDEV(c,{onClick:T,genre:"black",size:"medium",children:"Promise Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:87,columnNumber:7},void 0),t.jsxDEV(c,{onClick:k,genre:"black",size:"medium",children:"Black Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:90,columnNumber:7},void 0),t.jsxDEV(c,{onClick:w,genre:"black",size:"medium",children:"Without Button Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:93,columnNumber:7},void 0),t.jsxDEV(c,{onClick:D,genre:"black",size:"medium",children:"With Hiding Time Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:96,columnNumber:7},void 0),t.jsxDEV(c,{onClick:V,genre:"redTransparent",size:"medium",children:"Error Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:99,columnNumber:7},void 0),t.jsxDEV(c,{onClick:g,genre:"yellowTransparent",size:"medium",children:"Warning Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:102,columnNumber:7},void 0),t.jsxDEV(c,{onClick:E,genre:"greenTransparent",size:"medium",children:"Success Toast!"},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:105,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:81,columnNumber:10},void 0)},v={render:e=>t.jsxDEV(ve,{...e},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/.storybook-stories/default/context-sonner.stories.tsx",lineNumber:111,columnNumber:19},void 0),args:{visibleToasts:3,position:"bottom-left",gap:12}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {
    visibleToasts: 3,
    position: 'bottom-left',
    gap: 12
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Se=["Sonner"];export{v as Sonner,Se as __namedExportsOrder,De as default};
