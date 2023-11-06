---
uid: Processors.TilemapProcessor
_title: Tilemap Processor
_description: Overview of the TilemapProcessor
---

# TilemapProcessor

The purpose of this document is to provide an overview of the [TilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilemapProcessor>) provided with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library.

## Overview

A [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>) represents a tilemap from a single frame in your Aseprite file. Each tilemap layer from the frame is represented as a [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>) in the [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>) created, with each layer containing its own `Tile` collection.

The [TilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilemapProcessor>) is used to process a [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>) from a single frame in your Aseprite file. To do this, first each tilemap layer in the frame is processed. The [TilesetProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilesetProcessor>) is used to generate a [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) for the tilesets used by each tilemap layer. Then the [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>)  elements are created using the [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>). After this, all tilemap cels are processed and the tile data is set in the [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>)  that represents the tilemap layer the tilemap cel is on. Once all tilemap cels are processed, the [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>) is created using the [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>)  data generated.

## Usage

The following example demonstrates how to use the [TilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilemapProcessor>) to create a [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>) from a frame in your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Content.Processors;
```

**Create [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>) Using the [TilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilemapProcessor>)**

# [From Aseprite File](#tab/from-aseprite-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  Use the TilemapProcessor to create the Tilemap.
    //  Just give it the frame index of the frame containing the tilemap.
    Tilemap tilemap = TilemapProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
}
```

# [From XNB File](#tab/from-xnb-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the TilemapProcessor to create the Tilemap.
    //  Just give it the frame index of the frame containing the tilemap.
    Tilemap tilemap = TilemapProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
}
```

---

Additionally the [TilemapProcessor.Process](<xref:MonoGame.Aseprite.Content.Processors.TilemapProcessor.Process(Microsoft.Xna.Framework.Graphics.GraphicsDevice,MonoGame.Aseprite.AsepriteFile,System.Int32,System.Boolean)>) method has an optional parameter that can be given to control how the processor creates the [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>). The table below provides a summary of the optional parameter:

| Optional Parameter  | Default Value | Summary                                                                           |
| ------------------- | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers` | `true`        | Indicates whether only tilemap cels on visible tilemap layers should be included. |

