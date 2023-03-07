---
id: processors
title: Processors
sidebar_label: Processors
---

The purpose of this document is to provide an overview of the processors provided with the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library that process an [AsepriteFile](../api/MonoGame.Aseprite/AsepriteFile/AsepriteFile.md) instance.

# Overview

In the previous document, we discussed how to import the contents of your Aseprite file as an instance of the [AsepriteFile](../api/MonoGame.Aseprite/AsepriteFile/AsepriteFile.md) class. The information contained within this class is structured similar to how it is in Aseprite. This information is granular and needs to be processed to provide more useful and concrete implementations.

For instance, the [AsepriteCel](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteCel/AsepriteCel.md)  elements in each of the [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  elements provide the pixel data for each layer in that frame. What if you wanted to create a source image of that frame itself? You would need to go through each of the [AsepriteCel](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteCel/AsepriteCel.md)  elements in that frame and merge them down with the cel below it until they have all been merged (also known as flattening the frame). What if you wanted to create a source image of all frames packed together? What if you wanted to create animations based on the [AsepriteTag](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteTag/AsepriteTag.md) elements?

This is where the power of the [MonoGame.Aseprite](../api/MonoGame.Aseprite/MonoGame.Aseprite.md) library comes into play. It provides several out-of-the-box processors to handle these scenarios for you. While they may not cover every processing scenario, they have been designed to cover most.

In the following sections, we'll go over each of the processors and how to use them.

## The [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md)

The first one we'll discuss is the most basic one; the [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md). This processor will create a new [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md) instance from a specified [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  in an [AsepriteFile](../api/MonoGame.Aseprite/AsepriteFile/AsepriteFile.md) instance.

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

Additionally, the `SpriteProcessor.Process` method has a few optional parameters that can be included when creating the [Sprite](../api/MonoGame.Aseprite/Sprites/Sprite/Sprite.md). The table below provides a summary of these parameters.

| Optional Parameter       | Default Value | Summary                                                                           |
| ------------------------ | ------------- | --------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                 |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included. |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                     |

The following example demonstrates using the [SpriteProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteProcessor/SpriteProcessor.md) with these optional parameters

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

## The [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md)

The [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md) will processes the [AsepriteFile](../api/MonoGame.Aseprite/AsepriteFile/AsepriteFile.md) to create a new [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). instance.

A [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). is a wrapper around a source `Texture2D` image and provides methods for creating named [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) elements that represent source rectangles within the source `Texture2D`.

The [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md) will process all [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  elements and pack them into a single source `Texture2D` image to create the [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). with. A [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) element is added to the [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). that represents the source rectangle for each frame that is processed.

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

Additionally, the `TextureAtlasProcessor.Process` method has a several optional parameters that can be included when creating the [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md).. The table below provides a summary of these parameters.

| Optional Parameter       | Default Value | Summary                                                                                                                         |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                                               |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included.                                               |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                                                                   |
| `mergeDuplicates`        | `true`        | Indicates whether duplicate [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                       |
| `spacing`                | `0`           | The amount of transparent pixels to add between each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                       |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                        |

The following example demonstrates using the [TextureAtlasProcessor](../api/MonoGame.Aseprite/Content/Processors/TextureAtlasProcessor/TextureAtlasProcessor.md) with these optional parameters:

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

## The [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md)

The [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md) will processes the [AsepriteFile](../api/MonoGame.Aseprite/AsepriteFile/AsepriteFile.md) to create a new [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) instance.

A [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) is a wrapper around a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). that provides additional functionality for defining animations and creating `AnimatedSprites`.

When using this processor, all [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  elements will be packed into a single source `Texture2D` that is used to create a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md).. That [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). is then used to create the [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md). Additionally, all [AsepriteTag](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteTag/AsepriteTag.md) elements will be processed and added to the [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md) as [AnimationTag](../api/MonoGame.Aseprite/Sprites/AnimationTag/AnimationTag.md) elements.

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

Additionally, the `SpriteSheetProcessor.Process` method has a several optional parameters that can be included when creating the [SpriteSheet](../api/MonoGame.Aseprite/Sprites/SpriteSheet/SpriteSheet.md). The table below provides a summary of these parameters.

| Optional Parameter       | Default Value | Summary                                                                                                                         |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                                               |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer set as the background layer should be included.                                               |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on a tilemap layer should be included.                                                                   |
| `mergeDuplicates`        | `true`        | Indicates whether duplicate [AsepriteFrame](../api/MonoGame.Aseprite/AsepriteTypes/AsepriteFrame/AsepriteFrame.md)  elements should be merged into a single region in the generated source `Texture2D`. |
| `borderPadding`          | `0`           | The amount of transparent pixels to add to the edges of the generated source `Texture2D`.                                       |
| `spacing`                | `0`           | The amount of transparent pixels to add between each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                       |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) in the generated source `Texture2D`.                        |

The following example demonstrates using the [SpriteSheetProcessor](../api/MonoGame.Aseprite/Content/Processors/SpriteSheetProcessor/SpriteSheetProcessor.md) with these optional parameters:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file as an AsepriteFile instance
    AsepriteFile aseFile = AsepriteFile.Load("file.aseprite");

    //  Use the SpriteSheetProcessor to create a SpriteSheet
    SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile, onlyVisibleLayers: true,
                                                                              includeBackgroundLayers: false,
                                                                              includeTilemapLayers: true,
                                                                              mergeDuplicates: true,
                                                                              borderPadding: 0,
                                                                              spacing: 0,
                                                                              innerPadding: 0;
}
```

## The [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md)

The [TilesetProcessor](../api/MonoGame.Aseprite/Content/Processors/TilesetProcessor/TilesetProcessor.md) will processes and `AsepriteTileset` element in  the [AsepriteFile](../api/MonoGame.Aseprite/AsepriteFile/AsepriteFile.md) to create a new [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) instance.

A [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) is similar to a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md). in that it is a wrapper around a source `Texture2D` image. However, unlike a [TextureAtlas](../api/MonoGame.Aseprite/Sprites/TextureAtlas/TextureAtlas.md)., the [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) elements for a [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) are auto-generated based on the width and height of each tile in the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md).

When using this processor, you must specify either the index or the name of the `AsepriteTileset` element in the [AsepriteFile](../api/MonoGame.Aseprite/AsepriteFile/AsepriteFile.md) to processes. 

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

The processor will then generate a `Texture2D` source image of the tileset and use that to create the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) instance.  Each tile in the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) instance created is auto-generated and is represented by a [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) element.  Additionally, each tile [TextureRegion](../api/MonoGame.Aseprite/TextureRegion/TextureRegion.md) will be given a name based on the following pattern: `tilesetName_tilesetTileID`.  For instance, if the name assigned the tileset in Aseprite is "myTileset", the the tile at index 0 will be named `myTileset_0`.

:::info

For more detailed information on the [Tileset](../api/MonoGame.Aseprite/Tilemaps/Tileset/Tileset.md) class, see the [Tileset guide] document.

:::
