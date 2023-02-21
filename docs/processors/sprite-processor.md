---
id: sprite-processor
title: SpriteProcessor
sidebar_label: SpriteProcessor
---

The purpose of this document is to provide an overview of the [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md) provided with the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library.

## Overview

A [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) represents a single image. The [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md) is used to processes a [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) from a single frame in your Aseprite file. To do this, the processor will flatten the frame to generate a source `Texture2D` image that is wrapped by a [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) instance. The [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) is then used to create the [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) that is returned.

## Usage

The following example demonstrates how to use the [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md) to create a [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) from a single frame.

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Processors;
```

**Create [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) Using the [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md)**

```cs
public override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path-to-aseprite-file");

    //  If you are using the MGCB Editor to import your Aseprite file, use the
    //  following command instead
    //  AsepriteFile aseFile = Content.Load<AsepriteFile>("content-name");

    //  Use the SpriteProcessor to create the Sprite.
    //  Just tell it the frame index of the frame to use
    Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
}
```

Additionally the [SpriteProcessor.Process](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/Methods/Process.md) method has optional parameters that can be given to control how the processor generates the source `Texture2D` from the frame. The table below provides a summary of these optional parameters:

| Optional Parameter       | Default Value | Summary                                                                           |
| ------------------------ | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                 |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included. |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                     |

:::tip

If you plan to create multiple [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) instances from different frames in the Aseprite file, it is recommended instead to use the [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md) to create a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md)., then use the [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). to create the [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) instances.

The reason for this is because when a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). is generated, it only generates one source `Texture2D` image and each frame from the Aseprite file is provided as a [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) that references the one source `Texture2D`. 

[Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) instances created from a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). all share the same source `Texture2D` internally, which leads to less texture swapping for the `SpriteBatch` when rendering them.

:::
