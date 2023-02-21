---
id: tilemap-processor
title: Tilemap Processor
sidebar_label: Tilemap Processor
---

The purpose of this document is to provide an overview of the [TilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/TilemapProcessor/TilemapProcessor.md) provided with the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library.

## Overview

A [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) represents a tilemap from a single frame in your Aseprite file. Each tilemap layer from the frame is represented as a [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md) in the [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) created, with each layer containing its own `Tile` collection.

The [TilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/TilemapProcessor/TilemapProcessor.md) is used to process a [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) from a single frame in your Aseprite file. To do this, first each tilemap layer in the frame is processed. The [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md) is used to generate a [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) for the tilesets used by each tilemap layer. Then the [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md)  elements are created using the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md). After this, all tilemap cels are processed and the tile data is set in the [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md)  that represents the tilemap layer the tilemap cel is on. Once all tilemap cels are processed, the [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) is created using the [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md)  data generated.

## Usage

The following example demonstrates how to use the [TilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/TilemapProcessor/TilemapProcessor.md) to create a [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) from a frame in your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Processors;
```

**Create [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) Using the [TilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/TilemapProcessor/TilemapProcessor.md)**

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  If you are using the MGCB Editor to import your Aseprite file, use the
    //  following command instead
    //  AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the TilemapProcessor to create the Tilemap.
    //  Just give it the frame index of the frame containing the tilemap.
    Tilemap tilemap = TilemapProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
}
```

Additionally the [TilemapProcessor.Process](../api/MonoGame.Aseprite/Content/Processors/TilemapProcessor/Methods/Process.md) method has an optional parameter that can be given to control how the processor creates the [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md). The table below provides a summary of the optional parameter:

| Optional Parameter  | Default Value | Summary                                                                           |
| ------------------- | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers` | `true`        | Indicates whether only tilemap cels on visible tilemap layers should be included. |

