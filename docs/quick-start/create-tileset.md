---
id: create-tileset
title: Create a Tileset
sidebar_label: Create a Tileset
---

:::note

Creating a `Tileset` from an `AsepriteFile` is only available if your Aseprite file was created with Aseprite version 1.3 or higher.

:::

This document provides a quick start example to create a `Tileset` from an `AsepriteFile`.

:::info

The `Tileset` class is similar to the `TextureAtlas` in that wraps a single source `Texture2D` image and provides `TextureRegion` elements that represent each tile.  

:::

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
    private Tileset _tileset;
    private TextureRegion _emptyTile;
    private TextureRegion _tile1;

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
        ///  Use the TilesetProcessor to create the Tileset.  Just give
        ///  the name you assigned the tileset in Aseprite.
        ///
        /////////////////////////////////////////////////////////////
        _tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetName: "tileset");

        /////////////////////////////////////////////////////////////
        ///
        ///  You can also use the index of the tileset.
        ///
        /////////////////////////////////////////////////////////////
        // _tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetIndex: 0);

        /////////////////////////////////////////////////////////////
        ///
        ///  Each "tile" in the Tileset is just a TextureRegion element
        ///  which you can access via index (i.e. tileset tile id)
        ///
        ///  Note: Aseprite sets index 0 as an empty tile.
        ///
        /////////////////////////////////////////////////////////////
        _emptyTile = _tileset[index: 0];
        _tile1 = _tileset.GetTile(index: 1);
    }
```

:::tip

For more information on the `Tileset` class, including creating an instance manually without an `AsepriteFile`, see the [Tileset Guide]

:::
