---

title: Sprite Class
sidebar_label: Sprite
---
**Namespace:** [MonoGame.Aseprite.Sprites](../)  
**Assembly:** MonoGame.Aseprite

Defines a named sprite

The Sprite class is a general purpose wrapper around a[TextureRegion](../../TextureRegion/) with properties to control how it is rendered.  When creating a Sprite from an [AsepriteFile](../../AsepriteFile/), it represents the image of the frame used to create it.

The most common methods for creating a Sprite will be either by using the[SpriteProcessor](../../Content/Processors/SpriteProcessor/) to create an instance from a frame in your Aseprite File, or by using a [TextureAtlas](../TextureAtlas/) to create a Sprite from one of the regions in the atlas.  An instance can also be created manually using the constructor for a more general purpose use.

```csharp
public class Sprite
```

**Inheritance:** object → Sprite

## Remarks

The [Color](Properties/Color), [Origin](Properties/Origin), [Rotation](Properties/Rotation),[Scale](Properties/Scale), and [LayerDepth](Properties/LayerDepth) are passed automatically to theSpriteBatch when rendering this sprite. For one\-off rendering where you can override the parameter values passed to theSpriteBatch, you can render the[TextureRegion](Properties/TextureRegion) instead.\#\#\# Performance Considerations

If you plan to create multiple Sprite instances from various frames in your Aseprite file, consider first creating a [TextureAtlas](../TextureAtlas/), then creating each Sprite instance using the [TextureAtlas](../TextureAtlas/).  By doing this, you will be generating a single sourceTexture2D for the [TextureAtlas](../TextureAtlas/).  EachSprite that is then created from the [TextureAtlas](../TextureAtlas/) will be references the single source Texture2D instead of separate Texture2D instances perSprite.

This is beneficial because it reduces the amount of texture swapping done on theSpriteBatch when rendering the Spriteinstances.

## Constructors

| Name                                                                              | Description                                     |
| --------------------------------------------------------------------------------- | ----------------------------------------------- |
| [Sprite(string, Texture2D)](constructors/#spritestring-texture2d)         | Initializes a new instance of the Sprite class. |
| [Sprite(string, TextureRegion)](constructors/#spritestring-textureregion) | Initializes a new instance of the Sprite class. |

## Properties

| Name                                               | Description                                                                                              |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Color](Properties/Color)                       | Gets or Sets the color mask to apply when rendering this Sprite.                                         |
| [FlipHorizontally](Properties/FlipHorizontally) | Gets or Sets a value that indicates whether to flip this Sprite horizontally when rendering.             |
| [FlipVertically](Properties/FlipVertically)     | Gets or Sets a value that indicates whether to flip this Sprite vertically when rendering.               |
| [Height](Properties/Height)                     | Gets the height, in pixels, of this Sprite                                                               |
| [IsVisible](Properties/IsVisible)               | Gets or Sets a value that indicates if this Sprite is visible and can be rendered.                       |
| [LayerDepth](Properties/LayerDepth)             | Gets or Sets the layer depth to render this Sprite at.                                                   |
| [Name](Properties/Name)                         | Gets the name assigned to this Sprite.                                                                   |
| [Origin](Properties/Origin)                     | Gets or Sets the x\- and y\-coordinate point of origin to apply when rendering this Sprite.              |
| [OriginX](Properties/OriginX)                   | Gets or Sets the x\-coordinate point of origin to apply when rendering this Sprite.                      |
| [OriginY](Properties/OriginY)                   | Gets or Sets the y\-coordinate point of origin to apply when rendering this Sprite.                      |
| [Rotation](Properties/Rotation)                 | Gets or Sets the rotation, in radians, to apply when rendering this Sprite.                              |
| [Scale](Properties/Scale)                       | Gets or Sets the x\- and y\-axis scale factor to use when rendering this Sprite.                         |
| [ScaleX](Properties/ScaleX)                     | Gets or Sets the x\-axis scale factor to use when rendering this Sprite.                                 |
| [ScaleY](Properties/ScaleY)                     | Gets or Sets the y\-axis scale factor to use when rendering this Sprite.                                 |
| [SpriteEffects](Properties/SpriteEffects)       | Gets or Sets the SpriteEffects to apply for vertical and horizontal flipping when rendering this Sprite. |
| [TextureRegion](Properties/TextureRegion)       | Gets the source [TextureRegion](Properties/TextureRegion) of this Sprite.                             |
| [Transparency](Properties/Transparency)         | Gets or Sets the level of transparency, between 0.0f, and 1.0f, to apply when rendering thisSprite.      |
| [Width](Properties/Width)                       | Gets the width, in pixels, of this Sprite                                                                |

## Methods

| Name                                                     | Description                                                                                               |
| -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [Draw(SpriteBatch, Vector2)](Methods/Draw)            | Renders this Sprite.                                                                                      |
| [FromRaw(GraphicsDevice, RawSprite)](Methods/FromRaw) | Creates a new instance of the Sprite class from the given [RawSprite](../../RawTypes/RawSprite/). |

## Example

The following example demonstrates how to create a Sprite using a[SpriteProcessor](../../Content/Processors/SpriteProcessor/).

```cs
//  Load an Aseprite file
AsepriteFile aseFile = AsepriteFile.Load("path-to-file");
//  Use the SpriteProcessor to create a Sprite
Sprite sprite = SpriteProcessor.Process(GraphicsDevice, aseFile, frameIndex: 0);
```

The following example demonstrates how to create a Sprite from a [TextureAtlas](../TextureAtlas/).

```cs
//  Load an Aseprite File
AsepriteFile aseFile = AsepriteFile.Load("path-to-file")
//  Create a TextureAtlas from the AsepriteFile using the TextureAtlasProcessor
TextureAtlas atlas = TextureAtlasProcessor.Process(GraphicsDevice, aseFile);
//  Create a Sprite from region 0 in the TextureAtlas
Sprite sprite = atlas.CreateSprite(regionIndex: 0);
```

The following example demonstrates how to create a Sprite from a [SpriteSheet](../SpriteSheet/).

```cs
//  Load an Aseprite File
AsepriteFile aseFile = AsepriteFile.Load("path-to-file")
//  Create a SpriteSheet from the AsepriteFile using the SpriteSheetProcessor
SpriteSheet spriteSheet = SpriteSheetProcessor.Process(GraphicsDevice, aseFile);
//  Create a Sprite from region 0 in the SpriteSheet
Sprite sprite = spriteSheet.CreateSprite(regionIndex: 0);
```

## See Also

- [SpriteProcessor](../../Content/Processors/SpriteProcessor/)
- [SpriteSheet](../SpriteSheet/)
- [TextureAtlas](../TextureAtlas/)
- [TextureRegion](Properties/TextureRegion)
- Texture2D
- SpriteBatch


