---
id: texture-atlas-processor
title: TextureAtlas Processor
sidebar_label: TextureAtlas Processor
---

The purpose of this document is to provide an overview of the `TextureAtlasProcessor` provided with the `MonoGame.Aseprite` library.

## Overview

A `TextureAtlas` represents all frames from your Aseprite file packed into a single source `Texture2D` image. The location of each frame within the source image is provided as a `TextureRegion` element in the `TextureAtlas`.

The `TextureAtlasProcessor` is used to process a `TextureAtlas` from you Aseprite file. To do this, all frames in the Aseprite file are flattened and then packed into a single source `Texture2D` that is generated. When each frame is processed, the a source rectangle is calculated that represents the location within the source `Texture2D` for that frame. Then a `TextureRegion` element is created from the source rectangle and added to the `TextureAtlas`.

## Usage

The following example demonstrates how to use the `TextureAtlasProcessor` to create a `TextureAtlas` from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Processors;
```

**Create `TextureAtlas` Using the `TextureAtlasProcessor`**

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  If you are using the MGCB Editor to import your Aseprite file, use the
    //  following command instead
    //  AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the TextureAtlasProcessor to create the TextureAtlas.
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);
}
```

Additionally the `TextureAtlasProcessor.Process` method has optional parameters that can be given to control how the processor generates the source `Texture2D`. The table below provides a summary of these optional parameters:

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

For more information on the `TextureAtlas` class, including how to create `Sprite` instances from it, see the [`TextureAtlas` Guide]

:::
