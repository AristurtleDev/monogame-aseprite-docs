---
uid: Processors.SpriteSheetProcessor
_title: SpriteSheetProcessor
_description: Overview of the SpriteSheetProcessor
---

# SpriteSheetProcessor

The purpose of this document is to provide an overview of the [SpriteSheetProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteSheetProcessor>) provided with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library.

## Overview

A [SpriteSheet](<xref:MonoGame.Aseprite.Sprites.SpriteSheet>) is a wrapper around a [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). that contains additional properties and methods for defining animations and creating [AnimatedSprite](<xref:MonoGame.Aseprite.Sprites.AnimatedSprite>) instances.

The [SpriteSheetProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteSheetProcessor>) is used to process a [SpriteSheet](<xref:MonoGame.Aseprite.Sprites.SpriteSheet>) from you Aseprite file. To do this, first all frames in the Aseprite file are processed as a [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). using the [TextureAtlasProcessor](<xref:MonoGame.Aseprite.Content.Processors.TextureAtlasProcessor>). Next, all tags that you defined in your Aseprite file are then processed as [AnimationTag](<xref:MonoGame.Aseprite.Sprites.AnimationTag>) instances and added to the [SpriteSheet](<xref:MonoGame.Aseprite.Sprites.SpriteSheet>) so [AnimatedSprite](<xref:MonoGame.Aseprite.Sprites.AnimatedSprite>) instances can be created from them.

## Usage

The following example demonstrates how to use the [SpriteSheetProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteSheetProcessor>) to create a [SpriteSheet](<xref:MonoGame.Aseprite.Sprites.SpriteSheet>) from your Aseprite file:

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Content.Processors;
```

**Create [SpriteSheet](<xref:MonoGame.Aseprite.Sprites.SpriteSheet>) Using the [SpriteSheetProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteSheetProcessor>)**

# [From Aseprite File](#tab/from-aseprite-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  Use the SpriteSheetProcessor to create the SpriteSheet.
    SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);
}
```
# [From XNB File](#tab/from-xnb-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the SpriteSheetProcessor to create the SpriteSheet.
    SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);
}
```

---

Additionally the `SpriteSheetProcessor.Process` method has optional parameters that can be given to control how the processor generates the source `Texture2D`. The table below provides a summary of these optional parameters:

| Optional Parameter       | Default Value | Summary                                                                                                                                                                                |
| ------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                                                                                                      |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included.                                                                                                      |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                                                                                                                          |
| `mergeDuplicates`        | `true`        | Indicates whether duplicate [AsepriteFrame](<xref:MonoGame.Aseprite.AsepriteTypes.AsepriteFrame>)  elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                                                                              |
| `spacing`                | `0`           | The amount of transparent pixels to add between each [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) in the generated source `Texture2D`.                                      |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) in the generated source `Texture2D`.                                       |

