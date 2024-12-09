import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{B as m}from"./button-DxJKBbe2.js";import{S as se}from"./stack-gMuxSjiR.js";import{r as o}from"./index-DJO9vBfz.js";import{n as ce,d as g,l as f}from"./styled-components.browser.esm-CCP31c1y.js";import{I as ue}from"./icon.styles-ig3CQChh.js";import{L as me}from"./loading.styles-92ldLbyd.js";import{J as fe}from"./theme-6wvtFABo.js";import"./typography-3k44A8Yn.js";import{g as Z}from"./typography.functions-_Xr-RK7k.js";import{r as ge}from"./base.styles-BarGonPG.js";import{A as xe,m as he}from"./index-C20QuurF.js";import"./theme.global-j_wjL8sr.js";import"./index-rCr475hU.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function ye(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let j;const Te=new Uint8Array(16);function be(){if(!j){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");j=crypto.getRandomValues.bind(crypto)}return j(Te)}const _e=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),G={randomUUID:_e};function J(e,t,b){if(G.randomUUID&&!t&&!e)return G.randomUUID();e=e||{};const u=e.random||(e.rng||be)();return u[6]=u[6]&15|64,u[8]=u[8]&63|128,ye(u)}const ee=o.createContext(null),V=e=>{var P,U,B,H,z,F;const t=o.useMemo(()=>e.visibleToasts,[e.visibleToasts]),b=o.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.description},[(P=e==null?void 0:e.default)==null?void 0:P.description]),u=o.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.title},[(U=e==null?void 0:e.default)==null?void 0:U.title]),C=o.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.button},[(B=e==null?void 0:e.default)==null?void 0:B.button]),_=o.useMemo(()=>{var n;return(n=e==null?void 0:e.default)==null?void 0:n.hidingTime},[(H=e==null?void 0:e.default)==null?void 0:H.hidingTime]),k=o.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.hidingMode)??"clickOnButton"},[(z=e==null?void 0:e.default)==null?void 0:z.hidingMode]),p=o.useMemo(()=>{var n;return((n=e==null?void 0:e.default)==null?void 0:n.genre)??ke},[(F=e==null?void 0:e.default)==null?void 0:F.genre]),I=o.useMemo(()=>e.position.includes("top"),[e.position]),[v,R]=o.useState([]),[ne,A]=o.useState(!1),te=o.useCallback(()=>{A(!0)},[]),D=o.useCallback(()=>{A(!1)},[]),h=o.useCallback(n=>{R(l=>{const c=l.find(a=>a.id===n);if(!c)return l;const d=c.index,s=l.filter(a=>a.id!==n).map(a=>({...a,index:a.index>d?a.index-1:a.index}));return s.length===0&&D(),s})},[D]),y=o.useCallback(n=>{const l=n.id??J(),c=n.hidingTime??_;R(d=>{const s=d.findIndex(T=>T.id===l);let a;if(s!==-1)a=[...d],a[s]={...n,id:l,index:d[s].index};else{a=d.map(S=>({...S,index:S.index+1}));const T={...n,id:l,index:0};a.unshift(T)}return a}),c!==void 0&&setTimeout(()=>{h(l)},c)},[_,h]),ie=o.useCallback((n,l,c)=>{const d=J();return y({...l,id:d,isLoading:!0}),n.then(s=>{y({...c(s,void 0),id:d})}).catch(s=>{y({...c(void 0,s),id:d})})},[y]),oe=o.useCallback(n=>{h(n)},[h]),q=ce();return i.jsxs(ee.Provider,{value:{toast:y,promise:ie,remove:h,contentHistory:v},children:[i.jsx(E,{$position:e.position,$gap:e.gap,onMouseEnter:te,onMouseLeave:D,children:i.jsx(xe,{children:v.map(n=>{const l=n.index,c=t?l>t:!1,d=t?l>t-1:!1,s=t?l==t-1:!1,a=n.genre??p,T=q.colors.sonner[a].icon.color,S=q.colors.sonner[a].button.genre,ae=n.hidingMode??k,re="content"in n?n.content:!1,le="title"in n?n.title:!1,de="description"in n?n.description:!1;return i.jsx(Se,{isMoreThanLastViewIndexPlusOne:c,isMoreThanLastViewIndex:d,isLastViewIndex:s,isTop:I,id:n.id,icon:n.icon,isLoading:n.isLoading,index:l,iconColor:T,buttonGenre:S,hidingMode:ae,isHovered:ne,genre:a,content:re,title:le||u,description:de||b,button:n.button??C??pe,handleOnClick:oe},n.id)})})}),e.children]})},ve=e=>i.jsx(he.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?x:-x:e.isTop?-x:x},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*Ve,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${X}px`:"initial",marginBottom:e.isTop?"initial":e.isHovered||e.index===0?"0px":`-${X}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-x:x},transition:{type:"spring",duration:Ce},children:i.jsxs($,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&i.jsx(M,{children:e.isLoading?i.jsx(me,{size:"medium",color:fe[e.iconColor]}):e.icon&&i.jsx(ue,{primaryColor:e.iconColor,name:e.icon,type:"curved",size:"medium"})}),i.jsx(N,{children:e.content?e.content:i.jsxs(i.Fragment,{children:[e.title&&i.jsx(W,{$genre:e.genre,children:e.title}),e.description&&i.jsx(L,{$genre:e.genre,children:e.description})]})}),e.button&&e.button.content&&i.jsx(O,{children:i.jsx(m,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content})})]})},e.id),Se=o.memo(ve);try{V.displayName="ProviderSonner",V.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const we=()=>{const e=o.useContext(ee);if(!e)throw new Error("useSonnerContext must be used within an ProviderSonner");return e},E=g.div`
  position: fixed;
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  margin: 10px;
  gap: ${e=>e.$gap}px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  ${ge}
  ${e=>e.$position==="bottom-center"?f`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: flex-start;
          flex-direction: column-reverse;
        `:e.$position==="bottom-left"?f`
            left: 0;
            bottom: 0;
            justify-content: flex-start;
            flex-direction: column-reverse;
          `:e.$position==="bottom-right"?f`
              right: 0;
              bottom: 0;
              justify-content: flex-start;
              flex-direction: column-reverse;
            `:e.$position==="top-right"?f`
                top: 0;
                right: 0;
                justify-content: flex-end;
                flex-direction: column;
              `:e.$position==="top-left"?f`
                  top: 0;
                  left: 0;
                  justify-content: flex-end;
                  flex-direction: column;
                `:e.$position==="top-center"?f`
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    justify-content: flex-end;
                    flex-direction: column;
                  `:f``}
`,$=g.div`
  background: ${e=>e.theme.colors.sonner[e.$genre].wrapper.background};
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
  transition:
    background-color ${e=>e.theme.transition},
    box-shadow ${e=>e.theme.transition},
    border-color ${e=>e.theme.transition};
  &:hover {
    box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadowHover};
  }
`,N=g.div`
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
`,M=g.div``,W=g.div`
  ${Z(12,700,"Inter")}
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,L=g.div`
  ${Z(8,400,"Inter")}
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,O=g.div``;try{E.displayName="SonnerLayout",E.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{$.displayName="SonnerElementWrapper",$.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{N.displayName="SonnerContent",N.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{M.displayName="SonnerIcon",M.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{W.displayName="SonnerContentTitle",W.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{L.displayName="SonnerContentDescription",L.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{O.displayName="SonnerButtonWrapper",O.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const Ve=.04,x=100,Ce=.3,ke="black",X=60,pe={content:"Undo",onClick:()=>{}},He={component:V,title:"Provider/Sonner"},Ie=e=>i.jsx(V,{...e,children:i.jsx(De,{})}),De=()=>{const{toast:e,promise:t}=we(),b=()=>{t(new Promise(v=>setTimeout(()=>v("Data loaded successfully!"),3e3)),{title:"ЗАГРУЗКА",description:"Подождите, данные загружаются...",genre:"black",button:!1},()=>({title:"Офигенчик!",description:"Данные загрузились!",genre:"greenTransparent",icon:"Heart"}))},u=()=>{e({title:"Обычный тост",description:"Или чебурашка?",genre:"black"})},C=()=>{e({title:"Не обычный тост",description:"Да оно же без кнопки!",genre:"black",button:!1,hidingMode:"clickOnSonner"})},_=()=>{e({title:"Предупреждение!",description:"Или чебурашка?",genre:"yellowTransparent"})},k=()=>{e({title:"Ошибка!",description:"Или чебурашка?",genre:"redTransparent"})},p=()=>{e({title:"Успех!",description:"Или чебурашка?",genre:"greenTransparent"})},I=()=>{e({title:"Обычный тост?",description:"Да оно ж само исчезнет!",genre:"black",hidingTime:3e3})};return i.jsxs(se,{p:"12px",gap:"8px",children:[i.jsx(m,{onClick:b,genre:"black",size:"medium",children:"Promise Toast!"}),i.jsx(m,{onClick:u,genre:"black",size:"medium",children:"Black Toast!"}),i.jsx(m,{onClick:C,genre:"black",size:"medium",children:"Without Button Toast!"}),i.jsx(m,{onClick:I,genre:"black",size:"medium",children:"With Hiding Time Toast!"}),i.jsx(m,{onClick:k,genre:"redTransparent",size:"medium",children:"Error Toast!"}),i.jsx(m,{onClick:_,genre:"yellowTransparent",size:"medium",children:"Warning Toast!"}),i.jsx(m,{onClick:p,genre:"greenTransparent",size:"medium",children:"Success Toast!"})]})},w={render:e=>i.jsx(Ie,{...e}),args:{visibleToasts:3,position:"bottom-left",gap:12}};var Y,K,Q;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <ProviderSonnerWrapper {...args} />,
  args: {
    visibleToasts: 3,
    position: 'bottom-left',
    gap: 12
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ze=["Default"];export{w as Default,ze as __namedExportsOrder,He as default};
