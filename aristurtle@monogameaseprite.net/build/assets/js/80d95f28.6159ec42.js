"use strict";(self.webpackChunkmonogame_aseprite_docs=self.webpackChunkmonogame_aseprite_docs||[]).push([[118],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(i),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return i?n.createElement(h,o(o({ref:t},d),{},{components:i})):n.createElement(h,o({ref:t},d))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7114:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={id:"loading-aseprite-file",title:"Loading the Aseprite File",sidebar_label:"Loading the Aseprite File"},o=void 0,l={unversionedId:"guides/loading-aseprite-file",id:"guides/loading-aseprite-file",title:"Loading the Aseprite File",description:"The purpose of this document is to provide an overview of loading your Aseprite file from disk into an instance of the AsepriteFile class.",source:"@site/docs/guides/loading-aseprite-file.md",sourceDirName:"guides",slug:"/guides/loading-aseprite-file",permalink:"/docs/guides/loading-aseprite-file",draft:!1,editUrl:"https://github.com/aristurtledev/monogame-aseprite-docs/tree/main/packages/create-docusaurus/templates/shared/docs/guides/loading-aseprite-file.md",tags:[],version:"current",frontMatter:{id:"loading-aseprite-file",title:"Loading the Aseprite File",sidebar_label:"Loading the Aseprite File"},sidebar:"docsSidebar",previous:{title:"Processors",permalink:"/docs/getting-started/processors"},next:{title:"Using the MGCB Editor",permalink:"/docs/guides/using-the-mgcb-editor"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Loading the Aseprite File",id:"loading-the-aseprite-file",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this document is to provide an overview of loading your Aseprite file from disk into an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class is the starting point for everything that can be done using this library. When the contents of an Aseprite file are imported, they are presented as an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class. Here you can find the data for every layer, frame, cel, slice, and tag. If you're using the current Aseprite 1.3-beta version, you'll also have the tileset and tilemap data."),(0,r.kt)("p",null,"The data presented in this is similar to how it is presented in the Aseprite application. For instance, each ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFrame")," element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," contains the individual ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteCel")," elements. These ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteCel")," elements contain the pixel data for that cel only. This gives you, the user, greater control over how to best use this data. You can, for instance, use each cel as a per layer image for that frame. Or you can combine all the cels in a frame to have the complete frame image to use."),(0,r.kt)("h2",{id:"loading-the-aseprite-file"},"Loading the Aseprite File"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class provides a convenient ",(0,r.kt)("inlineCode",{parentName:"p"},"Load(string)")," method that can be called to load your aseprite file from disk to create the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class instance."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Loading the Aseprite file from disk is like loading any asset it your game and should be done where you load your game assets. For instance, within the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadContent")," method in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Game")," class.")),(0,r.kt)("p",null,"The following code demonstrates how to load the aseprite file at runtime"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add using statement")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using MonoGame.Aseprite;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Load the file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'AsepriteFile aseFile = AsepriteFile.Load("path/to/the/file");\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Now that you have the Aseprite file imported as an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class instance, you can transform this data into one of the various ",(0,r.kt)("em",{parentName:"p"},"out-of-the-box")," classes provided in this library. The following links are to the guides on these classes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[Sprite]"),(0,r.kt)("li",{parentName:"ul"},"[TextureAtlas]"),(0,r.kt)("li",{parentName:"ul"},"[SpriteSheet]"),(0,r.kt)("li",{parentName:"ul"},"[Tileset]"),(0,r.kt)("li",{parentName:"ul"},"[Tilemap]"),(0,r.kt)("li",{parentName:"ul"},"[AnimatedTilemap]")))}u.isMDXComponent=!0}}]);