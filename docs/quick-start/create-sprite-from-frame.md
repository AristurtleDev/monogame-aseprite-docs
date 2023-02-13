---
id: create-sprite-from-frame
title: Create a Sprite From a Frame
sidebar_label: Create a Sprite From a Frame
---

This document provides a quick start example to create a `Sprite` from an `AsepriteFrame` in an `AsepriteFile`.  It also provides an example for rendering the `Sprite` using the `SpriteBatch`.

## Prerequisites
* [Install `MonoGame.Aseprite`](./installation)
* An Aseprite file with at minimum one frame.

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
    private Sprite _sprite;
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
        ///  Use the SpriteProcessor to create the sprite.  You just
        ///  tell it the index of the AsepriteFrame element to process.
        ///
        /////////////////////////////////////////////////////////////
        _sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);

        /////////////////////////////////////////////////////////////
        ///
        ///  You can also supply additional optional parameters to 
        ///  control how the processor generates the source Texture2D
        ///  image for the sprite
        ///
        ///  - onlyVisibleLayers: 
        ///         Indicates if only cels on visible layers should be included.
        ///  - includeBackgroundLayer: 
        ///         Indicates if cels on a layer marked as the background layer should be included.
        ///  - includeTilemapLayers: 
        ///         Indicates if tilemap cels on tilemap layers should be included.
        ///
        /////////////////////////////////////////////////////////////
        /*
        _sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0,
                                                                   onlyVisibleLayers: true,
                                                                   includeBackgroundLayer: false,
                                                                   includeTilemapLayers: true);
        */

        /////////////////////////////////////////////////////////////
        ///
        ///  Adjust how the sprite is rendered through it's properties
        ///
        /////////////////////////////////////////////////////////////
        _sprite.Color = Color.White;
        _sprite.Transparency = 1.0f;
        _sprite.Origin = Vector2.Zero;
        _sprite.Scale = Vector2.One;
        _sprite.Rotation = 0.0f;
        _sprite.SpriteEffects = SpriteEffects.None;
        _sprite.LayerDepth = 0.0f;
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClaim);

        /////////////////////////////////////////////////////////////
        ///
        ///  Use the sprite's draw method.
        ///
        /////////////////////////////////////////////////////////////
        _sprite.Draw(_spriteBatch, position: new Vector2(10, 20));

        /////////////////////////////////////////////////////////////
        ///
        ///  Or you can use the SpriteBatch natively
        ///
        /////////////////////////////////////////////////////////////
        _spriteBatch.Draw(_sprite, position: new Vector2(30, 40));

        /////////////////////////////////////////////////////////////
        ///
        ///  Both of those draw method will use the Color, Transparency,
        ///  Origin, Scale, Rotation, SpriteEffects, and LayerDepth 
        ///  properties of the sprite and plug them in automatically to 
        ///  the SpriteBatch parameters when it draws. 
        ///
        ///  If you want to override these for more control, you can use
        ///  the Sprite.TextureRegion and specify the parameters yourself
        ///
        /////////////////////////////////////////////////////////////
        _spriteBatch.Draw(_sprite.TextureRegion, position: new Vector2(50, 60),
                                                 color: Color.White,
                                                 rotation: 0.0f,
                                                 origin: Vector.Zero,
                                                 scale: Vector2.One,
                                                 effects: SpriteEffects.None,
                                                 layerDepth: 0.0f);


        _spriteBatch.End();
    }
}
```

:::caution

While this provides a quick an easy method of creating a `Sprite` from any single frame in the `AsepriteFile`, using this method will generate a new source `Texture2D` for each sprite created.  

If you plan to create multiple `Sprite` instances from multiple frames in the `AsepriteFile`, it is recommended instead to create a `TextureAtlas`.  Doing this, only one source `Texture2D` is created and each `Sprite` references the source, reducing the amount of texture swapping done when rendering with the `SpriteBatch`.

:::

:::tip

For more information on the `Sprite` class, see the [Sprite Guide]

:::