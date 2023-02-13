---
id: texture-atlas
title: TextureAtlas Class
sidebar_label: TextureAtlas
---

The purpose of this document is to provide a guide for creating and using an instance of the `TextureAtlas` class.

## Overview

The `TextureAtlas` class represents a single source image with zero or more named `TextureRegions`. Each `TextureRegion` represents a rectangular region within the source image. This provides a convenient method of using a single image packed with all of the frames from our Aseprite file where each frame is a separate `TextureRegion` that we can access.

## Creating a `Sprite`

A `TextureAtlas` can be created using from an existing `AsepriteFile` instance, or you can create one manually using its constructor with a `Texture2D`. The following sections cover how to create a `TextureAtlas` instance.

### From an `AsepriteFile`

If you have an existing `AsepriteFile` instance, you can use the `TextureAtlasProcessor` to create a new `TextureAtlas` from the `AsepriteFile`.

**Add using statement**

```cs
using MonoGame.Aseprite.Sprites;
using MonoGame.Aseprite.Content.Processors;
```

**Create the TextureAtlas**

```cs
protected override LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path/to/file");

    //  Create the texture atlas using the TextureAtlasProcessor
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);
}
```

Additionally, there are several optional parameters that can be included when create a `TextureAtlas` using the `TextureAtlasProcessor`

| Optional Parameter       | Default Value | Summary                                                                                                |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------ |
| `onlyVisibleLayers`      | `true`        | Indicates whether only cels on visible layers should be included.                                      |
| `includeBackgroundLayer` | `false`       | Indicates whether cels on a layer marked as a background layer should be included.                     |
| `includeTilemapLayers`   | `true`        | Indicates whether cels on tilemap layers should be included.                                           |
| `mergedDuplicates`       | `true`        | Indicates whether duplicate frames should be merged into a single frame in the generated source image. |
| `borderPadding`          | `0`           | The amount of transparent pixels add to the edges of the generated source image                        |
| `spacing`                | `0`           | The amount of transparent pixels to add between each texture region in the generated source image.     |
| `innerPadding`           | `0`           | The amount of transparent pixels to add around each texture region in the generated image.             |

The following example shows creating a `TextureAtlas` using the `TextureAtlasProcessor` while supplying the additional optional parameters:

```cs
protected override void LoadContent()
{
    //  Load the Aseprite file
    AsepriteFile aseFile = AsepriteFile.Load("path/to/file");

    //  Example using all optional parameters with their defaults
    TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile
                                                       onlyVisibleLayers: true,
                                                       includeBackgroundLayer: false,
                                                       includeTilemapLayers: true,
                                                       mergeDuplicates: true,
                                                       borderPadding: 0,
                                                       spacing: 0,
                                                       innerPadding 0);

}
```

### From the Constructor

The `TextureAtlas` class is not limited to only being used with the `MonoGame.Aseprite` library. It provides a constructor you can use to create an instance manually from any `Texture2D` that you have loaded prior. It also provided methods for adding the `TextureRegion` elements manually to the `TextureAtlas`.

The follow code demonstrates creating an instance of the `TextureAtlas` class from a `Texture2D` and adding the `TextureRegions` to the atlas.

**Add using statement**

```cs
using MonoGame.Aseprite.Sprites;
```

**Create TextureAtlas using the constructor**

```cs
protected override LoadContent()
{
    //  Load your Texture2D
    Texture2D texture = Content.Load<Texture2D>("myTexture");

    //  Create the texture atlas
    TextureAtlas atlas = new("myAtlas", texture);

    //  Add texture regions to the atlas
    //  The CreateRegion method provides three overloads
    atlas.CreateRegion("region 0", x: 0, y: 0, width: 10, height: 10);
    atlas.CreateRegion("region 1", location: new Point(0, 10), size: new Point(10, 10));
    atlas.CreateRegion("region 2", bounds: new Rectangle(10, 0, 10, 10));
}

```

## Retrieving a `TextureRegion`

The `TextureAtlas` class provides several methods for retrieving a `TextureRegion` that was added to the `TextureAtlas`.

### With the `this[]` Accessor

The `TextureAtlas` class provides two `this[]` accessor for retrieving a `TextureRegion.

```cs
//  Get the texture region by index
TextureRegion textureRegion = atlas[0];
```

```cs
//  Get the texture region by name
TextureRegion textureRegion = atlas["region 0"];
```

:::caution
The `this[int]` accessor will throw an `ArgumentOutOfRangeException` if the index given is less than zero or greater than or equal to the total texture regions in the atlas.

The `this(string)` accessor will throw a `KeyNotFoundException` if the texture atlas does not contain a texture region with the name given.

Both of these methods have complimentary `TryGetRegion` methods, discussed below that do not throw exceptions.
:::

### With the `GetRegion` Methods

The `TextureAtlas` class also provides the `GetRegion(int)` and `GetRegion(string)` methods for retrieving a `TextureRegion`

```cs
//  Get the texture region by index
TextureRegion textureRegion = atlas.GetRegion(0);
```

```cs
//  Get the texture region by name
TextureRegion textureRegion = atlas.GetRegion("region 0");
```

:::caution
The `GetRegion(int)` method will throw an `ArgumentOutOfRangeException` if the index given is less than zero or greater than or equal to the total texture regions in the atlas.

The `GetRegion(string)` method will throw a `KeyNotFoundException` if the texture atlas does not contain a texture region with the name given.

Both of these methods have complimentary `TryGetRegion` methods, discussed below that do not throw exceptions.
:::

### With the `TryGetRegion` Methods

The `TextureAtlas` also provides the `TryGetRegion(int, out TextureRegion?)` and `TryGetRegion(string, out TextureRegion?)` methods for retrieving a `TextureRegion`. Unlike the previous methods mentioned, these do not throw an exception if the index or name provided are invalid. Instead, both return a `boolean` value that indicates if locating the `TextureRegion` was successful, and an `out TextureRegion?` parameter that contains the `TextureRegion` located when successful.

```cs
//  Try to get the texture region by index
if(atlas.TryGetRegion(0, out TextureRegion? textureRegion))
{
    //  Do something with the texture region
}
```

```cs
//  Try to get the texture region by name
if(atlas.TryGetRegion("region 0", out TextureRegion? textureRegion))
{
    //  Do something with the texture region
}
```

:::tip

Both of the `TryGetRegion` methods decorate the `out` parameter using the [[NotNullWhen(true)] attribute](https://learn.microsoft.com/en-us/dotnet/api/system.diagnostics.codeanalysis.notnullwhenattribute?view=net-7.0). This means if you are using [Nullable Context](https://learn.microsoft.com/en-us/dotnet/csharp/nullable-references#nullable-contexts) in your project, then the `TextureRegion` is guaranteed to not be `null` when the method returns true and provides to correct context for the compiler and analyzers.

:::

## Creating a `Sprite`

The `TextureAtlas` also provides methods for creating an instance of the `Sprite` class from one of the `TextureRegions` that have been added. The following demonstrates how to do this:

```cs
//  Create the sprite from the texture region at index 0;
Sprite sprite = atlas.CreateSprite(0)
```

```cs
//  Create the sprite from the texture region by name
Sprite sprite = atlas.CreateSprite("region 0");
```

:::tip

Both of the `CreateSprite` methods have overloads that also allow you to specified the name to assign the sprite for the `Sprite.Name` property. If no name is specified, then the `Sprite` will be assigned the name of the `TextureRegion` used to created it.

:::

## Conclusion

In this document was went over how to create an instance of the `TextureAtlas` class, how to add `TextureRegion` elements to an instance, and how to retrieve a `TextureRegion` element from it.  We also showed how to create a new `Sprite` instance from the `TextureAtlas`.  Below you can find links to additional guides for the types that were mentioned in this document and and reference links for the `TextureAtlas` class.

## See Also

The following classes are referenced in this document and the links to their guides are provided below.

- [AsepriteFile]
- [TextureRegion]
- [Sprite]

## References

Refer to the [TextureAtlas API] for more information on the properties and methods of the `TextureAtlas` class.
