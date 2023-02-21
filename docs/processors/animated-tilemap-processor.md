---
id: animated-tilemap-processor
title: AnimatedTilemap Processor
sidebar_label: AnimatedTilemap Processor
---

The purpose of this document is to provide an overview of the [AnimatedTilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/AnimatedTilemapProcessor) provided with the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library.

## Overview

An [AnimatedTilemap](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemap/AnimatedTilemap.md) represents a [Tilemap](../api/MonoGame.Aseprite/Tilemaps/Tilemap/Tilemap.md) with [AnimatedTilemapFrame](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemapFrame/AnimatedTilemapFrame.md) elements. Each [AnimatedTilemapFrame](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemapFrame/AnimatedTilemapFrame.md) defines the [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md) elements, each with it's own [Tile](../api/MonoGame.Aseprite/Tilemaps/Tile/Tile.md) collection, and the duration of the frame.

The [AnimatedTilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/AnimatedTilemapProcessor) is used to process an [AnimatedTilemap](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemap/AnimatedTilemap.md)  from your Aseprite file. To do this, first the [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md) is used to generate a [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) for the tilesets used by each tilemap layer. Next, each frame in the Aseprite file is processed by first processing each tilemap layer as a [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md) instance, then processing the tilemap cels in frame and setting tile data to the [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md) it is on. The [TilemapLayer](../api/MonoGame.Aseprite/Tilemaps/TilemapLayer/TilemapLayer.md) elements generated for that frame are then used to create a new [AnimatedTilemapFrame](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemapFrame/AnimatedTilemapFrame.md) instance and the duration of that frame processed is assigned to the [AnimatedTilemapFrame](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemapFrame/AnimatedTilemapFrame.md) created.

Once call frames have been processed as [AnimatedTilemapFrame](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemapFrame/AnimatedTilemapFrame.md) elements, they are used to create the [AnimatedTilemap](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemap/AnimatedTilemap.md)  instance.

## Usage

The following example demonstrates how to use the [AnimatedTilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/AnimatedTilemapProcessor) to create an [AnimatedTilemap](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemap/AnimatedTilemap.md)  from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Processors;
```

**Create [AnimatedTilemap](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemap/AnimatedTilemap.md)  Using the [AnimatedTilemapProcessor](../api/MonoGame.Aseprite/Content/Processors/AnimatedTilemapProcessor)**

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  If you are using the MGCB Editor to import your Aseprite file, use the
    //  following command instead
    //  AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the AnimatedTilemapProcessor to create the AnimatedTilemap.
    AnimatedTilemap animatedTilemap = AnimatedTilemapProcessor.Process(GraphicsDevice, aseFile);
}
```

Additionally the [AnimatedTilemapProcessor.Process](../api/MonoGame.Aseprite/Content/Processors/AnimatedTilemapProcessor/Methods/Process.md) method has an optional parameter that can be given to control how the processor creates the [AnimatedTilemap](../api/MonoGame.Aseprite/Tilemaps/AnimatedTilemap/AnimatedTilemap.md) . The table below provides a summary of the optional parameter:

| Optional Parameter  | Default Value | Summary                                                                           |
| ------------------- | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers` | `true`        | Indicates whether only tilemap cels on visible tilemap layers should be included. |
