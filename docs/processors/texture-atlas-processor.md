---
id: texture-atlas-processor
title: TextureAtlas Processor
sidebar_label: TextureAtlas Processor
---

The purpose of this document is to provide an overview of the [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md) provided with the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library.

## Overview

A [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). represents all frames from your Aseprite file packed into a single source `Texture2D` image. The location of each frame within the source image is provided as a [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) element in the [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md)..

The [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md) is used to process a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). from you Aseprite file. To do this, all frames in the Aseprite file are flattened and then packed into a single source `Texture2D` that is generated. When each frame is processed, the a source rectangle is calculated that represents the location within the source `Texture2D` for that frame. Then a [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) element is created from the source rectangle and added to the [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md)..

## Usage

The following example demonstrates how to use the [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md) to create a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Processors;
```

**Create [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). Using the [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md)**

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
| `mergeDuplicates`        | `true`        | Indicates whether duplicate [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                       |
| `spacing`                | `0`           | The amount of transparent pixels to add between each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                       |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                        |
