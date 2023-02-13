---
id: sprite
title: Sprite
sidebar_label: Sprite
---

## Definition

<small>

Assembly: `MonoGame.Aseprite`  
NameSpace: `MonoGame.Aseprite.Sprites`

</small>

```csharp
public class Sprite
```

Inheritance [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object) → Sprite

Derived  
↳ [AnimatedSprite](AnimatedSprite.md "MonoGame.Aseprite.Sprites.AnimatedSprite")

## Summary

The `Sprite` class is a general purpose wrapper around a `TextureRegion` with properties to control how it is rendered. When creating a `Sprite` from an `AsepriteFile`, it represents the image of the frame used to create it.

The most common methods for creating a `Sprite` will be either by using the `SpriteProcessor` to create an instance from a frame in your Aseprite file, or by using a `TextureAtlas` to create a `Sprite` from one of the regions in the atlas. An instance can also be created manually using the constructor for a more general purpose use.

### Examples

The following example demonstrates how to create a `Sprite` using a `SpriteProcessor`:

```cs {5} title="Create Sprite using SpriteProcessor" showLineNumbers
//Load Aseprite file
AsepriteFile aseFile = AsepriteFile.Load("path-to-file");

// Use sprite processor to create sprite
Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
```

The following example demonstrates how to create a `Sprite` from a `TextureAtlas`:

```cs {8} title="Create Sprite From a Texture Atlas Region" showLineNumbers
//  Load the Aseprite file.
AsepriteFile aseFile = AsepriteFile.Load("path-to-file");

//  Create a texture atlas from the Aseprite file.
TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);

//  Create a sprite from region 0 in the texture atlas.
Sprite sprite = atlas.CreateSprite(regionIndex: 0);
```

The following example demonstrates how to create a `Sprite` from a `SpriteSheet`:

```cs {8} title="Create Sprite from a SpriteSheet Region" showLineNumbers
//  Load the Aseprite file.
AsepriteFile aseFile = AsepriteFile.Load("path-to-file");

//  Create a spritesheet from the Aseprite file.
SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);

//  Create a sprite from region 0 in the spritesheet.
Sprite sprite = spriteSheet.CreateSprite(regionIndex: 0);
```

## Remarks

The `Sprite` class wraps an instance of the `TextureRegion` class, which in turn is a wrapper around a `Texture2D` instance. Additionally, it contains various properties that match up with the parameters you would normally pass to the `SpriteBatch` when rendering a `Texture2D`. You can adjust the values of these properties to control how the `Sprite` is rendered.

Furthermore, the `Sprite` class offers the `Sprite.TextureRegion` property which gives direct access to the `TextureRegion` it is wrapping. This can be used for one-off rendering of its source image where you need to override the properties during rendering without actually changing them.

### Performance Considerations

If you plan to create multiple `Sprite` instances from various frames in your Aseprite file, consider first creating a `TextureAtlas` from your Aseprite file, and then create each `Sprite` instance using the `TextureAtlas`. By doing this, you will be generating a single source `Texture2D` for the `TextureAtlas`. Each `Sprite` created from the `TextureAtlas` will then be referencing the single source `Texture2D` instead of separate `Texture2D` instances per `Sprite.

This is beneficial because it reduces the amount of texture swapping done on the `SpriteBatch` when rendering the sprites.

## Constructors

| Constructors                                    |                                                       |
| :---------------------------------------------- | :---------------------------------------------------- |
| [Sprite(string, Texture2D)](./constructors)     | Initializes a new instance of the [Sprite](./) class. |
| [Sprite(string, TextureRegion)](./constructors) | Initializes a new instance of the [Sprite](./) class. |

## Properties

| Properties                                         |                                                                                                                                                                                                     |
| :------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Color](./properties/color)                        | Gets or Sets the color mask to apply when rendering this [Sprite](./).                                                                                                                              |
| [FlipHorizontally](./properties/flip-horizontally) | Gets or Sets a value that indicates whether to flip this [Sprite](./) horizontally when rendering.                                                                                                  |
| [FlipVertically](./properties/flip-vertically)     | Gets or Sets a value that indicates whether to flip this [Sprite](./) vertically when rendering.                                                                                                    |
| [IsVisible](./properties/is-visible)               | Gets or Sets a value that indicates if this [Sprite](./) is visible and can be rendered.                                                                                                            |
| [LayerDepth](./properties/layer-depth)             | Gets or Sets the layer depth to render this [Sprite](./) at.                                                                                                                                        |
| [Name](./properties/name)                          | Gets the name assigned to this [Sprite](./).                                                                                                                                                        |
| [Origin](./properties/origin)                      | Gets or Sets the x- and y-coordinate point of origin to apply when rendering this [Sprite](./).                                                                                                     |
| [OriginX](./properties/origin-x)                   | Gets or Sets the x-coordinate point of origin to apply when rendering this [Sprite](./).                                                                                                            |
| [OriginY](./properties/origin-y)                   | Gets or Sets the y-coordinate point of origin to apply when rendering this [Sprite](./).                                                                                                            |
| [Rotation](./properties/rotation)                  | Gets or Sets the rotation, in radians, to apply when rendering this [Sprite](./).                                                                                                                   |
| [Scale](./properties/scale)                        | Gets or Sets the x- and y-axis scale factor to use when rendering this [Sprite](./).                                                                                                                |
| [ScaleX](./properties/scale-x)                     | Gets or Sets the x-axis scale factor to use when rendering this [Sprite](./).                                                                                                                       |
| [ScaleY](./properties/scale-y.md)                  | Gets or Sets the y-axis scale factor to use when rendering this [Sprite](./).                                                                                                                       |
| [SpriteEffects](./properties/sprite-effects)       | Gets or Sets the [SpriteEffects](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteEffects.html) to apply for vertical and horizontal flipping when rendering this [Sprite](./). |
| [TextureRegion](./properties/texture-region)       | Gets the source [TextureRegion](Sprite.TextureRegion.md "MonoGame.Aseprite.Sprites.Sprite.TextureRegion") of this [Sprite](./).                                                                     |
| [Transparency](./properties/transparency)          | Gets or Sets the level of transparency, between 0.0f, and 1.0f, to apply when rendering this [Sprite](./).                                                                                          |

## Methods

| Methods                                                  |                                                                                                                                                                                                                                  |
| :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Draw(SpriteBatch, Vector2)](./methods/draw)             | Renders this [Sprite](./).                                                                                                                                                                                                       |
| [FromRaw(GraphicsDevice, RawSprite)](./methods/from-raw) | Creates a new instance of the [Sprite](./) class from the given [MonoGame.Aseprite.RawTypes.RawSprite](https://docs.microsoft.com/en-us/dotnet/api/MonoGame.Aseprite.RawTypes.RawSprite "MonoGame.Aseprite.RawTypes.RawSprite"). |

## See Also

- `MonoGame.Aseprite` References
  - [AnimatedSprite]
  - [AsepriteFile]
  - [SpriteProcessor]
  - [SpriteSheet]
  - [TextureAtlas]
  - [TextureRegion]
- MonoGame Framework References
  - [GraphicsDevice](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.GraphicsDevice.html)
  - [SpriteBatch](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteBatch.html)
  - [SpriteEffects](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.SpriteEffects.html)
  - [Texture2D](https://docs.monogame.net/api/Microsoft.Xna.Framework.Graphics.Texture2D.html)
  - [Vector2](https://docs.monogame.net/api/Microsoft.Xna.Framework.Vector2.html)
