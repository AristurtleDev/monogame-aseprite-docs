---
id: tileset-processor
title: Tileset Processor
sidebar_label: Tileset Processor
---

The purpose of this document is to provide an overview of the [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md) provided with the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library.

## Overview

A [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) represents a single tileset from your Aseprite file. Each tile in the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) is represented by a [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) element.

The [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md) is used to process a [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) from you Aseprite file. To do this, the pixel data from the tileset in the Aseprite file is used to generate a source `Texture2D` image. Then the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) instance is created using the source image. The [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) instance auto-generates the [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) for each tile based on the number of columns and rows in the tileset and the width and height extents of each tile in the tileset.

## Usage

The following example demonstrates how to use the [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md) to create a [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Processors;
```

**Create [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) Using the [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md)**

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

Internally, Aseprite stores the pixel data for the each tileset as a vertical strip. The source `Texture2D` that is generated for the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) will also be a vertical strip, with one column and as many rows as there are tiles in the tileset.

:::

:::tip

Tile 0 in the tileset stored in the Aseprite file represents an empty tile of transparent pixels.

:::
