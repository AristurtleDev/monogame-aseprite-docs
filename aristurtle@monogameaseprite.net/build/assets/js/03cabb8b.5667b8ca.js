"use strict";(self.webpackChunkmonogame_aseprite_docs=self.webpackChunkmonogame_aseprite_docs||[]).push([[353],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i=n.p+"assets/images/tilemap-1a4eae6d98110937bb65ca9bf90a362e.png",o=n.p+"assets/images/tilemap-region-marked-af5fbc7491c8b271631aa948c638a4ad.png",l={id:"texture-region",title:"TextureRegion",sidebar_label:"TextureRegion"},s=void 0,p={unversionedId:"guides/texture-region",id:"guides/texture-region",title:"TextureRegion",description:"The purpose of this document is to provide an overview of the TextureRegion class, and how it is used within the MonoGame.Aseprite library.",source:"@site/docs/guides/texture-region.md",sourceDirName:"guides",slug:"/guides/texture-region",permalink:"/docs/guides/texture-region",draft:!1,editUrl:"https://github.com/aristurtledev/monogame-aseprite-docs/tree/main/packages/create-docusaurus/templates/shared/docs/guides/texture-region.md",tags:[],version:"current",frontMatter:{id:"texture-region",title:"TextureRegion",sidebar_label:"TextureRegion"},sidebar:"docsSidebar",previous:{title:"Using the MGCB Editor",permalink:"/docs/guides/using-the-mgcb-editor"},next:{title:"Sprite",permalink:"/docs/guides/sprite"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Creating a <code>TextureRegion</code>",id:"creating-a-textureregion",level:2},{value:"From a <code>TextureAtlas</code>",id:"from-a-textureatlas",level:3},{value:"From a <code>SpriteSheet</code>",id:"from-a-spritesheet",level:3},{value:"From the Constructor",id:"from-the-constructor",level:3},{value:"Drawing the <code>TextureRegion</code>",id:"drawing-the-textureregion",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"See Also",id:"see-also",level:2},{value:"References",id:"references",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The purpose of this document is to provide an overview of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," class, and how it is used within the ",(0,r.kt)("inlineCode",{parentName:"p"},"MonoGame.Aseprite")," library."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," class is a small wrapper that wraps an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D")," instance and provides the source ",(0,r.kt)("inlineCode",{parentName:"p"},"Rectangle")," that represents the region within the ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D")," to be rendered. To illustrate this, take the following image"),(0,r.kt)("img",{src:i,style:{imageRendering:"-moz-crisp-edges",width:"100%"}}),(0,r.kt)("small",null,(0,r.kt)("p",null,"Tilemap is from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kenney.nl/assets/tiny-town"},"Tiny Town Tilemap by Kenney")," licensed under ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CCO 1.0 Universal"))),(0,r.kt)("p",null,"When you import this as a ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D"),", you don't want to render the entire image. Instead, you'll want to use this image but only render one part of it. For instance, let's take the yellow bush as marked below."),(0,r.kt)("img",{src:o,style:{imageRendering:"-moz-crisp-edges",width:"100%"}}),(0,r.kt)("p",null,"This red square that outlines this yellow bush is at position x:48 y:32 with a width and height of 16 pixels."),(0,r.kt)("p",null,"Normally if we wanted to render just this yellow bush in MonoGame with the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteBatch"),", we would need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteBatch")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceRectangle")," value that specifies where that yellow bush is to render it. This is done like the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"Rectangle sourceRectangle = new(48, 32, 16, 16);\nspriteBatch.Draw(texture, Vector2.Zero, sourceRectangle, Color.White);\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," class is just this. It wraps an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D")," instance and has a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion.Bounds")," property that specifies the source rectangle value to use when rendering it. In this way, we can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," instance as a ",(0,r.kt)("strong",{parentName:"p"},"concrete representation of a region within a texture"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"MonoGame.Aseprite")," also provides extension methods for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteBatch")," for drawing a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," instance and you don't even have to supply the ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceRectangle")," value, it will pull it for you and apply it."),(0,r.kt)("h2",{id:"creating-a-textureregion"},"Creating a ",(0,r.kt)("inlineCode",{parentName:"h2"},"TextureRegion")),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," class is used in almost every class in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MonoGame.Aseprite")," library, there are various ways of having one created, or getting one to use. You can also create one manually using its constructor method. The sections below will go over them."),(0,r.kt)("h3",{id:"from-a-textureatlas"},"From a ",(0,r.kt)("inlineCode",{parentName:"h3"},"TextureAtlas")),(0,r.kt)("p",null,"If you have an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas")," instance, you can create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas")," using the following methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'protected override void LoadContent()\n{\n    //  Load the Texture2D\n    Texture2D tinyTownTilemap = Content.Load<Texture2D>("tinyTownTilemap");\n\n    //  Create a TextureAtlas\n    TextureAtlas atlas = new(name: "tinyTownTilemap", texture: tinyTownTilemap);\n    \n    //  Create the region using the x, y, width, and height values\n    TextureRegion yellowBushRegion = atlas.CreateRegion(name: "yellowBush", x: 48, y: 32, width: 16, height: 16);\n\n    //  Create the region specifying a location and size\n    TextureRegion greenBushRegion = atlas.CreateRegion(name: "greenBush", location: new Point(64, 32), size: new Point(16, 16));\n\n    //  Create the region specifying the rectangle\n    TextureRegion mushroomRegion = atlas.CreateRegion(name: "mushroom", new Rectangle(80, 32, 16, 16));\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In the example above we are creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas")," manually from a ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D"),".  If you are creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas")," from an ",(0,r.kt)("inlineCode",{parentName:"p"},"AsepriteFile")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlasProcessor"),", each frame from the Aseprite file is added automatically as a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," with the name of each region begin ",(0,r.kt)("inlineCode",{parentName:"p"},"fileName_frameNum"),".  For example if the file name is ",(0,r.kt)("inlineCode",{parentName:"p"},"tinyTownTilemap.aseprite")," then the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," at index 0 is ",(0,r.kt)("inlineCode",{parentName:"p"},"tinyTownTilemap_0"),".")),(0,r.kt)("p",null,"When you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas.CreateRegion")," methods, the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," that is created is returned, but it is also added internally to the collection of ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," elements for that texture atlas.  If you need to retrieve it later from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas"),", you can use one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Get")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TryGet")," methods provided"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"//  Get the region by index\nTextureRegion yellowBushRegion = atlas.GetRegion(0);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'//  Get the region by name\nTextureRegion greenBushRegion = atlas.GetRegion("green bush");\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"//  TryGet region by index\nif(atlas.TryGetRegion(2, out TextureRegion? mushroomRegion))\n{\n    //  Do something with the texture region\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'//  TryGet region by name\nif(atlas.TryGetRegion("mushroom", out TextureRegion? mushroomRegion))\n{\n    //  Do something with the texture region\n}\n')),(0,r.kt)("h3",{id:"from-a-spritesheet"},"From a ",(0,r.kt)("inlineCode",{parentName:"h3"},"SpriteSheet")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteSheet")," is a wrapper around a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas")," and provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteSheet.TextureAtlas")," property to access it.  If you have an existing ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteSheet")," instance, you can create new ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegions")," from its ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas")," using the methods described in the ",(0,r.kt)("a",{parentName:"p",href:"#from-a-textureatlas"},"From a ",(0,r.kt)("inlineCode",{parentName:"a"},"TextureAtlas"))," section."),(0,r.kt)("p",null,"For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'//  Access the TextureAtlas property of the spritesheet to use the methods for creating a region.\nTextureRegion yellowBushRegion = spriteSheet.TextureAtlas.CreateRegion("yellowBush", x: 48, y: 32, width: 16, height: 16);\n')),(0,r.kt)("p",null,"You would access the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteSheet.TextureAtlas")," to retrieve the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," elements as well as shown above in the ",(0,r.kt)("a",{parentName:"p",href:"#from-a-textureatlas"},"From a ",(0,r.kt)("inlineCode",{parentName:"a"},"TextureAtlas"))," section."),(0,r.kt)("h3",{id:"from-the-constructor"},"From the Constructor"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," class is not limited to only being used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"MonoGame.Aseprite")," library.  It provides a constructor you can use to create an instance from any ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D")," that you have loaded prior.  The following code demonstrates using the constructor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add using statement")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"using MonoGame.Aseprite;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create the TextureRegion")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'protected override void LoadContent()\n{\n    //  Load your Texture2D\n    Texture2D tinyTownTilemap = Content.Load<Texture2D>("tinyTownTilemap");\n\n    //  Create the TextureRegion using the x, y, width, and height\n    TextureRegion yellowBushRegion = new(name: "yellow bush", texture: tinyTownTilemap, x: 48, y: 32, width: 16, height: 16);\n\n    //  Create the TextureRegion using the location and size\n    TextureRegion greenBushRegion = new(name: "green bush", texture: tinyTownTilemap, location: new Point(64, 32), size: new Point(16, 16));\n\n    //  Create the TextureRegion using the rectangle bounds\n    TextureRegion mushroomRegion = new(name: "mushroom", texture: tinyTownTilemap, bounds: new Rectangle(80, 32, 16, 16));\n}\n\n')),(0,r.kt)("h2",{id:"drawing-the-textureregion"},"Drawing the ",(0,r.kt)("inlineCode",{parentName:"h2"},"TextureRegion")),(0,r.kt)("p",null,"Once you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," instance, you'll want to be able to render it.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," class itself has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Draw")," method with several overloads for ease-of-use."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.Black);\n\n    _spriteBatch.Begin(samplerState: SamplerState.PointClaim)\n\n    //  Draw using a position and color\n    yellowBushRegion.Draw(_spriteBatch, position: new Vector2(0, 0), color: Color.White);\n\n    //  Draw using a destination rectangle\n    greenBushRegion.Draw(_spriteBatch, destinationRectangle: new Rectangle(16, 0, 16, 16), color: Color.White);\n\n    //  Draw using a the full range of parameters for a spritebatch\n    mushroomRegion.Draw(_spriteBatch, position: new Vector2(32, 0), \n                                        color: Color.White,\n                                        rotation: 0.0f,\n                                        origin: Vector2.Zero,\n                                        scale: Vector2.One,\n                                        effects: SpriteEffects.None,\n                                        layerDepth: 0.0f);\n\n    _spriteBatch.End();\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MonoGame.Aseprite")," also provides ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteBatch")," extension methods that can be used to achieve the same result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"protected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.Black);\n\n    _spriteBatch.Begin(samplerState: SamplerState.PointClaim)\n\n    //  Draw using a position and color\n    _spriteBatch.Draw(yellowBushRegion, position: new Vector2(0, 0), color: Color.White);\n\n    //  Draw using a destination rectangle\n    _spriteBatch.Draw(greenBushRegion, destinationRectangle: new Rectangle(16, 0, 16, 16), color: Color.White);\n\n    //  Draw using a the full range of parameters for a spritebatch\n    _spriteBatch.Draw(mushroomRegion, position: new Vector2(32, 0), \n                                      color: Color.White,\n                                      rotation: 0.0f,\n                                      origin: Vector2.Zero,\n                                      scale: Vector2.One,\n                                      effects: SpriteEffects.None,\n                                      layerDepth: 0.0f);\n\n    _spriteBatch.End();\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There are additional overloads not shown in the examples above.  For each overload that the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteBatch.Draw")," method natively provides for ",(0,r.kt)("inlineCode",{parentName:"p"},"Texture2D"),", there is a matching overload method for both ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion.Draw")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteBatch.Draw")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," elements.")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this document we went over what a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," is, how to create an instance using the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureAtlas")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteSheet")," classes and with the constructor, and how to render an instance using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpriteBatch"),".  Below you can find links to additional guides for the types that were mentioned in this document and a reference link to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," api document."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("p",null,"The following classes are referenced in this document and the links to their guides are provided below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[TextureAtlas]"),(0,r.kt)("li",{parentName:"ul"},"[SpriteSheet]")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"Refer to the ","[TextureRegion API]"," for more information on the properties and methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextureRegion")," class."))}h.isMDXComponent=!0}}]);