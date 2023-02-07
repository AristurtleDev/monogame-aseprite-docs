---
id: processors
title: Processors
sidebar_label: Processors
---

The purpose of this document is to provide an overview of the processors provided with the `MonoGame.Aseprite` library that process an `AsepriteFile` instance.

# Overview

In the previous document, we discussed how to import the contents of your Aseprite file as an instance of the `AsepriteFile` class. The information contained within this class is structured similar to how it is in Aseprite. This information is granular and needs to be processed to provide more useful and concrete implementations.

For instance, the `AsepriteCel` elements in each of the `AsepriteFrame` elements provide the pixel data for each layer in that frame. What if you wanted to create a source image of that frame itself? You would need to go through each of the `AsepriteCel` elements in that frame and merge them down with the cel below it until they have all been merged (also known as flattening the frame). What if you wanted to create a source image of all frames packed together? What if you wanted to create animations based on the `AsepriteTag` elements?

This is where the power of the `MonoGame.Aseprite` library comes into play. It provides several out-of-the-box processors to handle these scenarios for you. While they may not cover every processing scenario, they have been designed to cover most.

In the following sections, we'll go over each of the processors and how to use them.

## The `SpriteProcessor`

The first one we'll discuss is the most basic one; the `SpriteProcessor`. This processor will create a new `Sprite` instance from a specified `AsepriteFrame` in an `AsepriteFile` instance.

The following example shows how to do this:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the SpriteProcessor to create a Sprite
    //  In this example, we'll just use the frame at index 0
    Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
}
```

Additionally, the `SpriteProcessor.Process` method has a few optional parameters that can be included when creating the `Sprite`. The table below provides a summary of these parameters.

| Optional Parameter       | Default Value | Summary                                                                           |
| ------------------------ | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                 |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included. |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                     |

The following example demonstrates using the `SpriteProcessor` with these optional parameters

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the SpriteProcessor to create a Sprite
    //  In this example, we'll just use the frame at index 0
    Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0,
                                                                     onlyVisibleLayers: true,
                                                                     includeBackgroundLayers: false,
                                                                     includeTilemapLayers: true);
}
```

:::info

For more detailed information on the `Sprite` class, including how to render it using the `SpriteBatch`, see the [Sprite guide](../guides/sprite.md) document.

:::

## The `TextureAtlasProcessor`

The `TextureAtlasProcessor` will processes the `AsepriteFile` to create a new `TextureAtlas` instance.

A `TextureAtlas` is a wrapper around a source `Texture2D` image and provides methods for creating named `TextureRegion` elements that represent source rectangles within the source `Texture2D`.

The `TextureAtlasProcessor` will process all `AsepriteFrame` elements and pack them into a single source `Texture2D` image to create the `TextureAtlas` with. A `TextureRegion` element is added to the `TextureAtlas` that represents the source rectangle for each frame that is processed.

The following example demonstrates using this processor:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the TextureAtlasProcessor to create a TextureAtlas
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);
}
```

Additionally, the `TextureAtlasProcessor.Process` method has a several optional parameters that can be included when creating the `TextureAtlas`. The table below provides a summary of these parameters.

| Optional Parameter       | Default Value | Summary                                                                                                                         |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                                               |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included.                                               |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                                                                   |
| `mergeDuplicates`        | `true`        | Indicates whether duplicate `AsepriteFrame` elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                       |
| `spacing`                | `0`           | The amount of transparent pixels to add between each `TextureRegion` in the generated source `Texture2D`.                       |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each `TextureRegion` in the generated source `Texture2D`.                        |

The following example demonstrates using the `TextureAtlasProcessor` with these optional parameters:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the TextureAtlasProcessor to create a TextureAtlas
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile, onlyVisibleLayers: true,
                                                                                includeBackgroundLayers: false,
                                                                                includeTilemapLayers: true,
                                                                                mergeDuplicates: true,
                                                                                borderPadding: 0,
                                                                                spacing: 0,
                                                                                innerPadding: 0;
}
```

:::info

For more detailed information on the `TextureAtlas` class, see the [TextureAtlas guide](../guides/texture-atlas.md) document.

:::

:::info

For more detailed information on the `TextureRegion` class, see the [TextureRegion guide](../guides/texture-region.md) document.

:::

## The `SpriteSheetProcessor`

The `SpriteSheetProcessor` will processes the `AsepriteFile` to create a new `SpriteSheet` instance.

A `SpriteSheet` is a wrapper around a `TextureAtlas` that provides additional functionality for defining animations and creating `AnimatedSprites`.

When using this processor, all `AsepriteFrame` elements will be packed into a single source `Texture2D` that is used to create a `TextureAtlas`. That `TextureAtlas` is then used to create the `SpriteSheet`. Additionally, all `AsepriteTag` elements will be processed and added to the `SpriteSheet` as `AnimationTag` elements.

The following example demonstrates using this processor:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the SpriteSheetProcessor to create a SpriteSheet
    SpriteSheet atlas = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);
}
```

Additionally, the `SpriteSheetProcessor.Process` method has a several optional parameters that can be included when creating the `SpriteSheet`. The table below provides a summary of these parameters.

| Optional Parameter       | Default Value | Summary                                                                                                                         |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                                               |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included.                                               |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                                                                   |
| `mergeDuplicates`        | `true`        | Indicates whether duplicate `AsepriteFrame` elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                       |
| `spacing`                | `0`           | The amount of transparent pixels to add between each `TextureRegion` in the generated source `Texture2D`.                       |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each `TextureRegion` in the generated source `Texture2D`.                        |

The following example demonstrates using the `SpriteSheetProcessor` with these optional parameters:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the TextureAtlasProcessor to create a TextureAtlas
    SpriteSheet atlas = SpriteSheetProcessor.Process(GraphicsDevice, aseFile, onlyVisibleLayers: true,
                                                                              includeBackgroundLayers: false,
                                                                              includeTilemapLayers: true,
                                                                              mergeDuplicates: true,
                                                                              borderPadding: 0,
                                                                              spacing: 0,
                                                                              innerPadding: 0;
}
```

:::info

For more detailed information on the `SpriteSheet` class, see the [SpriteSheet guide](../guides/sprite-sheet.md) document.

:::

## The `TilesetProcessor`

The `TilesetProcessor` will processes and `AsepriteTileset` element in  the `AsepriteFile` to create a new `Tileset` instance.

A `Tileset` is similar to a `TextureAtlas` in that it is a wrapper around a source `Texture2D` image. However, unlike a `TextureAtlas`, the `TextureRegion` elements for a `Tileset` are auto-generated based on the width and height of each tile in the `Tileset`.

When using this processor, you must specify either the index or the name of the `AsepriteTileset` element in the `AsepriteFile` to processes. 

The following example demonstrates using this processor:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the SpriteSheetProcessor to create a Tileset
    //  In this example, we'll use the AsepriteTileset at index 0 in the AsepriteFile
    Tileset tileset = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetIndex: 0);

    //  Alternatively you can use the name of the tileset that you assigned in Aseprite
    Tileset tilesetByName = TilesetProcessor.Process(GraphicsDevice, aseFile, tilesetName: "MyTileset");
}
```

The processor will then generate a `Texture2D` source image of the tileset and use that to create the `Tileset` instance.  Each tile in the `Tileset` instance created is auto-generated and is represented by a `TextureRegion` element.  Additionally, each tile `TextureRegion` will be given a name based on the following pattern: `tilesetName_tilesetTileID`.  For instance, if the name assigned the tileset in Aseprite is "myTileset", the the tile at index 0 will be named `myTileset_0`.

:::info

For more detailed information on the `Tileset` class, see the [Tileset guide] document.

:::
