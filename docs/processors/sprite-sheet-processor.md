---
id: sprite-sheet-processor
title: SpriteSheet Processor
sidebar_label: SpriteSheet Processor
---

The purpose of this document is to provide an overview of the `SpriteSheetProcessor` provided with the `MonoGame.Aseprite` library.

## Overview

A `SpriteSheet` is a wrapper around a `TextureAtlas` that contains additional properties and methods for defining animations and creating `AnimatedSprite` instances.

The `SpriteSheetProcessor` is used to process a `SpriteSheet` from you Aseprite file. To do this, first all frames in the Aseprite file are processed as a `TextureAtlas` using the `TextureAtlasProcessor`. Next, all tags that you defined in your Aseprite file are then processed as `AnimationTag` instances and added to the `SpriteSheet` so `AnimatedSprite` instances can be created from them.

## Usage

The following example demonstrates how to use the `SpriteSheetProcessor` to create a `SpriteSheet` from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Processors;
```

**Create `SpriteSheet` Using the `SpriteSheetProcessor`**

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
| `mergeDuplicates`        | `true`        | Indicates whether duplicate `AsepriteFrame` elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                       |
| `spacing`                | `0`           | The amount of transparent pixels to add between each `TextureRegion` in the generated source `Texture2D`.                       |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each `TextureRegion` in the generated source `Texture2D`.                        |

:::info

For more information on the `SpriteSheet` class, including how to create `AnimatedSprite` and `Sprite` instances from it, see the [`SpriteSheet` Guide]

:::
