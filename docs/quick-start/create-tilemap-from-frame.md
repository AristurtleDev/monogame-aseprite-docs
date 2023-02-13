---
id: create-tilemap-from-frame
title: Create a Tilemap From a Frame
sidebar_label: Create a Tilemap From a Frame
---

:::note

Creating a `Tilemap` from an `AsepriteFile` is only available if your Aseprite file was created with Aseprite version 1.3 or higher.

:::

This document provides a quick start example to create a `Tilemap` from an `AsepriteFrame` in an `AsepriteFile`. It also provides an example for rendering the `Tilemap` using the `SpriteBatch`.

## Prerequisites

- [Install `MonoGame.Aseprite`](./installation)

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
    private Tilemap _tilemap;

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
        ///  Use the TilemapProcessor to create the Tilemap.  You just
        ///  tell it the index of the AsepriteFrame element to process.
        ///
        /////////////////////////////////////////////////////////////
        _tilemap = TilemapProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);

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
        _tilemap = TilemapProcessor.Process(GraphicsDevice, aseFile,
                                                            onlyVisibleLayers: true);
        */

        /////////////////////////////////////////////////////////////
        ///
        ///  Each tilemap layer from the Aseprite file is a corresponding
        ///  TilemapLayer in the Tilemap.  You adjust the visibility of 
        ///  each layer by setting it's TilemapLayer.IsVisible property
        ///
        ///  When set to false, that layer will not render when drawing
        ///  Tilemap.
        ///
        /////////////////////////////////////////////////////////////
        _tilemap[layerIndex: 0].IsVisible = false;
        _tilemap.GetLayer(layerIndex: 1).IsVisible = true;
    }

    protected override void Draw(GameTime gameTime)
    {
        _spriteBatch.Begin(samplerState: SamplerState.PointClamp);

        /////////////////////////////////////////////////////////////
        ///
        ///  Use the Tilemap's draw method.
        ///
        /////////////////////////////////////////////////////////////
        _tilemap.Draw(_spriteBatch, position: Vector.Zero, color: Color.White);

        /////////////////////////////////////////////////////////////
        ///
        ///  Or you can use the SpriteBatch natively
        ///
        /////////////////////////////////////////////////////////////
        _spriteBatch.Draw(_tilemap, position: Vector2.Zero, color: Color.White);


        _spriteBatch.End();
    }
}
```

:::tip

For more information on the `Tilemap` class, including creating one manually without an `AsepriteFile`, see the [Tilemap Guide]

:::
