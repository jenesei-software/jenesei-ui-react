import{r as d,j as o}from"./iframe-NXvRQG3e.js";import{I as p}from"./consts-BHQTl92h.js";import{u as f}from"./use-JMJcFmEA.js";import{B as b}from"./component-DaaONhq_.js";import"./area-Cgfu1e9B.js";import"./component.styles-BphGMU0u.js";import"./component.constants-HdbJcpCS.js";import"./context.hooks-LFC01ji2.js";import"./v4-C6aID195.js";import"./component-uNoer6cp.js";import"./index-CpXWg0wM.js";const i=e=>{const t=d.useRef(null),c=d.useCallback(()=>{var n;(n=t.current)==null||n.click()},[]),{handleAddFiles:g}=f({onSave:e.onSave,locale:e.locale,dialog:e.dialog,imageSettings:e.imageSettings,refInput:t});return o.jsxDEV(o.Fragment,{children:[o.jsxDEV(b,{...e.button,onClick:n=>{var l,r;(r=(l=e.button).onClick)==null||r.call(l,n),c()},children:e.button.children||e.locale.buttonAdd},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-button/component.tsx",lineNumber:26,columnNumber:7},void 0),o.jsxDEV("input",{ref:t,type:"file",accept:p,multiple:!0,style:{display:"none"},onChange:n=>{n.target.files&&g(n.target.files)}},void 0,!1,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-button/component.tsx",lineNumber:35,columnNumber:7},void 0)]},void 0,!0,{fileName:"/home/runner/work/jenesei-ui-react/jenesei-ui-react/src/components/image-button/component.tsx",lineNumber:25,columnNumber:5},void 0)};try{i.displayName="ImageButton",i.__docgenInfo={description:"",displayName:"ImageButton",props:{button:{defaultValue:null,description:"",name:"button",required:!0,type:{name:"ButtonProps"}},dialog:{defaultValue:null,description:"",name:"dialog",required:!0,type:{name:"{ button: ButtonProps; buttonDelete: ButtonProps; }"}},imageSettings:{defaultValue:null,description:"",name:"imageSettings",required:!0,type:{name:"{ maxSize: number; maxCount: number; aspect?: number | undefined; }"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"{ buttonAdd: string; dialogSave: string; dialogCancel: string; dialogAddImage: string; dialogDeleteImage: string; }"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(files: ImageSelectItemProps[] | null) => void"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"SXProps"}}}}}catch{}const D={component:i,title:"Component/Image/Button"},a={args:{button:{genre:"blackBorder",size:"medium",children:"Add Image"},dialog:{button:{genre:"blackBorder",size:"medium"},buttonDelete:{genre:"blackBorder",size:"medium"}},locale:{buttonAdd:"Add Image",dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete"},imageSettings:{aspect:2/2,maxCount:1,maxSize:5*1024*1024},onSave(e){e?e.forEach(t=>{console.log(`Added file: ${t.name}, size: ${t.isNew} bytes`)}):console.log("No files added")}}};var u,m,s;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    button: {
      genre: 'blackBorder',
      size: 'medium',
      children: 'Add Image'
    },
    dialog: {
      button: {
        genre: 'blackBorder',
        size: 'medium'
      },
      buttonDelete: {
        genre: 'blackBorder',
        size: 'medium'
      }
    },
    locale: {
      buttonAdd: 'Add Image',
      dialogSave: 'Save',
      dialogCancel: 'Cancel',
      dialogAddImage: 'Add',
      dialogDeleteImage: 'Delete'
    },
    imageSettings: {
      aspect: 2 / 2,
      maxCount: 1,
      maxSize: 5 * 1024 * 1024 // 5 MB
    },
    onSave(files) {
      if (files) {
        files.forEach(file => {
          console.log(\`Added file: \${file.name}, size: \${file.isNew} bytes\`);
        });
      } else {
        console.log('No files added');
      }
    }
  }
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const j=["Button"];export{a as Button,j as __namedExportsOrder,D as default};
