"use strict";(self.webpackChunkmonogame_aseprite_docs=self.webpackChunkmonogame_aseprite_docs||[]).push([[326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,g=u["".concat(d,".").concat(m)]||u[m]||l[m]||o;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={id:"using-the-mgcb-editor",title:"Using the MGCB Editor",sidebar_label:"Using the MGCB Editor"},s=void 0,a={unversionedId:"guides/using-the-mgcb-editor",id:"guides/using-the-mgcb-editor",title:"Using the MGCB Editor",description:"This document provided information on using the MGCB Editor to import and process the contents of your aseprite file.",source:"@site/docs/guides/using-the-mgcb-editor.md",sourceDirName:"guides",slug:"/guides/using-the-mgcb-editor",permalink:"/docs/guides/using-the-mgcb-editor",draft:!1,editUrl:"https://github.com/aristurtledev/monogame-aseprite-docs/tree/main/packages/create-docusaurus/templates/shared/docs/guides/using-the-mgcb-editor.md",tags:[],version:"current",frontMatter:{id:"using-the-mgcb-editor",title:"Using the MGCB Editor",sidebar_label:"Using the MGCB Editor"},sidebar:"docsSidebar",previous:{title:"Loading the Aseprite File",permalink:"/docs/guides/loading-aseprite-file"},next:{title:"TextureRegion",permalink:"/docs/guides/texture-region"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Importing",id:"importing",level:2}],c={toc:p},u="wrapper";function l(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document provided information on using the MGCB Editor to import and process the contents of your aseprite file."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that unlike previous versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"MonoGame.Aseprite"),", the MGCB Editor is no longer a requirement and importing and/or processing can be done through code if preferred. Please see the ","[Note About the MGCB Editor]"," document for an explanation.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before using the MGCB Editor, ensure you have performed the ","[MGCB Editor Setup]"," outlined in the document linked."),(0,i.kt)("p",null,"You should also have a basic understanding of how to use the MGCB Editor.  More information can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://docs.monogame.net/articles/content/using_mgcb_editor.html"},"https://docs.monogame.net/articles/content/using_mgcb_editor.html")),(0,i.kt)("h2",{id:"importing"},"Importing"),(0,i.kt)("p",null,"A single importer is provided in the MGCB Editor for importing the aseprite file contents.  This is the ",(0,i.kt)("strong",{parentName:"p"},"Aseprite File Importer - MonoGame.Aseprite")," importer.  Whenever you add a file ending with the ",(0,i.kt)("inlineCode",{parentName:"p"},".ase")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".aseprite")," extension, it should automatically be selected for you as the default importer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A screenshot of the MGCB-Editor showing the Aseprite File Importer selected for a content item",src:r(3552).Z,width:"824",height:"1090"})))}l.isMDXComponent=!0},3552:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/aseprite-file-importer-3881314f125c839b8e43539136e69e7c.png"}}]);