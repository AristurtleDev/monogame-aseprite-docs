---
uid: Processors.SpriteProcessor
title: SpriteProcessor
description: Overview of the SpriteProcessor
---

# SpriteProcessor

The purpose of this document is to provide an overview of the [SpriteProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteProcessor>) provided with the [MonoGame.Aseprite](<xref:MonoGame.Aseprite>) library.

## Overview

A [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) represents a single image. The [SpriteProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteProcessor>) is used to processes a [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) from a single frame in your Aseprite file. To do this, the processor will flatten the frame to generate a source `Texture2D` image that is wrapped by a [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) instance. The [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) is then used to create the [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) that is returned.

## Usage

The following example demonstrates how to use the [SpriteProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteProcessor>) to create a [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) from a single frame.

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Content.Processors;
```

**Create [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) Using the [SpriteProcessor](<xref:MonoGame.Aseprite.Content.Processors.SpriteProcessor>)**

# [From Aseprite File](#tab/from-aseprite-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  Use the SpriteProcessor to create the Sprite.
    //  Just tell it the frame index of the frame to use
    Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
}
```

# [From XNB File](#tab/from-xnb-file)

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the SpriteProcessor to create the Sprite.
    //  Just tell it the frame index of the frame to use
    Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
}
```

---

Additionally the [SpriteProcessor.Process](<xref:MonoGame.Aseprite.Content.Processors.SpriteProcessor.Process(Microsoft.Xna.Framework.Graphics.GraphicsDevice,MonoGame.Aseprite.AsepriteFile,System.Int32,System.Boolean,System.Boolean,System.Boolean)>) method has optional parameters that can be given to control how the processor generates the source `Texture2D` from the frame. The table below provides a summary of these optional parameters:

| Optional Parameter       | Default Value | Summary                                                                           |
| ------------------------ | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                 |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included. |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                     |

> [!TIP]
> If you plan to create multiple [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) instances from different frames in the Aseprite file, it is recommended instead to use the [TextureAtlasProcessor](<xref:MonoGame.Aseprite.Content.Processors.TextureAtlasProcessor>) to create a [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>)., then use the [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). to create the [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) instances.
> 
> The reason for this is because when a [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). is generated, it only generates one source `Texture2D` image and each frame from the Aseprite file is provided as a [TextureRegion](<xref:MonoGame.Aseprite.TextureRegion>) that references the one source `Texture2D`. 
> 
> [Sprite](<xref:MonoGame.Aseprite.Sprites.Sprite>) instances created from a [TextureAtlas](<xref:MonoGame.Aseprite.Sprites.TextureAtlas>). all share the same source `Texture2D` internally, which leads to less texture swapping for the `SpriteBatch` when rendering them.
