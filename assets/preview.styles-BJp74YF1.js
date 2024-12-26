import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{r}from"./index-DJO9vBfz.js";import{m as s,d as a}from"./styled-components.browser.esm-CCP31c1y.js";const o=e=>{const[i,n]=r.useState(!1);return r.useEffect(()=>{if("time"in e){const l=setTimeout(()=>{n(!0)},e.time);return()=>{clearTimeout(l)}}},[e]),r.useEffect(()=>{"isShow"in e&&n(!e.isShow)},[e]),t.jsxs(t.Fragment,{children:[t.jsx(d,{$visible:i,children:t.jsx(u,{})}),t.jsx(f,{$visible:i,children:i?e.children:null})]})};try{o.displayName="Preview",o.__docgenInfo={description:"",displayName:"Preview",props:{isShow:{defaultValue:null,description:"",name:"isShow",required:!0,type:{name:"boolean"}},time:{defaultValue:null,description:"",name:"time",required:!0,type:{name:"number"}}}}}catch{}const m=s`
  	0%, 100% {
		transform: none;
	}
	
	25% {
		transform: translateX(-100%);
	}
	
	50% {
		transform: translateX(-100%) translateY(-100%);
	}
	
	75% {
		transform: translateY(-100%);
	}
`,c=s`
  0%, 100% {
		transform: none;
	}
	
	25% {
		transform: translateX(100%);
	}
	
	50% {
		transform: translateX(100%) translateY(100%);
	}
	
	75% {
		transform: translateY(100%);
	}
`,d=a.div`
  background-color: ${e=>e.theme.palette.whiteStandard};

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$visible?0:1};
  transition:
    opacity ${e=>e.theme.transition.default},
    transform ${e=>e.theme.transition.default};
`,f=a.div`
  opacity: ${e=>e.$visible?1:0};
  transition:
    opacity ${e=>e.theme.transition.default},
    transform ${e=>e.theme.transition.default};
`,u=a.div`
  --color: ${e=>e.theme.palette.blueFocus};
  --size-mid: 6vmin;
  --size-dot: 1.5vmin;
  --size-bar: 0.4vmin;
  --size-square: 3vmin;

  &:before,
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
  }

  &::before,
  &::after {
    width: var(--size-square);
    height: var(--size-square);
    background-color: var(--color);
  }

  &::before {
    top: calc(50% - var(--size-square));
    left: calc(50% - var(--size-square));
    animation: ${c} 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  &::after {
    top: 50%;
    left: 50%;
    animation: ${m} 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }
  mation-delay: 0.12s;
`;export{o as P};
