---
id: sprite-sheet-processor
title: SpriteSheet Processor
sidebar_label: SpriteSheet Processor
---

The purpose of this document is to provide an overview of the [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md) provided with the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library.

## Overview

A [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) is a wrapper around a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). that contains additional properties and methods for defining animations and creating [AnimatedSprite](../api/MonoGame.Aseprite/Sprites/AnimatedSprite/AnimatedSprite.md) instances.

The [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md) is used to process a [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) from you Aseprite file. To do this, first all frames in the Aseprite file are processed as a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). using the [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md). Next, all tags that you defined in your Aseprite file are then processed as [AnimationTag](../api/MonoGame.Aseprite/Sprites/AnimationTag/AnimationTag.md) instances and added to the [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) so [AnimatedSprite](../api/MonoGame.Aseprite/Sprites/AnimatedSprite/AnimatedSprite.md) instances can be created from them.

## Usage

The following example demonstrates how to use the [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md) to create a [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Processors;
```

**Create [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) Using the [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md)**

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  If you are using the MGCB Editor to import your Aseprite file, use the
    //  following command instead
    //  AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the SpriteSheetProcessor to create the SpriteSheet.
    SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);
}
```

Additionally the `SpriteSheetProcessor.Process` method has optional parameters that can be given to control how the processor generates the source `Texture2D`. The table below provides a summary of these optional parameters:

| Optional Parameter       | Default Value | Summary                                                                                                                         |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                                               |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included.                                               |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                                                                   |
| `mergeDuplicates`        | `true`        | Indicates whether duplicate [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                       |
| `spacing`                | `0`           | The amount of transparent pixels to add between each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                       |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                        |

