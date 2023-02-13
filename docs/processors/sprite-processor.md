---
id: sprite-processor
title: SpriteProcessor
sidebar_label: SpriteProcessor
---

The purpose of this document is to provide an overview of the `SpriteProcessor` provided with the `MonoGame.Aseprite` library.

## Overview

A `Sprite` represents a single image. The `SpriteProcessor` is used to processes a `Sprite` from a single frame in your Aseprite file. To do this, the processor will flatten the frame to generate a source `Texture2D` image that is wrapped by a `TextureRegion` instance. The `TextureRegion` is then used to create the `Sprite` that is returned.

## Usage

The following example demonstrates how to use the `SpriteProcessor` to create a `Sprite` from a single frame.

**Add Using Statements**

```cs
using Monogame.Aseprite;
using MonoGame.Aseprite.Sprites;
using Monogame.Aseprite.Processors;
```

**Create `Sprite` Using the `SpriteProcessor`**

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

Additionally the `SpriteProcessor.Process` method has optional parameters that can be given to control how the processor generates the source `Texture2D` from the frame. The table below provides a summary of these optional parameters:

| Optional Parameter       | Default Value | Summary                                                                           |
| ------------------------ | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                 |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included. |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                     |

:::tip

If you plan to create multiple `Sprite` instances from different frames in the Aseprite file, it is recommended instead to use the `TextureAtlasProcessor` to create a `TextureAtlas`, then use the `TextureAtlas` to create the `Sprite` instances.

The reason for this is because when a `TextureAtlas` is generated, it only generates one source `Texture2D` image and each frame from the Aseprite file is provided as a `TextureRegion` that references the one source `Texture2D`. 

`Sprite` instances created from a `TextureAtlas` all share the same source `Texture2D` internally, which leads to less texture swapping for the `SpriteBatch` when rendering them.

:::

:::info

For more information other `Sprite` class, including how to draw it with the `SpriteBatch`, see the [`Sprite` Guide]

:::
