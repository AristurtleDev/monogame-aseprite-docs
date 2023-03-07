---
title: TextureRegion Class
sidebar_label: TextureRegion

---

**Namespace:** [MonoGame.Aseprite](../)  
**Assembly:** MonoGame.Aseprite

Defines a named rectangular region that represents the location and extents of a region within a source texture.

```csharp
public class TextureRegion
```

**Inheritance:** object → TextureRegion

## Constructors

| Name                                                                 | Description                                            |
| -------------------------------------------------------------------- | ------------------------------------------------------ |
| [TextureRegion(string, Texture2D, Rectangle)](Constructors/) | Initializes a new instance of the TextureRegion class. |

## Properties

| Name                             | Description                                                                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bounds](Properties/Bounds.md)   | Gets the rectangular bounds that define the location and width and height extents, in pixels, of the region within the source texture that is represented by this TextureRegion. |
| [Name](Properties/Name.md)       | Gets the name assigned to this TextureRegion.                                                                                                                                    |
| [Texture](Properties/Texture.md) | Gets the source texture used by this TextureRegion.                                                                                                                              |

## Methods

| Name                                                                                                                                                                        | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [CreateNinePatchSlice(string, Rectangle, Rectangle, Vector2, Color)](Methods/CreateNinePatchSlice.md)                                                                       | Creates and adds a new [NinePatchSlice](../NinePatchSlice/) element to this TextureRegion.                    |
| [CreateSlice(string, Rectangle, Vector2, Color)](Methods/CreateSlice.md)                                                                                                    | Creates and adds a new [Slice](../Slice/) element to this TextureRegion.                                      |
| [Draw(SpriteBatch, Rectangle, Color)](Methods/Draw.md#drawspritebatch-rectangle-color)                                                                                      | Draws this TextureRegion instance using the SpriteBatch provided.                                                     |
| [Draw(SpriteBatch, Rectangle, Color, float, Vector2, SpriteEffects, float)](Methods/Draw.md#drawspritebatch-rectangle-color-float-vector2-spriteeffects-float)              | Draws this TextureRegion using the SpriteBatch provided.                                                              |
| [Draw(SpriteBatch, Vector2, Color)](Methods/Draw.md#drawspritebatch-vector2-color)                                                                                          | Draws this TextureRegion instance using the SpriteBatch provided.                                                     |
| [Draw(SpriteBatch, Vector2, Color, float, Vector2, Vector2, SpriteEffects, float)](Methods/Draw.md#drawspritebatch-vector2-color-float-vector2-vector2-spriteeffects-float) | Draws this TextureRegion using the SpriteBatch provided.                                                              |
| [Draw(SpriteBatch, Vector2, Color, float, Vector2, float, SpriteEffects, float)](Methods/Draw.md#drawspritebatch-vector2-color-float-vector2-float-spriteeffects-float)     | Draws this TextureRegion using the SpriteBatch provided.                                                              |
| [GetSlice(string)](Methods/GetSlice.md#getslicestring)                                                                                                                      | Returns the [Slice](../Slice/) element with the specified name from this TextureRegion.                       |
| [GetSlice\<T\>(string)](Methods/GetSlice.md#getslicetstring)                                                                                                                | Returns the [Slice](../Slice/) element with the specified name from this TextureRegion as the type specified. |
| [RemoveAllSlices()](Methods/RemoveAllSlices.md)                                                                                                                             | Removes all [Slice](../Slice/) elements from this TextureRegion.                                              |
| [RemoveSlice(string)](Methods/RemoveSlice.md)                                                                                                                               | Removes the [Slice](../Slice/) element with the specified name from this TextureRegion.                       |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
