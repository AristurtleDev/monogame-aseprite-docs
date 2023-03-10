---
title: Tilemap Class
sidebar_label: Tilemap

---

**Namespace:** [MonoGame.Aseprite.Tilemaps](../)  
**Assembly:** MonoGame.Aseprite

Defines a Tilemap with zero or more [TilemapLayer](../TilemapLayer/) elements.

```csharp
public sealed class Tilemap : IEnumerable<TilemapLayer>, IEnumerable
```

**Inheritance:** object → Tilemap

**Implements:** IEnumerable\<[TilemapLayer](../TilemapLayer/)\>,IEnumerable

## Constructors

| Name                                     | Description                                      |
| ---------------------------------------- | ------------------------------------------------ |
| [Tilemap(string)](Constructors/) | Initializes a new instance of the Tilemap class. |

## Properties

| Name                                   | Description                                                                                 |
| -------------------------------------- | ------------------------------------------------------------------------------------------- |
| [LayerCount](Properties/LayerCount.md) | Gets the total number of [TilemapLayer](../TilemapLayer/) elements in this Tilemap. |
| [Name](Properties/Name.md)             | Gets the name assigned to this Tilemap.                                                     |

## Indexers

| Name                                          | Description                                                                                        |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Item\[int\]](Indexers/Item.md#itemint)       | Gets the [TilemapLayer](../TilemapLayer/) element at the specified index in this Tilemap.  |
| [Item\[string\]](Indexers/Item.md#itemstring) | Gets the [TilemapLayer](../TilemapLayer/) element with the specified name in this Tilemap. |

## Methods

| Name                                                                                                             | Description                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AddLayer(TilemapLayer)](Methods/AddLayer.md)                                                                    | Adds the given [TilemapLayer](../TilemapLayer/) element to this Tilemap.                                                                                                                         |
| [Clear()](Methods/Clear.md)                                                                                      | Removes all [TilemapLayer](../TilemapLayer/) elements from this Tilemap.                                                                                                                         |
| [CreateLayer(string, Tileset, int, int, Vector2)](Methods/CreateLayer.md)                                        | Creates a new [TilemapLayer](../TilemapLayer/) element and adds it to this Tilemap.                                                                                                              |
| [Draw(SpriteBatch, Vector2, Color)](Methods/Draw.md#drawspritebatch-vector2-color)                               | Draws this Tilemap using the SpriteBatch.                                                                                                                                                                |
| [Draw(SpriteBatch, Vector2, Color, Vector2, float)](Methods/Draw.md#drawspritebatch-vector2-color-vector2-float) | Draws a Tilemap using this SpriteBatch.                                                                                                                                                                  |
| [Draw(SpriteBatch, Vector2, Color, float, float)](Methods/Draw.md#drawspritebatch-vector2-color-float-float)     | Draws this Tilemap using the SpriteBatch.                                                                                                                                                                |
| [FromRaw(GraphicsDevice, RawTilemap)](Methods/FromRaw.md)                                                        | Creates a new instance of the Tilemap class from the given [RawTilemap](../../RawTypes/RawTilemap/).                                                                                             |
| [GetEnumerator()](Methods/GetEnumerator.md)                                                                      | Returns an enumerator used to iterate through all of the [TilemapLayer](../TilemapLayer/) elements in this Tilemap.  The order of elements in the enumeration is from bottom layer to top layer. |
| [GetLayer(int)](Methods/GetLayer.md#getlayerint)                                                                 | Get the [TilemapLayer](../TilemapLayer/) element at the specified index in this Tilemap.                                                                                                         |
| [GetLayer(string)](Methods/GetLayer.md#getlayerstring)                                                           | Gets the [TilemapLayer](../TilemapLayer/) element with the specified name in this Tilemap.                                                                                                       |
| [RemoveLayer(TilemapLayer)](Methods/RemoveLayer.md#removelayertilemaplayer)                                      | Removes the given [TilemapLayer](../TilemapLayer/) element from this Tilemap.                                                                                                                    |
| [RemoveLayer(int)](Methods/RemoveLayer.md#removelayerint)                                                        | Removes the [TilemapLayer](../TilemapLayer/) element at the specified index in this Tilemap.                                                                                                     |
| [RemoveLayer(string)](Methods/RemoveLayer.md#removelayerstring)                                                  | Removes the [TilemapLayer](../TilemapLayer/) element with the specified name from this Tilemap.                                                                                                  |
| [TryGetLayer(int, TilemapLayer)](Methods/TryGetLayer.md#trygetlayerint-tilemaplayer)                             | Get the [TilemapLayer](../TilemapLayer/) element at the specified index in this Tilemap.                                                                                                         |
| [TryGetLayer(string, TilemapLayer)](Methods/TryGetLayer.md#trygetlayerstring-tilemaplayer)                       | Gets the [TilemapLayer](../TilemapLayer/) element with the specified name in this Tilemap.                                                                                                       |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
