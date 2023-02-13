---
id: tilemap-processor
title: Tilemap Processor
sidebar_label: Tilemap Processor
---

The purpose of this document is to provide an overview of the `TilemapProcessor` provided with the `MonoGame.Aseprite` library.

## Overview

A `Tilemap` represents a tilemap from a single frame in your Aseprite file. Each tilemap layer from the frame is represented as a `TilemapLayer` in the `Tilemap` created, with each layer containing its own `Tile` collection.

The `TilemapProcessor` is used to process a `Tilemap` from a single frame in your Aseprite file. To do this, first each tilemap layer in the frame is processed. The `TilesetProcessor` is used to generate a `Tileset` for the tilesets used by each tilemap layer. Then the `TilemapLayer` elements are created using the `Tileset`. After this, all tilemap cels are processed and the tile data is set in the `TilemapLayer` that represents the tilemap layer the tilemap cel is on. Once all tilemap cels are processed, the `Tilemap` is created using the `TilemapLayer` data generated.

## Usage

The following example demonstrates how to use the `TilemapProcessor` to create a `Tilemap` from a frame in your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Processors;
```

**Create `Tilemap` Using the `TilemapProcessor`**

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

Additionally the `TilemapProcessor.Process` method has an optional parameter that can be given to control how the processor creates the `Tilemap`. The table below provides a summary of the optional parameter:

| Optional Parameter  | Default Value | Summary                                                                           |
| ------------------- | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers` | `true`        | Indicates whether only tilemap cels on visible tilemap layers should be included. |

:::info

For more information on the `Tilemap` class, including how to draw it with the `SpriteBatch`, see the [`Tilemap` Guide]

:::
