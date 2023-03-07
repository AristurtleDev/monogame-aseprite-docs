---
title: TextureAtlas Class
sidebar_label: TextureAtlas

---

**Namespace:** [MonoGame.Aseprite.Sprites](../)  
**Assembly:** MonoGame.Aseprite

Defines a TextureAtlas with a source image and zero or more [TextureRegion](../../TextureRegion/) elements.

```csharp
public class TextureAtlas : IEnumerable<TextureRegion>, IEnumerable
```

**Inheritance:** object → TextureAtlas

**Implements:** IEnumerable\<[TextureRegion](../../TextureRegion/)\>,IEnumerable

## Constructors

| Name                                                     | Description                                           |
| -------------------------------------------------------- | ----------------------------------------------------- |
| [TextureAtlas(string, Texture2D)](Constructors/) | Initializes a new instance of the TextureAtlas class. |

## Properties

| Name                                     | Description                                                                                           |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [Name](Properties/Name.md)               | G   ets the name assigned to this TextureAtlas.                                                       |
| [RegionCount](Properties/RegionCount.md) | Gets the total number of [TextureRegion](../../TextureRegion/) elements in this TextureAtlas. |
| [Texture](Properties/Texture.md)         | Gets the source image of this TextureAtlas.                                                           |

## Indexers

| Name                                          | Description                                                                                                  |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [Item\[int\]](Indexers/Item.md#itemint)       | Gets the [TextureRegion](../../TextureRegion/) element at the specified index in this TextureAtlas.  |
| [Item\[string\]](Indexers/Item.md#itemstring) | Gets the [TextureRegion](../../TextureRegion/) element with the specified name in this TextureAtlas. |

## Methods

| Name                                                                                                   | Description                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Clear()](Methods/Clear.md)                                                                            | Removes all [TextureRegion](../../TextureRegion/) elements from this TextureAtlas.                                                                                                                                              |
| [ContainsRegion(string)](Methods/ContainsRegion.md)                                                    | Returns a value that indicates whether this TextureAtlas contains a [TextureRegion](../../TextureRegion/) element with the specified name.                                                                                      |
| [CreateRegion(string, Point, Point)](Methods/CreateRegion.md#createregionstring-point-point)           | Creates a new [TextureRegion](../../TextureRegion/) and adds it to this TextureAtlas.                                                                                                                                           |
| [CreateRegion(string, Rectangle)](Methods/CreateRegion.md#createregionstring-rectangle)                | Creates a new [TextureRegion](../../TextureRegion/) and adds it to this TextureAtlas.                                                                                                                                           |
| [CreateRegion(string, int, int, int, int)](Methods/CreateRegion.md#createregionstring-int-int-int-int) | Creates a new [TextureRegion](../../TextureRegion/) and adds it to this TextureAtlas.                                                                                                                                           |
| [CreateSprite(int)](Methods/CreateSprite.md#createspriteint)                                           | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/) at the specified index in thisTextureAtlas.                                                                                           |
| [CreateSprite(string)](Methods/CreateSprite.md#createspritestring)                                     | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/) with the specified name in thisTextureAtlas.                                                                                          |
| [CreateSprite(string, int)](Methods/CreateSprite.md#createspritestring-int)                            | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/) at the specified index in thisTextureAtlas.                                                                                           |
| [CreateSprite(string, string)](Methods/CreateSprite.md#createspritestring-string)                      | Creates a new [Sprite](../Sprite/) from the [TextureRegion](../../TextureRegion/)  with the specified name in thisTextureAtlas.                                                                                         |
| [FromRaw(GraphicsDevice, RawTextureAtlas)](Methods/FromRaw.md)                                         | Creates a new instance of the TextureAtlas class from the given [RawTextureAtlas](../../RawTypes/RawTextureAtlas/).                                                                                                             |
| [GetEnumerator()](Methods/GetEnumerator.md)                                                            | Returns an enumerator that iterates each [TextureRegion](../../TextureRegion/) element in this TextureAtlas.                                                                                                                    |
| [GetIndexOfRegion(string)](Methods/GetIndexOfRegion.md)                                                | Returns the index of the [TextureRegion](../../TextureRegion/) element with the specified name in this TextureAtlas.                                                                                                            |
| [GetRegion(int)](Methods/GetRegion.md#getregionint)                                                    | Gets the [TextureRegion](../../TextureRegion/) element at the specified index in this TextureAtlas.                                                                                                                             |
| [GetRegion(string)](Methods/GetRegion.md#getregionstring)                                              | Gets the [TextureRegion](../../TextureRegion/) element with the specified name in this TextureAtlas.                                                                                                                            |
| [GetRegions(int\[\])](Methods/GetRegions.md#getregionsint)                                             | Gets a new List\<T\> of all [TextureRegion](../../TextureRegion/) elements at the specified indexes in  this TextureAtlas. Order of the elements in the collection returned is the same as the order  of the indexes specified. |
| [GetRegions(string\[\])](Methods/GetRegions.md#getregionsstring)                                       | Gets a new List\<T\> of all [TextureRegion](../../TextureRegion/) elements with the specified names in  this TextureAtlas. Order of the elements in the collection returned is the same as the order  of names specified.       |
| [RemoveRegion(int)](Methods/RemoveRegion.md#removeregionint)                                           | Removes the [TextureRegion](../../TextureRegion/) element at the specified index from this TextureAtlas.                                                                                                                        |
| [RemoveRegion(string)](Methods/RemoveRegion.md#removeregionstring)                                     | Removes the [TextureRegion](../../TextureRegion/) element with the specified name from this TextureAtlas.                                                                                                                       |
| [TryGetRegion(int, TextureRegion)](Methods/TryGetRegion.md#trygetregionint-textureregion)              | Gets the [TextureRegion](../../TextureRegion/) element at the specified index in this TextureAtlas.                                                                                                                             |
| [TryGetRegion(string, TextureRegion)](Methods/TryGetRegion.md#trygetregionstring-textureregion)        | Gets the [TextureRegion](../../TextureRegion/) element with the specified name in this TextureAtlas.                                                                                                                            |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
