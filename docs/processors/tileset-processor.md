---
id: tileset-processor
title: Tileset Processor
sidebar_label: Tileset Processor
---

The purpose of this document is to provide an overview of the `TilesetProcessor` provided with the `MonoGame.Aseprite` library.

## Overview

A `Tileset` represents a single tileset from your Aseprite file. Each tile in the `Tileset` is represented by a `TextureRegion` element.

The `TilesetProcessor` is used to process a `Tileset` from you Aseprite file. To do this, the pixel data from the tileset in the Aseprite file is used to generate a source `Texture2D` image. Then the `Tileset` instance is created using the source image. The `Tileset` instance auto-generates the `TextureRegion` for each tile based on the number of columns and rows in the tileset and the width and height extents of each tile in the tileset.

## Usage

The following example demonstrates how to use the `TilesetProcessor` to create a `Tileset` from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Processors;
```

**Create `Tileset` Using the `TilesetProcessor`**

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  If you are using the MGCB Editor to import your Aseprite file, use the
    //  following command instead
    //  AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the TilesetProcessor to create the Tileset.
    //  Just give it the name you assigned the Tileset in Aseprite
    Tileset forest_tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetName: "forest");

    //  Optionally, you can use the index of the tileset
    Tileset town_tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetIndex: 1);
}
```

:::note

Internally, Aseprite stores the pixel data for the each tileset as a vertical strip. The source `Texture2D` that is generated for the `Tileset` will also be a vertical strip, with one column and as many rows as there are tiles in the tileset.

:::

:::tip

Tile 0 in the tileset stored in the Aseprite file represents an empty tile of transparent pixels.

:::

:::info

For more information on the `Tileset` class, see the [`Tileset` Guide]

:::
