import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{T as t}from"./typography-DY6CFA4c.js";import{P as r}from"./context-app.styles-X4_5Ws5F.js";import"./index-DJO9vBfz.js";import"./styled-components.browser.esm-CCP31c1y.js";import"./index-rCr475hU.js";import"./theme-3X06DcYZ.js";import"./index-C1dzxQ9A.js";import"./preview.styles-BJp74YF1.js";import"./theme.global-3OPldRDj.js";const O={component:r,title:"Context/App"},A=e.jsx("div",{style:{backgroundColor:"darkgoldenrod",padding:"2px",height:"100%",width:"100%"},children:e.jsx(t,{variant:"h8",textWrap:"nowrap",children:"Notification"})}),a=e.jsx("div",{style:{backgroundColor:"lightblue",padding:"10px",height:"100%",width:"100%"},children:e.jsx(t,{variant:"h1",textWrap:"nowrap",children:"Header"})}),l=e.jsx("div",{style:{backgroundColor:"lightcoral",padding:"10px",height:"100%",width:"100%"},children:e.jsx(t,{variant:"h1",children:"Footer"})}),T=e.jsx("div",{style:{backgroundColor:"lightgreen",padding:"10px",height:"100%",width:"100%"},children:e.jsx(t,{variant:"h6",children:"Left Aside"})}),v=e.jsx("div",{style:{backgroundColor:"lightyellow",padding:"10px",height:"100%",width:"100%"},children:e.jsx(t,{variant:"h6",children:"Right Aside"})}),w=e.jsx("div",{style:{backgroundColor:"beige",padding:"10px",height:"100%",width:"100%"},children:e.jsx(t,{children:"Nav"})}),d=e.jsxs("div",{style:{backgroundColor:"white",padding:"10px",height:"600px",width:"100%"},children:[e.jsx(t,{variant:"h1",children:"Title H1"}),e.jsx(t,{variant:"h2",children:"Title H2"}),e.jsx(t,{variant:"h3",children:"Title H3"}),e.jsx(t,{variant:"h4",children:"Title H4"}),e.jsx(t,{variant:"h5",children:"Title H5"}),e.jsx(t,{variant:"h6",children:"Title H6"})]}),i={args:{defaultPreview:{time:1e3},defaultBgColor:"black40",isScrollOutlet:!1,defaultTitle:"Storybook?",defaultDescription:"Description from Storybook?",notification:{component:A,height:"30px",heightTablet:"20px",heightMobile:"20px",isFixed:!1},header:{component:a,height:"80px",heightTablet:"60px",heightMobile:"40px"},leftAside:{component:T,width:"80px",widthTablet:"60px"},nav:{component:w,height:"80px",heightTablet:"60px",heightMobile:"40px"},rightAside:{component:v,width:"80px",widthTablet:"60px"},footer:{component:l,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:d}},n={render:h=>e.jsx(r,{...h}),args:{defaultBgColor:"black40",isScrollOutlet:!0,header:{component:a,height:"80px",heightTablet:"60px",heightMobile:"40px"},nav:{component:w,height:"80px",heightTablet:"60px",heightMobile:"40px"},leftAside:{component:T,width:"80px",widthTablet:"60px",isTopNav:!0},rightAside:{component:v,width:"80px",widthTablet:"60px",isTopFooter:!0,isTopHeader:!0},footer:{component:l,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:d}},o={render:h=>e.jsx(r,{...h}),args:{defaultBgColor:"black50",isScrollOutlet:!1,header:{component:a,height:"80px",heightTablet:"60px",heightMobile:"40px"},footer:{component:l,height:"80px",heightTablet:"60px",heightMobile:"40px"},children:d}};var p,s,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultPreview: {
      time: 1000
    },
    defaultBgColor: 'black40',
    isScrollOutlet: false,
    defaultTitle: 'Storybook?',
    defaultDescription: 'Description from Storybook?',
    notification: {
      component: defaultNotification,
      height: '30px',
      heightTablet: '20px',
      heightMobile: '20px',
      isFixed: false
    },
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var g,x,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black40',
    isScrollOutlet: true,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    nav: {
      component: defaultNav,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    leftAside: {
      component: defaultLeftAside,
      width: '80px',
      widthTablet: '60px',
      isTopNav: true
    },
    rightAside: {
      component: defaultRightAside,
      width: '80px',
      widthTablet: '60px',
      isTopFooter: true,
      isTopHeader: true
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var u,b,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <ProviderApp {...args} />,
  args: {
    defaultBgColor: 'black50',
    isScrollOutlet: false,
    header: {
      component: defaultHeader,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    footer: {
      component: defaultFooter,
      height: '80px',
      heightTablet: '60px',
      heightMobile: '40px'
    },
    children: defaultChildren
  }
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const B=["Default","AsideDifferentTop","WithoutAsides"];export{n as AsideDifferentTop,i as Default,o as WithoutAsides,B as __namedExportsOrder,O as default};
