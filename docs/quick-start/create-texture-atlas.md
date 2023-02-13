---
id: create-texture-atlas
title: Create a TextureAtlas
sidebar_label: Create a TextureAtlas
---

This document provides a quick start example to create a `TextureAtlas` an `AsepriteFile`.  It also provides an example for using the `TextureAtlas` to create `Sprite` instances.

:::tip

The advantage to using a `TextureAtlas` to create the `Sprite` instances is because all `AsepriteFrame` elements in the `AsepriteFile` are processed and a single source `Texture2D` is generated for the `TextureAtlas`.

Each `Sprite` that is created from the `TextureAtlas` share a reference to the same source `Texture2D` so it reduces texture swapping on the `SpriteBatch` when rendering different `Sprite` instances.

:::

## Prerequisites
* [Install `MonoGame.Aseprite`](./installation)

## Example

```csharp
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Graphics;

/////////////////////////////////////////////////////////////
///
///  Add these using statements
///
/////////////////////////////////////////////////////////////
using MonoGame.Aseprite;
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Processors;

public class MyGame : Game
{
    private TextureAtlas _atlas;
    private Sprite _sprite0;
    private Sprite _sprite1;

    private SpriteBatch _spriteBatch;
    
    // other code removed for brevity 

    protected override void LoadContent()
    {
        /////////////////////////////////////////////////////////////
        ///
        ///  Load the Aseprite file.
        ///
        /////////////////////////////////////////////////////////////
        AsepriteFile aseFile = AsepriteFile.Load("path/to/aseprite/file.aseprite");

        /////////////////////////////////////////////////////////////
        ///
        ///  If you imported it with the MGCB Editor, load the
        ///  Aseprite file using the ContentManager instead like shown
        ///  below.
        ///
        /////////////////////////////////////////////////////////////
        // AsepriteFile aseFile = Content.Load<AsepriteFile>("file");        

        /////////////////////////////////////////////////////////////
        ///
        /// Use the TextureAtlasProcessor to create the TextureAtlas.  
        ///
        /////////////////////////////////////////////////////////////
        _atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);

        /////////////////////////////////////////////////////////////
        ///
        ///  You can also supply additional optional parameters to 
        ///  control how the processor generates the source Texture2D
        ///  image for the TextureAtlas
        ///
        ///  - onlyVisibleLayers: 
        ///         Indicates if only cels on visible layers should be included.
        ///  - includeBackgroundLayer: 
        ///         Indicates if cels on a layer marked as the background layer should be included.
        ///  - includeTilemapLayers: 
        ///         Indicates if tilemap cels on tilemap layers should be included.
        ///  - mergeDuplicates:
        ///         Indicates if duplicate frames should be merged into one for the source image.
        ///  - borderPadding:
        ///         The amount of transparent pixels to add to the edge of the generated source image.
        ///  - spacing:
        ///         The amount of transparent pixels to add between each frame in the generated source image.
        ///  - innerPadding:
        ///         The amount of transparent pixels to add around each frame in the generated source image.
        ///
        /////////////////////////////////////////////////////////////
        /*
        _atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile, onlyVisibleLayers: true,
                                                                        includeBackgroundLayer: false,
                                                                        includeTilemapLayers: true,
                                                                        mergeDuplicates: true,
                                                                        borderPadding: 0,
                                                                        spacing: 0,
                                                                        innerPadding: 0);
        */

        /////////////////////////////////////////////////////////////
        ///
        ///  The TextureAtlas provides two methods of creating a 
        ///  Sprite instance from the regions in the TextureAtlas.
        ///  Both methods required you to supply the index of the
        ///  region to create the Sprite from.  The region indexes
        //   correspond to the frame index from your Aseprite file.
        ///
        /////////////////////////////////////////////////////////////
        _sprite0 = _atlas.GetRegion(index: 0);
        _sprite1 = _atlas[index: 0];
    }
}
```

:::tip

For more information on the `TextureAtlas` class, see the [TextureAtlas Guide]

:::