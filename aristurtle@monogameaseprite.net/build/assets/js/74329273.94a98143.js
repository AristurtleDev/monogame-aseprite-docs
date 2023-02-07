"use strict";(self.webpackChunkmonogame_aseprite_docs=self.webpackChunkmonogame_aseprite_docs||[]).push([[201],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(i),m=r,u=d["".concat(p,".").concat(m)]||d[m]||h[m]||a;return i?n.createElement(u,o(o({ref:t},c),{},{components:i})):n.createElement(u,o({ref:t},c))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3595:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=i(7462),r=(i(7294),i(3905));const a={id:"the-aseprite-file",title:"The Aseprite File",sidebar_label:"The Aseprite File"},o=void 0,s={unversionedId:"getting-started/the-aseprite-file",id:"getting-started/the-aseprite-file",title:"The Aseprite File",description:"The purpose of this document is to provide an overview of the AsepriteFile class, We will discuss how to import your Aseprite file as an instance of the AsepriteFile class, and how to process that instance as a Sprite, TextureAtlas, SpriteSheet, Tileset, Tilemap, and/or an AnimatedTilemap.",source:"@site/docs/getting-started/the-aseprite-file.md",sourceDirName:"getting-started",slug:"/getting-started/the-aseprite-file",permalink:"/docs/getting-started/the-aseprite-file",draft:!1,editUrl:"https://github.com/aristurtledev/monogame-aseprite-docs/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/the-aseprite-file.md",tags:[],version:"current",frontMatter:{id:"the-aseprite-file",title:"The Aseprite File",sidebar_label:"The Aseprite File"},sidebar:"docsSidebar",previous:{title:"(Optional) MGCB Editor Setup",permalink:"/docs/getting-started/mgcb-editor-setup"},next:{title:"Processors",permalink:"/docs/getting-started/processors"}},p={},l=[{value:"Loading the Aseprite File",id:"loading-the-aseprite-file",level:2}],c={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this document is to provide an overview of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class, We will discuss how to import your Aseprite file as an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class, and how to process that instance as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sprite"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteSheet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Tileset"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Tilemap"),", and/or an ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimatedTilemap"),"."),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class is the starting point for everything that can be done using this library. When the contents of your Aseprite file are imported, they are presented through the properties of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," instance that is created. This includes each layer, frame, cel, tag, and slice. If you are using Aseprite 1.3-beta, the tilesets and tilemaps are also imported."),(0,r.kt)("p",null,"The data presented in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class is similar to how it is presented in the Aseprite application. For instance, each ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFrame")," element represents the frames in Aseprite and they contain a collection of ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteCel")," elements that correspond to the cels. Each ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteCel")," contains the individual pixel data for the cel it represents. This means you can get the individual cel pixel data per layer, per frame, if you wanted to go that granular. However, that is an advanced topic which is out of scope for this document. If you're interested in getting into the weeds with this, I recommend checking out that advanced guides section."),(0,r.kt)("h2",{id:"loading-the-aseprite-file"},"Loading the Aseprite File"),(0,r.kt)("p",null,"The first thing you want to do is load the contents of your Aseprite file as an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class. The ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," class provides the static method ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile.Load")," to achieve this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'protected override void LoadContent()\n{\n    //  Load the Aseprite file as an AsepriteFile instance\n    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Loading the Aseprite file from disk is like loading any asset in your game, and should be done where you load your game assets. For instance, within the ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadContent")," method of your ",(0,r.kt)("inlineCode",{parentName:"p"},"Game")," class like shown in the example above.")),(0,r.kt)("p",null,"Now that you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," instance created, the next step is to process the contents into something meaningful. This is discussed in the ",(0,r.kt)("a",{parentName:"p",href:"processors"},"Processors")," document next."))}h.isMDXComponent=!0}}]);