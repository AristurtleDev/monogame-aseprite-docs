---
uid: Processors.TilesetProcessor
_title: Tileset Processor
_description: Overview of the TilesetProcessor
---

# TilesetProcessor

The purpose of this document is to provide an overview of the [TilesetProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilesetProcessor>) provided with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library.

## Overview

A [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) represents a single tileset from your Aseprite file. Each tile in the [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) is represented by a [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) element.

The [TilesetProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilesetProcessor>) is used to process a [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) from you Aseprite file. To do this, the pixel data from the tileset in the Aseprite file is used to generate a source `Texture2D` image. Then the [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) instance is created using the source image. The [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) instance auto-generates the [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) for each tile based on the number of columns and rows in the tileset and the width and height extents of each tile in the tileset.

## Usage

The following example demonstrates how to use the [TilesetProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilesetProcessor>) to create a [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Content.Processors;
```

**Create [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) Using the [TilesetProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilesetProcessor>)**

# [From Aseprite File](#tab/from-aseprite-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  Use the TilesetProcessor to create the Tileset.
    //  Just give it the name you assigned the Tileset in Aseprite
    Tileset forest_tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetName: "forest");

    //  Optionally, you can use the index of the tileset
    Tileset town_tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetIndex: 1);
}
```

# [From XNB File](#tab/from-xnb-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the TilesetProcessor to create the Tileset.
    //  Just give it the name you assigned the Tileset in Aseprite
    Tileset forest_tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetName: "forest");

    //  Optionally, you can use the index of the tileset
    Tileset town_tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetIndex: 1);
}
```

---

> [!NOTE]
> Internally, Aseprite stores the pixel data for the each tileset as a vertical strip. The source `Texture2D` that is generated for the [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) will also be a vertical strip, with one column and as many rows as there are tiles in the tileset.

> [!TIP]
> Tile 0 in the tileset stored in the Aseprite file represents an empty tile of transparent pixels.
