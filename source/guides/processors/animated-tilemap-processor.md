---
uid: Processors.AnimatedTilemapProcessor
title: AnimatedTilemap Processor
_description: Overview of the AnimatedTilemapProcessor
---

# AnimatedTilemap Processor

The purpose of this document is to provide an overview of the [AnimatedTilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.AnimatedTilemapProcessor>) provided with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library.

## Overview

An [AnimatedTilemap](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemap>) represents a [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>) with [AnimatedTilemapFrame](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemapFrame>) elements. Each [AnimatedTilemapFrame](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemapFrame>) defines the [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>) elements, each with it's own [Tile](<xref:MonoGame.Aseprite.Tilemaps.Tile>) collection, and the duration of the frame.

The [AnimatedTilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.AnimatedTilemapProcessor>) is used to process an [AnimatedTilemap](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemap>)  from your Aseprite file. To do this, first the [TilesetProcessor](<xref:MonoGame.Aseprite.Content.Processors.TilesetProcessor>) is used to generate a [Tileset](<xref:MonoGame.Aseprite.Tilemaps.Tileset>) for the tilesets used by each tilemap layer. Next, each frame in the Aseprite file is processed by first processing each tilemap layer as a [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>) instance, then processing the tilemap cels in frame and setting tile data to the [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>) it is on. The [TilemapLayer](<xref:MonoGame.Aseprite.Tilemaps.TilemapLayer>) elements generated for that frame are then used to create a new [AnimatedTilemapFrame](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemapFrame>) instance and the duration of that frame processed is assigned to the [AnimatedTilemapFrame](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemapFrame>) created.

Once call frames have been processed as [AnimatedTilemapFrame](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemapFrame>) elements, they are used to create the [AnimatedTilemap](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemap>)  instance.

## Usage

The following example demonstrates how to use the [AnimatedTilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.AnimatedTilemapProcessor>) to create an [AnimatedTilemap](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemap>)  from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Tilemaps;
using Monogame.Aseprite.Content.Processors;
```

**Create [AnimatedTilemap](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemap>)  Using the [AnimatedTilemapProcessor](<xref:MonoGame.Aseprite.Content.Processors.AnimatedTilemapProcessor>)**

# [From Aseprite File](#tab/from-aseprite-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  Use the AnimatedTilemapProcessor to create the AnimatedTilemap.
    AnimatedTilemap animatedTilemap = AnimatedTilemapProcessor.Process(GraphicsDevice, aseFile);
}
```

# [From XNB File](#tab/from-xnb-file)
```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the AnimatedTilemapProcessor to create the AnimatedTilemap.
    AnimatedTilemap animatedTilemap = AnimatedTilemapProcessor.Process(GraphicsDevice, aseFile);
}
```

---

Additionally the [AnimatedTilemapProcessor.Process](<xref:MonoGame.Aseprite.Content.Processors.AnimatedTilemapProcessor.Process(Microsoft.Xna.Framework.Graphics.GraphicsDevice,MonoGame.Aseprite.AsepriteFile,System.Boolean)>) method has an optional parameter that can be given to control how the processor creates the [AnimatedTilemap](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemap>) . The table below provides a summary of the optional parameter:

| Optional Parameter  | Default Value | Summary                                                                           |
| ------------------- | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers` | `true`        | Indicates whether only tilemap cels on visible tilemap layers should be included. |
