"use strict";(self.webpackChunkmonogame_aseprite_docs=self.webpackChunkmonogame_aseprite_docs||[]).push([[937],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9880:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=o(7462),r=(o(7294),o(3905)),i=o(4996),a=o(941);const s={id:"introduction",title:"MonoGame.Aseprite",sidebar_label:"Introduction",slug:"/"},l=void 0,u={unversionedId:"introduction",id:"introduction",title:"MonoGame.Aseprite",description:"MonoGame.Aseprite Banner",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/aristurtledev/monogame-aseprite-docs/tree/main/packages/create-docusaurus/templates/shared/docs/introduction.mdx",tags:[],version:"current",frontMatter:{id:"introduction",title:"MonoGame.Aseprite",sidebar_label:"Introduction",slug:"/"},sidebar:"docsSidebar",next:{title:"Note About the MGCB Editor",permalink:"/docs/mgcb-editor"}},p={},c=[{value:"Navigating These Docs",id:"navigating-these-docs",level:2},{value:"Missing or Incorrect Documentation?",id:"missing-or-incorrect-documentation",level:2},{value:"What Next?",id:"what-next",level:2},{value:"Buy me a coffee?",id:"buy-me-a-coffee",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MonoGame.Aseprite Banner",src:o(4790).Z,width:"1500",height:"500"}),"\nMonoGame.Aseprite is an free and open source library for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.monogame.net"},"MonoGame Framework")," that assists in importing ",(0,r.kt)("a",{parentName:"p",href:"https://www.aseprite.org"},"Aseprite"),"  ","*",".ase/","*",".aseprite files into your game project.  No need to export a spritesheet from Aseprite and have to deal with a PNG + JSON file.  With MonoGame.Aseprite, you use the Aseprite file directly."),(0,r.kt)("p",null,"MonoGame.Aseprite supports importing the file contents ",(0,r.kt)("strong",{parentName:"p"},"both with and without the MGCB Editor (also known as the Content Pipeline Tool)."),"  Along with importing the file content, several ",(0,r.kt)("strong",{parentName:"p"},"processors")," have been designed to transform file content into a more meaningful state to use within MonoGame."),(0,r.kt)("p",null,"MonoGame.Aseprite also provides several ",(0,r.kt)("em",{parentName:"p"},"out-of-the-box")," classes that can be used to take advantage of the data once processed."),(0,r.kt)("h2",{id:"navigating-these-docs"},"Navigating These Docs"),(0,r.kt)("p",null,"When viewing these document from a desktop (resolution > 996px), you can use the sidebar on the left to navigate the different documentation pages.  On the right, you'll find an additional sidebar use to navigate the sections within the current page."),(0,r.kt)("p",null,"When viewing these document on mobile (resolution <= 996px), the menu button in the top-left can be used to open the navigation panel to see the sidebar with the different documentation pages.  At the bottom-right of the page is a secondary menu that opens the right sidebar to navigate the sections within the page you are viewing. "),(0,r.kt)("h2",{id:"missing-or-incorrect-documentation"},"Missing or Incorrect Documentation?"),(0,r.kt)("p",null,"If you find that any information in the documentation is incorrect, confusing, or documentation for something is completely missing, please open an issue on the GitHub repository for these documents.  Alternatively you can join the MonoGame.Aseprite Discord and let me know.  Links for both are in the footer of the site."),(0,r.kt)("h2",{id:"what-next"},"What Next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you're just getting starting, begin with the installation document in the Getting Started section.  "),(0,r.kt)("li",{parentName:"ul"},"Join the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/8jFvHhuMJU"},"Discord")," to ask questions or keep up to date. Or to just say hello and share projects your working on."),(0,r.kt)("li",{parentName:"ul"},"Found an issue with the library?  Submit an ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aristurtledev/monogame-aseprite/issues"},"issue on GitHub"),"."),(0,r.kt)("li",{parentName:"ul"},"Follow me on socials? ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.twitter.com/aristurtledev"},"Twitter @aristurtledev")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mastodon.gamedev.place/@aristurlte"},"Mastodon mastodon.gamedev.place/@aristurtle"))))),(0,r.kt)("h2",{id:"buy-me-a-coffee"},"Buy me a coffee?"),(0,r.kt)("p",null,"If MonoGame.Aseprite is useful for you and you would like to support me, you can drop a tip/donation to me through Ko-fi.  This is not necessary but is always appreciated.  If you do, I can add you to the list below of sponsors with a link to your social or project if you'd like."),(0,r.kt)("a",{href:"https://ko-fi.com/aristurtledev"},(0,r.kt)(a.Z,{alt:"Support me on Ko-fi",sources:{light:(0,i.Z)("/img/kofi-bg-black.webp"),dark:(0,i.Z)("/img/kofi-bg-white.webp")},mdxType:"ThemedImage"})))}h.isMDXComponent=!0},4790:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/mga-banner-329e3119e8f438a4c4be63bb02d4e989.png"}}]);