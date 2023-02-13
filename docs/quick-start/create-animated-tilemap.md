---
id: create-animated-tilemap
title: Create an AnimatedTilemap
sidebar_label: Create an AnimatedTilemap
---

:::note

Creating an `AnimatedTilemap` from an `AsepriteFile` is only available if your Aseprite file was created with Aseprite version 1.3 or higher.

:::

This document provides a quick start example to create a `AnimatedTilemap` from an `AsepriteFile`. It also provides an example for rendering the `AnimatedTilemap` using the `SpriteBatch`.

## Prerequisites

- [Install `MonoGame.Aseprite`](./installation)
- An AsepriteFile with a Tilemap and multiple frames

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
using MonoGame.Aseprite.Tilemaps;
using MonoGame.Aseprite.Processors;

public class MyGame : Game
{
    private AnimatedTilemap _animatedTilemap;

    private SpriteBatch _spriteBatch;

    // other code removed for brevity

    protected override void LoadContent()
    {
        _spriteBatch = new(GraphicsDevice);

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
        ///  Use the AnimatedTilemapProcessor to create the AnimatedTilemap.
        ///
        /////////////////////////////////////////////////////////////
        _animatedTilemap = AnimatedTilemapProcessor.Process(GraphicsDevice, aseFile);

        /////////////////////////////////////////////////////////////
        ///
        ///  You can also supply additional optional parameters to
        ///  control how the processor handles hidden layers.
        ///
        ///  - onlyVisibleLayers:
        ///         Indicates if only tilemap cels on visible tilemap layers should be included.
        ///
        /////////////////////////////////////////////////////////////
        /*
        _animatedTilemap = AnimatedTilemapProcessor.Process(GraphicsDevice, aseFile,
                                                                            onlyVisibleLayers: true);
        */

        /////////////////////////////////////////////////////////////
        ///
        ///  You can get the frame of the AnimatedTilemap by index
        ///
        /////////////////////////////////////////////////////////////
        AnimatedTilemapFrame frame0 = _animatedTilemap[frameIndex: 0];
        AnimatedTilemapFrame frame1 = _animatedTilemap.GetFrame(frameIndex: 1);

        /////////////////////////////////////////////////////////////
        ///
        ///  Each frame contains a collection of zero or more TilemapLayer
        ///  elements that make up the tilemap of that frame.  You can 
        ///  adjust things like the visibility of the layers for
        ///  that frame using the layer index or layer name
        ///
        /////////////////////////////////////////////////////////////
        frame0[layerIndex: 0].IsVisible = true;
        frame0[layerName: "background"].IsVisible = false;

        frame1.GetLayer(layerIndex: 0).IsVisible = true;
        frame1.GetLayer(layerName: "background").IsVisible = false;
    }

    protected override void Update(GameTime gameTime)
    {
        /////////////////////////////////////////////////////////////
        ///
        ///  In order for the AnimatedTilemap to actually animate, 
        ///  it needs to be updated every frame
        ///
        /////////////////////////////////////////////////////////////
        _animatedTilemap.Update(gameTime);

        /////////////////////////////////////////////////////////////
        ///
        ///  You can also control the animation using the following
        ///  methods.
        ///
        /////////////////////////////////////////////////////////////
        /*
         _animatedTilemap.Pause(resetFrameDuration: false);
         _animatedTilemap.Unpause(advanceToNextFrame: false);
         _animatedTilemap.Stop();
         _animatedTilemap.Reset(paused: false);
        */
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        /////////////////////////////////////////////////////////////
        ///
        ///  Use the Tilemap's draw method.
        ///
        /////////////////////////////////////////////////////////////
        _animatedTilemap.Draw(_spriteBatch, position: Vector.Zero, color: Color.White);

        /////////////////////////////////////////////////////////////
        ///
        ///  Or you can use the SpriteBatch natively
        ///
        /////////////////////////////////////////////////////////////
        _spriteBatch.Draw(_animatedTilemap, position: Vector2.Zero, color: Color.White);


        _spriteBatch.End();
    }
}
```

:::tip

For more information on the `AnimatedTilemap` class, including creating one manually without an `AsepriteFile`, see the [AnimatedTilemap Guide]

:::
