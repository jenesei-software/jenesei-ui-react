import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";import{n as ee,d as c,l as s}from"./styled-components.browser.esm-CCP31c1y.js";import{B as te}from"./button-DS91_tax.js";import{I as ne}from"./icon.styles-Cg4ODpap.js";import{L as ie}from"./loading.styles-_WGkLspa.js";import{J as ae}from"./theme-3X06DcYZ.js";import"./theme.global-3OPldRDj.js";import"./typography-DY6CFA4c.js";import{g as W}from"./typography.functions-CeSMEUjp.js";import{r as oe}from"./base.styles-62mSIwMs.js";import{v as A}from"./v4-Ch9TGLTe.js";import{A as le,m as re}from"./index-C20QuurF.js";const de=i.createContext(null),k=e=>{var E,M,j,L,O,q;const u=i.useMemo(()=>e.visibleToasts,[e.visibleToasts]),P=i.useMemo(()=>{var t;return(t=e==null?void 0:e.default)==null?void 0:t.description},[(E=e==null?void 0:e.default)==null?void 0:E.description]),B=i.useMemo(()=>{var t;return(t=e==null?void 0:e.default)==null?void 0:t.title},[(M=e==null?void 0:e.default)==null?void 0:M.title]),H=i.useMemo(()=>{var t;return(t=e==null?void 0:e.default)==null?void 0:t.button},[(j=e==null?void 0:e.default)==null?void 0:j.button]),I=i.useMemo(()=>{var t;return(t=e==null?void 0:e.default)==null?void 0:t.hidingTime},[(L=e==null?void 0:e.default)==null?void 0:L.hidingTime]),U=i.useMemo(()=>{var t;return((t=e==null?void 0:e.default)==null?void 0:t.hidingMode)??"clickOnButton"},[(O=e==null?void 0:e.default)==null?void 0:O.hidingMode]),F=i.useMemo(()=>{var t;return((t=e==null?void 0:e.default)==null?void 0:t.genre)??fe},[(q=e==null?void 0:e.default)==null?void 0:q.genre]),z=i.useMemo(()=>e.position.includes("top"),[e.position]),[$,C]=i.useState([]),[G,N]=i.useState(!1),J=i.useCallback(()=>{N(!0)},[]),y=i.useCallback(()=>{N(!1)},[]),f=i.useCallback(t=>{C(o=>{const d=o.find(n=>n.id===t);if(!d)return o;const l=d.index,r=o.filter(n=>n.id!==t).map(n=>({...n,index:n.index>l?n.index-1:n.index}));return r.length===0&&y(),r})},[y]),x=i.useCallback(t=>{const o=t.id??A(),d=t.hidingTime??I;C(l=>{const r=l.findIndex(g=>g.id===o);let n;if(r!==-1)n=[...l],n[r]={...t,id:o,index:l[r].index};else{n=l.map(h=>({...h,index:h.index+1}));const g={...t,id:o,index:0};n.unshift(g)}return n}),d!==void 0&&setTimeout(()=>{f(o)},d)},[I,f]),X=i.useCallback((t,o,d)=>{const l=A();return x({...o,id:l,isLoading:!0}),t.then(r=>{x({...d(r,void 0),id:l})}).catch(r=>{x({...d(void 0,r),id:l})})},[x]),Y=i.useCallback(t=>{f(t)},[f]),D=ee();return a.jsxs(de.Provider,{value:{toast:x,promise:X,remove:f,contentHistory:$},children:[a.jsx(_,{$position:e.position,$gap:e.gap,onMouseEnter:J,onMouseLeave:y,children:a.jsx(le,{children:$.map(t=>{const o=t.index,d=u?o>u:!1,l=u?o>u-1:!1,r=u?o==u-1:!1,n=t.genre??F,g=D.colors.sonner[n].icon.color,h=D.colors.sonner[n].button.genre,K=t.hidingMode??U,Q="content"in t?t.content:!1,Z="title"in t?t.title:!1,p="description"in t?t.description:!1;return a.jsx(ce,{isMoreThanLastViewIndexPlusOne:d,isMoreThanLastViewIndex:l,isLastViewIndex:r,isTop:z,id:t.id,icon:t.icon,isLoading:t.isLoading,index:o,iconColor:g,buttonGenre:h,hidingMode:K,isHovered:G,genre:n,content:Q,title:Z||B,description:p||P,button:t.button??H??xe,handleOnClick:Y},t.id)})})}),e.children]})},se=e=>a.jsx(re.div,{layout:!0,initial:{opacity:0,scale:1,y:e.isLastViewIndex?e.isTop?m:-m:e.isTop?-m:m},animate:{y:0,opacity:e.isMoreThanLastViewIndex?0:1,pointerEvents:e.isMoreThanLastViewIndex?"none":"auto",display:e.isMoreThanLastViewIndex?"none":"flex",scale:e.isHovered?1:1-e.index*ue,marginTop:e.isTop?e.isHovered||e.index===0?"0px":`-${R}px`:"initial",marginBottom:e.isTop?"initial":e.isHovered||e.index===0?"0px":`-${R}px`},style:{zIndex:-e.index},whileInView:{opacity:e.isMoreThanLastViewIndex?0:1},exit:{opacity:0,y:e.isTop?-m:m},transition:{type:"spring",duration:me},children:a.jsxs(b,{$genre:e.genre,onClick:()=>e.hidingMode==="clickOnSonner"&&e.handleOnClick(e.id,"clickOnSonner"),children:[(e.isLoading||e.icon)&&a.jsx(T,{children:e.isLoading?a.jsx(ie,{size:"medium",color:ae[e.iconColor]}):e.icon&&a.jsx(ne,{primaryColor:e.iconColor,name:e.icon,type:"curved",size:"medium"})}),a.jsx(v,{children:e.content?e.content:a.jsxs(a.Fragment,{children:[e.title&&a.jsx(S,{$genre:e.genre,children:e.title}),e.description&&a.jsx(w,{$genre:e.genre,children:e.description})]})}),e.button&&e.button.content&&a.jsx(V,{children:a.jsx(te,{genre:e.buttonGenre,size:"small",onClick:()=>e.hidingMode==="clickOnButton"&&e.handleOnClick(e.id,"clickOnButton"),children:e.button.content})})]})},e.id),ce=i.memo(se);try{k.displayName="ProviderSonner",k.__docgenInfo={description:"",displayName:"ProviderSonner",props:{gap:{defaultValue:null,description:"",name:"gap",required:!0,type:{name:"number"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom-right"'},{value:'"bottom-left"'},{value:'"top-right"'},{value:'"top-left"'},{value:'"bottom-center"'},{value:'"top-center"'}]}},visibleToasts:{defaultValue:null,description:"",name:"visibleToasts",required:!1,type:{name:"number"}},default:{defaultValue:null,description:"",name:"default",required:!0,type:{name:'Omit<SonnerContentStandardProps, "index">'}}}}}catch{}const _=c.div`
  position: fixed;
  max-height: calc(100dvh - 20px);
  width: 320px;
  display: flex;
  margin: 10px;
  gap: ${e=>e.$gap}px;
  box-sizing: content-box;
  overflow-y: visible;
  overflow-x: visible;
  ${oe}
  ${e=>e.$position==="bottom-center"?s`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          justify-content: flex-start;
          flex-direction: column-reverse;
        `:e.$position==="bottom-left"?s`
            left: 0;
            bottom: 0;
            justify-content: flex-start;
            flex-direction: column-reverse;
          `:e.$position==="bottom-right"?s`
              right: 0;
              bottom: 0;
              justify-content: flex-start;
              flex-direction: column-reverse;
            `:e.$position==="top-right"?s`
                top: 0;
                right: 0;
                justify-content: flex-end;
                flex-direction: column;
              `:e.$position==="top-left"?s`
                  top: 0;
                  left: 0;
                  justify-content: flex-end;
                  flex-direction: column;
                `:e.$position==="top-center"?s`
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    justify-content: flex-end;
                    flex-direction: column;
                  `:s``}
`,b=c.div`
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
    background-color ${e=>e.theme.transition.default},
    box-shadow ${e=>e.theme.transition.default},
    border-color ${e=>e.theme.transition.default};
  &:hover {
    box-shadow: ${e=>e.theme.colors.sonner[e.$genre].wrapper.boxShadowHover};
  }
`,v=c.div`
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
`,T=c.div``,S=c.div`
  ${W(12,700,"Inter")}
  color:  ${e=>e.theme.colors.sonner[e.$genre].title.color};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,w=c.div`
  ${W(8,400,"Inter")}
  color:${e=>e.theme.colors.sonner[e.$genre].description.color};
  text-align: left;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,V=c.div``;try{_.displayName="SonnerLayout",_.__docgenInfo={description:"",displayName:"SonnerLayout",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{b.displayName="SonnerElementWrapper",b.__docgenInfo={description:"",displayName:"SonnerElementWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{v.displayName="SonnerContent",v.__docgenInfo={description:"",displayName:"SonnerContent",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{T.displayName="SonnerIcon",T.__docgenInfo={description:"",displayName:"SonnerIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{S.displayName="SonnerContentTitle",S.__docgenInfo={description:"",displayName:"SonnerContentTitle",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{w.displayName="SonnerContentDescription",w.__docgenInfo={description:"",displayName:"SonnerContentDescription",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{V.displayName="SonnerButtonWrapper",V.__docgenInfo={description:"",displayName:"SonnerButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const ue=.04,m=100,me=.3,fe="black",R=60,xe={content:"Undo",onClick:()=>{}};export{k as P,de as S};
