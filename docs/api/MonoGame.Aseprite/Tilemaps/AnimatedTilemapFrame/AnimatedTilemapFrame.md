---
title: AnimatedTilemapFrame Class
sidebar_label: AnimatedTilemapFrame

---

**Namespace:** [MonoGame.Aseprite.Tilemaps](../)  
**Assembly:** MonoGame.Aseprite

Defines a frame of animation in an [AnimatedTilemap](../AnimatedTilemap/), containing zero or more [TilemapLayer](../TilemapLayer/) elements.

```csharp
public sealed class AnimatedTilemapFrame : IEnumerable<TilemapLayer>, IEnumerable
```

**Inheritance:** object → AnimatedTilemapFrame

**Implements:** IEnumerable\<[TilemapLayer](../TilemapLayer/)\>,IEnumerable

## Constructors

| Name                                                    | Description                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------- |
| [AnimatedTilemapFrame(TimeSpan)](Constructors/) | Initializes a new instance of the AnimatedTilemapFrame class. |

## Properties

| Name                                   | Description                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Duration](Properties/Duration.md)     | Gets the duration of this AnimatedTilemapFrame.                                                          |
| [LayerCount](Properties/LayerCount.md) | Gets the total number of [TilemapLayer](../TilemapLayer/) elements in this AnimatedTilemapFrame. |

## Indexers

| Name                                          | Description                                                                                                     |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [Item\[int\]](Indexers/Item.md#itemint)       | Gets the [TilemapLayer](../TilemapLayer/) element at the specified index in this AnimatedTilemapFrame.  |
| [Item\[string\]](Indexers/Item.md#itemstring) | Gets the [TilemapLayer](../TilemapLayer/) element with the specified name in this AnimatedTilemapFrame. |

## Methods

| Name                                                                                       | Description                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AddLayer(TilemapLayer)](Methods/AddLayer.md)                                              | Adds the given [TilemapLayer](../TilemapLayer/) element to this AnimatedTilemapFrame.                                                                                                                         |
| [Clear()](Methods/Clear.md)                                                                | Removes all [TilemapLayer](../TilemapLayer/) elements from this AnimatedTilemapFrame.                                                                                                                         |
| [CreateLayer(string, Tileset, int, int, Vector2)](Methods/CreateLayer.md)                  | Creates a new [TilemapLayer](../TilemapLayer/) element and adds it to this AnimatedTilemapFrame.                                                                                                              |
| [GetEnumerator()](Methods/GetEnumerator.md)                                                | Returns an enumerator used to iterate through all of the [TilemapLayer](../TilemapLayer/) elements in this AnimatedTilemapFrame. The order of elements in the enumeration is from bottom layer to top  layer. |
| [GetLayer(int)](Methods/GetLayer.md#getlayerint)                                           | Gets the [TilemapLayer](../TilemapLayer/) element at the specified index in this AnimatedTilemapFrame.                                                                                                        |
| [GetLayer(string)](Methods/GetLayer.md#getlayerstring)                                     | Gets the [TilemapLayer](../TilemapLayer/) element with the specified name in this AnimatedTilemapFrame.                                                                                                       |
| [RemoveLayer(TilemapLayer)](Methods/RemoveLayer.md#removelayertilemaplayer)                | Removes the given [TilemapLayer](../TilemapLayer/) element from this AnimatedTilemapFrame.                                                                                                                    |
| [RemoveLayer(int)](Methods/RemoveLayer.md#removelayerint)                                  | Removes the [TilemapLayer](../TilemapLayer/) element at the specified index in this AnimatedTilemapFrame.                                                                                                     |
| [RemoveLayer(string)](Methods/RemoveLayer.md#removelayerstring)                            | Removes the [TilemapLayer](../TilemapLayer/) element with the specified name from this AnimatedTilemapFrame.                                                                                                  |
| [TryGetLayer(int, TilemapLayer)](Methods/TryGetLayer.md#trygetlayerint-tilemaplayer)       | Get the [TilemapLayer](../TilemapLayer/) element at the specified index in this AnimatedTilemapFrame.                                                                                                         |
| [TryGetLayer(string, TilemapLayer)](Methods/TryGetLayer.md#trygetlayerstring-tilemaplayer) | Gets the [TilemapLayer](../TilemapLayer/) element with the specified name in this AnimatedTilemapFrame.                                                                                                       |

___

*Documentation generated by [MdDocs](https://github.com/ap0llo/mddocs)*
