---
uid: Processors.Overview
title: Processors Overview
description: Overview of the processors provided with MonoGame.Aseprite.
---

# Processors Overview

The purpose of this document is to provide an overview of the processors provided with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library that process an [AsepriteFile](<xref:MonoGame.Aseprite.AsepriteFile>) instance.

## Overview

The [AsepriteFile](<xref:MonoGame.Aseprite.AsepriteFile>) instance that is created when you load your Aseprite file contains the raw data of the Aseprite file. The information contained within this instance is structured similar to how it is in Aseprite. This information is granular and needs to be processed to provide more useful and concrete implementations.

For instance, the [AsepriteCel](<xref:MonoGame.Aseprite.AsepriteTypes.AsepriteCel>) elements in each of the [AsepriteFrame](<xref:MonoGame.Aseprite.AsepriteTypes.AsepriteFrame>) elements provide the pixel data for each layer in that frame. What if you wanted to create a source image of that frame itself? You would need to go through each of the [AsepriteCel](<xref:MonoGame.Aseprite.AsepriteTypes.AsepriteCel>) elements in that frame and merge them down with the cel below it until they have all been merged (also known as flattening the frame). What if you wanted to create a source image of all frames packed together? What if you wanted to create animations based on the [AsepriteTag](<xref:MonoGame.Aseprite.AsepriteTypes.AsepriteTag>) elements?

This is where the power of the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library comes into play. It provides several [_out-of-the-box_](<https://en.wikipedia.org/wiki/Out_of_the_box_(feature)>) processors to handle these scenarios for you. While they may not cover every processing scenario, they have been designed to cover most.

## Processors
The following table provides a summary of each processor and a link to the documentation on using that processor:

| Processor                                                              | Summary                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [SpriteProcessor](<xref:Processors.SpriteProcessor>)                   | Processes a single frame from the Aseprite file as a [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>). A `Texture2D` is generated as the source image of the frame.                                                                                                                                         |
| [TextureAtlasProcessor](<xref:Processors.TextureAtlasProcessor>)       | Processes all frames from the Aseprite file as [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). Each frame is packed into a single source `Texture2D` image and [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) elements are created to represent the source rectangle for each frame. |
| [SpriteSheetProcessor](<xref:Processors.SpriteSheetProcessor>)         | Processes all frames an animation tags from the Aseprite file as a [SpriteSheet](<xref:MonoGame.Aseprite.Sprites.SpriteSheet>). This can be used to create [AnimatedSprite](<xref:MonoGame.Aseprite.Sprites.AnimatedSprite>) instances based on the tags you created in Aseprite.                            |
| [TilesetProcessor](<xref:Processors.TilesetProcessor>)                 | Processes a single tileset from the Aseprite file. A `Texture2D` is generated as the source image of the tileset and [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) elements are created to represent the source rectangle for each tile in the tileset.                                            |
| [TilemapProcessor](<xref:Processors.TilemapProcessor>)                 | Processes a single frame from the Aseprite file as a [Tilemap](<xref:MonoGame.Aseprite.Tilemaps.Tilemap>). Only tilemap layers and tilemap cels from the frame are processed.                                                                                                                                |
| [AnimatedTilemapProcessor](<xref:Processors.AnimatedTilemapProcessor>) | Processes all frames from the Aseprite file as an [AnimatedTilemap](<xref:MonoGame.Aseprite.Tilemaps.AnimatedTilemap>). Only tilemap layers and tilemap cels from each frame are processed.                                                                                                                  |
