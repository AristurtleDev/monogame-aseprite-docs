---
id: animated-tilemap-processor
title: AnimatedTilemap Processor
sidebar_label: AnimatedTilemap Processor
---

The purpose of this document is to provide an overview of the `AnimatedTilemapProcessor` provided with the `MonoGame.Aseprite` library.

## Overview

An `AnimatedTilemap` represents a `Tilemap` with `AnimatedTilemapFrame` elements. Each `AnimatedTilemapFrame` defines the `TilemapLayer` elements, each with it's own `Tile` collection, and the duration of the frame.

The `AnimatedTilemapProcessor` is used to process an `AnimatedTilemap` from your Aseprite file. To do this, first the `TilesetProcessor` is used to generate a `Tileset` for the tilesets used by each tilemap layer. Next, each frame in the Aseprite file is processed by first processing each tilemap layer as a `TilemapLayer` instance, then processing the tilemap cels in frame and setting tile data to the `TilemapLayer` it is on. The `TilemapLayer` elements generated for that frame are then used to create a new `AnimatedTilemapFrame` instance and the duration of that frame processed is assigned to the `AnimatedTilemapFrame` created.

Once call frames have been processed as `AnimatedTilemapFrame` elements, they are used to create the `AnimatedTilemap` instance.

## Usage

The following example demonstrates how to use the `AnimatedTilemapProcessor` to create an `AnimatedTilemap` from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Processors;
```

**Create `AnimatedTilemap` Using the `AnimatedTilemapProcessor`**

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

Additionally the `AnimatedTilemapProcessor.Process` method has an optional parameter that can be given to control how the processor creates the `AnimatedTilemap`. The table below provides a summary of the optional parameter:

| Optional Parameter  | Default Value | Summary                                                                           |
| ------------------- | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers` | `true`        | Indicates whether only tilemap cels on visible tilemap layers should be included. |

:::info

For more information on the `AnimatedTilemap` class, including how to update it each frame and draw it with the `SpriteBatch`, see the [`AnimatedTilemap` Guide]

:::
