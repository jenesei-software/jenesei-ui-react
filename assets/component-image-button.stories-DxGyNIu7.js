import{I as r}from"./component-CRmrMLGk.js";import"./styled-components.browser.esm-CyaOpMkv.js";import"./index-CnY36iC1.js";import"./area-ChQ9N3im.js";import"./component.styles-Xz0ZKPYU.js";import"./theme.global-CKNmeFpz.js";import"./style-IM99yq-C.js";import"./style-CHwZntvm.js";import"./component-BPa6yCZC.js";import"./component-kqn1VMYM.js";import"./proxy-BS1eh56F.js";import"./jsx-runtime-uV6E1Fxi.js";import"./index-DgedcAJ4.js";import"./consts-C0czNpwt.js";import"./context.constants-CBKrka8W.js";import"./area-DMU-5v0B.js";import"./context.hooks-BLFvBG7O.js";import"./v4-C6aID195.js";import"./component-DVjaNw_-.js";import"./component.functions-BGGwQnpg.js";import"./component-Dh-bcLtB.js";import"./index-Dyxk8dpP.js";import"./tiny-invariant-DKC21gSL.js";import"./context-DdocyObD.js";import"./component.constants-BKYiBj0u.js";const y={component:r,title:"Component/Image/Button"},e={args:{button:{genre:"blackBorder",size:"medium",children:"Add Image"},dialog:{button:{genre:"blackBorder",size:"medium"},buttonDelete:{genre:"blackBorder",size:"medium"}},locale:{dialogSave:"Save",dialogCancel:"Cancel",dialogAddImage:"Add",dialogDeleteImage:"Delete"},imageSettings:{aspect:2/2,maxCount:1,maxSize:5*1024*1024},onSave(o){o?o.forEach(n=>{console.log(`Added file: ${n.name}, size: ${n.isNew} bytes`)}):console.log("No files added")}}};var t,i,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const _=["Button"];export{e as Button,_ as __namedExportsOrder,y as default};
