---
uid: Processors.TextureAtlasProcessor
title: TextureAtlas Processor
_description: Overview of the TextureAtlasProcessor
---

# TextureAtlasProcessor

The purpose of this document is to provide an overview of the [TextureAtlasProcessor](<xref:MonoGame.Aseprite.Content.Processors.TextureAtlasProcessor>) provided with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library.

## Overview

A [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). represents all frames from your Aseprite file packed into a single source `Texture2D` image. The location of each frame within the source image is provided as a [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) element in the [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>)..

The [TextureAtlasProcessor](<xref:MonoGame.Aseprite.Content.Processors.TextureAtlasProcessor>) is used to process a [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). from you Aseprite file. To do this, all frames in the Aseprite file are flattened and then packed into a single source `Texture2D` that is generated. When each frame is processed, the a source rectangle is calculated that represents the location within the source `Texture2D` for that frame. Then a [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) element is created from the source rectangle and added to the [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>)..

## Usage

The following example demonstrates how to use the [TextureAtlasProcessor](<xref:MonoGame.Aseprite.Content.Processors.TextureAtlasProcessor>) to create a [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Content.Processors;
```

**Create [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). Using the [TextureAtlasProcessor](<xref:MonoGame.Aseprite.Content.Processors.TextureAtlasProcessor>)**

# [From Aseprite File](#tab/from-aseprite-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  Use the TextureAtlasProcessor to create the TextureAtlas.
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);
}
```

# [From XNB File](#tab/from-xnb-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the TextureAtlasProcessor to create the TextureAtlas.
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);
}
```

---

Additionally the `TextureAtlasProcessor.Process` method has optional parameters that can be given to control how the processor generates the source `Texture2D`. The table below provides a summary of these optional parameters:

| Optional Parameter       | Default Value | Summary                                                                                                                                                                                |
| ------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                                                                                                      |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included.                                                                                                      |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                                                                                                                          |
| `mergeDuplicates`        | `true`        | Indicates whether duplicate [AsepriteFrame](<xref:MonoGame.Aseprite.AsepriteTypes.AsepriteFrame>)  elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                                                                              |
| `spacing`                | `0`           | The amount of transparent pixels to add between each [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) in the generated source `Texture2D`.                                      |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) in the generated source `Texture2D`.                                       |
